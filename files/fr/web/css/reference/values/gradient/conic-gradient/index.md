---
title: conic-gradient()
slug: Web/CSS/Reference/Values/gradient/conic-gradient
original_slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`conic-gradient()`** crée une image composée d'un dégradé dont les transitions de couleur tournent autour d'un point central (plutôt que de rayonner à partir du centre). Les dégradés coniques sont utilisés, par exemple, pour les graphiques en camembert et les {{Glossary("color wheel", "roues chromatiques")}}. Le résultat de la fonction `conic-gradient()` est un objet du type de donnée {{CSSxRef("&lt;gradient&gt;")}}, qui est une forme particulière de {{CSSxRef("&lt;image&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: conic-gradient()")}}

```css interactive-example-choice
background: conic-gradient(red, orange, yellow, green, blue);
```

```css interactive-example-choice
background: conic-gradient(
  from 0.25turn at 50% 30%,
  #f69d3c,
  10deg,
  #3f87a6,
  350deg,
  #ebf8e1
);
```

```css interactive-example-choice
background: conic-gradient(from 3.1416rad at 10% 50%, #e66465, #9198e5);
```

```css interactive-example-choice
background: conic-gradient(
  red 6deg,
  orange 6deg 18deg,
  yellow 18deg 45deg,
  green 45deg 110deg,
  blue 110deg 200deg,
  purple 200deg
);
```

```html interactive-example
<section class="display-block" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-height: 100%;
}
```

## Syntaxe

```css
/* Un dégradé avec une seule couleur rouge */
conic-gradient(red)

/* Un dégradé conique tourné de 45 degrés, commençant
   en bleu et finissant en rouge */
conic-gradient(from 45deg, blue, red)

/* Une boîte bleue-violette, le dégradé va du bleu
   vers le rouge mais seul le quart inférieur droit
   est visible comme le centre du dégradé est placé
   au coin supérieur gauche */
conic-gradient(from 90deg at 0 0, blue, red)

/* Interpolation dans l'espace colorimétrique polaire
  avec la méthode d'interpolation de teinte la plus longue */
conic-gradient(in hsl longer hue, red, blue, green, red)

/* Une roue de couleurs */
conic-gradient(
  hsl(360 100% 50%),
  hsl(315 100% 50%),
  hsl(270 100% 50%),
  hsl(225 100% 50%),
  hsl(180 100% 50%),
  hsl(135 100% 50%),
  hsl(90 100% 50%),
  hsl(45 100% 50%),
  hsl(0 100% 50%)
)
```

### Valeurs

- {{CSSxRef("&lt;angle&gt;")}}
  - : Précédé du mot-clé `from`, cet angle définit la rotation du dégradé dans le sens horaire.
- `<position>`
  - : Définit la position du centre du dégradé en utilisant la même forme que la propriété {{CSSxRef("background-position")}} (pour la longueur, l'ordre et les mots-clés). Lorsque cette valeur est absente, la valeur par défaut est `center`, et le centre du dégradé est alors situé au centre de la boîte.
- `<angular-color-stop>`
  - : Une valeur pour un arrêt de couleur, de type {{CSSxRef("&lt;color&gt;")}}, suivie par une ou deux positions d'arrêt, optionnelles, fournies par un {{CSSxRef("&lt;angle&gt;")}} le long de l'arc du dégradé.
- `<color-hint>`
  - : Une indication d'{{Glossary("interpolation")}} qui définit la façon dont le dégradé progresse entre deux arrêts de couleur adjacents. La longueur définit le point auquel la couleur du dégradé doit être la couleur intermédiaire entre les deux couleurs d'arrêt. Si cette valeur est absente, la valeur intermédiaire est située à mi-parcours entre les deux arrêts de couleur.

> [!NOTE]
> Le rendu des arrêts de couleur dans les dégradés coniques suit les mêmes règles que pour les [arrêts de couleur dans les dégradés linéaires](/fr/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_dun_dégradé_linéaire).

## Description

À l'instar des autres dégradés, les dégradés coniques ne possèdent pas [de dimensions intrinsèques](/fr/docs/Web/CSS/Reference/Values/image#description) (ils n'ont pas de taille préférentielle ou de ratio)&nbsp;: la taille réelle correspondra à la taille de l'élément auquel le dégradé s'applique ou à la taille de l'image si celle-ci a une taille différente de l'élément.

Pour créer un dégradé conique qui se répète afin de couvrir 360° (un tour complet), on utilisera plutôt la notation fonctionnelle {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Les dégradés (`<gradient>`) sont un type d'image (`<image>`) et ne peuvent être utilisés qu'aux endroits où les images peuvent être utilisées. Aussi, `conic-gradient()` ne fonctionnera pas pour la propriété {{CSSxRef("background-color")}} ou pour les autres propriétés qui utilisent les données de type {{CSSxRef("&lt;color&gt;")}}.

> [!NOTE]
> Pourquoi parle-t-on de dégradé «&nbsp;conique&nbsp;»&nbsp;? Si les arrêts de couleur sont beaucoup plus clairs d'un côté que de l'autre, le résultat peut ressembler à un cône vu du dessus.

### Composition d'un dégradé conique

Un dégradé conique est semblable à un dégradé radial mais les transitions de couleurs sont placées sur différents angles plutôt que sur différents rayons. Avec les dégradés coniques, les transitions entre les couleurs commencent depuis la direction pointant vers le haut puis dans le sens des aiguilles d'une montre. Avec un dégradé radial, les transitions progressent depuis le centre vers l'extérieur du cercle.

![Arrêts de couleur le long de la circonférence d'un dégradé conique d'une part et axe d'un dégradé radial d'autre part.](screenshot_2018-11-29_21.09.19.png)

Un dégradé conique est défini en indiquant un angle de rotation, le centre du dégradé puis en indiquant une liste de points d'arrêt de couleur. À la différence des dégradés linéaires et des dégradés radiaux pour lesquels les points d'arrêt de couleur sont placés avec une [longueur](/fr/docs/Web/CSS/Reference/Values/length), les points d'arrêt de couleur d'un dégradé conique sont placés à l'aide d'un [angle](/fr/docs/Web/CSS/Reference/Values/angle). Les unités utilisables pour les angles sont `deg` (pour les degrés), `rad` (pour les radians), `grad` (pour les grades) et `turn` (pour les tours). Un cercle se divise en 360 degrés, 400 grades, 2π radians et un tour. Les navigateurs qui prennent en charge les dégradés coniques acceptent également les valeurs exprimées en pourcentage (100% correspondant à 360 degrés), mais cela ne fait pas partie de la spécification.

Comme pour les dégradés radiaux, la syntaxe pour les dégradés coniques permet de situer le centre du dégradé à n'importe quel endroit de l'image ou de l'élément, même en dehors. La position s'exprime avec deux valeurs, de façon semblable à la syntaxe de {{CSSxRef("background-position")}}.

L'arc du dégradé représente le périmètre du dégradé. Le _point de départ_ du dégradé est situé en haut de l'axe vertical. Ensuite le dégradé évolue à partir de cet angle. Les couleurs du dégradé sont déterminées grâce aux points d'arrêt de couleur angulaires, aux points de départ et aux points d'arrivée et éventuellement aux points d'arrêt intermédiaires. Les transitions entre les couleurs peuvent être modifiées grâce à des indications entre les différents points d'arrêt.

#### Personnaliser les dégradés

En ajoutant plusieurs arrêts de couleur sur l'arc du dégradé, il est possible de créer une transition personnalisée entre de nombreuses couleurs. La position d'un arrêt de couleur peut être définie de façon explicite grâce à une valeur de type [`<angle>`](/fr/docs/Web/CSS/Reference/Values/angle). Si on ne définit pas l'emplacement d'un arrêt, ce dernier sera placé à mi-chemin entre l'arrêt précédent et le suivant. Si on ne définit pas d'angle pour le premier ou le dernier arrêt de couleur, ils seront respectivement situés à `0deg` et `360deg`. Autrement dit, les deux dégradés suivants sont équivalents&nbsp;:

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

{{CSSSyntax}}

## Accessibilité

Les outils d'assistance ne peuvent pas analyser les images d'arrière-plan. Aussi, bien qu'il soit possible de créer des camemberts graphiques, des damiers ou d'autres effets grâce aux dégradés coniques, les images construites en CSS ne sont pas accessibles. Les images créées avec des dégradés coniques ne sont donc pas accessibles non plus. Si l'image contient des informations essentielles à la compréhension du document, mieux vaudra la décrire de façon sémantique dans le document afin que ce dernier soit correctement accessible.

- [Explications MDN pour le WCAG et la règle 1.1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.1_—_des_équivalents_textuels_doivent_être_fournis_pour_tout_contenu_non_textuel)
- [Comprendre les critères de réussite 1.1.1 - Guide de compréhension WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

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

{{EmbedLiveSample("Dégradé à 40°", 120, 120)}}

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

{{EmbedLiveSample("Dégradé avec un centre décalé", 120, 120)}}

### Dégradé en camembert

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

{{EmbedLiveSample("Dégradé en camembert", 120, 120)}}

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
    )
    top left / 25% 25% repeat;
  border: 1px solid;
}
```

{{EmbedLiveSample("Damier", 120, 120)}}

### Interpolation de teinte

```html hidden
<div class="shorter"></div>
<div class="longer"></div>
```

```css hidden
div {
  display: inline-block;
  margin-top: 1rem;
  width: 45vw;
  height: 80vh;
}

.shorter::before {
  content: "teinte plus courte";
  display: block;
  margin-top: -1rem;
}

.longer::before {
  content: "teinte plus longue";
  display: block;
  margin-top: -1rem;
}
```

Dans cet exemple d'interpolation, le système de couleurs [hsl](/fr/docs/Web/CSS/Reference/Values/color_value/hsl) est utilisé et la [teinte](/fr/docs/Web/CSS/Reference/Values/hue) est interpolée.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

La boîte de gauche utilise l'[interpolation la plus courte](/fr/docs/Web/CSS/Reference/Values/hue-interpolation-method#plus_courte), c'est-à-dire que la couleur passe directement du rouge au bleu en empruntant l'arc le plus court sur la [roue chromatique](/fr/docs/Glossary/Color_wheel). La boîte de droite utilise l'[interpolation la plus longue](/fr/docs/Web/CSS/Reference/Values/hue-interpolation-method#plus_longue), c'est-à-dire que la couleur va du rouge au bleu en empruntant l'arc le plus long, en passant par les verts, les jaunes et les oranges.

{{EmbedLiveSample("Interpolation de teinte", 240, 200)}}

### D'autres exemples d'utilisation de `conic-gradient()`

Voir la page [Utiliser des dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
- Autres fonctions de dégradé&nbsp;: {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- Le type de donnée {{CSSxRef("&lt;hue-interpolation-method&gt;")}}
- Le type de donnée {{CSSxRef("&lt;color-interpolation-method&gt;")}}
- Le type de donnée {{CSSxRef("&lt;image&gt;")}}
- La fonction {{CSSxRef("image/image","image()")}}
- La fonction {{CSSxRef("element", "element()")}}
- La fonction {{CSSxRef("image/image-set","image-set()")}}
- La fonction {{CSSxRef("cross-fade", "cross-fade()")}}
