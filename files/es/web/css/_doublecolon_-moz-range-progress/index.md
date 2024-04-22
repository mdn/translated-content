---
title: "::-moz-range-progress"
slug: Web/CSS/::-moz-range-progress
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

El [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements) [CSS](/es/docs/Web/CSS) **`::-moz-range-progress`** representa la parte del "camino" (la ranura sobre la que desliza) de un elemento {{HTMLElement("input")}} con `type="range"`, que se corresponde con los valores inferiores al valor seleccionado actualmente en ese "camino".

> **Nota:** Si usamos `::-moz-range-progress` con cualquier otra cosa que no sea `<input type="range">` ni seleccionaremos nada ni conseguiremos ningún efecto.

## Síntaxis

{{csssyntax}}

## Ejemplo

### Contenido CSS

```css
input[type="range"]::-moz-range-progress {
  background-color: green;
  height: 1em;
}
```

### Contenido HTML

```html
<input type="range" min="0" max="100" step="5" value="50" />
```

### Salida

{{EmbedLiveSample("Example", 300, 50)}}

Una barra de progreso que utilice este estilo se vería de la siguiente manera:

![](screen_shot_2015-12-04_at_20.14.48.png)

## Especificaciones

No es parte de ninguna especificación. Es un pseudo-elemento propietario de Gecko.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- El pseudo-elements que usa Gecko para dar estilo a otras parte de un input con type="range":

  - {{cssxref("::-moz-range-thumb")}}
  - {{cssxref("::-moz-range-track")}}

- {{cssxref("::-ms-fill-upper")}}
- [CSS-Tricks: Dando estilo con CSS a input con type="range" en todos los navegadores.](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Dando estilo y usando scripts para elementos deslizantes.](http://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
