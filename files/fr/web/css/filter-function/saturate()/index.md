---
title: saturate()
slug: Web/CSS/filter-function/saturate()
tags:
  - CSS
  - Filtre
  - Fonction
  - Reference
translation_of: Web/CSS/filter-function/saturate()
---
{{CSSRef}}

La fonction CSS **`saturate()`** permet d'accentuer ou de réduire la saturation d'une image. La valeur obtenue par cette fonction est une valeur de type {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-saturate.html")}}

## Syntaxe

    saturate(multiplicateur)

### Paramètres

- `multiplicateur`
  - : L'intensité de la modification sous la forme d'un nombre ({{cssxref("&lt;number&gt;")}}) ou d'un pourcentage ({{cssxref("&lt;percentage&gt;")}}). Une valeur inférieure à `100%` réduira la saturation et une valeur supérieure accentuera la saturation. Une valeur de `0%` désaturera complètement l'image alors qu'une valeur de `100%` laissera l'image inchangée. Lors d'une interpolation, la valeur par défaut est `1`.

## Exemples

```css
saturate(0);     /* Complètement sous-saturée */
saturate(.4);    /* Sous-saturée à 40% */
saturate(100%);  /* Aucun effet */
saturate(200%);  /* Saturation doublée */
```

## Voir aussi

- {{cssxref("&lt;filter-function&gt;")}}
