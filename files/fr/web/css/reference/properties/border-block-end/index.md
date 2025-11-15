---
title: border-block-end
slug: Web/CSS/Reference/Properties/border-block-end
original_slug: Web/CSS/border-block-end
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-block-end`** est une propriété raccourcie qui permet de définir la bordure d'un élément pour le côté correspondant à la fin de l'élément dans l'axe orthogonal au sens de lecture. Elle peut être utilisée pour définir les valeurs de {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}} et {{cssxref("border-block-end-color")}}.

{{InteractiveExample("CSS Demo: border-block-end")}}

```css interactive-example-choice
border-block-end: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-end: 1rem solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end: thick double #32a1ce;
writing-mode: vertical-lr;
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

Cette propriété logique correspond à l'une des propriété physique équivalente selon le mode d'écriture, la directionnalité et l'orientation du texte. Autrement dit, elle correspond à l'une des propriétés {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} ou {{cssxref("border-left")}} selon les valeurs utilisées pour {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

On peut rapprocher cette propriété des autres propriétés logiques raccourcies définissant les bordures des autres côtés :

- {{cssxref("border-block-start")}},
- {{cssxref("border-inline-end")}},
- {{cssxref("border-inline-start")}}.

## Syntaxe

```css
border-block-end: 1px;
border-block-end: 2px dotted;
border-block-end: medium dashed green;
```

### Valeurs

Une ou plusieurs valeurs parmi les suivantes, dans n'importe quel ordre :

- `<'border-width'>`
  - : La largeur de la bordure, voir {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Le style utilisé pour la ligne de la bordure, {{cssxref("border-style")}}.
- `<'color'>`
  - : La couleur de la bordure, voir {{cssxref("color")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exemple {
  writing-mode: vertical-rl;
  border-block-end: 5px dashed blue;
}
```

### HTML

```html
<div>
  <p class="exemple">Texte d'exemple</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes :
  - {{cssxref("border-top")}},
  - {{cssxref("border-right")}},
  - {{cssxref("border-bottom")}},
  - {{cssxref("border-left")}}

- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
