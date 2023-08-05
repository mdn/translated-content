---
title: url()
slug: Web/CSS/url
---

{{cssref}}

La función de [CSS](/es/docs/Web/CSS) **`url()`** usa un [filtro SVG](/es/docs/Web/SVG/Element/filter) para cambiar la apariencia en la imagen de entrada.

## Sintaxis

```
url(location)
```

### Parámetros

- `location`
  - : La {{cssxref("&lt;url&gt;")}} de un archivo {{glossary("XML")}} que especifique un filtro SVG, y puede incluir un ancla a un elemento filtro específico.

## Ejemplo

```css
url(resources.svg#c1)
```

## Ver también

- {{cssxref("&lt;filter-function&gt;")}}
