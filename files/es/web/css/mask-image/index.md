---
title: "-webkit-mask-image"
slug: Web/CSS/mask-image
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

La propiedad CSS `-webkit-mask-image` establece la imagen de máscara para un elemento. Una imagen de máscara fija que partes del elemento serán visibles de acuerdo a la transparencia de la imagen de máscara.

{{cssinfo}}

## Sintaxis

```css
-webkit-mask-image: url(images/mymask.png);
-webkit-mask-image: url(images/foo.png), url(images/bar.png);
-webkit-mask-image: none;
```

### Valores

- \<uri>
  - : La localización del recurso imagen que será utilizado como imagen de máscara.
- \<gradient>
  - : La función `webkit-gradient` que será usada como imagen de máscara.
- none
  - : Usado para especificar si un elemento no tiene imagen de máscara.

### Sintaxis Formal

{{csssyntax}}

## Ejemplos

```css
body {
  -webkit-mask-image: url("images/mymask.png");
}

div {
  -webkit-mask-image: url("images/foo.png"), url("images/bar.png");
}

p {
  -webkit-mask-image: none;
}
```

Si se especifican varias imágenes, la región visible que sale como resultado es la combinación de las regiones visibles de cada máscara individual.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

{{cssxref("-webkit-mask")}}, {{cssxref("-webkit-mask-origin")}}, {{cssxref("-webkit-mask-attachment")}},{{cssxref("-webkit-mask-image")}},{{cssxref("-webkit-mask-composite")}},{{cssxref("-webkit-mask-repeat")}}
