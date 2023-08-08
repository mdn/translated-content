---
title: Element.insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
---

{{APIRef}}

EL método `insertAdjacentHTML()` de la interfaz {{domxref("Element")}} analiza la cadena de texto introducida como cadena HTML o XML e inserta al árbol DOM los nodos resultantes de dicho análisis en la posición especificada. Este método no re-analiza el elemento sobre el cual se está invocando y por lo tanto no corrompe los elementos ya existentes dentro de dicho elemento. Esto evita el paso adicional de la serialización, haciéndolo mucho más rápido que la manipulación directa con {{domxref("Element.innerHTML", "innerHTML")}}.

## Sintaxis

```js
element.insertAdjacentHTML(posición, texto);
```

### Parámetros

- `posición`

  - : Un {{domxref("DOMString")}} que representa la posición relativa al `elemento`, y deberá ser una de las siguientes cadenas:

    - `'beforebegin'`: Antes que el propio `elemento`.
    - `'afterbegin'`: Justo dentro del `elemento`, antes de su primer elemento hijo.
    - `'beforeend'`: Justo dentro del `elemento`, después de su último elemento hijo.
    - `'afterend'`: Después del propio `elemento`.

- `texto`
  - : Es la cadena a ser analizada como HTML o XML e insertada en el árbol.

### Visualizacion de las posiciones

```
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> **Nota:** Las posiciones `beforebegin` y `afterend` funcionan únicamente si el nodo se encuentra en el árbol DOM y tiene un elemento padre.

## Ejemplo

```js
// <div id="one">one</div>
var d1 = document.getElementById("one");
d1.insertAdjacentHTML("afterend", '<div id="two">two</div>');

// En este punto, la nueva estructura es:
// <div id="one">one</div><div id="two">two</div>
```

## Notas

### Consideraciones de seguridad

Cuando se inserte texto HTML en una página usando `insertAdjacentHTML()` debe tener cuidado de no usar cadenas de texto que no contengan las secuencias de escape pertinentes según sea el caso.

Se recomienda no usar `insertAdjacentHTML()` cuando se pretende insertar texto plano; en su lugar, se debe utilizar la propiedad {{domxref("Node.textContent")}} o el método {{domxref("Element.insertAdjacentText()")}}. Este método no interpreta el contenido pasado como HTML, si no que lo inserta como texto plano.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("XMLSerializer")}}: Contruir una representación del DOM de un texto XML
- [hacks.mozilla.org guest post](https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) por Henri Sivonen incluye puntos de referencia mostrando que insertAdjacentHTML puede ser mucho más rápido en algunos casos.
