---
title: "::-webkit-meter-suboptimum-value"
slug: Web/CSS/::-webkit-meter-suboptimum-value
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

El pseudo-elemento CSS `::-webkit-meter-suboptimum-value` da color amarillo al elemento meter cuando su valor cae fuera del rango mix-max.

## Ejemplos

```html
<meter min="0" max="10" value="6">Puntuación sobre 10</meter>
```

```css
meter::-webkit-meter-suboptimum-value {
  background: -webkit-gradient linear, left top, left bottom,
  height: 100%;
  box-sizing: border-box;
}
```

{{ EmbedLiveSample('Ejemplos', '100%', 50) }}

> **Nota:** Sólo funciona en navegadores basados en Webkit/Blink

## Especificaciones

No es parte de ninguna especificación. Es un pseudo-elemento propietario y específico de WebKit/Blink.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

Los pseudo-elementos usados por WebKit/Blink para dar estilo a otras partes del elemento {{htmlelement("meter")}} :

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
