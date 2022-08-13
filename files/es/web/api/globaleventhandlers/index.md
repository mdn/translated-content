---
title: GlobalEventHandlers
slug: Web/API/GlobalEventHandlers
tags:
  - API
  - DOM HTML
  - GlobalEventHandlers
  - Mixin
  - Referencia
  - combinación
  - eventos
translation_of: Web/API/GlobalEventHandlers
---
{{ApiRef("DOM HTML")}}

La combinación («_mixin_» en inglés) **`GlobalEventHandlers` **describe los controladores de eventos comunes a varias interfaces como {{DOMxRef("HTMLElement")}}, {{DOMxRef("Document")}} o {{DOMxRef("Window")}}. Cada una de estas interfaces puede, por supuesto, agregar más controladores de eventos además de los que se enumeran a continuación.

> **Nota:** `GlobalEventHandlers` es una combinación («_mixin_») y no una interfaz; en realidad, no puedes crear un objeto de tipo `GlobalEventHandlers`.

## Propiedades

_Esta interfaz no incluye ninguna propiedad excepto los controladores de eventos que se enumeran a continuación._

### Controladores de eventos

Estos controladores de eventos se definen en el mixin {{DOMxRef("GlobalEventHandlers")}} y se implementan mediante {{DOMxRef("HTMLElement")}}, {{DOMxRef("Document")}}, {{DOMxRef("Window ")}}, así como por {{DOMxRef("WorkerGlobalScope")}} para «_Web Workers_».

- {{DOMxRef("GlobalEventHandlers.onabort")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{DOMxRef("HTMLMediaElement/abort_event", "abort")}}.
- {{DOMxRef("GlobalEventHandlers.onanimationcancel")}} {{Non-standard_inline}}
  - : Se llama a {{event("Event_handlers", "event handler")}} cuando se envía un evento {{event("animationcancel")}}, lo cual indica que una {{web.link("/s/docs/Web/CSS/CSS_Animations", "animación CSS")}} se ha cancelado.
- {{DOMxRef("GlobalEventHandlers.onanimationend")}} {{Non-standard_inline}}
  - : Se llama a {{event("Event_handlers", "event handler")}} cuando se envía un evento {{event("animationend")}}, lo cual indica que {{web.link("/es/docs/Web/CSS/CSS_Animations", "la animación CSS")}} se ha detenido.
- {{DOMxRef("GlobalEventHandlers.onanimationiteration")}} {{Non-standard_inline}}
  - : Un {{event("Event_handlers", "event handler")}} llamado cuando se ha enviado un evento {{event("animationiteration")}}, indica que una {{web.link("/es/docs/Web/CSS/CSS_Animations", "animación CSS")}} ha comenzado a reproducir una nueva iteración de la secuencia de animación.
- {{DOMxRef("GlobalEventHandlers.onanimationstart")}} {{Non-standard_inline}}
  - : Se llama a {{event("Event_handlers", "event handler")}} cuando se envía un evento {{event("animationstart")}}, lo cual indica que una {{web.link("/es/docs/Web/CSS/CSS_Animations", "animación CSS")}} se ha comenzado a reproducir.
- {{DOMxRef("GlobalEventHandlers.onauxclick")}} {{Non-standard_inline}}
  - : Se llama a {{event("Event_handlers", "event handler")}} cuando se envía un evento {{event("auxclick")}}, el cual indica que se ha presionado un botón no principal en un dispositivo de entrada (por ejemplo, un botón central del ratón).
- {{DOMxRef("GlobalEventHandlers.onblur")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("blur")}}.
- {{DOMxRef("GlobalEventHandlers.onerror")}}
  - : Es un {{DOMxRef("OnErrorEventHandler")}} que representa el código que se llamará cuando se genere el evento {{event("error")}}.
- {{DOMxRef("GlobalEventHandlers.onfocus")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("focus")}}.
- {{DOMxRef("GlobalEventHandlers.oncancel")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("cancel")}}.
- {{DOMxRef("GlobalEventHandlers.oncanplay")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("canplay")}}.
- {{DOMxRef("GlobalEventHandlers.oncanplaythrough")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("canplaythrough")}}.
- {{DOMxRef("GlobalEventHandlers.onchange")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("change")}}.
- {{DOMxRef("GlobalEventHandlers.onclick")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("click")}}.
- {{DOMxRef("GlobalEventHandlers.onclose")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("close")}}.
- {{DOMxRef("GlobalEventHandlers.oncontextmenu")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("contextmenu")}}.
- {{DOMxRef("GlobalEventHandlers.oncuechange")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("cuechange")}}.
- {{DOMxRef("GlobalEventHandlers.ondblclick")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("dblclick")}}.
- {{DOMxRef("GlobalEventHandlers.ondrag")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("drag")}}.
- {{DOMxRef("GlobalEventHandlers.ondragend")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("dragend")}}.
- {{DOMxRef("GlobalEventHandlers.ondragenter")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("dragenter")}}.
- {{DOMxRef("GlobalEventHandlers.ondragexit")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("dragexit")}}.
- {{DOMxRef("GlobalEventHandlers.ondragleave")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("dragleave")}}.
- {{DOMxRef("GlobalEventHandlers.ondragover")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("dragover")}}.
- {{DOMxRef("GlobalEventHandlers.ondragstart")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("dragstart")}}.
- {{DOMxRef("GlobalEventHandlers.ondrop")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("drop")}}.
- {{DOMxRef("GlobalEventHandlers.ondurationchange")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("durationchange")}}.
- {{DOMxRef("GlobalEventHandlers.onemptied")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("emptied")}}.
- {{DOMxRef("GlobalEventHandlers.onended")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("ended")}}.
- {{DOMxRef("GlobalEventHandlers.onformdata")}}
  - : Es un {{event("Event_handlers", "event handler")}} para procesar eventos {{event("formdata")}}, que se activa después de que se construye la lista de entrada que representa los datos del formulario.
- {{DOMxRef("GlobalEventHandlers.ongotpointercapture")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el tipo de evento {{event("gotpointercapture")}}.
- {{DOMxRef("GlobalEventHandlers.oninput")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("input")}}.
- {{DOMxRef("GlobalEventHandlers.oninvalid")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("invalid")}}.
- {{DOMxRef("GlobalEventHandlers.onkeydown")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("keydown")}}.
- {{DOMxRef("GlobalEventHandlers.onkeypress")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("keypress")}}.
- {{DOMxRef("GlobalEventHandlers.onkeyup")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("keyup")}}.
- {{DOMxRef("GlobalEventHandlers.onload")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("load")}} event is raised.
- {{DOMxRef("GlobalEventHandlers.onloadeddata")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("loadeddata ")}}.
- {{DOMxRef("GlobalEventHandlers.onloadedmetadata")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("loadedmetadata")}}.
- {{DOMxRef("GlobalEventHandlers.onloadend")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("loadend")}} (cuando el progreso se haya detenido en la carga de un recurso).
- {{DOMxRef("GlobalEventHandlers.onloadstart")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("loadstart")}} (cuando el progreso ha comenzado a cargar un recurso).
- {{DOMxRef("GlobalEventHandlers.onlostpointercapture")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el tipo de evento {{event("lostpointercapture")}}.
- {{DOMxRef("GlobalEventHandlers.onmousedown")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("mousedown")}}.
- {{DOMxRef("GlobalEventHandlers.onmouseenter")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("mouseenter")}}.
- {{DOMxRef("GlobalEventHandlers.onmouseleave")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("mouseleave")}}.
- {{DOMxRef("GlobalEventHandlers.onmousemove")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("mousemove")}}.
- {{DOMxRef("GlobalEventHandlers.onmouseout")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("mouseout")}}.
- {{DOMxRef("GlobalEventHandlers.onmouseover")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("mouseover")}}.
- {{DOMxRef("GlobalEventHandlers.onmouseup")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("mouseup")}}.
- {{DOMxRef("GlobalEventHandlers.onmousewheel")}} {{Non-standard_inline}} {{Deprecated_inline}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("mousewheel")}}. Desaprobado. Utiliza `onwheel` en su lugar.
- {{DOMxRef("GlobalEventHandlers.onwheel")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("wheel")}}.
- {{DOMxRef("GlobalEventHandlers.onpause")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("pause")}}.
- {{DOMxRef("GlobalEventHandlers.onplay")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("play")}}.
- {{DOMxRef("GlobalEventHandlers.onplaying")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("playing")}}.
- {{DOMxRef("GlobalEventHandlers.onpointerdown")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("pointerdown")}}.
- {{DOMxRef("GlobalEventHandlers.onpointermove")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("pointermove")}}.
- {{DOMxRef("GlobalEventHandlers.onpointerup")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("pointerup")}}.
- {{DOMxRef("GlobalEventHandlers.onpointercancel")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("pointercancel")}}.
- {{DOMxRef("GlobalEventHandlers.onpointerover")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("pointerover")}}.
- {{DOMxRef("GlobalEventHandlers.onpointerout")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("pointerout")}}.
- {{DOMxRef("GlobalEventHandlers.onpointerenter")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("pointerenter")}}.
- {{DOMxRef("GlobalEventHandlers.onpointerleave")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("pointerleave")}}.
- {{DOMxRef("GlobalEventHandlers.onpointerlockchange")}} {{experimental_inline}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("pointerlockchange")}}.
- {{DOMxRef("GlobalEventHandlers.onpointerlockerror")}} {{experimental_inline}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("pointerlockerror")}}.
- {{DOMxRef("GlobalEventHandlers.onprogress")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("progress")}}.
- {{DOMxRef("GlobalEventHandlers.onratechange")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("ratechange")}}.
- {{DOMxRef("GlobalEventHandlers.onreset")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("reset")}}.
- {{DOMxRef("GlobalEventHandlers.onresize")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("resize")}}.
- {{DOMxRef("GlobalEventHandlers.onscroll")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("scroll")}}.
- {{DOMxRef("GlobalEventHandlers.onseeked")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("seeked")}}.
- {{DOMxRef("GlobalEventHandlers.onseeking")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("seek")}}.
- {{DOMxRef("GlobalEventHandlers.onselect")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("select")}}.
- {{DOMxRef("GlobalEventHandlers.onselectstart")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("selectionchange")}}, es decir, cuando el usuario comience a realizar una nueva selección de texto en una página web.
- {{DOMxRef("GlobalEventHandlers.onselectionchange")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genera el evento {{event("selectionchange")}}, es decir, cuando cambia el texto seleccionado en una página web.
- {{DOMxRef("GlobalEventHandlers.onshow")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("show")}}.
- {{DOMxRef("GlobalEventHandlers.onsort")}} {{experimental_inline}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("sort")}}.
- {{DOMxRef("GlobalEventHandlers.onstalled")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("stalled")}}.
- {{DOMxRef("GlobalEventHandlers.onsubmit")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("submit")}}.
- {{DOMxRef("GlobalEventHandlers.onsuspend")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("suspend")}}.
- {{DOMxRef("GlobalEventHandlers.ontimeupdate")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("timeupdate")}}.
- {{DOMxRef("GlobalEventHandlers.onvolumechange")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("volumechange")}}.
- {{DOMxRef("GlobalEventHandlers.ontouchcancel")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("touchcancel")}}.
- {{DOMxRef("GlobalEventHandlers.ontouchend")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("touchend")}}.
- {{DOMxRef("GlobalEventHandlers.ontouchmove")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("touchmove")}}.
- {{DOMxRef("GlobalEventHandlers.ontouchstart")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("touchstart")}}.
- {{DOMxRef("GlobalEventHandlers.ontransitioncancel")}}
  - : Se llama a {{event("Event_handlers", "event handler")}} cuando se envía un evento {{event("transitioncancel")}}, lo cual indica que {{web.link("/es/docs/Web/CSS/CSS_Transitions", "se canceló la transición CSS")}}.
- {{DOMxRef("GlobalEventHandlers.ontransitionend")}}
  - : Se llama a {{event("Event_handlers", "event handler")}} cuando se envía un evento {{event("transitionend")}}, lo cual indica que {{web.link("/es/docs/Web/CSS/CSS_Transitions", "la transición CSS")}} se ha terminado de reproducir.
- {{DOMxRef("GlobalEventHandlers.ontransitionrun")}}
  - : Se llama a {{event("Event_handlers", "event handler")}} cuando se envía un evento {{event("transitionrun")}}, lo cual indica que {{web.link("/es/docs/Web/CSS/CSS_Transitions", "la transición CSS")}} se está ejecutando, aunque no necesariamente se inició.
- {{DOMxRef("GlobalEventHandlers.ontransitionstart")}}
  - : Se llama a {{event("Event_handlers", "event handler")}} cuando se envía un evento {{event("transitionstart")}}, lo cual indica que {{web.link("/es/docs/Web/CSS/CSS_Transitions", "la transición CSS")}} ha comenzado a realizar la transición.
- {{DOMxRef("GlobalEventHandlers.onwaiting")}}
  - : Es un {{event("Event_handlers", "event handler")}} que representa el código que se llamará cuando se genere el evento {{event("waiting")}}.

## Métodos

_Esta interfaz no define métodos_

## Especificaciones

| Especificación                                                                                                                   | Estado                               | Comentario                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName("Selection API",'', 'Extensión a GlobalEventHandlers')}}                                     | {{Spec2('Selection API')}} | Agrega `en el cambio de selección.`                                                                                                                    |
| {{SpecName('Pointer Lock', '#extensions-to-the-document-interface', 'Extensión de Document')}} | {{Spec2('Pointer Lock')}}     | Agrega `onpointerlockchange` y `onpointerlockerror` en {{DOMxRef("Document")}}. Está implementado experimentalmente en `GlobalEventHandlers`. |
| {{SpecName('HTML WHATWG', '#globaleventhandlers', 'GlobalEventHandlers')}}                             | {{ Spec2('HTML WHATWG') }} | Sin cambios desde la última instantánea, {{SpecName("HTML5.1")}}.                                                                             |
| {{SpecName('HTML5.1', '#globaleventhandlers', 'GlobalEventHandlers')}}                                     | {{Spec2('HTML5.1')}}         | Instantánea de {{SpecName("HTML WHATWG")}}. Agregó `onsort` desde la instantánea de {{SpecName("HTML5 W3C")}}.                         |
| {{SpecName("HTML5 W3C", "#globaleventhandlers", "GlobalEventHandlers")}}                                 | {{ Spec2('HTML5 W3C') }}     | Instantánea de {{SpecName("HTML WHATWG")}}. Creación de `GlobalEventHandlers` (propiedades en el destino anterior).                           |

## Compatibilidad del navegador

{{Compat("api.GlobalEventHandlers")}}

## Ve también

- {{DOMxRef("Element")}}
- {{event("Event_handlers", "event handler")}}
- {{DOMxRef("Event")}}
