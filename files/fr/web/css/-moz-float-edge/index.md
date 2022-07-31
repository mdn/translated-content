---
title: '-moz-float-edge'
slug: Web/CSS/-moz-float-edge
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-moz-float-edge
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`-moz-float-edge`** définit si les propriétés de hauteur et de larguer d'un élément incluent la marge, la bordure et/ou le remplissage (_padding_).

```css
/* Valeurs avec un mot-clé */
-moz-float-edge: border-box;
-moz-float-edge: content-box;
-moz-float-edge: margin-box;
-moz-float-edge: padding-box;

/* Valeurs globales */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
```

## Syntaxe

### Valeurs

- `border-box`
  - : Les propriétés de hauteur et de largeur incluent le contenu, le remplissage et la bordure mais pas la marge.
- `content-box`
  - : Les propriétés de hauteur et de largeur incluent le contenu, mais pas le remplissage, la bordure et la marge.
- `margin-box`
  - : Les propriétés de hauteur et de largeur incluent le contenu, le remplissage, la bordure et la marge.
- `padding-box`
  - : Les propriétés de hauteur et de largeur incluent le contenu et le remplissage mais pas la bordure ni la marge.

### Syntaxe formelle

{{csssyntax}}

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
   <p>
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
   </p>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.

{{cssinfo}}

## Voir aussi

- {{bug(432891)}}
