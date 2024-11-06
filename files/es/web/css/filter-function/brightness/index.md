---
title: brightness()
slug: Web/CSS/filter-function/brightness
---

{{cssref}}

La función **`brightness()`** [CSS](/es/docs/Web/CSS) aplica un multiplicador linear a la imagen, haciendo que su apariencia sea más brallante u oscura. Su resultado es un {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-brightness.html")}}

El código de este ejemplo interactivo se encuentra en GitHub repository. Si desea contribuir en el proyecto de ejemplos interactivos, por favor clone el repositorio <https://github.com/mdn/interactive-examples> y envie un pull request.

## Sintaxis

```
brightness(valor)
```

### Parametros

- `valor`
  - : El brillo resultante, es definido como un {{cssxref("&lt;number&gt;")}} o un {{cssxref("&lt;percentage&gt;")}}. Un valor debajo del `100%` oscurecerá la imagen, como así un valor superior al `100%` le dará más brillo. Un valor de `0%` dará como resultado una imagen completamente negra, siendo el valor de `100%` una imagen sin cambios. El valor de la Interpolación es `1`.

## Ejemplos

```css
brightness(0%)   /* Completamente negro */
brightness(0.4)  /* 40% de brillo */
brightness(1)    /* Sin Efecto */
brightness(200%) /* Doble de Brillo */
```

## Ver también

- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
