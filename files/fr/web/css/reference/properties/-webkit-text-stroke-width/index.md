---
title: -webkit-text-stroke-width
slug: Web/CSS/Reference/Properties/-webkit-text-stroke-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`-webkit-text-stroke-width`** permet de définir l'épaisseur du trait qui entoure les lettres du texte.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
-webkit-text-stroke-width: thin;
-webkit-text-stroke-width: medium;
-webkit-text-stroke-width: thick;

/* Valeurs de longueur */
/* Type <length>       */
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-width: 0.1em;
-webkit-text-stroke-width: 1mm;
-webkit-text-stroke-width: 5pt;

/* Valeurs globales */
-webkit-text-stroke-width: inherit;
-webkit-text-stroke-width: initial;
-webkit-text-stroke-width: revert;
-webkit-text-stroke-width: revert-layer;
-webkit-text-stroke-width: unset;
```

### Valeurs

- `<line-width>`
  - : La largeur du trait utilisé pour entourer les lettres du texte.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Varier l'épaisseur du trait

#### CSS

```css
p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-color: red;
}

#thin {
  -webkit-text-stroke-width: thin;
}

#medium {
  -webkit-text-stroke-width: 3px;
}

#thick {
  -webkit-text-stroke-width: 1.5mm;
}
```

#### HTML

```html
<p id="thin">Trait fin</p>
<p id="medium">Trait moyen</p>
<p id="thick">Trait épais</p>
```

#### Résultat

{{EmbedLiveSample("Varier l'épaisseur du trait", 450, 230)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le billet de _Surfin' Safari_ qui annonce cette fonctionnalité <sup>(angl.)</sup>](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [L'article de CSS-Tricks à propos de cette fonctionnalité <sup>(angl.)</sup>](https://css-tricks.com/adding-stroke-to-web-text/)
- La propriété {{CSSxRef("-webkit-text-stroke-color")}}
- La propriété {{CSSxRef("-webkit-text-stroke")}}
- La propriété {{CSSxRef("-webkit-text-fill-color")}}
