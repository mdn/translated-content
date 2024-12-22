---
title: Valor especificado
slug: Web/CSS/specified_value
---

{{CSSRef}}

El **valor especificado** (**specified value**) de una propiedad CSS es establecido de una de las siguientes maneras:

1. Si la hoja de estilos del documento tiene un valor especificado para la propiedad, éste será usado. Por ejemplo, si la propiedad {{cssxref("color")}} es establecida con valor `green`, el color del texto del elemento que corresponda será verde.
2. Si la hoja de estilos del documento no tiene un valor especificado para la propiedad, se heredará del elemento padre (si es posible). Por ejemplo, si tenemos un párrafo ({{HTMLElement("p")}}) dentro de un {{HTMLElement("div")}}, y el {{HTMLElement("div")}} tiene el valor de su propiedad `font` como "Arial", y el {{HTMLElement("p")}} no tiene definida la propiedad `font`, se heredará la fuente Arial.
3. Si ninguna de las anteriores está disponible, se aplica el valor inicial del elemento segun la especificación CSS.

## Especificaciones

{{Specifications}}

## Véase también

- [Referencia CSS](/es/docs/Web/CSS/Reference)
- CSS Key Concepts: [CSS syntax](/es/docs/Web/CSS/Syntax), [at-rule](/es/docs/Web/CSS/At-rule), [comments](/es/docs/Web/CSS/Comments), [specificity](/es/docs/Web/CSS/Specificity) and [inheritance](/es/docs/Web/CSS/Inheritance), the [box](/es/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), [layout modes](/es/docs/Web/CSS/Layout_mode) and [visual formatting models](/es/docs/Web/CSS/Visual_formatting_model), and [margin collapsing](/es/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing), or the [initial](/es/docs/Web/CSS/initial_value), [computed](/es/docs/Web/CSS/computed_value), [resolved](/es/docs/Web/CSS/resolved_value), [specified](/es/docs/Web/CSS/specified_value), [used](/es/docs/Web/CSS/used_value), and [actual](/es/docs/Web/CSS/actual_value) values. Definitions of [value syntax](/es/docs/Web/CSS/Value_definition_syntax), [shorthand properties](/es/docs/Web/CSS/Shorthand_properties) and [replaced elements](/es/docs/Web/CSS/Replaced_element).
