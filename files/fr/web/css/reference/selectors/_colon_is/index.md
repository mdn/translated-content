---
title: :is()
slug: Web/CSS/Reference/Selectors/:is
original_slug: Web/CSS/:is
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:is()`** prend comme argument une liste de sélecteurs, et cible tous les éléments sélectionnés par chaque sélecteur de cette liste. Cela permet d'écrire des sélecteurs expansifs de façon plus concise.

> [!NOTE]
> Cette pseudo-classe avait d'abord été intitulée `:matches()` (puis `:any()`), avant d'être renommée en `:is()` avec [le ticket CSSWG n°3258](https://github.com/w3c/csswg-drafts/issues/3258).

{{InteractiveExample("Démonstration CSS&nbsp;: :is", "tabbed-shorter")}}

```css interactive-example
ol {
  list-style-type: upper-alpha;
  color: darkblue;
}

/* stylelint-disable-next-line selector-pseudo-class-no-unknown */
:is(ol, ul, menu:unsupported) :is(ol, ul) {
  color: green;
}

:is(ol, ul) :is(ol, ul) ol {
  list-style-type: lower-greek;
  color: chocolate;
}
```

```html interactive-example
<ol>
  <li>Saturne</li>
  <li>
    <ul>
      <li>Mimas</li>
      <li>Encelade</li>
      <li>
        <ol>
          <li>Voyager</li>
          <li>Cassini</li>
        </ol>
      </li>
      <li>Tethys</li>
    </ul>
  </li>
  <li>Uranus</li>
  <li>
    <ol>
      <li>Titania</li>
      <li>Oberon</li>
    </ol>
  </li>
</ol>
```

## Syntaxe

```css-nolint
:is(<forgiving-selector-list>) {
  /* ... */
}
```

### Paramètres

La pseudo-classe `:is()` nécessite une [liste de sélecteurs](/fr/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), une liste séparée par des virgules d'un ou plusieurs sélecteurs comme argument. La liste ne doit pas contenir de [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements), mais tout autre sélecteur simple, composé ou complexe est autorisé.

### Différence entre `:is()` et `:where()`

Contrairement à [`:where()`](/fr/docs/Web/CSS/Reference/Selectors/:where) dont la spécificité vaut 0, `:is()` participe à la spécificité du sélecteur (elle prend la spécificité de son argument le plus spécifique)). Vous pouvez observer cette différence sur [l'exemple de la page sur `:where()`](/fr/docs/Web/CSS/Reference/Selectors/:where#examples).

### Analyse permissive de la liste des sélecteurs

`:is()` et `:where()` acceptent une liste permissive de sélecteurs ([voir la spécification](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list)).

En CSS, lorsque vous utilisez une liste de sélecteurs, si l'un des sélecteurs n'est pas valide, toute la liste est considérée comme non valide. Lorsque vous utilisez `:is()` ou `:where()`, au lieu que toute la liste de sélecteurs soit considérée comme non valide si l'un d'entre eux ne peut être analysé, le sélecteur incorrect ou non pris en charge sera ignoré et les autres seront utilisés.

```css
:is(:valid, :unsupported) {
  /* … */
}
```

Le fragment qui précède sera interprété correctement et ciblera `:valid`, même pour les navigateurs qui ne prennent pas en charge `:unsupported`, alors que&nbsp;:

```css
:valid,
:unsupported {
  /* … */
}
```

Sera ignoré pour les navigateurs qui ne prennent pas en charge `:unsupported`, même s'ils prennent en charge `:valid`.

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

La pseudo-classe `:is()` est notamment utile lorsqu'on manipule [les sections et titres HTML](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements). En effet, les éléments {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}} et {{HTMLElement("nav")}} sont généralement imbriqués les uns avec les autres. Sans `:is()`, leur mise en forme à différents niveaux peut s'avérer délicate.

Ainsi, sans `:is()`, il serait très compliqué de cibler tous les éléments {{HTMLElement("Heading_Elements", "h1")}} situés à différentes profondeurs&nbsp;:

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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef(":where", ":where()")}}&nbsp;: comme `:is()`, mais avec [une spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity) qui vaut 0.
- [Liste de sélecteurs](/fr/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Composants web](/fr/docs/Web/API/Web_components)
