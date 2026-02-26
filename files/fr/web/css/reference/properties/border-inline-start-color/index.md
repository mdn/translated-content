---
title: border-inline-start-color
slug: Web/CSS/Reference/Properties/border-inline-start-color
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-inline-start-color`** définit la couleur de la bordure logique de début de ligne d'un élément, qui correspond à une couleur de bordure physique selon le mode d'écriture, la direction et l'orientation du texte de l'élément. Elle correspond à la propriété {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}} ou {{CSSxRef("border-left-color")}}, selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-inline-start-color")}}

```css interactive-example-choice
border-inline-start-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-start-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-start-color: rgb(170 50 220 / 0.6);
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
border-inline-start-color: red;
border-inline-start-color: #ee4141;

/* Valeurs globales */
border-inline-start-color: inherit;
border-inline-start-color: initial;
border-inline-start-color: revert;
border-inline-start-color: revert-layer;
border-inline-start-color: unset;
```

Les propriétés associées sont {{CSSxRef("border-block-start-color")}}, {{CSSxRef("border-block-end-color")}} et {{CSSxRef("border-inline-end-color")}}, qui définissent les autres couleurs de bordure de l'élément.

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur de la bordure.

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
  border: 10px solid blue;
  border-inline-start-color: red;
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
- Cette propriété correspond à l'une des propriétés physiques de bordure&nbsp;: {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}} ou {{CSSxRef("border-left-color")}}.
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
