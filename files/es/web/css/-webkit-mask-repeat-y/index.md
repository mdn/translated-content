---
title: "-webkit-mask-repeat-y"
slug: Web/CSS/-webkit-mask-repeat-y
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

La propiedad CSS `-webkit-mask-repeat-y` especifica si una imagen de máscara se repite(en mosaico) y cómo se lleva acabo esa repetición de manera vertical.

{{cssinfo}}

## Síntaxis

```css
/* Palabras Clave Valor */
-webkit-mask-repeat-y: repeat;
-webkit-mask-repeat-y: no-repeat;
-webkit-mask-repeat-y: space;
-webkit-mask-repeat-y: round;

/* Múltiples valores */
-webkit-mask-repeat-y: repeat, no-repeat, space;

/* Valores globales */
-webkit-mask-repeat-y: inherit;
-webkit-mask-repeat-y: initial;
-webkit-mask-repeat-y: unset;
```

## Valores

- repeat
  - : La imagen se repite verticalmente
- no-repeat
  - : La imagen de máscara no se repite verticalmente; sólo se dibuja una copia de la misma. El resto del contenido del elemento al cual se le ha aplicado la máscara, no es mostrado.
- space
  - : La imagen se repite tanta veces como sea posible pero sin aplicarle ningún recorte. La primera y la última imagen estarán pegadas al borde superior e inferior del elemento y el espacio restante se distribuye de igual manera entre las imágenes. Se ignora la propiedad {{cssxref("mask-position")}} a menos que únicamente se pueda mostrar una sóla imagen sin aplicar recortes. El único caso en el que se aplican recortes usando este valor es cuando no hay suficiente espacio para mostrar una sóla imagen.
- round

  - : Al aumentar el espacio vertical la imágenes repetidas pueden estiarse (sin dejar huecos) hasta que sólo haya hueco para añadir una más. Al añadir la siguiente se encogen para permitir el hueco.Ejemplo: Una imagen con una altura original de 260px, repetida 3 veces, puede estirarse hasta que cada repetición tenga una altura de 300px y, entonces, se añadirá otra que se encogerá hasta una altura 225px.

    As the allowed vertical space increases in size, the repeated images will stretch (leaving no gaps) until there is room for another one to be added. When the next image is added, all of the current ones compress to allow room. Example: An image with an original height of 260px, repeated three times, might stretch until each repetition is 300px high, and then another image will be added. They will then compress to a height of 225px.

### Síntaxis Formal

{{csssyntax}}

## Ejemplos

```css
.exampleone {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-y: repeat;
}

.exampletwo {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-y: no-repeat;
}
```

### Soporte para múltiples imágenes de máscara

Es posible especificar un `<repeat-style>` diferente para cada una de las imágenes de máscara. Los distintos valores deben separarme mediante el uso de comas:

```css
.examplethree {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-y: repeat, space;
}
```

Cada imagen se asocia con el correspondiente estilo de repetición, desde la primera hasta la última y siguiendo el orden que se ha establecido.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

{{cssxref("-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-x")}}
