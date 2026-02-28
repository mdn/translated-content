---
title: border-inline-start-style
slug: Web/CSS/Reference/Properties/border-inline-start-style
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-inline-start-style`** définit le style de la bordure logique de début de ligne d'un élément, qui correspond à un style de bordure physique selon le mode d'écriture, la direction et l'orientation du texte de l'élément. Elle correspond à la propriété {{CSSxRef("border-top-style")}}, {{CSSxRef("border-right-style")}}, {{CSSxRef("border-bottom-style")}} ou {{CSSxRef("border-left-style")}}, selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-inline-start-style")}}

```css interactive-example-choice
border-inline-start-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-start-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-start-style: groove;
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
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Syntaxe

```css
/* Valeurs de type <'border-style'> */
border-inline-start-style: dashed;
border-inline-start-style: dotted;
border-inline-start-style: groove;

/* Valeurs globales */
border-inline-start-style: inherit;
border-inline-start-style: initial;
border-inline-start-style: revert;
border-inline-start-style: revert-layer;
border-inline-start-style: unset;
```

Les propriétés associées sont {{CSSxRef("border-block-start-style")}}, {{CSSxRef("border-block-end-style")}} et {{CSSxRef("border-inline-end-style")}}, qui définissent les autres styles de bordure de l'élément.

### Valeurs

- `<'border-style'>`
  - : Le style de la ligne utilisé pour la bordure, voir {{CSSxRef("border-style")}}.

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
  border: 5px solid blue;
  border-inline-start-style: dashed;
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
- Cette propriété correspond à l'une des propriétés physiques de bordure&nbsp;: {{CSSxRef("border-top-style")}}, {{CSSxRef("border-right-style")}}, {{CSSxRef("border-bottom-style")}} ou {{CSSxRef("border-left-style")}}.
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
