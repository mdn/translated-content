---
title: ::-webkit-scrollbar
slug: Web/CSS/Reference/Selectors/::-webkit-scrollbar
page-type: css-pseudo-element
status:
  - non-standard
browser-compat:
  - css.selectors.-webkit-scrollbar
  - css.selectors.-webkit-scrollbar-button
  - css.selectors.-webkit-scrollbar-thumb
  - css.selectors.-webkit-scrollbar-track
  - css.selectors.-webkit-scrollbar-track-piece
  - css.selectors.-webkit-scrollbar-corner
  - css.selectors.-webkit-resizer
original_slug: Web/CSS/::-webkit-scrollbar
sidebar: cssref
---

## Resumen

El [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements) [CSS](/es/docs/Web/CSS) ::-webkit-scrollbar afecta el estilo de la barra de desplazamiento asociada a un elemento.

> [!NOTE]
> `::-webkit-scrollbar` sólo está disponible en navegadores basados en [WebKit](https://webkit.org) (p.e., Google Chrome).

## Ejemplo

```css
.visible-scrollbar,
.invisible-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
}
.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}
```

```html
<div class="visible-scrollbar">
  Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword
</div>
<div class="invisible-scrollbar">
  Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword
</div>
```

{{EmbedLiveSample('Ejemplo')}}
