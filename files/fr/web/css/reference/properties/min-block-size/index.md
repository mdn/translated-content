---
title: min-block-size
slug: Web/CSS/Reference/Properties/min-block-size
original_slug: Web/CSS/min-block-size
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`min-block-size`** définit la taille minimale horizontale ou verticale d'un élément de bloc (_block_) selon le mode d'écriture utilisé. Cette propriété « logique » correspond à la propriété {{cssxref("min-width")}} ou {{cssxref("min-height")}} selon la valeur utilisée pour {{cssxref("writing-mode")}}.

{{InteractiveExample("CSS Demo: min-block-size")}}

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
    This is a box where you can change the minimum block size. <br />If there is
    more content than the minimum the box will grow in the block dimension as
    needed by the content.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: #ffffff;
}
```

Si le mode d'écriture est orienté verticalement, `min-block-size` fait référence à la hauteur minimale de l'élément. Sinon, elle fait référence à la largeur minimale de l'élément. to the minimal height of the element, otherwise it relates to the minimal width of the element. La propriété {{cssxref("min-inline-size")}} peut être utilisée pour les éléments en ligne.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
min-block-size: 100px;
min-block-size: 5em;

/* Valeurs proportionnelles à la */
/* largeur du bloc englobant     */
/* Type <percentage>             */
min-block-size: 10%;

/* Valeurs avec un mot-clé */
min-block-size: max-content;
min-block-size: min-content;
min-block-size: fit-content;
min-block-size: fill-available;

/* Valeurs globales */
min-block-size: inherit;
min-block-size: initial;
min-block-size: unset;
```

### Valeurs

La propriété `min-block-size` peut prendre les mêmes valeurs que les propriétés {{cssxref("min-width")}} ou {{cssxref("min-height")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.exemple {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 5%;
  min-block-size: 200px;
}
```

### HTML

```html
<p class="exemple">Texte d'exemple</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes
  - {{cssxref("min-width")}}
  - {{cssxref("min-height")}}

- {{cssxref("writing-mode")}}
