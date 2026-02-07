---
title: inline-size
slug: Web/CSS/Reference/Properties/inline-size
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`inline-size`** définit la taille du bloc d'un élément selon l'axe en ligne. Si {{CSSxRef("writing-mode")}} est horizontal, cela correspond à {{CSSxRef("width")}}&nbsp;; si le mode d'écriture est vertical, cela correspond à {{CSSxRef("height")}}. Une propriété associée est {{CSSxRef("block-size")}}, qui définit l'autre dimension de l'élément.

{{InteractiveExample("Démonstration CSS&nbsp;: inline-size")}}

```css interactive-example-choice
inline-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inline-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
inline-size: auto;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inline-size: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte où vous pouvez changer la inline-size.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: white;
}
```

## Syntaxe

```css
/* Valeurs de type <length> */
inline-size: 300px;
inline-size: 25em;
inline-size: anchor-size(width);
inline-size: anchor-size(--my-anchor inline);

/* Valeurs de type <percentage> */
inline-size: 75%;

/* Valeurs avec un mot-clé */
inline-size: max-content;
inline-size: min-content;
inline-size: fit-content;
inline-size: fit-content(20em);
inline-size: auto;

/* Valeurs globales */
inline-size: inherit;
inline-size: initial;
inline-size: revert;
inline-size: revert-layer;
inline-size: unset;
```

### Valeurs

La propriété `inline-size` peut prendre les mêmes valeurs que les propriétés {{CSSxRef("width")}} et {{CSSxRef("height")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la taille en pixels sur l'axe en ligne

#### HTML

```html
<p class="exempleTexte">Texte d'exemple</p>
```

#### CSS

```css
.exempleTexte {
  writing-mode: vertical-rl;
  background-color: yellow;
  inline-size: 110px;
}
```

#### Résultat

{{EmbedLiveSample("Définir la taille en pixels sur l'axe en ligne")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("width")}} et {{CSSxRef("height")}}
- La propriété {{CSSxRef("writing-mode")}}
