---
title: ":is()"
slug: Web/CSS/:is
l10n:
  sourceCommit: 62681c2ef134407009c5c11fa679db1f485e016d
---

{{CSSRef}}

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:is()`** prend comme argument une liste de sélecteurs, et cible tous les éléments sélectionnés par chaque sélecteur de cette liste. Cela permet d'écrire des sélecteurs expansifs de façon plus concise.

> **Note :** Cette pseudo-classe avait d'abord été intitulée `:matches()` (puis `:any()`), avant d'être renommée en `:is()` avec [le ticket CSSWG n°3258](https://github.com/w3c/csswg-drafts/issues/3258).

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-is.html", "tabbed-shorter")}}

Les pseudo-éléments ne peuvent pas être utilisés dans la liste de sélecteurs passée à `:is()`.

### Différence entre `:is()` et `:where()`

Contrairement à [`:where()`](/fr/docs/Web/CSS/:where) dont la spécificité vaut 0, `:is()` participe à la spécificité du sélecteur (elle prend la spécificité de son argument le plus spécifique)). Vous pouvez observer cette différence sur [l'exemple de la page sur `:where()`](/fr/docs/Web/CSS/:where#examples).

### Analyse permissive de la liste des sélecteurs

`:is()` et `:where()` acceptent une liste permissive de sélecteurs ([voir la spécification](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list)).

En général, lorsqu'on utilise une liste de sélecteurs, celle-ci devient intégralement invalide dès que l'un des sélecteurs est invalide. En utilisant `:is()` ou `:where()`, si la liste contient un sélecteur incorrect ou qui n'est pas pris en charge, celui-ci sera ignoré et les autres seront utilisés.

```css
:is(:valid, :non-pris-en-charge) {
  /* … */
}
```

Le fragment qui précède sera interprété correctement et ciblera `:valid`, même pour les navigateurs qui ne prennent pas en charge `:non-pris-en-charge`, alors que&nbsp;:

```css
:valid,
:non-pris-en-charge {
  /* … */
}
```

Sera ignoré pour les navigateurs qui ne prennent pas en charge `:non-pris-en-charge`, même s'ils prennent en charge `:valid`.

## Exemple

### Simplifier une liste de sélecteurs

La pseudo-classe `:is()` peut grandement simplifier les sélecteurs CSS. Prenons par exemple, ce fragment CSS&nbsp;:

```css
/* Pour les listes non-ordonnées de 3 niveaux (ou plus), on utilisera un carré */
ol ol ul,
ol ul ul,
ol menu ul,
ol dir ul,
ol ol menu,
ol ul menu,
ol menu menu,
ol dir menu,
ol ol dir,
ol ul dir,
ol menu dir,
ol dir dir,
ul ol ul,
ul ul ul,
ul menu ul,
ul dir ul,
ul ol menu,
ul ul menu,
ul menu menu,
ul dir menu,
ul ol dir,
ul ul dir,
ul menu dir,
ul dir dir,
menu ol ul,
menu ul ul,
menu menu ul,
menu dir ul,
menu ol menu,
menu ul menu,
menu menu menu,
menu dir menu,
menu ol dir,
menu ul dir,
menu menu dir,
menu dir dir,
dir ol ul,
dir ul ul,
dir menu ul,
dir dir ul,
dir ol menu,
dir ul menu,
dir menu menu,
dir dir menu,
dir ol dir,
dir ul dir,
dir menu dir,
dir dir dir {
  list-style-type: square;
}
```

On pourra remplacer ce bloc avec&nbsp;:

```css
/* Pour les listes non-ordonnées de 3 niveaux (ou plus), on utilisera un carré */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) :is(ul, menu, dir) {
  list-style-type: square;
}
```

### Simplifier les sélecteurs de section

La pseudo-classe `:is()` est notamment utile lorsqu'on manipule [les sections et titres HTML](/fr/docs/Web/HTML/Element/Heading_Elements). En effet, les éléments [`<section>`](/fr/docs/Web/HTML/Element/section), [`<article>`](/fr/docs/Web/HTML/Element/article), [`<aside>`](/fr/docs/Web/HTML/Element/aside) et [`<nav>`](/fr/docs/Web/HTML/Element/nav) sont généralement imbriqués les uns avec les autres. Sans `:is()`, leur mise en forme à différents niveaux peut s'avérer délicate.

Ainsi, sans `:is()`, il serait très compliqué de cibler tous les éléments [`<h1>`](/fr/docs/Web/HTML/Element/Heading_Elements) situés à différentes profondeurs&nbsp;:

```css
/* Niveau 0 */
h1 {
  font-size: 30px;
}

/* Niveau 1 */
section h1,
article h1,
aside h1,
nav h1 {
  font-size: 25px;
}

/* Niveau 2 */
section section h1,
section article h1,
section aside h1,
section nav h1,
article section h1,
article article h1,
article aside h1,
article nav h1,
aside section h1,
aside article h1,
aside aside h1,
aside nav h1,
nav section h1,
nav article h1,
nav aside h1,
nav nav h1 {
  font-size: 20px;
}

/* Niveau 3 */
/* Nous n'osons même pas y penser */
```

Avec `:is()`, c'est plus facile&nbsp;:

```css
/* Niveau 0 */
h1 {
  font-size: 30px;
}
/* Niveau 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Niveau 2 */
:is(section, article, aside, nav) :is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* Niveau 3 */
:is(section, article, aside, nav)
  :is(section, article, aside, nav)
  :is(section, article, aside, nav)
  h1 {
  font-size: 15px;
}
```

### `:is()` ne cible pas les pseudo-éléments

La pseudo-classe `:is()` ne permet pas de cibler les pseudo-éléments. Aussi, plutôt que d'écrire&nbsp;:

```css example-bad
un-element:is(::before, ::after) {
  display: block;
}
```

ou ceci&nbsp;:

```css example-bad
:is(un-element::before, un-element::after) {
  display: block;
}
```

On écrira plutôt&nbsp;:

```css example-good
un-element::before,
un-element::after {
  display: block;
}
```

## Syntaxe

```css-nolint
:is(<forgiving-selector-list>) {
  /* … */
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`:where()`](/fr/docs/Web/CSS/:where)&nbsp;: comme `:is()`, mais avec [une spécificité](/fr/docs/Web/CSS/Specificity) qui vaut 0.
- [Liste de sélecteurs](/fr/docs/Web/CSS/Selector_list)
- [Composants web](/fr/docs/Web/API/Web_components)
