---
title: border-inline
slug: Web/CSS/Reference/Properties/border-inline
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`border-inline`** permet de définir les valeurs individuelles des propriétés logiques de bordure en ligne à un seul endroit dans la feuille de style.

{{InteractiveExample("Démonstration CSS&nbsp;: border-inline")}}

```css interactive-example-choice
border-inline: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline: 1rem solid;
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

- {{CSSxRef("border-inline-color")}}
- {{CSSxRef("border-inline-style")}}
- {{CSSxRef("border-inline-width")}}

## Syntaxe

```css
border-inline: 1px;
border-inline: 2px dotted;
border-inline: medium dashed blue;

/* Valeurs globales */
border-inline: inherit;
border-inline: initial;
border-inline: revert;
border-inline: revert-layer;
border-inline: unset;
```

### Valeurs

La propriété `border-inline` peut être utilisée avec une ou plusieurs de ces valeurs, quel que soit l'ordre.

- `<'border-width'>`
  - : La largeur de la bordure. Voir {{CSSxRef("border-width")}}.
- `<'border-style'>`
  - : Le style pour la ligne de la bordure. Voir {{CSSxRef("border-style")}}.
- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur de la bordure.

## Description

Les bordures physiques auxquelles `border-inline` correspond dépendent du mode d'écriture, de la direction et de l'orientation du texte de l'élément. Cela correspond aux propriétés {{CSSxRef("border-top")}} et {{CSSxRef("border-bottom")}} ou {{CSSxRef("border-right")}}, et {{CSSxRef("border-left")}}, selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

Les bordures dans l'autre dimension peuvent être définies avec {{CSSxRef("border-block")}}, qui définit {{CSSxRef("border-block-start")}} et {{CSSxRef("border-block-end")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Bordure avec texte vertical

#### HTML

```html
<div>
  <p class="exempleTexte">Texte exemple</p>
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
  writing-mode: vertical-rl;
  border-inline: 5px dashed blue;
}
```

#### Résultat

{{EmbedLiveSample("Bordure avec texte vertical", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Cette propriété correspond à l'une des propriétés physiques de bordure&nbsp;: {{CSSxRef("border-top")}}, {{CSSxRef("border-right")}}, {{CSSxRef("border-bottom")}} ou {{CSSxRef("border-left")}}.
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
