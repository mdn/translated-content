---
title: ":-moz-only-whitespace"
slug: Web/CSS/:-moz-only-whitespace
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

La [pseudo-class](/es/docs/Web/CSS/Pseudo-classes) [CSS](/es/docs/Web/CSS) `:-moz-only-whitespace` selecciona un elemento si no tiene ningún hijo, o bien nodos textos vacíos o bien nodos texto que sólo contienen espacios en blanco. Sólo cuando hay elementos o nodos texto con uno o más caracteres dentro, el elemento no será seleccionado por esta pseudo-clase.

## Síntaxis

```
span:-moz-only-whitespace { propiedades del estilo }
```

## Ejemplo

### CSS

```css
span:-moz-only-whitespace::before {
  background-color: lime;
}
```

### HTML

```html
<span> </span>
```

{{EmbedLiveSample("Example", "50", "20")}}
