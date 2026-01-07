---
title: Utiliser les fonctions mathématiques CSS
short-title: Utiliser les fonctions mathématiques
slug: Web/CSS/Guides/Values_and_units/Using_math_functions
original_slug: Web/CSS/CSS_values_and_units/Using_CSS_math_functions
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Les **fonctions mathématiques CSS** permettent d'écrire la valeur d'une propriété — comme la hauteur (`height`), la durée d'animation (`animation-duration`) ou la taille de police (`font-size`) d'un élément — sous forme d'expression mathématique.

Sans utiliser de calcul, les [unités CSS intégrées](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units) comme `rem`, `vw` et `%` sont souvent assez flexibles pour styliser les éléments HTML et obtenir une expérience utilisateur particulière.
Cependant, il existe des cas où l'on se sent limité·e en exprimant le style d'un élément avec une seule valeur et unité. Considérez les exemples suivants&nbsp;:

1. Vous souhaitez définir la hauteur d'une zone de contenu comme «&nbsp;la hauteur de la zone d'affichage (<i lang="en">viewport</i>) moins la hauteur d'une barre de navigation&nbsp;».
2. Vous souhaitez additionner la largeur de deux éléments pour définir la largeur d'un troisième élément.
3. Vous souhaitez empêcher une `font-size` variable d'un texte de dépasser une certaine taille.

Dans tous ces cas, il faut recourir aux mathématiques pour obtenir le résultat souhaité. Une solution consisterait à utiliser des fonctions mathématiques définies en JavaScript et à définir dynamiquement les styles des éléments selon les résultats calculés par vos scripts.

Dans de nombreux cas, y compris ceux ci-dessus, **vous pouvez utiliser à la place les fonctions mathématiques intégrées directement dans CSS**. Cette solution est souvent plus simple à mettre en œuvre et plus rapide à exécuter pour le navigateur que l'utilisation de JavaScript.

Au total, les développeur·euse·s peuvent utiliser une combinaison de [près de deux douzaines de fonctions mathématiques CSS](/fr/docs/Web/CSS/Reference/Values/Functions#math_functions) dans leurs feuilles de style. Ce guide illustre quatre des plus courantes et présente les plus avancées.

## `calc()` : opérations mathématiques de base

Dans les deux premiers exemples ci-dessus, vous souhaitez définir le style d'un élément selon le résultat d'une addition ou d'une soustraction. C'est précisément l'un des cas d'usage de {{CSSxRef("calc", "calc()")}}.

La fonction **`calc()`** permet d'indiquer la valeur d'une propriété CSS en utilisant **l'addition, la soustraction, la multiplication et la division**. Elle sert souvent à combiner deux valeurs CSS ayant des unités différentes, comme `%` et `px`.

La fonction mathématique `calc()` prend une expression mathématique en paramètre et retourne le résultat de cette expression, par exemple&nbsp;:

```css
property: calc(expression);
```

### Exemple avec `calc()`

Cliquez sur l'icône de lecture ci-dessous pour voir l'exemple `calc()` dans l'aire de jeu de code et l'essayer vous-même.

```html hidden
<div class="calc1">
  <code>width: calc(10px + 100px);</code>
</div>
<div class="calc2">
  <code>width: calc(2em * 5);</code>
</div>
<div class="calc3">
  <code>width: calc(100% - 32px);</code>
</div>
<div class="calc4">
  <code>width: calc(var(--predefined-width) - calc(16px * 2));</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
}

div > code {
  display: block;
  background-color: red;
  color: white;
  height: 48px;
}

.calc1 > code {
  /* Largeur obtenue : `110px` */
  width: calc(10px + 100px);
}

.calc2 > code {
  /* Largeur obtenue : `10em` */
  width: calc(2em * 5);
}

.calc3 > code {
  /* Largeur obtenue : dépend de la largeur du conteneur */
  width: calc(100% - 32px);
}

.calc4 > code {
  --predefined-width: 100%;
  /* Largeur obtenue : dépend de la largeur du conteneur */
  width: calc(var(--predefined-width) - calc(16px * 2));
}
```

{{EmbedLiveSample('exemple_avec_calc', '100%', 212) }}

## `min()` : trouver la valeur minimale d'un ensemble

Il arrive que vous ne souhaitiez pas que la valeur d'une propriété CSS dépasse un certain nombre. Par exemple, vous voulez que la largeur de votre conteneur de contenu soit la plus petite valeur entre «&nbsp;la largeur totale de l'écran&nbsp;» et «&nbsp;500 pixels&nbsp;». Dans ces cas, vous pouvez utiliser la fonction mathématique CSS {{CSSxRef("min", "min()")}}.

La fonction mathématique `min()` prend un ensemble de valeurs séparées par des virgules en arguments et retourne la plus petite de ces valeurs, par exemple&nbsp;:

```css
width: min(32px, 50%, 2rem);
```

Cette fonction sert souvent à comparer deux valeurs CSS ayant des unités différentes, comme `%` et `px`.

### Exemple avec `min()`

Cliquez sur l'icône de lecture ci-dessous pour voir l'exemple `min()` dans l'aire de jeu de code et l'essayer vous-même.

```html hidden
<div class="min1">
  <code>width: min(9999px, 50%);</code>
</div>
<div class="min2">
  <code>width: min(9999px, 100%);</code>
</div>
<div class="min3">
  <code>width: min(120px, 150px, 90%);</code>
</div>
<div class="min4">
  <code>width: min(80px, 90%);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
}

div > code {
  display: block;
  background-color: darkblue;
  color: white;
  height: 48px;
}

.min1 > code {
  /* Largeur obtenue : dépend de la largeur du conteneur ; */
  /* sur cette page, ce sera probablement `50%` de la largeur du conteneur */
  width: min(9999px, 50%);
}

.min2 > code {
  /* Largeur obtenue : dépend de la largeur du conteneur ; */
  /* sur cette page, ce sera probablement `100%` de la largeur du conteneur */
  width: min(9999px, 100%);
}

.min3 > code {
  /* Largeur obtenue : dépend de la largeur du conteneur ; */
  /* sur cette page, ce sera probablement `120px` de la largeur du conteneur */
  width: min(120px, 150px, 90%);
}

.min4 > code {
  /* Largeur obtenue : dépend de la largeur du conteneur ; */
  /* sur cette page, ce sera probablement `80px` de la largeur du conteneur */
  width: min(80px, 90%);
}
```

{{EmbedLiveSample('exemple_avec_min', '100%', 212) }}

## `max()`&nbsp;: trouver la valeur maximale d'un ensemble

De façon similaire à `min()`, il arrive que vous ne souhaitiez pas que la valeur d'une propriété CSS descende en dessous d'un certain nombre. Par exemple, vous voulez que la largeur de votre conteneur de contenu soit la _plus grande_ valeur entre «&nbsp;la largeur totale de l'écran&nbsp;» et «&nbsp;500 pixels&nbsp;». Dans ces cas, vous pouvez utiliser la fonction mathématique CSS {{CSSxRef("max", "max()")}}.

La fonction mathématique `max()` prend un ensemble de valeurs séparées par des virgules en arguments et retourne la plus grande de ces valeurs, par exemple&nbsp;:

```css
width: max(32px, 50%, 2rem);
```

Cette fonction sert souvent à comparer deux valeurs CSS ayant des unités différentes, comme `%` et `px`.

Remarquez les similitudes et différences entre les exemples pour `min()` et `max()`.

### Exemple avec `max()`

Cliquez sur l'icône de lecture ci-dessous pour voir l'exemple `max()` dans l'aire de jeu de code et l'essayer vous-même.

```html hidden
<div class="max1">
  <code>width: max(50px, 50%);</code>
</div>
<div class="max2">
  <code>width: max(50px, 100%);</code>
</div>
<div class="max3">
  <code>width: max(20px, 50px, 90%);</code>
</div>
<div class="max4">
  <code>width: max(80px, 80%);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
  height: 48px;
}

div > code {
  display: block;
  background-color: darkmagenta;
  color: white;
  height: 48px;
}

.max1 > code {
  /* Largeur obtenue : dépend de la largeur du conteneur ; */
  /* sur cette page, ce sera probablement `50%` de la largeur du conteneur */
  width: max(50px, 50%);
}

.max2 > code {
  /* Largeur obtenue : dépend de la largeur du conteneur ; */
  /* sur cette page, ce sera probablement `100%` de la largeur du conteneur */
  width: max(50px, 100%);
}

.max3 > code {
  /* Largeur obtenue : dépend de la largeur du conteneur ; */
  /* sur cette page, ce sera probablement `90%` de la largeur du conteneur */
  width: max(20px, 50px, 90%);
}

.max4 > code {
  /* Largeur obtenue : dépend de la largeur du conteneur ; */
  /* sur cette page, ce sera probablement `80px` de la largeur du conteneur */
  width: max(80px, 80%);
}
```

{{EmbedLiveSample('exemple_avec_max', '100%', 212) }}

## `clamp()`&nbsp;: contraindre une valeur entre deux bornes

Vous pouvez combiner les fonctions de `min()` et `max()` en utilisant {{CSSxRef("clamp", "clamp()")}}. La fonction mathématique `clamp()` prend une valeur minimale, la valeur à contraindre et une valeur maximale en arguments, par exemple&nbsp;:

```css
/* valeur contrainte : 50%, minimum : 100px, maximum : 300px */
width: clamp(100px, 50%, 300px);
```

- Si la valeur à contraindre est inférieure à la valeur minimale passée, la fonction retournera la valeur minimale.
- Si la valeur à contraindre est supérieure à la valeur maximale passée, la fonction retournera la valeur maximale.
- Si la valeur à contraindre est comprise entre la valeur minimale et la valeur maximale passées, la fonction retournera la valeur d'origine à contraindre.

Cette fonction sert souvent à comparer deux valeurs CSS ayant des unités différentes, comme `%` et `px`.

### Exemple avec `clamp()`

Cliquez sur l'icône de lecture ci-dessous pour voir l'exemple `clamp()` dans l'aire de jeu de code et l'essayer vous-même.

```html hidden
<div class="clamp1">
  <code>width: clamp(10%, 1px, 90%);</code>
</div>
<div class="clamp2">
  <code>width: clamp(10%, 9999px, 90%);</code>
</div>
<div class="clamp3">
  <code>width: clamp(125px, 1px, 250px);</code>
</div>
<div class="clamp4">
  <code>width: clamp(25px, 9999px, 150px);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
  height: 48px;
}

div > code {
  display: block;
  background-color: darkgreen;
  color: white;
  height: 48px;
}

.clamp1 > code {
  /* Largeur obtenue : dépend de la largeur du conteneur ; */
  /* sur cette page, ce sera probablement `20%` de la largeur du conteneur */
  width: clamp(20%, 1px, 80%);
}

.clamp2 > code {
  /* Largeur obtenue : dépend de la largeur du conteneur ; */
  /* sur cette page, ce sera probablement `90%` de la largeur du conteneur */
  width: clamp(10%, 9999px, 90%);
}

.clamp3 > code {
  /* Largeur obtenue : `125px` */
  width: clamp(125px, 1px, 250px);
}

.clamp4 > code {
  /* Largeur obtenue : `150px` */
  width: clamp(25px, 9999px, 150px);
}
```

{{EmbedLiveSample('exemple_avec_clamp', '100%', 212) }}

## Fonctions mathématiques CSS avancées

Pour la mise en page et le style des éléments du DOM, les quatre fonctions mathématiques de base {{CSSxRef("calc", "calc()")}}, {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}} et {{CSSxRef("clamp", "clamp()")}} sont souvent suffisantes. Cependant, pour des usages avancés comme des supports d'apprentissage des mathématiques, des visualisations 3D ou des animations CSS, vous pouvez utiliser&nbsp;:

- [Fonctions à valeurs par paliers](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_valeur_par_paliers)
  - {{CSSxRef("round", "round()")}}&nbsp;: calcule une **valeur selon une stratégie d'arrondi**
  - {{CSSxRef("mod", "mod()")}}&nbsp;: calcule le **reste** d'une division avec le **même signe que le diviseur**
  - {{CSSxRef("rem", "rem()")}}&nbsp;: calcule le **reste** d'une division avec le **même signe que le dividende**
- [Fonctions trigonométriques](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_trigonométriques)
  - {{CSSxRef("sin", "sin()")}}&nbsp;: calcule le **sinus trigonométrique** d'un nombre
  - {{CSSxRef("cos", "cos()")}}&nbsp;: calcule le **cosinus trigonométrique** d'un nombre
  - {{CSSxRef("tan", "tan()")}}&nbsp;: calcule la **tangente trigonométrique** d'un nombre
  - {{CSSxRef("asin", "asin()")}}&nbsp;: calcule l'**arcsinus** d'un nombre
  - {{CSSxRef("acos", "acos()")}}&nbsp;: calcule l'**arccosinus** d'un nombre
  - {{CSSxRef("atan", "atan()")}}&nbsp;: calcule l'**arctangente** d'un nombre
  - {{CSSxRef("atan2", "atan2()")}}&nbsp;: calcule l'**arctangente** à partir de deux nombres
- [Fonctions exponentielles](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_exponentielles)
  - {{CSSxRef("pow", "pow()")}}&nbsp;: calcule un nombre **élevé à la puissance** d'un autre nombre
  - {{CSSxRef("sqrt", "sqrt()")}}&nbsp;: calcule la **racine carrée** d'un nombre
  - {{CSSxRef("hypot", "hypot()")}}&nbsp;: calcule la **racine carrée de la somme des carrés** des nombres donnés
  - {{CSSxRef("log", "log()")}}&nbsp;: calcule le **logarithme** d'un nombre (avec `e` comme base par défaut)
  - {{CSSxRef("exp", "exp()")}}&nbsp;: calcule **`e` élevé à la puissance** d'un autre nombre
- [Fonctions de signe](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_liées_au_signe)
  - {{CSSxRef("abs", "abs()")}}&nbsp;: calcule la **valeur absolue** d'un nombre
  - {{CSSxRef("sign", "sign()")}}&nbsp;: calcule le **signe (positif, négatif ou zéro)** d'un nombre

## Pour aller plus loin

- Vous pouvez utiliser les fonctions mathématiques CSS pour créer des interfaces utilisateur réactives sans écrire de code JavaScript.
- Les fonctions mathématiques CSS peuvent parfois remplacer les [requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries/Using) pour définir des points de rupture de mise en page.
- En 2023, les membres du projet Interop [ont sélectionné «&nbsp;CSS Math Functions&nbsp;» comme axe d'amélioration <sup>(angl.)</sup>](https://github.com/web-platform-tests/interop/blob/main/2023/README.md#css-math-functions). Cela signifie que les éditeurs de navigateurs collaborent pour garantir que les fonctions mathématiques CSS se comportent de la même façon sur tous les navigateurs et appareils.
