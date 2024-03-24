---
title: Tutoral de WebGL
slug: Web/API/WebGL_API/Tutorial
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{DefaultAPISidebar("WebGL")}}

Este tutorial describe cómo usar el elemento {{HTMLElement("canvas")}} para dibujar gráficos WebGL, comenzando con lo básico. Los ejemplos proporcionados deberían darle algunas ideas claras de lo que puede hacer con WebGL y le proporcionarán fragmentos de código que pueden ayudarlo a comenzar a crear su propio contenido.

[WebGL](https://www.khronos.org/webgl/) permite que el contenido web use una API basada en [OpenGL ES](https://www.khronos.org/opengles/) 2.0 para realizar la representación 3D en un HTML `<canvas>` en navegadores que lo admitan sin el uso de complementos. Los programas WebGL consisten en un código de control escrito en JavaScript y un código de efectos especiales (código sombra) que se ejecuta en la Unidad de procesamiento de gráficos (GPU) de una computadora. Los elementos WebGL se pueden mezclar con otros elementos HTML y combinar con otras partes de la página o el fondo de la página.

## Antes de comenzar

Usar el elemento `<canvas>` no es muy difícil, pero se necesita una comprensión básica de [HTML](/es/docs/Web/HTML) y [JavaScript](/es/docs/Web/JavaScript). El elemento `<canvas>` y WebGL no son compatibles con algunos navegadores antiguos, pero sí lo son con las versiones recientes de todos los principales navegadores. Para dibujar gráficos en el lienzo, usamos un objeto de contexto de JavaScript, que crea gráficos sobre la marcha.

## En este tutorial

- [Primeros pasos con WebGL](/es/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
  - : Cómo configurar un contexto WebGL.
- [Agregar contenido 2D a un contexto WebGL](/es/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
  - : Cómo renderizar formas planas simples usando WebGL.
- [Uso de _shaders_ para aplicar color en WebGL](/es/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL)
  - : Demuestra cómo agregar color a las formas usando _shaders_.
- [Animar objetos con WebGL](/es/docs/Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL)
  - : Muestra cómo rotar y trasladar objetos para crear animaciones simples.
- [Creación de objetos 3D usando WebGL](/es/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL)
  - : Muestra cómo crear y animar un objeto 3D (en este caso, un cubo).
- [Usar texturas en WebGL](/es/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
  - : Demuestra cómo asignar texturas a las caras de un objeto.
- [Iluminación en WebGL](/es/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
  - : Cómo simular efectos de iluminación en su contexto WebGL.
- [Animación de texturas en WebGL](/es/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
  - : Muestra cómo animar texturas; en este caso, mapeando un video Ogg en las caras de un cubo giratorio.
