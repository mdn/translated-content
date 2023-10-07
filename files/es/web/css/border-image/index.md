---
title: border-image
slug: Web/CSS/border-image
---

{{CSSRef("CSS Borders")}}

## Resumen

La propiedad de CSS `border-image` permite utilizar una imágen para definir los bordes de los elementos. Esto hace que dibujarlos sea más simple y elimina la necesidad de utilizar muchas cajas en algunos casos.

La propiedad `border-image` es usada en lugar de la sentencia {{cssxref("border-style")}}. Por eso es muy importante tener en cuenta el valor dado por la sentencia {{cssxref("border-image-source")}}, que se puede establecer ya sea por la propiedad `border-image-source` o la abreviatura `border-image`, en caso de que su valor sea nulo (none), o si la imágen no se puede visualizar, se utilizarán los estilos de borde.

{{cssinfo}}

## Sintaxis

```
Etiquetado formal: {{csssyntax("border-image")}}
```

### Valores

A continuación vea las respectivas propiedades para los diferentes valores.

## Ejemplos

### Bitmap repeated (repeat)

La imágen es cortada para rellenar el area del borde, repitiendose si es necesario.

```css
.example {
  border: 30px solid transparent;
  -moz-border-image: url("/files/4127/border.png") 30 30 repeat; /* Old firefox */
  -webkit-border-image: url("/files/4127/border.png") 30 30 repeat; /* Safari */
  -o-border-image: url("/files/4127/border.png") 30 30 repeat; /* Opera */
  border-image: url("/files/4127/border.png") 30 30 repeat;
}
```

Resultado:
![border image repeat demo](/files/4129/repeat.png)

### Bitmap repeated (round)

La opción 'round' es una variación de la opción 'repeat', la cual distribuye las partes de tal manera que los extremos se conecten bién.

```css
.example {
  border: 30px solid transparent;
  -moz-border-image: url("/files/4127/border.png") 30 30 round; /* Old firefox */
  -webkit-border-image: url("/files/4127/border.png") 30 30 round; /* Safari */
  -o-border-image: url("/files/4127/border.png") 30 30 round; /* Opera */
  border-image: url("/files/4127/border.png") 30 30 round;
}
```

Resultado:
![border image round demo](/files/4131/round.png)

### Bitmap stretched

La opción 'stretch' estira la imágen para rellenar todo el borde del área

```css
.example {
  border: 30px solid transparent;
  -moz-border-image: url("/files/4127/border.png") 30 30 stretch; /* Old firefox */
  -webkit-border-image: url("/files/4127/border.png") 30 30 stretch; /* Safari */
  -o-border-image: url("/files/4127/border.png") 30 30 stretch; /* Opera */
  border-image: url("/files/4127/border.png") 30 30 stretch;
}
```

Resultado:
![border image stretch demo](/files/4133/stretch.png)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
