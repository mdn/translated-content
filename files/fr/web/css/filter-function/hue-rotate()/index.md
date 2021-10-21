---
title: hue-rotate()
slug: Web/CSS/filter-function/hue-rotate()
tags:
  - CSS
  - Filtre
  - Fonction
  - Reference
translation_of: Web/CSS/filter-function/hue-rotate()
---
{{CSSRef}}

La fonction CSS **`hue-rotate()`** permet d'appliquer une rotation de teinte sur une image. Le résultat de cette fonction est une valeur {{cssxref("&lt;filter-function&gt;")}}.

{ {EmbedInteractiveExample("pages/css/function-hue-rotate.html")}}

## Syntaxe

    hue-rotate(angle)

### Paramètres

- `angle`
  - : L'angle de rotation sur le cercle des couleurs, exprimé avec une valeur de type {{cssxref("&lt;angle&gt;")}}. Une valeur de `0deg` laissera l'image inchangée. La valeur utilisée par défaut pour une interpolation sera `0`. Bien qu'il n'y ait pas de valeur maximale, la valeur de l'angle est toujours ramenée entre `360deg` et `0deg`.

## Exemples

```css
hue-rotate(-90deg);  /* Correspond à une rotation de 270deg */
hue-rotate(0deg);    /* Sans effet */
hue-rotate(90deg);   /* Rotation de 90deg */
hue-rotate(.5turn);  /* Rotation de 180deg */
hue-rotate(405deg);  /* Correspond à une rotation de 45deg */
```

## Voir aussi

- {{cssxref("&lt;filter-function&gt;")}}
