---
title: Node.previousSibling
slug: Web/API/Node/previousSibling
---

{{APIRef("DOM")}}

La propiedad de sólo-lectura **`Node.previousSibling`** devuelve el nodo inmediatamente anterior al especificado en la lista de nodos {{domxref("Node.childNodes", "childNodes")}} de su padre, o `null` si el nodo especificado es el primero en dicha lista.

## Sintaxis

```
nodoAnterior = nodo.previousSibling;
```

## Ejemplo

```html
<img id="b0" />
<img id="b1" />
<img id="b2" />
```

```js
console.log(document.getElementById("b1").previousSibling); // <img id="b0">
console.log(document.getElementById("b2").previousSibling.id); // "b1"
```

## Notas

Gecko-based browsers insert text nodes into a document to represent whitespace in the source markup.
Therefore a node obtained, for example, using [`Node.firstChild`](/es/docs/Web/API/Node/firstChild) or [`Node.previousSibling`](/es/docs/Web/API/Node/previousSibling) may refer to a
whitespace text node rather than the actual element the author intended to get.

See [Whitespace in the DOM](/es/docs/Web/Guide/DOM/Whitespace_in_the_DOM) and
[W3C DOM 3 FAQ: Why are some Text nodes empty?](http://www.w3.org/DOM/faq.html#emptytext)
for more information.

Para navegar en el sentido opuesto de la lista de nodos hijos se utiliza [Node.nextSibling](/es/docs/Web/API/Node.nextSibling).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("Node.nextSibling")}}
