---
title: Tutorial Canvas
slug: Web/API/Canvas_API/Tutorial
---

{{DefaultAPISidebar("Canvas API")}}

[**`<canvas>`**](/es/docs/Web/API/Canvas_API) es un elemento [HTML](/es/docs/Web/HTML) el cual puede ser usado para dibujar gráficos usando scripts (normalmente [JavaScript](/es/docs/Web/JavaScript)). Este puede, por ejemplo, ser usado para dibujar gráficos, realizar composición de fotos o simples (y [no tan simples](/es/docs/HTML/Canvas/A_Basic_RayCaster)) animaciones.

`<canvas>` fue introducido primero por Apple para el Mac OS X Dashboard y después implementado en Safari y Google Chrome. Navegadores basados en [Gecko](/es/docs/Gecko) 1.8, tal como Firefox 1.5, que también soportan este elemento. El `<canvas>` es un elemento parte de las especificaciones de la [WhatWG Web applications 1.0](https://www.whatwg.org/specs/web-apps/current-work/) mejor conocida como HTML5.

En este tutorial se describe cómo usar el elemento `<canvas>` para dibujar gráficos en 2D, empezando con lo básico. Los ejemplos le proveerán mayor claridad a las ideas que pueda tener referentes al canvas, así como los códigos que necesita para crear su propio contenido.

## Antes de Empezar

Usar el elemento `<canvas>` no es algo muy díficil pero necesita saber y entender los aspectos básicos del [HTML](/es/docs/Web/HTML) y [JavaScript](/es/docs/Web/JavaScript). El elemento `<canvas>` no está soportado en navegadores viejos, pero están soportado en la mayoría de las versiones más recientes de los navegadores. El tamaño por defecto del canvas es 300px \* 150px \[ancho (width) \* alto (height)]. Pero se puede personalizar el tamaño usando las propiedades height y width de CSS. Con el fin de dibujar gráficos en el lienzo \<canvas> se utiliza un objeto de contexto de JavaScript que crea gráficos sobre la marcha.

## En este Tutorial

- [Usos Básicos](/es/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
- [Dibujando Formas](/es/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
- [Usando Imágenes](/es/docs/Web/API/Canvas_API/Tutorial/Using_images)
- [Aplicando estilos y colores](/es/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
- [Transformaciones](/es/docs/Web/API/Canvas_API/Tutorial/Transformations)
- [Composiciones](/es/docs/Web/API/Canvas_API/Tutorial/Compositing)
- [Animaciones Básicas](/es/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [Optimización de Canvas](/es/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)

## Vea también

- [Canvas topic page](/es/docs/Web/API/Canvas_API)
- [Drawing Graphics with Canvas](/es/docs/Web/API/Canvas_API/Tutorial)
- [Canvas examples](/es/docs/tag/Canvas_examples)
- [HTML5 Tutorial](http://www.html5andcss3.org)
- [Drawing Text Using a Canvas](/es/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [Adding Text to Canvas](https://developer.apple.com/library/safari/#documentation/AudioVideo/Conceptual/HTML-canvas-guide/AddingText/AddingText.html#//apple_ref/doc/uid/TP40010542-CH6-SW4)
- [Canvas Demos - Games, applications, tools and tutorials](http://www.canvasdemos.com/)
- [Canvas Drawing and Animation Application](http://canvimation.github.com/)
- [Interactive canvas tutorial](http://billmill.org/static/canvastutorial/)
- [Canvas Cheat Sheet with all attributes and methods](http://blog.nihilogic.dk/2009/02/html5-canvas-cheat-sheet.html)
- [Adobe Illustrator to Canvas plug-in](http://visitmix.com/labs/ai2canvas/)
- [HTML5CanvasTutorials](https://www.html5canvastutorials.com/)
- [How to draw N grade Bézier curves with the Canvas API](http://html5tutorial.com/how-to-draw-n-grade-bezier-curve-with-canvas-api)
- [31 days of canvas tutorials](http://creativejs.com/2011/08/31-days-of-canvas-tutorials/)
- [W3C Standard](https://www.w3.org/TR/2dcontext/)
- [HTML5 Canvas tutorials and reference](http://www.tutorialspark.com/html5/HTML5_canvas_Intro.php)
- [JavaScript Canvas Image Conversion](https://davidwalsh.name/convert-canvas-image)

## Nota a los contribuyentes

Debido a un desafortunado error técnico que ocurrió el 17 de junio del 2013, perdimos la historia de este tutorial, incluyendo atribuciones a todos los contribuyentes del pasado a su contenido. Pedimos disculpas por esto, y esperamos que perdone este desafortunado percance.

{{ Next("Web/Guide/HTML/Canvas_tutorial/Basic_usage") }}
