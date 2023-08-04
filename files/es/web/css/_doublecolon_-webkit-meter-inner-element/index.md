---
title: "::-webkit-meter-inner-element"
slug: Web/CSS/::-webkit-meter-inner-element
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

`El pseudo-elemento CSS ::-webkit-meter-inner-element` es un pseudo-elemento propietario de WebKit CSS para seleccionar y aplicar estilo al contenedor exterior de un elemento {{htmlelement("meter")}}. Es necesario una marca adicional para mostrar este elemento como si fuera de sólo lectura.

## Ejemplos

```html
<meter min="0" max="10" value="6">Score out of 10</meter>
```

```css
meter {
  /* Resetear la apariencia por defecto*/
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

meter::-webkit-meter-inner-element {
  -webkit-appearance: inherit;
  box-sizing: inherit;
  border: 1px solid #aaa;
}
```

{{ EmbedLiveSample('Ejemplos', '100%', 50) }}

> **Nota:** Sólo funcionará en navegadores basasdo en Webkit/Blink.

## Especificaciones

No es parte de ninguna especificación. Es un pseudo-elemento propietario y específico de WebKit/Blink.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

Los pseudo-elementos usados por WebKit/Blink para dar estilo a otras partes del elemento {{htmlelement("meter")}} :

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
