---
title: -moz-float-edge
slug: Web/CSS/Reference/Properties/-moz-float-edge
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}{{Deprecated_Header}}

La propriété [CSS](/fr/docs/Web/CSS) non standard **`-moz-float-edge`** définit si les propriétés de hauteur et de larguer d'un élément incluent la marge, la bordure et/ou le remplissage (_padding_).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
-moz-float-edge: content-box;
-moz-float-edge: margin-box;

/* Valeurs globales */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
```

### Valeurs

- `content-box`
  - : Les propriétés de hauteur et de largeur incluent le contenu, mais pas le remplissage, la bordure et la marge.
- `margin-box`
  - : Les propriétés de hauteur et de largeur incluent le contenu, le remplissage, la bordure et la marge.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-moz-float-edge = content-box | margin-box`)}}

## Exemples

### HTML

```html
<div class="box">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
```

### CSS

```css
.box {
  display: block;
  height: 5px;
  margin: 0.5em auto 0.5em auto;
  color: gray;
  -moz-float-edge: margin-box;
  box-sizing: border-box;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Boggue Firefox 432891 <sup>(angl.)</sup>](https://bugzil.la/432891)
