---
title: Comentarios
slug: Web/CSS/Guides/Syntax/Comments
original_slug: Web/CSS/CSS_syntax/Comments
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
- CSS Key Concepts: [CSS syntax](/es/docs/Web/CSS/Guides/Syntax/Introduction), [at-rule](/es/docs/Web/CSS/Guides/Syntax/At-rules), [comments](/es/docs/Web/CSS/Guides/Syntax/Comments), [specificity](/es/docs/Web/CSS/Guides/Cascade/Specificity) and [inheritance](/es/docs/Web/CSS/Guides/Cascade/Inheritance), the [box](/es/docs/Web/CSS/Guides/Box_model/Introduction), [layout modes](/es/docs/Glossary/Layout_mode) and [visual formatting models](/es/docs/Web/CSS/Visual_formatting_model), and [margin collapsing](/es/docs/Web/CSS/Guides/Box_model/Margin_collapsing), or the [initial](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_inicial), [computed](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_calculado), [resolved](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_resuelto), [specified](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_especificado), [used](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_utilizado), and [actual](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_real) values. Definitions of [value syntax](/es/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax), [shorthand properties](/es/docs/Web/CSS/Guides/Cascade/Shorthand_properties) and [replaced elements](/es/docs/Web/CSS/Guides/Images/Replaced_element_properties).
