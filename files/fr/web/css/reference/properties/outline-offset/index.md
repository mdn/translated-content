---
title: Propriété CSS `outline-offset`
short-title: outline-offset
slug: Web/CSS/Reference/Properties/outline-offset
l10n:
  sourceCommit: f382f345d642cdf970530cf1db6bde8c4da33398
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

## Accessibilité

Lorsqu'un contour est utilisé comme indicateur de sélection, la proportion de contraste de 3:1 défini dans le [critère de succès 1.4.11 Contraste non textuel <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) exige que {{CSSxRef("outline-color")}} soit mesurée par rapport à la couleur de l'arrière-plan. Le `outline-offset` crée un espace transparent entre le bord de l'élément et son contour. Le contour décalé est tracé soit sur ce qui se trouve derrière l'élément, soit, avec un décalage négatif, sur l'arrière-plan de l'élément lui-même, ce qui peut modifier la couleur par rapport à laquelle le rapport est mesuré.

Lorsqu'un contour est utilisé comme indicateur de sélection, testez votre contour de sélection à l'intérieur d'un conteneur qui coupe son débordement et à l'intérieur d'un {{Glossary("scroll container", "conteneur de défilement")}}. Un décalage positif peut déplacer le contour en dehors d'un tel ancêtre, où une partie de l'indicateur est coupée. Le [critère de succès 2.4.11 La Sélection N'est Pas Obscurcie (Minimum) <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) exige que le composant sélectionné ne soit pas entièrement caché, et le [critère de succès 2.4.13 Apparence de la Sélection <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance) définit une surface minimale pour l'indicateur lui-même.

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
