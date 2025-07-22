---
title: font-family
slug: Web/CSS/font-family
---

## Resumen

La propiedad `font-family` define una lista de fuentes o familias de fuentes, con un orden de prioridad, para utilizar en un elemento seleccionado. A diferencia de la mayoría de las propiedades CSS, los valores se separan con comas (",") para indicar que son valores alternativos.

{{cssinfo}}

## Sintaxis

```
font-family: <familia o nombre genérico> [, <familia o nombre genérico>]* | inherit
```

### Valores

- \<nombre de familia o genérico>
  - : puede ser un `<nombre de familia>` o un `<nombre genérico>`
- nombre de familia
  - : El nombre de la familia de la fuente. Por ejemplo, 'Times' y 'Helvética' son nombres de familia. Los nombres de familia que contengan espacios, deben escribirse entre comillas (por ejemplo: "Times New Roman").
- nombre genérico
  - : Se han definido los siguientes nombres genéricos: `serif, sans-serif, cursive, fantasy, monospace`. Los nombres genéricos son palabras claves y no deben ponerse entre comillas.

## Ejemplos

[Ver El Ejemplo Vivo](https://mdn.dev/archives/media/samples/cssref/font-family.html)

```
body { font-family: "Gill Sans Extrabold", Helvetica, sans-serif }

.receipt { font-family: Courier, "Lucida Console", monospace }
```

## Notas

Un nombre genérico debería ser siempre el último de la lista en una propiedad `font-family`.

La propiedad `font-family` especifica una lista de fuentes, desde la prioridad más alta a la más baja. La selección de fuentes **no se detiene** en la primera de la lista que está en el equipo del usuario. Por el contrario la selección de fuentes se realiza*carácter a carácter*, por lo que, si una fuente seleccionada no tiene el carácter que se quiere mostrar, se recurre a la siguiente.

Cuando una fuente no está disponible en algún {{ Cssxref("font-style", "estilo de fuente") }}, {{ Cssxref("font-variant", "variantes de fuente") }}, o {{ Cssxref("font-size", "tamaño de fuente") }}, estas propiedades pueden influir en la elección de la fuente.

## Especificaciones

- [CSS 1](https://www.w3.org/TR/CSS1#font-family)
- [CSS 2.1](https://www.w3.org/TR/CSS21/fonts.html#font-family-prop)
- [CSS 3](https://www.w3.org/TR/2002/WD-css3-fonts-20020802/#font-family-prop)

## Compatibilidades

TBD (La mejor manera centralizada en un único cuadro de compatibilidad.)
