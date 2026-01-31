---
title: border-left
slug: Web/CSS/Reference/Properties/border-left
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`border-left`** permet de définir toutes les propriétés de la [bordure](/fr/docs/Web/CSS/Reference/Properties/border) à gauche d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: border-left")}}

```css interactive-example-choice
border-left: solid;
```

```css interactive-example-choice
border-left: dashed red;
```

```css interactive-example-choice
border-left: 1rem solid;
```

```css interactive-example-choice
border-left: thick double #32a1ce;
```

```css interactive-example-choice
border-left: 4mm ridge rgb(211 220 50 / 0.6);
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

- {{CSSxRef("border-left-color")}}
- {{CSSxRef("border-left-style")}}
- {{CSSxRef("border-left-width")}}

## Syntaxe

```css
border-left: 1px;
border-left: 2px dotted;
border-left: medium dashed blue;

/* Valeurs globales */
border-left: inherit;
border-left: initial;
border-left: revert;
border-left: revert-layer;
border-left: unset;
```

Les trois valeurs de la propriété raccourcie peuvent être placées dans n'importe quel ordre et une ou deux d'entre elles peuvent être omises.

### Valeurs

- `<br-width>`
  - : Voir {{CSSxRef("border-left-width")}}.
- `<br-style>`
  - : Voir {{CSSxRef("border-left-style")}}.
- {{CSSxRef("&lt;color&gt;")}}
  - : Voir {{CSSxRef("border-left-color")}}.

## Description

Comme pour toutes les propriétés raccourcies, `border-left` définit toujours les valeurs de toutes les propriétés qu'elle peut définir, même si elles ne sont pas définies. Celles qui ne sont pas définies prennent leur valeur par défaut. Considérez le code suivant&nbsp;:

```css
border-left-style: dotted;
border-left: thick green;
```

Cela revient en fait au même que&nbsp;:

```css
border-left-style: dotted;
border-left: none thick green;
```

La valeur de {{CSSxRef("border-left-style")}} fournie avant `border-left` est ignorée. Comme la valeur par défaut de {{CSSxRef("border-left-style")}} est `none`, si vous n'indiquez pas la partie `border-style`, il n'y aura pas de bordure.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Appliquer une bordure à gauche

#### HTML

```html
<div>Ceci est une boîte avec une bordure à gauche.</div>
```

#### CSS

```css
div {
  border-left: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Résultat

{{EmbedLiveSample("Appliquer une bordure à gauche")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("border")}}
- La propriété {{CSSxRef("border-block")}}
- La propriété {{CSSxRef("outline")}}
- [Arrière-plans et bordures](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [Apprendre CSS&nbsp;: arrière-plans et bordures](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
