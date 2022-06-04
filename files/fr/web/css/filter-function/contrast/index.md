---
title: contrast()
slug: Web/CSS/filter-function/contrast
translation_of: Web/CSS/filter-function/contrast()
original_slug: Web/CSS/filter-function/contrast()
browser-compat: css.types.filter-function.contrast
---
{{CSSRef}}

La fonction CSS **`contrast()`** permet d'ajuster le contraste d'une image. Le résultat de cette fonction est une valeur de type [`<filter-function>](/fr/docs/Web/CSS/filter-function).

{{EmbedInteractiveExample("pages/css/function-contrast.html")}}

## Syntaxe

```css
contrast(multiplicateur)
```
### Paramètres

- `multiplicateur`
  - : La modification de contraste à appliquer à l'image, exprimée sous la forme d'un nombre ([`<number>`](/fr/docs/Web/CSS/number)) ou d'un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)). Une valeur inférieure à `100%` réduira le contraste et une valeur supérieure à `100%` accentuera le contraste. Une valeur de `0%` permettra d'obtenir une image complètement grise et une valeur de `100%` laissera l'image inchangée. La valeur par défaut utilisée pour les interpolations est `1`.

## Exemples

### Définir un contraste à l'aide de nombres et de pourcentages

```css
contrast(0);     /* Complètement gris */
contrast(65%);   /* 65% de contraste */
contrast(1);     /* Aucun effet */
contrast(200%);  /* Contraste doublé */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<filter-function>`](/fr/docs/Web/CSS/filter-function) et les autres fonctions associées
  - [`blur()`](/fr/docs/Web/CSS/filter-function/blur())
  - [`brightness()`](/fr/docs/Web/CSS/filter-function/brightness())
  - [`drop-shadow()`](/fr/docs/Web/CSS/filter-function/drop-shadow())
  - [`grayscale()`](/fr/docs/Web/CSS/filter-function/grayscale())
  - [`hue-rotate()`](/fr/docs/Web/CSS/filter-function/hue-rotate())
  - [`invert()`](/fr/docs/Web/CSS/filter-function/invert())
  - [`opacity()`](/fr/docs/Web/CSS/filter-function/opacity())
  - [`saturate()`](/fr/docs/Web/CSS/filter-function/saturate())
  - [`sepia()`](/fr/docs/Web/CSS/filter-function/sepia())
