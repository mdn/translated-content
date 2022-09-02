---
title: GlobalEventHandlers
slug: orphaned/Web/API/GlobalEventHandlers
original_slug: Web/API/GlobalEventHandlers
---
{{ ApiRef("HTML DOM") }}

**`GlobalEventHandlers`** 描述了一系列 web worker 的事件接口 {{domxref("HTMLElement")}}, {{domxref("Document")}}, {{domxref("Window")}}, 或 {{domxref("WorkerGlobalScope")}}。这里面的每一个接口都可以添加更多的事件句柄。

> **备注：** `GlobalEventHandlers` 是一个混入对象 (mixin) 而不是一个真正的接口，所以无法创建直接基于`GlobalEventHandlers` 的对象。

## 属性

除了下面的事件句柄外，此接口不包含任何其他属性。

### Event handlers

这些事件定义在 {{domxref("GlobalEventHandlers")}} 中，并被混入和实现在{{domxref("HTMLElement")}}, {{domxref("Document")}}, {{domxref("Window")}}上，任意 html 元素、document 对象，window 对象上均可以使用它提供的属性， 即时是全局的{{domxref("WorkerGlobalScope")}}。

- {{domxref("GlobalEventHandlers.onabort")}}
  - : 这是一个事件句柄 {{event("Event_handlers", "event handler")}} ，当停止{{event("abort")}} 事件触发时会被调用。
- {{domxref("GlobalEventHandlers.onanimationcancel")}} {{Non-standard_inline}}
  - : 这是一个事件句柄 {{event("Event_handlers", "event handler")}} ，当 CSS 动画取消{{event("animationcancel")}}事件触发时被调用，这表示某个正在执行的 CSS 动画被取消了。
- {{domxref("GlobalEventHandlers.onanimationend")}} {{Non-standard_inline}}
  - : 这是一个事件句柄 {{event("Event_handlers", "event handler")}} ，当 CSS 动画播放完成{{event("animationend")}} 事件触发时被调用，这表示某个 CSS 动画已经播放完成了。
- {{domxref("GlobalEventHandlers.onblur")}}
  - : 这是一个事件句柄 {{event("Event_handlers", "event handler")}} ，当失去焦点 {{event("blur")}} 事件触发时会被调用。
- {{domxref("GlobalEventHandlers.onerror")}}
  - : 这是一个错误发生时的事件句柄 {{event("Event_handlers", "event handler")}} ，当发生错误{{event("error")}} 事件时会被调用。
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
- {{domxref("GlobalEventHandlers.onwaiting")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("waiting")}} event is raised.

## Methods

_This interface defines no method._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat("api.GlobalEventHandlers")}}

## See also

- {{domxref("Element")}}
