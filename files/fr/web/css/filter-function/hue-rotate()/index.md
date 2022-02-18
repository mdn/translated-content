---
title: hue-rotate()
slug: Web/CSS/filter-function/hue-rotate()
translation_of: Web/CSS/filter-function/hue-rotate()
browser-compat: css.types.filter-function.hue-rotate
---
{{CSSRef}}

La fonction CSS **`hue-rotate()`** permet d'appliquer une rotation de teinte sur une image. Le résultat de cette fonction est une valeur [`<filter-function>`](/fr/docs/Web/CSS/filter-function).

{{EmbedInteractiveExample("pages/css/function-hue-rotate.html")}}

## Syntaxe

```css
hue-rotate(angle)
```

### Paramètres

- `angle`
  - : L'angle de rotation sur le cercle des couleurs, exprimé avec une valeur de type [`<angle>`](/fr/docs/Web/CSS/angle). Une valeur de `0deg` laissera l'image inchangée. La valeur utilisée par défaut pour une interpolation sera `0`. Bien qu'il n'y ait pas de valeur maximale, la valeur de l'angle est toujours ramenée entre `360deg` et `0deg`.

## Exemples

### Exemples de valeurs correctes pour hue-rotate()

```css
hue-rotate(-90deg);  /* Correspond à une rotation de 270deg */
hue-rotate(0deg);    /* Sans effet */
hue-rotate(90deg);   /* Rotation de 90deg */
hue-rotate(.5turn);  /* Rotation de 180deg */
hue-rotate(405deg);  /* Correspond à une rotation de 45deg */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<filter-function>`](/fr/docs/Web/CSS/filter-function) et les autres fonctions associées
  - [`blur()`](/fr/docs/Web/CSS/filter-function/blur())
  - [`brightness()`](/fr/docs/Web/CSS/filter-function/brightness())
  - [`contrast()`](/fr/docs/Web/CSS/filter-function/contrast())
  - [`drop-shadow()`](/fr/docs/Web/CSS/filter-function/drop-shadow())
  - [`grayscale()`](/fr/docs/Web/CSS/filter-function/grayscale())
  - [`invert()`](/fr/docs/Web/CSS/filter-function/invert())
  - [`opacity()`](/fr/docs/Web/CSS/filter-function/opacity())
  - [`saturate()`](/fr/docs/Web/CSS/filter-function/saturate())
  - [`sepia()`](/fr/docs/Web/CSS/filter-function/sepia())