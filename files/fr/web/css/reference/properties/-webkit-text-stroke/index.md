---
title: -webkit-text-stroke
slug: Web/CSS/Reference/Properties/-webkit-text-stroke
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`-webkit-text-stroke`** permet de définir la [largeur](/fr/docs/Web/CSS/Reference/Values/length) et la [couleur](/fr/docs/Web/CSS/Reference/Values/color_value) du contour des caractères du texte. Il s'agit d'une propriété raccourcie pour {{CSSxRef("-webkit-text-stroke-width")}} et {{CSSxRef("-webkit-text-stroke-color")}}.

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

- {{CSSxRef("&lt;length&gt;")}}
  - : The width of the stroke.
- {{CSSxRef("&lt;color&gt;")}}
  - : The color of the stroke.

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
