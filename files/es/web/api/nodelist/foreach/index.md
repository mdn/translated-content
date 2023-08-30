---
title: NodeList.prototype.forEach()
slug: Web/API/NodeList/forEach
---

{{APIRef("DOM")}}

El método **`forEach()`** de la interfase{{domxref("NodeList")}} llama a la función callback proporcionada como parámetro una vez para cadapar de valores en la lista, en el orden en que se insertaron.

## Syntax

```
nodeList.forEach(callback[, thisArg]);
```

### Parámetros

- `callback`

  - : Función a ser ejecutada paracada elemento, tomando eventualmente 3 argumentos:

    - _`currentValue`_
      - : El valor que esta siendo procesado en la lista de nodos.
    - `currentIndex`
      - : El índice del elemento que esta siendo procesado en la lista de nodos.
    - _`listObj`_
      - : El objeto NodeList al que se está aplicando el método `forEach()`.

- `thisArg` {{Optional_inline}}
  - : Valor a ser usado como {{jsxref("this")}} al ejecutar `callback`.

### Valor Retornado

{{jsxref('undefined')}}.

## Excepciones

_Ninguna_.

## Ejemplo

```
var nodo = document.createElement("div");
var infante1 = document.createElement("p");
var infante2 = document.createTextNode("hey");
var infante3 = document.createElement("span");

nodo.appendChild(infante1);
nodo.appendChild(infante2);
nodo.appendChild(infante3);

var list = nodo.childNodes;

list.forEach(
  function(currentValue, currentIndex, listObj) {
    console.log(currentValue + ', ' + currentIndex + ', ' + this);
  },
  'miEsteArg'
);
```

resulta en:

```
[object HTMLParagraphElement], 0, miEsteArg
[object Text], 1, miEsteArg
[object HTMLSpanElement], 2, miEsteArg
```

## Polyfill

Este {{Glossary("Polyfill","polyfill")}} le da compatibilidad a todos los navegadores que soportan [ES5](https://caniuse.com/#search=es5):

```js
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
```

ó

```js
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
```

El comportamiento ateriror esta implementado en muchos navegadores. NodeList.prototype.forEach (Chrome, Firefox for example).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("Node")}}
- {{domxref("NodeList")}}
