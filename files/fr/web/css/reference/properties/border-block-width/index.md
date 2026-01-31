---
title: border-block-width
slug: Web/CSS/Reference/Properties/border-block-width
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-block-width`** définit la largeur des bordures logiques de bloc d'un élément, qui correspond à une largeur de bordure physique selon le mode d'écriture, la direction et l'orientation du texte de l'élément. Elle peut correspondre aux propriétés {{CSSxRef("border-top-width")}} et {{CSSxRef("border-bottom-width")}}, ou {{CSSxRef("border-left-width")}} et {{CSSxRef("border-right-width")}} selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

La largeur de bordure dans l'autre dimension peut être définie avec {{CSSxRef("border-inline-width")}}, qui définit {{CSSxRef("border-inline-start-width")}} et {{CSSxRef("border-inline-end-width")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-block-width")}}

```css interactive-example-choice
border-block-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-width: 4px;
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
border-block-width: 5px;
border-block-width: thick;

/* Valeurs globales */
border-block-width: inherit;
border-block-width: initial;
border-block-width: revert;
border-block-width: revert-layer;
border-block-width: unset;
```

### Valeur

- `<'border-width'>`
  - : La largeur de la bordure. Voir {{CSSxRef("border-width")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Bordure avec du texte vertical

#### HTML

```html
<div>
  <p class="exempleTexte">Texte d'exemple</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exempleTexte {
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-block-width: 5px 10px;
}
```

#### Résultat

{{EmbedLiveSample("Bordure avec du texte vertical", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Cette propriété correspond à l'une des propriétés physiques de bordure&nbsp;: {{CSSxRef("border-top-width")}}, {{CSSxRef("border-right-width")}}, {{CSSxRef("border-bottom-width")}} ou {{CSSxRef("border-left-width")}}.
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
