---
title: Utiliser les dégradés CSS
short-title: Utiliser les dégradés
slug: Web/CSS/Guides/Images/Using_gradients
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

Les **dégradés CSS** sont représentés par le type de donnée {{CSSxRef("&lt;gradient&gt;")}}, un type spécial de {{CSSxRef("&lt;image&gt;")}} constitué d'une transition progressive entre deux couleurs ou plus. Vous pouvez choisir entre trois types de dégradés&nbsp;: _linéaire_ (créé avec la fonction {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}), _radial_ (créé avec la fonction {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}) et _conique_ (créé avec la fonction {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}). Vous pouvez également créer des dégradés répétitifs avec les fonctions {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} et {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Les dégradés peuvent être utilisés partout où vous utilisez une `<image>`, comme dans les arrière-plans. Comme les dégradés sont générés dynamiquement, ils peuvent supprimer le besoin des fichiers de trames d'images qui sont traditionnellement utilisés pour obtenir des effets similaires. De plus, comme les dégradés sont générés par le navigateur, ils sont de meilleure qualité que les trames d'images lorsqu'on effectue un zoom, et peuvent être redimensionnés à la volée.

Nous commençons par présenter les dégradés linéaires, puis nous abordons les fonctionnalités prises en charge par tous les types de dégradés en prenant les dégradés linéaires comme exemple, avant de passer aux dégradés radiaux, coniques et répétitifs.

## Dégradés linéaires

Un dégradé linéaire crée une bande de couleurs qui s'enchaînent en ligne droite.

### Un dégradé linéaire simple

Pour créer le type de dégradé le plus simple, il suffit de définir deux couleurs. On les appelle des _arrêts de couleur_. Il faut en avoir au moins deux, mais vous pouvez en avoir autant que vous le souhaitez.

```html hidden
<div class="lineaire-simple"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.lineaire-simple {
  background: linear-gradient(blue, pink);
}
```

{{EmbedLiveSample("Un dégradé linéaire simple", 120, 120)}}

### Changer la direction

Par défaut, les dégradés linéaires vont du haut vers le bas. Il est possible de changer leur orientation en indiquant une direction.

```html hidden
<div class="degrade-horizontal"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.degrade-horizontal {
  background: linear-gradient(to right, blue, pink);
}
```

{{EmbedLiveSample("Changer la direction", 120, 120)}}

### Dégradé en diagonale

Il est également possible d'orienter le dégradé sur une diagonale allant d'un coin à un autre.

```html hidden
<div class="degrade-diagonal"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.degrade-diagonal {
  background: linear-gradient(to bottom right, blue, pink);
}
```

{{EmbedLiveSample("Dégradé en diagonale", 200, 100)}}

### Utiliser les angles

Si vous voulez choisir plus précisément la direction, vous pouvez fournir un angle au dégradé.

```html hidden
<div class="degrade-angulaire"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.degrade-angulaire {
  background: linear-gradient(70deg, blue, pink);
}
```

{{EmbedLiveSample("Utiliser les angles", 120, 120)}}

Lorsque vous utilisez un angle, `0deg` crée un dégradé vertical allant de bas en haut, `90deg` crée un dégradé horizontal allant de gauche à droite, et ainsi de suite dans le sens des aiguilles d'une montre. Les angles négatifs vont dans le sens inverse des aiguilles d'une montre.

![Quatre carrés indiquant les angles avec les dégradés correspondants dessinés sur chaque. On y voit que le carré avec 0 degré a un dégradé du rouge vers le blanc de bas en haut, celui avec 90 degrés de gauche à droite, celui 180 degrés de haut en bas et celui de -90 degrés de droite à gauche.](linear_red_angles.png)

## Déclarer les couleurs et créer les effets

Tous les types de dégradés CSS sont une gamme de couleurs dépendant de la position. Les couleurs produites par les dégradés CSS peuvent varier continuellement en fonction de la position, produisant des transitions de couleur douces. Il est également possible de créer des bandes de couleurs unies et des transitions nettes entre deux couleurs. Ce qui suit est valable pour toutes les fonctions de dégradé&nbsp;:

### Utiliser plus de deux couleurs

Vous n'êtes pas obligé de vous limiter à deux couleurs — vous pouvez en utiliser autant que vous le souhaitez&nbsp;! Par défaut, les couleurs sont réparties de manière uniforme le long du dégradé.

```html hidden
<div class="degrade-espacement-auto"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.degrade-espacement-auto {
  background: linear-gradient(red, yellow, blue, orange);
}
```

{{EmbedLiveSample("Utiliser plus de deux couleurs", 120, 120)}}

### Positionner les arrêts de couleurs

Vous n'êtes pas obligé de conserver les arrêts de couleur à leurs positions par défaut. Pour affiner leur emplacement, vous pouvez attribuer à chacun d'entre eux une valeur de zéro, un ou deux pourcentages, ou, pour les dégradés radiaux et linéaires, des valeurs de longueur absolues. Si vous définissez l'emplacement en pourcentage, `0%` correspond au point de départ, tandis que `100%` correspond au point d'arrivée&nbsp;; toutefois, vous pouvez utiliser des valeurs en dehors de cette plage si nécessaire pour obtenir l'effet souhaité. Si vous ne précisez pas l'emplacement d'un arrêt de couleur, sa position est automatiquement calculée pour vous, le premier arrêt de couleur se situant à `0%` et le dernier à `100%`, les autres arrêts de couleur se trouvant à mi-chemin entre les arrêts adjacents.

```html hidden
<div class="degrade-multicolore"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.degrade-multicolore {
  background: linear-gradient(to left, lime 28px, red 77%, cyan);
}
```

{{EmbedLiveSample("Positionner les arrêts de couleurs", 120, 120)}}

### Créer des lignes franches

Pour créer une ligne franche entre deux couleurs, c'est-à-dire une bande plutôt qu'une transition progressive, il est possible de définir des points d'arrêt de couleur adjacents au même emplacement. Dans cet exemple, les couleurs partagent un point d'arrêt à la marque `50%`, à mi-chemin du dégradé&nbsp;:

```html hidden
<div class="ligne-franche"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.ligne-franche {
  background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);
}
```

{{EmbedLiveSample("Créer des lignes franches", 120, 120)}}

### Créer des bandes et des rayures de couleurs

Pour inclure une zone de couleur unie, sans transition, au sein d'un dégradé, définissez deux positions pour le point d'arrêt de couleur. Les points d'arrêt de couleur peuvent comporter deux positions, ce qui équivaut à deux points d'arrêt consécutifs avec la même couleur à des positions différentes. La couleur atteint sa saturation maximale au premier point d'arrêt, conserve cette saturation jusqu'au deuxième point d'arrêt, puis passe progressivement à la couleur du point d'arrêt adjacent en passant par la première position de ce dernier.

```html hidden
<div class="arrets-plusieurs-positions"></div>
<div class="arrets-plusieurs-positions2"></div>
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
.arrets-plusieurs-positions {
  background: linear-gradient(
    to left,
    lime 20%,
    red 30% 45%,
    cyan 55% 70%,
    yellow 80%
  );
}
.arrets-plusieurs-positions2 {
  background: linear-gradient(
    to left,
    lime 25%,
    red 25% 50%,
    cyan 50% 75%,
    yellow 75%
  );
}
```

{{EmbedLiveSample("Créer des bandes et des rayures de couleurs", 120, 120)}}

Dans le premier exemple ci-dessus, le vert citron commence au début puis progresse jusqu'à 20% avant de transitionner vers le rouge pendant les 10% qui suivent. Le rouge reste vif entre 30% et 45% avant de transitionner vers un cyan, le cyan reste vif pendant 15%, et ainsi de suite.

Dans le deuxième exemple, le deuxième point d'arrêt pour chaque couleur est situé au même emplacement que le premier point d'arrêt pour la couleur suivante, créant des bandes successives.

### Contrôler la progression du dégradé avec des indications de couleur

Par défaut, un dégradé progressivement entre les couleurs de deux arrêts de couleur adjacents, avec le milieu entre ces deux arrêts de couleur étant la valeur de la couleur médiane. Vous pouvez contrôler {{Glossary("interpolation", "l'interpolation")}}, ou progression, entre deux arrêts de couleur en incluant un emplacement d'indication de couleur. Dans cet exemple, la couleur atteint le milieu entre le vert citron et le cyan 20% du chemin du dégradé plutôt que 50% du chemin du dégradé. Le deuxième exemple ne contient pas d'indication permettant de mettre en évidence la différence que peut apporter l'indication de couleur&nbsp;:

```html hidden
<div class="degrade-avec-indication"></div>
<div class="progression-reguliere"></div>
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
.degrade-avec-indication {
  background: linear-gradient(to top, lime, 20%, cyan);
}
.progression-reguliere {
  background: linear-gradient(to top, lime, cyan);
}
```

{{EmbedLiveSample("Contrôler la progression du dégradé avec des indications de couleur", 120, 120)}}

### Superposer des dégradés

Les dégradés gèrent la transparence. Vous pouvez l'utiliser, par exemple, en superposant plusieurs fonds pour créer des effets sur les images. Par exemple&nbsp;:

```html hidden
<div class="image-superposee"></div>
```

```css hidden
div {
  width: 300px;
  height: 150px;
}
```

```css
.image-superposee {
  background:
    linear-gradient(to right, transparent, mistyrose), url("critters.png");
}
```

{{EmbedLiveSample("Superposer des dégradés", 300, 150)}}

### Empiler des dégradés

Il est possible d'empiler différents dégradés. Il suffit que les dégradés sur les couches supérieures ne soient pas complètement opaques pour qu'on puisse voir ceux des couches inférieures.

```html hidden
<div class="empilement-lineaire"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.empilement-lineaire {
  background:
    linear-gradient(217deg, rgb(255 0 0 / 80%), transparent 70.71%),
    linear-gradient(127deg, rgb(0 255 0 / 80%), transparent 70.71%),
    linear-gradient(336deg, rgb(0 0 255 / 80%), transparent 70.71%);
}
```

{{EmbedLiveSample("Empiler des dégradés", 200, 200)}}

### Mélanger des dégradés

En plus de la transparence, de superposer plusieurs dégradés semi-transparents et de superposer des dégradés sur des images d'arrière-plan matricielles, les dégradés peuvent être utilisés avec d'autres effets CSS. Dans cet exemple, les quatre éléments HTML {{HTMLElement("div")}} ont les mêmes deux dégradés complètement opaques comme images d'arrière-plan. Nous appliquons différentes valeurs de propriété CSS {{CSSxRef("background-blend-mode")}} aux trois derniers qui mélangent les deux images d'arrière-plan et de créer ainsi des effets variés.

```html hidden
<div class="original"></div>
<div class="screen"></div>
<div class="overlay"></div>
<div class="difference"></div>
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
div {
  background:
    linear-gradient(to top, red, blue),
    linear-gradient(to right, #5500ff, #00ff55);
}

.screen {
  background-blend-mode: screen;
}

.overlay {
  background-blend-mode: overlay;
}

.difference {
  background-blend-mode: difference;
}
```

{{EmbedLiveSample("Mélanger des dégradés", 120, 120)}}

## Dégradés les dégradés radiaux

Les dégradés radiaux sont similaires aux dégradés linéaires mais permettent d'obtenir un effet qui rayonne à partir d'un point. Il est possible de créer des dégradés circulaires ou elliptiques.

### Un dégradé radial simple

Comme avec les dégradés linéaires, il suffit de deux couleurs pour créer un dégradé radial. Par défaut, le centre du dégradé se situe à la position 50% 50% et le dégradé a la forme d'une ellipse qui correspond aux {{Glossary("aspect ratio", "rapport d'aspect")}} de sa boîte englobante&nbsp;:

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

{{EmbedLiveSample("Un dégradé radial simple", 120, 120)}}

### Positionner les points d'arrêt radiaux

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
  background: radial-gradient(red 10px, yellow 30%, dodgerblue 50%);
}
```

{{EmbedLiveSample("Positionner les points d'arrêt radiaux", 120, 120)}}

### Positionner le centre du dégradé

La position du centre du dégradé peut être définie avec des mots-clés, des pourcentages ou des longueurs. Deux valeurs permettent de placer le centre sur les deux axes. Si une seule valeur est fournie, elle est utilisée pour les deux axes.

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
  background: radial-gradient(at 0% 30%, red 10px, yellow 30%, dodgerblue 50%);
}
```

{{EmbedLiveSample("Positionner le centre du dégradé", 120, 120)}}

### Dimensionner les dégradés radiaux

Contrairement aux dégradés linéaires, vous pouvez définir la taille des dégradés radiaux. Les valeurs possibles sont `closest-corner`, `closest-side`, `farthest-corner` et `farthest-side`, la valeur par défaut étant `farthest-corner`. La taille des cercles peut également être définie à l'aide d'une longueur, et celle des ellipses à l'aide d'une longueur ou d'un pourcentage.

#### Exemple : `closest-side` pour les ellipses

Cet exemple utilise la valeur de taille `closest-side`, ce qui signifie que la taille est déterminée par la distance entre le point de départ (le centre) et le côté le plus proche de la boîte englobante.

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
    dodgerblue 50%,
    beige
  );
}
```

{{EmbedLiveSample("Exemple : `closest-side` pour les ellipses", 240, 100)}}

#### Exemple : `farthest-corner` pour les ellipses

Cet exemple est similaire au précédent, à la différence près que sa taille est définie par `farthest-corner`, ce qui définit la taille du dégradé en fonction de la distance entre le point de départ et le coin le plus éloigné de la boîte englobante par rapport au point de départ.

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
    ellipse farthest-corner at 90% 90%,
    red,
    yellow 10%,
    dodgerblue 50%,
    beige
  );
}
```

{{EmbedLiveSample("Exemple : `farthest-corner` pour les ellipses", 240, 100)}}

#### Exemple : `closest-side` pour les cercles

Cet exemple utilise `closest-side`, ce qui fait que le rayon du cercle correspond à la distance entre le centre du dégradé et le bord le plus proche. Dans ce cas précis, le rayon correspond à la distance entre le centre et le bord inférieur, car le dégradé est placé à 25% de la gauche et à 25% du bas, et la hauteur de l'élément `div` est inférieure à sa largeur.

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
    dodgerblue 50%,
    beige
  );
}
```

{{EmbedLiveSample("Exemple : `closest-side` pour les cercles", 240, 120)}}

#### Exemple : Longueur ou pourcentage pour les ellipses

Uniquement pour les ellipses, vous pouvez définir leur taille à l'aide d'une longueur ou d'un pourcentage. La première valeur correspond au rayon horizontal, la seconde au rayon vertical, où vous utilisez un pourcentage qui correspond à la taille de la boîte dans cette dimension. Dans l'exemple ci-dessous, nous avons utilisé un pourcentage pour le rayon horizontal.

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
    dodgerblue 50%,
    beige
  );
}
```

{{EmbedLiveSample("Exemple : Longueur ou pourcentage pour les ellipses", 240, 120)}}

#### Exemple : Longueur pour les cercles

Pour les cercles, la taille peut être donnée sous forme d'une longueur ({{CSSxRef("&lt;length&gt;")}}), qui correspond au rayon du cercle.

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
  background: radial-gradient(
    circle 50px,
    red,
    yellow 10%,
    dodgerblue 50%,
    beige
  );
}
```

{{EmbedLiveSample("Exemple : Longueur pour les cercles", 240, 120)}}

### Empiler des dégradés radiaux

Tout comme pour les dégradés linéaires, vous pouvez également superposer des dégradés radiaux. Le premier définit se trouve en haut, le dernier en bas.

```html hidden
<div class="radiaux-empliles"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.radiaux-empliles {
  background:
    radial-gradient(circle at 50% 0, rgb(255 0 0 / 50%), transparent 70.71%),
    radial-gradient(circle at 6.7% 75%, rgb(0 0 255 / 50%), transparent 70.71%),
    radial-gradient(circle at 93.3% 75%, rgb(0 255 0 / 50%), transparent 70.71%)
      beige;
  border-radius: 50%;
}
```

{{EmbedLiveSample("Empiler des dégradés radiaux", 200, 200)}}

## Dégradés coniques

La fonction [CSS](/fr/docs/Web/CSS) **`conic-gradient()`** permet de créer une image composée d'un dégradé de couleurs tournant autour d'un point (plutôt qu'une progression radiale). Par exemple, les dégradés coniques peuvent être utilisés pour créer des camemberts et des {{Glossary("color wheel", "cercles chromatiques")}}, mais ils peuvent également être utilisés pour créer des damiers et d'autres effets intéressants.

La syntaxe de `conic-gradient()` est semblable à celle de `radial-gradient()` mais les arrêts de couleur sont placés le long d'un arc plutôt que le long de la ligne émise depuis le centre. Les arrêts de couleur sont exprimés en pourcentages ou en degrés, ils ne peuvent pas être exprimés sous forme de longueurs absolues.

Pour un dégradé radial, la transition entre les couleurs forme une ellipse qui progresse vers l'extérieur dans toutes les directions. Un dégradé conique voit la transition progresser le long de l'arc autour du cercle, dans le sens horaire. À l'instar des dégradés radiaux, il est possible de positionner le centre du dégradé et à l'instar des dégradés linéaires, on peut modifier l'angle du dégradé.

### Un dégradé conique simple

Comme pour les dégradés linéaires et radiaux, il suffit de deux couleurs pour créer un dégradé conique. Par défaut, le centre du dégradé est situé au centre (point 50% 50%) et le début du dégradé commence vers le haut&nbsp;:

```html hidden
<div class="conique-simple"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conique-simple {
  background: conic-gradient(red, blue);
}
```

{{EmbedLiveSample("Un dégradé conique simple", 120, 120)}}

### Positionner le centre du cône

À l'instar des dégradés radiaux, on peut placer le centre d'un dégradé conique à l'aide de mots-clés, de pourcentages ou de longueurs absolues, avec le mot-clé `at`.

```html hidden
<div class="degrade-conique"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.degrade-conique {
  background: conic-gradient(at 0% 30%, red 10%, yellow 30%, dodgerblue 50%);
}
```

{{EmbedLiveSample("Positionner le centre du cône", 120, 120)}}

### Modifier l'angle

Par défaut, les différents arrêts de couleur indiqués sont répartis à équidistance autour du cercle. On peut positionner l'angle de départ du dégradé à l'aide du mot-clé `from`, suivi d'un angle ou d'une longueur. On peut indiquer différentes positions pour les différents arrêts de couleur en précisant un angle ou une longueur à leur suite.

```html hidden
<div class="degrade-conique"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.degrade-conique {
  background: conic-gradient(from 45deg, red, orange 50%, yellow 85%, green);
}
```

{{EmbedLiveSample("Modifier l'angle", 120, 120)}}

## Utiliser la répétition des dégradés

Les fonctions {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}} et {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}} ne prennent pas en charge la répétition automatique des arrêts de couleur. Cependant, les fonctions {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} et {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} sont disponibles pour offrir cette fonctionnalité.

La taille de la ligne ou de l'arc de dégradé qui se répète correspond à la longueur entre la valeur du premier arrêt de couleur et celle du dernier arrêt de couleur. Si le premier arrêt de couleur ne comporte qu'une couleur et aucune longueur d'arrêt, la valeur par défaut est 0. Si le dernier arrêt de couleur ne comporte qu'une couleur et aucune longueur d'arrêt, la valeur par défaut est 100%. Si aucun n'est déclaré, la ligne du dégradé mesure 100%, ce qui signifie que les dégradés linéaires et coniques ne se répètent pas et que le dégradé radial ne se répète que si le rayon du dégradé est plus petit que la distance entre le centre du dégradé et le coin le plus éloigné. Si le premier arrêt de couleur est déclaré et que la valeur est supérieure à 0, le dégradé se répète, car la taille de la ligne ou de l'arc est donnée par la différence entre le premier et le dernier arrêt de couleur, qui vaut alors moins de 100% ou 360 degrés.

### Répéter un dégradé linéaire

Dans cet exemple, on utilise la fonction {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} afin de créer un dégradé linéaire qui se répète le long d'une ligne. Dans ce cas, la ligne du dégradé mesure 10px.

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

{{EmbedLiveSample("Répéter un dégradé linéaire", 120, 120)}}

### Répéter plusieurs dégradés linéaires

Comme les dégradés linéaires et radiaux, il est possible de déclarer plusieurs dégradés, situés les uns sur les autres. Cela n'a d'intérêt que si les dégradés sont partiellement transparents afin de pouvoir voir les couches formées par les autres dégradés. Pour voir les différents dégradés, il est aussi possible d'utiliser des tailles d'arrière-plan différentes ({{CSSxRef("background-size")}}) et avec des positions ({{CSSxRef("background-position")}}) différentes pour chaque image de dégradé. Dans l'exemple qui suit, on utilise la transparence.

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
  background:
    repeating-linear-gradient(
      190deg,
      rgb(255 0 0 / 50%) 40px,
      rgb(255 153 0 / 50%) 80px,
      rgb(255 255 0 / 50%) 120px,
      rgb(0 255 0 / 50%) 160px,
      rgb(0 0 255 / 50%) 200px,
      rgb(75 0 130 / 50%) 240px,
      rgb(238 130 238 / 50%) 280px,
      rgb(255 0 0 / 50%) 300px
    ),
    repeating-linear-gradient(
      -190deg,
      rgb(255 0 0 / 50%) 30px,
      rgb(255 153 0 / 50%) 60px,
      rgb(255 255 0 / 50%) 90px,
      rgb(0 255 0 / 50%) 120px,
      rgb(0 0 255 / 50%) 150px,
      rgb(75 0 130 / 50%) 180px,
      rgb(238 130 238 / 50%) 210px,
      rgb(255 0 0 / 50%) 230px
    ),
    repeating-linear-gradient(
      23deg,
      red 50px,
      orange 100px,
      yellow 150px,
      green 200px,
      blue 250px,
      indigo 300px,
      violet 350px,
      red 370px
    );
}
```

{{EmbedLiveSample("Répéter plusieurs dégradés linéaires", 600, 400)}}

### Créer un tartan

Pour créer un tartan, nous superposons plusieurs dégradés avec de la transparence. Nous utilisons la syntaxe des arrêts de couleur à positions multiples&nbsp;:

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
  background:
    repeating-linear-gradient(
      90deg,
      transparent 0 50px,
      rgb(255 127 0 / 25%) 50px 56px,
      transparent 56px 63px,
      rgb(255 127 0 / 25%) 63px 69px,
      transparent 69px 116px,
      rgb(255 206 0 / 25%) 116px 166px
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0 50px,
      rgb(255 127 0 / 25%) 50px 56px,
      transparent 56px 63px,
      rgb(255 127 0 / 25%) 63px 69px,
      transparent 69px 116px,
      rgb(255 206 0 / 25%) 116px 166px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent 0 5px,
      rgb(143 77 63 / 25%) 5px 10px
    ),
    repeating-linear-gradient(
      45deg,
      transparent 0 5px,
      rgb(143 77 63 / 25%) 5px 10px
    );
}
```

{{EmbedLiveSample("Créer un tartan", 200, 200)}}

### Répéter des dégradés radiaux

Ici, on utilise la fonction {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} afin de créer un dégradé radial qui se répète. Les couleurs utilisées forment un cycle lorsque le motif unitaire recommence.

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

{{EmbedLiveSample("Répéter des dégradés radiaux", 120, 120)}}

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
        rgb(0 0 0 / 50%),
        rgb(0 0 0 / 50%) 15px,
        rgb(255 255 255 / 50%) 15px,
        rgb(255 255 255 / 50%) 30px
      )
      top left no-repeat,
    repeating-radial-gradient(
        ellipse at 20% 50%,
        rgb(0 0 0 / 50%),
        rgb(0 0 0 / 50%) 10px,
        rgb(255 255 255 / 50%) 10px,
        rgb(255 255 255 / 50%) 20px
      )
      top left no-repeat yellow;
  background-size:
    200px 200px,
    150px 150px;
}
```

{{EmbedLiveSample("Répéter plusieurs dégradés radiaux", 250, 150)}}

### Répéter des dégradés coniques

Cet exemple utilise la fonction {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} afin de créer un dégradé qui tourne de manière répétée autour d'un point central. Dans ce cas, les arrêts de couleur déclarés sont répétés quatre fois.

```html hidden
<div class="repeating-conic"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-conic {
  background: repeating-conic-gradient(
    #66ccff 0% 8.25%,
    #6633ff 8.25% 16.5%,
    #ff3399 16.5% 25%
  );
}
```

{{EmbedLiveSample("Répéter des dégradés coniques", 120, 120)}}

### Répéter plusieurs dégradés coniques

Comme les dégradés linéaires et radiaux, il est possible de superposer plusieurs dégradés coniques les uns sur les autres, créant des effets intéressants en utilisant des valeurs différentes pour `at <position>` afin que les dégradés coniques ne se chevauchent pas au centre et des valeurs différentes pour `from <angle>` afin que les effets de répétition ne s'alignent pas. Cet exemple superpose trois dégradés radiaux semi-transparents qui répètent chacun leur schéma de couleurs quatre fois. Pour rendre les dégradés chevauchants visibles, il faut soit s'assurer que les couleurs des dégradés situés au-dessus de la pile sont partiellement transparentes, soit utiliser la propriété CSS {{CSSxRef("background-blend-mode")}}.

```html hidden
<div class="multi-repeating-conic"></div>
```

```css hidden
div {
  width: 250px;
  height: 250px;
}
```

```css
.multi-repeating-conic {
  background:
    repeating-conic-gradient(
      from 0deg at 80% 50%,
      #5691f580 0% 8.25%,
      #b338ff80 8.25% 16.5%,
      #f8305880 16.5% 25%
    ),
    repeating-conic-gradient(
      from 15deg at 50% 50%,
      #e856f580 0% 8.25%,
      #ff384c80 8.25% 16.5%,
      #e7f83080 16.5% 25%
    ),
    repeating-conic-gradient(
      from 0deg at 20% 50%,
      #f58356ff 0% 8.25%,
      #caff38ff 8.25% 16.5%,
      #30f88aff 16.5% 25%
    );
}
```

{{EmbedLiveSample("Répéter plusieurs dégradés coniques", 250, 250)}}

## Voir aussi

- Les fonctions de dégradés&nbsp;: {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- Types de donnée CSS associés aux dégradés&nbsp;: {{CSSxRef("gradient")}}, {{CSSxRef("image")}}
- Propriétés CSS associées aux dégradés&nbsp;: {{CSSxRef("background")}}, {{CSSxRef("background-image")}}
- [Galerie de motifs de dégradés CSS, par Lea Verou <sup>(angl.)</sup>](https://projects.verou.me/css3patterns/)
- [Générateur de dégradés CSS <sup>(angl.)</sup>](https://cssgenerator.org/gradient-css-generator.html)
- [Générateur de dégradés CSS avancé <sup>(angl.)</sup>](https://colorbeta.com/)
- [Générateur de dégradés HDR <sup>(angl.)</sup>](https://gradient.style/)
