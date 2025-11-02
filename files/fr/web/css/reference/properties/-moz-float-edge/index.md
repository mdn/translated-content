---
title: -moz-float-edge
slug: Web/CSS/Reference/Properties/-moz-float-edge
original_slug: Web/CSS/-moz-float-edge
---

{{Non-standard_header}}{{Deprecated_Header}}

La propriété **`-moz-float-edge`** définit si les propriétés de hauteur et de larguer d'un élément incluent la marge, la bordure et/ou le remplissage (_padding_).

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

### HTML

```html
<div class="box">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [bug Firefox 432891](https://bugzil.la/432891)
