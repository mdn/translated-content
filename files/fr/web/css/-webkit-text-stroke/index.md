---
title: "-webkit-text-stroke"
slug: Web/CSS/-webkit-text-stroke
---

{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-text-stroke`** permet de définir l'épaisseur et la couleur du contour utilisé pour les lettres d'un texte. Cette propriété est une propriété raccourcie qui permet de définir les propriétés {{cssxref("-webkit-text-stroke-width")}} et {{cssxref("-webkit-text-stroke-color")}}.

```css
/* Valeurs de largeur et de couleur */
-webkit-text-stroke: 4px navy;

/* Valeurs globales */
-webkit-text-stroke: inherit;
-webkit-text-stroke: initial;
-webkit-text-stroke: unset;
```

## Syntaxe

### Valeurs

- `<length>`
  - : L'épaisseur du contour (cf. {{cssxref("&lt;length&gt;")}}).
- `<color>`
  - : La couleur du contour (cf. {{cssxref("&lt;color&gt;")}}).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
#exemple {
  font-size: 3em;
  margin: 0;
  -webkit-text-stroke: 2px red;
}
```

### HTML

```html
<p id="exemple">Le contour de ce texte est rouge.</p>
```

### Résultat

{{EmbedLiveSample("Exemples", 600, 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le billet de _Surfin' Safari_ qui annonce cette fonctionnalité (en anglais)](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [L'article de CSS-Tricks décrivant cette fonctionnalité (en anglais)](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-fill-color")}}
