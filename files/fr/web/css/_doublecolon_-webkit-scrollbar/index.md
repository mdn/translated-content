---
title: '::-webkit-scrollbar'
slug: Web/CSS/::-webkit-scrollbar
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::-webkit-scrollbar
---
{{Draft}}{{CSSRef}}{{Non-standard_header}}Le pseudo-élément **`::-webkit-scrollbar`** permet de modifier le style de la barre de défilement associée à un élément. Il s'agit d'un pseudo-élément propriétaire, uniquement disponible pour les navigateurs WebKit.

## Syntaxe

{{CSSSyntax}}

## Sélecteurs de _scrollbars_

You can use the following pseudo elements to customize various parts of the scrollbar for webkit browsers:

- `::-webkit-scrollbar` — la barre entière.
- `::-webkit-scrollbar-button` — les boutons de la barre de défilement (les flèches vers le bas ou le haut)
- `::-webkit-scrollbar-thumb` — l'emplacement qui permet de déplacer la barre de défilement.
- `::-webkit-scrollbar-track` — la piste (la zone de progression) de la barre de défilement
- `::-webkit-scrollbar-track-piece` — la partie de la piste qui n'est pas couverte par le bouton de la barre de défilement.
- `::-webkit-scrollbar-corner` — le coin inférieur de la barre où les barres horizontales et verticales se rencontrent.
- `::-webkit-resizer` — le bouton qui apparaît dans le coin inférieur de certains éléments et qui permet de les redimensionner.

## Exemples

```css
.visible-scrollbar, .invisible-scrollbar, .mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
}
.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Demonstrate a "mostly customized" scrollbar
 * (won't be visible otherwise if width/height is specified) */
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; /* or add it to the track */
}
/* Add a thumb */
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
    background: #000;
}
```

```html
<div class="visible-scrollbar">
  Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor.
  Proin at nulla elementum, consectetur ex eget, commodo ante.
  Sed eros mi, bibendum ut dignissim et, maximus eget nibh. Phasellus
  blandit quam turpis, at mollis velit pretium ut. Nunc consequat
  efficitur ultrices. Nullam hendrerit posuere est. Nulla libero
  sapien, egestas ac felis porta, cursus ultricies quam. Vestibulum
  tincidunt accumsan sapien, a fringilla dui semper in. Vivamus
  consectetur ipsum a ornare blandit. Aenean tempus at lorem sit
  amet faucibus. Curabitur nibh justo, faucibus sed velit cursus,
  mattis cursus dolor. Pellentesque id pretium est. Quisque
  convallis nisi a diam malesuada mollis. Aliquam at enim ligula.
</div>
<div class="invisible-scrollbar">Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword</div>
<div class="mostly-customized-scrollbar">Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword<br>
And pretty tall<br>
thing with weird scrollbars.<br>
Who thought scrollbars could be made weeeeird?</div>
```

{{EmbedLiveSample('Exemples')}}

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

### `::-webkit-scrollbar`

{{Compat("css.selectors.-webkit-scrollbar")}}

### `::-webkit-scrollbar-button`

{{Compat("css.selectors.-webkit-scrollbar-button")}}

### `::-webkit-scrollbar-thumb`

{{Compat("css.selectors.-webkit-scrollbar-thumb")}}

### `::-webkit-scrollbar-track`

{{Compat("css.selectors.-webkit-scrollbar-track")}}

### `::-webkit-scrollbar-track-piece`

{{Compat("css.selectors.-webkit-scrollbar-track-piece")}}

### `::-webkit-scrollbar-corner`

{{Compat("css.selectors.-webkit-scrollbar-corner")}}

### `::-webkit-resizer`

{{Compat("css.selectors.-webkit-resizer")}}

## Voir aussi

- Billet du blog WebKit [sur la mise en forme des barres de défilement](https://webkit.org/blog/363/styling-scrollbars/)
- {{cssxref('-ms-overflow-style')}}
- {{CSSxRef("scrollbar-width")}}
