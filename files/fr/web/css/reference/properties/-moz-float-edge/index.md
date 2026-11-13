---
title: Propriété CSS `-moz-float-edge`
short-title: -moz-float-edge
slug: Web/CSS/Reference/Properties/-moz-float-edge
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

{{Non-standard_Header}}

La propriété [CSS](/fr/docs/Web/CSS) non standard **`-moz-float-edge`** définit si les propriétés de hauteur et de larguer d'un élément incluent la marge, la bordure et/ou le remplissage.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
-moz-float-edge: content-box;
-moz-float-edge: margin-box;

/* Valeurs globales */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: revert;
-moz-float-edge: revert-layer;
-moz-float-edge: unset;
```

### Valeurs

Cette propriété est définie comme l'un des mots-clés suivants&nbsp;:

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
<div class="boite">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
```

### CSS

```css
.boite {
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

- [Le bogue Firefox 432891 <sup>(angl.)</sup>](https://bugzil.la/432891)
