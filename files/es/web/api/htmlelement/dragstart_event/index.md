---
title: "HTMLElement: dragstart event"
slug: Web/API/HTMLElement/dragstart_event
translation_of: Web/API/HTMLElement/dragstart_event
original_slug: Web/API/HTMLElement/dragstart_event
page-type: web-api-event
browser-compat: api.HTMLElement.dragstart_event
---

# HTMLElement: dragstart event

El evento `dragstart` se dispara cuando el usuario arrastra un elemento o una selección de texto.


## Sintaxis

Usar el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}} , o establecer una propiedad de controlador de eventos.

```js
addEventListener('dragstart', (event) => {});

ondragstart = (event) => { };
```


## Tipo de Evento

Un {{domxref("DragEvent")}}. Hereda de {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}


## Propiedades del Evento

En adición a las propiedades listadas, a continuación las propiedades de la interfaz principal, {{domxref("Event")}}, están disponibles.

- {{domxref("DragEvent/dataTransfer", "DragEvent.dataTransfer")}} {{ReadOnlyInline}}
  - Los datos que se transfieren durante una interacción de arrastrar y soltar.


## Ejemplos

### Configurar la opacidad al inicio del movimiento

En este ejemplo, tenemos un elemento arrastrable dentro de un contenedor. Intenta agarrar el elemento, arrastralo y luego sueltalo.

Escuchamos el evento `dragstart` para hacer que el elemento sea medio transparente mientras se arrastra.


#### HTML

```html
<div id="container">
  <div id="draggable" draggable="true">This div is draggable</div>
</div>
<div class="dropzone"></div>
```


#### CSS

```css
body {
  /* Prevent the user selecting text in the example */
  user-select: none;
}
#draggable {
  text-align: center;
  background: white;
}
#container {
  width: 200px;
  height: 20px;
  background: blueviolet;
  padding: 10px;
}
.dragging {
  opacity: 0.5;
}
```


#### JavaScript

```js
const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // make it half transparent
  event.target.classList.add("dragging");
});
source.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
});
```


#### Resultado

{{EmbedLiveSample('Configurar la opacidad al inicio del movimiento')}}


## Especificaciones

{{Specifications}}


## Compatibilidad con navegadores

{{Compat}}


## Véase también

- Otros eventos de arrastre:
  
  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}

- Este evento en otros objetivos:
  
  - {{domxref("Window")}}: {{domxref("Window/dragstart_event", "dragstart")}} event
  - {{domxref("Document")}}: {{domxref("Document/dragstart_event", "dragstart")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragstart_event", "dragstart")}} event
