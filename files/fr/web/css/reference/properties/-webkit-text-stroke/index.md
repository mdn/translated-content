---
title: Propriété CSS `-webkit-text-stroke`
short-title: -webkit-text-stroke
slug: Web/CSS/Reference/Properties/-webkit-text-stroke
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

La propriété [raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) [CSS](/fr/docs/Web/CSS) **`-webkit-text-stroke`** définit la [largeur](/fr/docs/Web/CSS/Reference/Values/length) et la [couleur](/fr/docs/Web/CSS/Reference/Values/color_value) du contour des caractères du texte.

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("-webkit-text-stroke-color")}}
- {{CSSxRef("-webkit-text-stroke-width")}}

## Syntaxe

```css
/* Valeurs de largeur et de couleur */
-webkit-text-stroke: 4px navy;

/* Valeurs globales */
-webkit-text-stroke: inherit;
-webkit-text-stroke: initial;
-webkit-text-stroke: revert;
-webkit-text-stroke: revert-layer;
-webkit-text-stroke: unset;
```

### Valeurs

Cette propriété est définie avec deux valeurs séparées par un espace&nbsp;:

- {{CSSxRef("&lt;length&gt;")}}
  - : La largeur du tracé du texte.
- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur du tracé du texte.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ajouter un contour rouge au texte

#### HTML

```html
<p id="exemple">Un texte avec un bordure</p>
```

#### CSS

```css
#exemple {
  font-size: 3em;
  margin: 0;
  -webkit-text-stroke: 2px red;
}
```

#### Résultat

{{EmbedLiveSample("Ajouter un contour rouge au texte", 600, 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le billet de _Surfin' Safari_ qui annonce cette fonctionnalité <sup>(angl.)</sup>](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [L'article de CSS-Tricks décrivant cette fonctionnalité <sup>(angl.)</sup>](https://css-tricks.com/adding-stroke-to-web-text/)
- La propriété {{CSSxRef("-webkit-text-stroke-width")}}
- La propriété {{CSSxRef("-webkit-text-stroke-color")}}
- La propriété {{CSSxRef("-webkit-text-fill-color")}}
