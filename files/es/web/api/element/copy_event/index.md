---
title: "Element: evento copy"
short-title: copy
slug: Web/API/Element/copy_event
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef}}

El evento **`copy`** (copiar) de la [API del portapapeles](/es/docs/Web/API/Clipboard_API) se dispara cuando el usuario inicia la acción de copiar por medio de la interfaz del usuario del navegador.

Por defecto, la acción del evento es copiar la selección (si existe) al portapapeles.

Un manejador para este evento permite _modificar_ el contenido del portapapeles al llamar a {{domxref("DataTransfer.setData", "setData(format, data)")}} en la propiedad {{domxref("ClipboardEvent.clipboardData")}} del evento, y cancelar la acción por defecto del objecto utilizando {{domxref("Event/preventDefault", "event.preventDefault()")}}.

Sin embargo, el manejador no puede _leer_ los datos del portapapeles.

Es posible construir y lanzar un evento `copy` [sintético](/es/docs/Web/Events/Creating_and_triggering_events), pero esto no afectará al portapapeles del sistema.

La [burbuja](/es/docs/Learn/JavaScript/Building_blocks/Event_bubbling) del evento, es [cancelable](/es/docs/Web/API/Event/cancelable) y [compuesta](/es/docs/Web/API/Event/composed).

## Sintaxis

Use el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establezca una propiedad de manejador de eventos.

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## Tipo de evento

Un {{domxref("ClipboardEvent")}}. Hereda de {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Ejemplos

### Ejemplo en vivo

#### HTML

```html
<div class="source" contenteditable="true">Copie el texto de esta caja.</div>
<div class="target" contenteditable="true">Y péguelo en esta otra.</div>
```

```css hidden
div.source,
div.target {
  border: 1px solid gray;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 1rem;
  background-color: #e9eef1;
}
```

#### JavaScript

```js
const source = document.querySelector("div.source");

source.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  event.preventDefault();
});
```

#### Resultado

{{ EmbedLiveSample('Ejemplo_en_vivo', '100%', '120px') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Eventos relacionados: {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- Este evento en {{domxref("Document")}} apunta a: {{domxref("Document/copy_event", "copy")}}
- Este evento en {{domxref("Window")}} apunta a: {{domxref("Window/copy_event", "copy")}}
