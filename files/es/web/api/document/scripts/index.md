---
title: Document.scripts
slug: Web/API/Document/scripts
translation_of: Web/API/Document/scripts
---
{{APIRef("DOM")}}

Devuelve una lista de elementos {{HTMLElement("script")}} ubicados en el documento. El objeto devuelto es una colección {{domxref("HTMLCollection")}}.

## Sintáxis

    var scriptList = document.scripts;

El objeto `scriptList` devuelto es una {{domxref("HTMLCollection")}}. Se puede utilizar como un array corriente para acceder a sus elementos.

## Ejemplo

Este ejemplo busca demostrar la existencia de objetos {{HTMLElement("script")}} en el documento.

```js
var scripts = document.scripts;

if (scripts.length) {
  alert("This page has scripts!");
}
```

## Compatibilidad de navegadores

{{Compat("api.Document.scripts")}}

##

## Especificaciones

- {{spec("http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#dom-document-scripts", "DOM: document scripts")}}
