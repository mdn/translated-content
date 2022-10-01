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

## 事件处理

No specific event handlers; inherits event handlers from its parent, {{domxref("HTMLElement")}}.

- {{domxref("window.afterprint_event", "HTMLBodyElement.onafterprint")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("afterprint")}} event is raised.
- {{domxref("window.beforeprint_event", "HTMLBodyElement.onbeforeprint")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("beforeprint")}} event is raised.
- {{domxref("window.beforeunload_event", "HTMLBodyElement.onbeforeunload")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("beforeunload")}} event is raised.
- {{domxref("window.hashchange_event", "HTMLBodyElement.onhashchange")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("hashchange")}} event is raised.
- {{domxref("window.languagechange_event", "HTMLBodyElement.onlanguagechange")}} {{experimental_inline}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("languagechange")}} event is raised.
- {{domxref("window.message_event", "HTMLBodyElement.onmessage")}}
  - : Is an {{event("Event_handlers", "event handler")}} called whenever an object receives a {{event("message")}} event.
- {{domxref("window.messageerror_event", "HTMLBodyElement.onmessageerror")}}
  - : Is an {{event("Event_handlers", "event handler")}} called whenever an object receives a {{event("messageerror")}} event.
- {{domxref("window.offline_event", "HTMLBodyElement.onoffline")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("offline")}} event is raised.
- {{domxref("window.online_event", "HTMLBodyElement.ononline")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("online")}} event is raised.
- {{domxref("window.pagehide_event", "HTMLBodyElement.onpagehide")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pagehide")}} event is raised.
- {{domxref("window.pageshow_event", "HTMLBodyElement.onpageshow")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pageshow")}} event is raised.
- {{domxref("window.popstate_event", "HTMLBodyElement.onpopstate")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("popstate")}} event is raised.
- {{domxref("window.rejectionhandled_event", "HTMLBodyElement.onrejectionhandled")}}
  - : An {{event("Event_handlers", "event handler")}} representing the code executed when the {{event("rejectionhandled")}} event is raised, indicating that a {{jsxref("Promise")}} was rejected and the rejection has been handled.
- {{domxref("window.storage_event", "HTMLBodyElement.onstorage")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("storage")}} event is raised.
- {{domxref("window.unhandledrejection_event", "HTMLBodyElement.onunhandledrejection")}}
  - : An {{event("Event_handlers", "event handler")}} representing the code executed when the {{event("unhandledrejection")}} event is raised, indicating that a {{jsxref("Promise")}} was rejected but the rejection was not handled.
- {{domxref("window.unload_event", "HTMLBodyElement.onunload")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("unload")}} event is raised.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考阅读

- HTML element implementing this interface: {{ HTMLElement("body") }}
