---
title: opacity()
slug: Web/CSS/filter-function/opacity
---

{{CSSRef}}

La fonction CSS **`opacity()`** permet de modifier la transparence de l'image. Le résultat obtenu par cette fonction est une valeur [`<filter-function>`](/fr/docs/Web/CSS/filter-function).

{{EmbedInteractiveExample("pages/css/function-opacity.html")}}

> **Note :** Cette fonction est proche de la propriété [`opacity`](/fr/docs/Web/CSS/opacity) mais, selon le navigateur, les filtres CSS peuvent bénéficier de l'accélération matérielle pour de meilleures performances.

## Syntaxe

```css
opacity(multiplicateur)
```

### Paramètres

- `multiplicateur`
  - : L'intensité de l'opacité, indiquée comme un nombre ([`<number>`](/fr/docs/Web/CSS/number)) ou comme un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)). Une valeur de `0%` entraînera une image complètement transparente. Une valeur de `100%` laissera l'image inchangée. Les valeurs intermédiaires auront un effet proportionnel. Lors d'une interpolation, la valeur par défaut utilisée sera `1`.

## Exemples

### Exemples de valeurs correctes pour opacity()

```css
opacity(0%);   /* Complètement transparente */
opacity(50%);  /* 50% transparent */
opacity(1);    /* Aucun effet */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS [`opacity`](/fr/docs/Web/CSS/opacity)
- [`<filter-function>`](/fr/docs/Web/CSS/filter-function) et les autres fonctions associées
  - [`blur()`](</fr/docs/Web/CSS/filter-function/blur()>)
  - [`brightness()`](</fr/docs/Web/CSS/filter-function/brightness()>)
  - [`contrast()`](</fr/docs/Web/CSS/filter-function/contrast()>)
  - [`drop-shadow()`](</fr/docs/Web/CSS/filter-function/drop-shadow()>)
  - [`grayscale()`](</fr/docs/Web/CSS/filter-function/grayscale()>)
  - [`hue-rotate()`](</fr/docs/Web/CSS/filter-function/hue-rotate()>)
  - [`invert()`](</fr/docs/Web/CSS/filter-function/invert()>)
  - [`saturate()`](</fr/docs/Web/CSS/filter-function/saturate()>)
  - [`sepia()`](</fr/docs/Web/CSS/filter-function/sepia()>)
