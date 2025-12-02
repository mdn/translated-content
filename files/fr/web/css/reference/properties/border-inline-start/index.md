---
title: border-inline-start
slug: Web/CSS/Reference/Properties/border-inline-start
original_slug: Web/CSS/border-inline-start
---

{{CSSRef}}

La propriété **`border-inline-start`** est une propriété raccourcie qui permet de définir la bordure d'un élément pour le côté correspondant au début de l'élément dans le sens de lecture.

{{InteractiveExample("CSS Demo: border-inline-start")}}

```css interactive-example-choice
border-inline-start: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-start: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-start: 1rem solid;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Propriétés détaillées correspondantes

Cette propriété est une propriété raccourcie pour les propriétés CSS&nbsp;:

- [`border-inline-start-color`](/fr/docs/Web/CSS/Reference/Properties/border-inline-start-color)
- [`border-inline-start-style`](/fr/docs/Web/CSS/Reference/Properties/border-inline-start-style)
- [`border-inline-start-width`](/fr/docs/Web/CSS/Reference/Properties/border-inline-start-width)

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

Cette propriété logique correspond à l'une des propriété physique équivalente selon le mode d'écriture, la directionnalité et l'orientation du texte. Autrement dit, elle correspond à l'une des propriétés [`border-top`](/fr/docs/Web/CSS/Reference/Properties/border-top), [`border-right`](/fr/docs/Web/CSS/Reference/Properties/border-right), [`border-bottom`](/fr/docs/Web/CSS/Reference/Properties/border-bottom) ou [`border-left`](/fr/docs/Web/CSS/Reference/Properties/border-left) selon les valeurs utilisées pour [`writing-mode`](/fr/docs/Web/CSS/Reference/Properties/writing-mode), [`direction`](/fr/docs/Web/CSS/Reference/Properties/direction) et [`text-orientation`](/fr/docs/Web/CSS/Reference/Properties/text-orientation).

On peut rapprocher cette propriété des autres propriétés logiques raccourcies définissant les bordures des autres côtés&nbsp;: [`border-block-start`](/fr/docs/Web/CSS/Reference/Properties/border-block-start), [`border-block-end`](/fr/docs/Web/CSS/Reference/Properties/border-block-end), [`border-inline-end`](/fr/docs/Web/CSS/Reference/Properties/border-inline-end).

### Valeurs

Une ou plusieurs valeurs parmi les suivantes, dans n'importe quel ordre&nbsp;:

- `<'border-width'>`
  - : La largeur de la bordure, voir [`border-width`](/fr/docs/Web/CSS/Reference/Properties/border-width).
- `<'border-style'>`
  - : Le style utilisé pour la ligne de la bordure sur ce côté, voir [`border-style`](/fr/docs/Web/CSS/Reference/Properties/border-style).
- `<'color'>`
  - : La couleur utilisée pour la bordure sur ce côté, voir [`color`](/fr/docs/Web/CSS/Reference/Properties/color).

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

- Les propriétés physiques correspondantes&nbsp;: [`border-top`](/fr/docs/Web/CSS/Reference/Properties/border-top), [`border-right`](/fr/docs/Web/CSS/Reference/Properties/border-right), [`border-bottom`](/fr/docs/Web/CSS/Reference/Properties/border-bottom), [`border-left`](/fr/docs/Web/CSS/Reference/Properties/border-left)
- [`writing-mode`](/fr/docs/Web/CSS/Reference/Properties/writing-mode), [`direction`](/fr/docs/Web/CSS/Reference/Properties/direction), [`text-orientation`](/fr/docs/Web/CSS/Reference/Properties/text-orientation)
