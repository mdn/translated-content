---
title: min-inline-size
slug: Web/CSS/Reference/Properties/min-inline-size
original_slug: Web/CSS/min-inline-size
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`min-inline-size`** définit la taille minimale horizontale ou verticale d'un élément en ligne (_inline_) selon le mode d'écriture utilisé. Cette propriété « logique » correspond à la propriété {{cssxref("min-width")}} ou {{cssxref("min-height")}} selon la valeur utilisée pour {{cssxref("writing-mode")}}.

{{InteractiveExample("CSS Demo: min-inline-size")}}

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
  <div class="transition-all" id="example-element">Change min-inline-size</div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: #ffffff;
}
```

Si le mode d'écriture est orienté verticalement, `min-inline-size` fait référence à la hauteur minimale de l'élément. Sinon, elle fait référence à la largeur minimale de l'élément. to the minimal height of the element, otherwise it relates to the minimal width of the element. La propriété {{cssxref("min-block-size")}} peut être utilisée pour les blocs.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
min-inline-size: 100px;
min-inline-size: 5em;

/* Valeurs proportionnelles à la */
/* largeur du bloc englobant     */
/* Type <percentage>             */
min-inline-size: 10%;

/* Valeurs avec un mot-clé */
min-inline-size: max-content;
min-inline-size: min-content;
min-inline-size: fit-content;
min-inline-size: fill-available;

/* Valeurs globales */
min-inline-size: inherit;
min-inline-size: initial;
min-inline-size: unset;
```

### Valeurs

La propriété `min-inline-size` peut prendre les mêmes valeurs que les propriétés {{cssxref("min-width")}} ou {{cssxref("min-height")}}.

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
  min-inline-size: 200px;
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
