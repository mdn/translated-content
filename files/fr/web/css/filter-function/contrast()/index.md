---
title: contrast()
slug: Web/CSS/filter-function/contrast()
tags:
  - CSS
  - Filtre
  - Fonction
  - Reference
translation_of: Web/CSS/filter-function/contrast()
---
{{CSSRef}}

La fonction CSS **`contrast()`** permet d'ajuster le contraste d'une image. Le résultat de cette fonction est une valeur de type {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-contrast.html")}}

## Syntaxe

    contrast(multiplicateur)

### Paramètres

- `multiplicateur`
  - : La modification de contraste à appliquer à l'image, exprimée sous la forme d'un nombre ({{cssxref("&lt;number&gt;")}}) ou d'un pourcentage ({{cssxref("&lt;percentage&gt;")}}). Une valeur inférieure à `100%` réduira le contraste et une valeur supérieure à `100%` accentuera le contraste. Une valeur de `0%` permettra d'obtenir une image complètement grise et une valeur de `100%` laissera l'image inchangée. La valeur par défaut utilisée pour les interpolations est `1`.

## Exemples

```css
contrast(0);     /* Completely gray */
contrast(65%);   /* 65% contrast */
contrast(1);     /* No effect */
contrast(200%);  /* Double contrast */
```

## Voir aussi

- {{cssxref("&lt;filter-function&gt;")}}
