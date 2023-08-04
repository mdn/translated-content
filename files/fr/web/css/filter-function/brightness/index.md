---
title: brightness()
slug: Web/CSS/filter-function/brightness
---

{{CSSRef}}

La fonction CSS **`brightness()`** applique un multiplicateur linéaire sur une image afin de la rendre plus claire ou plus sombre. Le résultat obtenu est une valeur de type [`<filter-function>`](/fr/docs/Web/CSS/filter-function).

{{EmbedInteractiveExample("pages/css/function-brightness.html")}}

## Syntaxe

```css
brightness(multiplicateur)
```

### Paramètres

- `multiplicateur`
  - : L'amplification de la clarté de l'image, indiquée sous la forme d'un nombre ([`<number>`](/fr/docs/Web/CSS/number)) ou d'un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)). Une valeur inférieure à `100%` assombrira l'image alors qu'une valeur supérieure à `100%` la rendra plus claire. Une valeur de `0%` permettra d'obtenir une image complètement noire et une valeur de `100%` laissera l'image inchangée. La valeur par défaut utilisée lors de l'interpolation est `1`.

## Exemples

### Définir la clarté avec des nombres et des pourcentages

```css
brightness(0%)   /* Complètement noir */
brightness(0.4)  /* 40% de la clarté */
brightness(1)    /* Aucun effet */
brightness(200%) /* Double la clarté */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<filter-function>`](/fr/docs/Web/CSS/filter-function) et les autres fonctions associées
  - [`blur()`](</fr/docs/Web/CSS/filter-function/blur()>)
  - [`contrast()`](</fr/docs/Web/CSS/filter-function/contrast()>)
  - [`drop-shadow()`](</fr/docs/Web/CSS/filter-function/drop-shadow()>)
  - [`grayscale()`](</fr/docs/Web/CSS/filter-function/grayscale()>)
  - [`hue-rotate()`](</fr/docs/Web/CSS/filter-function/hue-rotate()>)
  - [`invert()`](</fr/docs/Web/CSS/filter-function/invert()>)
  - [`opacity()`](</fr/docs/Web/CSS/filter-function/opacity()>)
  - [`saturate()`](</fr/docs/Web/CSS/filter-function/saturate()>)
  - [`sepia()`](</fr/docs/Web/CSS/filter-function/sepia()>)
