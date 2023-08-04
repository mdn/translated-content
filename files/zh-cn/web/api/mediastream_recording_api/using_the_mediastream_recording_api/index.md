---
title: 使用 MediaStream 的录制 API
slug: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
---

{{DefaultAPISidebar("MediaStream Recording")}}

[媒体流 (音/视频) 录制 API](/zh-CN/docs/Web/API/MediaStream_Recording_API)让记录音频流或视频流信息更加容易。当使用[navigator.mediaDevices.getUserMedia()"](/zh-CN/docs/Web/API/Navigator/mediaDevices/getUserMedia)时，它提供了一种简单的方式从用户的输入设备中记录信息，并且可以马上在 web apps 中查看记录的信息。音/视频信息都可以被录制，可以分开也可以一块儿。本文针对于提供一个基础引导去让大家了解提供了这个 API 的 MediaRecorder 的界面。

## 示例应用：Web 录音机

![An image of the Web dictaphone sample app - a sine wave sound visualization, then record and stop buttons, then an audio jukebox of recorded tracks that can be played back.](web-dictaphone.png)

为了验证 MediaRecorder API 的基础用法，我们做了一个基于 web 的录音机。它允许你录制音频片段并播放它。通过使用这个 web 音频 API，它甚至给你提供了一个设备音频输入信息的可视化波浪图。我们在本文中专注于录制和回放功能的实现。

你可以看到[实例演示](https://mdn.github.io/web-dictaphone/)或是 Github 上的[源码](https://github.com/mdn/web-dictaphone)（也可以点此[直接下载](https://github.com/mdn/web-dictaphone/archive/master.zip)）。

## CSS goodies

在这个 app 应用中的网页是相当简单的，所以我们不会在这里大费周章；但有几个有点意思的 CSS 样式还是有必要提一下，所以接下来我们会讨论一下。如果你对 CSS 没有半毛钱兴趣并且想对 JavaSdcript 单刀直入，请跳转到下面的[应用基础设置](/zh-CN/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API#Basic_app_setup)章节。

### 保持主界面对显示区域的约束，用 calc() 来忽略设备的尺寸

[calc() 函数](/zh-CN/docs/Web/CSS/calc)是 CSS3 中出现的非常实用的功能之一，虽然现在的用处和这个名称看上去关系不大，但是你很快就会觉得“WC，这个功能为什么我们之前没有？为什么之前 CSS2 的布局会这么蛋疼？”它允许你计算一个 CSS 单元的计算值，在这个过程中混合不同的单元。

例如，在 Web 录音机中，我们有主要的 UI 区域，垂直堆叠。我们先给出前两块地方（头部和控制件）的固定高度：

```css
header {
  height: 70px;
}

.main-controls {
  padding-bottom: 0.7rem;
  height: 170px;
}
```

然而，我们希望使第三块区域（其中包含你可以回放的记录样例）占用任何空间，而不用担心设备的高度。Flexbox 流动样式可能是这里的答案，但是对于这样一个简单的布局来说有点过头了。相反，问题是通过使第三个容器的高度等于父高度的 100%，再减去另两个的高度和填充来解决的。

```css
.sound-clips {
  box-shadow: inset 0 3px 4px rgba(0, 0, 0, 0.7);
  background-color: rgba(0, 0, 0, 0.1);
  height: calc(100% - 240px - 0.7rem);
  overflow: scroll;
}
```

> **备注：** 现在的浏览器对[calc()](/zh-CN/docs/Web/CSS/calc)有着良好的支持，即使是像 IE9 那样的浏览器也可以。

### 用于显示/隐藏的复选框

虽然目前已经做的不错了，但是我们认为我们会提到一个复选框 hack 做法，它滥用了一个事实，你可以点击复选框的[label 标签](/zh-CN/docs/Web/HTML/Element/label)来切换选中/未选中。在 web 录音机中，通过点击屏幕右上角的问号图标来显示/隐藏信息屏幕。首先，在得到[\<label>标签](/zh-CN/docs/Web/HTML/Element/label)之前我们得先设计它的样式，通过设置足够的 Z-index 堆叠次序来确保它总是坐落于其他元素之上，所以它应该是可点击的：

```css
label {
  font-family: "NotoColorEmoji";
  font-size: 3rem;
  position: absolute;
  top: 2px;
  right: 3px;
  z-index: 5;
  cursor: pointer;
}
```

然后，我们隐藏实际的复选框，因为我们不希望它在我们的 UI 上乱七八糟：

```css
input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

接下来，我们将设计信息显示区域（包括在[\<aside>元素](/zh-CN/docs/Web/HTML/Element/aside)中），给它固定的位置，使它不出现在布局流程中去影响主要的 UI 三个户，将它转换为默认的位置，并使它平滑显示/隐藏：

```css
aside {
  position: fixed;
  top: 0;
  left: 0;
  text-shadow: 1px 1px 1px black;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  transition: 0.6s all;
  background-color: #999;
  background-image: linear-gradient(
    to top right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5)
  );
}
```

最后，我们编写一个规则，当选中复选框（当我们点击/聚焦标签）时，相邻的\<aside >元素将使它的水平平移值发生变化，并平滑地转换成视图：

```css
input[type="checkbox"]:checked ~ aside {
  transform: translateX(0);
}
```

## 应用基础设置

我们使用 getUserMedia() 来捕获我们想要的媒体流。我们使用 MediaRecorder API 来记录信息流，并将每个记录的片段输出到生成的[\<audio>元素](/zh-CN/docs/Web/HTML/Element/audio)的源中，以便可以回放。

我们将声明记录和停止按钮变量，[\<article>元素](/zh-CN/docs/Web/HTML/Element/article)将包含生成的音频播放器：

```js
var record = document.querySelector(".record");
var stop = document.querySelector(".stop");
var soundClips = document.querySelector(".sound-clips");
```

最后，在本节中，我们建立了基本的 getUserMedia 结构：

```js
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  console.log("getUserMedia supported.");
  navigator.mediaDevices
    .getUserMedia(
      // constraints - only audio needed for this app
      {
        audio: true,
      },
    )

    // Success callback
    .then(function (stream) {})

    // Error callback
    .catch(function (err) {
      console.log("The following getUserMedia error occured: " + err);
    });
} else {
  console.log("getUserMedia not supported on your browser!");
}
```

整个事件被封装在一个测试中，该测试在运行其他操作之前检查是否支持`getUserMedia`。接下来，我们调用`getUserMedia`，并在其内部定义：

- 限制：只有音频才能被捕获到我们的录音机
- 成功回调：一旦成功完成`getUserMedia`调用，此代码就会运行。
- 错误/失败回调：如果`getUserMedia`调用由于任何原因而失败，则代码将运行。

> **备注：** 下面的所有代码都放在`getUserMedia`成功回调中。

## 捕获媒体流

一旦`getUserMedia`成功创建了媒体流，您可以使用 MediaRecorder() 构造函数创建一个新的媒体记录器实例，并直接传递该媒体流流。这是使用 MediaRecorder API 的入口点。现在，可以使用浏览器的默认编码格式将流捕获到[Blob](/zh-CN/docs/Web/API/Blob)。

```js
var mediaRecorder = new MediaRecorder(stream);
```

为了能够方便的控制音频的录制，{{domxref("MediaRecorder")}}的实例提供了一系列有用的方法和事件，在 Web Dictaphone 这个简单的项目中我们只需使用其中的 2 个方法和一些事件。首先，为了能在点击 Record 按钮的时候开始录音，需要调用{{domxref("MediaRecorder.start()")}}：

```js
record.onclick = function () {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
  record.style.background = "red";
  record.style.color = "black";
};
```

当{{domxref("MediaRecorder")}}正在记录时，调用{{domxref("MediaRecorder.state")}}会返回"recording"。

为了收集录制的数据，我们需要监听{{domxref("mediaRecorder.ondataavailable")}}事件：

```js
var chunks = [];

mediaRecorder.ondataavailable = function (e) {
  chunks.push(e.data);
};
```

浏览器会在需要的时候触发这个事件，我们也可以通过为{{domxref("MediaRecorder.start()")}}传递一个时间（毫秒）来周期性的触发这个事件或者调用{{domxref("MediaRecorder.requestData()")}}来直接触发。

最后在点击 Stop 按钮时我们调用{{domxref("MediaRecorder.stop()")}}方法结束录制，录制所产生的{{domxref("Blob")}}数据会在后面使用。

```js
stop.onclick = function () {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  record.style.background = "";
  record.style.color = "";
};
```

注意，当媒体流结束时会导致录音终止。例如歌曲播放结束，或者用户停止共享他们的麦克风。

## 抓取并使用 blob 数据

在停止录制后，实例的 state 属性会返回"inactive"，stop 事件也被触发。我们需要监听这个事件去处理我们收到的所有录制数据：

```js
mediaRecorder.onstop = function (e) {
  console.log("recorder stopped");

  var clipName = prompt("Enter a name for your sound clip");

  var clipContainer = document.createElement("article");
  var clipLabel = document.createElement("p");
  var audio = document.createElement("audio");
  var deleteButton = document.createElement("button");

  clipContainer.classList.add("clip");
  audio.setAttribute("controls", "");
  deleteButton.innerHTML = "Delete";
  clipLabel.innerHTML = clipName;

  clipContainer.appendChild(audio);
  clipContainer.appendChild(clipLabel);
  clipContainer.appendChild(deleteButton);
  soundClips.appendChild(clipContainer);

  var blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
  chunks = [];
  var audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;

  deleteButton.onclick = function (e) {
    var evtTgt = e.target;
    evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
  };
};
```

我们来看一下上面的代码干了什么：

首先，用一个弹窗来让用户可以为录音提供一个名称。

接下来，我们创建一个如下所示的 HTML 结构，将其插入到我的剪辑容器中，这是一个{{htmlelement("article")}}元素。

```html
<article class="clip">
  <audio controls></audio>
  <p>your clip name</p>
  <button>Delete</button>
</article>
```

之后，我们从录制的音频块中创建组合{{domxref("Blob")}}，并使用 window\.URL.createObjectURL(blob) 创建指向它的对象 URL。然后我们将 {{HTMLElement("audio")}}元素的[`src`](/zh-CN/docs/Web/HTML/Element/audio#src)属性的值设置为对象 URL，以便在音频播放器上按下播放按钮时，它会播放音频。

最后，我们监听删除按钮的 onclick 事件，以便能够删除整个剪辑 HTML 结构。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MediaRecorder API](/zh-CN/docs/Web/API/MediaRecorder_API) landing page
- {{domxref("Navigator.getUserMedia()")}}
- [MediaRecorder API now supported by 65% of your website users](https://addpipe.com/blog/media-recorder-api-is-now-supported-by-65-of-all-desktop-internet-users/)
