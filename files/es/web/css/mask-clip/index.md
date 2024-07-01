---
title: "-webkit-mask-clip"
slug: Web/CSS/mask-clip
---

{{ CSSRef() }}

{{ Non-standard_header() }}

Si se especificado {{ Cssxref("-webkit-mask-image") }} , `-webkit-mask-clip` determina el comportamiento de recorte (clipping) de la imagen de máscara.

{{cssinfo}}

## Síntaxis

{{csssyntax}}

donde:

- \<clip-style>
  - : `border | padding | content | text`

## Valores

- border
  - : `Si se ha especificado border` , la máscara de imagen se extiende hasta el borde del elemento.
- padding
  - : Si se ha especificado `padding` , la imagen de máscara de extiendo hasta el padding (relleno) del elemento.
- content
  - : Si se ha espeficiado `content` , la imagen de máscara se recorta al tamaño del contenido del elemento.
- text
  - : Si se ha especificado `text` , la imagen de máscara de recorta al tamaño del texto del elemento.

## Ejemplo

```css
div {
  -webkit-mask-image: url("images/mask.png");
  -webkit-mask-clip: padding;
}
```

## Compatibilidad con navegadores

{{Compat}}

## Ver además

{{ cssxref("-webkit-mask") }}, {{ cssxref("-webkit-mask-origin") }}, {{ cssxref("-webkit-mask-box-image") }}, {{ cssxref("-webkit-mask-image") }},{{ cssxref("-webkit-mask-composite") }},{{ cssxref("-webkit-mask-repeat") }}
