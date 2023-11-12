---
title: Introducción
slug: Web/SVG/Tutorial/Introduction
---

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}

![Ejemplo de imagenes vectoriales, una cría de leon, una curva con flechas direccionales a intervalos regulares y un texto que sigue una trayectoria ondulada](svg_overview.png)[SVG](/es/docs/Web/SVG) es un lenguaje [XML](/es/docs/Introducción_a_XML), parecido a [XHTML](/es/docs/XHTML), el cual puede ser usado para dibujar gráficos vectoriales, como los mostrados a la derecha. Puede ser usado para crear una imagen ya sea especificando todas las líneas y formas necesarias, modificando las imágenes matriciales (raster images) o una combinación de ambas. La imagen y sus componentes pueden ser transformados, compuestos o filtrados para cambiar completamente su apariencia.

SVG surgió en 1999 después de que varios formatos compitieran y fueran propuestos a la [W3C](http://www.w3.org) los cuales fallaron para ser completamente ratificados. SVG es soportado por los principales [navegadores](https://caniuse.com/#search=svg). Un inconveniente es que cargar un SVG puede ser lento. SVG ofrecen beneficios, algunos de los cuales incluyen tener una [interfaz](/es/docs/Web/API) [DOM](/es/docs/Web/API) disponible para éste, y no requerir extensiones de terceros. Usarlo o no a menudo dependerá de tu caso específico de uso.

### Ingredientes básicos

[HTML](/es/docs/Web/HTML) provee elementos que definen encabezados, párrafos, tablas, etc. En forma muy similar, SVG provee elementos para círculos, rectángulos, y curvas simples y complejas. Un documento SVG simple consiste de nada más que el elemento raíz {{ SVGElement('svg') }} y varias formas básicas que construyen todas juntas un gráfico. En adición está el elemento {{ SVGElement('g') }}, el cual es usado para agrupar varias formas básicas.

Desde este punto, la imagen SVG puede volverse arbitrariamente compleja. SVG soporta gradientes, rotaciones, efectos de filtro, animaciones, interactividad con JavaScript y más. Pero todas esas características adicionales del lenguaje dependen de este conjunto relativamente pequeño de elementos para definir el area de gráficos.

### Antes de empezar

Existe un número de programas de dibujo disponibles como [Inkscape](http://www.inkscape.org/) los cuales son gratis y usan SVG como su formato nativo. Sin embargo, este tutorial se basará en el confiable XML o editor de texto (a tu criterio). La idea es enseñar el funcionamiento interno de SVG a aquellos que desean comprenderlo, y eso se logra mejor ensuciando tus manos con un poco de maquetado. De todos modos deberías fijarte tus objetivos. No todos los visores de SVG son iguales por lo que es posible que algo escrito para una aplicación no se verá exactamente igual en otra, simplemente porque soportan diferentes niveles de la especificación SVG u otra especificación que estés utilizando junto con SVG (es decir, [JavaScript](/es/JavaScript) o [CSS](/es/CSS)).

SVG es soportado en todo navegador moderno e incluso hasta un par de versiones anteriores en algunos casos. Una tabla bastante completa de soporte por navegadores puede verse en [Can I use](http://caniuse.com/svg). Firefox ha soportado algo de contenido SVG desde su versión 1.5 y el nivel de soporte ha ido creciendo con cada versión desde entonces. Con algo de optimismo, junto con este tutorial, MDN puede ayudar a los desarrolladores a estar al tanto de las diferencias entre Gecko y algunas de las otras implementaciones mas importantes.

Antes de empezar deberías tener conceptos básicos de XML u otro lenguaje de maquetado como HTML. Si no estás del todo familiarizado con XML, aquí hay algunas máximas a tener presentes:

- Los elementos SVG y sus atributos deben ser escritos en la misma capitalización mostrada ya que XML es sensible a mayúsculas (en contraposición a HTML).
- Los valores de atributos en SVG deben ir entre comillas, incluso si son números.

SVG es una especificación muy extensa. Este instructivo intenta cubrir lo básico. Una vez que te hayas familiarizado deberías ser capaz de usar la [Referencia de elementos](/es/docs/Web/SVG/Element) y la [Referencia de interface](/es/docs/DOM/DOM_Reference#SVG_interfaces) para encontrar cualquier otra cosa que necesites saber.

### SVG y sus sabores

Desde que se volvió una recomendación en 2003, la versión "completa" mas reciente de SVG es 1.1. Se edifica sobre SVG 1.0, añadiendo mas modularización para facilitar su implementación. [La segunda edición de SVG 1.1](http://www.w3.org/TR/SVG/) se volvió una Recomendación en 2011. SVG 1.2 iba a ser la próxima entrega de SVG. Fue descartada en favor de la próxima [SVG 2.0](http://www.w3.org/TR/SVG2/), la cual está siendo desarrollada ahora mismo y sigue un enfoque similar a CSS 3 en que divide componentes en varias especificaciones vagamente relacionadas.

En adición a la recomendación de SVG completo, el grupo de trabajo en W3C introdujo SVG Tiny y SVG Basic en 2003. Estos perfiles apuntan principalmente a dispositivos móviles. El primero, SVG Tiny, debería brindar primitivas de gráficos para dispositivos pequeños con capacidades bajas. SVG Basic ofrece muchas de las prestaciones del SVG completo, pero no incluye aquellas difíciles de implementar o costosas de representar (como animaciones). En 2008, SVG Tiny 1.2 se volvió una Recomendación W3C.

Hubo planes para una especificación SVG Print, la cual habría agregado soporte para páginas múltiples y administración de color mejorada. Esta tarea fue abandonada.

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}
