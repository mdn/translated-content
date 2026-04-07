---
title: max-inline-size
slug: Web/CSS/Reference/Properties/max-inline-size
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`max-inline-size`** définit la taille maximale horizontale ou verticale d'un élément en fonction de son mode d'écriture. Elle correspond à la propriété {{CSSxRef("max-width")}} ou {{CSSxRef("max-height")}}, selon la valeur de {{CSSxRef("writing-mode")}}.

Si le mode d'écriture est orienté verticalement, la valeur de `max-inline-size` correspond à la hauteur maximale de l'élément&nbsp;; sinon, elle correspond à la largeur maximale de l'élément. Une propriété associée est {{CSSxRef("max-block-size")}}, qui définit l'autre dimension de l'élément.

{{InteractiveExample("Démonstration CSS&nbsp;: max-inline-size")}}

```css interactive-example-choice
max-inline-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
max-inline-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
max-inline-size: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
max-inline-size: 75%;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte où vous pouvez changer la valeur de max-inline-size.
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
max-inline-size: 300px;
max-inline-size: 25em;
max-inline-size: anchor-size(width);
max-inline-size: anchor-size(--my-anchor self-block, 200px);

/* Valeurs de type <percentage> */
max-inline-size: 75%;

/* Valeurs avec un mot-clé */
max-inline-size: none;
max-inline-size: max-content;
max-inline-size: min-content;
max-inline-size: fit-content;
max-inline-size: fit-content(20em);

/* Valeurs globales */
max-inline-size: inherit;
max-inline-size: initial;
max-inline-size: revert;
max-inline-size: revert-layer;
max-inline-size: unset;
```

### Valeurs

La propriété `max-inline-size` peut prendre les mêmes valeurs que les propriétés {{CSSxRef("max-width")}} ou {{CSSxRef("max-height")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la taille maximale en ligne en pixels

#### HTML

```html
<p class="texteExemple">Texte d'exemple</p>
```

#### CSS

```css
.texteExemple {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 100%;
  max-inline-size: 200px;
}
```

#### Résultat

{{EmbedLiveSample("Définir la taille maximale en ligne en pixels")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("max-width")}} et {{CSSxRef("max-height")}}
- La propriété {{CSSxRef("writing-mode")}}
