---
title: Valor especificado
slug: Web/CSS/specified_value
tags:
  - CSS
  - Referencia CSS
translation_of: Web/CSS/specified_value
---
{{CSSRef}}

El **valor especificado** (**specified value**) de una propiedad CSS es establecido de una de las siguientes maneras:

1.  Si la hoja de estilos del documento tiene un valor especificado para la propiedad, éste será usado. Por ejemplo, si la propiedad {{cssxref("color")}} es establecida con valor `green`, el color del texto del elemento que corresponda será verde.
2.  Si la hoja de estilos del documento no tiene un valor especificado para la propiedad, se heredará del elemento padre (si es posible). Por ejemplo, si tenemos un párrafo ({{HTMLElement("p")}}) dentro de un {{HTMLElement("div")}}, y el {{HTMLElement("div")}} tiene el valor de su propiedad `font` como "Arial", y el {{HTMLElement("p")}} no tiene definida la propiedad `font`, se heredará la fuente Arial.
3.  Si ninguna de las anteriores está disponible, se aplica el valor inicial del elemento segun la especificación CSS.

## Especificaciones

| Especificación                                                                                   | Estatus                  | Comentarios        |
| ------------------------------------------------------------------------------------------------ | ------------------------ | ------------------ |
| {{SpecName("CSS2.1", "cascade.html#specified-value", "cascaded value")}} | {{Spec2("CSS2.1")}} | Definición inicial |

## Véase también

- [Referencia CSS](/es/docs/Web/CSS/Referencia_CSS)
- {{CSS_key_concepts}}
