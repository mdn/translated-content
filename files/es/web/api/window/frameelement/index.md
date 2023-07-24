---
title: Window.frameElement
slug: Web/API/Window/frameElement
---

{{ ApiRef }}

Retorna el elemento (como es {{HTMLElement("iframe")}} ó {{HTMLElement("object")}}) en el cual la ventana está incrustada o `null` si el elemento es bien de nivel superior (top-level) o bien está inrustada en un documento con un origen de diferente; esto es, en situaciones de origen cruzado.

## Sintaxes

```js
frameEl = window.frameElement;
```

- `frame El` es el elemento dentro del cual está empotrada la ventana. Si la ventana no está incrustada dentro de otro documento, o si el documento en el que está empotrada tiene un origen diferente (como procede de un dominio diferente), este valor será `null`.

> **Nota:** A pesar del nombre de esta propiedad, funciona para documentos empotrados en cualquier forma o método de incrustación, incluyendo {{HTMLElement("object")}}, {{HTMLElement("iframe")}}, or {{HTMLElement("embed")}}.

## Ejemplo

```js
var frameEl = window.frameElement;
// Si estamos empotrados, cambia la URL de elemento contenedor to 'http://mozilla.org/'
if (frameEl) {
  frameEl.src = "http://mozilla.org/";
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("window.frames")}} retorna un objeto enumerable, listando los sub-frames directos de la ventana actual.
- {{domxref("window.parent")}} retorna la ventana padre, la cual es la ventana que contiene el `frameElement` de la ventana hija.
