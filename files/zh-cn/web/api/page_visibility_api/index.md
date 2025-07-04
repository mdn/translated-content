---
title: 页面可见性 API
slug: Web/API/Page_Visibility_API
---

{{DefaultAPISidebar("Page Visibility API")}}

页面可见性 API 提供了一些事件，你可以通过查看这些事件来了解文档何时变为可见或隐藏，还提供了一些功能来查看页面的当前可见性状态。

通过让页面在文档不可见时避免执行不必要的任务，这对于节省资源和提高性能特别有用。

## 概念与用途

当用户最小化窗口或切换到另一个标签页时，API 会发送 {{domxref("document.visibilitychange_event", "visibilitychange")}} 事件，让监听者知道页面的状态已发生变化。你可以检测到该事件并执行某些操作或采取不同的行为。例如，如果你的 web 应用正在播放视频，当用户将标签页放到后台时，它可以暂停视频，当用户返回标签页时，它又可以恢复播放。用户不会失去在视频中的位置，视频的配乐也不会干扰新的前台标签页中的音频，用户在此期间也不会错过任何视频。

{{HTMLElement("iframe")}} 的可见性状态与父文档相同。使用 CSS 属性（如 {{cssxref("display", "display: none;")}}）隐藏 `<iframe>` 不会触发可见性事件，也不会改变框架内文档的状态。

### 使用情景

让我们来看看页面可见性 API 的几个使用案例。

- 网站有图片轮播效果，只有在用户观看轮播的时候，才会自动展示下一张幻灯片。
- 显示信息仪表盘的应用程序不希望在页面不可见时轮询服务器进行更新。
- 页面想要检测何时正在预渲染，以便可以准确的计算页面浏览量。
- 当设备进入待机模式（用户按下电源键关闭屏幕）时，网站想要关闭设备声音。

开发人员在过去使用不完善的代理来检测这一点。例如，通过观察 window 上的 {{domxref("Window/blur_event", "blur")}} 和 {{domxref("Window/focus_event", "focus")}} 事件，可以帮助你了解页面何时不是活动页面，但这并不能告诉你，页面实际上已被用户隐藏。页面可见性 API 可解决这一问题。

> [!NOTE]
> 虽然 {{domxref("Window.blur_event", "onblur")}} 和 {{domxref("Window.focus_event", "onfocus")}} 会告诉你用户是否切换了窗口，但这并不一定意味着它被隐藏了。只有当用户切换标签页或最小化包含标签页的浏览器窗口时，页面才会被隐藏。

### 制定有助于后台页面性能的策略

在页面可见性 API 之外，用户代理会采取许多策略来减轻后台或隐藏选项卡对性能的影响。这些可能包括：

- 大多数浏览器会停止向后台标签页或隐藏的 {{ HTMLElement("iframe") }} 发送 {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} 回调，以提高性能和电池寿命。
- 在后台或不活动标签页中，{{domxref("Window.setTimeout", "setTimeout()")}} 等计时器会被限流，以帮助提高性能。详情请参阅[延迟时间超过指定时间的原因](/zh-CN/docs/Web/API/Window/setTimeout#延时比指定值更长的原因)。
- 浏览器实施基于预算的后台超时限流。现代浏览器的操作方式大同小异，具体细节如下：
  - 在 Firefox 中，后台标签页中的每个窗口都有自己的时间预算（以毫秒为单位），最大值和最小值分别为 +50 毫秒和 -150 毫秒。Chrome 浏览器与之非常相似，只是预算以秒为单位。
  - 窗口在 30 秒后会受到限流，限流延迟规则与为窗口定时器指定的规则相同（请再次参阅[延迟时间超过指定时间的原因](/zh-CN/docs/Web/API/Window/setTimeout#延时比指定值更长的原因)）。在 Chrome 浏览器中，该值为 10 秒。
  - 只有当预算为非负数时，才允许执行定时器任务。
  - 定时器代码一旦运行完毕，其执行时间就会从窗口的超时预算中扣除。
  - 在 Firefox 和 Chrome 浏览器中，预算以每秒 10 毫秒的速度重新生成。

某些进程不受这种限流行为的影响。在这种情况下，可以使用页面可见性 API 来减少标签页隐藏时对性能的影响。

- 正在播放音频的标签页被视为前台进程，不会被限流。
- 运行使用实时网络连接（[WebSocket](/zh-CN/docs/Web/API/WebSockets_API) 和 [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)）的代码的标签页不会被限流，以避免关闭这些连接时超时和意外关闭。
- 为了避免超时，[IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API) 进程也没有限流。

## 对其他接口的扩展

### 实例属性

页面可见性 API 为 {{domxref("Document")}} 接口添加了以下属性：

- {{domxref("Document.hidden")}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : 如果页面处于隐藏状态，则返回 `true`，否则返回 `false`。
- {{domxref("Document.visibilityState")}} {{ReadOnlyInline}}
  - : 说明文档当前可见性状态的字符串。可能的值有：
    - `visible`
      - : 页面内容至少部分可见。在实践中，这意味着页面是非最小化窗口的前景选项卡。
    - `hidden`
      - : 页面内容对用户不可见，原因可能是文档标签页在后台或属于最小化窗口的一部分，也可能是设备屏幕关闭。

### 事件

页面可见性 API 为 {{domxref("Document")}} 接口添加了以下事件：

- {{domxref("Document.visibilitychange_event", "visibilitychange")}}
  - : 当标签页的内容变为可见或被隐藏时触发。

## 示例

### 在页面隐藏时暂停音频

该示例会在用户切换到不同标签页时暂停音频，并在用户切换回标签页时播放音频。

#### HTML

```html
<audio
  controls
  src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3"></audio>
```

#### JavaScript

```js
const audio = document.querySelector("audio");

// 处理页面可见性变化：
// - 如果页面隐藏，暂停音频
// - 如果页面显示，播放音频
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    audio.pause();
  } else {
    audio.play();
  }
});
```

#### 结果

{{EmbedLiveSample("在页面隐藏时暂停音频", "", 100)}}

试着播放音频，然后切换到不同的标签页，然后再返回。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
