---
title: Node.parentElement
slug: Web/API/Node/parentElement
---

{{APIRef("DOM")}}

La propiedad de sólo lectura de **`Nodo.parentElement`** devuelve el nodo padre del DOM {{domxref("Element")}}, o `null`, si el nodo no tiene padre o si el padre no es un {{domxref("Element")}} DOM .

## Sintaxis

```
elementoPadre = node.parentElement
```

El `elementoPadre` es el padre del nodo actual. Esto es siempre un objecto {{domxref("Element")}} DOM, o `null`.

## Ejemplo

```js
if (node.parentElement) {
  node.parentElement.style.color = "red";
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("Node.parentNode")}}
