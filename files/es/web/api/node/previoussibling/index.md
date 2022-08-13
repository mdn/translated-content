---
title: Node.previousSibling
slug: Web/API/Node/previousSibling
tags:
  - API
  - DOM
  - Gecko
  - Propiedad
translation_of: Web/API/Node/previousSibling
---
{{APIRef("DOM")}}

La propiedad de sólo-lectura **`Node.previousSibling`** devuelve el nodo inmediatamente anterior al especificado en la lista de nodos {{domxref("Node.childNodes", "childNodes")}} de su padre, o `null` si el nodo especificado es el primero en dicha lista.

## Sintaxis

    nodoAnterior = nodo.previousSibling;

## Ejemplo

```html
<img id="b0">
<img id="b1">
<img id="b2">
```

```js
console.log(document.getElementById("b1").previousSibling); // <img id="b0">
console.log(document.getElementById("b2").previousSibling.id); // "b1"
```

## Notas

Gecko-based browsers insert text nodes into a document to represent whitespace in the source markup.
Therefore a node obtained, for example, using [`Node.firstChild`](/es/docs/Web/API/Node/firstChild "The Node.firstChild read-only property returns the node's first child in the tree, or null if the node has no children.") or [`Node.previousSibling`](/es/docs/Web/API/Node/previousSibling "La propiedad de sólo-lectura Node.previousSibling devuelve el nodo inmediatamente anterior al especificado en la lista de nodos childNodes de su padre, o null si el nodo especificado es el primero en dicha lista.") may refer to a
whitespace text node rather than the actual element the author intended to get.

See [Whitespace in the DOM](/es/docs/Web/Guide/DOM/Whitespace_in_the_DOM) and
[W3C DOM 3 FAQ: Why are some Text nodes empty?](http://www.w3.org/DOM/faq.html#emptytext)
for more information.

Para navegar en el sentido opuesto de la lista de nodos hijos se utiliza [Node.nextSibling](/es/docs/Web/API/Node.nextSibling "DOM/Node.nextSibling").

## Especificación

- [DOM Level 1 Core: previousSibling](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-previousSibling)
- [DOM Level 2 Core: previousSibling](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-640FB3C8)
- [DOM Level 3 Core: previousSibling](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-640FB3C8)

## Compatibilidad con navegadores

{{Compat("api.Node.previousSibling")}}

## Ver también

- {{domxref("Node.nextSibling")}}
