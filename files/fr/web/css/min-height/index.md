---
title: min-height
slug: Web/CSS/min-height
---

{{CSSRef}}

La propriété **`min-height`** est utilisée afin de définir la hauteur minimale d'un élément. Elle empêche ainsi que la [valeur utilisée](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2) de la propriété [`height`](/fr/docs/Web/CSS/height) devienne inférieure à `min-height`.

{{InteractiveExample("CSS Demo: min-height")}}

```css interactive-example-choice
min-height: 150px;
```

```css interactive-example-choice
min-height: 7em;
```

```css interactive-example-choice
min-height: 75%;
```

```css interactive-example-choice
min-height: 10px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the minimum height. <br />If there is
    more content than the minimum the box will grow to the height needed by the
    content.
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

La valeur de la propriété `min-height` surcharge celles de [`max-height`](/fr/docs/Web/CSS/max-height) et [`height`](/fr/docs/Web/CSS/height) lorsque `min-height` est supérieure.

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length>      */
min-height: 3.5em;

/* Valeur de proportion */
/* Type <percentage>       */
min-height: 10%;

/* Valeurs avec un mot-clé */
min-height: max-content;
min-height: min-content;
min-height: fit-content(20em);

/* Valeurs globales */
min-height: inherit;
min-height: initial;
min-height: revert;
min-height: unset;
```

### Valeurs

- [`<length>`](/fr/docs/Web/CSS/length)
  - : La hauteur minimale exprimée de façon absolue.
- [`<percentage>`](/fr/docs/Web/CSS/percentage)
  - : La hauteur minimale exprimée de façon relative à la hauteur du bloc englobant grâce à une valeur de type [`<percentage>`](/fr/docs/Web/CSS/percentage).
- `auto`
  - : Le navigateur calcule et définit la hauteur minimale de l'élément spécifié.
- `max-content`
  - : La hauteur intrinsèque préférée.
- `min-content`
  - : La hauteur intrinsèque minimale préférée.
- `fit-content` ([`<length-percentage>`](/fr/docs/Web/CSS/length-percentage))
  - : Utilise la formule `fit-content()`, remplaçant l'espace disponible par l'argument passé. Par exemple&nbsp;: `min(max-content, max(min-content, argument))`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définition de min-height

```css
table {
  min-height: 75%;
}

form {
  min-height: 0;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le modèle de boîtes](/fr/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), [`box-sizing`](/fr/docs/Web/CSS/box-sizing)
- [`height`](/fr/docs/Web/CSS/height), [`max-height`](/fr/docs/Web/CSS/max-height)
