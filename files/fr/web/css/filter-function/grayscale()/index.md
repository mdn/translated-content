---
title: grayscale()
slug: Web/CSS/filter-function/grayscale()
translation_of: Web/CSS/filter-function/grayscale()
browser-compat: css.types.filter-function.grayscale
---
{{CSSRef}}

La fonction CSS **`grayscale()`** convertit une image en niveaux de gris. Le résultat de cette fonction est une valeur [`<filter-function>`](/fr/docs/Web/CSS/filter-function).

{{EmbedInteractiveExample("pages/css/function-grayscale.html")}}

## Syntaxe

```css
grayscale(multiplicateur)
```

### Paramètres

- `multiplicateur`
  - : L'intensité de la conversion, indiquée sous la forme d'un nombre ([`<number>`](/fr/docs/Web/CSS/number)) ou d'un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)). Avec une valeur égale à `100%`, l'image obtenue sera complètement en niveaux de gris. Avec une valeur égale à `0%`, l'image source restera inchangée. Les valeurs comprises entre `0%` et `100%` auront un effet intermédiaire (progression linéaire). Dans le cas d'une interpolation, la valeur par défaut utilisée est `0`.

## Exemples

### Exemples de valeurs correctes pour grayscale()

```css
grayscale(0)     /* Aucun effet */
grayscale(.7)    /* Converti à 70% en niveaux de gris */
grayscale(100%)  /* Uniquement en niveaux de gris */
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
  - [`hue-rotate()`](/fr/docs/Web/CSS/filter-function/hue-rotate())
  - [`invert()`](/fr/docs/Web/CSS/filter-function/invert())
  - [`opacity()`](/fr/docs/Web/CSS/filter-function/opacity())
  - [`saturate()`](/fr/docs/Web/CSS/filter-function/saturate())
  - [`sepia()`](/fr/docs/Web/CSS/filter-function/sepia())