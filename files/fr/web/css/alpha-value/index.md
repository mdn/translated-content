---
title: alpha-value
slug: Web/CSS/alpha-value
tags:
  - CSS
  - Reference
  - Type de donnée
translation_of: Web/CSS/alpha-value
---
{{CSSRef}}

Le [type de donnée](/fr/docs/Web/CSS/Types_CSS) CSS **`<alpha-value>`** représente une valeur qui peut être un nombre ({{cssxref("&lt;number&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}) et qui indique le [canal alpha](https://fr.wikipedia.org/wiki/Canal_alpha) ou _l'opacité_ d'une couleur.

## Syntaxe

Si la valeur est fournie comme un nombre, la valeur peut être comprise entre 0 (complètement transparent) et 1 (complètement opaque). Il est possible d'utiliser des valeurs décimales comprises entre ces valeurs. Les valeurs à l'extérieur de cet intervalle sont valides mais elles sont écrétées à 0 ou 1.

Lorsque la valeur est fournie en pourcentage 0% correspond à une transparence complète tandis que 100% correspond à une opacité totale.

## Interpolation

Lorsqu'une animation fait évoluer une valeur de type `<alpha-value>`, les valeurs sont interpolées comme des nombres réels à point flottant. La vitesse de l'interpolation est déterminée par la [fonction de temporisation](/fr/docs/Web/CSS/timing-function) associée à l'animation.

## Exemples

Certaines fonctionnalités CSS utilisent des valeurs `<alpha-value>` dont [les notations fonctionnelles pour les couleurs telles que `rgba()` et `hsla()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#RGB_colors) et aussi {{cssxref("shape-image-threshold")}} (qui détermine les pixels à prendre en compte pour une image lorsqu'on souhaite en extraire une forme).

```css
/* <rgba()> */
color: rgba(34, 12, 64, 0.6);
color: rgba(34.0 12 64 / 60%);
```

```css
/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;
```

## Spécifications

| Spécification                                                                                        | État                             | Commentaires                                                                                   |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Colors', '#type-def-alpha-value', '&lt;alpha-value&gt;')}} | {{Spec2('CSS4 Colors')}} | Aucune modification significative.                                                             |
| {{SpecName('CSS3 Colors', '#alphavaluedt', '&lt;alpha-value&gt;')}}             | {{Spec2('CSS3 Colors')}} | Introduit le type `<alpha-value>` ainsi que les notations fonctionnelles `rgba()` et `hsla()`. |
