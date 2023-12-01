---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
---

{{CSSRef}}

La [fonction](/fr/docs/Web/CSS/CSS_Functions) [CSS](/fr/docs/Web/CSS) **`conic-gradient()`** permet de créer une image constituée d'un dégradé radial pour lequel les transitions entre les couleurs ont lieu autour d'un centre plutôt que depuis le centre. Un dégradé conique pourra par exemple de dessiner un graphique en camembert. Le résultat de la fonction `conic-gradient()` est un objet du type de données [`<gradient>`](/fr/docs/Web/CSS/gradient) qui est un type particulier d'[`<image>`](/fr/docs/Web/CSS/image).

{{EmbedInteractiveExample("pages/css/function-conic-gradient.html")}}

## Syntaxe

```css
/* Un dégradé conique tourné de 45 degrés, commençant
   en bleu et finissant en rouge */
conic-gradient(from 45deg, blue, red);

/* Une boîte bleue-violette, le dégradé va du bleu
   vers le rouge mais seul le quart inférieur droit
   est visible comme le centre du dégradé est placé
   au coin supérieur gauche */
conic-gradient(from 90deg at 0 0, blue, red);

/* Une roue de couleurs */
background: conic-gradient(
    hsl(360, 100%, 50%),
    hsl(315, 100%, 50%),
    hsl(270, 100%, 50%),
    hsl(225, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(135, 100%, 50%),
    hsl(90, 100%, 50%),
    hsl(45, 100%, 50%),
    hsl(0, 100%, 50%)
);
```

### Valeurs

- [`<angle>`](/fr/docs/Web/CSS/angle)
  - : Précédé du mot-clé `from`, cet angle définit la rotation du dégradé dans le sens horaire.
- `<position>`
  - : Définit la position du centre du dégradé en utilisant la même forme que la propriété [`background-position`](/fr/docs/Web/CSS/background-position) (pour la longueur, l'ordre et les mots-clés). Lorsque cette valeur est absente, la valeur par défaut est `center`, et le centre du dégradé est alors situé au centre de la boîte.
- `<angular-color-stop>`
  - : Une valeur pour un arrêt de couleur, de type [`<color>`](/fr/docs/Web/CSS/color_value), suivie par une ou deux positions d'arrêt, optionnelles, fournies par un [`<angle>`](/fr/docs/Web/CSS/angle) le long de l'arc du dégradé.
- `<color-hint>`
  - : Une indication d'[interpolation](/fr/docs/Glossary/Interpolation) qui définit la façon dont le dégradé progresse entre deux arrêts de couleur adjacents. La longueur définit le point auquel la couleur du dégradé doit être la couleur intermédiaire entre les deux couleurs d'arrêt. Si cette valeur est absente, la valeur intermédiaire est située à mi-parcours entre les deux arrêts de couleur.

> **Note :** Le rendu des arrêts de couleurs des dégradés CSS suit les mêmes règles que les [arrêts de couleur pour les dégradés SVG](/fr/docs/Web/SVG/Tutorial/Gradients).

## Description

À l'instar des autres dégradés, les dégradés coniques ne possèdent pas [de dimensions intrinsèques](/fr/docs/Web/CSS/image#description) (ils n'ont pas de taille préférentielle ou de ratio)&nbsp;: la taille réelle correspondra à la taille de l'élément auquel le dégradé s'applique ou à la taille de l'image si celle-ci a une taille différente de l'élément.

Pour créer un dégradé conique qui se répète afin de couvrir 360° (un tour complet), on utilisera plutôt la notation fonctionnelle [`repeating-conic-gradient()`](/fr/docs/Web/CSS/gradient/repeating-conic-gradient).

Les dégradés (`<gradient>`) sont un type d'image (`<image>`) et ne peuvent être utilisés qu'aux endroits où les images peuvent être utilisées. Aussi, `conic-gradient()` ne fonctionnera pas pour la propriété [`background-color`](/fr/docs/Web/CSS/background-color) ou pour les autres propriétés qui utilisent les données de type [`<color>`](/fr/docs/Web/CSS/color_value).

> **Note :** Un tel dégradé est appelé conique car, vu du dessus, la répartition des couleurs fait apparaître un cône.

### Composition d'un dégradé conique

Un dégradé conique est semblable à un dégradé radial mais les transitions de couleurs sont placées sur différents angles plutôt que sur différents rayons. Avec les dégradés coniques, les transitions entre les couleurs commencent depuis la direction pointant vers le haut puis dans le sens des aiguilles d'une montre. Avec un dégradé radial, les transitions progressent depuis le centre vers l'extérieur du cercle.

![Arrêts de couleur le long de la circonférence d'un dégradé conique d'une part et axe d'un dégradé radial d'autre part.](screenshot_2018-11-29_21.09.19.png)

Un dégradé conique est défini en indiquant un angle de rotation, le centre du dégradé puis en indiquant une liste de points d'arrêt de couleur. À la différence des dégradés linéaires et des dégradés radiaux pour lesquels les points d'arrêt de couleur sont placés avec une [longueur](/fr/docs/Web/CSS/length), les points d'arrêt de couleur d'un dégradé conique sont placés à l'aide d'un [angle](/fr/docs/Web/CSS/angle). Les unités utilisables pour les angles sont `deg` (pour les degrés), `rad` (pour les radians), `grad` (pour les grades) et `turn` (pour les tours). Un cercle se divise en 360 degrés, 400 grades, 2π radians et un tour. Les navigateurs qui prennent en charge les dégradés coniques acceptent également les valeurs exprimées en pourcentage (100% correspondant à 360 degrés), mais cela ne fait pas partie de la spécification.

Comme pour les dégradés radiaux, la syntaxe pour les dégradés coniques permet de situer le centre du dégradé à n'importe quel endroit de l'image ou de l'élément, même en dehors. La position s'exprime avec deux valeurs, de façon semblable à la syntaxe de [`background-position`](/fr/docs/Web/CSS/background-position).

L'arc du dégradé représente le périmètre du dégradé. Le _point de départ_ du dégradé est situé en haut de l'axe vertical. Ensuite le dégradé évolue à partir de cet angle. Les couleurs du dégradé sont déterminées grâce aux points d'arrêt de couleur angulaires, aux points de départ et aux points d'arrivée et éventuellement aux points d'arrêt intermédiaires. Les transitions entre les couleurs peuvent être modifiées grâce à des indications entre les différents points d'arrêt.

#### Personnaliser les dégradés

En ajoutant plusieurs arrêts de couleur sur l'arc du dégradé, il est possible de créer une transition personnalisée entre de nombreuses couleurs. La position d'un arrêt de couleur peut être définie de façon explicite grâce à une valeur de type [`<angle>`](/fr/docs/Web/CSS/angle). Si on ne définit pas l'emplacement d'un arrêt, ce dernier sera placé à mi-chemin entre l'arrêt précédent et le suivant. Si on ne définit pas d'angle pour le premier ou le dernier arrêt de couleur, ils seront respectivement situés à `0deg` et `360deg`. Autrement dit, les deux dégradés suivants sont équivalents&nbsp;:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Par défaut, la transition entre les couleurs de deux arrêts se fera progressivement avec la moitié de la transition à la moitié de l'angle. Ce milieu de transition peut être déplacé en ajoutant une indication de couleur qui définit l'emplacement voulu. L'exemple suivant commence avec du rouge jusqu'à 10%, fait une transition du rouge au bleu sur 80% du tour, les 10% restants sont en bleu. Cependant, le point de changement entre le bleu et le rouge se situe à 20% plutôt qu'à 50% (ce qui se serait produit sans l'indication `80grad`).

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Si deux ou plusieurs arrêts de couleur partagent le même emplacement, la transition sera franche entre la première et la dernière couleur déclarées pour cet emplacement. Si on emploie les dégradés coniques pour faire des camemberts (une mauvaise pratique, car les dégradés ne sont pas accessibles), on peut utiliser des arrêts avec plusieurs couleurs au même endroit pour créer une transition nette. Les deux déclarations suivantes sont synonymes&nbsp;:

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

Les arrêts de couleur devraient être listés dans l'ordre croissant. Les arrêts situés après mais dont la valeur d'angle est inférieure surchargeront les valeurs des arrêts précédents et créeraient une rupture tranchée. Le dégradé qui suit passe de rouge à jaune à 30% puis de jaune à bleu après 35%&nbsp;:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Il est possible d'obtenir d'autres effets avec les dégradés coniques. On peut même créer un damier en créant des quadrants supérieurs gauches et inférieurs droits en blanc et supérieurs droits et inférieurs gauches en noir puis en répétant le dégradé 16 fois (quatre fois en horizontal et quatre fois en vertical)&nbsp;:

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

On voit avec l'exemple précédent qu'il est aussi possible de mélanger différentes unités d'angle mais attention, cela diminue fortement la lisibilité.

### Syntaxe formelle

{{csssyntax}}

## Accessibilité

Les outils d'assistance ne peuvent pas analyser les images d'arrière-plan. Aussi, bien qu'il soit possible de créer des camemberts graphiques, des damiers ou d'autres effets grâce aux dégradés coniques, les images construites en CSS ne sont pas accessibles. Les images créées avec des dégradés coniques ne sont donc pas accessibles non plus. Si l'image contient des informations essentielles à la compréhension du document, mieux vaudra la décrire de façon sémantique dans le document afin que ce dernier soit correctement accessible.

- [Explications MDN pour le WCAG et la règle 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Comprendre les critères de réussite 1.1.1 - Guide de compréhension WCAG 2.0 du W3C (en anglais)](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Exemples

### Dégradé à 40°

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background-image: conic-gradient(from 40deg, #fff, #000);
}
```

{{EmbedLiveSample("", 120, 120)}}

### Dégradé avec un centre décalé

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(from 0deg at 0% 25%, blue, green, yellow 180deg);
}
```

{{EmbedLiveSample("", 120, 120)}}

### Camembert

Dans cet exemple, on utilise des arrêts de couleurs à plusieurs positions avec des couleurs adjacentes partageant un même arrêt, afin de créer des ruptures brutes.

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(red 36deg, orange 36deg 170deg, yellow 170deg);
  border-radius: 50%;
}
```

{{EmbedLiveSample("", 120, 120)}}

### Damier

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(
      #fff 0.25turn,
      #000 0.25turn 0.5turn,
      #fff 0.5turn 0.75turn,
      #000 0.75turn
    ) top left / 25% 25% repeat;
  border: 1px solid;
}
```

{{EmbedLiveSample("", 120, 120)}}

### D'autres exemples d'utilisation de `conic-gradient()`

Voir la page [Utiliser des dégradés CSS](/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- Les autres fonctions de dégradés&nbsp;:
  - [`repeating-conic-gradient()`](/fr/docs/Web/CSS/gradient/repeating-conic-gradient)
  - [`linear-gradient()`](/fr/docs/Web/CSS/gradient/linear-gradient)
  - [`repeating-linear-gradient()`](/fr/docs/Web/CSS/gradient/repeating-linear-gradient)
  - [`radial-gradient()`](/fr/docs/Web/CSS/gradient/radial-gradient)
  - [`repeating-radial-gradient()`](/fr/docs/Web/CSS/gradient/repeating-radial-gradient)
- [`<image>`](/fr/docs/Web/CSS/image)
- [`image()`](/fr/docs/Web/CSS/image/image)
- [`element()`](/fr/docs/Web/CSS/element)
- [`image-set()`](/fr/docs/Web/CSS/image/image-set)
- [`cross-fade()`](/fr/docs/Web/CSS/cross-fade)
