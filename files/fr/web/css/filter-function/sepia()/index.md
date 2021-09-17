---
title: sepia()
slug: Web/CSS/filter-function/sepia()
tags:
  - CSS
  - Filtre
  - Fonction
  - Reference
translation_of: Web/CSS/filter-function/sepia()
---
{{cssref}}

La fonction CSS **`sepia()`** convertit une image en sépia, lui donnant un aspect plus jaune/marron, voire vielli. Le résultat obtenu est une valeur de type {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-sepia.html")}}

## Syntaxe

    sepia(multiplicateur)

### Paramètres

- `multiplicateur`
  - : L'intensité de la conversion indiquée sous la forme d'un nombre ({{cssxref("&lt;number&gt;")}}) ou d'un pourcentage ({{cssxref("&lt;percentage&gt;")}}). Une valeur de `100%` permttra d'obtenir une image complètement sépia tandis qu'une valeur de `0%` laissera l'image inchangée. Les valeurs entre `0%` et `100%` représenteront des conversions proportionnelles. Lors d'une interpolation, la valeur par défaut sera `0`.

## Exemples

```css
sepia(0);     /* Aucun effet */
sepia(.65);   /* 65% de sépia */
sepia(100%);  /* Complètement sépia */
```

## Voir aussi

- {{cssxref("&lt;filter-function&gt;")}}
