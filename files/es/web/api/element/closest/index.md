---
title: Element.closest()
slug: Web/API/Element/closest
tags:
  - API
  - DOM
  - Elemento
  - Referencia
  - metodo
translation_of: Web/API/Element/closest
---

{{APIRef}}

El método `closest()` de la interfaz {{domxref("Element")}} devuelve el ascendiente más cercano al elemento actual (o el propio elemento actual) que coincida con el selector proporcionado por parámetro. Si no existe dicho ascendiente, devuelve `null`.

## Sintaxis

```js
var closestElement = element.closest(selectors);
```

### Parámetros

- `selectors` es un {{domxref("DOMString")}} que contiene una lista de selectores como `"p:hover, .toto + q"`
- `element` es el {{domxref("Element")}} en la parte superior del árbol de elementos a tratar.

### Valor del resultado

- `closestElement` es el {{domxref("Element")}} ascendiente más cercano al elemento actual. Puede ser `null`.

### Excepciones

- Se lanza una excepción [`SyntaxError`](/es/docs/Web/API/DOMException#syntaxerror) si `selectors` no es una lista de selectores válida.

## Ejemplo

### HTML

```html
<article>
  <div id="div-01">Here is div-01
    <div id="div-02">Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>
</article>
```

### JavaScript

```js
var el = document.getElementById('div-03');

var r1 = el.closest("#div-02");
// returns the element with the id=div-02

var r2 = el.closest("div div");
// returns the closest ancestor which is a div in div, here is div-03 itself

var r3 = el.closest("article > div");
// returns the closest ancestor which is a div and has a parent article, here is div-01

var r4 = el.closest(":not(div)");
// returns the closest ancestor which is not a div, here is the outmost article
```

## Polyfill

Para los navegadores que no tengan soporte para `Element.closest()`, pero sí lo tengan para `document.querySelectorAll()` (o un equivalente prefijado, es decir IE9+), existe un polyfill:

```js
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
                              Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
```

Sin embargo, si realmente se necesita soporte para IE 8, entonces el siguiente polyfill servirá para conseguirlo de forma muy lenta, pero lo hará. Sin embargo, sólo admitirá selectores CSS 2.1 en IE 8, puede causar picos severos de retraso en sitios web en producción.

```js
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest =
  function(s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {};
    } while ((i < 0) && (el = el.parentElement));
    return el;
  };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

### Notas de compatibilidad

- En Edge `document.createElement(element).closest(element)` devolverá `null` si el elemento no es el primero del DOM

## Véase también

- La interfaz {{domxref("Element")}}.
- [Sintaxis de los Selectores](/es/docs/Web/CSS/Introducción/Selectors)
- Otros métodos que toman selectores: {{domxref("element.querySelector()")}} y {{domxref("element.matches()")}}.
