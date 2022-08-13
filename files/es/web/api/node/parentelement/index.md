---
title: Node.parentElement
slug: Web/API/Node/parentElement
tags:
  - API
  - DOM
  - NecesitaCompatiblidadNavegador
  - Nodo
  - Propiedad
translation_of: Web/API/Node/parentElement
original_slug: Web/API/Node/elementoPadre
---
{{APIRef("DOM")}}

La propiedad de sólo lectura de **`Nodo.parentElement`** devuelve el nodo padre del DOM {{domxref("Element")}}, o `null`, si el nodo no tiene padre o si el padre no es un {{domxref("Element")}} DOM .

## Sintaxis

    elementoPadre = node.parentElement

El `elementoPadre` es el padre del nodo actual. Esto es siempre un objecto {{domxref("Element")}} DOM, o `null`.

## Ejemplo

```js
if (node.parentElement) {
    node.parentElement.style.color = "red";
}
```

## Compatibilidad en navegadores

En algunos navegadores, la propiedad `elementoPadre` es solo definida en nodos que ellos mismos son {{domxref("Element")}}. En particular, esto no está definido en nodos de texto.

{{Compat("api.Node.parentElement")}}

## Especificación

- {{spec("http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#parent-element", "DOM Level 4: Node.parentElement", "WD")}}

## Ver también

- {{domxref("Node.parentNode")}}
