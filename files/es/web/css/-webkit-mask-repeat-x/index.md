---
title: "-webkit-mask-repeat-x"
slug: Web/CSS/-webkit-mask-repeat-x
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

La propiedad CSS `-webkit-mask-repeat-x` especifica si una imagen de máscara se repite(en mosaico) y cómo se lleva acabo esa repetición de manera horizontal.

{{cssinfo}}

## Síntaxis

```css
/* Palabras Clave Valor */
-webkit-mask-repeat-x: repeat;
-webkit-mask-repeat-x: no-repeat;
-webkit-mask-repeat-x: space;
-webkit-mask-repeat-x: round;

/* Múltiples valores */
-webkit-mask-repeat-x: repeat, no-repeat, space;

/* Valores globales */
-webkit-mask-repeat-x: inherit;
-webkit-mask-repeat-x: initial;
-webkit-mask-repeat-x: unset;
```

## Valores

- repeat
  - : La imagen de máscara se repite tanto horizontal como verticalmente.
- no-repeat
  - : La imagen de máscara no se repite; sólo se dibuja una copia de la misma. El resto del contenido del elemento al cual se le ha aplicado la máscara, no es mostrado.
- space
  - : La imagen se repite tanta veces como sea posible pero sin aplicarle ningún recorte. La primera y la última imagen estarán pegadas a ambos lados del elemento y el espacio restante se distribuye de igual manera entre las imágenes. Se ignora la propiedad {{cssxref("mask-position")}} a menos que únicamente se pueda mostrar una sóla imagen sin aplicar recortes. El único caso en el que se aplican recortes usando este valor es cuando no hay suficiente espacio para mostrar una sóla imagen.
- round
  - : Al aumentar el espacio la imágenes repetidas pueden estiarse (sin dejar huecos) hasta que sólo haya hueco para añadir una más. Al añadir la siguiente se encogen para permitir el hueco.Ejemplo: Una imagen con una achura original de 260px, repetida 3 veces, puede estirarse hasta que cada repetición tenga una anchura de 300px y, entonces, se añadirá otra que se encogerá hasta 225px.

### Síntaxis Formal

{{csssyntax}}

## Ejemplos

```css
.exampleone {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-x: repeat;
}

.exampletwo {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-x: no-repeat;
}
```

### Soporte para múltiples imágenes de máscara

Es posible especificar un `<repeat-style>` diferente para cada una de las imágenes de máscara. Los distintos valores deben separarme mediante el uso de comas:

```css
.examplethree {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-x: repeat, space;
}
```

Cada imagen se asocia con el correspondiente estilo de repetición, desde la primera hasta la última y siguiendo el orden que se ha establecido.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

{{cssxref("-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-y")}}
