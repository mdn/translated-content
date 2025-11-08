---
title: blur()
slug: Web/CSS/filter-function/blur
---

La función CSS **`blur()`** aplica un [desenfoque Gaussiano](https://en.wikipedia.org/wiki/Gaussian_blur) a la imagen de entrada. El resultado es un {{cssxref("&lt;filter-function&gt;")}}.

{{InteractiveExample("CSS Demo: blur()")}}

```css interactive-example-choice
filter: blur(0);
```

```css interactive-example-choice
filter: blur(4px);
```

```css interactive-example-choice
filter: blur(1.5rem);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

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
