---
title: border-block-end
slug: Web/CSS/Reference/Properties/border-block-end
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`border-block-end`** permet de définir à un seul endroit dans la feuille de style les valeurs de la propriété logique de bordure de fin de bloc.

{{InteractiveExample("Démonstration CSS&nbsp;: border-block-end")}}

```css interactive-example-choice
border-block-end: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-end: 1rem solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end: thick double #32a1ce;
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
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("border-block-start")}}
- {{CSSxRef("border-inline-end")}}
- {{CSSxRef("border-inline-start")}}

## Syntaxe

```css
border-block-end: 1px;
border-block-end: 2px dotted;
border-block-end: medium dashed blue;

/* Valeurs globales */
border-block-end: inherit;
border-block-end: initial;
border-block-end: revert;
border-block-end: revert-layer;
border-block-end: unset;
```

`border-block-end` permet de définir une ou plusieurs propriétés parmi {{CSSxRef("border-block-end-width")}}, {{CSSxRef("border-block-end-style")}} et {{CSSxRef("border-block-end-color")}}. La bordure physique correspondante dépend du mode d'écriture, de la direction et de l'orientation du texte de l'élément. Autrement dit, elle peut correspondre à {{CSSxRef("border-top")}}, {{CSSxRef("border-right")}}, {{CSSxRef("border-bottom")}} ou {{CSSxRef("border-left")}} selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

Les propriétés associées sont {{CSSxRef("border-block-start")}}, {{CSSxRef("border-inline-start")}} et {{CSSxRef("border-inline-end")}}, qui définissent les autres bordures de l'élément.

### Valeurs

La propriété `border-block-end` peut être utilisée avec une ou plusieurs de ces valeurs, quel que soit l'ordre&nbsp;:

- `<'border-width'>`
  - : La largeur de la bordure. Voir {{CSSxRef("border-width")}}.
- `<'border-style'>`
  - : Le style utilisé pour la ligne de la bordure. Voir {{CSSxRef("border-style")}}.
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
  writing-mode: vertical-rl;
  border-block-end: 5px dashed blue;
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
