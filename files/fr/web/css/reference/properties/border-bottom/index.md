---
title: border-bottom
slug: Web/CSS/Reference/Properties/border-bottom
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`border-bottom`** définit la bordure inférieure d'un élément. Elle définit les valeurs de {{CSSxRef("border-bottom-width")}}, {{CSSxRef("border-bottom-style")}} et {{CSSxRef("border-bottom-color")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-bottom")}}

```css interactive-example-choice
border-bottom: solid;
```

```css interactive-example-choice
border-bottom: dashed red;
```

```css interactive-example-choice
border-bottom: 1rem solid;
```

```css interactive-example-choice
border-bottom: thick double #32a1ce;
```

```css interactive-example-choice
border-bottom: 4mm ridge rgb(211 220 50 / 0.6);
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

- {{CSSxRef("border-bottom-color")}}
- {{CSSxRef("border-bottom-style")}}
- {{CSSxRef("border-bottom-width")}}

## Syntaxe

```css
border-bottom: 1px;
border-bottom: 2px dotted;
border-bottom: medium dashed blue;

/* Valeurs globales */
border-bottom: inherit;
border-bottom: initial;
border-bottom: revert;
border-bottom: revert-layer;
border-bottom: unset;
```

Les trois valeurs de la propriété raccourcie peuvent être définies dans n'importe quel ordre et une ou deux d'entre elles peuvent être absentes.

### Valeurs

- `<br-width>`
  - : Voir {{CSSxRef("border-bottom-width")}}.
- `<br-style>`
  - : Voir {{CSSxRef("border-bottom-style")}}.
- {{CSSxRef("&lt;color&gt;")}}
  - : Voir {{CSSxRef("border-bottom-color")}}.

## Description

Comme pour toutes les propriétés raccourcies, `border-bottom` définit toujours les valeurs de toutes les propriétés qu'elle peut définir, même si elles ne sont pas indiquées. Les valeurs non indiquées prennent leur valeur par défaut. Considérez le code suivant&nbsp;:

```css
border-bottom-style: dotted;
border-bottom: thick green;
```

Il est en réalité équivalent à celui-ci&nbsp;:

```css
border-bottom-style: dotted;
border-bottom: none thick green;
```

La valeur de {{CSSxRef("border-bottom-style")}} fournie avant `border-bottom` est ignorée. Comme la valeur par défaut de {{CSSxRef("border-bottom-style")}} est `none`, ne pas définir la partie `border-style` donne pour résultat aucune bordure.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Appliquer une bordure inférieure

#### HTML

```html
<div>Cette boîte a une bordure sur le côté inférieur.</div>
```

#### CSS

```css
div {
  border-bottom: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Résultat

{{EmbedLiveSample("Appliquer une bordure inférieure", 200, 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("border")}}
- La propriété {{CSSxRef("border-block")}}
- La propriété {{CSSxRef("outline")}}
