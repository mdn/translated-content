---
title: border-block-start-color
slug: Web/CSS/Reference/Properties/border-block-start-color
original_slug: Web/CSS/border-block-start-color
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-block-start-color`** définit la couleur de la bordure pour le côté du début de l'élément orienté orthogonalement à l'axe de lecture. Elle correspond à une propriété physique selon le mode d'écriture de l'élément, sa directionnalité et l'orientation du texte. Autrement dit, elle correspond à l'une des propriétés {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} ou {{cssxref("border-left-color")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-block-start-color")}}

```css interactive-example-choice
border-block-start-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-start-color: rgb(170, 50, 220, 0.6);
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-color: hsl(60, 90%, 50%, 0.8);
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
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

Cette propriété est à rapprocher des autres propriétés logiques permettant de définir les couleurs de la bordure d'un élément :

- {{cssxref("border-block-end-color")}},
- {{cssxref("border-inline-end-color")}},
- {{cssxref("border-inline-start-color")}}.

## Syntaxe

```css
border-block-start-color: red;
border-block-start-color: #fffff;
border-block-start-color: rgb(200, 0, 0);

border-block-start-color: unset;
border-block-start-color: initial;
border-block-start-color: inherit;
```

### Valeurs

- `<'border-color'>`
  - : Voir {{cssxref("border-color")}}

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
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-block-start-color: red;
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
  - {{cssxref("border-top-color")}},
  - {{cssxref("border-right-color")}},
  - {{cssxref("border-bottom-color")}},
  - {{cssxref("border-left-color")}}.

- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
