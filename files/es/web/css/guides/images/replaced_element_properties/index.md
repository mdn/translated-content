---
title: Elemento de reemplazo
slug: Web/CSS/Guides/Images/Replaced_element_properties
original_slug: Web/CSS/CSS_images/Replaced_element_properties
---

## Summary

Dentro de CSS tenemos los **elementos de reemplazo**, cuya representación esta fuera del ámbito de propio CSS. Son un tipo de objeto externo, por tanto su representación es independiente de CSS. Algunos objetos que normalmente funcionan como objetos de reemplazo son {{HTMLElement("img")}}, {{HTMLElement("object")}}, {{HTMLElement("video")}} o elementos de formulario como {{HTMLElement("textarea")}}, {{HTMLElement("input")}}. Algunos elementos como {{HTMLElement("audio")}} or {{HTMLElement("canvas")}} ejercen como elementos de reemplazo solo en casos especificos. Los objetos insertados a través de las propiedades CSS {{cssxref("content")}} son _objetos de reemplazo anonimos._.

CSS gestiona elementos de reemplazo en casos concretos, por ejemplo al calcular los margenes y algunos `auto` valores.

Recuerda que algunos elementos de reemplazo, no todos, tienen dimensiones intrinsecas o linea de base establecida, las cuales son utilizadas por propiedades de CSS como {{cssxref("vertical-align")}}.

## Ver tambien

- CSS Key Concepts: [CSS syntax](/es/docs/Web/CSS/Guides/Syntax/Introduction), [at-rule](/es/docs/Web/CSS/Guides/Syntax/At-rules), [comments](/es/docs/Web/CSS/Guides/Syntax/Comments), [specificity](/es/docs/Web/CSS/Guides/Cascade/Specificity) and [inheritance](/es/docs/Web/CSS/Guides/Cascade/Inheritance), the [box](/es/docs/Web/CSS/Guides/Box_model/Introduction), [layout modes](/es/docs/Glossary/Layout_mode) and [visual formatting models](/es/docs/Web/CSS/Visual_formatting_model), and [margin collapsing](/es/docs/Web/CSS/Guides/Box_model/Margin_collapsing), or the [initial](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing), [computed](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d), [resolved](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4), [specified](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1), [used](/es/docs/Web/CSS/used_value), and [actual](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing) values. Definitions of [value syntax](/es/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax), [shorthand properties](/es/docs/Web/CSS/Guides/Cascade/Shorthand_properties) and [replaced elements](/es/docs/Web/CSS/Guides/Images/Replaced_element_properties).
