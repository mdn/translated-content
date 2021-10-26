---
title: blur()
slug: Web/CSS/filter-function/blur()
tags:
  - CSS
  - Filtre
  - Fonction
  - Reference
translation_of: Web/CSS/filter-function/blur()
---
{{CSSRef}}

La fonction CSS **`blur()`** permet d'appliquer [une flou gaussien](https://en.wikipedia.org/wiki/Gaussian_blur) sur l'image d'entrée. Le résultat de cette fonction est une valeur {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-blur.html")}}

## Syntaxe

    blur(rayon)

### Paramètres

- `rayon`
  - : Le rayon d'application du flou, défini par une longueur CSS ({{cssxref("&lt;length&gt;")}}). Cela définit l'écart-type de la fonction gaussienne appliquée (c'est-à-dire le nombre de pixels qui se mélangeront). Ainsi, plus la valeur est grande, plus le flou sera prononcé. Si on utilise la longueur nulle `0`, l'image ne sera pas modifiée. La valeur utilisée par défaut lors d'une interpolation est `0`.

## Exemples

```css
blur(0);        /* Aucun effet */
blur(8px);      /* Un flou avec un rayon de 8px */
blur(1.17rem);  /* Un flou avec un rayon de 1.17rem */
```

## Voir aussi

- {{cssxref("&lt;filter-function&gt;")}}
