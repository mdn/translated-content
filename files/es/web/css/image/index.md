---
title: <image>
slug: Web/CSS/image
---

{{CSSRef}}

## Resumen

El tipo de dato [CSS](/es/docs/Web/CSS) `<image>` representa una imagen 2D. Hay dos tipos de imágenes en CSS: imágenes planas estáticas, generalmente referenciadas usando una URL, e imágenes dinámicamente generadas, como degradados o representaciones de partes del árbol.

CSS puede manejar diferentes tipos de imágenes:

- imágenes con _dimensiones intrínsecas_, es decir, su tamaño natural, como una imagen jpeg que tiene dimensiones fijas.
- imágenes con _varias dimensiones intrínsecas_, que coexisten en distintas versiones dentro de un archivo, com algunos formatos .ico. En ese caso, la dimensión intrínseca será la de la imagen con área más grande, y con la proporción más próxima al tamaño del contenedor.
- imágenes sin dimensiones intrínsecas, pero con _una relación de aspecto intrínseca_, entre su anchura y altura, como algunas imágenes vectorizadas, en formato SVG, por ejemplo.
- imágenes _sin dimensiones intrínsecas, ni relación de aspecto intrínseca_, como un degradado CSS, por ejemplo.

CSS determina el _tamaño concreto del objeto_ usando estas _dimensiones intrínsecas_, el _tamaño específico_ en propiedades CSS como {{cssxref("width")}}, {{cssxref("height")}} o {{cssxref("background-size")}}, y el _tamaño predeterminado del objeto_ definido por el tipo de propiedad con el que se usa la imagen:

| Tipo de objeto                                                                                                                                                     | Tamaño de objeto predeterminado                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| {{cssxref("background-image")}}                                                                                                                                    | El tamaño del área de posicionamiento de fondo de la imagen                                            |
| {{cssxref("list-style-image")}}                                                                                                                                    | El tamaño de un caracter de `1em`                                                                      |
| {{cssxref("border-image")}}                                                                                                                                        | El tamaño del área de imagen de borde de un elemento                                                   |
| {{cssxref("cursor")}}                                                                                                                                              | Un tamaño definido por el navegador que coincida con el tamaño común de un cursor en el sistema en uso |
| Contenido reemplazado como cuando se combina la propiedad CSS {{cssxref("content")}} con los pseudo-elementos CSS {{cssxref("::after")}} y {{cssxref("::before")}} | Un rectángulo de `300px × 150px`                                                                       |

El tamaño concreto del objeto es calculado usando los siguientes algoritmos:

- Si el tamaño específico define tanto anchura como altura, estos valores son usados como el tamaño concreto del objeto.
- Si el tamaño específico define solo anchura o solo altura, el valor faltante es determinado usando la proporción intrínseca (si la hay), las dimensiones intrínsecas (si el valor especificado coincide), o usando el tamaño predeterminado del objeto para ese valor faltante.
- Si el valor especificado no define anchura ni altura, el tamaño concreto del objeto será calculado de modo que coincida con la relación de aspecto intrínseca de las imágenes, pero sin exceder el tamaño predeterminado en cualquiera de sus dimensiones. Si la imagen no tiene relación de aspecto intrínseca, se usará la del objeto al que se está aplicando; si el objeto no tiene ninguna, la anchura o altura faltante se tomará del tamaño predeterminado del objeto.

Las imágenes pueden ser usadas en numerosas propiedades CSS, como {{cssxref("background-image")}}, {{cssxref("border-image")}}, {{cssxref("content")}}, {{cssxref("list-style-image")}} o {{cssxref("cursor")}}.

> **Nota:** No todos los navegadores soportan algun tipo de imagen o alguna propiedad. Vea la sección de [compatibilidad de navegadores](#Compatibilidad_de_navegadores) para una lista detallada.

## Sintáxis

La representación de un tipo de dato CSS `<image>` puede ser una de las siguientes:

- Una imagen denotada por un tipo de dato {{cssxref("&lt;uri&gt;")}} y la función `url()`;
- Un degradado CSS ({{cssxref("&lt;gradient&gt;")}});
- Una parte de la página, definida por la función {{cssxref("element", "element()")}}.

## Ejemplos

Estos son valores válidos para imágenes:

```css example-good
url(test.jpg)                          /* La función url(), mientras test.jpg sea una imagen */
linear-gradient(to bottom, blue, red)  /* Un degradado (<gradient>) */
element(#colonne3)                     /* Una párte de la página, usando la función element(),
                                          mientras colonne3 sea un identificador CSS existente en la página. */
```

Estos son valores incorrectos para imágenes:

```css example-bad
cervin.jpg                             /* Un archivo de imagen debe ser definido usando la función url(). */
url(report.pdf)                        /* El archivo indicado en la función url() debe ser una imagen. */
element(#fakeid)                       /* Si 'fakeid' no es un identificador CSS existente en la página. */
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Degradados CSS](/es/docs/CSS/Using_CSS_gradients), {{cssxref("&lt;gradient&gt;")}}, {{cssxref("linear-gradient","linear-gradient()")}}, {{cssxref("radial-gradient","radial-gradient()")}}, {{cssxref("repeating-linear-gradient","repeating-linear-gradient()")}}, {{cssxref("repeating-radial-gradient","repeating-radial-gradient()")}}
- {{cssxref("element", "element()")}}
