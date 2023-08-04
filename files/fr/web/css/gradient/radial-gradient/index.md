---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
---

{{CSSRef}}

La [fonction](/fr/docs/Web/CSS/CSS_Functions) [CSS](/fr/docs/Web/CSS) **`radial-gradient()`** permet de créer une image CSS représentant un dégradé de couleur. Ce dégradé diffuse depuis une origine, le _centre_ du gradient. La forme du dégradé peut être un cercle ou une ellipse. La valeur renvoyée par cette fonction est un objet CSS de type [`<gradient>`](/fr/docs/Web/CSS/gradient), qui est un type particulier d'[`<image>`](/fr/docs/Web/CSS/image).

{{EmbedInteractiveExample("pages/css/function-radial-gradient.html")}}

## Syntaxe

```css
/* Un dégradé qui part du centre du conteneur,
   qui commence en rouge, passe par du bleu
   et finit en vert. */
radial-gradient(circle at center, red 0, blue, green 100%)
```

Un dégradé radial est défini en indiquant le centre du dégradé (là où sera situé le point à 0%) ainsi que la taille et la forme de la forme finale (là où le dégradé atteint 100%).

### Valeurs

- [`<position>`](/fr/docs/Web/CSS/position_value)
  - : La position du dégradé, interprétée de la même façon que pour les propriétés [`background-position`](/fr/docs/Web/CSS/background-position) ou [`transform-origin`](/fr/docs/Web/CSS/transform-origin). La valeur par défaut est `center`.
- `<ending-shape>`
  - : La forme du contour du dégradé. Elle vaut soit `circle` (la forme du dégradé sera un cercle de rayon constant) ou `ellipse` (la forme est une ellipse alignée sur les axes). La valeur par défaut est `ellipse`.
- `<size>`

  - : La taille du contour du dégradé. La valeur par défaut est `farthest-corner`. Cette taille peut être définie explicitement ou décrite par un mot-clé. Pour les définitions des mots-clés qui suivent, on considèrera que les bords de la boîte du dégradé s'étendent indéfiniment dans les deux directions (plutôt que d'être finies).

    Les dégradés circulaires et elliptiques prennent en charge les mots-clés suivants pour `<size>`&nbsp;:

    | Mot-clé           | Description                                                                                                                                                                                        |
    | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | La forme du contour du dégradé touche le côté de la boîte le plus proche du centre (pour les cercles) ou touche les côtés horizontaux et verticaux les plus proches du centre (pour les ellipses). |
    | `closest-corner`  | La forme du contour du dégradé est dimensionnée afin de toucher exactement le coin de la boîte le plus proche du centre.                                                                           |
    | `farthest-side`   | Cette valeur fonctionne de façon semblable à `closest-side`, sauf que ce seront les côtés les plus éloignés qui seront utilisés.                                                                   |
    | `farthest-corner` | La valeur par défaut. Cette valeur fonctionne de façon semblable à `closest-corner`, sauf que ce sera le coin le plus éloigné du centre qui sera utilisé.                                          |

    Si `<ending-shape>` est définie avec `circle`, la taille pourra être fournie explicitement avec une valeur [`<length>`](/fr/docs/Web/CSS/length), qui indique le rayon du cercle (les valeurs négatives sont invalides).

    Si `<ending-shape>` est définie avec `ellipse` (ou que cette valeur est omise), la taille pourra être indiquée explicitement avec une valeur [`<length-percentage>`](/fr/docs/Web/CSS/length-percentage) dont les deux composantes fournissent une taille d'ellipse explicite (la première représentant le rayon horizontal et la seconde le rayon vertical). Les valeurs exprimées en pourcentages sont alors relatives à la dimension correspondante de la boîte du dégradé. Les valeurs négatives sont invalides.

- `<linear-color-stop>`
  - : Une valeur d'arrêt de couleur, composée d'une valeur [`<color>`](/fr/docs/Web/CSS/color_value), suivie d'une ou deux positions d'arrêt optionnelles (définies par une valeur [`<percentage>`](/fr/docs/Web/CSS/percentage) ou [`<length>`](/fr/docs/Web/CSS/length) le long de l'axe du dégradé). Un pourcentage à `0%`, ou une longueur de `0`, représentera le centre du dégradé&nbsp;; la valeur `100%` représentera l'intersection de la forme du contour avec la ligne d'évolution du dégradé. Les valeurs de pourcentages intermédiaire sont positionnées linéairement le long du dégradé. Inclure deux fois la même position pour deux arrêts différents revient à créer une rupture franche entre les deux couleurs.
- `<color-hint>`
  - : Une indication pour définir la progression de l'interpolation entre les deux arrêts de couleur adjacents. La longueur définit l'emplacement auquel la transition aurait été effectuée à moitié entre les deux couleurs. Si cette valeur est absente, la transition intermédiaire s'effectue au milieu des deux arrêts de couleur.

## Description

Comme les autres formes de dégradé, un dégradé radial [n'a pas de dimensions intrinsèques](/fr/docs/Web/CSS/image#description). Autrement dit, il n'a pas de taille naturelle ou préférée ou de proportions particulières. Sa taille réelle correspondra à la taille de l'élément sur lequel il est appliqué.

Pour créer un dégradé radial qui se répète pour remplir son conteneur, on utilisera plutôt la fonction [`repeating-radial-gradient()`](/fr/docs/Web/CSS/gradient/repeating-radial-gradient).

Une valeur de type `<gradient>` est une valeur de type `<image>` et ne peut donc être utilisé qu'aux endroits où une telle valeur peut être présente. C'est pour cela que `radial-gradient()` ne fonctionnera pas sur [`background-color`](/fr/docs/Web/CSS/background-color) et sur les autres propriétés qui utilisent une valeur de type [`<color>`](/fr/docs/Web/CSS/color_value).

### Composition d'un dégradé radial

![](radial_gradient.png)

Les dégradés radiaux sont définis par trois notions&nbsp;:

- Son centre
- Sa forme de terminaison&nbsp;: le contour et sa position
- Ses arrêts de couleur

Pour créer un dégradé progressif, la fonction `radial-gradient()` dessine une suite de formes concentriques qui s'étendent depuis le centre jusqu'à la forme de terminaison (et parfois au-delà). La forme du contour peut être un cercle ou une ellipse.

Les arrêts de couleurs sont positionnés selon une ligne virtuelle qui part du centre et qui va vers la droite. Les positions d'arrêt de couleur exprimées en pourcentage sont relatives à l'intersection de la forme de terminaison et cette ligne virtuelle. Chaque forme concentrique utilise une seule couleur, déterminée par la couleur de la ligne virtuelle qui la croise.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Dégradé simple

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
  background-image: radial-gradient(cyan 0%, transparent 20%, salmon 40%);
}
```

{{EmbedLiveSample('', 120, 130)}}

### Dégradé décentré

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
  background-image: radial-gradient(
    farthest-corner at 40px 40px,
    #f35 0%,
    #43e 100%
  );
}
```

{{EmbedLiveSample('', 240, 130)}}

### D'autres exemples

Voir [la page Utiliser les dégradés CSS](/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- Les autres fonctions de dégradés&nbsp;:
  - [`conic-gradient()`](/fr/docs/Web/CSS/gradient/conic-gradient)
  - [`linear-gradient()`](/fr/docs/Web/CSS/gradient/linear-gradient)
  - [`repeating-conic-gradient()`](/fr/docs/Web/CSS/gradient/repeating-conic-gradient)
  - [`repeating-linear-gradient()`](/fr/docs/Web/CSS/gradient/repeating-linear-gradient)
  - [`repeating-radial-gradient()`](/fr/docs/Web/CSS/gradient/repeating-radial-gradient)
- [`<image>`](/fr/docs/Web/CSS/image)
- [`image()`](/fr/docs/Web/CSS/image/image)
- [`element()`](/fr/docs/Web/CSS/element)
- [`image-set()`](/fr/docs/Web/CSS/image/image-set)
- [`cross-fade()`](/fr/docs/Web/CSS/cross-fade)
