---
title: Diseño CSS
slug: Learn_web_development/Core/CSS_layout
original_slug: Learn/CSS/CSS_layout
---

{{LearnSidebar}}

Llegados a este punto, hemos examinado los fundamentos básicos de CSS: cómo dar estilo al texto y cómo manipular las cajas que incluyen tu contenido. Llegó el momento de explorar cómo colocar tus cajas en el lugar que elijas con respecto a la ventana principal y el resto de cajas. Hemos cubierto ya los prerrequisitos necesarios, así que vamos a sumergirnos en la maquetación CSS, fijándonos en diferentes configuraciones de visualización, métodos de maquetación tradicionales que implican _floats_ y posicionamiento, así como a nuevas herramientas de maquetación en voga, como _flexbox_.

## Prerrequisitos

Antes de comenzar este módulo, ya deberías:

1. Estar familiarizado con HTML, como se expone en el módulo [Introduction to HTML](/es/docs/Learn/HTML/Introduction_to_HTML).
2. Sentirte cómodo con los fundamentos de CSS, que se discuten en [Introduction to CSS](/es/docs/Learn/CSS/First_steps).
3. Entender como diseñar cajas [style boxes](/es/docs/Learn/CSS/Building_blocks).

> [!NOTE]
> Si estás trabajando en un dispositivo donde no tengas la posibilidad de crear tus propios archivos, puedes probar la mayoría de los ejemplos de código en un programa online como [JSBin](https://jsbin.com/) o [Glitch](https://glitch.com/).

## Guías

Estos artículos te proporcionarán instrucciones sobre las herramientas y técnicas básicas de maquetación disponibles en CSS.

- [Introducción a la maquetación CSS](/es/docs/Learn/CSS/CSS_layout/Introduction)
  - : En este artículo repasaremos algunas de las características de la maquetación con CSS que ya hemos tratado en módulos previos, como los diferentes valores de {{cssxref("display")}} ; e introduciremos algunos de los conceptos que estudiaremos a lo largo del módulo.
- [Normal flow](/es/docs/Learn/CSS/CSS_layout/Normal_Flow)
  - : Los elementos en las páginas web se presentan de acuerdo con el _flujo normal,_ hasta que hacemos algo que cambie eso. Este artículo explica las bases del flujo normal para aprender como cambiarlo.
- [Flexbox](/es/docs/Learn/CSS/CSS_layout/Flexbox)
  - : [Flexbox](/es/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) es una muy reciente tecnología que, soportada ya por numerosos navegadores, está lista para su uso generalizado. Flexbox proporciona las herramientas necesarias para crear rápidamente maquetaciones flexibles y complejas, así como otras funcionalidades que tradicionalmente eran de difícil implementación con CSS. Este artículo explica su funcionamiento básico.
- [Grids](/es/docs/Learn/CSS/CSS_layout/Grids)
  - : Los sistemas de cuadrícula son otra funcionalidad muy utilizada para la maquetación CSS, que tiende a ser implementada mediante _floats_ u otras funciones de maquetación. Visualizas tu maquetación como un número fijo de columnas donde vas incluyendo tu contenido. En este artículo exploraremos la idea básica detrás de un sistema de cuadrícula, y terminaremos experimentando con CSS Grid, una incipiente nueva característica que permite diseñar una cuadricula Web con gran facilidad
- [Floats](/es/docs/Learn/CSS/CSS_layout/Floats)
  - : Inicialmente utilizado para imágenes flotantes dentro de bloques de texto, la propiedad {{cssxref("float")}} se ha convertido en una de las herramientas más utilizadas para crear maquetaciones de varias columnas en páginas web. Con la venida de Flexbox y Grid se ha regresado a su propósito original, como lo explica este artículo.
- [Posicionamiento](/es/docs/Learn/CSS/CSS_layout/Positioning)
  - : El posicionamiento te permite sacar elementos del flujo normal de maquetación del documento para hacer que se comporten de manera diferente, p.ej: colocando unos encima de otros, o fijándolos a un lugar de la ventana principal. Este artículo explica los diferentes valores para {{cssxref("position")}} y cómo utilizarlos.
- [Ejemplos prácticos de posicionamiento](/es/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)
  - : Una vez cubiertas las nociones básicas de posicionamiento en el artículo anterior, vamos ahora a construir un par de ejemplos reales, para explicar las cosas que puedes hacer con el posicionamiento.
- [Diseño Multi-columna](/es/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
  - : El diseño multi-columna te proporciona un método de maquetación de contenido en columnas, como lo podrías ver en un periódico. Este artículo explica como usar esta característica.
- [Responsive design](/es/docs/Learn/CSS/CSS_layout/Responsive_Design)
  - : A medida que han aparecido diversos tamaños de pantalla en dispositivos habilitados para la web, apareció un conjunto de practicas que permiten a las páginas web alterar su diseño y apariencia para adaptarse a diferentes anchos de pantalla, resoluciones, etc.Este se conoce como Responsive design (RWD) y es una idea que cambió la forma en que diseñamos páginas web multi-dispositivos, y en este artículo te ayudaremos a entender las principales técnicas que necesitas saber para dominarlo.
- [Guía de consulta de medios para principiantes](/es/docs/Learn/CSS/CSS_layout/Media_queries)
  - : **CSS Media Query** te proporciona una forma de aplicar CSS solo cuando el entorno del navegador y el dispositivo coincide con las reglas que especificaste, por ejemplo "la ventana principal es más ancha de 480 pixels". Las consultas de medios son una parte clave del responsive web design, ya que te permiten crear diferentes diseños dependiendo del tamaño de la ventana principal, así como también puede ser usado para detectar otras cosas acerca del entorno en donde tu página web se está ejecutando, por ejemplo si el usuario está usando una pantalla táctil en lugar de un ratón. En esta guía, aprenderás primero acerca de la sintaxis usada en las consultas de medios, y luego pasar a usarlos en un ejemplo donde se muestra cómo un diseño simple puede hacerse responsive.
- [Métodos de diseño heredados](/es/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
  - : Los sistemas Grid son una característica muy común usada en el diseño CSS, y antes del diseño Grid CSS, tendían a ser implementados usando floats u otras características de diseño. Imagina tu diseño como un conjunto de números de columnas (p.ej. 4, 5 o 12), y luego acomoda tus columnas de contenido dentro de esas columnas imaginarias. En este artículo vamos a explorar cómo funcionan estos métodos para que entiendas como eran usados si trabajas en un proyecto más antiguo.
- [Soporte a navegadores antiguos](/es/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
  - : En este modulo recomendamos usar Flexbox y Grid como principal método de diseño. Siempre habrán personas que visiten tu página web desde navegadores antiguos, o navegadores que no soportan los métodos que usaste. Este siempre ha sido el caso en la web: a medida que se desarrollan nuevas características, los distintos navegadores priorizan diferentes cosas. Este artículo explica como usar técnicas modernas para la web sin dejar por fuera a los usuarios de tecnologías antiguas.

## Ejercicios

Los siguientes ejercicios comprobarán tu habilidad para maquetar páginas web con CSS.

- Creando una maquetación de varias columnas flexibles
  - : Este ejercicio comprobará tu habilidad par crear una maquetación multi-columna, con alguna que otra característica interesante.
- Creando un _widget_ fijo de control
  - : Este ejercicio pone a prueba tu entendimiento sobre el posicionamiento, proponiéndote crear un _widget_ de control con posición fija, que permitirá al usuario acceder a los controles de una aplicación Web, independientemente de dónde se hubiera desplazado en la página.

## Ver también

- <https://developer.mozilla.org/en-US/Learn/CSS/Basics/Layout>
