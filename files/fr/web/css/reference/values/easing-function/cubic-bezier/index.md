---
title: cubic-bezier()
slug: Web/CSS/Reference/Values/easing-function/cubic-bezier
original_slug: Web/CSS/easing-function/cubic-bezier
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`cubic-bezier()`** permet de créer une transition fluide à l'aide d'une [courbe de Bézier](/fr/docs/Glossary/Bezier_curve) cubique.
En tant que {{CSSxRef("&lt;easing-function&gt;")}}, elle permet d'adoucir le début et la fin de l'{{Glossary("interpolation")}}.

## Syntaxe

```css
cubic-bezier(0.25, 0.1, 0.25, 1)
cubic-bezier(0.1, -0.6, 0.2, 0)
cubic-bezier(0, 0, 1, 1)
```

### Paramètres

La fonction accepte les quatre paramètres suivants, qui représentent les coordonnées de deux points de contrôle&nbsp;:

- `<x1>`
  - : Un {{CSSxRef("&lt;number&gt;")}} représentant la coordonnée x du premier point de contrôle.
    Elle doit être comprise dans l'intervalle `[0, 1]`.
- `<y1>`
  - : Un {{CSSxRef("&lt;number&gt;")}} représentant la coordonnée y du premier point de contrôle.
- `<x2>`
  - : Un {{CSSxRef("&lt;number&gt;")}} représentant la coordonnée x du second point de contrôle.
    Elle doit être comprise dans l'intervalle `[0, 1]`.
- `<y2>`
  - : Un {{CSSxRef("&lt;number&gt;")}} représentant la coordonnée y du second point de contrôle.

## Description

Les fonctions de Bézier cubique, souvent appelées fonctions d'assouplissement «&nbsp;smooth&nbsp;», mettent en relation une progression d'entrée et une progression de sortie, toutes deux exprimées en {{CSSxRef("&lt;number&gt;")}}, où `0.0` représente l'état initial et `1.0` l'état final.
Si la courbe de Bézier cubique est invalide, CSS ignore toute la propriété.

Une courbe de Bézier cubique est définie par quatre points&nbsp;: P0, P1, P2 et P3. Les points P0 et P3 représentent le début et la fin de la courbe. En CSS, le point de départ P0 est fixé à `(0, 0)` et le point d'arrivée P3 à `(1, 1)`, tandis que les points intermédiaires P1 et P2 sont définis par les paramètres de la fonction `(<x1>, <y1>)` et `(<x2>, <y2>)` respectivement. L'axe x représente la progression d'entrée et l'axe y la progression de sortie.

![Graphique de la progression d'entrée vers la progression de sortie montrant une courbe en S partant de l'origine vers (1, 1) avec les points de contrôle Bézier P1(0.1, 0.6) et P2(0.7, 0.2).](cubic-bezier.svg)

Toutes les courbes de Bézier cubique ne conviennent pas comme fonctions d'assouplissement, car toutes ne sont pas des [fonctions mathématiques](<https://fr.wikipedia.org/wiki/Fonction_(math%C3%A9matiques)>)&nbsp;: c'est-à-dire des courbes qui, pour une valeur de l'axe x donnée, ont zéro ou une valeur. Avec P0 et P3 fixés comme défini par CSS, une courbe de Bézier cubique est une fonction, et donc valide, si et seulement si les coordonnées x de P1 et P2 sont toutes deux dans l'intervalle `[0, 1]`.

Les courbes de Bézier cubique dont l'ordonnée de P1 ou P2 sort de l'intervalle `[0, 1]` peuvent faire dépasser la valeur finale puis revenir. En animation, cela crée un effet de «&nbsp;rebond&nbsp;».

![Graphiques de la fonction d'assouplissement cubic-bezier(0.3, 0.2, 0.2, 1.4), dont l'un montre la progression de sortie dépassant 1 à partir d'une certaine progression d'entrée, l'autre montre la progression de sortie atteignant puis restant à 1.](cubic-bezier_out_of_range.svg)

Cependant, certaines propriétés limitent la sortie si elle sort d'une plage autorisée. Par exemple, une composante de couleur supérieure à `255` ou inférieure à `0` dans {{CSSxRef("color_value/rgb", "rgb()")}} sera ramenée à la valeur autorisée la plus proche (`255` ou `0`). Certaines valeurs de `cubic-bezier()` présentent ce comportement.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Effet de rebond

Dans cet exemple, la balle rouge rebondit hors de la boîte lors de la transition depuis sa position d'origine. Cela s'explique par le fait qu'une des valeurs de P2, `2.3`, dépasse l'intervalle `[0, 1]`.

```html hidden
<div tabindex="0">
  <span></span>
</div>
```

```css hidden
div {
  margin: 8px auto;
  padding: 8px;
  width: 256px;
  border-radius: 40px;
  background-color: wheat;
}

span {
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: tomato;
}

div:hover span,
div:focus span {
  translate: 192px 0;
}
```

```css
span {
  transition: translate 0.3s cubic-bezier(0.3, 0.8, 0.3, 2.3);
}
```

{{EmbedLiveSample("Effet de rebond")}}

### Utilisation de la fonction `cubic-bezier()`

Ces courbes de Bézier cubique sont valides pour une utilisation en CSS&nbsp;:

```css example-good
/* La courbe de Bézier canonique avec quatre <number> dans l'intervalle [0,1] */
cubic-bezier(0.1, 0.7, 1.0, 0.1)

/* Utiliser un <integer> est valide car tout <integer> est aussi un <number> */
cubic-bezier(0, 0, 1, 1)

/* Les valeurs négatives pour les ordonnées sont valides, ce qui produit des
   effets de rebond */
cubic-bezier(0.1, -0.6, 0.2, 0)

/* Les valeurs supérieures à 1.0 pour les ordonnées sont aussi valides */
cubic-bezier(0, 1.1, 0.8, 4)
```

Ces définitions de courbes de Bézier cubique sont invalides&nbsp;:

```css example-bad
/* Les paramètres doivent être des nombres */
cubic-bezier(0.1, red, 1.0, green)

/* Les coordonnées x doivent être dans l'intervalle [0, 1] */
cubic-bezier(2.45, 0.6, 4, 0.1)

/* Il doit y avoir exactement quatre paramètres */
cubic-bezier(0.3, 2.1)

/* Les coordonnées x doivent être dans l'intervalle [0, 1] */
cubic-bezier(-1.9, 0.3, -0.2, 2.1)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres fonctions d'assouplissement&nbsp;: {{CSSxRef("easing-function/linear", "linear()")}} et {{CSSxRef("easing-function/steps", "steps()")}}
- Le module des [fonctions d'assouplissement CSS](/fr/docs/Web/CSS/CSS_easing_functions)
- [cubic-bezier.com <sup>(angl.)</sup>](https://cubic-bezier.com/) par Lea Verou
