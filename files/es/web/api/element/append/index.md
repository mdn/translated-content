---
title: Element.append()
slug: Web/API/Element/append
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

El método **`Element.append()`**
inserta un conjunto de objetos {{domxref("Node")}} u objetos de tipo cadena
después del último hijo de `Element`. Los objetos de tipo cadena se insertan
como nodos {{domxref("Text")}} equivalentes.

Diferencias respecto a {{domxref("Node.appendChild()")}}:

- `Element.append()` permite añadir también objetos de tipo cadena, mientras que
  `Node.appendChild()` sólo acepta objetos de tipo {{domxref("Node")}}.
- `Element.append()` no tiene valor de retorno, mientras que
  `Node.appendChild()` devuelve el objeto {{domxref("Node")}} añadido.
- `Element.append()` puede añadir varios nodos y cadenas de texto, mientras que
  `Node.appendChild()` sólo puede añadir un nodo.

## Sintaxis

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* … ,*/ paramN)
```

### Parámetros

- `param1`, …, `paramN`
  - : Un conjunto de objetos de tipo {{domxref("Node")}} o cadena para insertar.

### Valor de retorno

Ninguno ({{jsxref("undefined")}}).

### Excepciones

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Se lanza cuando el nodo no puede insertarse en el punto especificado
    de la jerarquía.

## Ejemplos

### Añadir un elemento

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.append(p);

console.log(div.childNodes); // NodeList [ <p> ]
```

### Añadir texto

```js
let div = document.createElement("div");
div.append("Algo de texto");

console.log(div.textContent); // "Algo de texto"
```

### Añadir un elemento y texto

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.append("Algo de texto", p);

console.log(div.childNodes); // NodeList [ #text "Algo de texto", <p> ]
```

### El método append no se puede recorrer

El método `append()` no está incluido en la sentencia `with`. Véase
{{jsxref("Symbol.unscopables")}} para más información.

```js
let div = document.createElement("div");

with (div) {
  append("foo");
}
// ReferenceError: append is not defined
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{domxref("Element.prepend()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.after()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
