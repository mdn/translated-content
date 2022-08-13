---
title: Node.contains()
slug: Web/API/Node/contains
tags:
  - API
  - DOM
  - Nodo
  - metodo
translation_of: Web/API/Node/contains
---
{{APIRef("DOM")}}

El método **`Node.contains()`** devuelve un valor {{jsxref("Boolean")}} indicando si un nodo es descendiente de un nodo dado o no, por ejemplo, el propio nodo, uno de sus hijos directos (({{domxref("Node.childNodes", "childNodes")}})), uno de los hijos directos de su nodo hijo, etc.

## Sintaxis

    node.contains( otroNodo )

## Ejemplo

Esta función verifica si un un elemento esté en el cuerpo de la página. Como `contains` es inclusivo y determinar si el cuerpo se contiene a sí mismo no es la intención de `isInPage` este caso explícitamente devuelve `false`.

```js
function isInPage(node) {
  return (node === document.body) ? false : document.body.contains(node);
}
```

## Especificaciones

| Especificación                                                                           | Estado                           | Comentario         |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("DOM WHATWG", "#dom-node-contains", "Node.contains()")}} | {{Spec2("DOM WHATWG")}} | Definición inicial |

## Compatibilidad en navegadores

{{Compat("api.Node.contains")}}

## Ver también

- {{domxref("Node.compareDocumentPosition")}}
- {{domxref("Node.hasChildNodes")}}
