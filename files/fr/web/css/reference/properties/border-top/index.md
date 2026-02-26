---
title: border-top
slug: Web/CSS/Reference/Properties/border-top
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`border-top`** permet de définir toutes les propriétés de la [bordure](/fr/docs/Web/CSS/Reference/Properties/border) supérieure d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: border-top")}}

```css interactive-example-choice
border-top: solid;
```

```css interactive-example-choice
border-top: dashed red;
```

```css interactive-example-choice
border-top: 1rem solid;
```

```css interactive-example-choice
border-top: thick double #32a1ce;
```

```css interactive-example-choice
border-top: 4mm ridge rgb(211 220 50 / 0.6);
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
}
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("border-top-color")}}
- {{CSSxRef("border-top-style")}}
- {{CSSxRef("border-top-width")}}

## Syntaxe

```css
border-top: 1px;
border-top: 2px dotted;
border-top: medium dashed green;

/* Valeurs globales */
border-top: inherit;
border-top: initial;
border-top: revert;
border-top: revert-layer;
border-top: unset;
```

Les valeurs de la propriété raccourcie peuvent être fournies dans n'importe quel ordre et une voire deux valeurs peuvent être omises.

### Valeurs

- `<br-width>`
  - : Voir {{CSSxRef("border-top-width")}}.
- `<br-style>`
  - : Voir {{CSSxRef("border-top-style")}}.
- {{CSSxRef("&lt;color&gt;")}}
  - : Voir {{CSSxRef("border-top-color")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Appliquer une bordure supérieure

#### HTML

```html
<div>Ceci est une boîte avec une bordure sur le côté supérieur.</div>
```

#### CSS

```css
div {
  border-top: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Résultat

{{EmbedLiveSample("Appliquer une bordure supérieure")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("border")}}
- {{CSSxRef("border-block")}}
- {{CSSxRef("outline")}}
