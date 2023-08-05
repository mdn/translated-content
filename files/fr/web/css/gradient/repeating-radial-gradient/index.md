---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
---

{{CSSRef}}

La [fonction](/fr/docs/Web/CSS/CSS_Functions) [CSS](/fr/docs/Web/CSS) **`repeating-radial-gradient()`** fonctionne de façon similaire à [`radial-gradient`](/fr/docs/Web/CSS/gradient/radial-gradient) mais répète les couleurs de façon infinie dans toutes les deux directions avec des répétitions formant des bandes de dégradé (de façon analogue à [`repeating-linear-gradient()`](/fr/docs/Web/CSS/gradient/repeating-linear-gradient) qui permet de répéter un dégradé linéaire ([`linear-gradient()`](/fr/docs/Web/CSS/gradient/linear-gradient)).

{{EmbedInteractiveExample("pages/css/function-repeating-radial-gradient.html")}}

À chaque répétition, les positions des arrêts de couleur sont décalés d'un multiple du dégradé unitaire (ce dernier couvrant la distance entre le premier et le dernier arrêt de couleur). Ainsi, la position de chaque arrêt de couleur final coïncide avec l'arrêt de couleur initial qui suit&nbsp;: si les couleurs sont différentes, on aura une transition abrupte. Pour ne pas obtenir cet effet, on pourra réutiliser la couleur du premier arrêt de couleur pour le dernier arrêt de couleur.

Comme les autres dégradés, un dégradé radial répété [n'a pas de dimensions intrinsèques](/fr/docs/Web/CSS/image#description), c'est-à-dire qu'il n'a pas de taille ou de proportions préférées. Sa taille réelle correspondra à la taille de l'élément auquel il est appliqué.

Comme pour les autres dégradés, un dégradé linéaire répété n'est pas une couleur (type [`<color>`](/fr/docs/Web/CSS/color_value)) CSS mais un type particulier d'image (type [`<image>`](/fr/docs/Web/CSS/image)). À ce titre, `repeating-radial-gradient()` ne fonctionnera pas pour [`background-color`](/fr/docs/Web/CSS/background-color) et les autres propriétés qui utilisent le type de données [`<color>`](/fr/docs/Web/CSS/color_value).

## Syntaxe

```css
/* Un dégradé répété qui part du centre de son conteneur,
   en commençant par du rouge, passant par du bleu puis,
   finissant par du vert */
repeating-radial-gradient(circle at center, red 0, blue, green 30px);

/* Un dégradé elliptique qui commence dans le coin supérieur gauche
   en commençant rouge puis en passant au vert, cinq fois entre le
   centre et le coin inférieur droit et une seule fois entre le
   centre et le coin supérieur gauche */
repeating-radial-gradient(farthest-corner at 20% 20%, red 0, green, red 20%);
```

### Valeurs

- [`<position>`](/fr/docs/Web/CSS/position)
  - : La position du dégradé, interprétée de la même façon que pour les propriétés [`background-position`](/fr/docs/Web/CSS/background-position) ou [`transform-origin`](/fr/docs/Web/CSS/transform-origin). La valeur par défaut est `center`.
- `<shape>`
  - : La forme du contour du dégradé. Elle vaut soit `circle` (la forme du dégradé sera un cercle de rayon constant) ou `ellipse` (la forme est une ellipse alignée sur les axes). La valeur par défaut est `ellipse`.
- `<extent-keyword>`

  - : Un mot-clé décrivant la taille de la forme de terminaison. Les valeurs possibles sont&nbsp;:

    | Mot-clé           | Description                                                                                                                                                                                        |
    | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | La forme du contour du dégradé touche le côté de la boîte le plus proche du centre (pour les cercles) ou touche les côtés horizontaux et verticaux les plus proches du centre (pour les ellipses). |
    | `closest-corner`  | La forme du contour du dégradé est dimensionnée afin de toucher exactement le coin de la boîte le plus proche du centre.                                                                           |
    | `farthest-side`   | Cette valeur fonctionne de façon semblable à `closest-side`, sauf que ce seront les côtés les plus éloignés qui seront utilisés.                                                                   |
    | `farthest-corner` | La valeur par défaut. Cette valeur fonctionne de façon semblable à `closest-corner`, sauf que ce sera le coin le plus éloigné du centre qui sera utilisé.                                          |

    > **Note :** Les premières implémentations de cette fonction incluaient d'autres mots-clés (`cover` et `contain`) qui sont des synonymes respectifs des mots-clés standards `farthest-corner` et `closest-side`. Seuls les mots-clés standards doivent être utilisés, certaines implémentations ayant déjà abandonné ces anciennes variantes.

- `<color-stop>`
  - : Une valeur d'arrêt de couleur, composée d'une valeur [`<color>`](/fr/docs/Web/CSS/color_value), suivie d'une ou deux positions d'arrêt optionnelles (définies par une valeur [`<percentage>`](/fr/docs/Web/CSS/percentage) ou [`<length>`](/fr/docs/Web/CSS/length) le long de l'axe du dégradé). Un pourcentage à `0%`, ou une longueur de `0`, représentera le centre du dégradé&nbsp;; la valeur `100%` représentera l'intersection de la forme du contour avec la ligne d'évolution du dégradé. Les valeurs de pourcentages intermédiaire sont positionnées linéairement le long du dégradé.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Un dégradé noir et blanc

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 120px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
}
```

{{EmbedLiveSample('', 120, 120)}}

### Déplacement du centre

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 240px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: repeating-radial-gradient(
    ellipse farthest-corner at 20% 20%,
    red,
    black 5%,
    blue 5%,
    green 10%
  );
  background: repeating-radial-gradient(
    ellipse farthest-corner at 20% 20%,
    red 0 5%,
    green 5% 10%
  );
}
```

{{EmbedLiveSample('', 120, 120)}}

Le dégradé elliptique a son centre situé à 20% du coin supérieur gauche et se répètera 10 fois entre le centre et le coin le plus éloigné (situé donc dans le coin inférieur droit). Les navigateurs qui prennent en charge les arrêts de couleur multiples afficheront des bandes elliptiques rouges et vertes. Les navigateurs qui n'implémentent pas cette fonctionnalité afficheront un dégradé qui va du rouge au noir puis du bleu au vert.

> **Note :** Voir [la page Utiliser les dégradés CSS](/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- Les autres fonctions de dégradés&nbsp;:
  - [`conic-gradient()`](/fr/docs/Web/CSS/gradient/conic-gradient)
  - [`linear-gradient()`](/fr/docs/Web/CSS/gradient/linear-gradient)
  - [`radial-gradient()`](/fr/docs/Web/CSS/gradient/radial-gradient)
  - [`repeating-conic-gradient()`](/fr/docs/Web/CSS/gradient/repeating-conic-gradient)
  - [`repeating-linear-gradient()`](/fr/docs/Web/CSS/gradient/repeating-linear-gradient)
- [`<image>`](/fr/docs/Web/CSS/image)
- [`image()`](/fr/docs/Web/CSS/image/image)
- [`element()`](/fr/docs/Web/CSS/element)
- [`image-set()`](/fr/docs/Web/CSS/image/image-set)
- [`cross-fade()`](/fr/docs/Web/CSS/cross-fade)
