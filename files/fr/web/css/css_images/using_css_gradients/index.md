---
title: Utilisation de dégradés CSS
slug: Web/CSS/CSS_Images/Using_CSS_gradients
translation_of: Web/CSS/CSS_Images/Using_CSS_gradients
original_slug: Web/CSS/Utilisation_de_dégradés_CSS
---
{{CSSRef}}

Les **dégradés CSS** sont représentés par le type de donnée {{cssxref("&lt;gradient&gt;")}} qui est un sous-ensemble du type {{cssxref("&lt;image&gt;")}}. L'utilisation de dégradés CSS permet d'afficher des transitions douces entre deux couleurs ou plus. Il existe trois sortes de degradés : les dégradés linéaires (cf. {{cssxref("linear-gradient")}}, les dégradés radiaux (cf. {{cssxref("radial-gradient")}}) et les dégradés coniques (cf. {{cssxref("conic-gradient")}}).

Les dégradés peuvent être répétés avec {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}} et {{cssxref("repeating-conic-gradient")}}.

Les dégradés peuvent être utilisés à chaque endroit où on peut utiliser une image (par exemple les arrière-plans). En évitant d'utiliser des images pour ces effets, le temps de téléchargement et la bande passante utilisée sont réduits. En outre, comme le dégradé est généré par le navigateur, les objets concernés se comporteront mieux en cas de zoom et votre mise en page peut être ajustée de manière plus flexible.

Dans cet article, nous verrons d'abord les dégradés linéaires et détaillerons les fonctionnalités associées avant de passer aux dégradés radiaux, coniques et à leurs formes répétées.

## Dégradés linéaires

Pour créer un dégradé linéaire, définissez un point de départ et une direction (sous la forme d'un angle) selon laquelle l'effet de dégradé sera appliqué.

### Dégradés linéaires simples

Voici un dégradé linéaire qui commence au centre (horizontalement) et en haut (verticalement), du bleu vers le blanc.

#### CSS

```css
.linear-gradient {
  background: linear-gradient(blue, white);
}

div {
  width: 120px;
  height: 120px;
}
```

#### HTML

```html
<div class="linear-gradient"></div>
```

#### Résultat

{{EmbedLiveSample("Dégradés_linéaires_simples",120,120)}}

### Appliquer un dégradé de gauche à droite

#### CSS

```css
.linear-gradient {
  background: linear-gradient(to right, blue, white);
}

div {
  width: 120px;
  height: 120px;
}
```

#### HTML

```html
<div class="linear-gradient"></div>
```

#### Résultat

{{EmbedLiveSample("Appliquer_un_dégradé_de_gauche_à_droite",120,120)}}

### Appliquer un dégradé en diagonale

#### CSS

```css
.linear-gradient {
  background: linear-gradient(to bottom right, blue, white);
}

div {
  width: 200px;
  height: 100px;
}
```

#### HTML

```html
<div class="linear-gradient"></div>
```

#### Résultat

{{EmbedLiveSample("Appliquer_un_dégradé_en_diagonale",200,100)}}

### Utilisation d’angles

Si aucun angle n'est spécifié, il sera déterminé automatiquement à partir de la position de départ. Si vous désirez un meilleur contrôle sur la direction du dégradé, vous pouvez définir cet angle précisément.

#### CSS

```css
.linear-gradient {
  background: linear-gradient(70deg, blue, pink);
}

div {
  width: 120px;
  height: 120px;
}
```

#### HTML

```html
<div class="linear-gradient"></div>
```

#### Résultat

{{EmbedLiveSample("Utilisation_d’angles",120,120)}}

L'angle est spécifié entre une ligne verticale et la ligne de dégradé, dans le sens inverse des aiguilles d'une montre. Autrement dit, `0deg` crée un dégradé vertical de bas en haut, tandis que `90deg` génère un dégradé horizontal de la gauche vers la droite :

![](linear_red_angles.png)

```css
background: linear-gradient(<angle>, red, white);
```

## Créer des effets et manipuler les couleurs

### Utiliser plus de deux couleurs

Les dégradés CSS ne sont pas limités à deux couleurs, il est possible d'en utiliser autant que souhaité :

#### CSS

```css
.linear-gradient {
  background: linear-gradient(red, yellow, blue, orange);
}

div {
  width: 120px;
  height: 120px;
}
```

#### HTML

```html
<div class="linear-gradient"></div>
```

#### Résultat

{{EmbedLiveSample("Utiliser_plus_de_deux_couleurs",120,120)}}

### Arrêts de couleurs

Les arrêts de couleurs sont des points sur la ligne de dégradé qui doivent avoir une couleur précise. Leur emplacement peut être spécifié sous la forme d'un pourcentage de la longueur de la ligne, ou d'une longueur absolue. Vous pouvez en spécifier autant que vous voulez pour obtenir l'effet désiré. Si vous spécifiez un pourcentage, `0%` indique le point de départ, et `100%` le point d'arrivée ; il est cependant possible d'utiliser des valeurs en dehors de cet intervalle si nécessaire pour obtenir l'effet désiré.

#### CSS

```css
.linear-gradient {
  background: linear-gradient(to left, lime, lime 28px, red 77%, cyan);
}

div {
  width: 120px;
  height: 120px;
}
```

#### HTML

```html
<div class="linear-gradient"></div>
```

#### Résultat

{{EmbedLiveSample("Arrêts_de_couleurs",120,120)}}

Notez que la première et la dernière couleur n'indiquent pas d'emplacement ; en conséquence les valeurs 0% et 100% sont assignées automatiquement. La couleur centrale indique un emplacement à 80%, ce qui la place proche du bas.

### Utiliser des indications de couleurs

Par défaut, les dégradés passent linéairement d'une couleur à une autre. On peut également utiliser une indication afin de définir l'emplacement où la couleur médiane sera atteinte. Dans l'exemple qui suit, plutôt que d'attendre la moitié de la transition au milieu, on la place à 10% de l'axe.

#### CSS

```css
div {
  width:120px;
  height: 120px;
  float: left;
  margin-right: 10px;
}

.color-hint {
  background: linear-gradient(blue, 10%, pink);
}

.simple-linear {
  background: linear-gradient(blue, pink);
}
```

#### HTML

```html
<div class="color-hint"></div>
<div class="simple-linear"></div>
```

#### Résultat

{{EmbedLiveSample("Utiliser_des_indications_de_couleurs",120,120)}}

### Transparence et dégradés

Les gradients gèrent la transparence. Vous pouvez l'utiliser, par exemple, en superposant plusieurs fonds pour créer des effets sur les images. Par exemple :

#### CSS

```css
.linear-gradient {
  background: linear-gradient(to right, transparent, mistyrose),
    url("https://mdn.mozillademos.org/files/15525/critters.png");
}

div {
  width: 300px;
  height: 150px;
}
```

#### HTML

```html
<div class="linear-gradient"></div>
```

#### Résultat

{{EmbedLiveSample("Transparence_et_dégradés",300,150)}}

Les fonds sont superposés avec le premier fond spécifié au dessus, et chaque fond supplémentaire par dessous.

### Créer des lignes franches

Pour créer une ligne franche entre deux couleurs et avoir deux bandes plutôt qu'un dégradé progressif, on peut définir deux points d'arrêt de couleur au même endroit. Dans l'exemple suivant, on a deux couleurs pour un même emplacement de point d'arrêt situé à `50%`:

```html hidden
<div class="striped"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.striped {
   background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);
}
```

{{EmbedLiveSample('Créer_des_lignes_franches', 120, 120)}}

### Créer des bandes de couleur

Pour inclure une bande d'une couleur donnée, sans transition au sein du dégradé, on utilisera deux points d'arrêt successif avec la même couleur. Ainsi, la couleur sera atteinte au premier point d'arrêt puis sera conservée jusqu'au suivant.

```html hidden
<div class="multiposition-stops"></div>
<div class="multiposition-stop2"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left; margin-right: 10px; box-sizing: border-box;
}
```

```css
.multiposition-stops {
   background: linear-gradient(to left,
       lime 20%, red 30%, red 45%, cyan 55%, cyan 70%, yellow 80% );
   background: linear-gradient(to left,
       lime 20%, red 30% 45%, cyan 55% 70%, yellow 80% );
}
.multiposition-stop2 {
   background: linear-gradient(to left,
      lime 25%, red 25%, red 50%, cyan 50%, cyan 75%, yellow 75% );
   background: linear-gradient(to left,
      lime 25%, red 25% 50%, cyan 50% 75%, yellow 75% );
}
```

{{EmbedLiveSample('Créer_des_bandes_de_couleur', 120, 120)}}

Dans le premier exemple ci-avant, le bleu vert commence au début puis progresse jusqu'à 20% avant de transitionner vers le rouge pendant les 10% qui suivent. Le rouge reste vif entre 30% et 45% avant de transitionner vers un cyan pendant 15% etc.

Dans le deuxième exemple, le deuxième point d'arrêt pour chaque couleur est situé au même emplacement que le premier point d'arrêt pour la couleur suivante et on obtient donc des bandes successives.

### Contrôler la progression du dégradé

Par défaut, un dégradé progresse linéairement entre les deux couleurs et la couleur médiane est atteinte à la moitié du parcours. Toutefois, si on veut atteindre cette couleur médiane plus tôt ou plus tard, on peut fournir une indication permettant de définir l'emplacement du milieu de la transition. Dans l'exemple qui suit, la couleur est à la moitié de la transition entre le vert et le cyan à 20% du dégradé (et non à 50%). Le deuxième exemple ne contient pas de telle indication et la transition s'effectue linéairement. Vous pouvez ainsi observer l'impact d'une telle indication.

```html hidden
<div class="colorhint-gradient"></div> <div class="regular-progression"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left; margin-right: 10px; box-sizing: border-box;
}
```

```css
.colorhint-gradient {
  background: linear-gradient(to top, black, 20%, cyan);
}
.regular-progression {
  background: linear-gradient(to top, black, cyan);
}
```

{{EmbedLiveSample("Contrôler_la_progression_du_dégradé", 120, 120)}}

### Empilement de dégradés

Il est possible d' « empiler » différents dégradés. Il suffit que les dégradés sur les couches supérieures ne soient pas complètement opaques pour qu'on puisse voir ceux des couches inférieures.

#### CSS

```css
.linear-gradient {
  background:
    linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
}

div {
  width: 100px;
  height: 100px;
}
```

#### HTML

```html
<div class="linear-gradient"></div>
```

#### Résultat

{{EmbedLiveSample("Empilement_de_dégradés")}}

## Dégradés radiaux

Les dégradés radiaux sont similaire aux dégradés linéaires mais permettent d'obtenir un effet qui rayonne à partir d'un point. Il est possible de créer des dégradés circulaires ou elliptiques.

### Un dégradé radial simple

> **Note :** Dans les exemples suivants, nous continuons d'utiliser le même {{HTMLElement("div")}} et, pour ne pas surcharger la lecture, n'afficherons plus que la règle CSS spécifique au dégradé.

De la même façon qu'avec les dégradés linéaires, il suffit de deux couleurs pour créer un dégradé radial.

```html hidden
<div class="simple-radial"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simple-radial {
  background: radial-gradient(red, blue);
}
```

{{EmbedLiveSample('Un_dégradé_radial_simple', 120, 120)}}

### Positionner les points d’arrêt

À nouveau, comme pour les dégradés linéaires, il est possible de placer des arrêts de couleur en précisant un pourcentage ou une distance.

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red 10px, yellow 30%, #1e90ff 50%);
}
```

{{EmbedLiveSample("Positionner_les_points_d’arrêt", 120, 120)}}

### Positionner le centre du dégradé

La position du centre du dégradé peut être définie avec des mots-clés, des pourcetages ou des longueurs. Deux valeurs permettent de placer le centre sur les deux axes. Si une seule valeur est fournie, elle sera utilisée pour les deux axes.

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 240px;
}
```

```css
.radial-gradient {
  background: radial-gradient(at 0% 30%, red 10px, yellow 30%, #1e90ff 50%);
}
```

{{EmbedLiveSample('Utiliser_closest-side_pour_les_ellipses', 240, 100)}}

### Dimensionner les dégradés radiaux

À la différence des dégradés linéaires, il est possible de définir la taille d'un dégradé radial.

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
  background: radial-gradient(ellipse closest-side,
      red, yellow 10%, #1e90ff 50%, beige);
}
```

{{EmbedLiveSample('Utiliser_closest-side_pour_les_ellipses', 240, 100)}}

#### Utiliser `farthest-corner` pour les ellipses

Cet exemple ressemble fortement au précédent mais on utilise ici `farthest-corner` qui crée un dégradé dont la distance est celle entre le point de départ central et le côté le plus éloigné de la boîte englobante.

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
  background: radial-gradient(ellipse farthest-corner,
      red, yellow 10%, #1e90ff 50%, beige);
}
```

{{EmbedLiveSample('Utiliser_farthest-corner_pour_les_ellipses', 240, 100)}}

#### Utiliser `closest-side` pour les cercles

Pour cet exemple, on utilise `closest-side` qui permet de créer un cercle dont le rayon est la distance entre le point de départ central et le côté le plus proche de la boîte englobante. Ici, le rayon du cercle est donc la moitié de la hauteur de la boîte car les bords haut et bas sont équidistants du point de départ et plus proches que les côtés gauche et droit.

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
  background: radial-gradient(circle closest-side,
      red, yellow 10%, #1e90ff 50%, beige);
}
```

{{EmbedLiveSample('Utiliser_closest-side_pour_les_cercles', 240, 120)}}

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
      radial-gradient(circle at 50% 0,
        rgba(255,0,0,.5),
        rgba(255,0,0,0) 70.71%),
      radial-gradient(circle at 6.7% 75%,
        rgba(0,0,255,.5),
        rgba(0,0,255,0) 70.71%),
      radial-gradient(circle at 93.3% 75%,
        rgba(0,255,0,.5),
        rgba(0,255,0,0) 70.71%) beige;
  border-radius: 50%;
}
```

{{EmbedLiveSample('Empiler_des_dégradés_radiaux', 200, 200)}}

## Dégradés coniques

La fonction **`conic-gradient()`** permet de créer une image composée d'un dégradé de couleurs tournant autour d'un point (plutôt qu'une progression radiale). On pourra ainsi utiliser des dégradés coniques pour créer des camemberts ou des éventails de couleurs.

La syntaxe de `conic-gradient()` est semblable à celle de `radial-gradient()` mais les arrêts de couleur seront placés le long d'un arc plutôt que le long de la ligne émise depuis le centre. Les arrêts de couleur seront exprimés en pourcentages ou en degrés, ils ne pourront pas être exprimés sous forme de longueurs absolues.

Pour un dégradé radial, la transition entre les couleurs forme une ellipse qui progresse vers l'extérieur dans toutes les directions. Un dégradé conique verra la transition progresser le long de l'arc autour du cercle, dans le sens horaire. À l'instar des dégradés radiaux, il est possible de positionner le centre du dégradé et à l'instar des dégradés linéaires, on peut modifier l'angle du dégradé.

### Un dégradé conique simple

Comme pour les dégradés linéaires et radiaux, il suffit de deux couleurs pour créer un dégradé conique. Par défaut, le centre du dégradé sera situé au centre (point 50% 50%) et le début du dégradé commencera vers le haut :

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

{{EmbedLiveSample('Un_dégradé_conique_simple', 120, 120)}}

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

{{EmbedLiveSample('Positionner_le_centre', 120, 120)}}

### Modifier l’angle

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
  background: conic-gradient(from 45deg, red, orange, yellow, green, blue, purple);
}
```

{{EmbedLiveSample("Modifier_l’angle", 120, 120)}}

## Répéter des dégradés

Les propriétés {{cssxref("linear-gradient")}}, {{cssxref("radial-gradient")}} et {{cssxref("conic-gradient")}} ne permettent pas automatiquement de répéter les arrêts de couleur. Toutefois, les fonctions {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}} et {{cssxref("repeating-conic-gradient")}} offrent cette fonctionnalité.

La taille de la portion (ligne ou arc) répétée est donnée par la longueur (ou l'arc) entre le premier arrêt de couleur et le dernier arrêt de couleur. Si on n'indique pas de coordonnées pour le premier et le dernier arrêts, ceux-ci prendront respectivement 0 et 100%. Aussi, le motif unitaire couvrira l'ensemble du dégradé et il n'y aura pas de répétition. Il faut donc indiquer au moins un des deux arrêts (entre le premier et le dernier) pour créer une répétition.

### Répéter un dégradé linéaire

Dans cet exemple, on utilise la fonction {{cssxref("repeating-linear-gradient")}} afin de créer un dégradé linéaire qui se répète le long d'une ligne. Les couleurs forment un cycle lorsque le motif se répète.

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
  background: repeating-linear-gradient(-45deg, red, red 5px, blue 5px, blue 10px);
}
```

{{EmbedLiveSample('Répéter_un_dégradé_linéaire', 120, 120)}}

### Répéter plusieurs dégradés linéaires

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
      repeating-linear-gradient(190deg, rgba(255, 0, 0, 0.5) 40px,
        rgba(255, 153, 0, 0.5) 80px, rgba(255, 255, 0, 0.5) 120px,
        rgba(0, 255, 0, 0.5) 160px, rgba(0, 0, 255, 0.5) 200px,
        rgba(75, 0, 130, 0.5) 240px, rgba(238, 130, 238, 0.5) 280px,
        rgba(255, 0, 0, 0.5) 300px),
      repeating-linear-gradient(-190deg, rgba(255, 0, 0, 0.5) 30px,
        rgba(255, 153, 0, 0.5) 60px, rgba(255, 255, 0, 0.5) 90px,
        rgba(0, 255, 0, 0.5) 120px, rgba(0, 0, 255, 0.5) 150px,
        rgba(75, 0, 130, 0.5) 180px, rgba(238, 130, 238, 0.5) 210px,
        rgba(255, 0, 0, 0.5) 230px),
      repeating-linear-gradient(23deg, red 50px, orange 100px,
        yellow 150px, green 200px, blue 250px,
        indigo 300px, violet 350px, red 370px);
}
```

{{EmbedLiveSample('Répéter_plusieurs_dégradés_linéaires', 600, 400)}}

### Créer un tartan

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
      repeating-linear-gradient(90deg, transparent, transparent 50px,
        rgba(255, 127, 0, 0.25) 50px, rgba(255, 127, 0, 0.25) 56px,
        transparent 56px, transparent 63px,
        rgba(255, 127, 0, 0.25) 63px, rgba(255, 127, 0, 0.25) 69px,
        transparent 69px, transparent 116px,
        rgba(255, 206, 0, 0.25) 116px, rgba(255, 206, 0, 0.25) 166px),
      repeating-linear-gradient(0deg, transparent, transparent 50px,
        rgba(255, 127, 0, 0.25) 50px, rgba(255, 127, 0, 0.25) 56px,
        transparent 56px, transparent 63px,
        rgba(255, 127, 0, 0.25) 63px, rgba(255, 127, 0, 0.25) 69px,
        transparent 69px, transparent 116px,
        rgba(255, 206, 0, 0.25) 116px, rgba(255, 206, 0, 0.25) 166px),
      repeating-linear-gradient(-45deg, transparent, transparent 5px,
        rgba(143, 77, 63, 0.25) 5px, rgba(143, 77, 63, 0.25) 10px),
      repeating-linear-gradient(45deg, transparent, transparent 5px,
        rgba(143, 77, 63, 0.25) 5px, rgba(143, 77, 63, 0.25) 10px);
}
```

{{EmbedLiveSample('Créer_un_tartan', 200, 200)}}

### Répéter des dégradés radiaux

Ici, on utilise la fonction {{cssxref("repeating-radial-gradient")}} afin de créer un dégradé radial qui se répète. Les couleurs utilisées forment un cycle lorsque le motif unitaire recommence.

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
  background: repeating-radial-gradient(black, black 5px, white 5px, white 10px);
}
```

{{EmbedLiveSample('Répéter_des_dégradés_radiaux', 120, 120)}}

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
      repeating-radial-gradient(ellipse at 80% 50%,rgba(0,0,0,0.5),
        rgba(0,0,0,0.5) 15px, rgba(255,255,255,0.5) 15px,
        rgba(255,255,255,0.5) 30px) top left no-repeat,
      repeating-radial-gradient(ellipse at 20% 50%,rgba(0,0,0,0.5),
        rgba(0,0,0,0.5) 10px, rgba(255,255,255,0.5) 10px,
        rgba(255,255,255,0.5) 20px) top left no-repeat yellow;
  background-size: 200px 200px, 150px 150px;
}
```

{{EmbedLiveSample('Répéter_plusieurs_dégradés_radiaux', 250, 150)}}

## Voir aussi

- Les fonctions de manipulation des dégradés

  - {{cssxref("linear-gradient")}}, {{cssxref("radial-gradient")}}, {{cssxref("conic-gradient")}}, {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}}, {{cssxref("repeating-conic-gradient")}}

- Les types de donnée CSS relatifs aux dégradés

  - {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}

- Certaines propriétés CSS qui permettent d'utiliser des dégradés

  - {{cssxref("background")}}, {{cssxref("background-image")}}

- [Une bibliothèque de motifs de dégradés CSS, créée par Lea Verou](https://lea.verou.me/css3patterns/)
- [Un générateur de dégradé CSS](https://cssgenerator.org/gradient-css-generator.html)
