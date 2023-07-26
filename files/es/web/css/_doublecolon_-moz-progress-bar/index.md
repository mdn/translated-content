---
title: "::-moz-progress-bar"
slug: Web/CSS/::-moz-progress-bar
---

{{CSSRef}}{{Non-standard_header}}

El [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements) **`::-moz-progress-bar`** de [CSS](/es/docs/Web/CSS) es una [extensión de Mozilla](/es/docs/Web/CSS/Mozilla_Extensions) que representa la barra de progreso dentro de un elemento {{HTMLElement("progress")}}. (La barra representa la cantidad de progreso que se ha realizado).

## Sintaxis

{{csssyntax}}

## Ejemplos

### HTML

```html
<progress value="30" max="100">30%</progress>
<progress max="100">Indeterminado</progress>
```

### CSS

```css
::-moz-progress-bar {
  background-color: red;
}

/* Forzar barras indeterminadas para tener ancho cero */
:indeterminate::-moz-progress-bar {
  width: 0;
}
```

### Resultado

{{EmbedLiveSample('Ejemplos')}}

La primera barra de arriba debe tener este aspecto:

![Custom styled progress bar](redbar.png)

## Ver también

- {{HTMLElement("progress")}}
- {{ cssxref("::-ms-fill") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
