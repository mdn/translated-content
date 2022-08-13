---
title: Document.head
slug: Web/API/Document/head
translation_of: Web/API/Document/head
---
{{APIRef("DOM")}}

Devuelve el elemento {{HTMLElement("head")}} del documento actual. Si hay más de un elemento `<head>`, devuelve el primero de estos.

## Sintaxis

    var objRef = document.head;

## Ejemplo

```js
// en el HTML: <head id="my-document-head">
var aHead = document.head;

alert(aHead.id); // "my-document-head";

alert( document.head === document.querySelector("head") ); // true
```

## Notas

`document.head` is de sólo lectura. Cualquier intento de asignar un valor a esta propiedad fallará silenciosamente o, en caso de que se encuentre en [Modo estricto de ECMAScript](/es/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode) en un navegador Gecko, lanzará un [`TypeError`](/es/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

## Compatibilidad con navegadores

{{Compat("api.Document.head")}}

## Especificación

- [HTML5: DOM Tree Accessors](http://www.w3.org/TR/html5/dom.html#dom-tree-accessors)
