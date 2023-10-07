---
title: "::-webkit-meter-even-less-good-value"
slug: Web/CSS/::-webkit-meter-even-less-good-value
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

El pseudo-elemento `::-webkit-meter-even-less-good-value` da color rojo al elemento meter cuando el valor y el atributo optimum están fuera del rango establecido y en zonas opuestas. Por ejemplo valor < low < high < optimum o valor> high > low > optimum.

## Ejemplos

```html
<meter min="0" max="10" value="6">Score out of 10</meter>
```

```css
meter::-webkit-meter-even-less-good-value {
  background: linear-gradient(to bottom, #f77, #d44 45%, #d44 55%, #f77);
  height: 100%;
  box-sizing: border-box;
}
```

{{ EmbedLiveSample('Ejemplos', '100%', 50) }}

> **Nota:** This will only work in Webkit/Blink-based browsers.

## Especificaciones

No es parte de ninguna especificación. Es un elemento propietario y específico de WebKit/Blink.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

The pseudo-elements used by WebKit/Blink to style other parts of a {{htmlelement("meter")}} element are as follows:

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
