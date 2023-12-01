---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
---

{{CSSRef}}

La [fonction](/fr/docs/Web/CSS/CSS_Functions) [CSS](/fr/docs/Web/CSS) **`repeating-conic-gradient()`** crée une image composée d'un dégradé conique répété. Elle permet d'avoir un motif répété qu'on pourrait décrire avec une seule itération grâce à [`conic-gradient`](/fr/docs/Web/CSS/gradient/conic-gradient) et les transitions de couleurs évoluent en cercle autour du centre (plutôt que d'évoluer sur l'axe qui s'étend depuis le centre, comme avec [`repeating-radial-gradient()`](/fr/docs/Web/CSS/gradient/repeating-radial-gradient)).

{{EmbedInteractiveExample("pages/css/function-repeating-conic-gradient.html")}}

## Syntaxe

```css
/* Une étoile avec deux niveaux de bleu. Le dégradé
   est centré dans le quart supérieur gauche et tourné
   de 3 degrés, il n'y a donc pas de ligne horizontale */
background: repeating-conic-gradient(
  from 3deg at 25% 25%,
  hsl(200, 100%, 50%) 0deg 15deg,
  hsl(200, 100%, 60%) 10deg 30deg
);
```

### Valeurs

- [`<angle>`](/fr/docs/Web/CSS/angle)
  - : Lorsque cet angle est précédé du mot-clé `from`, cela définit la rotation du dégradé dans le sens horaire.
- `<position>`
  - : Une position définie avec la même syntaxe que la propriété [`background-position`](/fr/docs/Web/CSS/background-position). Cette position définit le centre du dégradé. Lorsque cette valeur est absente, la valeur utilisée par défaut est `center`, ce qui indique que le dégradé est centré.
- `<angular-color-stop>`
  - : Une valeur [`<color>`](/fr/docs/Web/CSS/color_value) pour un arrêt de couleur, suivie par une ou plusieurs positions d'arrêt (données par un [`<angle>`](/fr/docs/Web/CSS/angle) le long de l'arc). La taille de l'arc répété pour le dégradé est donné par l'angle du dernier arrêt de couleur auquel on a soustrait l'angle du premier arrêt de couleur.
- `<color-hint>`
  - : Une indication d'[interpolation](/fr/docs/Glossary/Interpolation) qui définit la façon dont le dégradé progresse entre deux arrêts de couleurs adjacents. Cette indication indique l'emplacement où la couleur doit être la couleur intermédiaire entre les deux arrêts environnant. Si cette valeur est absente, la moitié de la transition entre les couleurs sera atteinte à la moitié de l'arc entre les deux arrêts.

> **Note :** Le rendu des arrêts de couleur pour les dégradés CSS suit les mêmes règles que celui des arrêts de couleur pour [les dégradés SVG](/fr/docs/Web/SVG/Tutorial/Gradients).

## Description

La syntaxe pour `repeating-conic-gradient()` est semblable à celle de [`conic-gradient()`](/fr/docs/Web/CSS/gradient/conic-gradient) et à celle de [`repeating-radial-gradient()`](/fr/docs/Web/CSS/gradient/repeating-radial-gradient). À l'instar du dégradé conique unitaire, les arrêts de couleur sont placés autour d'un arc. Comme pour les dégradés radiaux répétés, la taille de la portion répétée correspond au premier arrêt de couleur auquel on a soustrait l'angle du dernier arrêt de couleur.

![Comparaison des arrêts de couleur entre les dégradés coniques et radiaux, simples ou répétés.](repeatingconicgradient.png)

Les dégradés ci-dessus sont définis avec un tiers de bleu, un tiers de rouge et un tiers de jaune.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Pour un dégradé répété, on définit le premier et le dernier arrêt de couleur. Si les valeurs ne sont pas explicitement définies, elles correspondent respectivement aux angles `0` et `360deg`. Lorsque ces valeurs sont utilisées par défaut, l'arc qui est répété occupe 360 degrés et il n'y a donc pas de répétition.

Comme le dégradé conique unitaire, les arrêts de couleur sont placés le long d'un arc de dégradé, la circonférence d'un cercle plutôt que le long d'une ligne qui est émise depuis le centre du dégradé. La transition entre les couleurs se fait autour du centre, en démarrant en haut s'il n'y a pas d'indication `from <angle>`, dans le sens des aiguilles d'une montre, pour l'angle indiqué, puis se répétant.

Un dégradé conique répété est défini en indiquant un angle de rotation, le centre du dégradé et une liste d'arrêts de couleur. Les arrêts de couleur sont définis avec un angle (type CSS [`<angle>`](/fr/docs/Web/CSS/angle)). Les unités qui permettent de déclarer un angle sont `deg` (pour les degrés), `grad` (pour les grades), `rad` (pour les radians) et `turn` (pour les tours). Un cercle se compose de 360 degrés, 400 grades, 2π radians et d'un tour. Les navigateurs qui implémentent les dégradés coniques répétés acceptent également les pourcentages (100% correspond à 360 degrés), mais ce type de valeur ne fait pas partie de la spécification.

La syntaxe de définition permet de placer le centre du dégradé à l'intérieur ou encore à l'extérieur de l'image. Les valeurs permettant de définir la position du centre s'écrivent comme la syntaxe à deux valeurs de [`background-position`](/fr/docs/Web/CSS/background-position).

#### Personnaliser des dégradés

En ajoutant des arrêts de couleur à l'arc du dégradé, il est possible de créer des dégradés sur mesure. La position d'un arrêt de couleur se définit via un [`<angle>`](/fr/docs/Web/CSS/angle). Si on n'indique pas de position pour un arrêt, celui-ci est placé à mi-parcours entre le précédent et le suivant. Si la position du premier ou du dernier arrêt ne sont pas définies, par défaut, ils seront placés à `0deg` et à `360deg` respectivement.

Attention, lorsque ces valeurs par défaut sont utilisées, l'arc occupe tout le cercle et le dégradé n'est donc pas répété. Si on déclare un angle différent de 0 ou 360 degrés pour le premier et le dernier arrêt, le dégradé se répètera selon cette valeur. Ainsi, si on ne déclare pas d'angle pour la première couleur et 10% pour le dernier arrêt de couleur, l'arc se répètera dix fois. Le point de départ correspond au premier arrêt de couleur déclaré et le dernier arrêt de couleur correspond au dernier angle déclaré.

Les deux formulations suivantes sont donc équivalentes&nbsp;:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Par défaut, les couleurs évoluent progressivement entre chaque arrêt et le milieu de l'arc correspondra à la moyenne des couleurs. Il est possible de déplacer ce point intermédiaire en fournissant une indication quant à l'emplacement du milieu de la transition.

Si deux (voire plusieurs) couleurs sont au même emplacement, la transition sera une ligne brutale entre la première et la dernière couleur déclarées à cet emplacement.

Bien qu'il soit possible de mélanger et de combiner différentes unités pour les angles, il est préférable d'éviter par souci de lisibilité et maintenabilité.

### Syntaxe formelle

{{csssyntax}}

## Accessibilité

Les navigateurs ne fournissent pas d'informations spécifiques aux outils d'assistance quant aux images d'arrière-plan. Les lecteurs d'écran ne pourront donc pas annoncer le sens de l'image aux utilisatrices et utilisateurs. Bien qu'il soit possible de créer des camemberts, damiers, etc. avec CSS, si l'image contient des informations critiques pour la compréhension générale de la page, mieux vaudra décrire ces informations de façon sémantique dans le document, car CSS ne fournit pas de méthode native pour indiquer un texte alternatif.

- [Explications MDN pour le WCAG et la règle 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Comprendre les critères de réussite 1.1.1 - Guide de compréhension WCAG 2.0 du W3C (en anglais)](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Exemples

### Étoile en noir et blanc

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```html hidden
<div></div>
```

```css
div {
  background-image: repeating-conic-gradient(#fff 0 9deg, #000 9deg 18deg);
}
```

{{EmbedLiveSample("", 220, 220)}}

### Dégradé désaxé

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: repeating-conic-gradient(
    from 3deg at 25% 25%,
    green,
    blue 2deg 5deg,
    green,
    yellow 15deg 18deg,
    green 20deg
  );
}
```

{{EmbedLiveSample("", 220, 220)}}

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
  - [`radial-gradient()`](/fr/docs/Web/CSS/gradient/radial-gradient)
  - [`repeating-linear-gradient()`](/fr/docs/Web/CSS/gradient/repeating-linear-gradient)
  - [`repeating-radial-gradient()`](/fr/docs/Web/CSS/gradient/repeating-radial-gradient)
- [`<image>`](/fr/docs/Web/CSS/image)
- [`image()`](/fr/docs/Web/CSS/image/image)
- [`element()`](/fr/docs/Web/CSS/element)
- [`image-set()`](/fr/docs/Web/CSS/image/image-set)
- [`cross-fade()`](/fr/docs/Web/CSS/cross-fade)
