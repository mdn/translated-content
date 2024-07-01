---
title: border-inline-start
slug: Web/CSS/border-inline-start
---

{{CSSRef}}

La propriété **`border-inline-start`** est une propriété raccourcie qui permet de définir la bordure d'un élément pour le côté correspondant au début de l'élément dans le sens de lecture.

{{EmbedInteractiveExample("pages/css/border-inline-start.html")}}

## Propriétés détaillées correspondantes

Cette propriété est une propriété raccourcie pour les propriétés CSS&nbsp;:

- [`border-inline-start-color`](/fr/docs/Web/CSS/border-inline-start-color)
- [`border-inline-start-style`](/fr/docs/Web/CSS/border-inline-start-style)
- [`border-inline-start-width`](/fr/docs/Web/CSS/border-inline-start-width)

## Syntaxe

```css
border-inline-start: 1px;
border-inline-start: 2px dotted;
border-inline-start: medium dashed green;

/* Valeurs globales */
border-inline-start: inherit;
border-inline-start: initial;
border-inline-start: revert;
border-inline-start: unset;
```

Cette propriété logique correspond à l'une des propriété physique équivalente selon le mode d'écriture, la directionnalité et l'orientation du texte. Autrement dit, elle correspond à l'une des propriétés [`border-top`](/fr/docs/Web/CSS/border-top), [`border-right`](/fr/docs/Web/CSS/border-right), [`border-bottom`](/fr/docs/Web/CSS/border-bottom) ou [`border-left`](/fr/docs/Web/CSS/border-left) selon les valeurs utilisées pour [`writing-mode`](/fr/docs/Web/CSS/writing-mode), [`direction`](/fr/docs/Web/CSS/direction) et [`text-orientation`](/fr/docs/Web/CSS/text-orientation).

On peut rapprocher cette propriété des autres propriétés logiques raccourcies définissant les bordures des autres côtés&nbsp;: [`border-block-start`](/fr/docs/Web/CSS/border-block-start), [`border-block-end`](/fr/docs/Web/CSS/border-block-end), [`border-inline-end`](/fr/docs/Web/CSS/border-inline-end).

### Valeurs

Une ou plusieurs valeurs parmi les suivantes, dans n'importe quel ordre&nbsp;:

- `<'border-width'>`
  - : La largeur de la bordure, voir [`border-width`](/fr/docs/Web/CSS/border-width).
- `<'border-style'>`
  - : Le style utilisé pour la ligne de la bordure sur ce côté, voir [`border-style`](/fr/docs/Web/CSS/border-style).
- `<'color'>`
  - : La couleur utilisée pour la bordure sur ce côté, voir [`color`](/fr/docs/Web/CSS/color).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div>
  <p class="exemple">Texte d'exemple</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exemple {
  writing-mode: vertical-rl;
  border-inline-start: 5px dashed blue;
}
```

### Résultat

{{EmbedLiveSample('', 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes&nbsp;: [`border-top`](/fr/docs/Web/CSS/border-top), [`border-right`](/fr/docs/Web/CSS/border-right), [`border-bottom`](/fr/docs/Web/CSS/border-bottom), [`border-left`](/fr/docs/Web/CSS/border-left)
- [`writing-mode`](/fr/docs/Web/CSS/writing-mode), [`direction`](/fr/docs/Web/CSS/direction), [`text-orientation`](/fr/docs/Web/CSS/text-orientation)
