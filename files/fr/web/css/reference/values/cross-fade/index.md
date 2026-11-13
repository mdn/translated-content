---
title: Fonction CSS `cross-fade()`
short-title: cross-fade()
slug: Web/CSS/Reference/Values/cross-fade
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`cross-fade()`** peut être utilisée pour fusionner deux ou plusieurs images avec une transparence définie.
Elle peut être utilisée pour de nombreuses manipulations d'images de base, telles que la coloration d'une image avec une couleur unie ou la mise en évidence d'une zone particulière de la page en combinant une image avec un dégradé radial.

## Syntaxe

> [!WARNING]
> La spécification et les implémentations actuelles ont des syntaxes différentes.
> La syntaxe de la spécification est expliquée en premier.

### Syntaxe de la spécification

La fonction `cross-fade()` prend comme argument une liste d'images accompagnée d'un pourcentage qui définit la proportion, en termes d'opacité, de chaque image dans le «&nbsp;mélange&nbsp;» obtenu. La valeur en pourcentage ne doit pas être entourée de guillemets, doit contenir le symbole `%` et être comprise entre 0% et 100%.

Cette fonction peut être utilisée à tout endroit où une image CSS peut être utilisée.

#### Utilisation des pourcentages

Le pourcentage utilisé pour chaque image peut être considéré comme une valeur d'opacité. Un coefficient à 0% indique que l'image est complètement transparente pour le mélange final tandis qu'un coefficient à 100% rend l'image complètement opaque.

```css
cross-fade(url("white.png") 0%, url("black.png") 100%); /* complètement noire */
cross-fade(url("white.png") 25%, url("black.png") 75%); /* 25% blanche, 75% noire*/
cross-fade(url("white.png") 50%, url("black.png") 50%); /* 50% blanche, 50% noire */
cross-fade(url("white.png") 75%, url("black.png") 25%); /* 75% blanche, 25% noire */
cross-fade(url("white.png") 100%, url("black.png") 0%); /* complètement blanche */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* image avec du rouge et vert à 75% */
```

Si des pourcentages sont omis, tous les pourcentages définis sont additionnés et soustraits de `100%`.
Si le résultat est supérieur à 0%, il est ensuite réparti également entre toutes les images dont les pourcentages sont omis.

Dans le cas le plus simple, deux images s'estompent l'une par rapport à l'autre. Pour ce faire, il suffit d'attribuer un pourcentage à l'une des images&nbsp;; l'autre s'estompe en conséquence.
Par exemple, une valeur de 0% définie pour la première image ne montre que la deuxième image, tandis qu'une valeur de 100% ne montre que la première.
Une valeur de 25% rend la première image à 25% et la deuxième à 75%. La valeur de 75% est l'inverse, montrant la première image à 75% et la deuxième à 25%.

Les lignes précédentes peuvent ainsi s'écrire également&nbsp;:

```css
cross-fade(url("white.png") 0%, url("black.png")); /* complètement noire */
cross-fade(url("white.png") 25%, url("black.png")); /* 25% blanche, 75% noire*/
cross-fade(url("white.png"), url("black.png")); /* 50% blanche, 50% noire */
cross-fade(url("white.png") 75%, url("black.png")); /* 75% blanche, 25% noire */
cross-fade(url("white.png") 100%, url("black.png")); /* complètement blanche */
cross-fade(url("green.png") 75%, url("red.png") 75%); /* image avec du rouge et vert à 75% */
```

Si aucun pourcentage n'est indiqué, les deux images ont une opacité de 50%, avec un fondu enchaîné qui se traduit par une fusion homogène des deux images.
Dans l'exemple 50%/50% ci-dessus, il n'était pas nécessaire d'indiquer les pourcentages, car lorsqu'une valeur de pourcentage est omise, les pourcentages inclus sont additionnés et soustraits de 100%.
Le résultat, s'il est supérieur à 0, est ensuite réparti à parts égales entre toutes les images dont les pourcentages ont été omis.

Dans le dernier exemple, la somme des deux pourcentages n'est pas égale à 100%, et les deux images conservent donc leurs opacités respectives.

Si aucun pourcentage n'est indiqué, toutes les images contribuent également (si on a deux images, chacune contribue à 50%). Les lignes qui suivent sont (quasiment) identiques&nbsp;:

```css
cross-fade(url("red.png"), url("yellow.png"), url("blue.png")); /* chacune a 33.3333% d'opacité */
cross-fade(url("red.png") 33.33%, url("yellow.png") 33.33%, url("blue.png") 33.33%);
```

### Syntaxe des implémentations (plus ancienne)

```css
cross-fade( <image>, <image>, <percentage> )
```

La spécification pour la fonction `cross-fade()` permet d'utiliser plusieurs images et pour chaque image d'avoir des valeurs de transparence indépendantes des autres valeurs.
Ce n'était pas toujours le cas.
La syntaxe originale, qui a été implémentée dans certains navigateurs, ne permettait que deux images, avec la somme de la transparence de ces deux images étant exactement de 100%.
La syntaxe originale est prise en charge dans Safari et avec le préfixe `-webkit-` dans Chrome, Opera et d'autres navigateurs basés sur Blink.

```css
cross-fade(url("white.png"), url("black.png"), 0%); /* complètement noire */
cross-fade(url("white.png"), url("black.png"), 25%); /* 25% blanche, 75% noire */
cross-fade(url("white.png"), url("black.png"), 50%); /* 50% blanche, 50% noire */
cross-fade(url("white.png"), url("black.png"), 75%); /* 75% blanche, 25% noire */
cross-fade(url("white.png"), url("black.png"), 100%); /* complètement blanche */
```

Dans la syntaxe implémentée, les deux images séparées par des virgules sont déclarées en premier, suivies d'une virgule et de la valeur de pourcentage requise. Omettre la virgule ou le pourcentage invalide la valeur.
Le pourcentage est l'opacité de la première image déclarée. Le pourcentage inclus est soustrait de 100%, la différence étant l'opacité de la deuxième image.

L'exemple vert/rouge (avec les pourcentages totalisant 150%) et l'exemple jaune/rouge/bleu (avec trois images) de la section de syntaxe de la spécification, ne sont pas possibles dans cette implémentation.

## Accessibilité

Les navigateurs ne fournissent aucune information spéciale sur les images de fond aux technologies d'assistance. Cela est particulièrement important pour les lecteurs d'écran, car un lecteur d'écran n'annonce pas leur présence et ne transmet donc aucune information à ses utilisateur·ice·s.
Si l'image contient des informations cruciales pour comprendre l'objectif global de la page, il est préférable de les décrire de manière sémantique dans le document.
Lors de l'utilisation d'images de fond, assurez-vous que le contraste des couleurs est suffisamment élevé pour que tout texte soit lisible sur l'image ainsi que si les images sont absentes.

- [Comprendre le WCAG sur MDN, explications de la règle 1.1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.1_—_des_équivalents_textuels_doivent_être_fournis_pour_tout_contenu_non_textuel)
- [Comprendre les critères de succès 1.1.1 | Comprendre le WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Syntaxe formelle

{{CSSSyntax}}

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

{{EmbedLiveSample("Ancienne syntaxe pour cross-fade", 330, 330)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;image&gt;")}}
- Le type de donnée {{CSSxRef("url_value", "&lt;url&gt;")}}
- La fonction {{CSSxRef("image/image", "image()")}}
- La fonction {{CSSxRef("image/image-set", "image-set()")}}
- La fonction {{CSSxRef("element()")}}
- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
- Fonctions de création de dégradés&nbsp;: {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
