---
title: brightness()
slug: Web/CSS/filter-function/brightness()
tags:
  - CSS
  - Filtre
  - Fonction
  - Reference
translation_of: Web/CSS/filter-function/brightness()
---
{{cssref}}

La fonction CSS **`brightness()`** applique un multiplicateur linéaire sur une image afin de la rendre plus claire ou plus sombre. Le résultat obtenu est une valeur de type {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-brightness.html")}}

## Syntaxe

    brightness(multiplicateur)

### Paramètres

- `multiplicateur`
  - : L'amplification de la clarté de l'image, indiquée sous la forme d'un nombre ({{cssxref("&lt;number&gt;")}}) ou d'un pourcentage ({{cssxref("&lt;percentage&gt;")}}). Une valeur inférieure à `100%` assombrira l'image alors qu'une valeur supérieure à `100%` la rendra plus claire. Une valeur de `0%` permettra d'obtenir une image complètement noire et une valeur de `100%` laissera l'image inchangée. La valeur par défaut utilisée lors de l'interpolation est `1`.

## Exemples

```css
brightness(0%)   /* Complètement noir */
brightness(0.4)  /* 40% de la clarté */
brightness(1)    /* Aucun effet */
brightness(200%) /* Double la clarté */
```

## Voir aussi

- {{cssxref("&lt;filter-function&gt;")}}
