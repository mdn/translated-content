---
title: border-inline-end
slug: Web/CSS/Reference/Properties/border-inline-end
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`border-inline-end`** permet de définir les valeurs individuelles des propriétés logiques de bordure en ligne de fin à un seul endroit dans la feuille de style.

{{InteractiveExample("Démonstration CSS&nbsp;: border-inline-end")}}

```css interactive-example-choice
border-inline-end: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-end: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-end: 1rem solid;
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
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Propriétés constitutives

Cette propriété est une abréviation pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("border-inline-end-color")}}
- {{CSSxRef("border-inline-end-style")}}
- {{CSSxRef("border-inline-end-width")}}

## Syntaxe

```css
border-inline-end: 1px;
border-inline-end: 2px dashed;
border-inline-end: medium dashed blue;

/* Valeurs globales */
border-inline-end: inherit;
border-inline-end: initial;
border-inline-end: revert;
border-inline-end: revert-layer;
border-inline-end: unset;
```

La bordure physique à laquelle `border-inline-end` correspond dépend du mode d'écriture, de la direction et de l'orientation du texte de l'élément. Elle correspond à la propriété {{CSSxRef("border-top")}}, {{CSSxRef("border-right")}}, {{CSSxRef("border-bottom")}} ou {{CSSxRef("border-left")}}, selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

Les propriétés associées sont {{CSSxRef("border-block-start")}}, {{CSSxRef("border-block-end")}} et {{CSSxRef("border-inline-start")}}, qui définissent les autres bordures de l'élément.

### Valeurs

Une ou plusieurs valeurs parmi les suivantes, dans n'importe quel ordre&nbsp;:

- `<'border-width'>`
  - : La largeur de la bordure pour ce côté. Voir {{CSSxRef("border-width")}}.
- `<'border-style'>`
  - : Le style de la ligne utilisé pour la bordure de ce côté. Voir {{CSSxRef("border-style")}}.
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
  writing-mode: vertical-rl;
  border-inline-end: 5px dashed blue;
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
- Cette propriété correspond à l'une des propriétés physiques de bordure&nbsp;: {{CSSxRef("border-top")}}, {{CSSxRef("border-right")}}, {{CSSxRef("border-bottom")}} ou {{CSSxRef("border-left")}}.
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
