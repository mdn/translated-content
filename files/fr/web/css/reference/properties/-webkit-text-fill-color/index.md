---
title: -webkit-text-fill-color
slug: Web/CSS/Reference/Properties/-webkit-text-fill-color
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La propriété [CSS](/fr/docs/Web/CSS) **`-webkit-text-fill-color`** définit la couleur de remplissage {{CSSxRef("color_value", "&lt;color&gt;")}} des caractères du texte. Si cette propriété n'est pas définie, la valeur de la propriété {{CSSxRef("color")}} est utilisée.

## Syntaxe

```css
/* Valeurs de type <color> */
-webkit-text-fill-color: red;
-webkit-text-fill-color: #123456;
-webkit-text-fill-color: rgb(100 200 0);

/* Valeurs globales */
-webkit-text-fill-color: inherit;
-webkit-text-fill-color: initial;
-webkit-text-fill-color: revert;
-webkit-text-fill-color: revert-layer;
-webkit-text-fill-color: unset;
```

### Valeurs

- {{CSSxRef("color_value", "&lt;color&gt;")}}
  - : La couleur utilisée pour colorer les lettres du texte.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Changer la couleur de remplissage

#### CSS

```css
p {
  margin: 0;
  font-size: 3em;
  -webkit-text-fill-color: green;
}
```

#### HTML

```html
<p>Ce texte est vert.</p>
```

#### Résultat

{{EmbedLiveSample("Changer la couleur de remplissage", 380, 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le billet de _Surfin' Safari_ qui annonce cette fonctionnalité <sup>(angl.)</sup>](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [L'article de CSS-Tricks qui décrit cette fonctionnalité <sup>(angl.)</sup>](https://css-tricks.com/adding-stroke-to-web-text/)
- La propriété {{CSSxRef("-webkit-text-stroke-color")}}
- La propriété {{CSSxRef("-webkit-text-stroke-width")}}
- La propriété {{CSSxRef("-webkit-text-stroke")}}
