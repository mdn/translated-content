---
title: invert()
slug: Web/CSS/filter-function/invert()
tags:
  - CSS
  - Filtre
  - Fonction
  - Reference
translation_of: Web/CSS/filter-function/invert()
---
{{CSSRef}}

La fonction CSS **`invert()`** permet d'inverser les couleurs de l'image. La valeur obtenue par cette fonction est de type {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-invert.html")}}

## Syntaxe

    invert(multiplicateur)

### Paramètres

- `multiplicateur`
  - : L'intensité de la conversion, indiquée sous la forme d'un nombre ({{cssxref("&lt;number&gt;")}}) ou d'un pourcentage ({{cssxref("&lt;percentage&gt;")}}). Avec `100%`, les couleurs seront entièrement inversées (ce sera un négatif de l'image originale). Une valeur de `0%` ne modifiera pas l'image. Les valeurs intermédiaires auront un effet proportionnel. Lors d'une interpolation, la valeur utilisée par défaut est `0`.

## Exemples

```css
invert(0);     /* Aucun effet */
invert(.6);    /* Inversion à 60% */
invert(100%);  /* Négatif de l'image originale */
```

## Voir aussi

- {{cssxref("&lt;filter-function&gt;")}}
