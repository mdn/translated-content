---
title: "::-moz-range-track"
slug: Web/CSS/::-moz-range-track
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

El [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements) CSS **`::-moz-range-track`** representa la trayectoría, es decir la ranura sobre la cual se desliza el indicador de un {{HTMLElement("input")}} con `type="range"`.

> **Nota:** Si usamos `::-moz-range-track` con cualquier otra cosa que no sea un `<input type="range">` ni seleccionaremos nada ni se mostrará efecto alguno.

## Síntaxis

{{csssyntax}}

## Ejemplo

### Contenido CSS

```css
input[type="range"]::-moz-range-track {
  background-color: green;
}
```

### Contenido HTML

```html
<input type="range" min="0" max="100" step="5" value="50" />
```

### Salida

{{EmbedLiveSample("Example", 300, 50)}}

Un barra de progreso con ese estilo tendrá una apariencia similar a la siguiente:

![A range with the track green.](screen_shot_2015-12-04_at_10.14.34.png)

## Especificaciones

No es parte de ninguna especificación.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- Los pseudo-elementos usados por Gecko para proporcionar estilos a las distintas partes de un input con type="range":

  - {{cssxref("::-moz-range-thumb")}}, el cursor deslizándose sobre la ranura.
  - {{cssxref("::-moz-range-progress")}}

- Pseudo-elementos similares en otros navegadores:

  - {{cssxref("::-webkit-slider-runnable-track")}}, pseudo-elemento soportado por WebKit y Blink (Safari, Chrome and Opera).
  - {{cssxref("::-ms-track")}}, pseudo-elemento soportado por Internet Explorer y Edge.

- [CSS-Tricks: Dando estilo con CSS a elementos Input con type="range" para que se muestren correctamente en todos los navegadores.](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Dando estilos y scripting a elementos deslizantes](http://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
