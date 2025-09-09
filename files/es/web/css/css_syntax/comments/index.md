---
title: Comentarios
slug: Web/CSS/CSS_syntax/Comments
original_slug: Web/CSS/Comments
---

## Resumen

Los comentarios son usados para añadir notas explicatorias o prevenir que el navegador interprete partes de la hoja de estilos.

Los comentarios se pueden colocar en cualquier espacio en blanco que se permita en la hoja de estilos.

## Sintaxis

```
/* Comentario */
```

## Examples

```css
/* Comentario de una sola línea */

/*
Un comentario
que se extiende
en varias
líneas
*/
```

## Notas

La sintaxis de comentarios `/* */` es usada para comentarios de una o múltiples líneas. No hay otra forma de especificar comentarios en hojas de estilos externas. Sin embargo, cuando se usa el elemento `<style>`, se puede usar `<!-- -->` para ocultar CSS para navegadores antiguos, aunque no es recomendable. Como en la mayoría de los lenguajes de programación que usan la sintaxis de comentarios `/* */` estos no pueden ser anidados. En otras palabras, la primera instancia de `*/` que siga a una instancia de `/*` cerrará el comentario.

## Especificaciones

- [CSS 2.1 Syntax and basic data types #comments](https://www.w3.org/TR/CSS21/syndata.html#comments)

## Véase también

- [Referencia CSS](/es/docs/Web/CSS/Reference)
- CSS Key Concepts: [CSS syntax](/es/docs/Web/CSS/CSS_syntax/Syntax), [at-rule](/es/docs/Web/CSS/CSS_syntax/At-rule), [comments](/es/docs/Web/CSS/CSS_syntax/Comments), [specificity](/es/docs/Web/CSS/CSS_cascade/Specificity) and [inheritance](/es/docs/Web/CSS/CSS_cascade/Inheritance), the [box](/es/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), [layout modes](/es/docs/Glossary/Layout_mode) and [visual formatting models](/es/docs/Web/CSS/Visual_formatting_model), and [margin collapsing](/es/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing), or the [initial](/es/docs/Web/CSS/CSS_cascade/Value_processing), [computed](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d), [resolved](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4), [specified](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1), [used](/es/docs/Web/CSS/used_value), and [actual](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing) values. Definitions of [value syntax](/es/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax), [shorthand properties](/es/docs/Web/CSS/CSS_cascade/Shorthand_properties) and [replaced elements](/es/docs/Web/CSS/CSS_images/Replaced_element_properties).
