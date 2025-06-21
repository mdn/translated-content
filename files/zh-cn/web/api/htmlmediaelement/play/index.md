---
title: HTMLMediaElement：play() 方法
slug: Web/API/HTMLMediaElement/play
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.play()`** 方法会尝试播放媒体。这个方法返回一个 {{jsxref("Promise")}}，当媒体成功开始播放时被解决（resolved）。当播放因为任何原因失败时，这个 promise 被拒绝（rejected）。

## 语法

```js-nolint
play()
```

### 参数

无

### 返回值

一个 {{jsxref("Promise")}}，当媒体成功开始播放时被解决，当播放因为任何原因失败时则被被拒绝。

> [!NOTE]
> 旧版本的浏览器可能不会从 `play()` 返回值。

### 异常

当 promise 接收到一个异常名称作为其唯一输入参数时（相对于传统的异常抛出），promise 的拒绝处理程序会被调用。可能的异常如下：

- `NotAllowedError`
  - : 用户代理（浏览器）或操作系统在当前上下文或当前情境下不允许媒体播放。例如，这会发生在浏览器要求用户显式按下播放按钮才播放媒体时。
- `NotSupportedError`
  - : 媒体源（可能是{{domxref("MediaStream")}}、{{domxref("MediaSource")}}、{{domxref("Blob")}} 或 {{domxref("File")}} 等）不是一个支持的媒体格式。

也可能报告其他异常，取决于浏览器的实现细节，媒体播放器的实现等等。

## 使用说明

虽然“autoplay”这个词常常被用于描述当媒体加载完成时立即开始播放，浏览器的自动播放策略其实也应用于脚本驱动的媒体播放，包括调用 `play()`。

如果 {{Glossary("user agent")}} 被设置为不允许自动或脚本驱动的媒体播放，调用 `play()` 会导致返回的 promise 被立即以 `NotAllowedError` 拒绝。网页应该对这种情况做好准备。举个例子，一个网页不应该假定播放已经自动开始而直接展示相应的用户界面，而应该在返回的 promise 被解决或拒绝后再更新用户界面。更多信息参见 [示例](#示例)。

> **备注：** `play()` 方法可能会让用户被询问是否给予播放媒体的权限，这可能会使返回的 promise 延迟解决。你应该确保你的代码不需要即时响应。

关于自动播放和禁止自动播放的更多深度内容，参见我们的文章 [Autoplay guide for media and Web Audio APIs](/zh-CN/docs/Web/Media/Guides/Autoplay)。

## 示例

这个例子展示了如何确认播放已经开始以及如何优雅地处理自动播放被禁止：

```js
let videoElem = document.getElementById("video");
let playButton = document.getElementById("playbutton");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

async function playVideo() {
  try {
    await videoElem.play();
    playButton.classList.add("playing");
  } catch (err) {
    playButton.classList.remove("playing");
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.classList.remove("playing");
  }
}
```

在这个例子中，视频的播放由 [`async`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) `playVideo()` 函数控制。函数尝试播放视频，如果播放成功，将 `playButton` 元素的类名称设为 `"playing"`。如果播放失败，去除 `playButton` 元素的类名称，恢复其原来的样式。通过监视 `play()` 返回的 {{jsxref("Promise")}} 是被解决还是被拒绝以保证播放按钮的外观与实际的播放状态相匹配。

上述代码开始执行时，先获取 {{HTMLElement("video")}} 元素和用于切换播放、暂停的 {{HTMLElement("button")}} 元素的引用。在切换按钮上添加 [`click`](/zh-CN/docs/Web/API/Element/click_event) 事件的处理程序。最后调用 `playVideo()` 尝试自动开始播放。

你可以在 [这里](https://media-play-promise.glitch.me/) 查看或修改这个例子。

## 规范

{{Specifications}}

> [!NOTE]
> WHATWG 版本和 W3C 版本的规范不一样（2016 年 4 月 20 日），一个返回 {{jsxref("Promise")}}，一个不返回。

## 浏览器兼容性

{{Compat}}

## 参见

- [Web media technologies](/zh-CN/docs/Web/Media)
- Learning: [Video and audio content](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Autoplay guide for media and Web Audio APIs](/zh-CN/docs/Web/Media/Guides/Autoplay)
- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
