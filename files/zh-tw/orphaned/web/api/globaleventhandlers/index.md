---
title: GlobalEventHandlers
slug: orphaned/Web/API/GlobalEventHandlers
original_slug: Web/API/GlobalEventHandlers
---
{{ApiRef("HTML DOM")}}

**`GlobalEventHandlers(通用事件處理器)`**在多個介面，如 {{domxref("HTMLElement")}}、{{domxref("Document")}} 和 {{domxref("Window")}} 當中加入了共有的事件處理器屬性，這些介面皆能夠加入除了以下清單外的更多事件處理器。

> **備註：** `GlobalEventHandlers` is a mixin and not an interface; you can't actually create an object of type `GlobalEventHandlers`.

## 屬性

_This interface doesn't include any properties except for the event handlers listed below\._

### 事件處理器

These event handlers are defined on the {{domxref("GlobalEventHandlers")}} mixin, and implemented by {{domxref("HTMLElement")}}, {{domxref("Document")}}, {{domxref("Window")}}, as well as by {{domxref("WorkerGlobalScope")}} for Web Workers.

- {{domxref("GlobalEventHandlers.onabort")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("abort")}} event is raised.
- {{domxref("GlobalEventHandlers.onanimationcancel")}} {{Non-standard_inline}}
  - : An {{event("Event_handlers", "event handler")}} called when an {{event("animationcancel")}} event is sent, indicating that a running [CSS animation](/docs/Web/CSS/CSS_Animations) has been canceled.
- {{domxref("GlobalEventHandlers.onanimationend")}} {{Non-standard_inline}}
  - : An {{event("Event_handlers", "event handler")}} called when an {{event("animationend")}} event is sent, indicating that a [CSS animation](/docs/Web/CSS/CSS_Animations) has stopped playing.
- {{domxref("GlobalEventHandlers.onanimationiteration")}} {{Non-standard_inline}}
  - : An {{event("Event_handlers", "event handler")}} called when an {{event("animationiteration")}} event has been sent, indicating that a [CSS animation](/docs/Web/CSS/CSS_Animations) has begun playing a new iteration of the animation sequence.
- {{domxref("GlobalEventHandlers.onanimationstart")}} {{Non-standard_inline}}
  - : An {{event("Event_handlers", "event handler")}} called when an {{event("animationstart")}} event is sent, indicating that a [CSS animation](/docs/Web/CSS/CSS_Animations) has started playing.
- {{domxref("GlobalEventHandlers.onauxclick")}} {{Non-standard_inline}}
  - : An {{event("Event_handlers", "event handler")}} called when an {{event("auxclick")}} event is sent, indicating that a non-primary button has been pressed on an input device (e.g. a middle mouse button).
- {{domxref("GlobalEventHandlers.onblur")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("blur")}} event is raised.
- {{domxref("GlobalEventHandlers.onerror")}}
  - : Is an {{domxref("OnErrorEventHandler")}} representing the code to be called when the {{event("error")}} event is raised.
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("focus")}} event is raised.
- {{domxref("GlobalEventHandlers.oncancel")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("cancel")}} event is raised.
- {{domxref("GlobalEventHandlers.oncanplay")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("canplay")}} event is raised.
- {{domxref("GlobalEventHandlers.oncanplaythrough")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("canplaythrough")}} event is raised.
- {{domxref("GlobalEventHandlers.onchange")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("change")}} event is raised.
- {{domxref("GlobalEventHandlers.onclick")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("click")}} event is raised.
- {{domxref("GlobalEventHandlers.onclose")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("close")}} event is raised.
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("contextmenu")}} event is raised.
- {{domxref("GlobalEventHandlers.oncuechange")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("cuechange")}} event is raised.
- {{domxref("GlobalEventHandlers.ondblclick")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("dblclick")}} event is raised.
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
- {{domxref("GlobalEventHandlers.ongotpointercapture")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("gotpointercapture")}} event type is raised.
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
- {{domxref("GlobalEventHandlers.onloadend")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("loadend")}} event is raised (when progress has stopped on the loading of a resource.)
- {{domxref("GlobalEventHandlers.onloadstart")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("loadstart")}} event is raised (when progress has begun on the loading of a resource.)
- {{domxref("GlobalEventHandlers.onlostpointercapture")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("lostpointercapture")}} event type is raised.
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
- {{domxref("GlobalEventHandlers.onselectstart")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("selectionchange")}} event is raised, i.e. when the user starts to make a new text selection on a web page.
- {{domxref("GlobalEventHandlers.onselectionchange")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("selectionchange")}} event is raised, i.e. when the text selected on a web page changes.
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
- {{domxref("GlobalEventHandlers.ontransitioncancel")}}
  - : An {{event("Event_handlers", "event handler")}} called when a {{event("transitioncancel")}} event is sent, indicating that a [CSS transition](/zh-TW/docs/Web/CSS/CSS_Transitions) has been cancelled.
- {{domxref("GlobalEventHandlers.ontransitionend")}}
  - : An {{event("Event_handlers", "event handler")}} called when a {{event("transitionend")}} event is sent, indicating that a [CSS transition](/zh-TW/docs/Web/CSS/CSS_Transitions) has finished playing.
- {{domxref("GlobalEventHandlers.onwaiting")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("waiting")}} event is raised.

## 方法

_This interface defines no methods._

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat("api.GlobalEventHandlers")}}

## 參見

- {{domxref("Element")}}
- {{event("Event_handlers", "event handler")}}
- {{domxref("Event")}}
