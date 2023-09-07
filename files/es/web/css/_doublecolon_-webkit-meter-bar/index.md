---
title: "::-webkit-meter-bar"
slug: Web/CSS/::-webkit-meter-bar
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

La pseudo-clase `::-webkit-meter-bar` establece el estilo para el fondo del elemento meter que contiene el valor.

## Ejemplos

```html
<meter min="0" max="10" value="6">Puntuación sobre 10</meter>
```

```css
meter {
  /* Resetea a la apariencia por defecto */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

meter::-webkit-meter-bar {
  background: #eee;
  box-shadow: 0 2px 3px rgba (0, 0, 0, 0.2) inset;
  border-radius: 3px;
}
```

{{ EmbedLiveSample('Ejemplos', '100%', 50) }}

> **Nota:** Sólo funciona en navegadores basados en Webkit/Blink.

## Especificaciones

No es parte de ninguna especificación. Es un elemento propietario y específico de WebKit/Blink.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

Los pseudo-elementos usados en WebKit/Blink para dar estilos a otras partes del elemento {{htmlelement("meter")}} :

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
