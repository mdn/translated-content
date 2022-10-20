---
title: Introducción al Modelo de Caja de CSS
slug: Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
tags:
  - CSS
  - Guía
  - Modelo de Caja
  - Referencia
translation_of: Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
original_slug: Web/CSS/CSS_Modelo_Caja/Introducción_al_modelo_de_caja_de_CSS
---
{{CSSRef}}

Al diseñar un documento, el motor de representación del navegador representa cada elemento como un cuadro rectangular según el estándar **modelo de caja de CSS**. CSS determina el tamaño, la posición y las propiedades (color, fondo, tamaño del borde, etc.) de estos cuadros.

Cada caja se compone de cuatro partes (o áreas), definidas por sus respectivos límites: el _límite del contenido_, el _límite del relleno (padding)_, el _límite del borde_ y el _límite del margen_.

![CSS Box model](<https://mdn.mozillademos.org/files/8685/boxmodel-(3).png>)

El **área de contenido**, delimitada por el límite del contenido, contiene el contenido "real" del elemento, como lo puede ser texto, imagen o un reproductor de video. Sus dimensiones son el _ancho del contenido_ (o el _ancho de la caja de contenido_) y la _altura del contenido_ (o la _altura de la caja de contenido_). A menudo tiene un color de fondo o una imagen de fondo.

Si la propiedad {{cssxref("box-sizing")}} está configurada en `content-box` (default), el tamaño del área de contenido se puede definir explícitamente con las propiedades de {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height")}}, {{cssxref("min-height")}} y {{cssxref("max-height")}}.

El **área de relleno** (padding), delimitada por el límite del relleno, extiende el área de contenido para incluir el relleno del elemento. Sus dimensiones son el _ancho de la caja de relleno_ y la _altura de la caja de relleno_. Cuando el área de contenido tiene un fondo, se extiende dentro del relleno.

El espesor del relleno está determinado por las propiedades {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, y la propiedad abreviada {{cssxref("padding")}}.

El **área del borde**, delimitada por el límite del borde, extiende el área de relleno para incluir los bordes del elemento. Sus dimensiones son el _ancho de la caja del borde_ y la _altura de la caja del borde_.

El espesor de los bordes está determinado por las propiedades {{cssxref("border-width")}} y la propiedad abreviada {{cssxref("border")}}. Si la propiedad {{cssxref("box-sizing")}} se establece en `border-box`, el tamaño del área del borde se puede definir explícitamente con las propiedades {{cssxref("width")}}, {{cssxref("min-</span> <span>width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}}, y {{cssxref("max</span><span>-height")}}.

El **área del margen**, delimitada por el límite del margen, extiende el área del borde para incluir un área vacía utilizada para separar el elemento de sus vecinos. Sus dimensiones son el _ancho de la caja del margen_ y la _altura de la caja del margen_.

El tamaño del área del margen está determinado por las propiedades {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref ("margin-bottom")}}, { {cssxref("margin-left")}}, y la propiedad abreviada {{cssxref ("margin")}}. Cuando se produce el [colapso del margen](/en/CSS/margin_collapsing "en/CSS/margin_collapsing"), el área del margen no está claramente definida ya que los márgenes se comparten entre las cajas.

Finalmente, ten en cuenta que para elementos en línea no reemplazados, la cantidad de espacio ocupado (la contribución a la altura de la línea) está determinada por la propiedad {{cssxref ('line-height')}}, aunque los bordes y el relleno todavía se muestran alrededor del contenido.

## Especificación

| Especificación                                                   | Estado                       | Comentario                                                       |
| ---------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------- |
| {{ SpecName("CSS2.1","box.html#box-dimensions")}} | {{ Spec2('CSS2.1') }} | Aunque está redactado con más precisión, no hay cambio práctico. |
| {{ SpecName("CSS1","#formatting-model")}}         | {{ Spec2('CSS1') }}     | Definición inicial                                               |

## Vea también

- {{css_key_concepts}}
- Propiedades CSS relacionadas: {{ cssxref("box-sizing") }}, {{ cssxref("background-clip") }}, {{ cssxref("height") }}, {{ cssxref("max-height") }}, {{ cssxref("min-height") }}, {{ cssxref("width") }}, {{ cssxref("max-height") }}, {{ cssxref("min-height") }}, {{ cssxref("padding") }}, {{ cssxref("padding-top") }}, {{ cssxref("padding-right") }}, {{ cssxref("padding-bottom") }}, {{ cssxref("padding-left") }}, {{ cssxref("border") }}, {{ cssxref("border-top") }}, {{ cssxref("border-right") }}, {{ cssxref("border-bottom") }}, {{ cssxref("border-left") }}, {{ cssxref("border-width") }}, {{ cssxref("border-top-width") }}, {{ cssxref("border-right-width") }}, {{ cssxref("border-bottom-width") }}, {{ cssxref("border-left-width") }}, {{ cssxref("margin") }}, {{ cssxref("margin-top") }}, {{ cssxref("margin-right") }}, {{ cssxref("margin-bottom") }}, {{ cssxref("margin-left") }}
