---
title: Element.closest()
slug: Web/API/Element/closest
l10n:
  sourceCommit: a122e87245c624ba56197641b4d7b21b643a6021
---

{{APIRef('DOM')}}

El método **`closest()`** de la interfaz {{domxref("Element")}} recorre el elemento y sus padres (dirigiéndose hacia la raiz del documento) hasta encontrar un nodo que coincida con el [CSS selector](/es/docs/Learn/CSS/Building_blocks/Selectors) especificado.

## Sintaxis

```js-nolint
closest(selectors)
```

### Parámetros

- `selectors`
  - : Una cadena de [selector de CSS](/es/docs/Learn/CSS/Building_blocks/Selectors) válido para comparar {{domxref("Element")}} y sus ancestros.

### Valor de retorno

El ancestro más cercano {{domxref("Element")}} que coincida con los `selectors` , o él mismo. Si no hay tal elemento devolverá `null` .

### Excepciones

- `SyntaxError` {{domxref("DOMException")}}
  - : Se lanza si `selectors` no es un selector CSS válido.

## Ejemplos

### HTML

```html
<article>
  <div id="div-01">
    Aquí está div-01
    <div id="div-02">
      Aquí está div-02
      <div id="div-03">Aquí está div-03</div>
    </div>
  </div>
</article>
```

### JavaScript

```js
const el = document.getElementById("div-03");

// El ancestro más cercano con el id de "div-02"
console.log(el.closest("#div-02")); // <div id="div-02">

//  El ancestro más cercano que es un div dentro de un div
console.log(el.closest("div div")); // <div id="div-03">

// El ancestro más cercano que es un div y tiene un padre article
console.log(el.closest("article > div")); // <div id="div-01">

// El ancestro más cercano que no sea un div
console.log(el.closest(":not(div)")); // <article>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

### Notas de compatibilidad

- En Edge 15-18 `document.createElement(tagName).closest(tagName)` devolverá `null` si el elemento no está conectado (directa o indirectamente) al objeto de contexto, por ejemplo el objeto {{domxref("Document")}} en el caso del DOM normal.

## Véase también

- [Referencia de selectores CSS](/es/docs/Web/CSS/CSS_Selectors)
- Otros métodos {{domxref("Element")}} que toman selectores: {{domxref("Element.querySelector()")}}, {{domxref("Element.querySelectorAll()")}} y {{domxref("Element.matches()")}}.
