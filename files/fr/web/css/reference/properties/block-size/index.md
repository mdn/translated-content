---
title: block-size
slug: Web/CSS/Reference/Properties/block-size
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`block-size`** définit la taille du bloc d'un élément selon [l'axe du bloc](/fr/docs/Glossary/Grid_Axis). Si le mode d'écriture ({{CSSxRef("writing-mode")}}) est horizontal, cela correspond à la propriété {{CSSxRef("height")}}&nbsp;; si le mode d'écriture est vertical, cela correspond à la propriété {{CSSxRef("width")}}. Une propriété associée est {{CSSxRef("inline-size")}}, qui définit l'autre dimension de l'élément.

{{InteractiveExample("Démonstration CSS&nbsp;: block-size")}}

```css interactive-example-choice
block-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
block-size: auto;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte où vous pouvez modifier la valeur de block-size.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: white;
}
```

## Syntaxe

```css
/* Valeurs de longueur <length> */
block-size: 300px;
block-size: 25em;
block-size: anchor-size(height);
block-size: calc(anchor-size(--my-anchor block) * 0.75);

/* Valeurs en pourcentage <percentage> */
block-size: 75%;

/* Valeurs avec un mot-clé */
block-size: max-content;
block-size: min-content;
block-size: fit-content;
block-size: fit-content(20em);
block-size: auto;

/* Valeurs globales */
block-size: inherit;
block-size: initial;
block-size: revert;
block-size: revert-layer;
block-size: unset;
```

### Valeurs

La propriété `block-size` peut prendre les mêmes valeurs que {{CSSxRef("width")}} et {{CSSxRef("height")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Taille de bloc avec texte vertical

#### HTML

```html
<p class="texteExemple">Texte d'exemple</p>
```

#### CSS

```css
.texteExemple {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

#### Résultat

{{EmbedLiveSample("Taille de bloc avec texte vertical")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("width")}} et {{CSSxRef("height")}}
- La propriété {{CSSxRef("writing-mode")}}
