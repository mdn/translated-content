---
title: border
slug: Web/CSS/Reference/Properties/border
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`border`** permet de définir la bordure d'un élément. Elle définit les valeurs de {{CSSxRef("border-width")}}, {{CSSxRef("border-style")}}, et {{CSSxRef("border-color")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border")}}

```css interactive-example-choice
border: solid;
```

```css interactive-example-choice
border: dashed red;
```

```css interactive-example-choice
border: 1rem solid;
```

```css interactive-example-choice
border: thick double #32a1ce;
```

```css interactive-example-choice
border: 4mm ridge rgb(211 220 50 / 0.6);
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

- {{CSSxRef("border-width")}}
- {{CSSxRef("border-style")}}
- {{CSSxRef("border-color")}}

## Syntaxe

```css
/* style */
border: solid;

/* largeur | style */
border: 2px dotted;

/* style | couleur */
border: outset #ff3333;

/* largeur | style | couleur */
border: medium dashed green;

/* Valeurs globales */
border: inherit;
border: initial;
border: revert;
border: revert-layer;
border: unset;
```

La propriété `border` peut être définie en utilisant une, deux ou trois des valeurs listées ci-dessous. L'ordre des valeurs n'a pas d'importance.

> [!NOTE]
> La bordure pourra être invisible si son style n'est pas défini. En effet, sa valeur par défaut est `none`.

### Valeurs

- `<line-width>`
  - : Voir {{CSSxRef("border-width")}} (la valeur par défaut est `medium`).
- `<line-style>`
  - : Voir {{CSSxRef("border-style")}} (la valeur par défaut est `none`).
- `<color>`
  - : Voir {{CSSxRef("border-color")}}. Une valeur de type {{CSSxRef("&lt;color&gt;")}} qui indique la couleur de la bordure. La valeur par défaut qui sera utilisée sera la valeur de la propriété {{CSSxRef("color")}} de l'élément (qui est la couleur du texte de l'élément, pas de son arrière-plan).

## Description

Comme pour toutes les propriétés raccourcies, toute sous-valeur omise sera définie sur sa [valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale). Il est important de noter que `border` ne permet pas de définir une valeur personnalisée pour {{CSSxRef("border-image")}}, mais la ramène à sa valeur initiale, c'est-à-dire `none`.

La propriété raccourcie `border` est particulièrement utile lorsque vous souhaitez que les quatre bordures soient identiques. Pour les différencier, vous pouvez utiliser les propriétés longues {{CSSxRef("border-width")}}, {{CSSxRef("border-style")}} et {{CSSxRef("border-color")}}, qui acceptent des valeurs différentes pour chaque côté. Vous pouvez aussi cibler une bordure à la fois avec les propriétés physiques (par exemple {{CSSxRef("border-top")}}) et logiques (par exemple {{CSSxRef("border-block-start")}}).

### Différences entre bordures et contours

Les bordures et les [contours](/fr/docs/Web/CSS/Reference/Properties/outline) sont très similaires. Cependant, les contours diffèrent des bordures de la façon suivante&nbsp;:

- Les contours n'occupent jamais d'espace, car ils sont dessinés à l'extérieur du contenu d'un élément.
- Selon la spécification, les contours n'ont pas à être rectangulaires, même s'ils le sont généralement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une bordure rose en relief

#### HTML

```html
<div>
  J'ai une bordure, un contour et une ombre portée&nbsp;! Incroyable, n'est-ce
  pas&nbsp;?
</div>
```

#### CSS

```css
div {
  border: 0.5rem outset pink;
  outline: 0.5rem solid khaki;
  box-shadow: 0 0 0 2rem skyblue;
  border-radius: 12px;
  font: bold 1rem sans-serif;
  margin: 2rem;
  padding: 1rem;
  outline-offset: 0.5rem;
}
```

### Résultat

{{EmbedLiveSample("Définir une bordure rose en relief")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("border-width")}}
- La propriété {{CSSxRef("border-style")}}
- La propriété {{CSSxRef("border-color")}}
- La propriété {{CSSxRef("outline")}}
- [Arrière-plans et bordures](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [Apprendre CSS&nbsp;: arrière-plans et bordures](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
