---
title: Propriété CSS `outline-offset`
short-title: outline-offset
slug: Web/CSS/Reference/Properties/outline-offset
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`outline-offset`** définit l'espace entre un [contour](/fr/docs/Web/CSS/Reference/Properties/outline) et le bord ou la bordure d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: outline-offset")}}

```css interactive-example-choice
outline-offset: 4px;
```

```css interactive-example-choice
outline-offset: 0.6rem;
```

```css interactive-example-choice
outline-offset: 12px;
outline: 5px dashed blue;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec un contour autour.
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 2px solid crimson;
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntaxe

```css
/* Valeurs de type <length> */
outline-offset: 3px;
outline-offset: 0.2em;

/* Valeurs globales */
outline-offset: inherit;
outline-offset: initial;
outline-offset: revert;
outline-offset: revert-layer;
outline-offset: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La largeur de l'espace entre l'élément et son contour. Une valeur négative place le contour à l'intérieur de l'élément. Une valeur de `0` place le contour de manière à ce qu'il n'y ait pas d'espace entre lui et l'élément.

## Description

Un contour est une ligne tracée autour d'un élément, à l'extérieur du bord de la bordure. L'espace entre un élément et son contour est transparent. En d'autres termes, il est identique à l'arrière-plan de l'élément parent.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir un décalage de contour en pixels

#### HTML

```html
<p>Gallia est omnis divisa in partes tres.</p>
```

#### CSS

```css
p {
  outline: 1px dashed red;
  outline-offset: 10px;
  background: yellow;
  border: 1px solid blue;
  margin: 15px;
}
```

#### Résultat

{{EmbedLiveSample("Définir un décalage de contour en pixels")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("outline")}}
- La propriété {{CSSxRef("outline-width")}}
- La propriété {{CSSxRef("outline-style")}}
- La propriété {{CSSxRef("outline-color")}}
