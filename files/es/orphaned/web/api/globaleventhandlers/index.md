---
title: GlobalEventHandlers
slug: orphaned/Web/API/GlobalEventHandlers
original_slug: Web/API/GlobalEventHandlers
---

{{ApiRef("DOM HTML")}}

La combinación («_mixin_» en inglés) **`GlobalEventHandlers`** describe los controladores de eventos comunes a varias interfaces como {{DOMxRef("HTMLElement")}}, {{DOMxRef("Document")}} o {{DOMxRef("Window")}}. Cada una de estas interfaces puede, por supuesto, agregar más controladores de eventos además de los que se enumeran a continuación.

> **Nota:** `GlobalEventHandlers` es una combinación («_mixin_») y no una interfaz; en realidad, no puedes crear un objeto de tipo `GlobalEventHandlers`.

## Propiedades

_Esta interfaz no incluye ninguna propiedad excepto los controladores de eventos que se enumeran a continuación._

### Controladores de eventos

Estos controladores de eventos se definen en el mixin {{DOMxRef("GlobalEventHandlers")}} y se implementan mediante {{DOMxRef("HTMLElement")}}, {{DOMxRef("Document")}}, {{DOMxRef("Window ")}}, así como por {{DOMxRef("WorkerGlobalScope")}} para «_Web Workers_».

- {{DOMxRef("GlobalEventHandlers.onabort")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento {{DOMxRef("HTMLMediaElement/abort_event", "abort")}}.
- {{DOMxRef("GlobalEventHandlers.onanimationcancel")}} {{Non-standard_inline}}
  - : Se llama a [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) cuando se envía un evento [`animationcancel`](/es/docs/Web/Reference/Events/animationcancel), lo cual indica que una [animación CSS](/es/docs/Web/CSS/CSS_Animations) se ha cancelado.
- {{DOMxRef("GlobalEventHandlers.onanimationend")}} {{Non-standard_inline}}
  - : Se llama a [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) cuando se envía un evento [`animationend`](/es/docs/Web/Reference/Events/animationend), lo cual indica que [la animación CSS](/es/docs/Web/CSS/CSS_Animations) se ha detenido.
- {{DOMxRef("GlobalEventHandlers.onanimationiteration")}} {{Non-standard_inline}}
  - : Un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) llamado cuando se ha enviado un evento [`animationiteration`](/es/docs/Web/Reference/Events/animationiteration), indica que una [animación CSS](/es/docs/Web/CSS/CSS_Animations) ha comenzado a reproducir una nueva iteración de la secuencia de animación.
- {{DOMxRef("GlobalEventHandlers.onanimationstart")}} {{Non-standard_inline}}
  - : Se llama a [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) cuando se envía un evento [`animationstart`](/es/docs/Web/Reference/Events/animationstart), lo cual indica que una [animación CSS](/es/docs/Web/CSS/CSS_Animations) se ha comenzado a reproducir.
- {{DOMxRef("GlobalEventHandlers.onauxclick")}} {{Non-standard_inline}}
  - : Se llama a [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) cuando se envía un evento [`auxclick`](/es/docs/Web/Reference/Events/auxclick), el cual indica que se ha presionado un botón no principal en un dispositivo de entrada (por ejemplo, un botón central del ratón).
- {{DOMxRef("GlobalEventHandlers.onblur")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`blur`](/es/docs/Web/Reference/Events/blur).
- {{DOMxRef("GlobalEventHandlers.onerror")}}
  - : Es un {{DOMxRef("OnErrorEventHandler")}} que representa el código que se llamará cuando se genere el evento [`error`](/es/docs/Web/Reference/Events/error).
- {{DOMxRef("GlobalEventHandlers.onfocus")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`focus`](/es/docs/Web/Reference/Events/focus).
- {{DOMxRef("GlobalEventHandlers.oncancel")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`cancel`](/es/docs/Web/Reference/Events/cancel).
- {{DOMxRef("GlobalEventHandlers.oncanplay")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`canplay`](/es/docs/Web/Reference/Events/canplay).
- {{DOMxRef("GlobalEventHandlers.oncanplaythrough")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`canplaythrough`](/es/docs/Web/Reference/Events/canplaythrough).
- {{DOMxRef("GlobalEventHandlers.onchange")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`change`](/es/docs/Web/Reference/Events/change).
- {{DOMxRef("GlobalEventHandlers.onclick")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`click`](/es/docs/Web/Reference/Events/click).
- {{DOMxRef("GlobalEventHandlers.onclose")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`close`](/es/docs/Web/Reference/Events/close).
- {{DOMxRef("GlobalEventHandlers.oncontextmenu")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`contextmenu`](/es/docs/Web/Reference/Events/contextmenu).
- {{DOMxRef("GlobalEventHandlers.oncuechange")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`cuechange`](/es/docs/Web/Reference/Events/cuechange).
- {{DOMxRef("GlobalEventHandlers.ondblclick")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`dblclick`](/es/docs/Web/Reference/Events/dblclick).
- {{DOMxRef("GlobalEventHandlers.ondrag")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`drag`](/es/docs/Web/Reference/Events/drag).
- {{DOMxRef("GlobalEventHandlers.ondragend")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`dragend`](/es/docs/Web/Reference/Events/dragend).
- {{DOMxRef("GlobalEventHandlers.ondragenter")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`dragenter`](/es/docs/Web/Reference/Events/dragenter).
- {{DOMxRef("GlobalEventHandlers.ondragexit")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`dragexit`](/es/docs/Web/Reference/Events/dragexit).
- {{DOMxRef("GlobalEventHandlers.ondragleave")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`dragleave`](/es/docs/Web/Reference/Events/dragleave).
- {{DOMxRef("GlobalEventHandlers.ondragover")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`dragover`](/es/docs/Web/Reference/Events/dragover).
- {{DOMxRef("GlobalEventHandlers.ondragstart")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`dragstart`](/es/docs/Web/Reference/Events/dragstart).
- {{DOMxRef("GlobalEventHandlers.ondrop")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`drop`](/es/docs/Web/Reference/Events/drop).
- {{DOMxRef("GlobalEventHandlers.ondurationchange")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`durationchange`](/es/docs/Web/Reference/Events/durationchange).
- {{DOMxRef("GlobalEventHandlers.onemptied")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`emptied`](/es/docs/Web/Reference/Events/emptied).
- {{DOMxRef("GlobalEventHandlers.onended")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`ended`](/es/docs/Web/Reference/Events/ended).
- {{DOMxRef("GlobalEventHandlers.onformdata")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) para procesar eventos [`formdata`](/es/docs/Web/Reference/Events/formdata), que se activa después de que se construye la lista de entrada que representa los datos del formulario.
- {{DOMxRef("GlobalEventHandlers.ongotpointercapture")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el tipo de evento [`gotpointercapture`](/es/docs/Web/Reference/Events/gotpointercapture).
- {{DOMxRef("GlobalEventHandlers.oninput")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`input`](/es/docs/Web/Reference/Events/input).
- {{DOMxRef("GlobalEventHandlers.oninvalid")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`invalid`](/es/docs/Web/Reference/Events/invalid).
- {{DOMxRef("GlobalEventHandlers.onkeydown")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`keydown`](/es/docs/Web/Reference/Events/keydown).
- {{DOMxRef("GlobalEventHandlers.onkeypress")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`keypress`](/es/docs/Web/Reference/Events/keypress).
- {{DOMxRef("GlobalEventHandlers.onkeyup")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`keyup`](/es/docs/Web/Reference/Events/keyup).
- {{DOMxRef("GlobalEventHandlers.onload")}}
  - : Is an [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) representing the code to be called when the [`load`](/es/docs/Web/Reference/Events/load) event is raised.
- {{DOMxRef("GlobalEventHandlers.onloadeddata")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`loadeddata `](/es/docs/Web/Reference/Events/loadeddata ).
- {{DOMxRef("GlobalEventHandlers.onloadedmetadata")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`loadedmetadata`](/es/docs/Web/Reference/Events/loadedmetadata).
- {{DOMxRef("GlobalEventHandlers.onloadend")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`loadend`](/es/docs/Web/Reference/Events/loadend) (cuando el progreso se haya detenido en la carga de un recurso).
- {{DOMxRef("GlobalEventHandlers.onloadstart")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`loadstart`](/es/docs/Web/Reference/Events/loadstart) (cuando el progreso ha comenzado a cargar un recurso).
- {{DOMxRef("GlobalEventHandlers.onlostpointercapture")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el tipo de evento [`lostpointercapture`](/es/docs/Web/Reference/Events/lostpointercapture).
- {{DOMxRef("GlobalEventHandlers.onmousedown")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`mousedown`](/es/docs/Web/Reference/Events/mousedown).
- {{DOMxRef("GlobalEventHandlers.onmouseenter")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`mouseenter`](/es/docs/Web/Reference/Events/mouseenter).
- {{DOMxRef("GlobalEventHandlers.onmouseleave")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`mouseleave`](/es/docs/Web/Reference/Events/mouseleave).
- {{DOMxRef("GlobalEventHandlers.onmousemove")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`mousemove`](/es/docs/Web/Reference/Events/mousemove).
- {{DOMxRef("GlobalEventHandlers.onmouseout")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`mouseout`](/es/docs/Web/Reference/Events/mouseout).
- {{DOMxRef("GlobalEventHandlers.onmouseover")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`mouseover`](/es/docs/Web/Reference/Events/mouseover).
- {{DOMxRef("GlobalEventHandlers.onmouseup")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`mouseup`](/es/docs/Web/Reference/Events/mouseup).
- {{DOMxRef("GlobalEventHandlers.onmousewheel")}} {{Non-standard_inline}} {{Deprecated_inline}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`mousewheel`](/es/docs/Web/Reference/Events/mousewheel). Desaprobado. Utiliza `onwheel` en su lugar.
- {{DOMxRef("GlobalEventHandlers.onwheel")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`wheel`](/es/docs/Web/Reference/Events/wheel).
- {{DOMxRef("GlobalEventHandlers.onpause")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`pause`](/es/docs/Web/Reference/Events/pause).
- {{DOMxRef("GlobalEventHandlers.onplay")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`play`](/es/docs/Web/Reference/Events/play).
- {{DOMxRef("GlobalEventHandlers.onplaying")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`playing`](/es/docs/Web/Reference/Events/playing).
- {{DOMxRef("GlobalEventHandlers.onpointerdown")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`pointerdown`](/es/docs/Web/Reference/Events/pointerdown).
- {{DOMxRef("GlobalEventHandlers.onpointermove")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`pointermove`](/es/docs/Web/Reference/Events/pointermove).
- {{DOMxRef("GlobalEventHandlers.onpointerup")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`pointerup`](/es/docs/Web/Reference/Events/pointerup).
- {{DOMxRef("GlobalEventHandlers.onpointercancel")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`pointercancel`](/es/docs/Web/Reference/Events/pointercancel).
- {{DOMxRef("GlobalEventHandlers.onpointerover")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`pointerover`](/es/docs/Web/Reference/Events/pointerover).
- {{DOMxRef("GlobalEventHandlers.onpointerout")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`pointerout`](/es/docs/Web/Reference/Events/pointerout).
- {{DOMxRef("GlobalEventHandlers.onpointerenter")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`pointerenter`](/es/docs/Web/Reference/Events/pointerenter).
- {{DOMxRef("GlobalEventHandlers.onpointerleave")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`pointerleave`](/es/docs/Web/Reference/Events/pointerleave).
- {{DOMxRef("GlobalEventHandlers.onpointerlockchange")}} {{experimental_inline}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`pointerlockchange`](/es/docs/Web/Reference/Events/pointerlockchange).
- {{DOMxRef("GlobalEventHandlers.onpointerlockerror")}} {{experimental_inline}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`pointerlockerror`](/es/docs/Web/Reference/Events/pointerlockerror).
- {{DOMxRef("GlobalEventHandlers.onprogress")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`progress`](/es/docs/Web/Reference/Events/progress).
- {{DOMxRef("GlobalEventHandlers.onratechange")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`ratechange`](/es/docs/Web/Reference/Events/ratechange).
- {{DOMxRef("GlobalEventHandlers.onreset")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`reset`](/es/docs/Web/Reference/Events/reset).
- {{DOMxRef("GlobalEventHandlers.onresize")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`resize`](/es/docs/Web/Reference/Events/resize).
- {{DOMxRef("GlobalEventHandlers.onscroll")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`scroll`](/es/docs/Web/Reference/Events/scroll).
- {{DOMxRef("GlobalEventHandlers.onseeked")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`seeked`](/es/docs/Web/Reference/Events/seeked).
- {{DOMxRef("GlobalEventHandlers.onseeking")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`seek`](/es/docs/Web/Reference/Events/seek).
- {{DOMxRef("GlobalEventHandlers.onselect")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`select`](/es/docs/Web/Reference/Events/select).
- {{DOMxRef("GlobalEventHandlers.onselectstart")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`selectionchange`](/es/docs/Web/Reference/Events/selectionchange), es decir, cuando el usuario comience a realizar una nueva selección de texto en una página web.
- {{DOMxRef("GlobalEventHandlers.onselectionchange")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genera el evento [`selectionchange`](/es/docs/Web/Reference/Events/selectionchange), es decir, cuando cambia el texto seleccionado en una página web.
- {{DOMxRef("GlobalEventHandlers.onshow")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`show`](/es/docs/Web/Reference/Events/show).
- {{DOMxRef("GlobalEventHandlers.onsort")}} {{experimental_inline}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`sort`](/es/docs/Web/Reference/Events/sort).
- {{DOMxRef("GlobalEventHandlers.onstalled")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`stalled`](/es/docs/Web/Reference/Events/stalled).
- {{DOMxRef("GlobalEventHandlers.onsubmit")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`submit`](/es/docs/Web/Reference/Events/submit).
- {{DOMxRef("GlobalEventHandlers.onsuspend")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`suspend`](/es/docs/Web/Reference/Events/suspend).
- {{DOMxRef("GlobalEventHandlers.ontimeupdate")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`timeupdate`](/es/docs/Web/Reference/Events/timeupdate).
- {{DOMxRef("GlobalEventHandlers.onvolumechange")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`volumechange`](/es/docs/Web/Reference/Events/volumechange).
- {{DOMxRef("GlobalEventHandlers.ontouchcancel")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`touchcancel`](/es/docs/Web/Reference/Events/touchcancel).
- {{DOMxRef("GlobalEventHandlers.ontouchend")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`touchend`](/es/docs/Web/Reference/Events/touchend).
- {{DOMxRef("GlobalEventHandlers.ontouchmove")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`touchmove`](/es/docs/Web/Reference/Events/touchmove).
- {{DOMxRef("GlobalEventHandlers.ontouchstart")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`touchstart`](/es/docs/Web/Reference/Events/touchstart).
- {{DOMxRef("GlobalEventHandlers.ontransitioncancel")}}
  - : Se llama a [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) cuando se envía un evento [`transitioncancel`](/es/docs/Web/Reference/Events/transitioncancel), lo cual indica que [se canceló la transición CSS](/es/docs/Web/CSS/CSS_Transitions).
- {{DOMxRef("GlobalEventHandlers.ontransitionend")}}
  - : Se llama a [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) cuando se envía un evento [`transitionend`](/es/docs/Web/Reference/Events/transitionend), lo cual indica que [la transición CSS](/es/docs/Web/CSS/CSS_Transitions) se ha terminado de reproducir.
- {{DOMxRef("GlobalEventHandlers.ontransitionrun")}}
  - : Se llama a [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) cuando se envía un evento [`transitionrun`](/es/docs/Web/Reference/Events/transitionrun), lo cual indica que [la transición CSS](/es/docs/Web/CSS/CSS_Transitions) se está ejecutando, aunque no necesariamente se inició.
- {{DOMxRef("GlobalEventHandlers.ontransitionstart")}}
  - : Se llama a [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) cuando se envía un evento [`transitionstart`](/es/docs/Web/Reference/Events/transitionstart), lo cual indica que [la transición CSS](/es/docs/Web/CSS/CSS_Transitions) ha comenzado a realizar la transición.
- {{DOMxRef("GlobalEventHandlers.onwaiting")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento [`waiting`](/es/docs/Web/Reference/Events/waiting).

## Métodos

_Esta interfaz no define métodos_

## Ve también

- {{DOMxRef("Element")}}
- [`event handler`](/es/docs/Web/Reference/Events/Event_handlers)
- {{DOMxRef("Event")}}
