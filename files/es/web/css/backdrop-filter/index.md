---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
tags:
  - CSS
  - Diseño
  - Filtro SVG
  - Propiedad CSS
  - Referencia
  - SVG
  - Web
  - graficos
translation_of: Web/CSS/backdrop-filter
---
{{CSSRef}}

La propiedad [CSS](/es/docs/Web/CSS) de **`backdrop-filter`** le permite aplicar efectos gráficos como el desenfoque o el cambio de color al área detrás de un elemento. Debido a que se aplica a todo lo que está _detrás_ del elemento, para ver el efecto debe hacer que el elemento o su fondo sean al menos parcialmente transparentes.

```css
/* Valor de palabra clave */
backdrop-filter: none;

/* URL al filtro SVG */
backdrop-filter: url(commonfilters.svg#filter);

/* valores <filter-function> */
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
backdrop-filter: unset;
```

{{cssinfo}}

## Sintaxis

### Valores

- `none`
  - : No se aplica filtro al fondo.
- `<filter-function-list>`
  - : Una lista separada por espacios de {{cssxref("&lt;filter-function&gt;")}} o un [filtro SVG](/es/docs/Web/SVG/Element/filter) que se aplicará al fondo.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### CSS

```css
.box {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
  background-image: url('https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg');
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

{{EmbedLiveSample("Ejemplo", 600, 400)}}

## Especificaciones

| Especificación                                                                                   | Estado                           | Comentario          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('Filters 2.0', '#BackdropFilterProperty', 'backdrop-filter')}} | {{Spec2('Filters 2.0')}} | Definición inicial. |

## Compatibilidad con navegadores

{{Compat("css.properties.backdrop-filter")}}

## Ver también

- {{cssxref("filter")}}
