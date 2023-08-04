---
title: "HTMLElement: dragover event"
slug: Web/API/HTMLElement/dragover_event
---

{{APIRef}}

El evento `dragover` se activa cuando un elemento o texto se arrastra sobre un objetivo de caída válido (cada cientos de milisegundos).

El evento se activa en el objetivo de caída

## Sintaxis

Usar el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}} , o establecer una propiedad de manejador de eventos.

```js
addEventListener("dragover", (event) => {});

ondragover = (event) => {};
```

## Tipo de Evento

Un {{domxref("DragEvent")}}. Hereda de {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Propiedades del Evento

_En adición a las propiedades listadas, a continuación las propiedades de la interfaz principal, {{domxref("Event")}}, están disponibles._

- {{domxref("DragEvent/dataTransfer", "DragEvent.dataTransfer")}} {{ReadOnlyInline}}
  - : Los datos que se transfieren durante una interacción de arrastrar y soltar.

## Ejemplos

### Un ejemplo mínimo de arrastrar y soltar

En este ejemplo, tenemos un elemento arrastrable dentro de un contenedor. Intenta agarrar el elemento, arrastralo sobre el otro contenedor y luego suéltalo.

Aquí utilizamos tres manejadores de eventos:

- En el manejador de eventos `dragstart`, obtenemos una referencia al elemento que el usuario arrastró
- En el manejador del evento `dragover` para el contenedor de destino, llamamos a `event.preventDefault()`, que lo habilita para recibir eventos de drop.
- En el manejador de eventos `drop` para la zona de caída, manejamos el movimiento del elemento arrastrable desde el contenedor original a la zona de caída.

Para un ejemplo más completo de drag y drop, ver la página del evento [`drag`](/es/docs/Web/API/HTMLElement/drag_event).

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">Este div es arrastrable</div>
</div>
<div class="dropzone" id="droptarget"></div>
```

#### CSS

```css
body {
  /* Impedir que el usuario seleccione texto en el ejemplo */
  user-select: none;
}
#draggable {
  text-align: center;
  background: white;
}
.dropzone {
  width: 200px;
  height: 20px;
  background: blueviolet;
  margin: 10px;
  padding: 10px;
}
```

#### JavaScript

```js
let dragged = null;
const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // almacenar una ref. en el elemento arrastrado
  dragged = event.target;
});
const target = document.getElementById("droptarget");
target.addEventListener("dragover", (event) => {
  // impedir el valor predeterminado para permitir soltar
  event.preventDefault();
});
target.addEventListener("drop", (event) => {
  // impedir la acción predeterminada (abrir como enlace para algunos elementos)
  event.preventDefault();
  // mover el elemento arrastrado al destino de colocación seleccionado
  if (event.target.className === "dropzone") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
```

#### Resultado

{{EmbedLiveSample('Un ejemplo mínimo de arrastrar y soltar')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Otros eventos de arrastre:

  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}

- Este evento en otros objetivos:

  - {{domxref("Window")}}: {{domxref("Window/dragover_event", "dragover")}} event
  - {{domxref("Document")}}: {{domxref("Document/dragover_event", "dragover")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragover_event", "dragover")}} event
