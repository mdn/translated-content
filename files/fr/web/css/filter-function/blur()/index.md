---
title: blur()
slug: Web/CSS/filter-function/blur()
translation_of: Web/CSS/filter-function/blur()
browser-compat: css.types.filter-function.blur
---
{{CSSRef}}

La fonction CSS **`blur()`** permet d'appliquer [un flou gaussien](https://en.wikipedia.org/wiki/Gaussian_blur) sur l'image d'entrée. Le résultat de cette fonction est une valeur [`<filter-function>`](/fr/docs/Web/CSS/filter-function).

{{EmbedInteractiveExample("pages/css/function-blur.html")}}

## Syntaxe

```css
blur(rayon)
```

### Paramètres

- `rayon`
  - : Le rayon d'application du flou, défini par une longueur CSS ([`<length>`](/fr/docs/Web/CSS/length)). Cela définit l'écart-type de la fonction gaussienne appliquée (c'est-à-dire le nombre de pixels qui se mélangeront). Ainsi, plus la valeur est grande, plus le flou sera prononcé. Si on utilise la longueur nulle `0`, l'image ne sera pas modifiée. La valeur utilisée par défaut lors d'une interpolation est `0`.

## Exemples

### Définir un flou en pixels ou en rem

```css
blur(0);        /* Aucun effet */
blur(8px);      /* Un flou avec un rayon de 8px */
blur(1.17rem);  /* Un flou avec un rayon de 1.17rem */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<filter-function>`](/fr/docs/Web/CSS/filter-function) et les autres fonctions associées
  - [`brightness()`](/fr/docs/Web/CSS/filter-function/brightness())
  - [`contrast()`](/fr/docs/Web/CSS/filter-function/contrast())
  - [`drop-shadow()`](/fr/docs/Web/CSS/filter-function/drop-shadow())
  - [`grayscale()`](/fr/docs/Web/CSS/filter-function/grayscale())
  - [`hue-rotate()`](/fr/docs/Web/CSS/filter-function/hue-rotate())
  - [`invert()`](/fr/docs/Web/CSS/filter-function/invert())
  - [`opacity()`](/fr/docs/Web/CSS/filter-function/opacity())
  - [`saturate()`](/fr/docs/Web/CSS/filter-function/saturate())
  - [`sepia()`](/fr/docs/Web/CSS/filter-function/sepia())