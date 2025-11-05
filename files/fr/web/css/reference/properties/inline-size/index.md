---
title: inline-size
slug: Web/CSS/Reference/Properties/inline-size
original_slug: Web/CSS/inline-size
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`inline-size`** définit la taille verticale ou horizontale d'un élément de bloc selon son mode d'écriture. Selon la valeur de {{cssxref("writing-mode")}}, cette propriété correspond à {{cssxref("width")}} quand le mode d'écriture n'est pas vertical ou à {{cssxref("height")}} sinon.

{{InteractiveExample("CSS Demo: inline-size")}}

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
    This is a box where you can change the inline-size.
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
  color: #ffffff;
}
```

Cette propriété est à rapprocher de {{cssxref("block-size")}} qui définit l'autre dimension de l'élément.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
inline-size: 300px;
inline-size: 25em;

/* Valeurs proportionnelles relatives */
/* Type <percentage>                  */
inline-size: 75%;

/* Valeurs avec un mot-clé */
inline-size: 25em border-box;
inline-size: 75% content-box;
inline-size: max-content;
inline-size: min-content;
inline-size: available;
inline-size: fit-content;
inline-size: auto;

/* Valeurs globales */
inline-size: inherit;
inline-size: initial;
inline-size: unset;
```

### Valeurs

La propriété `inline-size` peut prendre les mêmes valeurs que les propriétés {{cssxref("width")}} et {{cssxref("height")}}.

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
  inline-size: 110px;
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

- Les propriétés physiques correspondantes :
  - {{cssxref("width")}}
  - {{cssxref("height")}}

- {{cssxref("writing-mode")}}
