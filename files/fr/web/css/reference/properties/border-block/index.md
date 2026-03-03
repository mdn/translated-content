---
title: border-block
slug: Web/CSS/Reference/Properties/border-block
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`border-block`** permet de définir les valeurs des propriétés logiques de bordure de bloc à un seul endroit dans la feuille de style.

{{InteractiveExample("Démonstration CSS&&nbsp;: border-block")}}

```css interactive-example-choice
border-block: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block: 1rem solid;
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

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("border-block-color")}}
- {{CSSxRef("border-block-style")}}
- {{CSSxRef("border-block-width")}}

## Syntaxe

```css
border-block: 1px;
border-block: 2px dotted;
border-block: medium dashed blue;

/* Valeurs globales */
border-block: inherit;
border-block: initial;
border-block: revert;
border-block: revert-layer;
border-block: unset;
```

### Valeurs

La propriété `border-block` peut être utilisée avec une ou plusieurs de ces valeurs, quel que soit l'ordre.

- `<'border-width'>`
  - : La largeur de la bordure. Voir {{CSSxRef("border-width")}}.
- `<'border-style'>`
  - : Le style pour la ligne de la bordure. Voir {{CSSxRef("border-style")}}.
- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur de la bordure.

## Description

`border-block` peut être utilisée afin de définir une ou plusieurs propriétés parmi {{CSSxRef("border-block-width")}}, {{CSSxRef("border-block-style")}} et {{CSSxRef("border-block-color")}}. La bordure est donc paramétrée de la même façon pour le début et la fin de l'axe de bloc. Les propriétés physiques correspondantes dépendront du mode d'écriture, de la direction et de l'orientation du texte. Autrement dit, cette propriété peut correspondre à {{CSSxRef("border-top")}} et {{CSSxRef("border-bottom")}} ou à {{CSSxRef("border-right")}} et {{CSSxRef("border-left")}} selon les valeurs des propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

Les bordures sur l'autre dimension peuvent être définies grâce à {{CSSxRef("border-inline")}}, (qui est la proprété raccourcie pour {{CSSxRef("border-inline-start")}} et {{CSSxRef("border-inline-end")}}).

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
  writing-mode: vertical-rl;
  border-block: 5px dashed blue;
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
- Cette propriété correspond à l'une des propriétés physiques de bordure&nbsp;: {{CSSxRef("border-top")}}, {{CSSxRef("border-right")}}, {{CSSxRef("border-bottom")}} ou {{CSSxRef("border-left")}}.
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
