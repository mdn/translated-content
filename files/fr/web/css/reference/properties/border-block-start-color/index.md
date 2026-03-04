---
title: border-block-start-color
slug: Web/CSS/Reference/Properties/border-block-start-color
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS)**`border-block-start-color`** définit la couleur de la bordure logique de début de bloc d'un élément, qui correspond à une bordure physique selon le mode d'écriture, la direction et l'orientation du texte de l'élément. Elle peut correspondre à {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}} ou {{CSSxRef("border-left-color")}} selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-block-start-color")}}

```css interactive-example-choice
border-block-start-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-start-color: rgb(170 50 220 / 0.6);
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-color: hsl(60 90% 50% / 0.8);
writing-mode: vertical-lr;
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
border-block-start-color: blue;
border-block-start-color: #4c5d21;

/* Valeurs globales */
border-block-start-color: inherit;
border-block-start-color: initial;
border-block-start-color: revert;
border-block-start-color: revert-layer;
border-block-start-color: unset;
```

Les propriétés associées sont {{CSSxRef("border-block-end-color")}}, {{CSSxRef("border-inline-start-color")}} et {{CSSxRef("border-inline-end-color")}}, qui définissent les autres couleurs de bordure de l'élément.

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur de la bordure.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Bordure avec couleur et texte vertical

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
  border: 10px solid blue;
  border-block-start-color: red;
}
```

#### Résultat

{{EmbedLiveSample("Bordure avec couleur et texte vertical", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Cette propriété correspond à l'une des propriétés physiques de bordure&nbsp;: {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}} ou {{CSSxRef("border-left-color")}}.
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
