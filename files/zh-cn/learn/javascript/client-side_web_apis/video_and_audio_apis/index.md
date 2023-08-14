---
title: 视频和音频 API
slug: Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}

HTML5 提供了用于在文档中嵌入富媒体的元素 — {{htmlelement("video")}}和{{htmlelement("audio")}} — 这些元素通过自带的 API 来控制视频或音频的播放，定位进度等。本文将向你展示如何执行一些常见的任务，如创建自定义播放控件。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        JavaScript 基础（见<a href="/zh-CN/docs/Learn/JavaScript/First_steps"
          >JavaScript 第一步</a
        >，<a href="/zh-CN/docs/learn/JavaScript/Building_blocks"
          >创建 JavaScript 代码块</a
        >，<a href="/zh-CN/docs/Learn/JavaScript/Objects">JavaScript 对象入门</a
        >），<a
          href="/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Web API 简介</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习如何通过浏览器 API 来控制视频和音频的播放。</td>
    </tr>
  </tbody>
</table>

## HTML5 视频和音频

{{htmlelement("video")}}和{{htmlelement("audio")}}元素允许我们把视频和音频嵌入到网页当中。就像我们在[音频和视频内容](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)文中展示的一样，一个典型的实现如下所示：

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Your browser doesn't support HTML5 video. Here is a
    <a href="rabbit320.mp4">link to the video</a> instead.
  </p>
</video>
```

上述代码将会在浏览器内部创建一个如下图所示的视频播放器：

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html", '100%', 380)}}

你可以点击上面的文章链接来查看相关 HTML 元素的所有特性；但在这篇文章中，主要目的是学习我们最感兴趣的[`controls`](/zh-CN/docs/Web/HTML/Element/video#controls)属性，它会启用默认的播放设置。如果没有指定该属性，则播放器中不会显示相关控件：

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

至此，你可能会觉得这个属性作用不大，但是它确实很有优势。使用原生浏览器控件的一个很大的问题在于，它们在各个浏览器中都不相同 — 对于跨浏览器的支持并不是很好！另一个问题是，在大多数浏览器中原生控件难以通过键盘来操作。

你可以通过隐藏本地控件（通过删除 controls 属性），然后使用 HTML，CSS 和 JavaScript 编写自己的代码来解决这两个问题。在下一节中，我们将看到如何通过一些可用的工具来实现。

## HTMLMediaElement API

作为 HTML5 规范的一部分，{{domxref("HTMLMediaElement")}} API 提供允许你以编程方式来控制视频和音频播放的功能—例如 {{domxref("HTMLMediaElement.play()")}}, {{domxref("HTMLMediaElement.pause()")}},等。该接口对{{htmlelement("audio")}}和{{htmlelement("video")}}两个元素都是可用的，因为在这两个元素中要实现的功能几乎是相同的。让我们通过一个例子来一步步演示一些功能。

我们最终的示例（和功能）将会如下所示：

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### 入门

想要使用这个示例的代码来入门，请下载 [media-player-start.zip](https://github.com/mdn/learning-area/raw/main/javascript/apis/video-audio/start/media-player-start.zip) 并解压到你的硬盘上的一个新建目录里。如果想要下载[示例仓库](https://github.com/mdn/learning-area)，它位于 `javascript/apis/video-audio/start/` 路径下。

下载并解压之后，如果你加载这个 HTML，你将会看到一个通过浏览器原生播放控件渲染的非常一般的 HTML5 视频播放器。

#### 探索 HTML

打开 HTML index 文件。你将看到一些功能；HTML 由视频播放器和它的控件所控制：

```plain
<div class="player">
  <video controls>
    <source src="video/sintel-short.mp4" type="video/mp4">
    <source src="video/sintel-short.mp4" type="video/webm">
    <!-- fallback content here -->
  </video>
  <div class="controls">
    <button class="play" data-icon="P" aria-label="play pause toggle"></button>
    <button class="stop" data-icon="S" aria-label="stop"></button>
    <div class="timer">
      <div></div>
      <span aria-label="timer">00:00</span>
    </div>
    <button class="rwd" data-icon="B" aria-label="rewind"></button>
    <button class="fwd" data-icon="F" aria-label="fast forward"></button>
  </div>
</div>
```

- 整个播放器被包装在一个{{htmlelement("div")}}元素之中，所以如果有必要的话，可以把它作为一个单元整体来设置其样式。
- {{htmlelement("video")}}元素层包含两个{{htmlelement("source")}}元素，这样可以根据浏览器来加载其所支持的不同视频格式。
- 控件 HTML 大概是最有趣的：

  - 我们有四个 {{htmlelement("button")}} — play/pause, stop, rewind, and fast forward.
  - 每个`<button>` 都有一个 `class` 名，一个`data-icon` 属性来决定在每个按钮上显示什么图标 (在下一节讲述它是如何工作的), 和一个`aria-label` 属性为每一个按钮提供容易理解的描述，即使我们没有在 tags 内提供可读的标签。当用户关注这些元素时含有`aria-label` 属性的内容也会被讲述人读出来。
  - 有一个设定的计时器 {{htmlelement("div")}}用来报告已经播放的时长。为了好玩，我们提供了两种报告机制 — 一个 {{htmlelement("span")}} 包含了流逝时间的分钟和秒，和一个额外的`<div>` 用来创建一个水平的随着时间增加而增长的进度条。要想了解完成版本看上去是咋样的，[点击查看完成版本](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### 探索 CSS

现在打开 CSS 文件来查看里面的内容。例子中的 CSS 样式并不是很复杂，我们突出了最主要的一部分。首先注意`.controls` 的样式：

```css
.controls {
  visibility: hidden;
  opacity: 0.5;
  width: 400px;
  border-radius: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -200px;
  background-color: black;
  box-shadow: 3px 3px 5px black;
  transition: 1s all;
  display: flex;
}

.player:hover .controls,
player:focus .controls {
  opacity: 1;
}
```

- 我们从设置为`hidden`的自定义控件{{cssxref("visibility")}}开始。稍后在我们的 JavaScript 中，我们将控件设置为 `visible`, 并且从`<video>` 元素中移除`controls` 属性。这是因为，如果 JavaScript 由于某种原因没有加载，用户依然可以使用原生的控件播放视频。
- 默认情况下，我们将控件的`opacity`设置为 0.5 {{cssxref("opacity")}}，这样当您尝试观看视频时，它们就不会分散注意力。只有当您将鼠标悬停/聚焦在播放器上时，控件才会完全不透明。
- 我们使用 Flexbox({{cssxref("display")}}: flex) 布置控制栏内的按钮，以简化操作。

接下来，让我们看看我们的按钮图标：

```css
@font-face {
  font-family: "HeydingsControlsRegular";
  src: url("fonts/heydings_controls-webfont.eot");
  src:
    url("fonts/heydings_controls-webfont.eot?#iefix") format("embedded-opentype"),
    url("fonts/heydings_controls-webfont.woff") format("woff"),
    url("fonts/heydings_controls-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

button:before {
  font-family: HeydingsControlsRegular;
  font-size: 20px;
  position: relative;
  content: attr(data-icon);
  color: #aaa;
  text-shadow: 1px 1px 0px black;
}
```

首先在 CSS 的最上方我们使用 {{cssxref("@font-face")}} 块来导入自定义 Web 字体。这是一种图标字体 —— 字母表中的所有字符都是各种常用图标，你可以尝试在程序中调用。

接下来，我们使用这些内容来显示每个按钮上的图标：

- 我们使用 {{cssxref("::before")}} 选择器在每个 {{htmlelement("button")}} 元素之前显示内容。
- 我们使用 {{cssxref("content")}} 属性将各情况下要显示的内容设置为 [`data-icon`](/zh-CN/docs/Learn/HTML/Howto/Use_data_attributes) 属性的内容。例如在播放按钮的情况下，[`data-icon`](/zh-CN/docs/Learn/HTML/Howto/Use_data_attributes) 包含大写的“P”。
- 我们使用 {{cssxref("font-family")}} 将自定义 Web 字体应用于我们的按钮上。在该字体中“P”对应的是“播放”图标，因此播放按钮上显示“播放”图标。

图标字体非常酷有很多原因 —— 减少 HTTP 请求，因为您不需要将这些图标作为图像文件下载。同时具有出色的可扩展性，以及您可以使用文本属性来设置它们的样式 —— 例如 {{cssxref("color")}} 和 {{cssxref("text-shadow")}}。

最后让我们来看看进度条的 CSS:

```css
.timer {
  line-height: 38px;
  font-size: 10px;
  font-family: monospace;
  text-shadow: 1px 1px 0px black;
  color: white;
  flex: 5;
  position: relative;
}

.timer div {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.2);
  left: 0;
  top: 0;
  width: 0;
  height: 38px;
  z-index: 2;
}

.timer span {
  position: absolute;
  z-index: 3;
  left: 19px;
}
```

- 我们将外部 `.timer` `<div>` 设为 flex：5，这样它占据了控件栏的大部分宽度。我们还设置 {{cssxref("position")}}`: relative`，这样我们就可以根据它的边界方便地定位元素，而不是{{htmlelement("body")}} 元素的边界。
- 内部 `<div>` 绝对定位于外部 `<div>` 的顶部。它的初始宽度为 0，因此根本无法看到它。随着视频的播放，JavaScript 将动态的增加其宽度。
- `<span>` 也绝对位于计时器/进度条 `timer` 栏的左侧附近。
- 我们还对内部 `<div>` 和 `<span>` 定义适当数值的 {{cssxref("z-index")}} ，以便进度条显示在最上层，内部 `<div>` 显示在下层。这样，我们确保我们可以看到所有信息 —— 一个 box 不会遮挡另一个。

### 实现 JavaScript

我们已经有了一个相当完整的 HTML 和 CSS 接口；现在我们只需要调通所有按钮以使控件正常工作。

1. 在与 index.html 文件相同的目录下创建新的 JavaScript 文件。命名为 `custom-player.js`。
2. 在此文件的顶部，插入以下代码：

   ```js
   var media = document.querySelector("video");
   var controls = document.querySelector(".controls");

   var play = document.querySelector(".play");
   var stop = document.querySelector(".stop");
   var rwd = document.querySelector(".rwd");
   var fwd = document.querySelector(".fwd");

   var timerWrapper = document.querySelector(".timer");
   var timer = document.querySelector(".timer span");
   var timerBar = document.querySelector(".timer div");
   ```

   这里我们创建变量来保存对我们想要操作的所有对象的引用。有如下三组：

   - `<video>` 元素，和控制栏。
   - 播放/暂停，停止，快退，和快进按钮。
   - 进度条外面的 `<div>`，数字计时器的 `<span>`，以及内部的 `<div>` 会随着视频播放逐渐变宽。

3. 接下来，在代码的底部插入以下内容：

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   这两行从视频中删除默认浏览器控件，并使自定义控件可见。

#### 播放和暂停视频

让我们实现或许是最重要的控制——播放/暂停按钮。

1. 首先，将以下内容添加到您代码的底部，以便于在单击播放按钮时调用 `playPauseMedia()`函数：

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. 现在定义 `playPauseMedia()` 函数——再次添加以下内容到您代码底部：

   ```js
   function playPauseMedia() {
     if (media.paused) {
       play.setAttribute("data-icon", "u");
       media.play();
     } else {
       play.setAttribute("data-icon", "P");
       media.pause();
     }
   }
   ```

   我们使用 if 语句来检查视频是否暂停。如果视频已暂停，{{domxref("HTMLMediaElement.paused")}} 属性将返回 true，任何视频没有播放的时间，包括第一次加载时处于 0 的时间段都是视频暂停状态。如果已暂停，我们把 play 按钮的 `data-icon` 属性值设置成"u", 用以表示 "暂停" 按钮图标，并且调用{{domxref("HTMLMediaElement.play()")}} 函数播放视频。

   点击第二次，按钮将会切换回去——"播放"按钮图标将会再次显示，并且视频将会被{{domxref("HTMLMediaElement.paused()")}} 函数暂停。

#### 暂停视频

1. 接下来，让我们添加处理视频停止的方法。添加以下的 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 行在你之前添加的内容的下面：

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   [`click`](/zh-CN/docs/Web/API/Element/click_event) 事件很明显——我们想要在点击停止按钮的时候停止视频通过运行我们的 `stopMedia()` 函数。然而我们也希望停止视频当视频播放完成时——由[`ended`](/zh-CN/docs/Web/API/HTMLMediaElement/ended_event) 事件标记，所以我们也会设置一个监听器在此事件触发时运行函数。

2. 接下来，让我们定义 `stopMedia()`—— 在 `playPauseMedia()` 后面添加以下函数：

   ```plain
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute('data-icon','P');
   }
   ```

   在 HTMLMediaElement API 中没有 `stop()` 方法——等效的办法是先用 `pause()` 暂停视频，然后设置{{domxref("HTMLMediaElement.currentTime","currentTime")}} 属性为 0。设置 `currentTime` 的值（单位：秒）将会立刻使视频跳到该位置。

   之后要做的事是把显示的图标设置成“播放”图标。无论视频使暂停还是正在播放，您都希望它随后可以播放。

#### 探索快进和快退

有许多方法可以实现快退和快进功能;在这里，我们向您展示了一种相对复杂的方式，当按意外顺序按下不同的按钮时，它不会中断。

1. 首先，在前面的代码之下添加以下两个[`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener)：

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. 现在转到事件处理函数 - 在以前的函数下面添加以下代码来定义`mediaBackward（）`和`mediaForward（）`：

   ```js
   var intervalFwd;
   var intervalRwd;

   function mediaBackward() {
     clearInterval(intervalFwd);
     fwd.classList.remove("active");

     if (rwd.classList.contains("active")) {
       rwd.classList.remove("active");
       clearInterval(intervalRwd);
       media.play();
     } else {
       rwd.classList.add("active");
       media.pause();
       intervalRwd = setInterval(windBackward, 200);
     }
   }

   function mediaForward() {
     clearInterval(intervalRwd);
     rwd.classList.remove("active");

     if (fwd.classList.contains("active")) {
       fwd.classList.remove("active");
       clearInterval(intervalFwd);
       media.play();
     } else {
       fwd.classList.add("active");
       media.pause();
       intervalFwd = setInterval(windForward, 200);
     }
   }
   ```

   您会注意到，首先我们初始化两个变量 - intervalFwd 和 intervalRwd - 您将在后面发现它们的用途。

   让我们逐步浏览`mediaBackward()`（`mediaForward()`的功能性完全相同，但效果相反）：

   1. 我们清除在快进功能上设置的所有 classes 和 intervals ––这样做是因为如果我们在按下`fwd`（快进）按钮后再按下`rwd`（快退）按钮，就可以取消任何快进的功能并将其替换为快退功能。如果我们试图同时做到这两点，播放器就会暂停。
   2. 使用`if`语句检查是否已在`rwd`按钮上设置了用来指示它已被按下的`active`类。{{domxref("classList")}}是一个非常方便的属性，存在于每个元素上 ––它包含元素上设置的所有类的列表，以及添加/删除类的方法等。使用`classList.contains（）`方法检查列表是否包含`active`类。这将返回布尔值`true/false`结果。
   3. 如果在`rwd`按钮上设置了`active`，我们使用`classList.remove（）`删除它，清除第一次按下按钮时设置的间隔（参见下面的更多解释），并使用{{domxref("HTMLMediaElement.play()")}}取消快退并开始正常播放视频。
   4. 如果尚未设置，使用`classList.add（）`将`active`类添加到`rwd`按钮，使用{{domxref("HTMLMediaElement.pause()")}}暂停视频，然后设置`intervalRwd`变量为 {{domxref("setInterval()")}} 的调用。调用时，`setInterval（）`会创建一个活动间隔，这意味着它每隔 x 毫秒运行一个作为第一个参数给出的函数，其中 x 是第二个参数的值。所以这里我们每 200 毫秒运行一次`windBackward（）`函数 ––我们将使用此函数不断向后滚动（快退动作）视频。要停止 {{domxref("setInterval()")}} 运行，你必须调用 {{domxref("clearInterval()")}}，给它识别要清除的间隔的名称，在本例中是变量名称 intervalRwd（请参阅函数中较早的 clearInterval（）调用）。

3. 最后，对于本节，定义在 setInterval（）调用中需要调用的 windBackward（）和 windForward（）函数。在以上两个函数下面添加以下内容：

   ```js
   function windBackward() {
     if (media.currentTime <= 3) {
       rwd.classList.remove("active");
       clearInterval(intervalRwd);
       stopMedia();
     } else {
       media.currentTime -= 3;
     }
   }

   function windForward() {
     if (media.currentTime >= media.duration - 3) {
       fwd.classList.remove("active");
       clearInterval(intervalFwd);
       stopMedia();
     } else {
       media.currentTime += 3;
     }
   }
   ```

   同样，我们将完成这些功能中的第一个，因为它们几乎完全相同，但彼此相反。在`windBackward（）`中，我们执行以下操作 ––请记住，当间隔处于活动状态时，此函数每 200 毫秒运行一次。

   1. 我们从一个`if`语句开始，该语句检查当前时间是否小于 3 秒，即，如果再倒退三秒将使其超过视频的开始。这会导致奇怪的行为，所以如果是这种情况，我们通过调用`stopMedia（）`来停止视频播放，从倒带按钮中删除`active`类，并清除`intervalRwd`间隔以停止快退功能。如果我们没有做到最后一步，视频将永远保持快退。
   2. 如果当前时间不在视频开始的 3 秒内，我们只需通过执行`media.currentTime-=3`从当前时间中删除三秒。因此，实际上，我们将视频快退 3 秒，每 200 毫秒一次。

#### 更新已用时间

我们要实施的媒体播放器的最后一块是显示的时间。为此，我们将运行一个函数，以便每次在\<video>元素上触发 [`timeupdate`](/zh-CN/docs/Web/API/HTMLMediaElement/timeupdate_event)事件时更新时间显示。此事件触发的频率取决于您的浏览器，CPU 电源等（[see this stackoverflow post](http://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)）。

在代码下方添加`addEventListener（）`行：

```js
media.addEventListener("timeupdate", setTime);
```

现在定义`setTime（）`函数。在文件底部添加以下内容：

```js
function setTime() {
  var minutes = Math.floor(media.currentTime / 60);
  var seconds = Math.floor(media.currentTime - minutes * 60);
  var minuteValue;
  var secondValue;

  if (minutes < 10) {
    minuteValue = "0" + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = "0" + seconds;
  } else {
    secondValue = seconds;
  }

  var mediaTime = minuteValue + ":" + secondValue;
  timer.textContent = mediaTime;

  var barLength =
    timerWrapper.clientWidth * (media.currentTime / media.duration);
  timerBar.style.width = barLength + "px";
}
```

这是一个相当长的函数，所以让我们一步一步地完成它：

1. 首先，我们计算{{domxref("HTMLMediaElement.currentTime")}} 值中的分钟数和秒数。
2. 然后我们初始化另外两个变量 ––`minuteValue`和`secondValue`。
3. 两个`if`语句计算出分钟数和秒数是否小于 10.如果是这样，它们会在类似数值时钟显示工作的方式上为值添加前置的零。
4. 要显示的实际时间值设置为`minuteValue`加上冒号字符加`secondValue`。
5. 计时器的{{domxref("Node.textContent")}}值设置为时间值，因此它显示在 UI 中。
6. 我们应该设置内部`<div>`的长度是通过首先计算外部`<div>`的宽度来计算出来的（任何元素的{{domxref("HTMLElement.clientWidth", "clientWidth")}} 属性将包含它的长度），然后乘以{{domxref("HTMLMediaElement.currentTime")}}除以媒体的总{{domxref("HTMLMediaElement.duration")}}。
7. 我们将内部`<div>`的宽度设置为等于计算的条形长度加上“px”，因此它将设置为该像素数

#### 修复播放和暂停

还有一个问题需要修复。如果在快退或快进功能激活时按下播放/暂停或停止按钮，它们就不起作用。我们如何修复它以便取消`rwd / fwd`按钮功能并按照您的预期播放/停止视频？这很容易解决。

首先，在`stopMedia（）`函数中添加以下行 ––任何地方都可以：

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

现在再次添加相同的行（上面的四行）到`playPauseMedia（）`函数的最开头（就在`if`语句的开始之前）。

此时，您可以删除`windBackward（）`和`windForward（）`函数中的等效行，因为该函数已在`stopMedia（）`函数中实现。

> **备注：** 您还可以通过创建运行这些行的单独函数来进一步提高代码的效率，然后在需要的任何地方调用它，而不是在代码中多次重复这些行。但是我们会把这些留给你自己。

## 小结

我想我们已经在这篇文章中教过你足够多了。使用{{domxref("HTMLMediaElement")}} API 可以为创建简单的视频和音频播放器提供丰富的可用功能，然而这只是冰山一角。有关更复杂和有趣功能的链接，请参阅下面的“另请参阅”部分。

以下是一些有关如何增强我们构建的现有示例的建议：

1. 如果视频是一小时或更长时间（嗯，它不会显示小时;只有几分钟和几秒），当前显示时间会中断。你能弄清楚如何更改示例以使其显示小时数吗？
2. 由于 `<audio>` 元素具有相同的{{domxref("HTMLMediaElement")}}功能，因此您可以轻松地将此播放器用于 `<audio>` 元素。试着这样做。
3. 你能找到一种方法将计时器内部的 `<div>` 元素转换为真正的搜索条/ 滑动条 - 也就是说，当你点击条形图上的某个位置时，它会跳转到视频播放中的相对位置吗？作为提示，您可以通过[`getBoundingClientRect()`](/zh-CN/docs/Web/API/Element/getBoundingClientRect) 方法找出元素左/右和上/下侧的 X 和 Y 值，而且你可以通过 {{domxref("Document")}} 对象调用的 click 事件的事件对象找到鼠标单击的坐标。举个栗子：

   ```js
   document.onclick = function (e) {
     console.log(e.x) + "," + console.log(e.y);
   };
   ```

## 参见

- {{domxref("HTMLMediaElement")}}
- [视频和音频内容](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)— \<video>和\<audio>的简单指南。
- [Audio and video delivery](/zh-CN/docs/Web/Apps/Fundamentals/Audio_and_video_delivery) — detailed guide to delivering media inside the browser, with many tips, tricks, and links to further more advanced tutorials.
- [Audio 与 video 操作](/zh-CN/docs/Web/Apps/Fundamentals/Audio_and_video_manipulation) — 操作 audio 和 video 的详细指南，例如：使用 [Canvas API](/zh-CN/docs/Web/API/Canvas_API), [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)，等等。
- {{htmlelement("video")}} and {{htmlelement("audio")}} reference pages.
- [Media formats supported by the HTML audio and video elements](/zh-CN/docs/Web/HTML/Supported_media_formats).

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}
