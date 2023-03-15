---
title: min-width
slug: Web/CSS/min-width
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/min-width
---

{{CSSRef}}

La propriété **`min-width`** est utilisée pour définir la largeur minimale d'un élément donné. Elle empêche la valeur de la propriété {{cssxref("width")}} de devenir inférieure à la valeur spécifiée par `min-width` (autrement dit, `min-width` est une borne inférieure pour `width`).

{{EmbedInteractiveExample("pages/css/min-width.html")}}

La valeur de `min-width` surcharge les valeurs de {{cssxref("max-width")}} et de {{cssxref("width")}} si elle est supérieure à l'une de ces propriétés.

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length>      */
min-width: 3.5em;

/* Valeurs relatives */
/* Type <percentage> */
min-width: 10%;

/* Valeurs avec un mot-clé */
min-width: max-content;
min-width: min-content;
min-width: fit-content;
min-width: fill-available;

/* Valeurs globales */
min-width: inherit;
min-width: initial;
min-width: unset;
```

### Valeurs

- `<length>`
  - : La largeur minimale. Voir {{cssxref("&lt;length&gt;")}} pour les unités qu'on peut utiliser. Une largeur négative rendra la déclaration invalide.
- `<percentage>`
  - : La largeur minimale, exprimée comme un fraction de la largeur du bloc englobant. Voir la page {{cssxref("&lt;percentage&gt;")}} sur les valeurs possibles avec ce type. Les valeurs négatives rendront la déclaration invalide.
- `auto`
  - : Définit une taille automatique minimale. Sauf si elle est définie par la disposition courante, la résolution de cette valeur sera 0. A des fins de rétro-compatibilité, la valeur résolue de ce mot-clé sera 0 pour l'ensemble des disposition CSS2 : bloc, en ligne, bloc-en ligne, disposition en tableau..
- `max-content` {{experimental_inline}}
  - : La largeur intrinsèque préférée.
- `min-content` {{experimental_inline}}
  - : La largeur intrinsèque minimale.
- `fill-available`{{experimental_inline}}
  - : La largeur du bloc englobant moins la marge horizontale, la bordure et le remplissage (_padding_). Certains navigateurs implémentent cette valeur avec un ancien nom : `available`.
- `fit-content` {{experimental_inline}}
  - : La largeur calculée par `min(max-content, max(min-content, fill-available))`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<div> Lorem ipsum tralala sit amet, consectetur adipisicing
  <p>
     Ut enim ad minim veniam, quis nostrud exercitation
     ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</div>
```

### CSS

```css
div {
  width: 250px;
  border: solid 1px red;
}

p {
  max-width: 60%;
  border: solid 1px blue;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("width")}}
- {{cssxref("max-width")}}
- {{cssxref("min-height")}}
- {{cssxref("box-sizing")}}
- [Le modèle de boîtes](/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte)
