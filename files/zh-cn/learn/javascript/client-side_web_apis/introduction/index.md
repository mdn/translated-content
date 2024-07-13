---
title: Web API 简介
slug: Learn/JavaScript/Client-side_web_APIs/Introduction
l10n:
  sourceCommit: 7e97f3c5ada65b6638909bde92881a4b8d46a2b8
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Client-side_Web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}

首先，我们将从一个高层次看看 API - 它们是什么；他们如何工作；如何在代码中使用它们，以及它们是如何组织的。我们也将看看不同主要类别的 API 以及它们的用途。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本计算机知识，对于 HTML 和 CSS 的基本理解（见<a
          href="/zh-CN/docs/Learn/JavaScript/First_steps"
          >JavaScript 第一步</a
        >，<a href="/zh-CN/docs/learn/JavaScript/Building_blocks"
          >创建 JavaScript 代码块</a
        >，<a href="/zh-CN/docs/Learn/JavaScript/Objects">JavaScript 对象入门</a
        >）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>熟悉 API，他们可以做什么，以及如何在代码中使用它们。</td>
    </tr>
  </tbody>
</table>

## 什么是 API?

应用程序接口（API）是基于编程语言构建的结构，让开发者更容易地创建复杂的功能。它们抽象了复杂的代码，并提供一些简单的接口规则直接使用。

来看一个现实中的例子：想想你的房子、公寓或其他住宅的供电方式，如果你想在你的房子里用电，只要把电器的插头插入插座就可以，而不是直接把它连接到电线上——这样做非常低效，而且对于不是电工的人会是困难和危险的。

![两个多插头支架分别插入两个不同的插座插口。每个多插头座的顶部和前侧都有一个插头槽。每个多路插头座可插入两个插头。](plug-socket.png)

_图片来自：[过载插头接口](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) 提供者：Flickr 上的 [The Clear Communication People](https://www.flickr.com/photos/easy-pics/)。_

同样，比如说，编程来显示一些 3D 图形，使用以更高级语言编写的 API（例如 JavaScript 或 Python）将会比直接编写直接控制计算机的 GPU 或其他图形功能的低级代码（比如 C 或 C++）来执行操作要容易得多。

> **备注：** 详细说明请见{{Glossary("API", "术语：API")}}。

### 客户端 JavaScript 中的 API

客户端 JavaScript 中有很多可用的 API。它们本身并不是 JavaScript 语言的一部分，却建立在 JavaScript 语言核心的顶部，为使用 JavaScript 代码提供额外的超强能力。他们通常分为两类：

- **浏览器 API**内置于 Web 浏览器中，能从浏览器和电脑周边环境中提取数据，并用来做有用的复杂的事情。例如 [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API) 为在浏览器中处理音频提供了 JavaScript 结构——获取音轨、改变音量、应用特效等。在后台，浏览器实际上使用了一些复杂的低级代码（如 C++ 或 Rust）来进行实际的音频处理。但同样，这种复杂性已被应用程序接口抽象化。
- **第三方 API**缺省情况下不会内置于浏览器中，通常必须在 Web 中的某个地方获取代码和信息。例如 [Twitter API](https://dev.twitter.com/overview/documentation) 使你能做一些显示最新推文这样的事情，它提供一系列特殊的结构，可以用来请求 Twitter 服务并返回特殊的信息。

![打开 Firefox 浏览器主页时的浏览器截图。默认情况下，浏览器内置了应用程序接口。第三方应用程序接口并非默认内置在浏览器中。要使用它们，必须从网络上的某个地方获取它们的代码和信息。](browser.png)

### JavaScript，API 和其他 JavaScript 工具之间的关系

如上所述，我们讨论了什么是客户端 JavaScript API，以及它们与 JavaScript 语言的关系。让我们回顾一下，使其更清晰，并提及其他 JavaScript 工具的适用位置：

- JavaScript——一种内置于浏览器的高级脚本语言，你可以用来实现 Web 页面/应用中的功能。注意 JavaScript 也可用于其他像 [Node](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction) 这样的编程环境。但现在你不必考虑这些。
- 客户端 API — 内置于浏览器的结构程序，位于 JavaScript 语言顶部，使你可以更容易的实现功能。
- 第三方 API — 置于第三方普通的结构程序（例如 Twitter，Facebook），使你可以在自己的 Web 页面中使用那些平台的某些功能（例如在你的 Web 页面显示最新的 Tweets）。
- JavaScript 库 — 通常是包含具有[特定功能](/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions#Custom_functions)的一个或多个 JavaScript 文件，把这些文件关联到你的 Web 页以快速或授权编写常见的功能。例如包含 jQuery 和 Mootools
- JavaScript 框架 — 从库开始的下一步，JavaScript 框架视图把 HTML、CSS、JavaScript 和其他安装的技术打包在一起，然后用来从头编写一个完整的 Web 应用。库和框架的主要区别在于“控制反转”。调用库中的方法时，开发人员处于控制地位。而框架的控制权则相反：框架调用开发人员的代码。

## API 可以做什么？

在主流浏览器中有大量的可用 API，你可以在代码中做许多的事情。参见 [MDN API 主页](/zh-CN/docs/Web/API)。

### 常见浏览器 API

特别地，你将使用的最常见的浏览器 API 类别（以及我们将更详细地介绍的）是：

- **操作文档的 API** 内置于浏览器中。最明显的例子是 [DOM（文档对象模型）](/zh-CN/docs/Web/API/Document_Object_Model)API，它允许你操作 HTML 和 CSS — 创建、移除以及修改 HTML，动态地将新样式应用到你的页面，等等。每当你看到一个弹出窗口出现在一个页面上，或者显示一些新的内容时，这都是 DOM 的行为。你可以在[操控文档](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)一文中找到关于这些类型的 API 的更多信息。
- **从服务器获取数据的 API** 用于更新网页的一小部分是相当好用的。这个看似很小的细节能对网站的性能和行为产生巨大的影响 — 如果你只是更新一个股票列表或者一些可用的新故事而不需要从服务器重新加载整个页面将使网站或应用程序感觉更加敏感和“活泼”。使这成为可能的 API 包括 [Fetch API](/zh-CN/docs/Web/API/Fetch_API)（虽然旧的代码可能仍然会使用 [`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest)；你也可能会同时遇到描述这个方法的术语**Ajax**）。你可以在[从服务器中获取数据](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)一文找到关于类似的 API 的更多信息。
- **用于绘制和操作图形的 API**目前已被浏览器广泛支持。最流行的是允许你以编程方式更新包含在 HTML {{htmlelement("canvas")}} 元素中的像素数据以创建 2D 和 3D 场景的 [Canvas](/zh-CN/docs/Web/API/Canvas_API) 和 [WebGL](/zh-CN/docs/Web/API/WebGL_API)。例如，你可以绘制矩形或圆形等形状，将图像导入到画布上，然后使用 Canvas API 对其应用滤镜（如棕褐色滤镜或灰度滤镜），或使用 WebGL 创建具有光照和纹理的复杂 3D 场景。这些 API 经常与用于创建动画循环的 API（例如 {{domxref("window.requestAnimationFrame()")}}）和其他 API 一起不断更新诸如动画和游戏之类的场景。
- **[音频和视频 API](/zh-CN/docs/Web/Media/Audio_and_video_delivery)** 例如 {{domxref("HTMLMediaElement")}}、[Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API) 和 [WebRTC](/zh-CN/docs/Web/API/WebRTC_API) 允许你使用多媒体来做一些非常有趣的事情，比如创建用于播放音频和视频的自定义 UI 控件，显示字幕字幕和你的视频，从网络摄像机抓取视频，通过画布操纵（见上），或在网络会议中显示在别人的电脑上，或者添加效果到音轨（如增益、失真、平移等） 。
- **设备 API**基本上是以对网络应用程序有用的方式操作和检索现代设备硬件中的数据的 API。我们已经讨论过访问设备位置数据的地理定位 API，因此你可以在地图上标注你的位置。其他示例还包括通过系统通知（参见 [Notifications API](/zh-CN/docs/Web/API/Notifications_API)）或振动硬件（参见 [Vibration API](/zh-CN/docs/Web/API/Vibration_API)）告诉用户 Web 应用程序有用的更新可用。
- **客户端存储 API**在 Web 浏览器中的使用变得越来越普遍 - 如果你想创建一个应用程序来保存页面加载之间的状态，甚至让设备在处于脱机状态时可用，那么在客户端存储数据将会是非常有用的。例如使用 [Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API) 的简单的键 - 值存储以及使用 [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 的更复杂的表格数据存储。

### 常见第三方 API

第三方 API 种类繁多; 下列是一些比较流行的你可能迟早会用到的第三方 API:

- [Twitter API](https://dev.twitter.com/overview/documentation)，允许你在你的网站上展示你最近的推文等。
- [Google Maps API](https://developers.google.com/maps/)，允许你在网页上对地图进行很多操作（这很有趣，它也是 Google 地图的驱动器）。现在它是一整套完整的，能够胜任广泛任务的 API。其能力已经被[Google Maps API Picker](https://developers.google.com/maps/documentation/api-picker)见证。
- [Facebook API](https://developers.facebook.com/docs/)，允许你将很多 Facebook 生态系统中的功能应用到你的应用并使之受益，比如说它提供了通过 Facebook 账户登录、接受应用内支付、推送有针对性的广告活动等功能。
- [YouTube API](https://developers.google.com/youtube/)，允许你将 Youtube 上的视频嵌入到网站中去，同时提供搜索 Youtube，创建播放列表等众多功能。
- [Pinterest API](https://developers.pinterest.com/)，提供了管理 Pinterest 板和图钉的工具，以便将它们纳入你的网站。
- [Twilio API](https://www.twilio.com/)，为你的应用提供了针对语音通话和视频聊天的框架，以及从你的 app 发送短信息或多媒体信息等诸多功能。
- [Disqus API](https://disqus.com/api/docs/)，提供了一个可集成到网站中的评论平台。
- [Mastodon API](https://docs.joinmastodon.org/api/)，让你以编程方式操作 Mastodon 社交网络的功能。
- [IFTTT API](https://ifttt.com/developers)，允许你通过一个平台集成多个 API。

## API 如何工作？

不同的 JavaScript API 以稍微不同的方式工作，但通常它们具有共同的特征和相似的主题。

### 它们是基于对象的

API 使用一个或多个 [JavaScript 对象](/zh-CN/docs/Learn/JavaScript/Objects)在你的代码中进行交互，这些对象用作 API 使用的数据（包含在对象属性中）的容器以及 API 提供的功能（包含在对象方法中）。

> **备注：** 如果你不熟悉对象如何工作，则应继续学习 [JavaScript 对象](/zh-CN/docs/Learn/JavaScript/Objects) 模块。

让我们回到 Web Audio API 的例子 - 这是一个非常简单的 API，由几个简单的对象组成：

- {{domxref("AudioContext")}}，表示一个可以用于操控浏览器中播放音频的[音频图](/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs)，并且拥有许多可用于操作该音频的方法和属性。
- {{domxref("MediaElementAudioSourceNode")}}，表示一个包含你想要在音频上下文中播放和操控的声音的 {{htmlelement("audio")}} 元素。
- {{domxref("AudioDestinationNode")}}，表示音频的输出目的地，也就是你电脑上的实际输出设备——通常是你的扬声器或耳机。

那么这些对象是如何交互的呢？如果你查看我们的[简单网页音频示例](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html)（[在线运行示例](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)），首先会看到如下的 HTML 代码：

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```
    
首先，我们包含一个 `<audio>` 元素，用于在页面中嵌入一个 MP3 文件。我们没有包含任何默认的浏览器控件。接下来，我们包含一个 {{htmlelement("button")}}，用于播放和停止音乐，以及一个类型为 range 的 {{htmlelement("input")}} 元素，用于在播放时调整音轨的音量。

接下来，我们来看一下这个示例的 JavaScript 代码。

我们首先创建一个 AudioContext 实例，用于在其中操作我们的音轨：

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
```

接下来，我们创建常量来存储对 `<audio>`、`<button>` 和 `<input>` 元素的引用，并使用 {{domxref("AudioContext.createMediaElementSource()")}} 方法创建一个 `MediaElementAudioSourceNode`，表示我们的音频源——也就是将播放的 `<audio>` 元素：

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

接下来，我们添加几个事件处理程序，用于在按钮被按下时在播放和暂停之间切换，并在歌曲播放结束时将显示重置回开始位置：

```js
// 播放/暂停音频
playBtn.addEventListener("click", () => {
  // 确认 context 在 suspended 状态（自动播放策略）
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // 如果音轨处于停止则开始播放
  if (playBtn.getAttribute("class") === "paused") {
    audioElement.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pause";
    // 如果音轨正在播放则停止播放
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElement.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
  }
});

// 如果音轨结束了
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Play";
});
```

> **备注：** 有些人可能会注意到，用于播放和暂停音轨的 `play()` 和 `pause()` 方法并不是 Web Audio API 的一部分；它们是 {{domxref("HTMLMediaElement")}} API 的一部分，这是一个不同但紧密相关的 API。

接下来，我们使用 {{domxref("BaseAudioContext/createGain", "AudioContext.createGain()")}} 方法创建一个 {{domxref("GainNode")}} 对象，可以用于调整通过它的音频的音量，并创建另一个事件处理程序，当滑块值改变时改变音频图的增益（音量）值：

```js
// 音量
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

最后要做的是将音频图中的不同节点连接起来，这是通过每个节点类型上可用的 {{domxref("AudioNode.connect()")}} 方法完成的：

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

音频从源头开始，然后连接到增益节点，以便调整音频的音量。增益节点然后连接到目标节点，以便声音可以在你的电脑上播放（{{domxref("BaseAudioContext/destination", "AudioContext.destination")}} 属性表示你电脑硬件上可用的默认 {{domxref("AudioDestinationNode")}}，例如你的扬声器）。

### 它们有可识别的入口点

在使用 API 时，你应该确保知道 API 的入口点在哪里。在 Web Audio API 中，这非常简单——就是 {{domxref("AudioContext")}} 对象，需要使用它来进行任何音频操作。

文档对象模型（DOM）API 也有一个简单的入口点——其功能通常位于{{domxref("Document")}}对象或你想要以某种方式影响的 HTML 元素实例上，例如：

```js
var em = document.createElement("em"); // 创建一个新的 em 元素
var para = document.querySelector("p"); // 获取现存的一个 p 元素的参考
em.textContent = "Hello there!"; // 为 em 元素设置文本内容
para.appendChild(em); // 将 em 元素放在其中
```

其他 API 具有稍微复杂的入口点，通常涉及为要编写的 API 代码创建特定的上下文。例如，Canvas API 的上下文对象是通过获取要绘制的 {{htmlelement("canvas")}} 元素的引用来创建的，然后调用它的 {{domxref("HTMLCanvasElement.getContext()")}} 方法：

```js
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
```

然后，我们想通过调用内容对象 (它是{{domxref("CanvasRenderingContext2D")}}的一个实例) 的属性和方法来实现我们想要对画布进行的任何操作，例如：

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> **备注：** 你可以在我们的[弹跳球演示中](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html)看到此代码（也可以[在线运行](http://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html)）。

### 它们使用事件来处理状态的变化

我们之前已经在课程中讨论了事件，在我们的[事件介绍](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)一文中详细介绍了客户端 Web 事件是什么以及它们在代码中的用法。如果你还不熟悉客户端 Web API 事件的工作方式，则应继续阅读。

一些 Web API 不包含事件，但有些包含一些事件。当事件触发时，允许我们运行函数的处理程序属性通常在单独的“Event handlers”（事件处理器）部分的参考资料中列出。作为一个简单的例子，[`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest) 对象的实例（每一个实例都代表一个到服务器的 HTTP 请求，来取得某种新的资源）都有很多事件可用，例如 `onload` 事件在成功返回时就触发包含请求的资源，并且现在就可用。

我们已经在我们的 Web Audio 示例中看到了很多事件处理器了。

```js
// 播放/暂停音频
playBtn.addEventListener("click", () => {
  // 确认 context 在 suspended 状态（自动播放策略）
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // 如果音轨处于停止则开始播放
  if (playBtn.getAttribute("class") === "paused") {
    audioElement.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pause";
    // 如果音轨正在播放则停止播放
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElement.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
  }
});

// 如果音轨结束了
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Play";
});
```

### 它们在适当的地方有额外的安全机制

Web API 功能受到与 JavaScript 和其他 Web 技术（例如[同源政策](/zh-CN/docs/Web/Security/Same-origin_policy)）相同的安全考虑 但是他们有时会有额外的安全机制。例如，一些更现代的 Web API 将只能在通过 HTTPS 提供的页面上工作，因为它们正在传输潜在的敏感数据（例如 [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API) 和[推送](/zh-CN/docs/Web/API/Push_API)）。

另外，一旦调用 Web API 请求，用户就可以在你的代码中启用一些 Web API 请求权限。例如，[Notification API](/zh-CN/docs/Web/API/Notifications_API) 使用弹出对话框请求权限：

![浏览器通知 API 提供的弹出式通知对话框截图。mdn.github.io 网站正在请求向用户代理推送通知的权限，用 X 关闭对话框和下拉菜单选项，默认情况下选择 "始终接收通知"。](notification-permission.png)

Web Audio 和 {{domxref("HTMLMediaElement")}} API 受制于一种名为[自动播放策略](/zh-CN/docs/Web/API/Web_Audio_API/Best_practices#自动播放策略)的安全机制。这基本上意味着你不能在页面加载时自动播放音频：你必须允许用户通过按钮等控件启动音频播放。这样做的原因是，自动播放音频通常非常恼人，我们实在不应该让用户忍受它。

> **备注：** 根据浏览器的严格程度，这种安全机制甚至可能会阻止示例在本地运行，也就是说，如果你在浏览器中加载本地示例文件，而不是从网络服务器上运行它的话。在撰写本文时，我们的网络音频 API 示例在 Google Chrome 浏览器上无法本地运行，必须上传到 GitHub 才能运行。

## 总结

至此，你应该对什么是 API、API 如何工作以及在 JavaScript 代码中如何使用 API 有了一定的了解。你可能已经迫不及待地想开始使用特定的 API 做一些有趣的事情了，那就开始吧！接下来，我们将学习使用文档对象模型 (DOM) 操作文档。

{{NextMenu("Learn/JavaScript/Client-side_Web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}
