---
title: border-left-width
slug: Web/CSS/Reference/Properties/border-left-width
original_slug: Web/CSS/border-left-width
---

{{CSSRef}}

La propriété **`border-left-width`** définit l'épaisseur de la bordure pour le côté gauche d'un élément.

{{InteractiveExample("CSS Demo: border-left-width")}}

```css interactive-example-choice
border-left-width: thick;
```

```css interactive-example-choice
border-left-width: 2em;
```

```css interactive-example-choice
border-left-width: 4px;
```

```css interactive-example-choice
border-left-width: 2ex;
```

```css interactive-example-choice
border-left-width: 0;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: palegreen;
  color: #000;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntaxe

```css
/* Une valeur de longueur */
/* Type <length>          */
border-left-width: 10em;
border-left-width: 3vmax;
border-left-width: 6px;

/* Valeurs avec un mot-clé */
border-left-width: thin;
border-left-width: medium;
border-left-width: thick;

/* Valeurs globales */
border-left-width: inherit;
border-left-width: initial;
border-left-width: unset;
```

### Valeurs

- `<br-width>`
  - : Une valeur de longueur ({{cssxref("&lt;length&gt;")}}) positive ou un mot-clé qui indique l'épaisseur de la bordure pour le côté gauche de la boîte. Si la valeur est un mot-clé, ce doit être l'une des valeurs suivantes :
    - `thin` (fin)
    - `medium` (intermédiaire)
    - `thick` (épais)

    La spécification ne précise pas de façon exacte l'épaisseur correspondant à chacun de ces mots-clés (c'est donc à chaque implémentation de choisir). La spécification requiert toutefois que l'inégalité suivante soit respectée `thin ≤ medium ≤ thick` et que ces valeurs soient constantes pour un même document`.`

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.element1 {
  border-left-width: thick;
  border-left-style: solid;
  border-left-color: red;
}
.element2 {
  border-left-width: medium;
  border-left-style: solid;
  border-left-color: orange;
}
.element3 {
  border-left-width: thin;
  border-left-style: solid;
  border-left-color: green;
}
```

### HTML

```html
<p class="element1">Une bordure épaisse rouge.</p>

<p class="element2">Une bordure moyenne orange.</p>

<p class="element3">Et une bordure fine verte.</p>
```

### Résultat

{{EmbedLiveSample("Exemples","200","300")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés liées à la largeur de la bordure :
  - {{cssxref("border-right-width")}},
  - {{cssxref("border-top-width")}},
  - {{cssxref("border-bottom-width")}},
  - {{cssxref("border-width")}}

- Les autres propriétés CSS liées à la bordure du côté gauche :
  - {{cssxref("border")}},
  - {{cssxref("border-left")}},
  - {{cssxref("border-left-style")}},
  - {{cssxref("border-left-color")}}.
