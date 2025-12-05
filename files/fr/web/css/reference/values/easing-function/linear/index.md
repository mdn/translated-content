---
title: linear()
slug: Web/CSS/Reference/Values/easing-function/linear
original_slug: Web/CSS/easing-function/linear
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`linear()`** crée une courbe de transition qui progresse de façon uniforme entre les points.
En tant que fonction de {{CSSxRef("&lt;easing-function&gt;")}}, elle crée des transitions où l'{{Glossary("interpolation")}} se fait à un rythme constant du début à la fin.

## Syntaxe

```css
linear(0, 1)
linear(0, 0.25, 1)
linear(0, 0.25 75%, 1)
linear(0, 0.5 25% 75%, 1)
```

### Paramètres

La fonction accepte deux valeurs ou plus parmi les suivantes, qui représentent des points de progression dans la chronologie de l'animation&nbsp;:

- {{CSSxRef("&lt;number&gt;")}}
  - : Représente un point dans le temps sur la durée de l'animation ou de la transition.
    Au moins deux valeurs doivent être spécifiées.
    La valeur `0` représente le début de la transition, et `1` la fin.
    Les valeurs en dehors de l'intervalle `0` à `1` sont également autorisées.

- {{CSSxRef("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Indique à quel moment la progression `<number>` est atteinte pendant la chronologie de l'animation.
    Elle peut être spécifiée après n'importe quelle valeur `<number>` sauf la première et la dernière, et peut en prendre jusqu'à deux.
    Si deux valeurs de pourcentage sont spécifiées, elles définissent la longueur de l'arrêt&nbsp;: la première indique le point de départ et la seconde le point d'arrivée pour ce segment dans l'animation ou la transition. Si aucun `<percentage>` n'est défini, les valeurs de progression sont réparties uniformément sur la chronologie.

## Description

La fonction `linear()` permet d'approcher des animations et transitions complexes en interpolant linéairement entre les points définis.
Un usage typique de la fonction `linear()` consiste à fournir de nombreux points pour approcher n'importe quelle courbe.

La fonction `linear()` crée des transitions où la progression se fait à un rythme constant entre les points définis.
Par exemple, `linear(0, 0.25, 1)` a des arrêts linéaires à `0`, `0.25` et `1`.
L'animation commence au point `0`, progresse linéairement jusqu'à `0.25`, puis continue linéairement jusqu'à `1`.
Comme aucun pourcentage n'est spécifié, la même durée (`50%`) est utilisée pour chaque segment, c'est-à-dire de `0` à `0.25` puis de `0.25` à `1`.

![Graphiques de la progression d'entrée vers la progression de sortie, où linear(0, 0.25, 1) montre une ligne brisée reliant l'origine, (0.5, 0.25) et (1, 1) ; et linear(0, 0.25 75%, 1) montre une ligne brisée reliant l'origine, (0.75, 0.25) et (1, 1).](linear_function.svg)

Par défaut, les arrêts sont équidistants. Par exemple, s'il y a cinq arrêts, ils auront lieu à 0%, 25%, 50%, 75% et 100% de la durée. Vous pouvez utiliser des valeurs de pourcentage optionnelles pour un contrôle plus fin, en définissant quand chaque valeur de progression doit se produire et en permettant une progression plus contrôlée de la transition.

Considérons une animation d'une durée de 100 secondes et d'un déplacement de 100 pixels. Supposons que l'assouplissement de l'animation soit spécifié comme `linear(0, 0.25 75%, 1)`. Dans ce cas, l'animation progresse jusqu'à 25 pixels (25% du changement total) pendant les 75 premières secondes (75% de la durée). Les 75 pixels restants sont appliqués pendant les 25 secondes restantes de l'animation.

Pour la même animation, si la fonction d'assouplissement est spécifiée comme `linear(0, 0.5 25% 75%, 1)`, l'animation atteint 50 pixels (50% du changement total) en 25 secondes (25% de la durée) et y reste pendant 50 secondes (75% - 25% de la durée). Les 50 derniers pixels sont appliqués pendant les 25 secondes restantes. Notez que `linear(0, 0.5 25% 75%, 1)` est équivalent à `linear(0, 0.5 25%, 0.5 75%, 1)`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation de la fonction `linear()`

Les fonctions `linear()` suivantes sont valides en CSS&nbsp;:

```css example-good
/* Trois points de progression répartis uniformément */
linear(0, 0.25, 1)

/* Chronologie personnalisée avec des valeurs de pourcentage */
linear(0, 0.5 25% 75%, 1)
```

Les définitions `linear()` suivantes sont invalides&nbsp;:

```css example-bad
/* Au moins deux paramètres sont requis */
linear(0.5)

/* Les pourcentages doivent être en ordre croissant */
linear(0, 0.25 80%, 0.5 60%, 1)

/* Les valeurs doivent être des nombres */
linear(start, middle, end)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres fonctions d'assouplissement&nbsp;: {{CSSxRef("easing-function/cubic-bezier", "cubic-bezier()")}} et {{CSSxRef("easing-function/steps", "steps()")}}
- Le module des [fonctions d'assouplissement CSS](/fr/docs/Web/CSS/CSS_easing_functions)
- [Générateur d'assouplissement `linear()` <sup>(angl.)</sup>](https://linear-easing-generator.netlify.app/) par Jake Archibald
