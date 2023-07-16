---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
---

{{APIRef("HTML DOM")}}
**`HTMLBodyElement`** 接口提供了特殊的属性（除了它们继承的常规的{{ domxref("HTMLElement") }}接口）以外，还可以处理 body 元素。

{{InheritanceDiagram(600, 120)}}

## 属性

_从其父项{{domxref("HTMLElement")}} 中继承属性。_

- {{domxref("HTMLBodyElement.aLink")}} {{Deprecated_Inline}}
  - : Is a {{ domxref("DOMString") }} that represents the color of active hyperlinks.
- {{domxref("HTMLBodyElement.background")}} {{Deprecated_Inline}}
  - : Is a {{ domxref("DOMString") }} that represents the description of the location of the background image resource. Note that this is not an URI, though some older version of some browsers do expect it.
- {{domxref("HTMLBodyElement.bgColor")}} {{Deprecated_Inline}}
  - : Is a {{ domxref("DOMString") }} that represents the background color for the document.
- {{domxref("HTMLBodyElement.link")}} {{Deprecated_Inline}}
  - : Is a {{ domxref("DOMString") }} that represents the color of unvisited links.
- {{domxref("HTMLBodyElement.text")}} {{Deprecated_Inline}}
  - : Is a {{ domxref("DOMString") }} that represents the foreground color of text.
- {{domxref("HTMLBodyElement.vLink")}} {{Deprecated_Inline}}
  - : Is a {{ domxref("DOMString") }} that represents the color of visited links.

## 方法

_No specific methods; inherits methods from its parent, {{domxref("HTMLElement")}}_.

## 事件处理器

继承了 {{domxref("HTMLElement")}} 的事件。

以下以 {{domxref("Window")}} 为目标的 `onXYZ` 事件处理器属性同样在 `window` 对象这一别名目标上可用。但建议直接在 `window` 对象上监听这些事件，而不是在 `HTMLBodyElement` 上。

> **备注：** 对于以下的 `onXYZ` 事件处理器，在 `HTMLBodyElement` 上使用 `addEventListener()` 将不会生效。请在 {{domxref("window")}} 对象上监听这些事件。

- {{domxref("window.afterprint_event", "HTMLBodyElement.onafterprint")}}
  - : Fired after the associated document has started printing or the print preview has been closed.
- {{domxref("window.beforeprint_event", "HTMLBodyElement.onbeforeprint")}}
  - : Fired when the associated document is about to be printed or previewed for printing.
- {{domxref("window.beforeunload_event", "HTMLBodyElement.onbeforeunload")}}
  - : Fired when the window, the document and its resources are about to be unloaded.
- {{domxref("window.gamepadconnected_event", "HTMLBodyElement.ongamepadconnected")}}
  - : Fired when the browser detects that a gamepad has been connected or the first time a button/axis of the gamepad is used.
- {{domxref("window.gamepaddisconnected_event", "HTMLBodyElement.ongamepaddisconnected")}}
  - : Fired when the browser detects that a gamepad has been disconnected.
- {{domxref("window.hashchange_event", "HTMLBodyElement.onhashchange")}}
  - : Fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the `#` symbol).
- {{domxref("window.languagechange_event", "HTMLBodyElement.onlanguagechange")}}
  - : Fired when the user's preferred language changes.
- {{domxref("window.message_event", "HTMLBodyElement.onmessage")}}
  - : Fired when the window receives a message, for example from a call to [`Window.postMessage()`](/zh-CN/docs/Web/API/Window/postMessage) from another browsing context.
- {{domxref("window.messageerror_event", "HTMLBodyElement.onmessageerror")}}
  - : Fired when the window receives a message that can't be deserialized.
- {{domxref("window.offline_event", "HTMLBodyElement.onoffline")}}
  - : Fired when the browser has lost access to the network and the value of {{domxref("Navigator.onLine")}} switches to `false`.
- {{domxref("window.online_event", "HTMLBodyElement.ononline")}}
  - : Fired when the browser has gained access to the network and the value of {{domxref("Navigator.onLine")}} switches to `true`.
- {{domxref("window.pagehide_event", "HTMLBodyElement.onpagehide")}}
  - : Fired when the browser hides the current page in the process of presenting a different page from the session's history.
- {{domxref("window.pageshow_event", "HTMLBodyElement.onpageshow")}}
  - : Fired when the browser displays the window's document due to navigation.
- {{domxref("window.popstate_event", "HTMLBodyElement.onpopstate")}}
  - : Fired when the active history entry changes while the user navigates the session history.
- {{domxref("window.rejectionhandled_event", "HTMLBodyElement.onrejectionhandled")}}
  - : Fired whenever a JavaScript {{jsxref("Promise")}} is rejected and the rejection has been handled.
- {{domxref("window.storage_event", "HTMLBodyElement.onstorage")}}
  - : Fired when a storage area (`localStorage`) has been modified in the context of another document.
- {{domxref("window.unhandledrejection_event", "HTMLBodyElement.onunhandledrejection")}}
  - : Fired whenever a {{jsxref("Promise")}} is rejected but the rejection was not handled.
- {{domxref("window.unload_event", "HTMLBodyElement.onunload")}}
  - : Fired when the document is being unloaded.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML 元素实现了这个接口：{{ HTMLElement("body") }}
