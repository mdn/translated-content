---
title: Fundamentos de estilo con CSS
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: cdf7db9ffe08cb952243d7e20b9beee4e9c9451b
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets, hojas de estilo en cascada) se usa para dar estilo y maquetar las páginas web; por ejemplo, para cambiar la fuente, el color, el tamaño y el espaciado del contenido, dividirlo en varias columnas o añadir animaciones y otros elementos decorativos. Este módulo ofrece todos los fundamentos de CSS que necesitarás por ahora, incluidas la sintaxis, las características y las técnicas.

## Requisitos previos

Antes de empezar este módulo, deberías tener configurado un entorno de trabajo básico (como se explica en [Instalar software básico](/es/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software)) y saber cómo crear y gestionar archivos (como se explica en [Manejo de archivos](/es/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)). También deberías conocer HTML (si no es así, completa nuestro módulo [Estructurar el contenido con HTML](/es/docs/Learn_web_development/Core/Structuring_content)).

> [!NOTE]
> Si estás trabajando en una computadora, tablet u otro dispositivo en el que no puedas crear archivos, puedes probar el código en un editor en línea como [CodePen](https://codepen.io/) o [JSFiddle](https://jsfiddle.net/).

## Tutoriales y desafíos

- [¿Qué es CSS?](/es/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS te permite crear páginas web con un aspecto estupendo, pero ¿cómo funciona por dentro? Este artículo explica qué es CSS, cómo es su sintaxis básica y cómo aplica tu navegador el CSS al HTML para darle estilo.
- [Primeros pasos con CSS](/es/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : En este artículo tomaremos un documento HTML sencillo y le aplicaremos CSS, aprendiendo por el camino algunos detalles prácticos del lenguaje. También repasaremos las características de la sintaxis de CSS que todavía no has visto.
- [Dar estilo a una página de biografía](/es/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Desafío</sup>
  - : En este desafío darás estilo a una página de biografía sencilla, poniendo a prueba algunas de las habilidades que aprendiste en las últimas lecciones, como escribir selectores, colorear fondos y dar estilo al texto. También te invitaremos a buscar algunas características básicas de CSS que no hemos tratado, para poner a prueba tus habilidades de investigación.
- [Selectores CSS básicos](/es/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : En este artículo repasaremos algunos fundamentos de los selectores, incluidos los selectores básicos de tipo, de clase y de ID.
- [Selectores de atributo](/es/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Como sabes por tu estudio de HTML, los elementos pueden tener atributos que dan más detalles sobre el elemento marcado. En CSS puedes usar selectores de atributo para seleccionar elementos con determinados atributos. Esta lección te mostrará cómo usar estos selectores tan útiles.
- [Pseudoclases y pseudoelementos](/es/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : El siguiente grupo de selectores que veremos se conoce como **pseudoclases** y **pseudoelementos**. Hay muchísimos, y a menudo tienen propósitos bastante concretos. Una vez que sepas usarlos, podrás revisar los distintos tipos para ver si hay alguno que sirva para la tarea que intentas resolver.
- [Combinadores](/es/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Los últimos selectores que veremos se llaman combinadores. Los combinadores se usan para combinar otros selectores de forma que podamos seleccionar elementos según su posición en el DOM respecto a otros elementos (por ejemplo, hijo o hermano).
- [El modelo de caja](/es/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Todo en CSS tiene una caja alrededor, y entender estas cajas es clave para poder crear diseños más complejos con CSS o para alinear elementos con otros elementos. En esta lección veremos el _modelo de caja_ de CSS. Entenderás cómo funciona y la terminología relacionada.
- [Gestionar los conflictos](/es/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : El objetivo de esta lección es que desarrolles tu comprensión de algunos de los conceptos más fundamentales de CSS (la cascada, la especificidad y la herencia), que controlan cómo se aplica el CSS al HTML y cómo se resuelven los conflictos entre declaraciones de estilo.
- [Corregir los estilos de una página de blog](/es/docs/Learn_web_development/Core/Styling_basics/Fixing_blog_styles) <sup>Desafío</sup>
  - : En este desafío te damos un ejemplo básico de página de blog con estilos parciales. Necesitamos que corrijas algunos problemas del CSS existente y añadas algunos estilos para terminarla. Por el camino, pondremos a prueba tus conocimientos sobre selectores, el modelo de caja y los conflictos y la cascada.
- [Valores y unidades](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : Las reglas CSS contienen [declaraciones](/es/docs/Web/CSS/Guides/Syntax/Introduction#declaraciones_de_css), que a su vez se componen de propiedades y valores. Cada propiedad que se usa en CSS tiene un **tipo de valor** que describe qué tipo de valores puede tener. En esta lección veremos algunos de los tipos de valor más usados, qué son y cómo funcionan.
- [Dimensionar elementos en CSS](/es/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Es importante entender qué tamaño tendrán los distintos elementos de tu diseño. En esta lección resumiremos las distintas formas en que los elementos obtienen un tamaño mediante CSS y definiremos algunos términos sobre el dimensionamiento que te serán útiles en el futuro.
- [Fondos y bordes](/es/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : En esta lección veremos algunas de las cosas creativas que puedes hacer con los fondos y los bordes de CSS. Desde añadir degradados e imágenes de fondo hasta esquinas redondeadas, los fondos y los bordes son la respuesta a muchas preguntas de estilo en CSS.
- [Desafío: dimensionar y decorar un panel de contenido](/es/docs/Learn_web_development/Core/Styling_basics/Size_decorate_content_panel) <sup>Desafío</sup>
  - : En este desafío te damos la estructura de una página con pocos estilos que muestra un panel de contenido, con un encabezado arriba y una barra de botones abajo. Queremos que sigas las instrucciones para dimensionarlo y decorarlo, y obtener como resultado un diseño interesante. Por el camino, pondremos a prueba tus conocimientos sobre los valores y las unidades de CSS, el dimensionamiento, y los fondos y los bordes.
- [Contenido desbordado](/es/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : El desbordamiento es lo que ocurre cuando hay demasiado contenido para caber dentro de la caja de un elemento. En esta lección aprenderás a gestionar el desbordamiento con CSS.
- [Imágenes, multimedia y elementos de formulario](/es/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : En esta lección veremos cómo se tratan en CSS ciertos elementos especiales. Las imágenes, otros elementos multimedia y los elementos de formulario se comportan de forma un poco distinta a las cajas normales en cuanto a la posibilidad de darles estilo con CSS. Entender qué es posible y qué no puede ahorrarte frustraciones, y esta lección destacará algunas de las cosas principales que necesitas saber.
- [Dar estilo a las tablas](/es/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Dar estilo a una tabla HTML no es el trabajo más glamuroso del mundo, pero a veces a todos nos toca hacerlo. Este artículo explica cómo hacer que las tablas HTML se vean bien, destacando algunas técnicas específicas para dar estilo a las tablas.
- [Depurar CSS](/es/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Este artículo te orienta sobre cómo depurar un problema de CSS y te muestra cómo las herramientas para desarrolladores incluidas en todos los navegadores modernos pueden ayudarte a averiguar qué está pasando.

## Pon a prueba tus habilidades

Entre los artículos del tutorial encontrarás artículos de tipo «Pon a prueba tus habilidades» para comprobar si has retenido la información más importante antes de seguir adelante. Si quieres verlos todos juntos, los tienes listados en [Pon a prueba tus habilidades: fundamentos de estilo con CSS](/es/docs/Learn_web_development/Core/Styling_basics/Test_your_skills).

## Tutoriales adicionales

Estos tutoriales no forman parte del itinerario de aprendizaje, pero resultan interesantes de todos modos; considéralos objetivos opcionales, para estudiarlos cuando hayas terminado los artículos principales de Core.

- [Efectos de estilo avanzados](/es/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Este artículo funciona como una caja de trucos y ofrece una introducción a algunas características de estilo avanzadas e interesantes, como las sombras de caja, los modos de fusión y los filtros.
- [Capas en cascada](/es/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Esta lección pretende presentarte las [capas en cascada](/es/docs/Web/CSS/Reference/At-rules/@layer), una característica más avanzada que se basa en los conceptos fundamentales de la [cascada de CSS](/es/docs/Web/CSS/Guides/Cascade/Introduction) y la [especificidad de CSS](/es/docs/Web/CSS/Guides/Cascade/Specificity).
- [Gestionar distintas direcciones del texto](/es/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : En los últimos años, CSS ha evolucionado para admitir mejor las distintas direcciones del contenido, incluido el contenido de derecha a izquierda, pero también de arriba abajo (como el japonés); estas distintas direcciones se llaman modos de escritura. A medida que avances en tu estudio y empieces a trabajar con el diseño, entender los modos de escritura te será muy útil, así que los presentaremos en este artículo.
- [Organizar el CSS](/es/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Cuando empieces a trabajar con hojas de estilo más grandes y proyectos de mayor tamaño, descubrirás que mantener un archivo CSS enorme puede ser complicado. En este artículo veremos brevemente algunas buenas prácticas para escribir CSS de forma que sea fácil de mantener, y algunas de las soluciones que usan otras personas para mejorar la mantenibilidad.

## Véase también

- [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup>
  - : El curso _Learn HTML and CSS_ de [Scrimba](https://scrimba.com/?via=mdn) te enseña HTML y CSS construyendo y desplegando cinco proyectos geniales, con lecciones y desafíos interactivos divertidos impartidos por profesores expertos.
- [Write your first lines of CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup>
  - : Esta lección interactiva ofrece una introducción útil a la sintaxis de CSS.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
