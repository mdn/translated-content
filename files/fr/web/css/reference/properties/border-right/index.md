---
title: border-right
slug: Web/CSS/Reference/Properties/border-right
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`border-right`** permet de définir toutes les propriétés de la [bordure](/fr/docs/Web/CSS/Reference/Properties/border) droite d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: border-right")}}

```css interactive-example-choice
border-right: solid;
```

```css interactive-example-choice
border-right: dashed red;
```

```css interactive-example-choice
border-right: 1rem solid;
```

```css interactive-example-choice
border-right: thick double #32a1ce;
```

```css interactive-example-choice
border-right: 4mm ridge rgb(211 220 50 / 0.6);
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

- {{CSSxRef("border-right-color")}}
- {{CSSxRef("border-right-style")}}
- {{CSSxRef("border-right-width")}}

## Syntaxe

```css
border-right: 1px;
border-right: 2px dotted;
border-right: medium dashed green;

/* Valeurs globales */
border-right: inherit;
border-right: initial;
border-right: revert;
border-right: revert-layer;
border-right: unset;
```

### Valeurs

- `<br-width>`
  - : Voir {{CSSxRef("border-right-width")}}.
- `<br-style>`
  - : Voir {{CSSxRef("border-right-style")}}.
- {{CSSxRef("&lt;color&gt;")}}
  - : Voir {{CSSxRef("border-right-color")}}.

## Description

Comme pour toutes les propriétés raccourcies, `border-right` définit toujours les valeurs de toutes les propriétés qu'elle peut définir, même si elles ne sont pas définies. Celles qui ne sont pas définies prennent leur valeur par défaut. Considérez le code suivant&nbsp;:

```css
border-right-style: dotted;
border-right: thick green;
```

Cela revient en fait au même que&nbsp;:

```css
border-right-style: dotted;
border-right: none thick green;
```

La valeur de {{CSSxRef("border-right-style")}} fournie avant `border-right` est ignorée. Comme la valeur par défaut de {{CSSxRef("border-right-style")}} est `none`, si vous n'indiquez pas la partie `border-style`, il n'y aura pas de bordure.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Appliquer une bordure à droite

#### HTML

```html
<div>Ceci est une boîte avec une bordure sur le côté droit.</div>
```

#### CSS

```css
div {
  border-right: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Résultat

{{EmbedLiveSample("Appliquer une bordure à droite")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("border")}}
- La propriété {{CSSxRef("border-block")}}
- La propriété {{CSSxRef("outline")}}
