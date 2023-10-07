---
title: "-webkit-text-fill-color"
slug: Web/CSS/-webkit-text-fill-color
---

{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-text-fill-color`** définit la couleur utilisée pour dessiner le contenu des lettres qui forment un texte. Si cette propriété n'est pas définie, c'est la valeur de la propriété {{cssxref("color")}} qui sera utilisée.

```css
/* Valeurs de couleurs */
/* Type <color>        */
-webkit-text-fill-color: red;
-webkit-text-fill-color: #000000;
-webkit-text-fill-color: rgb(100, 200, 0);

/* Valeurs globales */
-webkit-text-fill-color: inherit;
-webkit-text-fill-color: initial;
-webkit-text-fill-color: unset;
```

## Syntaxe

### Valeurs

- `<color>`
  - : La couleur utilisée pour colorer les lettres du texte.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
p {
  margin: 0;
  font-size: 3em;
  -webkit-text-fill-color: green;
}
```

### HTML

```html
<p>Ce texte est vert.</p>
```

### Résultat

{{EmbedLiveSample("Exemples", "380px", "60px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le billet de _Surfin' Safari_ qui annonce cette fonctionnalité (en anglais)](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [L'article de CSS-Tricks qui décrit cette fonctionnalité (en anglais)](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke")}}
