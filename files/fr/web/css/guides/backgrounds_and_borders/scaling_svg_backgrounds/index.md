---
title: Redimensionner des arrière-plans SVG
slug: Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Les images SVG sont très flexibles et lorsqu'on les utilise en CSS avec les propriétés {{CSSxRef("background-image")}} et {{CSSxRef("background-size")}}, il faut s'assurer de considérer les différents aspects qui leurs sont propres. Dans cet article, on décrit comment les images SVG sont redimensionnées grâce à ces propriétés.

## Un algorithme simple

Dans la plupart des cas, l'algorithme utilisé pourra être réduit à ces quatre règles. Ces règles ne sont pas exhaustives et ne couvrent pas certains cas aux limites mais cela sera suffisant ici&nbsp;:

1. Si {{CSSxRef("background-size")}} définit une dimension fixe (des pourcentages ou des unités relatives fixées par le contexte), cette dimension l'emporte.
2. Si l'image possède des proportions intrinsèques (autrement dit, si le ratio largeur/hauteur est constant : 16:9, 4:3, 2.39:1, 1:1), l'arrière-plan sera affiché en conservant ces proportions.
3. Si l'image définit une taille et que celle-ci n'est pas modifiée par `constrain` ou `cover`, c'est la taille définie qui prévaut.
4. Dans tous les autres cas, l'image est affichée avec la taille de la zone dédiée à l'arrière-plan.

On notera ici que l'algorithme ne prend en cas que les dimensions et/ou les proportions de l'image (leur absence éventullement). Ainsi, une image SVG dont les dimensions sont fixées sera traitée comme une image matricielle de la même taille.

> [!NOTE]
> Si vous essayez d'étirer votre SVG pour obtenir un {{Glossary("aspect ratio", "rapport d'aspect")}} différent avec CSS — par exemple pour l'étirer sur l'arrière-plan de la page — assurez-vous que votre SVG inclut `preserveAspectRatio="none"`. Pour en savoir plus, consultez {{SVGAttr("preserveAspectRatio")}}.

## Fichiers d'exemples

Avant de nous plonger dans l'analyse des résultats obtenus en utilisant différents types d'images SVG sources et de voir à quoi elles ressemblent lorsqu'elles sont associées à une {{CSSxRef("background-size")}}, il sera utile de regarder quelques images sources d'exemple qui ont différentes dimensions et paramètres de taille, que nous utiliserons plus tard comme valeurs de `background-image` dans nos exemples. Le navigateur rend les images {{SVGElement("svg")}} par défaut à `300px` de large et `150px` de haut.

### Image sans dimension ni proportion

Cette image ne possède ni dimension ni proportion. Quelle que soit sa taille, il n'y aura pas de ratio largeur/hauteur particulier. On a ici une image qui forme un dégradé, quelles que soient les dimensions et la proportion de l'écran.

```html
<svg>
  <title>Dégradé d'un coin à l'autre</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop stop-color="pink" offset="0" />
      <stop stop-color="goldenrod" offset="1" />
    </linearGradient>
  </defs>
  <rect fill="url('#g')" width="100%" height="100%" />
</svg>
```

{{EmbedLiveSample("Image sans dimension ni proportion", 200, 180)}}

### Image sans proportion avec une dimension fixée

Cette image mesure 100 pixels de large mais n'a pas de hauteur ni de proportion intrinsèque. On a ainsi une bande d'arrière-plan qui peut être étirée sur toute la hauteur d'un bloc.

```html
<svg width="100">
  <title>Dégradé vertical, avec une largeur fixée</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop stop-color="purple" offset="0" />
      <stop stop-color="lime" offset="1" />
    </linearGradient>
  </defs>
  <rect fill="url('#g')" width="100%" height="100%" />
</svg>
```

{{EmbedLiveSample("Image sans proportion avec une dimension fixée", 200, 180)}}

### Image avec une dimension fixée et des proportions intrinsèques

Cette image définit une hauteur de 100 pixels mais pas de largeur. Elle définit également un ratio d'aspect intrinsèque de 3:4. Cela garantit que son ratio largeur:hauteur est toujours de 3:4, sauf si elle est délibérément redimensionnée de manière disproportionnée (c'est-à-dire en définissant explicitement une largeur et une hauteur qui ne respectent pas ce ratio).

C'est très similaire à la spécification d'une largeur et d'une hauteur spécifiques&nbsp;; une fois que vous avez une dimension et un ratio, l'autre dimension est implicite.

```html
<svg height="100" viewBox="0 0 3 4" preserveAspectRatio="none">
  <title>
    Dégradé vertical, avec une hauteur fixée et un ratio intrinsèque
  </title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop stop-color="teal" offset="0" />
      <stop stop-color="orange" offset="1" />
    </linearGradient>
  </defs>
  <rect fill="url('#g')" width="100%" height="100%" />
</svg>
```

{{EmbedLiveSample("Image avec une dimension fixée et des proportions intrinsèques", 200, 180)}}

### Image sans largeur ni hauteur mais avec des proportions intrinsèques

Cette image n'indique pas de hauteur ou de largeur mais un ratio intrinsèque de 1:1. On obtiendra toujours un carré (qui pourra être utilisé comme une icône) pour n'importe quelle taille : 32x32, 128x128, or 512x512.

```html
<svg viewBox="0 0 1 1" preserveAspectRatio="none">
  <title>Ratio intrinsèque</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop stop-color="navy" offset="0" />
      <stop stop-color="maroon" offset="1" />
    </linearGradient>
  </defs>
  <rect fill="url('#g')" width="100%" height="100%" />
</svg>
```

{{EmbedLiveSample("Image sans largeur ni hauteur mais avec des proportions intrinsèques", 200, 180)}}

## Exemples de redimensionnement

Maintenant voyons quelques exemples de ce qui se passe lorsque nous appliquons différents redimensionnements à ces images. Dans chacun des exemples ci-dessous, les éléments HTML {{HTMLElement("div")}} englobants font 300 pixels de large et 200 pixels de haut, avec une bordure de 2 pixels de large. Pour garantir que nous affichons l'image SVG de fond une seule fois pour ces démonstrations, nous définissons {{CSSxRef("background-repeat")}} sur `no-repeat`.

```css
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

### Définir des dimensions fixées sur les deux axes

Si on utilise {{CSSxRef("background-size")}} pour indiquer la longueur et la largeur de l'image, celles-ci seront toujours utilisées (cf. la règle n°1 précédemment énoncée). Autrement dit, l'image sera toujours étirée pour obtenir ces dimensions, quelles que soient les dimensions initiales de l'image ou ses proportions.

#### Aucune dimension ni proportion

Dans cet exemple, l'image n'a ni dimensions définies, ni ratio intrinsèque&nbsp;:

```html hidden live-sample___scaling1
<div></div>
```

```css hidden live-sample___scaling1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling1
div {
  background-image: url("no-dimensions-or-ratio.svg");
  background-size: 125px 175px;
}
```

{{EmbedLiveSample("scaling1", 200, 230)}}

#### Une dimension définie et aucune proportion

Dans cet exemple, l'image a une dimension spécifiée, mais aucun ratio intrinsèque défini&nbsp;:

```html hidden live-sample___scaling2
<div></div>
```

```css hidden live-sample___scaling2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling2
div {
  background-image: url("100px-wide-no-height-or-ratio.svg");
  background-size: 250px 150px;
}
```

{{EmbedLiveSample("scaling2", 200, 230)}}

#### Une dimension définie et des proportions intrinsèques

```html hidden live-sample___scaling3
<div></div>
```

Dans cet exemple, l'image a une dimension explicitement définie, ainsi qu'un ratio intrinsèque, ce qui signifie que les deux dimensions sont effectivement définies. Définir une hauteur et une largeur absolues pour `background-size` remplace les dimensions définies dans le SVG&nbsp;:

```css hidden live-sample___scaling3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling3
div {
  background-image: url("100px-height-3x4-ratio.svg");
  background-size: 275px 125px;
}
```

{{EmbedLiveSample("scaling3", 200, 230)}}

#### Aucune largeur ni hauteur définie mais des proportions intrinsèques

Dans cet exemple, l'image a un ratio intrinsèque mais aucune dimension définie&nbsp;:

```html hidden live-sample___scaling4
<div></div>
```

```css hidden live-sample___scaling4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling4
div {
  background-image: url("no-dimensions-1x1-ratio.svg");
  background-size: 250px 100px;
}
```

{{EmbedLiveSample("scaling4", 200, 230)}}

### Utiliser `contain` ou `cover`

En utilisant la valeur `cover` pour {{CSSxRef("background-size")}}, l'image sera réduite au maximum pour couvrir toute la zone de l'arrière-plan. `contain` fonctionne de façon symétrique, l'image est agrandie autant que possible sans être rognée par la zone de l'arrière-plan.

Pour une image ayant un rapport d'aspect intrinsèque, une seule taille correspond aux critères `cover`/ajustement seuls. Mais si aucun rapport d'aspect intrinsèque n'est défini, les critères `cover`/ajustement ne suffisent pas, c'est alors la contrainte de taille (grande/petite) qui détermine la taille finale.

#### Aucune dimension ni proportion

Si une image n'a ni dimensions définie, ni proportions définies, les règles 2 ou 3 ne pourront pas s'appliquer. La règle 4 est donc utilisée et l'image couvre toute la zone (ce qui satisfait d'ailleurs les différentes contraintes).

```html hidden live-sample___cc1
<div></div>
```

```css hidden live-sample___cc1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc1
div {
  background-image: url("no-dimensions-or-ratio.svg");
  background-size: contain;
}
```

{{EmbedLiveSample("cc1", 200, 230)}}

#### Une dimension définie et aucune proportion

Dans cet exemple, l'image a une dimension spécifiée mais aucun ratio intrinsèque, la règle 4 s'applique, et l'image est redimensionnée pour couvrir toute la zone de l'arrière-plan.

```html hidden live-sample___cc2
<div></div>
```

```css hidden live-sample___cc2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc2
div {
  background-image: url("100px-wide-no-height-or-ratio.svg");
  background-size: contain;
}
```

{{EmbedLiveSample("cc2", 200, 230)}}

#### Une dimension définie et des proportions intrinsèques

Dans ces exemples, l'image a une dimension explicitement définie, ainsi qu'un ratio intrinsèque.

Les choses changent lorsque vous définissez un ratio intrinsèque. Dans ce cas, la règle 1 n'est pas pertinente, donc la règle 2 est appliquée&nbsp;: nous essayons de préserver tout ratio intrinsèque (tout en respectant `contain` ou `cover`). Par exemple, préserver un ratio d'aspect intrinsèque de 3:4 pour une boîte de 300x200 avec `contain` signifie dessiner un arrière-plan de 150x200.

##### Cas avec `contain`

```html hidden live-sample___cc3
<div></div>
```

Étant donné ce CSS&nbsp;:

```css hidden live-sample___cc3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc3
div {
  background-image: url("100px-height-3x4-ratio.svg");
  background-size: contain;
}
```

{{EmbedLiveSample("cc3", 200, 230)}}

On voit ici que l'image est entièrement rendue, s'adaptant au mieux à la boîte sans être rognée.

##### Cas avec `cover`

```html hidden live-sample___cc5
<div></div>
```

```css hidden live-sample___cc5
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc5
div {
  background-image: url("100px-height-3x4-ratio.svg");
  background-size: cover;
}
```

{{EmbedLiveSample("cc5", 200, 230)}}

Ici, le ratio 3:4 est préservé tout en étirant l'image pour remplir toute la boîte. Cela entraîne le rognage de la partie inférieure de l'image.

#### Aucune dimension mais des proportions intrinsèques

On obtient des résultats analogues lorsqu'on manipule une image sans dimension intrinsèque mais avec des proportions intrinsèques.

##### Cas avec `contain`

```html hidden live-sample___cc6
<div></div>
```

```css hidden live-sample___cc6
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc6
div {
  background-image: url("no-dimensions-1x1-ratio.svg");
  background-size: contain;
}
```

{{EmbedLiveSample("cc6", 200, 230)}}

On voit ici que l'image est redimensionnée à la plus petite taille tout en conservant le ratio 1:1.

##### Cas avec `cover`

```html hidden live-sample___cc7
<div></div>
```

```css hidden live-sample___cc7
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc7
div {
  background-image: url("no-dimensions-1x1-ratio.svg");
  background-size: cover;
}
```

{{EmbedLiveSample("cc7", 200, 230)}}

Ici, l'image est dimensionnée afin de remplir la plus grande dimension. Le ratio 1:1 a été préservé, bien qu'avec cette image source, cela puisse être difficile à voir.

### Utiliser `auto` pour dimensionner automatiquement les deux axes

Si {{CSSxRef("background-size")}} vaut `auto` ou `auto auto`, la règle 2 dit que le rendu doit préserver tout ratio intrinsèque fourni.

#### Aucune dimension ni proportion intrinsèque

Lorsque les images de fond avec redimensionnement automatique n'ont ni ratio intrinsèque ni dimensions définies, la règle 4 s'applique et l'image est rendue pour remplir la zone de fond.

```html hidden live-sample___both-auto1
<div></div>
```

```css hidden live-sample___both-auto1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto1
div {
  background-image: url("no-dimensions-or-ratio.svg");
  background-size: auto auto;
}
```

{{EmbedLiveSample("both-auto1", 200, 230)}}

#### Une dimension mais aucune proportion intrinsèque

S'il n'y a aucune proportion définie mais qu'une dimension est fournie, la règle n°3 s'appliquera et l'image sera affichée avec ces dimensions.

```html hidden live-sample___both-auto2
<div></div>
```

```css hidden live-sample___both-auto2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto2
div {
  background-image: url("100px-wide-no-height-or-ratio.svg");
  background-size: auto auto;
}
```

{{EmbedLiveSample("both-auto2", 200, 230)}}

Notez ici que la largeur, qui est définie dans le SVG source à 100 pixels, est respectée, tandis que la hauteur remplit la zone de fond puisqu'elle n'est pas définie (ni explicitement, ni par un ratio intrinsèque).

#### Une dimension et des proportions intrinsèques

Si on dispose de proportions intrinsèques et d'une dimension fixée, les deux dimensions sont alors définies.

```html hidden live-sample___both-auto3
<div></div>
```

```css hidden live-sample___both-auto3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto3
div {
  background-image: url("100px-height-3x4-ratio.svg");
  background-size: auto auto;
}
```

{{EmbedLiveSample("both-auto3", 200, 230)}}

Étant donné que cette image a une hauteur explicitement définie de `100px`, et compte tenu du rapport 3:4 défini dans le SVG, la largeur de l'image est de 75 pixels lorsque la valeur `auto` est utilisée.

#### Aucune dimension définie mais des proportions intrinsèques

Lorsque qu'un ratio intrinsèque est défini, mais qu'aucune dimension n'est définie, la règle n°4 s'applique — sauf que la règle n°2 s'applique également. L'image est donc rendue de la même manière que pour le cas `contain`.

```html hidden live-sample___both-auto4
<div></div>
```

```css hidden live-sample___both-auto4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto4
div {
  background-image: url("no-dimensions-1x1-ratio.svg");
  background-size: auto auto;
}
```

{{EmbedLiveSample("both-auto4", 200, 230)}}

### Utiliser `auto` et une dimension spécifique

Avec la première règle, les dimensions définies sont toujours utilisées et il faut donc utiliser les autres règles pour déterminer la seconde dimension.

#### Aucune dimension ni proportion intrinsèque

Si l'image ne possède ni dimension ni proportion intrinsèque, c'est la règle n°4 qui s'applique et les dimensions de la zone pour l'arrière-plan seront utilisées pour `auto`.

```html hidden live-sample___auto0
<div></div>
```

```css hidden live-sample___auto0
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto0
div {
  background-image: url("no-dimensions-or-ratio.svg");
  background-size: auto 140px;
}
```

{{EmbedLiveSample("auto0", 200, 230)}}

Ici, la largeur est déterminée en utilisant la largeur de la zone pour l'arrière-plan selon la règle n°4, tandis que la hauteur est de `140px` définie dans le CSS.

#### Une dimension intrinsèque mais pas de proportion intrinsèque

Si l'image possède une dimension implicite mais pas de ratio, la dimension définie sera utilisée selon la règle n°3 si elle vaut `auto` dans le code CSS.

```html hidden live-sample___auto1
<div></div>
```

```css hidden live-sample___auto1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto1
div {
  background-image: url("100px-wide-no-height-or-ratio.svg");
  background-size: 200px auto;
}
```

{{EmbedLiveSample("auto1", 200, 230)}}

Ici, la valeur `200px` définie dans le CSS remplace la largeur de `100px` définie dans le SVG, conformément à la règle n° 1. Comme aucun rapport de hauteur ou aucune hauteur n'est défini, `auto` sélectionne la hauteur de la zone d'arrière-plan comme hauteur de l'image affichée.

```html hidden live-sample___auto2
<div></div>
```

```css hidden live-sample___auto2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto2
div {
  background-image: url("100px-wide-no-height-or-ratio.svg");
  background-size: auto 125px;
}
```

{{EmbedLiveSample("auto2", 200, 230)}}

Ici, la largeur est définie comme `auto` dans le CSS, donc la largeur de `100px` définie dans le SVG est sélectionnée, conformément à la règle n°3. La hauteur est définie à `125px` dans le CSS, donc elle est sélectionnée conformément à la règle n°1.

#### Une dimension définie et des proportions intrinsèques

Lorsqu'une dimension est indiquée, la première règle s'applique et la dimension du fichier SVG est utilisée sauf si le CSS la redéfinit. Lorsqu'un ratio est indiqué, celui-ci est utilisé pour déterminer la deuxième dimension.

```html hidden live-sample___auto3
<div></div>
```

```css hidden live-sample___auto3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto3
div {
  background-image: url("100px-height-3x4-ratio.svg");
  background-size: 150px auto;
}
```

{{EmbedLiveSample("auto3", 200, 230)}}

Dans ce cas, nous utilisons la largeur de l'image définie dans le CSS à `150px`, donc la règle n°1 est appliquée. Le ratio intrinsèque 3:4 détermine ensuite la hauteur pour le cas `auto`.

#### Aucune dimension mais des proportions intrinsèques

Si aucune dimension n'est définie dans le SVG, la dimension définie dans le CSS est appliquée, puis le ratio intrinsèque est utilisé pour sélectionner l'autre dimension, selon la règle n°2.

```html hidden live-sample___auto4
<div></div>
```

```css hidden live-sample___auto4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto4
div {
  background-image: url("no-dimensions-1x1-ratio.svg");
  background-size: 150px auto;
}
```

{{EmbedLiveSample("auto4", 200, 230)}}

La largeur est définie à `150px` dans le CSS. La valeur `auto` pour la hauteur est calculée en utilisant cette largeur et le ratio 1:1, ce qui donne également `150px`.

## Voir aussi

- La propriété {{CSSxRef("background-size")}}
- Le module [d'arrière-plans et de bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
