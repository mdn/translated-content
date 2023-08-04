---
title: Utilisation de dégradés CSS
slug: Web/CSS/CSS_images/Using_CSS_gradients
---

{{CSSRef}}

Les **dégradés CSS** sont représentés par le type de donnée [`<gradient>`](/fr/docs/Web/CSS/gradient) qui est un sous-ensemble du type [`<image>`](/fr/docs/Web/CSS/image). L'utilisation de dégradés CSS permet d'afficher des transitions douces entre deux couleurs ou plus. Il existe trois sortes de dégradés&nbsp;:

- Les dégradés linéaires (créés avec la fonction [`linear-gradient()`](</fr/docs/Web/CSS/gradient/linear-gradient()>)),
- Les dégradés radiaux (créés avec la fonction [`radial-gradient()`](</fr/docs/Web/CSS/gradient/radial-gradient()>)),
- Les dégradés coniques (créés avec la fonction [`conic-gradient()`](</fr/docs/Web/CSS/gradient/conic-gradient()>)).

Les dégradés peuvent être répétés avec les fonctions respectives [`repeating-linear-gradient()`](</fr/docs/Web/CSS/gradient/repeating-linear-gradient()>), [`repeating-radial-gradient()`](</fr/docs/Web/CSS/gradient/repeating-radial-gradient()>) et [`repeating-conic-gradient()`](</fr/docs/Web/CSS/gradient/repeating-conic-gradient()>).

Les dégradés peuvent être utilisés à chaque endroit où on peut utiliser une image (par exemple les arrière-plans). Les dégradés étant générés dynamiquement, ils permettent d'éviter d'utiliser des images matricielles pour ces effets, le temps de téléchargement et la bande passante utilisée sont réduits. En outre, comme le dégradé est généré par le navigateur, les objets concernés se comporteront mieux en cas de zoom et votre mise en page peut être ajustée de manière plus flexible.

Dans cet article, nous verrons d'abord les dégradés linéaires et détaillerons les fonctionnalités associées avant de passer aux dégradés radiaux, coniques et à leurs formes répétées.

## Dégradés linéaires

Pour créer un dégradé linéaire, définissez un point de départ et une direction (sous la forme d'un angle) selon laquelle l'effet de dégradé sera appliqué.

### Un dégradé linéaire simple

Pour définir un dégradé sous sa forme la plus simple, il suffit d'avoir deux couleurs. Celles-ci permettent de placer ce qu'on appellera des arrêts de couleur (<i lang="en">color stops</i> en anglais). Il est nécessaire d'en avoir au moins deux, mais il est possible d'en avoir plus.

#### HTML

```html
<div class="lineaire-simple"></div>
```

#### CSS

```css
.lineaire-simple {
  background: linear-gradient(blue, pink);
}

div {
  width: 120px;
  height: 120px;
}
```

#### Résultat

{{EmbedLiveSample("",150,150)}}

### Changer la direction

Par défaut, les dégradés linéaires vont du haut vers le bas. Il est possible de changer leur orientation en indiquant une direction.

#### HTML

```html
<div class="degrade-horizontal"></div>
```

#### CSS

```css
.degrade-horizontal {
  background: linear-gradient(to right, blue, pink);
}

div {
  width: 120px;
  height: 120px;
}
```

#### Résultat

{{EmbedLiveSample("",150,150)}}

### Appliquer un dégradé en diagonale

Il est également possible d'orienter le dégradé sur une diagonale allant d'un coin à un autre.

#### HTML

```html
<div class="degrade-diagonal"></div>
```

#### CSS

```css
.degrade-diagonal {
  background: linear-gradient(to bottom right, blue, pink);
}

div {
  width: 200px;
  height: 100px;
}
```

#### Résultat

{{EmbedLiveSample("",200,130)}}

### Utilisation d'angles

Si on veut choisir plus précisément la direction, on pourra fournir un angle au dégradé.

#### HTML

```html
<div class="degrade-angulaire"></div>
```

#### CSS

```css
.degrade-angulaire {
  background: linear-gradient(70deg, blue, pink);
}

div {
  width: 120px;
  height: 120px;
}
```

#### Résultat

{{EmbedLiveSample("",150,150)}}

L'angle est spécifié entre une ligne verticale et la ligne de dégradé, dans le sens des aiguilles d'une montre. Autrement dit, `0deg` crée un dégradé vertical de bas en haut, tandis que `90deg` génère un dégradé horizontal de la gauche vers la droite. Les valeurs négatives font progresser l'angle dans le sens inverse des aiguilles d'une montre&nbsp;:

![](linear_red_angles.png)

## Créer des effets et manipuler les couleurs

L'ensemble des types de dégradés CSS sont décrits par une suite de couleurs avec chacune une position. Les couleurs produites par les dégradés CSS peuvent varier progressivement selon un axe et créer des transitions douces. Il est aussi possible de créer des bandes de couleurs avec des transitions vives entre deux couleurs. Ce qui suit est valable pour l'ensemble des fonctions de dégradés&nbsp;:

### Utiliser plus de deux couleurs

Les dégradés CSS ne sont pas limités à deux couleurs, il est possible d'en utiliser autant que souhaité. Par défaut, les couleurs sont espacées de façon homogène&nbsp;:

#### HTML

```html
<div class="degrade-espacement-auto"></div>
```

#### CSS

```css
.degrade-espacement-auto {
  background: linear-gradient(red, yellow, blue, orange);
}

div {
  width: 120px;
  height: 120px;
}
```

#### Résultat

{{EmbedLiveSample("",150,150)}}

### Arrêts de couleurs

Les arrêts de couleurs sont des points sur la ligne de dégradé qui doivent avoir une couleur précise. Leur emplacement peut être spécifié sous la forme de zéro, un ou deux pourcentages de la longueur de la ligne, ou d'une longueur absolue. Vous pouvez en spécifier autant que vous voulez pour obtenir l'effet désiré. Si vous spécifiez un pourcentage, `0%` indique le point de départ, et `100%` le point d'arrivée&nbsp;; il est cependant possible d'utiliser des valeurs en dehors de cet intervalle si nécessaire pour obtenir l'effet désiré. Si une position n'est pas définie, la position de cet arrêt de couleur sera automatiquement calculée (par défaut le premier arrêt est situé à 0%, le dernier à 100% et les autres répartis de façon homogène par rapport à leurs voisins).

#### HTML

```html
<div class="degrade-multicolore"></div>
```

#### CSS

```css
.degrade-multicolore {
  background: linear-gradient(to left, lime, lime 28px, red 77%, cyan);
}

div {
  width: 120px;
  height: 120px;
}
```

#### Résultat

{{EmbedLiveSample("",150,150)}}

### Créer des lignes franches

Pour créer une ligne franche entre deux couleurs et avoir deux bandes plutôt qu'un dégradé progressif, on peut définir deux points d'arrêt de couleur au même endroit. Dans l'exemple suivant, on a deux couleurs pour un même emplacement de point d'arrêt situé à `50%`&nbsp;:

#### HTML

```html
<div class="ligne-franche"></div>
```

#### CSS

```css
div {
  width: 120px;
  height: 120px;
}

.ligne-franche {
  background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);
}
```

#### Résultat

{{EmbedLiveSample("", 150, 150)}}

### Utiliser des indications de couleurs

Par défaut, les dégradés passent linéairement d'une couleur à une autre. On peut également utiliser une indication afin de définir l'emplacement où la couleur médiane sera atteinte. Dans l'exemple qui suit, plutôt que d'attendre la moitié de la transition au milieu, on la place à 10% de l'axe.

#### HTML

```html
<div class="indication-couleur"></div>
<div class="degrade-lineaire"></div>
```

#### CSS

```css
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
}

.indication-couleur {
  background: linear-gradient(blue, 10%, pink);
}

.degrade-lineaire {
  background: linear-gradient(blue, pink);
}
```

#### Résultat

{{EmbedLiveSample("",150,150)}}

### Créer des bandes de couleur

Pour inclure une bande d'une couleur donnée, sans transition au sein du dégradé, on utilisera deux points d'arrêt successifs avec la même couleur. Ainsi, la couleur sera atteinte au premier point d'arrêt puis sera conservée jusqu'au suivant.

```html hidden
<div class="multiposition-stops"></div>
<div class="multiposition-stop2"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
```

```css
.multiposition-stops {
  background: linear-gradient(
    to left,
    lime 20%,
    red 30%,
    red 45%,
    cyan 55%,
    cyan 70%,
    yellow 80%
  );
  background: linear-gradient(
    to left,
    lime 20%,
    red 30% 45%,
    cyan 55% 70%,
    yellow 80%
  );
}
.multiposition-stop2 {
  background: linear-gradient(
    to left,
    lime 25%,
    red 25%,
    red 50%,
    cyan 50%,
    cyan 75%,
    yellow 75%
  );
  background: linear-gradient(
    to left,
    lime 25%,
    red 25% 50%,
    cyan 50% 75%,
    yellow 75%
  );
}
```

{{EmbedLiveSample("", 150, 150)}}

Dans le premier exemple ci-avant, le bleu vert commence au début puis progresse jusqu'à 20% avant de transitionner vers le rouge pendant les 10% qui suivent. Le rouge reste vif entre 30% et 45% avant de transitionner vers un cyan pendant 15% etc.

Dans le deuxième exemple, le deuxième point d'arrêt pour chaque couleur est situé au même emplacement que le premier point d'arrêt pour la couleur suivante et on obtient donc des bandes successives.

Dans les deux exemples, le dégradé est écrit deux fois&nbsp;: la première correspond à la méthode décrite par la spécification CSS de niveau 3 pour répéter les couleurs des arrêts et la seconde correspond à la méthode de la spécification CSS de niveau 4 pour inclure deux longueurs.

### Contrôler la progression du dégradé

Par défaut, un dégradé progresse linéairement entre les deux couleurs et la couleur médiane est atteinte à la moitié du parcours. Toutefois, si on veut atteindre cette couleur médiane plus tôt ou plus tard, on peut fournir une indication permettant de définir l'emplacement du milieu de la transition. Dans l'exemple qui suit, la couleur est à la moitié de la transition entre le vert et le cyan à 20% du dégradé (et non à 50%). Le deuxième exemple ne contient pas de telle indication et la transition s'effectue linéairement. Vous pouvez ainsi observer l'impact d'une telle indication.

```html hidden
<div class="colorhint-gradient"></div>
<div class="regular-progression"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
```

```css
.colorhint-gradient {
  background: linear-gradient(to top, lime, 20%, cyan);
}
.regular-progression {
  background: linear-gradient(to top, lime, cyan);
}
```

{{EmbedLiveSample("", 150, 150)}}

### Transparence et dégradés

Les dégradés gèrent la transparence. Vous pouvez l'utiliser, par exemple, en superposant plusieurs fonds pour créer des effets sur les images. Par exemple&nbsp;:

#### HTML

```html
<div class="superposition"></div>
```

#### CSS

```css
.superposition {
  background: linear-gradient(to right, transparent, mistyrose),
    url("critters.png");
}

div {
  width: 300px;
  height: 150px;
}
```

#### Résultat

{{EmbedLiveSample("",300,180)}}

### Empilement de dégradés

Il est possible d'empiler différents dégradés. Il suffit que les dégradés sur les couches supérieures ne soient pas complètement opaques pour qu'on puisse voir ceux des couches inférieures.

#### HTML

```html
<div class="linear-gradient"></div>
```

#### CSS

```css
.linear-gradient {
  background: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
}

div {
  width: 200px;
  height: 200px;
}
```

#### Résultat

{{EmbedLiveSample("",230,230)}}

## Dégradés radiaux

Les dégradés radiaux sont similaires aux dégradés linéaires mais permettent d'obtenir un effet qui rayonne à partir d'un point. Il est possible de créer des dégradés circulaires ou elliptiques.

### Un dégradé radial simple

> **Note :** Dans les exemples suivants, nous continuons d'utiliser le même [`<div>`](/fr/docs/Web/HTML/Element/div) et, pour ne pas surcharger la lecture, n'afficherons plus que la règle CSS spécifique au dégradé.

De la même façon qu'avec les dégradés linéaires, il suffit de deux couleurs pour créer un dégradé radial.

```html hidden
<div class="radial-simple"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-simple {
  background: radial-gradient(red, blue);
}
```

{{EmbedLiveSample("", 270, 150)}}

### Positionner les points d'arrêt

À nouveau, comme pour les dégradés linéaires, il est possible de placer des arrêts de couleur en précisant un pourcentage ou une distance.

```html hidden
<div class="degrade-radial"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.degrade-radial {
  background: radial-gradient(red 10px, yellow 30%, #1e90ff 50%);
}
```

{{EmbedLiveSample("", 150, 150)}}

### Positionner le centre du dégradé

La position du centre du dégradé peut être définie avec des mots-clés, des pourcentages ou des longueurs. Deux valeurs permettent de placer le centre sur les deux axes. Si une seule valeur est fournie, elle sera utilisée pour les deux axes.

```html hidden
<div class="degrade-radial"></div>
```

```css hidden
div {
  width: 120px;
  height: 240px;
}
```

```css
.degrade-radial {
  background: radial-gradient(at 0% 30%, red 10px, yellow 30%, #1e90ff 50%);
}
```

{{EmbedLiveSample("", 240, 270)}}

### Dimensionner les dégradés radiaux

À la différence des dégradés linéaires, il est possible de définir la taille d'un dégradé radial. Pour cela, on pourra utiliser les valeurs `closest-corner`, `closest-side`, `farthest-corner`, et `farthest-side`, avec `farthest-corner` qui est la valeur par défaut. Les cercles peuvent aussi être dimensionnés avec une longueur et les ellipses avec une longueur ou un pourcentage.

#### Utiliser `closest-side` pour les ellipses

Dans l'exemple qui suit, on utilise la valeur `closest-side` pour la taille. Cela signifie que la taille du dégradé sera définie par la distance entre le point central de départ et le côté le plus proche de la boîte englobante.

```html hidden
<div class="radial-ellipse-side"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.radial-ellipse-side {
  background: radial-gradient(
    ellipse closest-side,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{EmbedLiveSample("", 270, 130)}}

#### Utiliser `farthest-corner` pour les ellipses

Cet exemple ressemble fortement au précédent, mais on utilise ici `farthest-corner` qui crée un dégradé dont la distance est celle entre le point de départ central et le côté le plus éloigné de la boîte englobante.

```html hidden
<div class="radial-ellipse-far"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.radial-ellipse-far {
  background: radial-gradient(
    ellipse farthest-corner,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{EmbedLiveSample("", 240, 130)}}

#### Utiliser `closest-side` pour les cercles

Pour cet exemple, on utilise `closest-side` qui permet de créer un cercle dont le rayon est la distance entre le point de départ central et le côté le plus proche de la boîte englobante. Le rayon est la distance entre le centre du dégradé et le bord le plus proche. Avec le positionnement indiqué ici, c'est le bas le plus proche.

```html hidden
<div class="radial-circle-close"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-circle-close {
  background: radial-gradient(
    circle closest-side at 25% 75%,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{EmbedLiveSample("", 240, 150)}}

#### Longueur ou pourcentage pour le dimensionnement des ellipses

Les ellipses peuvent être dimensionnées avec une longueur ou un pourcentage. La première valeur représentera le rayon horizontal et la seconde représentera le rayon vertical. Les pourcentages utilisés pour ces valeurs sont relatifs à la dimension de la boîte sur l'axe correspondant. Dans l'exemple qui suit, on utilise un pourcentage pour le rayon horizontal.

```html hidden
<div class="radial-ellipse-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-ellipse-size {
  background: radial-gradient(
    ellipse 50% 50px,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{EmbedLiveSample('', 240, 150)}}

#### Longueur pour le dimensionnement des cercles

Les cercles sont dimensionnés via une longueur (une valeur de type [`<length>`](/fr/docs/Web/CSS/length)) qui indique le rayon du cercle.

```html hidden
<div class="radial-circle-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-circle-size {
  background: radial-gradient(circle 50px, red, yellow 10%, #1e90ff 50%, beige);
}
```

{{EmbedLiveSample('', 240, 150)}}

### Empiler des dégradés radiaux

À l'instar des dégradés linéaires, on peut empiler des dégradés radiaux. Le premier dégradé indiqué sera celui sur la couche la plus haute et le dernier sera celui sur la couche la plus basse.

```html hidden
<div class="stacked-radial"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-radial {
  background:
    radial-gradient(
      circle at 50% 0,
      rgba(255, 0, 0, 0.5),
      rgba(255, 0, 0, 0) 70.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      rgba(0, 0, 255, 0.5),
      rgba(0, 0, 255, 0) 70.71%
    ),
    radial-gradient(
        circle at 93.3% 75%,
        rgba(0, 255, 0, 0.5),
        rgba(0, 255, 0, 0) 70.71%
      ) beige;
  border-radius: 50%;
}
```

{{EmbedLiveSample("", 230, 230)}}

## Dégradés coniques

La fonction **`conic-gradient()`** permet de créer une image composée d'un dégradé de couleurs tournant autour d'un point (plutôt qu'une progression radiale). On pourra ainsi utiliser des dégradés coniques pour créer des camemberts ou des éventails de couleurs.

La syntaxe de `conic-gradient()` est semblable à celle de `radial-gradient()` mais les arrêts de couleur seront placés le long d'un arc plutôt que le long de la ligne émise depuis le centre. Les arrêts de couleur seront exprimés en pourcentages ou en degrés, ils ne pourront pas être exprimés sous forme de longueurs absolues.

Pour un dégradé radial, la transition entre les couleurs forme une ellipse qui progresse vers l'extérieur dans toutes les directions. Un dégradé conique verra la transition progresser le long de l'arc autour du cercle, dans le sens horaire. À l'instar des dégradés radiaux, il est possible de positionner le centre du dégradé et à l'instar des dégradés linéaires, on peut modifier l'angle du dégradé.

### Un dégradé conique simple

Comme pour les dégradés linéaires et radiaux, il suffit de deux couleurs pour créer un dégradé conique. Par défaut, le centre du dégradé sera situé au centre (point 50% 50%) et le début du dégradé commencera vers le haut&nbsp;:

```html hidden
<div class="simple-conic"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simple-conic {
  background: conic-gradient(red, blue);
}
```

{{EmbedLiveSample("", 150, 150)}}

### Positionner le centre

À l'instar des dégradés radiaux, on peut placer le centre d'un dégradé conique à l'aide de mots-clés, de valeurs (longueurs ou pourcentages) avec le mot-clé `at`.

```html hidden
<div class="conic-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gradient {
  background: conic-gradient(at 0% 30%, red 10%, yellow 30%, #1e90ff 50%);
}
```

{{EmbedLiveSample("", 150, 150)}}

### Modifier l'angle

Par défaut, les différents arrêts de couleur indiqués sont répartis à équidistance autour du cercle. On peut positionner l'angle de départ du dégradé à l'aide du mot-clé `from`, suivi d'un angle ou d'une longueur. On peut indiquer différentes positions pour les différents arrêts de couleur en précisant un angle ou une longueur à leur suite.

```html hidden
<div class="conic-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gradient {
  background: conic-gradient(
    from 45deg,
    red,
    orange,
    yellow,
    green,
    blue,
    purple
  );
}
```

{{EmbedLiveSample("", 150, 150)}}

## Répéter des dégradés

Les propriétés [`linear-gradient()`](</fr/docs/Web/CSS/gradient/linear-gradient()>), [`radial-gradient()`](</fr/docs/Web/CSS/gradient/radial-gradient()>) et [`conic-gradient()`](</fr/docs/Web/CSS/gradient/conic-gradient()>) ne permettent pas automatiquement de répéter les arrêts de couleur. Toutefois, les fonctions [`repeating-linear-gradient()`](</fr/docs/Web/CSS/gradient/repeating-linear-gradient()>), [`repeating-radial-gradient()`](</fr/docs/Web/CSS/gradient/repeating-radial-gradient()>) et [`repeating-conic-gradient()`](</fr/docs/Web/CSS/gradient/repeating-conic-gradient()>) offrent cette fonctionnalité.

La taille de la portion (ligne ou arc) répétée est donnée par la longueur (ou l'arc) entre le premier arrêt de couleur et le dernier arrêt de couleur. Si on n'indique pas de coordonnées pour le premier et le dernier arrêts, ceux-ci prendront respectivement 0 et 100%. Si aucun n'est déclaré, la ligne du dégradé occupera 100%, ce qui signifie que les dégradés linéaires et coniques ne se répèteront pas et que le dégradé radial ne se répètera que si le rayon du dégradé est plus petit que la distance entre le centre du dégradé et le coin le plus proche. Si le premier arrêt de couleur est déclaré et que la valeur est supérieure à 0, le dégradé se répètera, car la taille de la ligne ou de l'arc est donnée par la différence entre le premier et le dernier arrêt de couleur, qui vaudra alors ici moins de 100% ou 360 degrés.

### Répéter un dégradé linéaire

Dans cet exemple, on utilise la fonction [`repeating-linear-gradient()`](</fr/docs/Web/CSS/gradient/repeating-linear-gradient()>) afin de créer un dégradé linéaire qui se répète le long d'une ligne. Les couleurs forment un cycle lorsque le motif se répète.

```html hidden
<div class="repeating-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-linear {
  background: repeating-linear-gradient(
    -45deg,
    red,
    red 5px,
    blue 5px,
    blue 10px
  );
}
```

{{EmbedLiveSample("", 150, 150)}}

### Répéter plusieurs dégradés linéaires

Comme les dégradés linéaires et radiaux, il est possible de déclarer plusieurs dégradés, situés les uns sur les autres. Cela n'a d'intérêt que si les dégradés sont partiellement transparents afin de pouvoir voir les couches formées par les autres dégradés. Pour voir les différents dégradés, il est aussi possible d'utiliser des tailles d'arrière-plan différentes ([`background-size`](/fr/docs/Web/CSS/background-size)) et avec des positions ([`background-position`](/fr/docs/Web/CSS/background-position)) différentes pour chaque image de dégradé. Dans l'exemple qui suit, on utilise la transparence.

Ici, les lignes de dégradé mesurent 300px, 230px, et 300px de long.

```html hidden
<div class="multi-repeating-linear"></div>
```

```css hidden
div {
  width: 600px;
  height: 400px;
}
```

```css
.multi-repeating-linear {
  background: repeating-linear-gradient(
      190deg,
      rgba(255, 0, 0, 0.5) 40px,
      rgba(255, 153, 0, 0.5) 80px,
      rgba(255, 255, 0, 0.5) 120px,
      rgba(0, 255, 0, 0.5) 160px,
      rgba(0, 0, 255, 0.5) 200px,
      rgba(75, 0, 130, 0.5) 240px,
      rgba(238, 130, 238, 0.5) 280px,
      rgba(255, 0, 0, 0.5) 300px
    ), repeating-linear-gradient(
      -190deg,
      rgba(255, 0, 0, 0.5) 30px,
      rgba(255, 153, 0, 0.5) 60px,
      rgba(255, 255, 0, 0.5) 90px,
      rgba(0, 255, 0, 0.5) 120px,
      rgba(0, 0, 255, 0.5) 150px,
      rgba(75, 0, 130, 0.5) 180px,
      rgba(238, 130, 238, 0.5) 210px,
      rgba(255, 0, 0, 0.5) 230px
    ), repeating-linear-gradient(23deg, red 50px, orange 100px, yellow 150px, green
        200px, blue 250px, indigo 300px, violet 350px, red 370px);
}
```

{{EmbedLiveSample("", 600, 430)}}

### Créer un tartan

Pour créer un tartan, on utilise plusieurs dégradés qui se chevauchent avec de la transparence. Dans la première déclaration, on liste les différents arrêts de couleur séparément et dans la seconde déclaration, on utilise la syntaxe avec les positions multiples.

```html hidden
<div class="plaid-gradient"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.plaid-gradient {
  background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 50px,
      rgba(255, 127, 0, 0.25) 50px,
      rgba(255, 127, 0, 0.25) 56px,
      transparent 56px,
      transparent 63px,
      rgba(255, 127, 0, 0.25) 63px,
      rgba(255, 127, 0, 0.25) 69px,
      transparent 69px,
      transparent 116px,
      rgba(255, 206, 0, 0.25) 116px,
      rgba(255, 206, 0, 0.25) 166px
    ), repeating-linear-gradient(
      0deg,
      transparent,
      transparent 50px,
      rgba(255, 127, 0, 0.25) 50px,
      rgba(255, 127, 0, 0.25) 56px,
      transparent 56px,
      transparent 63px,
      rgba(255, 127, 0, 0.25) 63px,
      rgba(255, 127, 0, 0.25) 69px,
      transparent 69px,
      transparent 116px,
      rgba(255, 206, 0, 0.25) 116px,
      rgba(255, 206, 0, 0.25) 166px
    ), repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 5px,
      rgba(143, 77, 63, 0.25) 5px,
      rgba(143, 77, 63, 0.25) 10px
    ), repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(
          143,
          77,
          63,
          0.25
        ) 5px, rgba(143, 77, 63, 0.25) 10px);
}
```

{{EmbedLiveSample("", 230, 230)}}

### Répéter des dégradés radiaux

Ici, on utilise la fonction [`repeating-radial-gradient()`](</fr/docs/Web/CSS/gradient/repeating-radial-gradient()>) afin de créer un dégradé radial qui se répète. Les couleurs utilisées forment un cycle lorsque le motif unitaire recommence.

```html hidden
<div class="repeating-radial"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-radial {
  background: repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
}
```

{{EmbedLiveSample("", 150, 150)}}

### Répéter plusieurs dégradés radiaux

```html hidden
<div class="multi-target"></div>
```

```css hidden
div {
  width: 250px;
  height: 150px;
}
```

```css
.multi-target {
  background:
    repeating-radial-gradient(
        ellipse at 80% 50%,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5) 15px,
        rgba(255, 255, 255, 0.5) 15px,
        rgba(255, 255, 255, 0.5) 30px
      ) top left no-repeat,
    repeating-radial-gradient(
        ellipse at 20% 50%,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5) 10px,
        rgba(255, 255, 255, 0.5) 10px,
        rgba(255, 255, 255, 0.5) 20px
      ) top left no-repeat yellow;
  background-size:
    200px 200px,
    150px 150px;
}
```

{{EmbedLiveSample("", 250, 180)}}

## Voir aussi

- Les fonctions de manipulation des dégradés&nbsp;:

  - [`linear-gradient`](</fr/docs/Web/CSS/gradient/linear-gradient()>)
  - [`radial-gradient`](</fr/docs/Web/CSS/gradient/radial-gradient()>)
  - [`conic-gradient`](</fr/docs/Web/CSS/gradient/conic-gradient()>)
  - [`repeating-linear-gradient`](</fr/docs/Web/CSS/gradient/repeating-linear-gradient()>)
  - [`repeating-radial-gradient`](</fr/docs/Web/CSS/gradient/repeating-radial-gradient()>)
  - [`repeating-conic-gradient`](</fr/docs/Web/CSS/gradient/repeating-conic-gradient()>)

- Les types de donnée CSS relatifs aux dégradés&nbsp;:

  - [`<gradient>`](/fr/docs/Web/CSS/gradient)
  - [`<image>`](/fr/docs/Web/CSS/image)

- Certaines propriétés CSS qui permettent d'utiliser des dégradés&nbsp;:

  - [`background`](/fr/docs/Web/CSS/background)
  - [`background-image`](/fr/docs/Web/CSS/background-image)

- [Une bibliothèque de motifs de dégradés CSS, créée par Lea Verou](https://lea.verou.me/css3patterns/)
- [Un générateur de dégradé CSS](https://cssgenerator.org/gradient-css-generator.html)
