---
title: repeating-linear-gradient()
slug: Web/CSS/gradient/repeating-linear-gradient
---

{{CSSRef}}

La [fonction](/fr/docs/Web/CSS/CSS_Functions) [CSS](/fr/docs/Web/CSS) **`repeating-linear-gradient()`** créé une image composée de dégradés qui se répètent. Cela fonctionne de manière similaire aux dégradés linéaires simples représentés par [`linear-gradient`](/fr/docs/Web/CSS/gradient/linear-gradient), mais les arrêts de couleurs sont automatiquement répétés, indéfiniment, dans toutes les directions pour couvrir l'ensemble du conteneur. Le résultat de cette fonction est un objet de type [`<gradient>`](/fr/docs/Web/CSS/gradient), un type spécifique d'[image](/fr/docs/Web/CSS/image).

{{EmbedInteractiveExample("pages/css/function-repeating-linear-gradient.html")}}

La longueur du dégradé répété est la distance entre le premier et le dernier arrêt de couleur. Si la première couleur n'a pas de longueur explicite pour placer l'arrêt, celle-ci vaut 0 par défaut. Pour chaque répétition, les positions des arrêts de couleur sont décalées d'un multiple de la longueur du dégradé unitaire. Par conséquent, la ligne de la couleur de fin coïncide toujours avec la ligne de la couleur de début. Si les deux ne sont pas identiques, on obtiendra alors une transition abrupte. On peut résoudre ce point en réutilisant la première couleur comme dernière couleur.

Comme les autres dégradés, un dégradé linéaire répété [n'a pas de dimensions intrinsèques](/fr/docs/Web/CSS/image#description), c'est-à-dire qu'il n'a pas de taille ou de proportions préférées. Sa taille réelle correspondra à la taille de l'élément auquel il est appliqué.

Comme pour les autres dégradés, un dégradé linéaire répété n'est pas une couleur (type [`<color>`](/fr/docs/Web/CSS/color_value)) CSS mais un type particulier d'image (type [`<image>`](/fr/docs/Web/CSS/image). À ce titre, `repeating-linear-gradient()` ne fonctionnera pas pour [`background-color`](/fr/docs/Web/CSS/background-color) et les autres propriétés qui utilisent le type de données [`<color>`](/fr/docs/Web/CSS/color_value).

## Syntaxe

```css
/* Un dégradé répétitif sur un axe à 45 degrés,
   débutant bleu et finissant rouge, répété 3 fois */
repeating-linear-gradient(45deg, blue, red 33.3%);

/* Un dégradé répétitif allant du coin inférieur droit
   au coin supérieur gauche débutant bleu et finissant rouge
   et répété tous les 20 pixels */
repeating-linear-gradient(to left top, blue, red 20px);

/* Un dégradé répétitif allant du bas vers le haut,
   débutant bleu, étant vert après 40% et finissant rouge */
repeating-linear-gradient(0deg, blue, green 40%, red);

/* Un dégradé répété cinq fois, progressant de gauche à
   droite, commençant en rouge, passant en vert puis à
   nouveau en rouge */
repeating-linear-gradient(to right, red 0%, green 10%, red 20%);
```

### Valeurs

- `<side-or-corner>`

  - : La position du point de départ de la ligne du dégradé. Si elle est indiquée, elle se compose du mot-clé `to` suivi d'un à deux mots-clés&nbsp;: le premier indiquant le côté horizontal (`left` pour gauche ou `right` pour droite), et le second indiquant le côté vertical (`top` pour haut ou `bottom` pour bas). L'ordre des mots-clés pour le côté n'a pas d'importance. Si cette valeur n'est pas indiquée, elle vaudra `to bottom` par défaut.

    Les valeurs `to top`, `to bottom`, `to left`, and `to right` sont respectivement équivalentes aux angles `0deg`, `180deg`, `270deg`, et `90deg`. Les autres valeurs sont converties en un angle correspondant.

- [`<angle>`](/fr/docs/Web/CSS/angle)
  - : L'angle indiquant la direction de la ligne du dégradé. Une valeur de `0deg` est équivalente à `to top`. Les valeurs d'angle vont croissant dans le sens horaire.
- `<linear-color-stop>`
  - : Un arrêt de couleur décrit par une valeur [`<color>`](/fr/docs/Web/CSS/color_value), suivie d'une ou deux positions optionnelles (une position étant donnée par un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)) ou une longueur (type [`<length>`](/fr/docs/Web/CSS/length)) le long de l'axe du dégradé). Un pourcentage à `0%`, ou une longueur à `0` représente le début du dégradé. La valeur `100%` correspond à 100% de la taille de l'image, indiquant que le dégradé ne se répètera pas.
- `<color-hint>`
  - : L'indication de couleur est une indication pour l'interpolation des couleurs le long du dégradé et entre deux points d'arrêt de couleur. La longueur définit l'emplacement où la transition entre les deux couleurs est appliquée à moitié. Si cette valeur est absente, le niveau intermédiaire de la transition se situera à équidistance des deux points d'arrêt de couleur.

> **Note :** Le rendu des arrêts de couleurs des dégradés CSS suit les mêmes règles que les [arrêts de couleur pour les dégradés SVG](/fr/docs/Web/SVG/Tutorial/Gradients).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Bandes zébrées

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 20px,
    black 20px,
    black 40px
  );
  /* avec plusieurs arrêts de couleur */
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 20px,
    black 20px 40px
  );
}
```

{{EmbedLiveSample('', 120, 120)}}

### Dix barres répétées horizontalement

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(26, 198, 204),
    rgb(26, 198, 204) 7%,
    rgb(100, 100, 100) 10%
  );
}
```

{{EmbedLiveSample('', 120, 120)}}

Le dernier arrêt de couleur étant situé à 10% et le dégradé étant vertical, chaque dégradé unitaire occupe 10% de la hauteur totale, ce qui permet d'avoir 10 barres horizontales.

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
  - [`repeating-radial-gradient()`](/fr/docs/Web/CSS/gradient/repeating-radial-gradient)
- [`<image>`](/fr/docs/Web/CSS/image)
- [`image()`](/fr/docs/Web/CSS/image/image)
- [`element()`](/fr/docs/Web/CSS/element)
- [`image-set()`](/fr/docs/Web/CSS/image/image-set)
- [`cross-fade()`](/fr/docs/Web/CSS/cross-fade)
