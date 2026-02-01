---
title: border-block-start
slug: Web/CSS/Reference/Properties/border-block-start
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`border-block-start`** permet de définir à un seul endroit dans la feuille de style les valeurs de la propriété logique de bordure de début de bloc.

{{InteractiveExample("Démonstration CSS&nbsp;: border-block-start")}}

```css interactive-example-choice
border-block-start: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-start: 1rem solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start: thick double #32a1ce;
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

- {{CSSxRef("border-block-start-color")}}
- {{CSSxRef("border-block-start-style")}}
- {{CSSxRef("border-block-start-width")}}

## Syntaxe

```css
border-block-start: 1px;
border-block-start: 2px dotted;
border-block-start: medium dashed blue;

/* Valeurs globales */
border-block-start: inherit;
border-block-start: initial;
border-block-start: revert;
border-block-start: revert-layer;
border-block-start: unset;
```

`border-block-start` permet de définir une ou plusieurs propriétés parmi {{CSSxRef("border-block-start-width")}}, {{CSSxRef("border-block-start-style")}} et {{CSSxRef("border-block-start-color")}}. La bordure physique correspondante dépend du mode d'écriture, de la direction et de l'orientation du texte de l'élément. Autrement dit, elle peut correspondre à {{CSSxRef("border-top")}}, {{CSSxRef("border-right")}}, {{CSSxRef("border-bottom")}} ou {{CSSxRef("border-left")}} selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

Les propriétés associées sont {{CSSxRef("border-block-end")}}, {{CSSxRef("border-inline-start")}} et {{CSSxRef("border-inline-end")}}, qui définissent les autres bordures de l'élément.

### Valeurs

La propriété `border-block-start` peut être utilisée avec une ou plusieurs de ces valeurs, quel que soit l'ordre&nbsp;:

- `<'border-width'>`
  - : La largeur utilisée pour la bordure de ce côté, voir {{CSSxRef("border-width")}}.
- `<'border-style'>`
  - : Le style utilisé pour la ligne de la bordure de ce côté, voir {{CSSxRef("border-style")}}.
- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur de la bordure de ce côté.

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
  border-block-start: 5px dashed blue;
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
