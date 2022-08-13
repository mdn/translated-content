---
title: Comentarios
slug: Web/CSS/Comments
tags:
  - CSS
  - Principiante
  - Referencia CSS
translation_of: Web/CSS/Comments
original_slug: Web/CSS/Comentarios
---
{{CSSRef}}

## Resumen

Los comentarios son usados para añadir notas explicatorias o prevenir que el navegador interprete partes de la hoja de estilos.

Los comentarios se pueden colocar en cualquier espacio en blanco que se permita en la hoja de estilos.

## Sintaxis

    /* Comentario */

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
- {{CSS_key_concepts}}
