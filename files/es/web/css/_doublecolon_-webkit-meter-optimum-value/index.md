---
title: "::-webkit-meter-optimum-value"
slug: Web/CSS/::-webkit-meter-optimum-value
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

El pseudo-elemento CSS `::-webkit-meter-optimum-value` da estilo al elemento meter cuando su valor está dentro del rango min-max establecido.

El color por defecto es verde.

## Ejemplos

```html
<meter min="0" max="10" value="6">Puntuación sobre 10</meter>
```

```css
meter::-webkit-meter-bar {
  /* Necesario para eliminar la propiedad de fondo por defecto */
  background: none;
  background-color: whiteSmoke;
  box-shadow: 0 5px 5px -5px #333 inset;
}

meter::-webkit-meter-optimum-value {
  box-shadow: 0 5px 5px -5px #999 inset;
}
```

{{ EmbedLiveSample('Ejemplos', '100%', 50) }}

> **Nota:** Sólo funciona en navegadores basado en Webkit/Blink.

## Especificaciones

No es parte de ninguna especificación. Es un pseudo-elemento propietario y específico de WebKit/Blink.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

Los pseudo-elementos de WebKit/Blink para dar estilos a otras partes de {{htmlelement("meter")}}:

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
