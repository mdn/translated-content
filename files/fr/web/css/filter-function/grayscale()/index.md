---
title: grayscale()
slug: Web/CSS/filter-function/grayscale()
tags:
  - CSS
  - Filtre
  - Fonction
  - Reference
translation_of: Web/CSS/filter-function/grayscale()
---
{{CSSRef}}

La fonction CSS **`grayscale()`** convertit une image en niveaux de gris. Le résultat de cette fonction est une valeur {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-grayscale.html")}}

## Syntaxe

    grayscale(multiplicateur)

### Paramètres

- `multiplicateur`
  - : L'intensité de la conversion, indiquée sous la forme d'un nombre ({{cssxref("&lt;number&gt;")}}) ou d'un pourcentage ({{cssxref("&lt;percentage&gt;")}}). Avec une valeur égale à `100%`, l'image obtenue sera complètement en niveaux de gris. Avec une valeur égale à `0%`, l'image source restera inchangée. Les valeurs comprises entre `0%` et `100%` auront un effet intermédiaire (progression linéaire). Dans le cas d'une interpolation, la valeur par défaut utilisée est `0`.

## Exemples

```css
grayscale(0)     /* Aucun effet */
grayscale(.7)    /* Converti à 70% en niveaux de gris */
grayscale(100%)  /* Uniquement en niveaux de gris */
```

## Voir aussi

- {{cssxref("&lt;filter-function&gt;")}}
