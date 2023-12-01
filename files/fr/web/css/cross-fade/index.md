---
title: cross-fade()
slug: Web/CSS/cross-fade
---

{{CSSRef}}

La fonction [CSS](/fr/docs/Web/CSS) **`cross-fade()`** peut être utilisée afin de fusionner deux ou plusieurs images avec une transparence donnée.
On peut l'utiliser pour de nombreuses manipulations d'image&nbsp;: teinter une image avec une couleur donnée ou mettre en avant une zone de l'image en combinant celle-ci avec un dégradé radial.

## Syntaxe

> **Attention :** À l'heure actuelle (janvier 2019), la syntaxe décrite par la spécification et les syntaxes implémentées sont différentes. Nous commencerons ici par définir la syntaxe telle que définie par la spécification puis celle utilisée au sein des implémentations actuelles.

### Syntaxe de la spécification

La fonction `cross-fade()` prend comme argument une liste d'images accompagnée d'un pourcentage qui définit la proportion, en termes d'opacité, de chaque image dans le «&nbsp;mélange&nbsp;» obtenu. La valeur en pourcentage ne doit pas être entourée de guillemets, doit contenir le symbole `%` et être comprise entre 0% et 100%.

Cette fonction pourra être utilisée à tout endroit où une image CSS peut être utilisée.

#### Utilisation des pourcentages

Le pourcentage utilisé pour chaque image peut être considéré comme une valeur d'opacité. Un coefficient à 0% indiquera que l'image sera complètement transparente pour le mélange final tandis qu'un coefficient à 100% rendra l'image complètement opaque.

```css
cross-fade(url(white.png)   0%, url(black.png) 100%); /* complètement noire */
cross-fade(url(white.png)  25%, url(black.png)  75%); /* 25% blanche, 75% noire*/
cross-fade(url(white.png)  50%, url(black.png)  50%); /* 50% blanche, 50% noire */
cross-fade(url(white.png)  75%, url(black.png)  25%); /* 75% blanche, 25% noire */
cross-fade(url(white.png) 100%, url(black.png)   0%); /* complètement blanche */
cross-fade(url(green.png)  75%, url(red.png)    75%); /* image avec du rouge et vert à 75% */
```

Si un des pourcentages est absent, l'ensemble des pourcentages exprimés est sommé et la différence avec 100% est répartie également entre toutes les images qui n'ont pas de coefficient.

Dans le cas le plus simple, seules deux images sont fusionnées. Dans ce cas, seul un coefficient est nécessaire (la seconde image recevra dans tous les cas le complément à 100% du premier coefficient). Ainsi, si on utilise 0% pour la première image, le mélange résultant correspondra à la deuxième image. Inversement, un coefficient de 100% pour la première image masquera complètement la seconde. Utiliser 50% permettra d'obtenir un mélange à proportions égales. Un coefficient de 75% montrera la première image à 75% et la seconde à 25%.

Les lignes précédentes peuvent ainsi s'écrire également&nbsp;:

```css
cross-fade(url(white.png)   0%, url(black.png)); /* complètement noire */
cross-fade(url(white.png)  25%, url(black.png)); /* 25% blanche, 75% noire*/
cross-fade(url(white.png), url(black.png)); /* 50% blanche, 50% noire */
cross-fade(url(white.png)  75%, url(black.png)); /* 75% blanche, 25% noire */
cross-fade(url(white.png) 100%, url(black.png)); /* complètement blanche */
cross-fade(url(green.png)  75%, url(red.png) 75%); /* image avec du rouge et vert à 75% */
```

Si aucun pourcentage n'est indiqué, toutes les images contribuent également (si on a deux images, chacune contribuera à 50%). Les lignes qui suivent sont (quasiment) identiques&nbsp;:

```css
cross-fade( url(red.png), url(yellow.png), url(blue.png)); /* chacune aura 33.3333% d'opacité */
cross-fade( url(red.png) 33.33%, url(yellow.png) 33.33%, url(blue.png) 33.33%);
```

### Syntaxe des implémentations (plus ancienne)

```css
cross-fade( <image>, <image>, <percentage> )
```

La spécification de la fonction `cross-fade()` permet d'avoir plusieurs images et d'associer un coefficient de transparence à chacune des images. Ce n'a pas toujours été le cas et la syntaxe originale, implémentée par certains navigateurs, ne permet d'avoir que deux images pour lesquelles la somme des coefficients doit être 100%. Cette syntaxe est prise en charge par Safari et préfixée avec `-webkit-` pour Chrome, Opera et les autres navigateurs basés sur Blink.

```css
cross-fade(url(white.png), url(black.png), 0%);   /* complètement noire */
cross-fade(url(white.png), url(black.png), 25%);  /* 25% blanche, 75% noire */
cross-fade(url(white.png), url(black.png), 50%);  /* 50% blanche, 50% noire */
cross-fade(url(white.png), url(black.png), 75%);  /* 75% blanche, 25% noire */
cross-fade(url(white.png), url(black.png), 100%); /* complètement blanche */
```

Pour cette syntaxe, les deux images sont déclarées en premières et séparées par une virgule puis arrive le coefficient. Si la virgule ou si le caractère pourcent est absent, la propriété est considérée invalide. Le coefficient utilisé dans la syntaxe est attribué à la première image. La deuxième image utilisera donc un coefficient implicite qui est le complément à 100 du premier complément.

Dans les exemples associés à la syntaxe de la spécification, on avait un cas où la somme des coefficients valait 150%&nbsp;: ce cas ne serait pas possible avec la syntaxe implémentée actuellement. De même, on ne peut pas mélanger trois images (ou plus) avec cette syntaxe.

## Accessibilité

Les outils d'assistance ne peuvent pas analyser les images d'arrière-plan. Si l'image contient des informations essentielles à la compréhension du document, mieux vaudra la décrire de façon sémantique dans le document afin que ce dernier soit correctement accessible. Lorsqu'on utilisera des images d'arrière-plan, on s'assurera que le contraste est suffisamment élevé par rapport au texte qui serait affiché par-dessus.

- [Comprendre les règles WCAG 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_—_Providing_text_alternatives_for_non-text_content)
- [Comprendre les critères de succès 1.1.1 | Comprendre WCAG 2.0 (en anglais)](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Ancienne syntaxe pour cross-fade

#### HTML

```html
<div class="crossfade"></div>
```

#### CSS

```css
.crossfade {
  width: 300px;
  height: 300px;
  background-image: -webkit-cross-fade(url("br.png"), url("tr.png"), 75%);
  background-image: cross-fade(url("br.png"), url("tr.png"), 75%);
}
```

#### Résultat

{{EmbedLiveSample("", "330", "330")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<image>`](/fr/docs/Web/CSS/image)
- [`url()`](</fr/docs/Web/CSS/url()>)
- [`image()`](</fr/docs/Web/CSS/image/image()>)
- [`image-set()`](</fr/docs/Web/CSS/image/image-set()>)
- [`element()`](</fr/docs/Web/CSS/element()>)
- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- Fonctions de création de dégradés&nbsp;:
  - [`linear-gradient()`](/fr/docs/Web/CSS/gradient/linear-gradient)
  - [`radial-gradient()`](/fr/docs/Web/CSS/gradient/radial-gradient)
  - [`repeating-linear-gradient()`](/fr/docs/Web/CSS/gradient/repeating-linear-gradient)
  - [`repeating-radial-gradient()`](/fr/docs/Web/CSS/gradient/repeating-radial-gradient)
  - [`conic-gradient()`](/fr/docs/Web/CSS/gradient/conic-gradient)
