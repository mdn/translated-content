---
title: border-inline-start-width
slug: Web/CSS/Reference/Properties/border-inline-start-width
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-inline-start-width`** définit la largeur de la bordure logique de début de ligne d'un élément, qui correspond à une largeur de bordure physique selon le mode d'écriture, la direction et l'orientation du texte de l'élément. Elle correspond à la propriété {{CSSxRef("border-top-width")}}, {{CSSxRef("border-right-width")}}, {{CSSxRef("border-bottom-width")}} ou {{CSSxRef("border-left-width")}}, selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-inline-start-width")}}

```css interactive-example-choice
border-inline-start-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-start-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-start-width: 4px;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec une bordure autour.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: palegreen;
  color: black;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Syntaxe

```css
/* Valeurs de type <'border-width'> */
border-inline-start-width: 5px;
border-inline-start-width: thick;

/* Valeurs globales */
border-inline-start-width: inherit;
border-inline-start-width: initial;
border-inline-start-width: revert;
border-inline-start-width: revert-layer;
border-inline-start-width: unset;
```

Les propriétés associées sont {{CSSxRef("border-block-start-width")}}, {{CSSxRef("border-block-end-width")}} et {{CSSxRef("border-inline-end-width")}}, qui définissent les autres largeurs de bordure de l'élément.

### Valeurs

- `<'border-width'>`
  - : La largeur de la bordure, voir {{CSSxRef("border-width")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<div>
  <p class="exempleTexte">Texte d'exemple</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exempleTexte {
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-inline-start-width: 5px;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Cette propriété correspond à l'une des propriétés physiques de bordure&nbsp;: {{CSSxRef("border-top-width")}}, {{CSSxRef("border-right-width")}}, {{CSSxRef("border-bottom-width")}} ou {{CSSxRef("border-left-width")}}.
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
