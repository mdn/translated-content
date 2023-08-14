---
title: 页面可见性 API
slug: Web/API/Page_Visibility_API
---

{{DefaultAPISidebar("Page Visibility API")}}

使用选项卡式浏览，任何给定网页都有可能在后台，因此对用户不可见。页面可见性 API 提供了您可以观察的事件，以便了解文档何时可见或隐藏，以及查看页面当前可见性状态的功能。

> **备注：** 页面可见性 API 对于节省资源和提高性能特别有用，它使页面在文档不可见时避免执行不必要的任务。

当用户最小化窗口或切换到另一个选项卡时，API 会发送[`visibilitychange`](/zh-CN/docs/Web/API/Document/visibilitychange_event)事件，让监听者知道页面状态已更改。你可以检测事件并执行某些操作或行为不同。例如，如果您的网络应用正在播放视频，则可以在用户将标签放入背景时暂停视频，并在用户返回标签时恢复播放。用户不会在视频中丢失位置，视频的音轨不会干扰新前景选项卡中的音频，并且用户在此期间不会错过任何视频。

{{HTMLElement("iframe")}}的可见性状态与父文档相同。使用 CSS 属性（例如{{cssxref("display", "display: none;")}}）隐藏`<iframe>`不会触发可见性事件或更改框架中包含的文档的状态。

### 使用情景

一些例子：

- 网站有图片轮播效果，只有在用户观看轮播的时候，才会自动展示下一张幻灯片。
- 显示信息仪表盘的应用程序不希望在页面不可见时轮询服务器进行更新。
- 页面想要检测是否正在渲染，以便可以准确的计算网页浏览量
- 当设备进入待机模式时，网站想要关闭设备声音（用户按下电源键关闭屏幕）

开发者在过去使用不完善的代理来检测页面的可见性。比如，通过监听 [`blur`](/zh-CN/docs/Web/API/Element/blur_event) 和 [`focus`](/zh-CN/docs/Web/API/Element/focus_event) 事件来了解页面是否处于活动状态，但是它并没有告诉你页面是对用户隐藏的。页面可见性 API 解决了这个问题。

> **备注：** 虽然{{domxref("GlobalEventHandlers.onblur", "onblur")}}和{{domxref("GlobalEventHandlers.onfocus", "onfocus")}}会告诉你用户是否切换窗口，但不一定意味着它是隐藏的。当用户切换选项卡或最小化包含选项卡的浏览器窗口时，页面才会隐藏。

### 制定有助于后台页面性能的策略

在页面可见性 API 之外，用户代理会采取许多策略来减轻后台或隐藏选项卡对性能的影响。这些可能包括：

- 大多数浏览器不会调用被隐藏的标签页或{{ HTMLElement("iframe") }}框架当中{{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}定义的回调函数，这会提升性能并且延长电池的使用寿命。
- 在后台标签页或不活跃的标签页中 {{domxref("setTimeout()")}} 等定时器会受到一定的限制以提升性能。参见[实际延时比设定值更久的原因](/zh-CN/docs/Web/API/setTimeout#实际延时比设定值更久的原因：最小延迟时间)。
- Budget-based background timeout throttling is now available in modern browsers (Firefox 58+, Chrome 57+), placing an additional limit on background timer CPU usage. This operates in a similar way across modern browsers, with the details being as follows:

  - In Firefox, windows in background tabs each have their own time budget in milliseconds — a max and a min value of +50 ms and -150 ms, respectively. Chrome is very similar except that the budget is specified in seconds.
  - Windows are subjected to throttling after 30 seconds, with the same throttling delay rules as specified for window timers (again, see [Reasons for delays longer than specified](/zh-CN/docs/Web/API/setTimeout#实际延时比设定值更久的原因：最小延迟时间)). In Chrome, this value is 10 seconds.
  - Timer tasks are only permitted when the budget is non-negative.
  - Once a timer's code has finished running, the duration of time it took to execute is subtracted from its window's timeout budget.
  - The budget regenerates at a rate of 10 ms per second, in both Firefox and Chrome.

Some processes are exempt from this throttling behavior. In these cases, you can use the Page Visibility API to reduce the tabs' performance impact while they're hidden.

- Tabs which are playing audio are considered foreground and aren't throttled.
- Tabs running code that's using real-time network connections ([WebSockets](/zh-CN/docs/Web/API/WebSockets_API) and [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)) go unthrottled in order to avoid closing these connections timing out and getting unexpectedly closed.
- [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API) processes are also left unthrottled in order to avoid timeouts.

## 示例

看一个 [在线的例子](http://daniemon.com/tech/webapps/page-visibility/)（带声音的视频）

在此例中，当你切换到另一个标签时视频会暂停，当你返回到当前标签时视频会再次播放，代码如下：

```js
// 设置隐藏属性和改变可见属性的事件的名称
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

var videoElement = document.getElementById("videoElement");

// 如果页面是隐藏状态，则暂停视频
// 如果页面是展示状态，则播放视频
function handleVisibilityChange() {
  if (document[hidden]) {
    videoElement.pause();
  } else {
    videoElement.play();
  }
}

// 如果浏览器不支持 addEventListener 或 Page Visibility API 给出警告
if (
  typeof document.addEventListener === "undefined" ||
  typeof document[hidden] === "undefined"
) {
  console.log(
    "This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.",
  );
} else {
  // 处理页面可见属性的改变
  document.addEventListener(visibilityChange, handleVisibilityChange, false);

  // 当视频暂停，设置 title
  // This shows the paused
  videoElement.addEventListener(
    "pause",
    function () {
      document.title = "Paused";
    },
    false,
  );

  // 当视频播放，设置 title
  videoElement.addEventListener(
    "play",
    function () {
      document.title = "Playing";
    },
    false,
  );
}
```

## 属性

- {{domxref("Document.hidden")}} {{ReadOnlyInline}}
  - : 如果页面处于被认为是对用户隐藏状态时返回 true，否则返回 false。
- {{domxref("Document.visibilityState")}} {{ReadOnlyInline}}

  - : 是一个用来展示文档当前的可见性的{{domxref("DOMString")}} 。该属性的值为以下值之一：

    - `visible` : 页面内容至少是部分可见。在实际中，这意味着页面是非最小化窗口的前景选项卡。
    - `hidden` : 页面内容对用户不可见。在实际中，这意味着文档可以是一个后台标签，或是最小化窗口的一部分，或是在操作系统锁屏激活的状态下。
    - `prerender` : 页面内容正在被预渲染且对用户是不可见的 (被 document.hidden 当做隐藏). 文档可能初始状态为 prerender，但绝不会从其他值转为该值。
    - 注释：有的浏览器不支持此功能`unloaded` : 页面正在从内存中卸载。
    - 注释：有的浏览器不支持此功能

- {{domxref("Document.onvisibilitychange")}}
  - : {{domxref("EventListener")}} 提供在[`visibilitychange`](/zh-CN/docs/Web/API/Document/visibilitychange_event) 事件被触发时要调用的代码。

```js
//startSimulation 和 pauseSimulation 在其他地方定义
function handleVisibilityChange() {
  if (document.hidden) {
    pauseSimulation();
  } else {
    startSimulation();
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
```

## 规范

{{Specifications}}

## 浏览器兼容性

### `Document.visibilityState`

{{Compat}}

## 参考

- Description of the [Page Visibility API](http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx) on the IEBlog.
- Description of the [Page Visibility API](http://code.google.com/chrome/whitepapers/pagevisibility.html) by Google
