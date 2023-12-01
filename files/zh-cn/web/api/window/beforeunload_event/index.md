---
title: Window：beforeunload 事件
slug: Web/API/Window/beforeunload_event
---

{{APIRef}}

当浏览器窗口关闭或者刷新时，会触发 **`beforeunload`** 事件。当前页面不会直接关闭，可以点击确定按钮关闭或刷新，也可以取消关闭或刷新。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("WindowEventHandlers/onbeforeunload", "onbeforeunload")}}
      </td>
    </tr>
  </tbody>
</table>

事件使网页能够触发一个确认对话框，询问用户是否真的要离开该页面。如果用户确认，浏览器将导航到新页面，否则导航将会取消。

根据规范，要显示确认对话框，事件处理程序需要在事件上调用{{domxref("Event.preventDefault()", "preventDefault()")}}。

但是请注意，并非所有浏览器都支持此方法，而有些浏览器需要事件处理程序实现两个遗留方法中的一个作为代替：

- 将字符串分配给事件的`returnValue`属性
- 从事件处理程序返回一个字符串。

某些浏览器过去在确认对话框中显示返回的字符串，从而使事件处理程序能够向用户显示自定义消息。但是，此方法已被弃用，并且在大多数浏览器中不再支持。

为避免意外弹出窗口，除非页面已与之交互，否则浏览器可能不会显示在`beforeunload`事件中创建的提示，甚至根本不会显示它们。

将事件处理程序/监听器加到`window`或 `document`的`beforeunload`事件后，将阻止浏览器使用内存中的页面导航缓存，例如[Firefox 的 Back-Forward 缓存](/zh-CN/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)或[WebKit 的 Page Cache](https://webkit.org/blog/516/webkit-page-cache-ii-the-unload-event/)。

HTML 规范指出在此事件中调用{{domxref("window.alert()")}}，{{domxref("window.confirm()")}}以及{{domxref("window.prompt()")}}方法，可能会失效。更多详细信息，请参见[HTML 规范](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#user-prompts)。

## 示例

HTML 规范指出作者应该使用 {{domxref("Event.preventDefault()")}} 而非 {{domxref("Event.returnValue")}}，然而，不是所有浏览器都支持这么做。

```js
window.addEventListener("beforeunload", (event) => {
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  event.returnValue = "";
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}、{{domxref("Document/readystatechange_event", "readystatechange")}}、{{domxref("Window/load_event", "load")}}、{{domxref("Window/unload_event", "unload")}}
- [Unloading Documents — Prompt to unload a document](https://html.spec.whatwg.org/#prompt-to-unload-a-document)
- [Remove Custom Messages in onbeforeload Dialogs after Chrome 51](https://developers.google.com/web/updates/2016/04/chrome-51-deprecations?hl=en#remove_custom_messages_in_onbeforeunload_dialogs)
