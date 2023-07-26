---
title: "-webkit-mask-composite"
slug: Web/CSS/-webkit-mask-composite
---

{{ CSSRef() }}

{{ Non-standard_header() }}

La propiedad `-webkit-mask-composite` especifica la forma en la que múltiples imágenes de máscara son compuestas para ser aplicadas al mismo elemento. Son compuestas en el orden en el que son declaradas en la propiedad {{ Cssxref("-webkit-mask-image") }}.

- {{ Xref_cssinitial() }}: source-over
- Se aplica a : todos los elementos
- {{ Xref_cssinherited() }}: no
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: tal y como se especifica.

## Síntaxis

```
-webkit-mask-composite: <composite-style>[, <composite-style>]*
```

Donde:

- \<composite-style>
  - : `clear | copy | source-over | source-in | source-out | source-atop | destination-over | destination-in | destination-out | destination-atop | xor`

## Valores

- clear
  - : Los píxeles coincidentes en la imagen origen y destino son borrados.
- copy
  - : La imagen de máscara origen reemplaza la imagen de máscara destino.
- source-over
  - : La imagen de máscara origen se dibuja sobre la imagen de máscara destino.
- source-in
  - : Los píxeles coincidentes en las imágenes de máscara origen y destino son reemplazados por los píxeles de la imagen origen; los demás son borrados.
- source-out
  - : Los píxeles coincidentes en las imágenes de máscara origen y destino son borrados; todos los demás píxeles de la imagen de máscara origen son dibujados.
- source-atop
  - : Se dibujan los píxeles de la imagen de máscara destino. Los de la imagen de máscara destino sólo son dibujados si están sobre una parte no transparente de la imagen de máscara destino. Esto provoca que la imagen de máscara origen no tengo efecto alguno.
- destination-over
  - : Se dibuja la imagen de máscara destino sobre la de origen.
- destination-in
  - : Los píxeles coincidentes en las imágenes de máscara origen y destino permanecen; los demás son borrados.
- destination-out
  - : Los píxeles coincidentes en las imágenes de máscara origen y destino se borran; se dibuja todos los demás píxeles de la imagen de máscara origen.
- destination-atop
  - : Se dibujan Los píxeles de la imagen de máscara origen. Los de la imagen de máscara destino sólo se dibujaran si coinciden con una parte no transparente de la imagen de máscara destino. Esto provoca que la imagen de máscara destino no tenga efecto.
- xor
  - : Los píxeles coincidentes en las imágenes de máscara origen y destino se convierten en totalmente transparentes y ambos con totalmente opacos.

## Ejemplos

```css
.example {
  -webkit-mask-image: url(mask1.png), url("mask2.png");
  -webkit-mask-composite: xor, source-over;
}
```

## Especificaciones

No forma parte de ningún estándar. Esta propiedad se especifica como {{CSSxRef("mask-composite")}} utilizando diferentes valores.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

{{ cssxref("-webkit-mask") }}, {{ cssxref("-webkit-mask-clip") }}, {{ cssxref("-webkit-mask-origin") }}, {{ cssxref("-webkit-mask-box-image") }}, {{ cssxref("-webkit-mask-attachment") }},{{ cssxref("-webkit-mask-image") }}
