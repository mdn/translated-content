---
title: "Node: Método removeChild()"
short-title: removeChild()
slug: Web/API/Node/removeChild
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{APIRef("DOM")}}

El método **`removeChild()`** de la interfaz {{domxref("Node")}} elimina un nodo hijo del DOM y devuelve el nodo eliminado.

> **Nota:** Mientras se mantenga una referencia sobre el elemento hijo eliminado, seguirá existiendo en la memoria, pero ya no forma parte del DOM. Todavía se puede reutilizar más adelante en el código.
>
> Si el valor devuelto de `removeChild()` no se almacena y no se guarda ninguna otra referencia, se [eliminará automáticamente](/es/docs/Web/JavaScript/Memory_management) de la memoria al cabo de un breve tiempo.

A diferencia de {{domxref("Node.cloneNode()")}}, el valor devuelto conserva los objetos `EventListener` asociados con él.

## Sintaxis

```js-nolint
removeChild(child)
```

### Parámetros

- `child`
  - : Un {{domxref("Node")}} que es el nodo hijo que se eliminará del DOM.

### Excepción

- `NotFoundError` {{domxref("DOMException")}}
  - : Se lanza si `child` no es un hijo del nodo.
- {{jsxref("TypeError")}}
  - : Se lanza si `child` es `null`.

## Ejemplos

### Ejemplos simples

Dado este HTML:

```html
<div id="top">
  <div id="nested"></div>
</div>
```

Para eliminar un elemento específico cuando se conoce su nodo principal:

```js
let d = document.getElementById("top");
let d_nested = document.getElementById("nested");
let throwawayNode = d.removeChild(d_nested);
```

Para eliminar un elemento específico sin tener que especificar su nodo principal:

```js
let node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

Para eliminar todos los hijos de un elemento:

```js
let element = document.getElementById("idOfParent");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

### Causar un TypeError

```html
<!--Código HTML de muestra-->
<div id="top"></div>
```

```js
let top = document.getElementById("top");
let nested = document.getElementById("nested");

// Arroja Uncaught TypeError
let garbage = top.removeChild(nested);
```

### Causar un NotFoundError

```html
<!--Código HTML de muestra-->
<div id="top">
  <div id="nested"></div>
</div>
```

```js
let top = document.getElementById("top");
let nested = document.getElementById("nested");

// Esta primera llamada elimina correctamente el nodo.
let garbage = top.removeChild(nested);

// Arroja NotFoundError
garbage = top.removeChild(nested);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.parentNode")}}
- {{domxref("Element.remove()")}}
- {{domxref("Node.cloneNode()")}}
