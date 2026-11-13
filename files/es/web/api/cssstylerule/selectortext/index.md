---
title: "CSSStyleRule: propiedad selectorText"
short-title: selectorText
slug: Web/API/CSSStyleRule/selectorText
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM") }}

La propiedad **`selectorText`** de la interfaz {{domxref("CSSStyleRule")}} obtiene y establece los selectores asociados a la `CSSStyleRule`.

## Valor

Una cadena.

## Ejemplos

El CSS incluye una única regla de estilo. Esta será la primera {{domxref("CSSRule")}} que devuelva `document.styleSheets[0].cssRules`, así que `myRules[0].selectorText` devuelve una cadena literal con el selector, en este caso `"h1"`.

```css
h1 {
  color: pink;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].selectorText); // una cadena que contiene "h1".
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
