---
title: border-inline-color
slug: Web/CSS/Reference/Properties/border-inline-color
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-inline-color`** définit la couleur des bordures logiques en ligne d'un élément, qui correspond à une bordure physique selon le mode d'écriture, la direction et l'orientation du texte de l'élément. Elle correspond aux propriétés {{CSSxRef("border-top-color")}} et {{CSSxRef("border-bottom-color")}}, ou {{CSSxRef("border-right-color")}} et {{CSSxRef("border-left-color")}}, selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

La couleur de la bordure dans l'autre dimension peut être définie avec {{CSSxRef("border-block-color")}}, qui définit {{CSSxRef("border-block-start-color")}} et {{CSSxRef("border-block-end-color")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-inline-color")}}

```css interactive-example-choice
border-inline-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-color: rgb(170 50 220 / 0.6);
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
border-inline-color: yellow;
border-inline-color: #f5f6f7;

/* Valeurs globales */
border-inline-color: inherit;
border-inline-color: initial;
border-inline-color: revert;
border-inline-color: revert-layer;
border-inline-color: unset;
```

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur de la bordure.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Couleur de bordure avec texte vertical

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
  border-inline-color: red;
}
```

#### Résultat

{{EmbedLiveSample("Couleur de bordure avec texte vertical", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Cette propriété correspond aux propriétés physiques de bordure&nbsp;: {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}} ou {{CSSxRef("border-left-color")}}.
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
