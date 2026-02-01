---
title: border-block-color
slug: Web/CSS/Reference/Properties/border-block-color
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-block-color`** permet de définir la couleur des bordures logiques de bloc d'un élément. Cette couleur correspond à une bordure physique selon le mode d'écriture, la direction et l'orientation du texte de l'élément. Elle peut donc correspondre à {{CSSxRef("border-top-color")}} et {{CSSxRef("border-bottom-color")}}, ou à {{CSSxRef("border-right-color")}} et {{CSSxRef("border-left-color")}} selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

La couleur de la bordure sur l'autre dimension peut être définie avec {{CSSxRef("border-inline-color")}}, qui définit {{CSSxRef("border-inline-start-color")}} et {{CSSxRef("border-inline-end-color")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-block-color")}}

```css interactive-example-choice
border-block-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-color: rgb(170 50 220 / 0.6);
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
border-block-color: yellow;
border-block-color: #f5f6f7;

/* Valeurs globales */
border-block-color: inherit;
border-block-color: initial;
border-block-color: revert;
border-block-color: revert-layer;
border-block-color: unset;
```

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur de la bordure.

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
  border: 10px solid blue;
  border-block-color: red;
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
- Cette propriété correspond aux propriétés physiques de bordure&nbsp;: {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}} ou {{CSSxRef("border-left-color")}}.
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
