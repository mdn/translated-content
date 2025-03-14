---
title: Fondos y bordes CSS
slug: Web/CSS/CSS_backgrounds_and_borders
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{CSSRef}}

El módulo **Fondos y bordes CSS** proporciona propiedades para agregar bordes, esquinas redondeadas y sombras de caja a los elementos.

Puede agregar diferentes tipos de estilos de borde, incluidos bordes hechos de imágenes de cualquier tipo de imagen, desde imágenes rasterizadas hasta degradados CSS. Los bordes pueden ser cuadrados o redondeados, y se puede establecer un radio diferente para cada esquina. Los elementos se pueden redondear tengan o no un borde visible.

Las sombras de caja incluyen sombras internas y externas, sombras únicas o múltiples, y sólidas o que se desvanecen a transparentes. Una sombra de caja exterior proyecta una sombra como si el cuadro de borde del elemento fuera opaco. Una sombra de caja interna proyecta una sombra como si todo lo que está fuera del borde del relleno fuera opaco. La sombra puede ser sólida o incluir una distancia extendida con el color de la sombra en transición a transparente.

Las propiedades de este módulo también te permiten definir si las celdas dentro de un {{HTMLElement("table")}} deben tener bordes compartidos o separados.

### Fondos, bordes y sombras de caja en acción

Esta muestra de bordes, fondos y sombras de caja consta de imágenes de fondo centradas hechas de degradados lineales y radiales. Una serie de sombras de caja hacen que el borde parezca "saltar". El elemento de la izquierda tiene un conjunto de imágenes de borde. El elemento de la derecha tiene un borde punteado redondeado.

{{EmbedGHLiveSample("css-examples/modules/backgrounds.html", '100%', 430)}}

Las imágenes de fondo se definen con {{cssxref("background-image")}}. Las imágenes están centradas con {{cssxref("background-position")}}. Se utilizan diferentes valores de la propiedad {{cssxref("background-clip")}} para las múltiples imágenes de fondo para hacer que las imágenes de fondo permanezcan dentro de la caja de contenido. El color de fondo se recorta en el cuadro de relleno evitando que el fondo aparezca a través de las secciones transparentes para {{cssxref("border-image")}} y {{cssxref("border-style", "dotted")}} {{cssxref("border")}}. Las esquinas redondeadas en el elemento de la derecha se crean usando la propiedad {{cssxref("border-radius")}}. Se utiliza una única declaración {{cssxref("box-shadow")}} para establecer todas las sombras, tanto de entrada como de salida.

Para ver el código de este ejemplo, [vea la fuente en GitHub](https://github.com/mdn/css-examples/blob/main/modules/backgrounds.html).

## Referencia

### Propiedades

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}
- {{cssxref("background")}} abreviatura
- {{cssxref("background-position-x")}} {{experimental_inline}}
- {{cssxref("background-position-y")}} {{experimental_inline}}
- {{cssxref("background-position-inline")}} {{experimental_inline}}
- {{cssxref("background-position-block")}} {{experimental_inline}}

- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-bottom")}} abreviatura
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-left")}} abreviatura
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-right")}} abreviatura
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- {{cssxref("border-top")}} abreviatura
- {{cssxref("border-color")}} abreviatura
- {{cssxref("border-style")}} abreviatura
- {{cssxref("border-width")}} abreviatura
- {{cssxref("border")}} abreviatura

- {{cssxref("border-collapse")}}

- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-radius")}} abreviatura

- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- {{cssxref("border-image")}} abreviatura

- {{cssxref("box-shadow")}}

### Tipos de datos

- Tipo enumerado {{cssxref("line-type")}}

## Guías

- [Aprende CSS: fondo y bordes](/es/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : Explica cómo implementar imágenes decorativas utilizando imágenes de fondo con CSS.
- [Usando múltiples fondos](/es/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Explica cómo configurar uno o más fondos en un elemento.
- [Cambiar el tamaño de las imágenes de fondo](/es/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Describe cómo cambiar el tamaño y el comportamiento de repetición de las imágenes de fondo.
- [Aprende CSS: el modelo de caja](/es/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Explica cómo los bordes, junto con otras propiedades del modelo de caja, afectan el modelo de caja CSS.
- [Usando gradientes de CSS](/es/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Explica cómo crear imágenes de fondo degradadas con CSS.

## Conceptos relacionados

- Propiedad {{cssxref("border-block-end-color")}}
- Propiedad {{cssxref("border-block-start-color")}}
- Propiedad {{cssxref("border-inline-end-color")}}
- Propiedad {{cssxref("border-inline-start-color")}}
- Propiedad {{cssxref("border-block-end-style")}}
- Propiedad {{cssxref("border-block-start-style")}}
- Propiedad {{cssxref("border-inline-end-style")}}
- Propiedad {{cssxref("border-inline-start-style")}}
- Propiedad {{cssxref("border-block-end-width")}}
- Propiedad {{cssxref("border-block-start-width")}}
- Propiedad {{cssxref("border-inline-end-width")}}
- Propiedad {{cssxref("border-inline-start-width")}}

- Propiedad {{cssxref("border-start-start-radius")}}
- Propiedad {{cssxref("border-start-end-radius")}}
- Propiedad {{cssxref("border-end-start-radius")}}
- Propiedad {{cssxref("border-end-end-radius ")}}

- Propiedad {{cssxref("box-sizing")}}
- Propiedad {{cssxref("box-decoration-break")}}
- Propiedad {{cssxref("text-shadow")}}

- Función CSS {{cssxref("url", "url()")}}
- Tipo de dato [`<color>`](/es/docs/Web/CSS/color)
- Tipo de dato [`<image>`](/es/docs/Web/CSS/image)
- Tipo de dato [`<position>`](/es/docs/Web/CSS/position)

- Palabra clave [`currentcolor`](/es/docs/Web/CSS/color_value#currentcolor_keyword)

## Especificaciones

{{Specifications}}

## Véase también

- Herramientas interactivas que le permiten crear visualmente imágenes de bordes, esquinas redondeadas y sombras de caja:
  - [Generador de bordes con imágenes](/es/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - [Generador de bordes con radio](/es/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - [Generador de sombra de caja](/es/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Aplicando color a elementos HTML usando CSS](/es/docs/Web/CSS/CSS_colors/Applying_color), incluso para bordes.
- La función de filtro [`drop-shadow()`](/es/docs/Web/CSS/filter-function/drop-shadow) que aplica un efecto de sombra a la imagen de entrada. La función es utilizada por las propiedades {{cssxref("filter")}} y {{cssxref("backdrop-filter")}}.
