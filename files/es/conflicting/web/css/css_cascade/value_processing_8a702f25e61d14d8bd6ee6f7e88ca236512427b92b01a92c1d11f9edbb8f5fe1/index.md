---
title: Valor especificado
slug: conflicting/Web/CSS/CSS_cascade/Value_processing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1
original_slug: Web/CSS/CSS_cascade/specified_value
---

El **valor especificado** (**specified value**) de una propiedad CSS es establecido de una de las siguientes maneras:

1. Si la hoja de estilos del documento tiene un valor especificado para la propiedad, éste será usado. Por ejemplo, si la propiedad {{cssxref("color")}} es establecida con valor `green`, el color del texto del elemento que corresponda será verde.
2. Si la hoja de estilos del documento no tiene un valor especificado para la propiedad, se heredará del elemento padre (si es posible). Por ejemplo, si tenemos un párrafo ({{HTMLElement("p")}}) dentro de un {{HTMLElement("div")}}, y el {{HTMLElement("div")}} tiene el valor de su propiedad `font` como "Arial", y el {{HTMLElement("p")}} no tiene definida la propiedad `font`, se heredará la fuente Arial.
3. Si ninguna de las anteriores está disponible, se aplica el valor inicial del elemento segun la especificación CSS.

## Especificaciones

{{Specifications}}

## Véase también

- [Referencia CSS](/es/docs/Web/CSS/Reference)
- CSS Key Concepts: [CSS syntax](/es/docs/Web/CSS/CSS_syntax/Syntax), [at-rule](/es/docs/Web/CSS/CSS_syntax/At-rule), [comments](/es/docs/Web/CSS/CSS_syntax/Comments), [specificity](/es/docs/Web/CSS/CSS_cascade/Specificity) and [inheritance](/es/docs/Web/CSS/CSS_cascade/Inheritance), the [box](/es/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), [layout modes](/es/docs/Glossary/Layout_mode) and [visual formatting models](/es/docs/Web/CSS/Visual_formatting_model), and [margin collapsing](/es/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing), or the [initial](/es/docs/Web/CSS/CSS_cascade/Value_processing), [computed](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d), [resolved](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4), [specified](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1), [used](/es/docs/Web/CSS/used_value), and [actual](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing) values. Definitions of [value syntax](/es/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax), [shorthand properties](/es/docs/Web/CSS/CSS_cascade/Shorthand_properties) and [replaced elements](/es/docs/Web/CSS/CSS_images/Replaced_element_properties).
