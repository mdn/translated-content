---
title: saturate()
slug: Web/CSS/filter-function/saturate
translation_of: Web/CSS/filter-function/saturate()
original_slug: Web/CSS/filter-function/saturate()
browser-compat: css.types.filter-function.saturate
---
{{CSSRef}}

La fonction CSS **`saturate()`** permet d'accentuer ou de réduire la saturation d'une image. La valeur obtenue par cette fonction est une valeur de type [`<filter-function>`](/fr/docs/Web/CSS/filter-function).

{{EmbedInteractiveExample("pages/css/function-saturate.html")}}

## Syntaxe

```css
saturate(multiplicateur)
```

### Paramètres

- `multiplicateur`
  - : L'intensité de la modification sous la forme d'un nombre ([`<number>`](/fr/docs/Web/CSS/number)) ou d'un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)). Une valeur inférieure à `100%` réduira la saturation et une valeur supérieure accentuera la saturation. Une valeur de `0%` désaturera complètement l'image alors qu'une valeur de `100%` laissera l'image inchangée. Lors d'une interpolation, la valeur par défaut est `1`.

## Exemples

### Exemples de valeurs correctes pour saturate()

```css
saturate(0);     /* Complètement sous-saturée */
saturate(.4);    /* Sous-saturée à 40% */
saturate(100%);  /* Aucun effet */
saturate(200%);  /* Saturation doublée */
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
  - [`invert()`](/fr/docs/Web/CSS/filter-function/invert())
  - [`opacity()`](/fr/docs/Web/CSS/filter-function/opacity())
  - [`sepia()`](/fr/docs/Web/CSS/filter-function/sepia())
