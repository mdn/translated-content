---
title: Tipo de dato CSS `<image>`
short-title: <image>
slug: Web/CSS/Reference/Values/image
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

El [tipo de dato](/es/docs/Web/CSS/Reference/Values/Data_types) [CSS](/es/docs/Web/CSS) **`<image>`** representa una imagen bidimensional.

## Sintaxis

El tipo de dato `<image>` puede representarse con cualquiera de los siguientes:

- Una imagen denotada mediante el tipo de dato {{cssxref("url_value", "&lt;url&gt;")}}
- Un tipo de dato {{cssxref("gradient")}}
- Una parte de la página web, definida mediante la función {{CSSxRef("element","element()")}}
- Una imagen, un fragmento de imagen o un parche de color sólido, definido mediante la función {{CSSxRef("image/image","image()")}}
- Una combinación de dos o más imágenes, definida mediante la función {{CSSxRef("cross-fade","cross-fade()")}}.
- Una selección de imágenes elegidas según la resolución, definida mediante la función {{CSSxRef("image/image-set","image-set()")}}.
- Generada por un [paint worklet](/es/docs/Web/API/CSS_Painting_API) mediante la función {{CSSxRef("image/paint","paint()")}}.

## Descripción

CSS puede trabajar con los siguientes tipos de imágenes:

- Imágenes con _dimensiones intrínsecas_ (un tamaño natural), como un JPEG, un PNG u otro [formato ráster](https://en.wikipedia.org/wiki/Raster_graphics).
- Imágenes con _varias dimensiones intrínsecas_, que existen en distintas versiones dentro de un mismo archivo, como algunos formatos .ico. (En este caso, las dimensiones intrínsecas serán las de la imagen de mayor área y con la {{glossary("aspect ratio", "relación de aspecto")}} más parecida a la del contenedor.)
- Imágenes sin dimensiones intrínsecas, pero con _una relación de aspecto intrínseca_ entre su ancho y su alto, como un SVG u otro [formato vectorial](https://en.wikipedia.org/wiki/Vector_graphics).
- Imágenes _sin dimensiones intrínsecas ni relación de aspecto intrínseca_, como un degradado de CSS.

### Tamaño concreto

CSS determina el _tamaño concreto_ de un objeto utilizando (1) sus _dimensiones intrínsecas_; (2) su _tamaño especificado_, definido mediante propiedades CSS como {{CSSxRef("width")}}, {{CSSxRef("height")}} o {{CSSxRef("background-size")}}; y (3) su _tamaño predeterminado_, determinado por el tipo de propiedad con la que se usa la imagen:

| Tipo de objeto (propiedad CSS)                                                                 | Tamaño de objeto predeterminado                                                                                                                      |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{CSSxRef("background-image")}}                                                                | El tamaño del área de posicionamiento del fondo del elemento                                                                                         |
| {{CSSxRef("list-style-image")}}                                                                | El tamaño de un carácter de `1em`                                                                                                                    |
| {{CSSxRef("border-image-source")}}                                                             | El tamaño del área de imagen del borde del elemento                                                                                                  |
| {{CSSxRef("cursor")}}                                                                          | El tamaño definido por el navegador que coincide con el tamaño habitual del cursor en el sistema del cliente                                         |
| {{CSSxRef("mask-image")}}                                                                      | ?                                                                                                                                                    |
| {{CSSxRef("shape-outside")}}                                                                   | ?                                                                                                                                                    |
| {{CSSxRef("mask-border-source")}}                                                              | ?                                                                                                                                                    |
| {{cssxref("symbols()")}} para @counter-style                                                   | Característica en riesgo. Si se admite, el tamaño definido por el navegador que coincide con el tamaño habitual del cursor en el sistema del cliente |
| {{CSSxRef("content")}} para un pseudoelemento ({{CSSxRef("::after")}}/{{CSSxRef("::before")}}) | Un rectángulo de 300px × 150px                                                                                                                       |

El tamaño concreto del objeto se calcula mediante el siguiente algoritmo:

- Si el tamaño especificado define _tanto el ancho como el alto_, estos valores se usan como el tamaño concreto del objeto.
- Si el tamaño especificado define _solo el ancho o solo el alto_, el valor que falta se determina usando la relación intrínseca, si existe; las dimensiones intrínsecas, si el valor especificado coincide con ellas; o el tamaño predeterminado del objeto para ese valor faltante.
- Si el tamaño especificado no define _ni el ancho ni el alto_, el tamaño concreto del objeto se calcula de modo que coincida con la relación de aspecto intrínseca de la imagen, pero sin exceder el tamaño predeterminado del objeto en ninguna dimensión. Si la imagen no tiene relación de aspecto intrínseca, se usa la relación de aspecto intrínseca del objeto al que se aplica; si este objeto tampoco la tiene, el ancho o el alto que falte se toma del tamaño predeterminado del objeto.

> [!NOTE]
> No todos los navegadores admiten todos los tipos de imagen en todas las propiedades. Consulta la [sección de compatibilidad con navegadores](#compatibilidad_con_navegadores) para más información.

## Accesibilidad

Los navegadores no proporcionan información específica sobre las imágenes de fondo a las tecnologías de asistencia. Esto es importante sobre todo para los lectores de pantalla, ya que estos no anunciarán la presencia de la imagen y, por tanto, no transmitirán ninguna información a los usuarios. Si la imagen contiene información esencial para comprender el propósito general de la página, es preferible describirla semánticamente en el documento.

- [MDN: Comprender las WCAG, explicaciones de la Pauta 1.1](/es/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#pauta_1.1_—_dar_alternativas_de_texto_para_contenido_no_textual)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Imágenes válidas

```css example-good
url("test.jpg")               /* Una <url>, siempre que test.jpg sea una imagen real. */
linear-gradient(blue, red)  /* Un <gradient> */
element(#real-id)            /* Una parte de la página web, referenciada mediante la función element(),
                               si "real-id" es un ID existente en la página */
image(ltr "arrow.png#xywh=0,0,16,16", red)
                            /* Es una sección de 16x16 de un <url>, comenzando desde la esquina superior
                               izquierda de la imagen original, siempre que arrow.png sea una imagen
                               compatible; de lo contrario, se muestra un parche sólido de color rojo.
                               Si el idioma es rtl, la imagen se invierte horizontalmente. */
cross-fade(20% url("twenty.png"), url("eighty.png"))
                            /* Son imágenes combinadas mediante cross-fade, en la que twenty.png
                               tiene un 20% de opacidad y eighty.png un 80%. */
image-set("test.jpg' 1x, 'test-2x.jpg" 2x)
                            /* Una selección de imágenes con distintas resoluciones */
```

### Imágenes no válidas

```css example-bad
"no-url.jpg"           /* Un archivo de imagen debe definirse mediante la función url(). */
url("report.pdf")      /* El archivo al que hace referencia la función url() debe ser una imagen. */
element(#fakeid)     /* El ID de un elemento debe ser un ID existente en la página. */
image(z.jpg#xy=0,0)  /* El fragmento espacial debe escribirse con el formato xywh=#,#,#,# */
image-set("cat.jpg" 1x, "dog.jpg" 1x) /* cada imagen dentro de un image-set debe tener una resolución distinta */
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{cssxref("gradient")}}
- {{CSSxRef("element","element()")}}
- {{CSSxRef("image/image", "image()")}}
- {{CSSxRef("image/image-set","image-set()")}}
- {{CSSxRef("cross-fade","cross-fade()")}}
