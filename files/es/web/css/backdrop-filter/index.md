---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
l10n:
  sourceCommit: 84d5320ca6c8d0925995083de66abacb98922ced
---

{{CSSRef}}

La propiedad [CSS](/es/docs/Web/CSS) **`backdrop-filter`** le permite aplicar efectos gráficos como desenfoque o cambio de color al área detrás de un elemento. Debido a que se aplica a todo lo que hay detrás del elemento, para ver el efecto debe hacer que el elemento o su fondo sean al menos parcialmente transparentes.

{{EmbedInteractiveExample("pages/css/backdrop-filter.html")}}

## Sintaxis

```css
/* Valor de la palabra clave */
backdrop-filter: none;

/* URL a filtro SVG */
backdrop-filter: url(commonfilters.svg#filter);

/* valores de <filter-function> */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* Múltiples filtros */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* Valores globales */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: revert;
backdrop-filter: revert-layer;
backdrop-filter: unset;
```

### Valores

- `none`
  - : No se aplica ningún filtro al fondo.
- `<filter-function-list>`
  - : Una lista de {{cssxref("&lt;filter-function&gt;")}} separada por espacios o un [filtro SVG](/es/docs/Web/SVG/Element/filter) que se aplicará al fondo.

## Definicion formal

{{cssinfo}}

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### CSS

```css
.box {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  background-image:
    url("anemones.jpg"), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
```

### HTML

```html
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### Resultado

{{EmbedLiveSample("Examples", 600, 400)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{cssxref("filter")}}
