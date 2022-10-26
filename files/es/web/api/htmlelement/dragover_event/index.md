---
title: "HTMLElement: dragover event"
slug: Web/API/HTMLElement/dragover_event
translation_of: Web/API/HTMLElement/dragover_event
original_slug: Web/API/HTMLElement/dragover_event
page-type: web-api-event
browser-compat: api.HTMLElement.dragover_event
---

{{APIRef}}

El evento `dragover` se activa cuando un elemento o texto se arrastra sobre un objetivo de caída válido (cada cientos de milisegundos).

El evento se activa en la caída al objetivo.

## Sintaxis

Usar el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}} , o establecer una propiedad de controlador de eventos.

```js
addEventListener('dragover', (event) => {});

ondragover = (event) => { };
```

## Propiedades del Evento

_En adición a las propiedades listadas, a continuación las propiedades de la interfaz principal, {{domxref("Event")}}, están disponibles._

- {{domxref("DragEvent/dataTransfer", "DragEvent.dataTransfer")}} {{ReadOnlyInline}}
  - : Los datos que se transfieren durante una interacción de arrastrar y soltar.

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

Para un ejemplo más completo de drag y drop, ver la página del evento [`drag`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drag_event).

### HTML

```html
    <div class="dropzone">
      <div
        id="draggable"
        draggable="true"
        ondragstart="event.dataTransfer.setData('text/plain',null)"
      >
        Este div es arrastrable
      </div>
    </div>
    <div class="dropzone"></div>
    <div class="dropzone"></div>
    <div class="dropzone"></div>
```

### CSS

```css
#draggable {
  width: 200px;
  height: 20px;
  text-align: center;
  background: white;
}

.dropzone {
  width: 220px;
  height: 40px;
  background: blueviolet;
  margin-bottom: 10px;
  padding: 10px;
}
```

### JavaScript

```js
var dragged;

/* eventos disparados en el objetivo de arrastre */
document.addEventListener('drag', function (event) {}, false);

document.addEventListener(
  'dragstart',
  function (event) {
    // almacenar una ref. en el elemento arrastrado
    dragged = event.target;
    // hacerlo medio transparente
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  'dragend',
  function (event) {
    // restablecer la transparencia
    event.target.style.opacity = '';
  },
  false
);

/* eventos disparados en el objetivo de caida */
document.addEventListener(
  'dragover',
  function (event) {
    // impedir por defecto que se permita la caída
    event.preventDefault();
  },
  false
);

document.addEventListener(
  'dragenter',
  function (event) {
    // resaltar el posible objetivo de caída cuando el elemento arrastrable entra en él
    if (event.target.className == 'dropzone') {
      event.target.style.background = 'purple';
    }
  },
  false
);

document.addEventListener(
  'dragleave',
  function (event) {
    // restablecer el fondo del posible objetivo de caída cuando el elemento arrastrable lo abandona
    if (event.target.className == 'dropzone') {
      event.target.style.background = '';
    }
  },
  false
);

document.addEventListener(
  'drop',
  function (event) {
    // evitar la acción por defecto (abrir como enlace para algunos elementos)
    event.preventDefault();
    // mover el elemento arrastrado al objetivo de caída seleccionado
    if (event.target.className == 'dropzone') {
      event.target.style.background = '';
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  },
  false
);
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
