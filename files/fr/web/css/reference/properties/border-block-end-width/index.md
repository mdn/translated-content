---
title: border-block-end-width
slug: Web/CSS/Reference/Properties/border-block-end-width
original_slug: Web/CSS/border-block-end-width
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-block-end-width`** définit la largeur de la bordure pour le côté de bloc de la fin « logique » de l'élément. Cette propriété logique correspond à l'une des propriétés physiques équivalentes en fonction du mode d'écriture, de la directionnalité et de l'orientation du texte. Autrement dit, elle correspondra à {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}} ou a {{cssxref("border-left-width")}} selon les valeurs des propriétés pour {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-block-end-width")}}

```css interactive-example-choice
border-block-end-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-end-width: 4px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end-width: 4px;
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
  background-color: palegreen;
  color: #000;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

Cette propriété logique est à rapprocher des autres propriétés logiques {{cssxref("border-block-start-width")}}, {{cssxref("border-inline-end-width")}} et {{cssxref("border-inline-end-width")}} qui permettent de définir la largeur de la bordure pour les différents côtés de l'élément.

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length>      */
border-block-end-width: 5px;
border-block-end-width: thick;
```

### Valeurs

- `<'border-width'>`
  - : La largeur utilisée pour la bordure, voir {{cssxref("border-width")}}.

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
  border: 1px solid blue;
  border-block-end-width: 5px;
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
  - {{cssxref("border-top-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}

- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
