---
title: blur()
slug: Web/CSS/filter-function/blur
---

{{cssref}}

La función CSS **`blur()`** aplica un [desenfoque Gaussiano](https://en.wikipedia.org/wiki/Gaussian_blur) a la imagen de entrada. El resultado es un {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-blur.html")}}

## Sintaxis

```
blur(radio)
```

### Parámetros

- `radio`
  - : El radio del desenfoque, especificado como {{cssxref("&lt;length&gt;")}}. Define el valor de la desviación estándar a la función gaussiana, es decir, cuántos píxeles en la pantalla se combinan entre sí; por lo tanto, un valor mayor creará más desenfoque. Un valor de `0` deja la entrada sin cambios. El valor de laguna para la interpolación es `0`.

## Ejemplos

```css
blur(0)        /* Sin efecto */
blur(8px)      /* Desenfoque con 8px de radio */
blur(1.17rem)  /* Desenfoque con 1.17rem de radio */
```

## Ver también

- {{cssxref("&lt;filter-function&gt;")}}
