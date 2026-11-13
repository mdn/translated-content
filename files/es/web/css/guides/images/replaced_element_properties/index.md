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

- CSS Key Concepts: [CSS syntax](/es/docs/Web/CSS/Guides/Syntax/Introduction), [at-rule](/es/docs/Web/CSS/Guides/Syntax/At-rules), [comments](/es/docs/Web/CSS/Guides/Syntax/Comments), [specificity](/es/docs/Web/CSS/Guides/Cascade/Specificity) and [inheritance](/es/docs/Web/CSS/Guides/Cascade/Inheritance), the [box](/es/docs/Web/CSS/Guides/Box_model/Introduction), [layout modes](/es/docs/Glossary/Layout_mode) and [visual formatting models](/es/docs/Web/CSS/Visual_formatting_model), and [margin collapsing](/es/docs/Web/CSS/Guides/Box_model/Margin_collapsing), or the [initial](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_inicial), [computed](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_calculado), [resolved](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_resuelto), [specified](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_especificado), [used](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_utilizado), and [actual](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_real) values. Definitions of [value syntax](/es/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax), [shorthand properties](/es/docs/Web/CSS/Guides/Cascade/Shorthand_properties) and [replaced elements](/es/docs/Web/CSS/Guides/Images/Replaced_element_properties).
