---
title: WindowEventHandlers
slug: orphaned/Web/API/WindowEventHandlers
tags:
  - API
  - HTML-DOM
  - Interface
  - NeedsTranslation
  - Reference
  - TopicStub
translation_of: Web/API/WindowEventHandlers
original_slug: Web/API/WindowEventHandlers
---

{{APIRef("HTML DOM")}}

**`WindowEventHandlers`** describes the event handlers common to several interfaces like {{domxref("Window")}}, or {{domxref("HTMLBodyElement")}} and {{domxref("HTMLFrameSetElement")}}. Each of these interfaces can implement more event handlers.

`WindowEventHandlers` is a not an interface and no object of this type can be created.

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
- {{domxref("WindowEventHandlers.onresize")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("resize")}} event is raised.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("storage")}} event is raised.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("unload")}} event is raised.

## Methods

_This interface defines no method._

## Specifications

| Specification                                                                                        | Status                           | Comment                                                                                                                         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#windoweventhandlers', 'GlobalEventHandlers')}} | {{Spec2('HTML WHATWG')}} | No change since the latest snapshot, {{SpecName("HTML5.1")}}.                                                          |
| {{SpecName('HTML5.1', '#windoweventhandlers', 'GlobalEventHandlers')}}         | {{Spec2('HTML5.1')}}     | Snapshot of {{SpecName("HTML WHATWG")}}. Added `onlanguage` since the {{SpecName("HTML 5")}} snapshot.           |
| {{SpecName("HTML5 W3C", "#windoweventhandlers", "GlobalEventHandlers")}}     | {{Spec2('HTML5 W3C')}}     | Snapshot of {{SpecName("HTML WHATWG")}}. Creation of `WindowEventHandlers` (properties where on the target before it). |

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window")}} and {{domxref("WorkerGlobalScope")}}
