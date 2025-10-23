---
title: Introducción al modelo de caja básico de CSS
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
---

Al maquetar un documento, el motor de renderizado del navegador representa cada elemento como una caja rectangular, conforme al estándar del **modelo de caja básico de CSS**. CSS determina el tamaño, la posición y las propiedades (color, fondo, tamaño del borde, etc.) de estas cajas.

Cada caja está compuesta de cuatro partes (o _áreas_), definidas por sus respectivos límites: _límite de contenido (content edge)_ , _límite de relleno (padding edge)_ , _límite de borde (border edge)_ y _límite de margen (margin edge)_ .

![Modelo de caja de CSS](<boxmodel-(3).png>)

## Área de contenido (content area)

El **área de contenido** o **content area**, delimitada por el límite de contenido (Content edge en la imagen), contiene el contenido "real" del elemento, como texto, una imagen o un reproductor de video. Sus dimensiones son _"content width"_ o (_"content-box width"_) que hace referencia al ancho del contenido, y _"content height"_ o (_"content-box height"_) que hace referencia al alto. A menudo, tiene un color o una imagen de fondo.

Si la propiedad {{cssxref("box-sizing")}} está definida como `content-box` (que es el valor por defecto) y el elemento es un "elemento de bloque", el tamaño del área de contenido puede definirse explícitamente con las propiedades {{cssxref("width")}} , {{cssxref("min-width")}} , {{cssxref("max-width")}} , {{cssxref("height")}} , {{cssxref("min-height")}} y {{cssxref("max-height")}} .

## Área de relleno (padding area)

El **área de relleno** o **padding area**, delimitada por el límite de relleno (Padding Edge en la imagen), extiende el área de contenido para incluir el relleno del elemento. Sus dimensiones son _"padding-box width"_ para el ancho y _"padding-box height"_ para el alto.

El tamaño del relleno viene determinado por las propiedades {{cssxref("padding-top")}} , {{cssxref("padding-right")}} , {{cssxref("padding-bottom")}} , {{cssxref("padding-left")}} y la propiedad resumida {{cssxref("padding")}} .

## Área de borde (border area)

El **área de borde** o **border area**, delimitada por el límite de borde (Border Edge en la imagen), extiende el área de relleno para incluir los bordes del elemento. Sus dimensiones son _"border-box width"_ para el ancho y _"border-box height"_ para el alto.

El espesor de los bordes está determinado por la propiedad {{cssxref("border-width")}} y la propiedad resumida {{cssxref("border")}} . Si la propiedad {{cssxref("box-sizing")}} se establece como `border-box` , el tamaño del área de borde puede definirse explícitamente con los parámetros {{cssxref("width")}} , {{cssxref("min-width")}} , {{cssxref("max-width")}} , {{cssxref("height")}} , {{cssxref("min-height")}} , {{cssxref("max-height")}}. Cuando hay un fondo {{cssxref("background-color")}} o {{cssxref("background-image")}} establecido en una caja, éste se extiende hasta el límite exterior del borde (es decir, se extiende por debajo del borde en el orden Z). Este comportamiento, que es el que tiene por defecto, puede ser alterado con la propiedad CSS {{cssxref("background-clip")}}.

## Área de margen (margin area)

El **área de margen** o **margin area**, delimitada por el límite de margen (Margin edge en la imagen), extiende el área de borde para incluir un área vacía, utilizada para separar al elemento del resto de sus vecinos. Sus dimensiones son _"margin-box width"_ para el ancho y _"margin-box height"_ para el alto.

El tamaño del área de margen está determinado por las propiedades {{cssxref("margin-top")}} , {{cssxref("margin-right")}} , {{cssxref("margin-bottom")}} , {{cssxref("margin-left")}} y la propiedad resumida {{cssxref("margin")}} . Cuando se produce un [colapso de margen](/es/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing), el área de margen no está claramente definida ya que los márgenes se comparten entre cajas.

Por último, tenga en cuenta que para los elementos en línea no modificados, la cantidad de espacio ocupado (la contribución a la altura de la línea) está determinada por la propiedad {{cssxref("line-height")}} , aunque los bordes y el relleno sigan apareciendo alrededor del contenido.

## Véase también

- [Diseño y el bloque contenedor](/es/docs/Web/CSS/Containing_block)
- [Introducción a la cascada CSS](/es/docs/Web/CSS/Cascade)
- [Cascada y herencia](/es/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- Conceptos clave de CSS
  - [Sintaxis CSS](/es/docs/Web/CSS/CSS_syntax/Syntax)
  - [Reglas-At](/es/docs/Web/CSS/CSS_syntax/At-rule)
  - [Comentarios](/es/docs/Web/CSS/CSS_syntax/Comments)
  - [Especificidad](/es/docs/Web/CSS/CSS_cascade/Specificity)
  - [Herencia](/es/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Modo de diseño](/es/docs/Glossary/Layout_mode)
  - [Modelo de formato visual](/es/docs/Web/CSS/Visual_formatting_model)
  - [Entendiendo el colapso de margen](/es/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Valores
    - [Valor inicial](/es/docs/Web/CSS/CSS_cascade/Value_processing)
    - [Valor calculado](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
    - [Valor usado](/es/docs/Web/CSS/used_value)
    - [Valor real](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
  - [Sintaxis de definición de valor](/es/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Propiedades abreviadas](/es/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [Elementos reemplazados](/es/docs/Web/CSS/CSS_images/Replaced_element_properties)
