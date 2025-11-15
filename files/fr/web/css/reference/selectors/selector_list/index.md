---
title: Liste de sélecteurs
slug: Web/CSS/Reference/Selectors/Selector_list
original_slug: Web/CSS/Selector_list
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**Une liste de sélecteurs** (`,`) permet de cibler tous les nœuds correspondants à l'une des conditions.

## Description

Lorsque plusieurs sélecteurs partagent les mêmes déclarations, ils peuvent être regroupés dans une liste séparée par des virgules. Les listes de sélecteurs peuvent aussi être passées en paramètre à certaines pseudo-classes CSS fonctionnelles. Des espaces peuvent apparaître avant et/ou après la virgule.

Les trois déclarations suivantes sont équivalentes&nbsp;:

```css
span {
  border: red 2px solid;
}
div {
  border: red 2px solid;
}
```

```css
span,
div {
  border: red 2px solid;
}
```

```css
:is(span, div) {
  border: red 2px solid;
}
```

## Exemples

Lorsque l'on applique les mêmes styles à des éléments correspondant à des critères différents, regrouper les sélecteurs dans une liste séparée par des virgules permet d'améliorer la cohérence tout en réduisant la taille des feuilles de style.

### Groupement sur une seule ligne

Cet exemple montre le groupement de sélecteurs sur une seule ligne à l'aide d'une liste séparée par des virgules.

```css-nolint
h1, h2, h3, h4, h5, h6 {
  font-family: Helvetica, Arial;
}
```

### Groupement sur plusieurs lignes

Cet exemple montre le groupement de sélecteurs sur plusieurs lignes à l'aide d'une liste séparée par des virgules.

```css
#main,
.content,
article,
h1 + p {
  font-size: 1.1em;
}
```

## Listes de sélecteurs valides et invalides

Un sélecteur invalide ne correspond à rien. Lorsqu'une liste de sélecteurs contient un sélecteur invalide, tout le bloc de style est ignoré, sauf pour les pseudo-classes {{CSSxRef(":is", ":is()")}} et {{CSSxRef(":where", ":where()")}} qui acceptent des [listes de sélecteurs tolérantes](#liste_de_sélecteurs_tolérante).

### Liste de sélecteurs invalide

L'un des inconvénients de l'utilisation d'une liste de sélecteurs est qu'un seul sélecteur non pris en charge rend l'ensemble de la règle invalide.

Considérez les deux ensembles de règles CSS suivants&nbsp;:

```css
h1 {
  font-family: sans-serif;
}
h2:invalid-pseudo {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
h1,
h2:invalid-pseudo,
h3 {
  font-family: sans-serif;
}
```

Ces deux ensembles ne sont pas équivalents. Dans le premier, les styles seront appliqués aux éléments `h1` et `h3`, mais la règle `h2:invalid-pseudo` ne sera pas interprétée. Dans le second, puisqu'un sélecteur de la liste est invalide, l'ensemble de la règle ne sera pas interprété. Ainsi, aucun style ne sera appliqué à `h1` et `h3`&nbsp;: dès qu'un sélecteur d'une liste est invalide, tout le bloc de style est ignoré.

### Liste de sélecteurs tolérante

Pour remédier au problème de la [liste de sélecteurs invalide](#liste_de_sélecteurs_invalide), on peut utiliser les pseudo-classes {{CSSxRef(":is", ":is()")}} ou {{CSSxRef(":where", ":where()")}}, qui acceptent une liste de sélecteurs tolérante. Chaque sélecteur de la liste est analysé individuellement&nbsp;: les sélecteurs invalides sont ignorés et seuls les valides sont utilisés.

En reprenant l'exemple précédent, les deux ensembles de règles CSS suivants sont alors équivalents&nbsp;:

```css
h1 {
  font-family: sans-serif;
}
h2:maybe-unsupported {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
:is(h1, h2:maybe-unsupported, h3) {
  font-family: sans-serif;
}
```

La différence entre les deux est que la spécificité de `:is()` correspond à celle de son argument le plus spécifique, tandis que le sélecteur `:where()` et la liste de sélecteurs tolérante n'ajoutent aucun poids de spécificité.

### Liste de sélecteurs relatifs

Une liste de sélecteurs relatifs est une liste de sélecteurs séparés par des virgules, analysée comme des [sélecteurs relatifs](/fr/docs/Web/CSS/CSS_selectors/Selector_structure#sélecteur_relatif), qui commencent par un combinateur explicite ou implicite.

```css
h2:has(+ p, + ul.red) {
  font-style: italic;
}
```

Dans l'exemple ci-dessus, le style italique sera appliqué à tout titre `h2` immédiatement suivi d'un paragraphe `<p>` ou d'une liste `<ul class="red">`. À noter&nbsp;: les pseudo-éléments et le sélecteur `:has()` ne sont pas valides à l'intérieur de la liste de sélecteurs relatifs de [`:has()`](/fr/docs/Web/CSS/Reference/Selectors/:has).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-classes {{CSSxRef(":is", ":is()")}} et {{CSSxRef(":where", ":where()")}} acceptent des listes de sélecteurs tolérantes.
- La pseudo-classe {{CSSxRef(":not", ":not()")}} accepte une liste de sélecteurs classique.
- La pseudo-classe {{CSSxRef(":has", ":has()")}} accepte une liste de sélecteurs relative.
- [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
