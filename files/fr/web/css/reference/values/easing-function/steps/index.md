---
title: steps()
slug: Web/CSS/Reference/Values/easing-function/steps
original_slug: Web/CSS/easing-function/steps
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`steps()`** définit une transition qui divise le temps d'entrée en un nombre spécifié d'intervalles de même longueur. Cette sous-classe de fonctions en étapes est parfois aussi appelée _fonction en escalier_.

## Syntaxe

```css
/* Intervalles différents */
steps(2, end)
steps(4, jump-end)
steps(12, end)

/* Positions de saut différentes */
steps(3, jump-start)
steps(3, jump-end)
steps(3, jump-none)
steps(3, jump-both)
```

### Paramètres

La fonction accepte les paramètres suivants&nbsp;:

- `<integer>`
  - : Représente le nombre d'intervalles équidistants ou de «&nbsp;pas&nbsp;».
    Il doit s'agir d'un entier positif supérieur à `0`, sauf si le second paramètre est `jump-none`, auquel cas il doit être supérieur à `1`.

- `<step-position>`
  - : Définit quand le saut entre les valeurs a lieu.
    Si omis, la valeur par défaut est `end`.
    Les mots-clés possibles sont&nbsp;:
    - `jump-start` ou `start`
      - : Indique que la première marche a lieu au début de l'animation.
    - `jump-end` ou `end`
      - : Indique que la dernière marche a lieu à la fin de l'animation.
    - `jump-none`
      - : Indique qu'aucun saut anticipé ou retardé n'a lieu.
    - `jump-both`
      - : Indique que des sauts ont lieu à la fois au début et à la fin.

## Description

La fonction `steps()` divise la durée de l'animation en intervalles égaux.
Par exemple, `steps(4, end)` divise l'animation en quatre intervalles égaux, les valeurs changeant à la fin de chaque intervalle, sauf le dernier changement qui a lieu à la fin de l'animation.

Si une animation contient plusieurs segments, le nombre d'étapes définies s'applique à chaque segment. Par exemple, si une animation comporte trois segments et utilise `steps(2)`, il y aura six étapes au total, soit deux par segment.

L'image suivante montre l'effet des différentes valeurs de `<step-position>` sur le moment où les sauts se produisent&nbsp;:

```css
steps(2, jump-start)  /* Ou steps(2, start) */
steps(4, jump-end)    /* Ou steps(4, end) */
steps(5, jump-none)
steps(3, jump-both)
```

![Graphiques de la progression d'entrée vers la progression de sortie : steps(2, jump-start) montre des lignes horizontales partant de (0, 0.5) et (0.5, 1), avec des cercles vides à l'origine et en (0.5, 0.5) ; steps(4, jump-end) montre des lignes horizontales partant de (0, 0), (0.25, 0.25), (0.5, 0.5) et (0.75, 0.75), avec des cercles non remplis en (0.25, 0), (0.5, 0.25), (0.75, 0.5) et un cercle plein en (1, 1) ; steps(5, jump-none) montre des lignes horizontales partant de (0, 0), (0.2, 0.25), (0.4, 0.5), (0.6, 0.75), (0.8, 1), avec des cercles non remplis en (0.2, 0), (0.4, 0.25), (0.6, 0.5), (0.8, 0.75) ; steps(3, jump-both) montre des lignes horizontales partant de (0, 0.25), (1/3, 0.5), (2/3, 0.75), avec un cercle plein en (1, 1) et des cercles vides à l'origine, (1/3, 0.25), (2/3, 0.5) et (1, 0.75).](jump.svg)

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation de la fonction `steps()`

Les fonctions `steps()` suivantes sont valides&nbsp;:

```css example-good
/* Cinq étapes avec saut à la fin */
steps(5, end)

/* Deux étapes avec saut au début */
steps(2, start)

/* Utilisation du second paramètre par défaut */
steps(2)
```

Les fonctions `steps()` suivantes sont invalides&nbsp;:

```css example-bad
/* Le premier paramètre doit être un <integer>, pas une valeur réelle */
steps(2.0, jump-end)

/* Le nombre d'étapes doit être positif */
steps(-3, start)

/* Le nombre d'étapes doit être au moins égal à 1 */
steps(0, jump-none)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres fonctions d'assouplissement&nbsp;: {{CSSxRef("easing-function/cubic-bezier", "cubic-bezier()")}} et {{CSSxRef("easing-function/linear", "linear()")}}
- Le module des [fonctions d'assouplissement CSS](/fr/docs/Web/CSS/CSS_easing_functions)
- [Fonction en escalier <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Step_function) sur Wikipédia
