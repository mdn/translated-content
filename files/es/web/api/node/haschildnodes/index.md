---
title: Node.hasChildNodes()
slug: Web/API/Node/hasChildNodes
---

{{APIRef("DOM")}}

El método **`Node.hasChildNodes()`** devuelve un valor **Boolean** indicando si el {{domxref("Node")}} (nodo) actual tiene [nodos hijos](/es/docs/Web/API/Node/childNodes) o no.

## Sintaxis

```
resultado = node.hasChildNodes();
```

- `resultado`
  - : almacena el valor devuelto `true` o `false`.

## Ejemplos

El siguiente ejemplo elimina el primer nodo dentro del elemento con id `"foo"` si _foo_ tiene nodos hijos.

```js
var foo = document.getElementById("foo");
if (foo.hasChildNodes()) {
  // do something with 'foo.childNodes'
}
```

## Polyfill

```js
(function (prototype) {
  prototype.hasChildNodes =
    prototype.hasChildNodes ||
    function () {
      return !!this.firstChild;
    };
})(Node.prototype);
```

## Resumen

Hay varias maneras de determinar si el nodo tiene nodos hijos.

- node.hasChildNodes()
- node.firstChild != null (o sólo node.firstChild)
- node.childNodes && node.childNodes.length (o node.childNodes.length > 0)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("Node.childNodes")}}
- {{domxref("Node.hasAttributes")}}
