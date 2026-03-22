---
title: min-inline-size
slug: Web/CSS/Reference/Properties/min-inline-size
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`min-inline-size`** définit la taille minimale horizontale ou verticale d'un élément en ligne selon le mode d'écriture utilisé. Elle correspond à la propriété {{CSSxRef("min-width")}} ou {{CSSxRef("min-height")}}, selon la valeur de {{CSSxRef("writing-mode")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: min-inline-size")}}

```css interactive-example-choice
min-inline-size: 200px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-inline-size: 200px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
min-inline-size: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-inline-size: 75%;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Changer le min-inline-size
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
min-inline-size: 100px;
min-inline-size: 5em;
min-inline-size: anchor-size(width);

/* Valeurs de type <percentage> */
min-inline-size: 10%;

/* Valeurs avec un mot-clé */
min-inline-size: max-content;
min-inline-size: min-content;
min-inline-size: fit-content;
min-inline-size: fit-content(20em);

/* Valeurs globales */
min-inline-size: inherit;
min-inline-size: initial;
min-inline-size: revert;
min-inline-size: revert-layer;
min-inline-size: unset;
```

Si le mode d'écriture est orienté verticalement, la valeur de `min-inline-size` correspond à la hauteur minimale de l'élément&nbsp;; sinon, elle correspond à la largeur minimale de l'élément. Une propriété associée est {{CSSxRef("min-block-size")}}, qui définit l'autre dimension de l'élément.

### Valeurs

La propriété `min-inline-size` peut prendre les mêmes valeurs que les propriétés {{CSSxRef("min-width")}} ou {{CSSxRef("min-height")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la taille minimale en ligne pour le texte vertical

#### HTML

```html
<p class="texteExemple">Texte d'exemple</p>
```

#### CSS

```css
.texteExemple {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 5%;
  min-inline-size: 200px;
}
```

#### Résultat

{{EmbedLiveSample("Définir la taille minimale en ligne pour le texte vertical")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("min-width")}} et {{CSSxRef("min-height")}}
- La propriété {{CSSxRef("writing-mode")}}
