---
title: '::-moz-range-thumb'
slug: Web/CSS/::-moz-range-thumb
tags:
  - CSS
  - No estándar(2)
  - Pseudo-elemento
  - Pseudo-elemento CSS
  - Referencia
translation_of: Web/CSS/::-moz-range-thumb
---
{{CSSRef}}{{Non-standard_header}}

## Resumen

El [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements) CSS **`::-moz-range-thumb`** representa el elemento que el usuario puede usar en el _"camino"_ marcado por un elemento {{HTMLElement("input")}} con `type="range"` para alterar su valor numérico.

> **Nota:** Si se usa `::-moz-range-thumb` en cualquier elemento que no sea `<input type="range">` ni se seleccionará nada ni se conseguirá efecto alguno.

## Syntax

{{csssyntax}}

## Ejemplo

### Contenido CSS

```css
input[type=range]::-moz-range-thumb {
  background-color: green;
}
```

### Contenido HTML

```html
<input type="range" min="0" max="100" step="5" value="50"/>
```

### Salida

{{EmbedLiveSample("Example", 300, 50)}}

Una barra de progreso que utilizara este estilo se visualizarías de la siguiente manera:

![The thumb of the \<input type=right> styled in green](https://mdn.mozillademos.org/files/12027/Screen%20Shot%202015-12-04%20at%2013.30.08.png)

## Especificaciones

No es parte de ninguna especificación. El un pseudo-elemento propietario de Gecko.

## Compatibilidad con los distintos navegadores

{{Compat("css.selectors.-moz-range-thumb")}}

## Ver además

- Los pseudo-elements usados por Gecko para dar estilo a otras parte de un input con typue="range":

  - {{cssxref("::-moz-range-track")}},
  - {{cssxref("::-moz-range-progress")}}

- Pseudo-elementos similares usados por otras nevagadores:

  - {{cssxref("::-ms-thumb")}}, pseudo-elemento soportado por Internet Explorer y Edge.
  - {{cssxref("::-webkit-slider-thumb")}}, pseudo-elemento souportado por WebKit y Blink (Safari, Chrome and Opera).

- [CSS-Tricks: Estilos con CSS para input con type="range" en los distintos navegadores.](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Dando estilos y haciendo script con elementos deslizadores.](http://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
