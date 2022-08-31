---
title: WindowEventHandlers
slug: orphaned/Web/API/WindowEventHandlers
tags:
  - API
  - HTML-DOM
  - Interface
  - Mixin
  - Reference
  - WindowEventHandlers
translation_of: Web/API/WindowEventHandlers
original_slug: Web/API/WindowEventHandlers
---
{{APIRef("HTML DOM")}}

The **`WindowEventHandlers`** mixin describes the event handlers common to several interfaces like {{domxref("Window")}}, or {{domxref("HTMLBodyElement")}} and {{domxref("HTMLFrameSetElement")}}. Each of these interfaces can implement additional specific event handlers.

> **참고:** `WindowEventHandlers` is a mixin and not an interface; you can't actually create an object of type `WindowEventHandlers`.

## Properties

_The events properties, of the form `onXYZ`, are defined on the {{domxref("WindowEventHandlers")}}, and implemented by {{domxref("Window")}}, and {{domxref("WorkerGlobalScope")}} for Web Workers._

- {{domxref("WindowEventHandlers.onafterprint")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("afterprint")}} event is raised.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("beforeprint")}} event is raised.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("beforeunload")}} event is raised.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("hashchange")}} event is raised.
- {{domxref("WindowEventHandlers.onlanguagechange")}} {{experimental_inline}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("languagechange")}} event is raised.
- {{domxref("WindowEventHandlers.onmessage")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("message")}} event is raised.
- {{domxref("WindowEventHandlers.onmessageerror")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("MessageError")}} event is raised.
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("offline")}} event is raised.
- {{domxref("WindowEventHandlers.ononline")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("online")}} event is raised.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pagehide")}} event is raised.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pageshow")}} event is raised.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("popstate")}} event is raised.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("storage")}} event is raised.
- {{domxref("WindowEventHandlers.onunhandledrejection")}} {{experimental_inline}}
  - : An event handler for unhandled {{jsxref("Promise")}} rejection events.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("unload")}} event is raised.

## Methods

_This interface defines no method._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window")}} and {{domxref("WorkerGlobalScope")}}
