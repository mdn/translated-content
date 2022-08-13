---
title: dragover
slug: Web/API/Document/dragover_event
translation_of: Web/API/Document/dragover_event
---
{{APIRef}}

El evento `dragover` se activa cuando un elemento o texto se arrastra a un objetivo válido (cada pocos cientos de milisegundos).

El evento se activa en la caída al objetivo.

## General info

| Bubbles        | Yes                                                            |
| -------------- | -------------------------------------------------------------- |
| Cancelable     | Yes                                                            |
| Target objects | {{domxref("Document")}}, {{domxref("Element")}} |
| Interface      | {{domxref("DragEvent")}}                               |
| Default Action | Reset the current drag operation to "none".                    |

## Properties

| Property                                 | Type                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | [`EventTarget`](/es/docs/Web/API/EventTarget "EventTarget is an interface implemented by objects that can receive events and may have listeners for them.")  | El elemento que se encontraba bajo el elemento que está siendo arrastrado.                                                                                                                                                                                                                                                                                                                                                    |
| `type` {{readonlyInline}}          | [`DOMString`](/es/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") | El tipo de evento.                                                                                                                                                                                                                                                                                                                                                                                                            |
| `bubbles` {{readonlyInline}}       | [`Boolean`](/es/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Si el evento se propaga normalmente o no.                                                                                                                                                                                                                                                                                                                                                                                     |
| `cancelable` {{readonlyInline}}    | [`Boolean`](/es/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Si el evento es cancelable o no.                                                                                                                                                                                                                                                                                                                                                                                              |
| `view` {{readonlyInline}}          | [`WindowProxy`](/es/docs/Web/API/WindowProxy "The documentation about this has not yet been written; please consider contributing!")                         | [`document.defaultView`](/es/docs/Web/API/Document/defaultView "In browsers, document.defaultView returns the window object associated with a document, or null if none is available.") (`window` del documento)                                                                                                                                                                                                              |
| `detail` {{readonlyInline}}        | `long` (`float`)                                                                                                                                             | 0.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `dataTransfer`                           | DataTransfer                                                                                                                                                 | Los datos que subyacen a la operación de drag-and-drop , conocidas como [drag data store](/es/docs/Web/API/DataTransfer). Modo protegido.                                                                                                                                                                                                                                                                                     |
| `currentTarget` {{readonlyInline}} | EventTarget                                                                                                                                                  | El nodo que tiene adjunto el detector de eventos.                                                                                                                                                                                                                                                                                                                                                                             |
| `relatedTarget` {{readonlyInline}} | EventTarget                                                                                                                                                  | Para los eventos de `mouseover`, `mouseout`, `mouseenter` y `mouseleave`:El objetivo del evento complementario (el objetivo `mouseleave` en el caso del evento `mouseenter`). `null` sino.                                                                                                                                                                                                                                    |
| `screenX` {{readonlyInline}}       | long                                                                                                                                                         | La coordinada X del puntro del ratón en coordenadas globales (de pantalla).                                                                                                                                                                                                                                                                                                                                                   |
| `screenY` {{readonlyInline}}       | long                                                                                                                                                         | La coordinada Y del puntero del ratón en coordenadas globales (en pantalla).                                                                                                                                                                                                                                                                                                                                                  |
| `clientX` {{readonlyInline}}       | long                                                                                                                                                         | La coordinada X del puntro del ratón en coordenadas locales (DOM content).                                                                                                                                                                                                                                                                                                                                                    |
| `clientY` {{readonlyInline}}       | long                                                                                                                                                         | La coordinada Y del puntro del ratón en coordenadas locales (DOM content).                                                                                                                                                                                                                                                                                                                                                    |
| `button` {{readonlyInline}}        | unsigned short                                                                                                                                               | El número de botón que se preionó cuando el ecento fue ectivado: Botón izquierdo=0, botón del medio=1(en caso de que esté presente), botón derecho=2. Para ratones configurados para zurdos donde laas acciones están configuradas al contrario los valores se leerán de derecha a izquierda.                                                                                                                                 |
| `buttons` {{readonlyInline}}       | unsigned short                                                                                                                                               | Los botones presionados cuando el evento de ratón se activa: botón izquierdo=1,botón derecho=2, botón medio (rueda)=4, 4º botón (tipo "hacia atrás del navegador"=8, 5º botón ("tipo hacia delante en el navegador"=16. Si dos o más botones se presionan, devolverá la suma lógica de los valores. Ej: si se presionan los botones izquierdo y derecho, devolverá 3 (=1\|2). [M](/es/docs/Web/API/MouseEvent)ás información. |
| `mozPressure` {{readonlyInline}}   | float                                                                                                                                                        | La cantidad de presión aplicada en dispositivos táctiles cuando se genera el evento; Este valor tiene un rango entre 0.0 (mínima presión) y 1.0 (máxima presión)                                                                                                                                                                                                                                                              |
| `ctrlKey` {{readonlyInline}}       | boolean                                                                                                                                                      | `true` si la tecla control estaba pulsada cuando el evento se lanzó `false` en cualquier otro caso.                                                                                                                                                                                                                                                                                                                           |
| `shiftKey` {{readonlyInline}}      | boolean                                                                                                                                                      | `true` si la tecla shift estaba pulsada cuando el evento de lanzó. `false` en otro caso.                                                                                                                                                                                                                                                                                                                                      |
| `altKey` {{readonlyInline}}        | boolean                                                                                                                                                      | `true` si la tecla alt estaba pulsada cuando el evento se lanzó. `false` si no.                                                                                                                                                                                                                                                                                                                                               |
| `metaKey` {{readonlyInline}}       | boolean                                                                                                                                                      | `true` si la tecla meta estaba presionada cuando el evento se disparó. `false` si no.                                                                                                                                                                                                                                                                                                                                         |

## Example

```js
<div class="dropzone">
  <div id="draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">
    This div is draggable
  </div>
</div>
<div class="dropzone"></div>
<div class="dropzone"></div>
<div class="dropzone"></div>

<style>
  #draggable {
    width: 200px;
    height: 20px;
    text-align: center;
    background: white;
  }

  .dropzone {
    width: 200px;
    height: 20px;
    background: blueviolet;
    margin-bottom: 10px;
    padding: 10px;
  }
</style>

<script>
  var dragged;

  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";
  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "purple";
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
      }

  }, false);

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }

  }, false);
</script>
```

## Specifications

| Specification                                                                                | Status                           | Comment            |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("HTML WHATWG", "interaction.html#dndevents", "dragover")}} | {{Spec2("HTML WHATWG")}} |                    |
| {{SpecName("HTML5.1", "editing.html#dndevents", "dragover")}}             | {{Spec2("HTML5.1")}}     | Initial definition |

## Browser compatibility

{{Compat("api.Document.dragover_event")}}

## See also

- {{event("drag")}}
- {{event("dragstart")}}
- {{event("dragend")}}
- {{event("dragover")}}
- {{event("dragenter")}}
- {{event("dragleave")}}
- {{event("dragexit")}}
- {{event("drop")}}
