---
title: "-webkit-mask-box-image"
slug: Web/CSS/-webkit-mask-box-image
---

{{ CSSRef() }}

{{ Non-standard_header() }}

## Resumen

`-webkit-mask-box-image` establece la imagen de máscara para la caja del borde de un elemento.

- {{ Xref_cssinitial() }}: none
- Se aplica a : Todos los elementos
- {{ Xref_cssinherited() }}: no
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: tal y como se especfica

## Síntaxis

```
-webkit-mask-box-image: <mask-box-image> [<top> <right> <bottom> <left> <x-repeat> <y-repeat>]
```

Where:

- \<mask-box-image>
  - : `{{cssxref("&lt;uri&gt;")}} | <gradient> | none`
- \<top> \<right> \<bottom> \<left>
  - : `<length> | <percentage>`
- \<x-repeat> \<y-repeat>
  - : `repeat | stretch | round`

### Valores

- \<uri>
  - : La localización del recurso imagen que será usada como imagen de máscara..
- \<gradient>
  - : La función -webkit-gradient que se usará como imagen de máscara.
- none

  - : Para especificar que la caja del borde no va a tener imagen de máscara.

- \<length>
  - : El tamaño del desplazamiento de la imagen de máscara. Ver {{cssxref("&lt;length&gt;")}} para posibles unidades.
- \<percentage>
  - : El desplazamiento de la imagen de máscara tiene un valor que se corresponde con un porcentaje de la dimensiones (altura y anchura) del tamaño de la caja del borde.
- repeat
  - : La imagen de máscara se repite tanta veces como sean necesarios para cubrir la caja. Puede incluir una imagen parcial si no existe una división exacta con el tamaño de la caja.
- stretch
  - : La imagen de máscara se encoge para contener la caja del borde exactamente.
- round
  - : Se encoge y repite de tal manera que no existan partes de la imagen de máscara al final de la caja.

## Ejemplos

```css
.exampleone {
  -webkit-mask-box-image: url("mask.png");
}

.exampletwo {
  -webkit-mask-box-image: url("logo.png") 100 100 0 0 round round;
}
```

## Especificaciones

No forma parte de ningún estándar.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

{{ cssxref("-webkit-mask") }}, {{ cssxref("-webkit-mask-origin") }}, {{ cssxref("-webkit-mask-attachment") }},{{ cssxref("-webkit-mask-clip") }},{{ cssxref("-webkit-mask-image") }},{{ cssxref("-webkit-mask-composite") }},{{ cssxref("-webkit-mask-repeat") }}
