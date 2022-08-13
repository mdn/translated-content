---
title: GlobalEventHandlers
slug: Web/API/GlobalEventHandlers
tags:
  - API
  - DOM
  - HTML-DOM
  - Mixin
  - NeedsTranslation
  - Reference
  - TopicStub
translation_of: Web/API/GlobalEventHandlers
---
{{ApiRef("HTML DOM")}}Der **`GlobalEventHandlers`**Mixin beschreibt die Ereignisbehandler, die mehreren Interfaces gemeinsam sind, wie z.B. {{domxref("HTMLElement")}}, {{domxref("Document")}}, oder {{domxref("Window")}}. Jedes dieser Interfaces kann weitere Ereignisbehandler implementieren.

`GlobalEventHandlers` ist ein Mixin und kein Interface und es kann kein Objekt dieses Typs angelegt werden.

## Eigenschaften

Die Ereignis-Eigenschaften der Form onXYZ werden auf dem {{domxref("GlobalEventHandlers")}}} definiert und durch {{domxref("HTMLElement")}}}, {{domxref("Document")}}, {{domxref("Window")}} und {{domxref("WorkerGlobalScope")}}} für Webworker implementiert.

- {{domxref("GlobalEventHandlers.onabort")}}
  - : Ist ein {{event("Event_handlers", "event handler")}}, der den aufzurufenden Code repräsentiert, wenn das Ereignis {{event("abort")}} ausgelöst wird.
- {{domxref("GlobalEventHandlers.onblur")}}
  - : Ist ein {{event("Event_handlers", "event handler")}}, der den aufzurufenden Code repräsentiert, wenn das Ereignis {{event("blur")}} ausgelöst wird.
- {{domxref("GlobalEventHandlers.onerror")}}
  - : Ist ein {{event("Event_handlers", "event handler")}}, der den aufzurufenden Code repräsentiert, wenn das Ereignis {{event("focus")}} ausgelöst wird.
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : Ist ein {{event("Event_handlers", "event handler")}}, der den aufzurufenden Code repräsentiert, wenn das Ereignis {{event("focus")}} ausgelöst wird.
- {{domxref("GlobalEventHandlers.oncancel")}}
  - : Ist ein {{event("Event_handlers", "event handler")}}, der den aufzurufenden Code repräsentiert, wenn das Ereignis {{event("cancel")}} ausgelöst wird.
- {{domxref("GlobalEventHandlers.oncanplay")}}
  - : Ist ein {{event("Event_handlers", "event handler")}}, der den aufzurufenden Code repräsentiert, wenn das Ereignis {{event("canplay")}} ausgelöst wird.
- {{domxref("GlobalEventHandlers.oncanplaythrough")}}
  - : Ist ein {{event("Event_handlers", "event handler")}}, der den aufzurufenden Code repräsentiert, wenn das Ereignis {{event("canplaythrough")}} ausgelöst wird.
- {{domxref("GlobalEventHandlers.onchange")}}
  - : Ist ein {{event("Event_handlers", "event handler")}}, der den aufzurufenden Code repräsentiert, wenn das Ereignis {{event("change")}} ausgelöst wird.
- {{domxref("GlobalEventHandlers.onclick")}}
  - : Ist ein {{event("Event_handlers", "event handler")}}, der den aufzurufenden Code repräsentiert, wenn das Ereignis {{event("click")}} ausgelöst wird.
- {{domxref("GlobalEventHandlers.onclose")}}
  - : Ist ein {{event("Event_handlers", "event handler")}}, der den aufzurufenden Code repräsentiert, wenn das Ereignis {{event("close")}} ausgelöst wird.
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : Ist ein {{event("Event_handlers", "event handler")}}, der den aufzurufenden Code repräsentiert, wenn das Ereignis {{event("contextmenu")}} ausgelöst wird.
- {{domxref("GlobalEventHandlers.oncuechange")}}
  - : Ist ein {{event("Event_handlers", "event handler")}}, der den aufzurufenden Code repräsentiert, wenn das Ereignis {{event("cuechange")}} ausgelöst wird.
- {{domxref("GlobalEventHandlers.ondblclick")}}
  - : Ist ein {{event("Event_handlers", "event handler")}}}, der den aufzurufenden Code repräsentiert, wenn das Ereignis {{event("dblclick")}} ausgelöst wird.
- {{domxref("GlobalEventHandlers.ondrag")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("drag")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragend")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("dragend")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragenter")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("dragenter")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragexit")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("dragexit")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragleave")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("dragleave")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragover")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("dragover")}} event is raised.
- {{domxref("GlobalEventHandlers.ondragstart")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("dragstart")}} event is raised.
- {{domxref("GlobalEventHandlers.ondrop")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("drop")}} event is raised.
- {{domxref("GlobalEventHandlers.ondurationchange")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("durationchange")}} event is raised.
- {{domxref("GlobalEventHandlers.onemptied")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("emptied")}} event is raised.
- {{domxref("GlobalEventHandlers.onended")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("ended")}} event is raised.
- {{domxref("GlobalEventHandlers.oninput")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("input")}} event is raised.
- {{domxref("GlobalEventHandlers.oninvalid")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("invalid")}} event is raised.
- {{domxref("GlobalEventHandlers.onkeydown")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("keydown")}} event is raised.
- {{domxref("GlobalEventHandlers.onkeypress")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("keypress")}} event is raised.
- {{domxref("GlobalEventHandlers.onkeyup")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("keyup")}} event is raised.
- {{domxref("GlobalEventHandlers.onload")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("load")}} event is raised.
- {{domxref("GlobalEventHandlers.onloadeddata")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("loadeddata")}} event is raised.
- {{domxref("GlobalEventHandlers.onloadedmetadata")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("loadedmetadata")}} event is raised.
- {{domxref("GlobalEventHandlers.onloadstart")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("loadstart")}} event is raised.
- {{domxref("GlobalEventHandlers.onmousedown")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("mousedown")}} event is raised.
- {{domxref("GlobalEventHandlers.onmouseenter")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("mouseenter")}} event is raised.
- {{domxref("GlobalEventHandlers.onmouseleave")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("mouseleave")}} event is raised.
- {{domxref("GlobalEventHandlers.onmousemove")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("mousemove")}} event is raised.
- {{domxref("GlobalEventHandlers.onmouseout")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("mouseout")}} event is raised.
- {{domxref("GlobalEventHandlers.onmouseover")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("mouseover")}} event is raised.
- {{domxref("GlobalEventHandlers.onmouseup")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("mouseup")}} event is raised.
- {{domxref("GlobalEventHandlers.onmousewheel")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("mousewheel")}} event is raised.
- {{domxref("GlobalEventHandler.onmozfullscreenchange")}} {{non-standard_inline}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("fullscreenchange")}} event is raised.
- {{domxref("GlobalEventHandler.onmozfullscreenerror")}} {{non-standard_inline}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("fullscreenerror")}} event is raised.
- {{domxref("GlobalEventHandlers.onpause")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pause")}} event is raised.
- {{domxref("GlobalEventHandlers.onplay")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("play")}} event is raised.
- {{domxref("GlobalEventHandlers.onplaying")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("playing")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerdown")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pointerdown")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointermove")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pointermove")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerup")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pointerup")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointercancel")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pointercancel")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerover")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pointerover")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerout")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pointerout")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerenter")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pointerevent")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerleave")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pointerleave")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerlockchange")}} {{experimental_inline}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pointerlockchange")}} event is raised.
- {{domxref("GlobalEventHandlers.onpointerlockerror")}} {{experimental_inline}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("pointerlockerror")}} event is raised.
- {{domxref("GlobalEventHandlers.onprogress")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("progress")}} event is raised.
- {{domxref("GlobalEventHandlers.onratechange")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("ratechange")}} event is raised.
- {{domxref("GlobalEventHandlers.onreset")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("reset")}} event is raised.
- {{domxref("GlobalEventHandlers.onscroll")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("scroll")}} event is raised.
- {{domxref("GlobalEventHandlers.onseeked")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("seeked")}} event is raised.
- {{domxref("GlobalEventHandlers.onseeking")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("seeking")}} event is raised.
- {{domxref("GlobalEventHandlers.onselect")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("select")}} event is raised.
- {{domxref("GlobalEventHandlers.onselectionchange")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("selectionchange")}} event is raised.
- {{domxref("GlobalEventHandlers.onshow")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("show")}} event is raised.
- {{domxref("GlobalEventHandlers.onsort")}} {{experimental_inline}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("sort")}} event is raised.
- {{domxref("GlobalEventHandlers.onstalled")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("stalled")}} event is raised.
- {{domxref("GlobalEventHandlers.onsubmit")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("submit")}} event is raised.
- {{domxref("GlobalEventHandlers.onsuspend")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("suspend")}} event is raised.
- {{domxref("GlobalEventHandlers.ontimeupdate")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("timeupdate")}} event is raised.
- {{domxref("GlobalEventHandlers.onvolumechange")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("volumechange")}} event is raised.
- {{domxref("GlobalEventHandlers.ontouchcancel")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("touchcancel")}} event is raised.
- {{domxref("GlobalEventHandlers.ontouchend")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("touchend")}} event is raised.
- {{domxref("GlobalEventHandlers.ontouchmove")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("touchmove")}} event is raised.
- {{domxref("GlobalEventHandlers.ontouchstart")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("touchstart")}} event is raised.
- {{domxref("GlobalEventHandlers.onwaiting")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("waiting")}} event is raised.

## Methods

_This interface defines no method._

## Specifications

| Specification                                                                                                                | Status                               | Comment                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("Selection API",'', 'Extension to GlobalEventHandlers')}}                                 | {{Spec2('Selection API')}} | Adds `onselectionchange.`                                                                                                                           |
| {{SpecName('Pointer Lock', '#extensions-to-the-document-interface', 'Extension of Document')}} | {{Spec2('Pointer Lock')}}     | Adds `onpointerlockchange` and `onpointerlockerror` on {{domxref("Document")}}. It is experimentally implemented on `GlobalEventHandlers`. |
| {{SpecName('HTML WHATWG', '#globaleventhandlers', 'GlobalEventHandlers')}}                         | {{Spec2('HTML WHATWG')}}     | No change since the latest snapshot, {{SpecName("HTML5.1")}}.                                                                              |
| {{SpecName('HTML5.1', '#globaleventhandlers', 'GlobalEventHandlers')}}                                 | {{Spec2('HTML5.1')}}         | Snapshot of {{SpecName("HTML WHATWG")}}. Added `onsort` since the {{SpecName("HTML5 W3C")}} snapshot.                               |
| {{SpecName("HTML5 W3C", "#globaleventhandlers", "GlobalEventHandlers")}}                             | {{Spec2('HTML5 W3C')}}         | Snapshot of {{SpecName("HTML WHATWG")}}. Creation of `GlobalEventHandlers` (properties where on the target before it).                     |

## Browser compatibility

{{Compat}}

\[1] In Gecko this is implemented as `onmozpointerlockchange`, `onmozpointerlockerror`.

\[2] In Blink this is implemented as `onwebkitpointerlockchange`, `onwebkitpointerlockerror`.

\[3] This is implemented behind the `dom.w3c_pointer_events.enabled` preference, defaulting to `false`.

\[4] This is implemented behind the `dom.select_events.enabled` preference, that default to `false`, except on Nightly.

## See also

- {{domxref("Element")}}
