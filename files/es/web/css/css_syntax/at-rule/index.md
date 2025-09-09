---
title: Regla-At
slug: Web/CSS/CSS_syntax/At-rule
original_slug: Web/CSS/At-rule
---

Una **regla-at** es una [declaración CSS](/es/docs/Web/CSS/CSS_syntax/Syntax#css_statements) que comienza con el símbolo arroba, '@' (U+0040 COMMERCIAL AT), seguido por un identificador, e incluye todo el contenido hasta el siguiente punto y coma, ';' (U+003B SEMICOLON), o el siguiente [bloque CSS](/es/docs/Web/CSS/CSS_syntax/Syntax#css_declarations_blocks), lo que sea primero.

Hay varias reglas-at, designadas por sus identificadores, cada una con sintaxis distinta:

- {{cssxref("@charset")}} — Define el conjunto de caracteres usado por la hoja de estilos.
- {{cssxref("@import")}} — Indica al motor de CSS que incluya una hoja de estilos externa.
- {{cssxref("@namespace")}} — Indica al motor de CSS que todo el contenido usa como prefijo un espacio de nombres XML.
- **_Reglas-at anidadas_** — Un subconjunto de declaraciones anidadas, que pueden ser usadas como declaraciones de estilos, así como grupos de reglas condicionadas internas:
  - {{cssxref("@media")}} — Un grupo de reglas condicional que aplicará su contenido si el dispositivo cumple los criterios de las condiciones definidas usando un _media query_.
  - {{cssxref("@supports")}} {{experimental_inline}} — Un grupo de reglas condicional que aplicará su contenido si el navegador cumple los criterios de la condición dada.
  - {{cssxref("@document")}} {{experimental_inline}} — Un grupo de reglas condicionadas que aplicará su contenido si el documento donde se aplica la hoja de estilos cumple los criterios de la condición dada. _(diferida al Nivel 4 de la Especificación CSS)_
  - {{cssxref("@page")}} — Describe los cambios en la disposición de la página que serán aplicados al imprimir el documento.
  - {{cssxref("@font-face")}} — Describe la configuración de fuentes externas que se descargarán.
  - {{cssxref("@keyframes")}} {{experimental_inline}} — Describe la configuración de pasos intermedios en una secuencia de animación CSS.
  - {{cssxref("@counter-style")}} — Define estilos de contador específicos que no son parte de los conjuntos de estilos predeterminados. _(en estado de Recomendación Candidata, pero sólo implementada en Gekko al momento de esta publicación)_
  - {{cssxref("@font-feature-values")}} (junto con `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` y `@character-variant`)
    — Define nombres comunes para la propiedad {{cssxref("font-variant-alternates")}}. _(en estado de Recomendación Candidata, pero sólo implementada en Gekko al momento de esta publicación)_

## Grupos de Reglas Condicionales

Así como los valores de las propiedades, cada regla-at tiene sintaxis propia. Sin embargo, muchas de esas reglas pueden ser agrupadas en categorías especiales, llamadas **conditional group rules**. Estas declaraciones comparten sintáxis común y cada una puede incluir _nested statements_—ya sean _conjuntos de reglas_ o _reglas-at anidadas_. Además, pueden transmitir un significado semántico común—todas incluyen algun tipo de condición, que devuelve un resultado que puede ser **verdadero** o **falso**. Si el valor de la condición resulta **verdadero**, todas las declaraciones del grupo serán aplicadas.

Los grupos de reglas condicionales están definidos en [CSS Conditionals Level 3](https://dev.w3.org/csswg/css3-conditional/) y son:

- {{cssxref("@media")}},
- {{cssxref("@supports")}},
- {{cssxref("@document")}}. _(diferida al Nivel 4 de la Especificación CSS)_

Como cada grupo de condición puede incluir también declaraciones anidadas, puede haber un número de anidaciones ilimitado.

## Especificaciones

{{Specifications}}

## Véase también

- [CSS Reference](/es/docs/Web/CSS/Reference)
- CSS Key Concepts: [CSS syntax](/es/docs/Web/CSS/CSS_syntax/Syntax), [at-rule](/es/docs/Web/CSS/CSS_syntax/At-rule), [comments](/es/docs/Web/CSS/CSS_syntax/Comments), [specificity](/es/docs/Web/CSS/CSS_cascade/Specificity) and [inheritance](/es/docs/Web/CSS/CSS_cascade/Inheritance), the [box](/es/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), [layout modes](/es/docs/Glossary/Layout_mode) and [visual formatting models](/es/docs/Web/CSS/Visual_formatting_model), and [margin collapsing](/es/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing), or the [initial](/es/docs/Web/CSS/CSS_cascade/Value_processing), [computed](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d), [resolved](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4), [specified](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1), [used](/es/docs/Web/CSS/used_value), and [actual](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing) values. Definitions of [value syntax](/es/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax), [shorthand properties](/es/docs/Web/CSS/CSS_cascade/Shorthand_properties) and [replaced elements](/es/docs/Web/CSS/CSS_images/Replaced_element_properties).
