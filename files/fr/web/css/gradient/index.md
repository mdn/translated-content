---
title: <gradient>
slug: Web/CSS/gradient
---

{{CSSRef}}

Le type de donnée CSS **`<gradient>`** permet de représenter une {{cssxref("&lt;image&gt;")}} contenant un dégradé entre deux ou plusieurs couleurs. Un dégradé CSS n'est pas une couleur CSS (type {{cssxref("&lt;color&gt;")}}) mais une image [sans dimension intrinsèque](/fr/docs/Web/CSS/image) (elle n'a aucune taille naturelle ou ratio), sa taille réelle sera celle de l'élément auquel elle est appliquée.

{{EmbedInteractiveExample("pages/css/type-gradient.html")}}

Comme pour l'interpolation des autres couleurs, les dégradés sont calculés dans l'espace de couleurs alpha prémultiplié. Cela permet d'éviter l'apparition de nuances de gris lorsque la couleur et l'opacité varient (on peut constater ce problème avec le mot-clé `transparent` dans d'anciens navigateurs).

## Les types de dégradés

### Les dégradés linéaires

Ils sont générés à partir de la fonction {{cssxref("linear-gradient", "linear-gradient()")}} : la couleur évolue suivant un axe imaginaire :

```html hidden
A rainbow made from a gradient
```

```css
body {
  background: -moz-linear-gradient(
    left,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background: -webkit-linear-gradient(
    left,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background: -ms-linear-gradient(
    left,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background: -o-linear-gradient(
    left,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
}
```

{{EmbedLiveSample('Les_dégradés_linéaires', 600, 20)}}

### Les dégradés radiaux

Ils sont générés à partir de la fonction {{cssxref("radial-gradient", "radial-gradient()")}}. Plus on s'éloigne du point d'origine, plus la couleur varie par rapport à la couleur d'origine :

```html hidden
Radial gradient
```

```css
body {
  background: -moz-radial-gradient(red, yellow, rgb(30, 144, 255)) repeat scroll
    0% 0% transparent;
  background: radial-gradient(red, yellow, rgb(30, 144, 255));
}
```

{{EmbedLiveSample('Les_dégradés_radiaux', 600, 20)}}

### Les dégradés répétés

Ce sont des dégradés linéaires de taille fixe ou des dégradés radiaux qui sont répétés autant que nécessaire pour remplir la boîte visée :

```html hidden
Repeating gradient
```

```css
body {
  background: -moz-repeating-linear-gradient(
    top left -45deg,
    red,
    red 5px,
    white 5px,
    white 10px
  );
  background: repeating-linear-gradient(
    to top left,
    red,
    red 5px,
    white 5px,
    white 10px
  );
}
```

{{EmbedLiveSample('Les_dégradés_répétés', 600, 20)}}

### Dégradé conique

Les couleurs de transitions s'appliquent progressivement autour d'un cercle. Un tel dégradé est généré avec la fonction {{cssref("conic-gradient","conic-gradient()")}}.

```html hidden
<div class="conic-gradient">Conic gradient</div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.conic-gradient {
  background: conic-gradient(lightpink, white, powderblue);
}
```

{{EmbedLiveSample('Dégradé_conique', 240, 80)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les dégradés CSS](/fr/docs/Web/CSS/Utilisation_de_dégradés_CSS)
- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("conic-gradient", "conic-gradient()")}}
- {{cssxref("linear-gradient", "linear-gradient()")}}
- {{cssxref("radial-gradient", "radial-gradient()")}}
- {{cssxref("repeating-linear-gradient", "repeating-linear-gradient()")}}
- {{cssxref("repeating-radial-gradient", "repeating-radial-gradient()")}}
- [Les types de donnée en CSS](/fr/docs/Web/CSS/Types_CSS)
- [Les unités et valeurs en CSS](/fr/docs/Web/CSS/Valeurs_et_unités_CSS)
- [Introduction à CSS : les unités et les valeurs](/fr/docs/Apprendre/CSS/Introduction_à_CSS/Values_and_units)
