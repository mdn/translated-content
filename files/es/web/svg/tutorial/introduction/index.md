---
title: Introducción
slug: Web/SVG/Tutorial/Introduction
translation_of: Web/SVG/Tutorial/Introduction
original_slug: Web/SVG/Tutorial/Introducción
---
<p>{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}</p>

<p><img alt="Ejemplo de imagenes vectoriales, una cría de leon, una curva con flechas direccionales a intervalos regulares y un texto que sigue una trayectoria ondulada" class="internal" src="/@api/deki/files/348/=SVG_Overview.png" style="float: right;"><a href="/es/docs/Web/SVG" lang="es" title="es/docs/Web/SVG">SVG</a> es un lenguaje <a href="/es/docs/Introducción_a_XML" lang="es" title="es/docs/Introducción_a_XML">XML</a>, parecido a <a href="/es/docs/XHTML" lang="es" title="es/docs/XHTML">XHTML</a>, el cual puede ser usado para dibujar gráficos vectoriales, como los mostrados a la derecha. Puede ser usado para crear una imagen ya sea especificando todas las líneas y formas necesarias, modificando las imágenes matriciales (raster images) o una combinación de ambas. La imagen y sus componentes pueden ser transformados, compuestos o filtrados para cambiar completamente su apariencia.</p>

<p>SVG surgió en 1999 después de que varios formatos compitieran y fueran propuestos a la <a class="external" href="http://www.w3.org" title="en-US/W3C">W3C</a> los cuales fallaron para ser completamente ratificados. SVG es soportado por los principales <a href="https://caniuse.com/#search=svg">navegadores</a>. Un inconveniente es que cargar un SVG puede ser lento. SVG ofrecen beneficios, algunos de los cuales incluyen tener una <a href="/en-US/docs/Web/API">interfaz</a> <a href="/en-US/docs/Web/API">DOM </a>disponible para éste, y no requerir extensiones de terceros. Usarlo o no a menudo dependerá de tu caso específico de uso.</p>

<p> </p>

<p> </p>

<h3 id="Ingredientes_básicos">Ingredientes básicos</h3>

<p><a href="/en-US/docs/Web/HTML">HTML</a>  provee elementos que definen encabezados, párrafos, tablas, etc. En forma muy similar, SVG provee elementos para círculos, rectángulos, y curvas simples y complejas. Un documento SVG simple consiste de nada más que el elemento raíz {{ SVGElement('svg') }} y varias formas básicas que construyen todas juntas un gráfico. En adición está el elemento {{ SVGElement('g') }}, el cual es usado para agrupar varias formas básicas.</p>

<p>Desde este punto, la imagen SVG puede volverse arbitrariamente compleja. SVG soporta gradientes, rotaciones, efectos de filtro, animaciones, interactividad con JavaScript y más. Pero todas esas características adicionales del lenguaje dependen de este conjunto relativamente pequeño de elementos para definir el area de gráficos.</p>

<h3 id="Before_you_start" name="Before_you_start">Antes de empezar</h3>

<p>Existe un número de programas de dibujo disponibles como <a class="external" href="http://www.inkscape.org/">Inkscape</a> los cuales son gratis y usan SVG como su formato nativo. Sin embargo, este tutorial se basará en el confiable XML o editor de texto (a tu criterio). La idea es enseñar el funcionamiento interno de SVG a aquellos que desean comprenderlo, y eso se logra mejor ensuciando tus manos con un poco de maquetado. De todos modos deberías fijarte tus objetivos. No todos los visores de SVG son iguales por lo que es posible que algo escrito para una aplicación no se verá exactamente igual en otra, simplemente porque soportan diferentes niveles de la especificación SVG u otra especificación que estés utilizando junto con SVG (es decir, <a href="/es/JavaScript" lang="es" title="es/JavaScript">JavaScript</a> o <a href="/es/CSS" lang="es" title="es/CSS">CSS</a>).</p>

<p>SVG es soportado en todo navegador moderno e incluso hasta un par de versiones anteriores en algunos casos. Una tabla bastante completa de soporte por navegadores puede verse en <a href="http://caniuse.com/svg">Can I use</a>. Firefox ha soportado algo de contenido SVG desde su versión 1.5 y el nivel de soporte ha ido creciendo con cada versión desde entonces. Con algo de optimismo, junto con este tutorial, MDN puede ayudar a los desarrolladores a estar al tanto de las diferencias entre Gecko y algunas de las otras implementaciones mas importantes.</p>

<p>Antes de empezar deberías tener conceptos básicos de XML u otro lenguaje de maquetado como <abbr title="HyperText Markup Language">HTML</abbr>. Si no estás del todo familiarizado con XML, aquí hay algunas máximas a tener presentes:</p>

<ul>
 <li>Los elementos SVG y sus atributos deben ser escritos en la misma capitalización mostrada ya que XML es sensible a mayúsculas (en contraposición a HTML).</li>
 <li>Los valores de atributos en SVG deben ir entre comillas, incluso si son números.</li>
</ul>

<p>SVG es una especificación muy extensa. Este instructivo intenta cubrir lo básico. Una vez que te hayas familiarizado deberías ser capaz de usar la <a href="/es/docs/Web/SVG/Element" lang="es" title="es/docs/Web/SVG/Element">Referencia de elementos</a> y la <a href="/es/docs/DOM/DOM_Reference#SVG_interfaces" lang="es" title="es/SVG/Interface">Referencia de interface</a> para encontrar cualquier otra cosa que necesites saber.</p>

<h3 id="SVG_y_sus_sabores">SVG y sus sabores</h3>

<p>Desde que se volvió una recomendación en 2003, la versión "completa" mas reciente de SVG es 1.1. Se edifica sobre SVG 1.0, añadiendo mas modularización para facilitar su implementación. <a href="http://www.w3.org/TR/SVG/" lang="en">La segunda edición de SVG 1.1</a> se volvió una Recomendación en 2011. SVG 1.2 iba a ser la próxima entrega de SVG. Fue descartada en favor de la próxima <a href="http://www.w3.org/TR/SVG2/">SVG 2.0</a>, la cual está siendo desarrollada ahora mismo y sigue un enfoque similar a CSS 3 en que divide componentes en varias especificaciones vagamente relacionadas.</p>

<p>En adición a la recomendación de SVG completo, el grupo de trabajo en W3C introdujo SVG Tiny y SVG Basic en 2003. Estos perfiles apuntan principalmente a dispositivos móviles. El primero, SVG Tiny, debería brindar primitivas de gráficos para dispositivos pequeños con capacidades bajas. SVG Basic ofrece muchas de las prestaciones del SVG completo, pero no incluye aquellas difíciles de implementar o costosas de representar (como animaciones). En 2008, SVG Tiny 1.2 se volvió una Recomendación W3C.</p>

<p>Hubo planes para una especificación SVG Print, la cual habría agregado soporte para páginas múltiples y administración de color mejorada. Esta tarea fue abandonada.</p>

<p>{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}</p>
