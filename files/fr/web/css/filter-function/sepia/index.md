---
title: sepia()
slug: Web/CSS/filter-function/sepia
translation_of: Web/CSS/filter-function/sepia()
original_slug: Web/CSS/filter-function/sepia()
browser-compat: css.types.filter-function.sepia
---
{{cssref}}

La fonction CSS **`sepia()`** convertit une image en sépia, lui donnant un aspect plus jaune/marron, voire vielli. Le résultat obtenu est une valeur de type [`<filter-function>`](/fr/docs/Web/CSS/filter-function).

{{EmbedInteractiveExample("pages/css/function-sepia.html")}}

## Syntaxe

```css
sepia(multiplicateur)
```
### Paramètres

- `multiplicateur`
  - : L'intensité de la conversion indiquée sous la forme d'un nombre ([`<number>`](/fr/docs/Web/CSS/number)) ou d'un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)). Une valeur de `100%` permettra d'obtenir une image complètement sépia tandis qu'une valeur de `0%` laissera l'image inchangée. Les valeurs entre `0%` et `100%` représenteront des conversions proportionnelles. Lors d'une interpolation, la valeur par défaut sera `0`.

## Exemples

### Exemples de valeurs correctes pour sepia()

```css
sepia(0);     /* Aucun effet */
sepia(.65);   /* 65% de sépia */
sepia(100%);  /* Complètement sépia */
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
  - [`saturate()`](/fr/docs/Web/CSS/filter-function/saturate())
