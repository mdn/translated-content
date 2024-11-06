---
title: Comentarios
slug: Web/CSS/Comments
---

{{CSSRef}}

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

- [CSS 2.1 Syntax and basic data types #comments](http://www.w3.org/TR/CSS21/syndata.html#comments)

## Véase también

- [Referencia CSS](/es/docs/Web/CSS/Referencia_CSS)
- CSS Key Concepts: [CSS syntax](/es/docs/Web/CSS/Syntax), [at-rule](/es/docs/Web/CSS/At-rule), [comments](/es/docs/Web/CSS/Comments), [specificity](/es/docs/Web/CSS/Specificity) and [inheritance](/es/docs/Web/CSS/inheritance), the [box](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), [layout modes](/es/docs/Web/CSS/Layout_mode) and [visual formatting models](/es/docs/Web/CSS/Visual_formatting_model), and [margin collapsing](/es/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing), or the [initial](/es/docs/Web/CSS/initial_value), [computed](/es/docs/Web/CSS/computed_value), [resolved](/es/docs/Web/CSS/resolved_value), [specified](/es/docs/Web/CSS/specified_value), [used](/es/docs/Web/CSS/used_value), and [actual](/es/docs/Web/CSS/actual_value) values. Definitions of [value syntax](/es/docs/Web/CSS/Value_definition_syntax), [shorthand properties](/es/docs/Web/CSS/Shorthand_properties) and [replaced elements](/es/docs/Web/CSS/Replaced_element).
