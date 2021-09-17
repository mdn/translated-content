---
title: Redimensionnement d'arrière-plans SVG
slug: Web/CSS/Scaling_of_SVG_backgrounds
tags:
  - CSS
  - Guide
  - SVG
translation_of: Web/CSS/Scaling_of_SVG_backgrounds
original_slug: Web/CSS/Redimensionnement_arrière-plans_SVG
---
Les images SVG sont très flexibles et lorsqu'on les utilise en CSS avec les propriétés {{cssxref("background-image")}} et {{cssxref("background-size")}}, il faut s'assurer de considérer les différents aspects qui leurs sont propres. Dans cet article, on décrit comment les images SVG sont redimensionnées grâce à ces propriétés.

## Un algorithme simple

Dans la plupart des cas, l'algorithme utilisé pourra être réduit à ces quatre règles. Ces règles ne sont pas exhaustives et ne couvrent pas certains cas aux limites mais cela sera suffisant ici :

1.  Si {{cssxref("background-size")}} définit une dimension fixe (des pourcentages ou des unités relatives fixées par le contexte), cette dimension l'emporte.
2.  Si l'image possède des proportions intrinsèques (autrement dit, si le ratio largeur/hauteur est constant : 16:9, 4:3, 2.39:1, 1:1), l'arrière-plan sera affiché en conservant ces proportions.
3.  Si l'image définit une taille et que celle-ci n'est pas modifiée par une contrainte quelconque, cette taille l'emporte.
4.  Dans tous les autres cas, l'image est affichée avec la taille de la zone dédiée à l'arrière-plan.

On notera ici que l'algorithme ne prend en cas que les dimensions et/ou les proportions de l'image (leur absence éventullement). Ainsi, une image SVG dont les dimensions sont fixées sera traitée comme une image matricielle de la même taille.

## Fichiers d'exemples

Avant d'aller plus loin dans l'exploration des résultats avec {{cssxref("background-size")}}, il serait judicieux de disposer de différentes images sources avec différents paramètres de dimensions, proportions, etc.

Pour chaque cas d'exemple fourni ci-après, l'image est affichée dans une boîte carrée de 150 pixels et un lien est fourni vers le fichier SVG correspondant.

### Image sans dimension ni proportion

Cette image ne possède ni dimension ni proportion. Quelle que soit sa taille, il n'y aura pas de ratio largeur/hauteur particulier. On a ici une image qui forme un dégradé, quelles que soient les dimensions et la proportion de l'écran.

![](no-dimensions-or-ratio.png)

[Fichier SVG source](https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3469/6587a382ffb2c944462a6b110b079496/no-dimensions-or-ratio.svg "no-dimensions-or-ratio.svg")

### Image sans proportion avec une dimension fixée

Cette image mesure 100 pixels de large mais n'a pas de hauteur ni de proportion intrinsèque. On a ainsi une bande d'arrière-plan qui peut être étirée sur toute la hauteur d'un bloc.

![](100px-wide-no-height-or-ratio.png)

[Fichier SVG source](https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3468/af73bea307a10ffe2559df42fad199e3/100px-wide-no-height-or-ratio.svg "100px-wide-no-height-or-ratio.svg")

### Image avec une dimension fixée et des proportions intrinsèques

Cette image mesure 100 pixels de haut mais n'a pas de largeur fixée. Elle définit également une proportion de 3:4. Ainsi, le rapport largeur/hauteur sera toujours 3/4.

On a ici un cas très proche de l'image pour laquelle on définit une largeur et une hauteur car, une fois qu'on a une dimension et une proportion, la deuxième dimension est implicite. Cela n'en reste pas moins un exemple utile.

![](100px-height-3x4-ratio.png)

[Fichier SVG source](https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3467/fd0c534c506be06d52f0a954a59863a6/100px-height-3x4-ratio.svg "100px-height-3x4-ratio.svg")

### Image sans largeur ni hauteur mais avec des proportions intrinsèques

Cette image n'indique pas de hauteur ou de largeur mais un ratio intrinsèque de 1:1. On obtiendra toujours un carré (qui pourra être utilisé comme une icône) pour n'importe quelle taille : 32x32, 128x128, or 512x512.

![](no-dimensions-1x1-ratio.png)

[Fichier SVG source](https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3466/a3398e03c058d99fb2b7837167cdbc26/no-dimensions-1x1-ratio.svg "no-dimensions-1x1-ratio.svg")

## Exemples de redimensionnement

Appliquons maintenant différents redimensionnements sur ces images. Pour chacun des exemples qui suivent, les rectangles dessinés font 300 pixels de large et 200 pixels de haut. De plus, on utilise {{cssxref("background-repeat")}} avec `no-repeat` pour plus de clarté..

> **Note :** Les images montrées ci-après illustrent le rendu **attendu**. Les navigateurs peuvent ne pas produire le bon résultat.

### Indiquer des dimensions fixées sur les deux axes

Si on utilise {{cssxref("background-size")}} pour indiquer la longueur et la largeur de l'image, celles-ci seront toujours utilisées (cf. la règle n°1 précédemment énoncée). Autrement dit, l'image sera toujours étirée pour obtenir ces dimensions, quelles que soient les dimensions initiales de l'image ou ses proportions.

#### SVG source : Aucune dimension ni proportion

Avec ces déclarations CSS :

```css
background: url(no-dimensions-or-ratio.svg);
background-size: 125px 175px;
```

On doit obtenir un résultat semblable à :

![](fixed-no-dimensions-or-ratio.png)

#### SVG source : Une dimension définie et aucune proportion

Avec ces déclarations CSS :

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: 250px 150px;
```

On doit obtenir un résultat semblable à :

![](fixed-100px-wide-no-height-or-ratio.png)

#### SVG source : Une dimension définie et des proportions intrinsèques

Avec ces déclarations CSS :

```css
background: url(100px-height-3x4-ratio.svg);
background-size: 275px 125px;
```

On doit obtenir un résultat semblable à :

![](fixed-100px-height-3x4-ratio.png)

#### SVG source : Aucune largeur ni hauteur définie mais des proportions intrinsèques

Avec ces déclarations CSS :

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: 250px 100px;
```

On doit obtenir un résultat semblable à :

![](fixed-no-dimensions-1x1-ratio.png)

### Utiliser `contain` ou `cover`

En utilisant la valeur `cover` pour {{cssxref("background-size")}}, l'image sera réduite au maximum pour couvrir toute la zone de l'arrière-plan. `contain` fonctionne de façon symétrique, l'image est agrandie autant que possible sans être rognée par la zone de l'arrière-plan.

Pour une image avec des proportions intrinsèques, une seule dimension suffira à déterminer la taille pour `cover`/`contain`. En revanche, sans ratio, ce n'est pas suffisant et il faut donc utiliser les contraintes de la zone de l'arrière-plan.

#### SVG source : Aucune dimension ni proportion

Si une image n'a ni dimensions définie, ni proportions définies, les règles 2 ou 3 ne pourront pas s'appliquer. La règle 4 est donc utilisée et l'image couvre toute la zone (ce qui satisfait d'ailleurs les différentes contraintes).

```css
background: url(no-dimensions-or-ratio.svg);
background-size: contain;
```

Le résultat obtenu sera :

![](no-dimensions-or-ratio-contain.png)

#### SVG source : Une dimension définie et aucune proportion

De même si l'image possède une dimension mais aucune proportion, la règle 4 sera appliquée : l'image est ainsi redimensionnée pour couvrir toute la zone.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: contain;
```

Le résultat obtenu sera :

![](100px-wide-no-height-or-ratio-contain.png)

#### SVG source : Une dimension définie et des proportions intrinsèques

Ici, on a des proportions intrinsèques. Dans ce cas, la règle 1 n'est pas pertinente et on utilise donc la règle 2 : le ratio est conservé (tout en respectant les consignes de `contain` ou `cover`). Ainsi, avec `contain`, la boîte de 300x200 et le ratio de 3:4 entraîneront le dessin d'un arrière-plan de 150x200.

##### `contain`

```css
background: url(100px-height-3x4-ratio.svg);
background-size: contain;
```

Le résultat obtenu sera :

![](100px-height-3x4-ratio-contain.png)

On voit ici que toute l'image est affichée et est contenue dans la boîte sans être rognée.

##### `cover`

```css
background: url(100px-height-3x4-ratio.svg);
background-size: cover;
```

Le résultat obtenu sera :

![](100px-height-3x4-ratio-cover.png)

Dans ce cas, le ratio 3:4 est conservé et l'image est étirée Here, the 3:4 ratio is preserved while still stretching the image to fill the entire box. That causes the bottom of the image to be clipped away.

#### SVG source : Aucune dimension mais des proportions intrinsèques

On obtient des résultats analogues lorsqu'on manipule une image sans dimension intrinsèque mais avec des proportions intrinsèques.

##### `contain`

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: contain;
```

Le résultat ressemblera à :

![](no-dimensions-1x1-ratio-contain.png)

On voit ici que l'image est redimensionnée à la plus petite taille tout en conservant le ratio 1:1.

##### `cover`

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: cover;
```

Le résultat ressemblera à :

![](no-dimensions-1x1-ratio-cover.png)

Ici, l'image est dimensionnée afin de couvrir la plus grande surface avec le ratio 1:1.

### Utiliser `auto` pour les deux axes

Si {{cssxref("background-size")}} vaut `auto` ou `auto auto`, ce sera la règle n°2 qui s'appliquera : les proportions intrinsèques devront être conservées.

#### SVG source : Aucune dimension ni proportion intrinsèque

Lorsque l'image n'a aucune proportion ni dimension, ce sera la dernière règle qui s'appliquera : l'image couvrira toute la surface de la zone.

```css
background: url(no-dimensions-or-ratio.svg);
background-size: auto auto;
```

Voici le résultat obtenu :

![](auto-no-dimensions-or-ratio.png)

#### SVG source : une dimension mais aucune proportion intrinsèque

S'il n'y a aucune proportion définie mais qu'une dimension est fournie, la règle n°3 s'appliquera et l'image sera affichée avec ces dimensions.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: auto auto;
```

Voici le résultat obtenu :

![](auto-100px-wide-no-height-or-ratio.png)

Ici, on voit que la largeur définie par le fichier SVG (100 pixels) est respectée. L'image s'étend sur toute la hauteur de la zone de l'arrière-plan car elle n'est pas définie (explicitement dans les déclarations ou intrinsèquement via l'image).

#### SVG source : une dimension et des proportions intrinsèques

Si on dispose de proportions intrinsèques et d'une dimension fixée, les deux dimensions sont alors définies.

```css
background: url(100px-height-3x4-ratio.svg);
background-size: auto auto;
```

Le résultat sera le suivant :

![](auto-100px-height-3x4-ratio.png)

Cette image mesure 100 pixels de haut et possède des proportions intrinsèques avec un ratio de 3:4. La largeur vaut donc 75 pixels et c'est ainsi qu'elle est affichée avec `auto`.

#### SVG source : Aucune dimension définie mais des proportions intrinsèques

Lorsqu'un ratio s'applique sans dimension, c'est la règle n°2 qui s'applique. L'image est affichée comme pour `contain`.

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: auto auto;
```

Le résultat ressemblera à :

![](auto-no-dimensions-1x1-ratio.png)

### Utiliser `auto` et une dimension fixée

Avec la première règle, les dimensions définies sont toujours utilisées et il faut donc utiliser les autres règles pour déterminer la seconde dimension.

#### SVG source : aucune dimension ni proportion intrinsèque

Si l'image ne possède ni dimension ni proportion intrinsèque, c'est la règle 4 qui s'applique et les dimensions de la zone pour l'arrière-plan seront utilisées pour `auto`.

```css
background: url(no-dimensions-or-ratio.svg);
background-size: auto 140px;
```

![](1auto-no-dimensions-or-ratio.png)

Ici, la largeur est déterminée grâce à la zone dédiée à l'arrière-plan (règle n°4) et la hauteur est indiquée via la feuille de style (140px).

#### SVG source : une dimension intrinsèque mais pas de proportion intrinsèque

Si l'image possède une dimension implicite mais pas de ratio, la dimension définie sera utilisée selon la règle n°3 si elle vaut `auto` dans le code CSS.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: 200px auto;
```

![](100px-wide-no-height-or-ratio-length-auto.png)

Ici, la valeur de 200px fournie dans la feuille de style surcharge la valeur de 100px définie dans le fichier SVG. Puisqu'il n'y a aucune proportion intrinsèque ni hauteur de définie et qu'on utilise la valeur `auto`, l'image fera la même hauteur que la zone pour l'arrière-plan.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: auto 125px;
```

![](100px-wide-no-height-or-ratio-auto-length.png)

Ici, c'est la largeur qui vaut `auto` et ce sera donc la valeur définie dans l'image SVG (100px) qui sera utilisée. La hauteur est fixée à 125 pixels via la feuille de style.

#### SVG source : une dimension définie et des proportions intrinsèques

Lorsqu'une dimension est indiquée, la première règle s'applique et la dimension du fichier SVG est utilisée sauf si le CSS la redéfinit. Lorsqu'un ratio est indiqué, celui-ci est utilisé pour déterminer la deuxième dimension.

```css
background: url(100px-height-3x4-ratio.svg);
background-size: 150px auto;
```

![](1auto-100px-height-3x4-ratio.png)

Ici, la hauteur de l'image a été surchargée pour valoir 150px. Les proportions intrinsèques permettent ensuite de définir la largeur (`auto` dans la feuille de style).

#### SVG source : aucune dimension mais des proportions intrinsèques

Si aucune dimension n'est définie dans l'image SVG, ce sera celle du CSS qui sera appliquée. Les proportions intrinsèques sont ensuite utilisées pour déterminer l'autre dimension (selon la rgèle n°2).

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: 150px auto;
```

![](1auto-no-dimensions-1x1-ratio.png)

La largeur est définie à 150 pixels via la feuille de style et la hauteur est calculée à partir de cette largeur en utilisant le ratio 1:1, elle vaudra donc 150px ce qui donnera le résultat ci-dessus.

## Voir aussi

- {{cssxref("background-size")}}
- {{cssxref("background-image")}}
- Billet de blog de Jeff Walden : [Properly resizing vector image backgrounds (en anglais)](https://whereswalden.com/2011/10/21/properly-resizing-vector-image-backgrounds/)
