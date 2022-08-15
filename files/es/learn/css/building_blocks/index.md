---
title: Bloques de construcción CSS
slug: Learn/CSS/Building_blocks
tags:
  - Aprender
  - CSS
  - Principiante
  - bloques de construcción
translation_of: Learn/CSS/Building_blocks
---
<div>{{LearnSidebar}}</div>

<p class="summary">Este módulo retoma donde <a href="/es/docs/Learn/CSS/First_steps">Primeros pasos en CSS</a> finalizó — ahora que estás familiarizado con el lenguaje y su sintaxis, y que tienes algo de experiencia en su uso, es hora de bucear un poco más profundo. Este módulo se centra en el estilo en cascada de css y en el concepto de herencia, también veremos todos los tipos de selectores, unidades, tamaños, estilos de fondo, bordes, debugging y mucho más.</p>

<p class="summary">El objetivo aqui es proveerte de herramientas para que puedas escribir código CSS competentemente y ayudarte a entender lo escencial de la teoría antes de centrarnos en disciplinas más específicas como <a href="/en-US/docs/Learn/CSS/Styling_text">text styling</a> y <a href="/en-US/docs/Learn/CSS/CSS_layout">CSS layout</a>.</p>

<h2 id="Prerrequisitos">Prerrequisitos</h2>

<p>Antes de comenzar este módulo deberías poseer:</p>

<ol>
 <li>Un entendimiento básico de la utilización de una computadora y de la<br>
  navegación web a nivel de usuario.</li>
 <li>Un entorno básico constituido en base a lo dispuesto en la guía <a href="/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico">Instalación de software básico</a>, tanto como conocimiento acerca de la creación y la administración de archivos, como es detallado en <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Dealing with files</a>.</li>
 <li>Una familiaridad básica con html, como es establecido en el módulo <a href="/es/docs/Learn/HTML/Introduccion_a_HTML">Introdución a HTML</a>.</li>
 <li>Un entendimiento elemental de CSS, como es discutido en el módulo <a href="/en-US/docs/Learn/CSS/First_steps">CSS first steps</a>.</li>
</ol>

<div class="note">
<p><strong>Nota</strong>: Si estás trabajando en una computadora, tablet, u otro dispositivo en el que no eres capaz de crear tus propios archivos puedes intentar la mayor parte de los ejemplos en código en un programa para trabajar código en linea como <a href="http://jsbin.com/">JSBin</a> o <a href="https://glitch.com/">Glitch</a>.</p>
</div>

<h2 id="Guías">Guías</h2>

<p>En este módulo encontrarás artículos que cubren los fundamentos más esenciales del lenguaje CSS. A lo largo del módulo encontrarás múltiples ejercicios que te permitirán poner a prueba tu entendimiento.</p>

<dl>
 <dt><a href="/es/docs/Learn/CSS/Building_blocks/Cascada_y_herencia">Cascada y herencia</a></dt>
 <dd>El objetivo de ésta lección es desarrollar tu entendimiento sobre algunos de los conceptos fundamentales de CSS - cascada, especificidad y herencia - los cuales controlan como CSS es aplicado a HTML y como sus conflitos son resueltos.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors">Selectores CSS</a></dt>
 <dd>Hay una gran variedad de selectores disponibles en CSS, permitiendo una fina precision para seleccionar elementos de estilo. En este artículo y sub-artículos, repasaremos los diferentes tipos en detalle y veremos como funcionan. Los sub-artículos son los que siguinetes :
 <ul>
  <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors">Selectores de tipo, clase e ID</a></li>
  <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors">Selectores de Atributos</a></li>
  <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements">Pseudo-clases y pseudo-elementos</a></li>
  <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators">Combinadores</a></li>
 </ul>
 </dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/The_box_model">El modelo de caja</a></dt>
 <dd>Todo en CSS tiene una caja a su alrededor, y comprender estas cajas es clave para poder crear diseños con CSS, o para alinear elementos con otros elementos. En esta lección, analizaremos adecuadamente el modelo CSS Box, para que pueda pasar a tareas de diseño más complejas con una comprensión de cómo funciona y la terminología que se relaciona con él.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders">Fondos y bordes</a></dt>
 <dd>En esta lección, veremos algunas de las cosas creativas que puede hacer con fondos y bordes CSS. Al agregar degradados, imágenes de fondo y esquinas redondeadas, los fondos y los bordes son la respuesta a muchas preguntas de estilo en CSS.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions">Manejo de diferentes direcciones de texto</a></dt>
 <dd>En los últimos años, CSS ha evolucionado para admitir mejor la diferente direccionalidad del contenido, incluyendo Right-to-left (Derecha a Izquierda) pero también de Top-to-bottom (Arriba a abajo ,como el japonés); estas diferentes direccionalidades se llaman <strong>modos de escritura</strong>. A medida que avance en su estudio y comience a trabajar con el diseño, comprenderá los modos de escritura será muy útil para usted, por lo tanto, los presentaremos en este artículo.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content">Contenido desbordante</a></dt>
 <dd>En esta lección veremos otro concepto importante en CSS: desbordamiento. El Overflow (o desbordamiento) es lo que sucede cuando hay demasiado contenido para contenerlo cómodamente dentro de una caja. En esta guía aprenderá qué es y cómo administrarlo.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Values_and_units">Valores y unidades de CSS</a></dt>
 <dd>
 <p>Cada propiedad utilizada en CSS tiene un valor o conjunto de valores permitidos para esa propiedad. En esta lección veremos algunos de los valores y unidades más comunes en uso.</p>
 </dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS">Dimensionar elementos en CSS</a></dt>
 <dd>En las diversas lecciones hasta ahora, ha encontrado varias formas de dimensionar elementos en una página web utilizando CSS. Es importante comprender cuán grandes serán las diferentes características en su diseño, y en esta lección resumiremos las diversas formas en que los elementos obtienen un tamaño a través de CSS y definiremos algunos términos sobre el tamaño que lo ayudarán en el futuro.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Images_media_form_elements">Imágenes, medios y elementos de forma</a></dt>
 <dd>
 <p>En esta lección veremos cómo se tratan ciertos elementos especiales en CSS. Las imágenes, otros medios y elementos de formulario se comportan de manera un poco diferente en términos de su capacidad para diseñarlos con CSS que los cuadros normales. Comprender qué es y qué no es posible puede ahorrar un poco de frustración, y esta lección resaltará algunas de las cosas principales que necesita saber.</p>
 </dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Styling_tables">Dando estilo a una tabla</a></dt>
 <dd>Diseñar una tabla HTML no es el trabajo más glamoroso del mundo, pero a veces todos tenemos que hacerlo. Este artículo proporciona una guía para hacer que las tablas HTML se vean bien, con algunas técnicas específicas de diseño de tablas resaltadas.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS">Depuración de CSS</a></dt>
 <dd>A veces, al escribir CSS, encontrará un problema en el que su CSS no parece estar haciendo lo que espera. Este artículo le dará orientación sobre cómo solucionar un problema de CSS y le mostrará cómo las DevTools incluidas en todos los navegadores modernos pueden ayudarlo a descubrir qué está sucediendo.</dd>
 <dt></dt>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Organizing">Organizando tu CSS</a></dt>
 <dd>A medida que comience a trabajar en hojas de estilo más grandes y grandes proyectos, descubrirá que mantener un gran archivo CSS puede ser un desafío. En este artículo, analizaremos brevemente algunas de las mejores prácticas para escribir su CSS para que sea fácil de mantener, y algunas de las soluciones que encontrará en uso para ayudar a mejorar la capacidad de mantenimiento.</dd>
</dl>

<h2 id="Evaluaciones">Evaluaciones</h2>

<p>¿Quieres probar tus habilidades de CSS? Las siguientes evaluaciones pondrán a prueba su comprensión del CSS cubierto en las guías anteriores.</p>

<dl>
 <dt><a href="/en-US/docs/Learn/CSS/Introduction_to_CSS/Fundamental_CSS_comprehension">Comprensión de CSS básica</a></dt>
 <dd>Esta evaluación evalúa su comprensión de la sintaxis básica, selectores, especificidad, modelo de caja y más.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper">Crear papel con membrete elegante</a></dt>
 <dd>Si desea causar la impresión correcta, escribir una carta en papel con membrete puede ser un buen comienzo. En esta evaluación, lo retaremos a crear una plantilla en línea para lograr ese aspecto.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Styling_boxes/A_cool_looking_box">Una caja de aspecto genial</a></dt>
 <dd>Aquí aprenderás a usar el estilo de fondo y borde para crear un cuadro llamativo.</dd>
</dl>

<h2 id="Ver_también">Ver también</h2>

<dl>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Advanced_styling_effects">Efectos de estilo avanzados</a></dt>
 <dd>Este artículo actúa como una caja de trucos, brindando una introducción a algunas características de estilo avanzadas e interesantes como sombras de caja, modos de fusión y filtros.</dd>
</dl>
