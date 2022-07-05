---
title: invert()
slug: Web/CSS/filter-function/invert
translation_of: Web/CSS/filter-function/invert()
original_slug: Web/CSS/filter-function/invert()
browser-compat: css.types.filter-function.invert
---
{{CSSRef}}

La fonction CSS **`invert()`** permet d'inverser les couleurs de l'image. La valeur obtenue par cette fonction est de type [`<filter-function>`](/fr/docs/Web/CSS/filter-function).

{{EmbedInteractiveExample("pages/css/function-invert.html")}}

## Syntaxe

```css
invert(multiplicateur)
```
### Paramètres

- `multiplicateur`
  - : L'intensité de la conversion, indiquée sous la forme d'un nombre ([`<number>`](/fr/docs/Web/CSS/number)) ou d'un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)). Avec `100%`, les couleurs seront entièrement inversées (ce sera un négatif de l'image originale). Une valeur de `0%` ne modifiera pas l'image. Les valeurs intermédiaires auront un effet proportionnel. Lors d'une interpolation, la valeur utilisée par défaut est `0`.

## Exemples

### Exemples de valeurs correctes pour invert()

```css
invert(0);     /* Aucun effet */
invert(.6);    /* Inversion à 60% */
invert(100%);  /* Négatif de l'image originale */
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
  - [`hue-rotate()`](/fr/docs/Web/CSS/filter-function/hue-rotate())
  - [`opacity()`](/fr/docs/Web/CSS/filter-function/opacity())
  - [`saturate()`](/fr/docs/Web/CSS/filter-function/saturate())
  - [`sepia()`](/fr/docs/Web/CSS/filter-function/sepia())
