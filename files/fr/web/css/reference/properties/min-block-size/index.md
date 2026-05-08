---
title: Propriété CSS `min-block-size`
short-title: min-block-size
slug: Web/CSS/Reference/Properties/min-block-size
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`min-block-size`** définit la taille minimale horizontale ou verticale du bloc d'un élément, en fonction de son mode d'écriture. Elle correspond soit à la propriété {{CSSxRef("min-width")}}, soit à la propriété {{CSSxRef("min-height")}}, selon la valeur de {{CSSxRef("writing-mode")}}.

Si le mode d'écriture est orienté verticalement, la valeur de `min-block-size` correspond à la largeur minimale de l'élément&nbsp;; sinon, elle correspond à la hauteur minimale de l'élément. Une propriété associée est {{CSSxRef("min-inline-size")}}, qui définit l'autre dimension de l'élément.

{{InteractiveExample("Démonstration CSS&nbsp;: min-block-size")}}

```css interactive-example-choice
min-block-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-block-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
min-block-size: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-block-size: 15em;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte où vous pouvez changer la taille minimale du bloc.
    <br />
    Si le contenu dépasse le minimum, la boîte s'agrandira dans la dimension du
    bloc selon les besoins du contenu.
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
/* Valeurs de type <length> */
min-block-size: 100px;
min-block-size: 5em;
min-block-size: anchor-size(self-inline);

/* Valeurs de type <percentage> */
min-block-size: 10%;

/* Valeurs avec un mot-clé */
min-block-size: max-content;
min-block-size: min-content;
min-block-size: fit-content;
min-block-size: fit-content(20em);

/* Valeurs globales */
min-block-size: inherit;
min-block-size: initial;
min-block-size: revert;
min-block-size: revert-layer;
min-block-size: unset;
```

### Valeurs

La propriété `min-block-size` peut prendre les mêmes valeurs que les propriétés {{CSSxRef("min-width")}} ou {{CSSxRef("min-height")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la taille minimale du bloc pour du texte vertical

#### HTML

```html
<p class="texteExemple">Texte d'exemple</p>
```

#### CSS

```css
.texteExemple {
  writing-mode: vertical-rl;
  background-color: yellow;
  min-block-size: 200px;
}
```

#### Résultat

{{EmbedLiveSample("Définir la taille minimale du bloc pour du texte vertical")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("min-width")}} et {{CSSxRef("min-height")}}
- La propriété {{CSSxRef("writing-mode")}}
