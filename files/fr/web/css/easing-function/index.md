---
title: <easing-function>
slug: Web/CSS/easing-function
l10n:
  sourceCommit: 803a7a460338dab4900fd44cf7ab569e3bf5799a
---

{{CSSRef}}

Le [type de données](/fr/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) [CSS](/fr/docs/Web/CSS) **`<easing-function>`** représente une fonction mathématique décrivant la vitesse à laquelle la valeur change.

Cette transition entre deux valeurs peut être appliquée dans différentes situations. Elle peut être utilisée pour décrire la rapidité selon laquelle les valeurs évoluent durant les animations. Elle permet ainsi de faire varier la vitesse de l'animation au fur et à mesure de sa progression. On peut utiliser une fonction d'évolution pour les [transitions](/fr/docs/Web/CSS/transition-timing-function) et [animations](/fr/docs/Web/CSS/animation-timing-function) CSS.

## Syntaxe

```css
/* fonction et mot-clé pour une évolution linéaire */
/* linear(<liste-points>) */
linear(1, -0.5, 0)
linear

/* fonction et mots-clés pour les courbes de Bézier cubiques */
/* cubic-bezier(<x1>, <y1>, <x2>, <y2>) */
cubic-bezier(0.25, 0.1, 0.25, 1)
ease
ease-in
ease-out
ease-in-out

/* fonctions et mots-clés pour les évolutions en escalier */
/* steps(<nombre-de-marches>, <direction>) */
steps(4, end)
steps(10, jump-both)
step-start
step-end
```

### Valeurs

- `linear`
  - : Indique que l'évolution a lieu à vitesse constante pendant toute la durée. Ce mot-clé est à la fois équivalent à [`cubic-bezier(0, 0, 1, 1)`](#fonctions_dévolution_en_courbe_de_bézier_cubique) et à [`linear(0, 1)`](#fonctions_dévolution_linéaire).

![Un graphique avec en abscisses la progression de l'entrée et en ordonnées la progression de la sortie, on voit une ligne droite entre l'origine et le point (1, 1).](linear.svg)

- `<linear-easing-function>`
  - : Définit une fonction `linear()` avec un ou plusieurs _arrêts linéaires_, chacun pouvant contenir jusqu'à deux _longueurs d'arrêt_ optionnelles afin de contrôler la progression de l'animation ou de la transition.

    La fonction `linear()` prend comme argument une liste d'arrêts linéaires séparés par des virgules qui indiquent les points par lesquels progressent l'animation ou la transition. Chaque point de la liste est indiqué par [un nombre (une valeur de type `<number>`)](/fr/docs/Web/CSS/number) comprise entre `0` et `1` (inclus). Par défaut, chaque arrêt est équidistant des autres, mais on peut aussi préciser un à deux [pourcentages](/fr/docs/Web/CSS/percentage) qui précisent la longueur.
    - `<number>`&nbsp;: représente un point dans le temps sur la durée de l'animation ou de la transition. La valeur `0` représente le début de l'itération et `1` la fin. Il est possible d'utiliser des valeurs en dehors de l'intervalle [0,1].

    - `<percentage>`&nbsp;: indique la position de l'arrêt linéaire dans la durée. On peut avoir deux coefficients en pourcentages. Si une seule valeur est fournie, elle indique le départ de l'arrêt linéaire correspondant. Si deux valeurs sont fournies, elles définissent la longueur de l'arrêt&nbsp;: la première indiquant le point de départ et le second le point d'arrivée pour ce segment. Si aucun pourcentage n'est fourni (le comportement par défaut), les arrêts sont répartis à équidistance sur la ligne chronologique.

- `<cubic-bezier-easing-function>`
  - : Définit [une courbe de Bézier](/fr/docs/Glossary/Bezier_curve) cubique donnant la progression de l'animation ou de la transition dans le temps. En CSS, les courbes de Bézier sont définies par 4 points de contrôle qui décrivent mathématiquement la courbe&nbsp;: un point de départ, un point final, et deux points de contrôles. On peut définir une telle fonction de deux façons&nbsp;: en créant une courbe paramétrée sur mesure avec ces quatre points grâce à la fonction `cubic-bezier()` ou en utilisant un des mots-clés prédéfinis qui correspondent aux paramètres usuels utilisés pour les courbes de Bézier. Les valeurs des mots-clés prédéfinis sont&nbsp;:

    `ease`&nbsp;: Ce mot-clé correspond à `cubic-bezier(0.25, 0.1, 0.25, 1)`. Il indique que l'interpolation démarre doucement, accélère vivement, puis ralentit progressivement. Le comportement est semblable à celui obtenu avec le mot-clé `ease-in-out`, mais accélère plus fortement au début.

    `ease-in`&nbsp;: Ce mot-clé correspond à `cubic-bezier(0.42, 0, 1, 1)`. Il indique que l'interpolation démarre doucement, puis accélère progressivement jusqu'à la fin, avant de s'arrêter brutalement.

    `ease-out`&nbsp;: Ce mot-clé correspond à `cubic-bezier(0, 0, 0.58, 1)`. Il indique que l'interpolation démarre brutalement, puis ralentit progressivement jusqu'à la fin.

    `ease-in-out`&nbsp;: Ce mot-clé correspond à `cubic-bezier(0.42, 0, 0.58, 1)`. Il indique que l'interpolation démarre doucement, accélère, puis ralentit à nouveau vers la fin. Au début, le comportement est proche de celui de `ease-in`, et à la fin, semblable à celui de `ease-out`.

    ![4 graphes avec le temps en abscisses (de 0 à 1) et la progression en ordonnées, qui illustrent les 4 courbes obtenues respectivement avec ease, ease-in, ease-out, ease-in-out.](ease.svg)

    `cubic-bezier()`&nbsp;: Cette fonction prend quatre coefficients numériques (type [`<number>`](/fr/docs/Web/CSS/number)) pour construire la courbe.
    - [`<number>`](/fr/docs/Web/CSS/number)&nbsp;: Quatre valeurs définissent les coordonnées [des points P1 et P2](#fonction_dévolution_en_courbe_de_bézier_cubique) de la courbe. `<x1>` et `<y1>` sont les coordonnées du point P1, et `<x2>` et `<y2>` celles du point P2. `<x1>` et `<x2>` doivent être comprises entre `0` et `1`.

- `<step-easing-function>`
  - : Définit une fonction en escalier qui divise l'animation en plusieurs paliers de même longueur. L'animation passe d'un palier à l'autre plutôt que de transitionner progressivement. Cette valeur sera l'un des deux mots-clés prédéfinis suivants ou une fonction `steps()` paramétrée sur mesure&nbsp;:

    `step-start`&nbsp;: Ce mot-clé est équivalent à `steps(1, jump-start)` ou `steps(1, start)`. Il indique que l'interpolation passe immédiatement à l'état final et reste ainsi jusqu'à la fin.

    `step-end`&nbsp;: Ce mot-clé est équivalent à `steps(1, jump-end)` ou `steps(1, end)`. Il indique que l'interpolation reste dans l'état initial jusqu'au dernier moment où elle passe directement à l'état final.

    ![Deux graphes, avec le temps en abscisses et la progression de l'animation en ordonnées, illustrant step-start et step-end.](step.svg)

    `steps()`&nbsp;: Cette fonction prend en paramètre un [entier](/fr/docs/Web/CSS/integer) et un autre paramètre optionnel qui indique la position du saut.
    - `<integer>`&nbsp;: Ce coefficient indique le nombre d'intervalles (ou marches) équidistants. Ce doit être un entier positif, supérieur à `0`, sauf si le deuxième paramètre vaut `jump-none`, auquel cas, le coefficient doit être un entier supérieur à `1`.
    - `<step-position>`&nbsp;: Cet argument optionnel définit [le moment du saut](#fonctions_dévolution_en_escalier) et précise s'il a lieu au début, à la fin, au début et à la fin ou ni à l'un ou l'autre. Les mots-clés qui peuvent être utilisés pour ce paramètre sont&nbsp;:
      - `jump-start`&nbsp;: Indique que le premier saut se produit tout au début, au point `0`. Aucun moment de l'animation ne se passe au point `0%`.
      - `jump-end`&nbsp;: Indique que le dernier saut se produit tout à la fin, au point `1`. Aucun moment de l'animation ne se passe au point `100%`. Il s'agit de la valeur par défaut quand aucune valeur `<step-position>` n'est précisée.
      - `jump-none`&nbsp;: Indique qu'aucun saut n'a lieu au début ou à la fin, retirant ainsi un palier sur toute l'évolution. Dans ce cas, la durée de chaque palier est déterminée en divisant la durée totale par le nombre de paliers (1/n).
      - `jump-both`&nbsp;:Indique que le saut a lieu à la fois au début et à la fin. En pratique, cela ajoute un palier à chaque extrémité. Aucun moment n'est passé aux points de progression `0%` et `100%`.
      - `start`&nbsp;: Équivalent à `jump-start`.
      - `end`&nbsp;: Équivalent à `jump-end`.

## Description

Il existe trois types de fonction d'évolution&nbsp;:

- [Les fonctions linéaires](#fonctions_dévolution_linéaire)
- [Les courbes de Bézier cubiques](#fonctions_dévolution_en_courbe_de_bézier_cubique)
- [Les fonctions en escalier](#fonctions_dévolution_en_escalier)

### Fonctions d'évolution linéaire

La fonction `linear()` permet d'obtenir une progression linéaire par segments. L'interpolation a lieu à vitesse constante du début jusqu'à la fin. Généralement, on utilise la fonction `linear()` en lui fournissant de nombreux points afin de construire l'approximation d'une courbe.

Par exemple, avec la fonction `linear(0, 0.25, 1)`, l'animation ou la transition démarre au point 0 et progresse linéairement jusqu'au quart de l'animation, puis progresse linéairement jusqu'au point `1`. Aucun pourcentage `<linear-stop-length>` n'étant indiqué, la même durée s'applique (50%) pour le passage de `0` à `0.25` et celui de `0.25` à `1`.

![Deux graphes avec le temps en abscisses et la progression en ordonnées. Le graphe à gauche illustre linear(0, 0.25, 1) sur lequel on voit une ligne cassée partir de l'origine jusqu'au point (0.5, 0.25), puis repartir jusqu'à (1, 1). Le graphe à droite illustre linear(0, 0.25 75%, 1) et on y voit une ligne cassée partant de l'origine jusqu'au point de coordonnées (0.75, 0.25), puis repartir jusqu'au point (1, 1).](linear_function.svg)

Par défaut, les arrêts sont équidistants. Ainsi, s'il y a 5 arrêts, ils se situeront respectivement à 0%, 25%, 50%, 75%, et 100% de la durée. On peut utiliser des pourcentages pour spécifier des valeurs `<linear-stop-length>` afin de contrôler plus précisément le début et/ou la fin de chaque segment.

Prenons une animation qui dure 100 secondes et progresse sur 100 pixels. Si on spécifie l'évolution de l'animation avec `linear(0, 0.25 75%, 1)`, elle progressera de 25 pixels pendant les 75 premières secondes (75% de la durée) et les 75 derniers pixels seront parcourus pendant les 25 secondes restantes. Si on avait utilisé `linear(0, 0.5 25% 75%, 1)`, l'animation aurait atteint 50 en 25 secondes, serait restée ainsi pendant 50 secondes (75%-25% de 100s) et les 50 derniers pixels auraient été parcourus pendant les 25 secondes restantes. `linear(0, 0.5 25% 75%, 1)` est équivalent à `linear(0, 0.5 25%, 0.5 75%, 1)`.

> [!NOTE]
> Le mot-clé [`linear`](#linear) est équivalent à `linear(0, 1)`. Bien que le mot-clé `linear` soit toujours interprété tel quel, la fonction `linear(0, 1)` est interprétée comme `linear(0 0%, 1 100%)`.

### Fonctions d'évolution en courbe de Bézier cubique

La notation fonctionnelle `cubic-bezier()` permet de définir [une courbe de Bézier](/fr/docs/Glossary/Bezier_curve) cubique. Ces fonctions permettent d'avoir des progressions initiales et finales plus douces.

![Un graphe avec le temps en abscisses et la progression en ordonnées, affichant une courbe en forme de S allant de l'origine jusqu'au point (1, 1) en utilisant les points de contrôle P1(0.1, 0.6) et P2(0.7, 0.2).](cubic-bezier.svg)

Une courbe de Bézier cubique est définie par quatre points&nbsp;: P0, P1, P2, et P3. Les points P0 et P3 représentent le début et la fin de la courbe. Ces derniers sont fixés ici en CSS&nbsp;: P0 est en `(0, 0)` et représente l'instant et la progression initiaux, tandis que P3 est situé en `(1, 1)` et correspond à l'état final.

Toutes les courbes de Bézier cubiques ne peuvent pas être utilisées comme fonctions d'évolution, car toutes ne sont pas [des fonctions mathématiques](<https://fr.wikipedia.org/wiki/Fonction_(math%C3%A9matiques)>) (c'est-à-dire des courbes pour lesquelles une abscisse donnée possède au plus une valeur en ordonnée). En CSS, P0 et P3 sont fixes et dans ces conditions, pour qu'une courbe de Bézier cubique soit une fonction, il faut (et il suffit) que les abscisses de P1 et P2 appartiennent à l'intervalle `[0, 1]`.

Dans le cas de courbes de Bézier cubiques où les ordonnées de P1 ou P2 sont en dehors de l'intervalle `[0, 1]`, la valeur pourra aller plus loin que l'état final puis revenir. Pour les animations CSS et certaines propriétés comme [`left`](/fr/docs/Web/CSS/left) ou [`right`](/fr/docs/Web/CSS/right), cela pourra créer un effet de rebond.

![Deux graphes pour la fonction d'évolution cubic-bezier(0.3, 0.2, 0.2, 1.4). Le graphe de gauche montre la progression allant plus haut que 1 à droite à partir d'une certaine progression. Celui de droite montre que la progression atteint 1 puis plafonne ainsi jusqu'à la fin.](cubic-bezier_out_of_range.svg)

Toutefois, certaines propriétés écrêteront la valeur produit si elle dépasse un intervalle autorisé. Ainsi, si la composante d'une couleur devient supérieure à 255 ou inférieure à 0 pour [`rgb()`](/fr/docs/Web/CSS/color_value/rgb), ce sera la valeur la plus proche et dans l'intervalle autorisé qui sera utilisée. Selon les coefficients passés à `cubic-bezier()`, on pourra observer ce comportement.

Quand une courbe de Bézier invalide est fournie, le moteur CSS ignore la propriété dans son ensemble.

Les mots-clés `ease`, `ease-in`, `ease-out`, et `ease-in-out` sont équivalents à des valeurs spécifiques de `cubic-bezier()` (voir plus haut).

### Fonctions d'évolution en escalier

La notation fonctionnelle `steps()` définit une fonction en escalier qui divise le segment des valeurs produites en paliers de même longueur.

Voici quelques exemples d'illustration avec `steps()`&nbsp;:

```css
steps(2, jump-start) /* équivalent à steps(2, start) */
steps(4, jump-end)   /* équivalent à steps(4, end) */
steps(5, jump-none)
steps(3, jump-both)
```

![4 graphiques illustrant l'évolution de la sortie (en ordonnées) par rapport à l'entrée (en abscisses). Le graphe en haut à gauche, steps(2, jump-start), montre une évolution sur deux marches, la première au niveau y=0.5 et commençant en x=0 jusqu'en x=0.5 et la deuxième au niveau y=1 jusqu'à x=1. Le graphe en haut à droite, steps(4, jump-end), montre une évolution sur 4 marches dont la première commence en (0,0) jusqu'à (0.25,0) et ainsi de suite jusqu'à la dernière marche (0.75,0.75) à (1,0.75). Le graphe en bas à gauche, steps(5, jump-none), montre une évolution sur 5 marches, la première d'ordonnée 0 de x=0 jusqu'à x=0.20, jusqu'à la cinquième marche de (0.80,1) à (1,1). Le graphe en bas à droite, steps(3, jump-both), montre 3 marche, la première démarrant à (0,0.25) et allant jusqu'à (0.33,0.25), la seconde de (0.33,0.5) à (0.66,0.5), puis la troisième de (0.66,0.75) à (1,0.75).](jump.svg)

Les mots-clés `step-start` et `step-end` sont équivalents à une valeur spécifique de `steps()`.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Comparer les fonctions d'évolution

Cet exemple fournit un outil de comparaison entre les différentes fonctions d'évolution avec une animation. Vous pouvez sélectionner une des fonctions d'évolution depuis le menu déroulant parmi quelques mots-clés, certains exemples `cubic-bezier()` ou `steps()`. Après avoir sélectionné une option, vous pouvez lancer ou interrompre l'animation grâce au bouton correspondant.

#### HTML

```html
<div>
  <div></div>
</div>
<ul>
  <li>
    <button class="animation-button">Démarrer l'animation</button>
  </li>
  <li>
    <label for="easing-select">Choisir une fonction d'évolution :</label>
    <select id="easing-select">
      <option selected>linear</option>
      <option>linear(0, 0.5 50%, 1)</option>
      <option>ease</option>
      <option>ease-in</option>
      <option>ease-in-out</option>
      <option>ease-out</option>
      <option>cubic-bezier(0.1, -0.6, 0.2, 0)</option>
      <option>cubic-bezier(0, 1.1, 0.8, 4)</option>
      <option>steps(5, end)</option>
      <option>steps(3, start)</option>
      <option>steps(4)</option>
    </select>
  </li>
</ul>
```

#### CSS

```css
body > div {
  position: relative;
  height: 100px;
}

div > div {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: blue;
  background-image: radial-gradient(
    circle at 10px 10px,
    rgb(25 255 255 / 80%),
    rgb(25 255 255 / 40%)
  );
  border-radius: 50%;
  top: 25px;
  animation: 1.5s infinite alternate;
}

@keyframes move-right {
  from {
    left: 10%;
  }

  to {
    left: 90%;
  }
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
```

#### JavaScript

```js
const selectElem = document.querySelector("select");
const startBtn = document.querySelector("button");
const divElem = document.querySelector("div > div");

startBtn.addEventListener("click", () => {
  if (startBtn.textContent === "Démarrer l'animation") {
    divElem.style.animationName = "move-right";
    startBtn.textContent = "Arrêter l'animation";
    divElem.style.animationTimingFunction = selectElem.value;
  } else {
    divElem.style.animationName = "unset";
    startBtn.textContent = "Démarrer l'animation";
  }
});

selectElem.addEventListener("change", () => {
  divElem.style.animationTimingFunction = selectElem.value;
});
```

#### Résultat

{{EmbedLiveSample("", "100%", 200)}}

### Utiliser la fonction `cubic-bezier()`

Ces courbes de Bézier cubiques sont valides en CSS&nbsp;:

```css example-good
/* Une courbe de Bézier cubique canonique avec 4 nombres,
   tous dans l'intervalle [0,1]. */
cubic-bezier(0.1, 0.7, 1.0, 0.1)

/* On peut utiliser des valeurs de type <integer>, car
   toute valeur <integer> est aussi de type <number>. */
cubic-bezier(0, 0, 1, 1)

/* Les ordonnées peuvent être négatives, ce qui donnera
   un effet de rebond. */
cubic-bezier(0.1, -0.6, 0.2, 0)

/* Les ordonnées peuvent aussi être supérieures à 1.0. */
cubic-bezier(0, 1.1, 0.8, 4)
```

Les définitions de ces courbes de Bézier cubiques sont invalides&nbsp;:

```css example-bad
/* Bien que la sortie de l'animation puisse être une couleur,
   les courbes de Bézier ne manipulent que des ratios numériques. */
cubic-bezier(0.1, red, 1.0, green)

/* Les abscisses doivent appartenir à l'intervalle [0, 1] et la
   courbe doit être une fonction temporelle. */
cubic-bezier(2.45, 0.6, 4, 0.1)

/* Les deux points doivent être définis, il n'y a pas
   de valeur par défaut. */
cubic-bezier(0.3, 2.1)

/* Les abscisses doivent appartenir à l'intervalle [0, 1] et la
   courbe doit être une fonction temporelle. */
cubic-bezier(-1.9, 0.3, -0.2, 2.1)
```

### Utiliser la fonction `steps()`

Ces fonctions d'évolution sont valides&nbsp;:

```css example-good
/* Il y a ici 5 paliers et le dernier prend
   place avant la fin de l'animation. */
steps(5, end)

/* Un escalier sur deux marches, dont la première
   se produit au début de l'animation. */
steps(2, start)

/* Le second paramètre est optionnel. */
steps(2)
```

> [!NOTE]
> Si l'animation contient plusieurs arrêts, les marches définies dans la fonction `steps()` s'appliqueront à chaque section de l'animation. Ainsi, si une animation contient trois segments et qu'on utilise `steps(2)`, il y aura 6 paliers au total, 2 pour chaque segment.

Les fonctions d'évolution qui suivent sont invalides&nbsp;:

```css example-bad
/* Le premier paramètre doit être de type <integer>. Ce ne
   peut pas être une valeur réelle, même si elle est égale
  à une valeur entière. */
steps(2.0, jump-end)

/* Le nombre de marches doit être positif. */
steps(-3, start)

/* Il doit y avoir au moins un palier. */
steps(0, jump-none)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les animations CSS](/fr/docs/Web/CSS/CSS_animations)
- [Les transitions CSS](/fr/docs/Web/CSS/CSS_transitions)
- [Un site pour construire des courbes de Bézier cubiques](https://cubic-bezier.com/)
- [Un site pour générer des fonctions d'évolution `linear()`](https://linear-easing-generator.netlify.app/)
