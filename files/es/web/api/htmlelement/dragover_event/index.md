---
title: "HTMLElement: dragover event"
slug: Web/API/HTMLElement/dragover_event
translation_of: Web/API/HTMLElement/dragover_event
original_slug: Web/API/HTMLElement/dragover_event
page-type: web-api-event
browser-compat: api.HTMLElement.dragover_event
---

{{APIRef}}

El evento `dragover` se activa cuando un elemento o texto se arrastra a un objetivo válido (cada pocos cientos de milisegundos).

El evento se activa en la caída al objetivo.

## Sintaxis

Usar el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}} , o establecer una propiedad de controlador de eventos.

```js
addEventListener('dragover', (event) => {});

ondragover = (event) => { };
```

## Propiedades

| Property | Type | Description |
| --- | --- | --- |
| `target` {{readonlyInline}} | [`EventTarget`](/en-US/docs/Web/API/EventTarget "EventTarget is an interface implemented by objects that can receive events and may have listeners for them.") | El elemento que se encontraba bajo el elemento que está siendo arrastrado. |
| `type` {{readonlyInline}} | [`DOMString`](/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") | El tipo de evento. |
| `bubbles` {{readonlyInline}} | [`Boolean`](/en-US/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.") | Si el evento se propaga normalmente o no. |
| `cancelable` {{readonlyInline}} | [`Boolean`](/en-US/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.") | Si el evento es cancelable o no. |
| `view` {{readonlyInline}} | [`WindowProxy`](/en-US/docs/Web/API/WindowProxy "The documentation about this has not yet been written; please consider contributing!") | [`document.defaultView`](/en-US/docs/Web/API/Document/defaultView "In browsers, document.defaultView returns the window object associated with a document, or null if none is available.") (`window` del documento) |
| `detail` {{readonlyInline}} | `long` (`float`) | 0.  |
| `dataTransfer` | DataTransfer | Los datos que subyacen a la operación de drag-and-drop , conocidas como [drag data store](/en-US/docs/Web/API/DataTransfer). Modo protegido. |
| `currentTarget` {{readonlyInline}} | EventTarget | El nodo que tiene adjunto el detector de eventos. |
| `relatedTarget` {{readonlyInline}} | EventTarget | Para los eventos de `mouseover`, `mouseout`, `mouseenter` y `mouseleave`:El objetivo del evento complementario (el objetivo `mouseleave` en el caso del evento `mouseenter`). `null` sino. |
| `screenX` {{readonlyInline}} | long | La coordinada X del puntro del ratón en coordenadas globales (de pantalla). |
| `screenY` {{readonlyInline}} | long | La coordinada Y del puntero del ratón en coordenadas globales (en pantalla). |
| `clientX` {{readonlyInline}} | long | La coordinada X del puntro del ratón en coordenadas locales (DOM content). |
| `clientY` {{readonlyInline}} | long | La coordinada Y del puntro del ratón en coordenadas locales (DOM content). |
| `button` {{readonlyInline}} | unsigned short | El número de botón que se preionó cuando el ecento fue ectivado: Botón izquierdo=0, botón del medio=1(en caso de que esté presente), botón derecho=2. Para ratones configurados para zurdos donde laas acciones están configuradas al contrario los valores se leerán de derecha a izquierda. |
| `buttons` {{readonlyInline}} | unsigned short | Los botones presionados cuando el evento de ratón se activa: botón izquierdo=1,botón derecho=2, botón medio (rueda)=4, 4º botón (tipo "hacia atrás del navegador"=8, 5º botón ("tipo hacia delante en el navegador"=16. Si dos o más botones se presionan, devolverá la suma lógica de los valores. Ej: si se presionan los botones izquierdo y derecho, devolverá 3 (=1\|2). [M](/en-US/docs/Web/API/MouseEvent)ás información. |
| `mozPressure` {{readonlyInline}} | float | La cantidad de presión aplicada en dispositivos táctiles cuando se genera el evento; Este valor tiene un rango entre 0.0 (mínima presión) y 1.0 (máxima presión) |
| `ctrlKey` {{readonlyInline}} | boolean | `true` si la tecla control estaba pulsada cuando el evento se lanzó `false` en cualquier otro caso. |
| `shiftKey` {{readonlyInline}} | boolean | `true` si la tecla shift estaba pulsada cuando el evento de lanzó. `false` en otro caso. |
| `altKey` {{readonlyInline}} | boolean | `true` si la tecla alt estaba pulsada cuando el evento se lanzó. `false` si no. |
| `metaKey` {{readonlyInline}} | boolean | `true` si la tecla meta estaba presionada cuando el evento se disparó. `false` si no. |

## Tipo de Evento

Un {{domxref("DragEvent")}}. Hereda de {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Propiedades del Evento

_En adición a las propiedades listadas, a continuación las propiedades de la interfaz principal, {{domxref("Event")}}, están disponibles._

- {{domxref("DragEvent/dataTransfer", "DragEvent.dataTransfer")}} {{ReadOnlyInline}}
  - : Los datos que se transfieren durante una interacción de arrastrar y soltar.

## Ejemplos

### Un ejemplo mínimo de arrastrar y soltar

En este ejemplo, tenemos un elemento arrastrable dentro de un contenedor. Intenta agarrar el elemento, arrastrarlo sobre el otro contenedor y luego soltarlo.

Aquí utilizamos tres manejadores de eventos:

- En el manejador de eventos dragstart, obtenemos una referencia al elemento que el usuario arrastró
- En el manejador del evento dragover para el contenedor de destino, llamamos a event.preventDefault(), que lo habilita para recibir eventos de drop.
- En el manejador de eventos drop para la zona de caída, manejamos el movimiento del elemento arrastrable desde el contenedor original a la zona de caída.

For a more complete example of [drag](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drag_event) and drop, see the page for the drag event.

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

{{EmbedLiveSample('Arrastrar un elemento por cada contenedor')}}

## Especificaciones

| Specification | Status | Comment |
| --- | --- | --- |
| {{SpecName("HTML WHATWG", "interaction.html#dndevents", "dragover")}} | {{Spec2("HTML WHATWG")}} |     |
| {{SpecName("HTML5.1", "editing.html#dndevents", "dragover")}} | {{Spec2("HTML5.1")}} | Initial definition |

## Compatibilidad con navegadores

{{Compat("api.Document.dragover_event")}}

## Véase también

- Otros eventos de arrastre:

    - {{event("drag")}}
    - {{event("dragstart")}}
    - {{event("dragend")}}
    - {{event("dragover")}}
    - {{event("dragenter")}}
    - {{event("dragleave")}}
    - {{event("dragexit")}}
    - {{event("drop")}}