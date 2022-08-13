---
title: WebGL Tutorial
slug: Web/API/WebGL_API/Tutorial
tags:
  - Tutorial
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial
---
{{WebGLSidebar}}

[WebGL](http://www.khronos.org/webgl/) enables web content to use an API based on [OpenGL ES](http://www.khronos.org/opengles/) 2.0 to perform 3D rendering in an HTML {{HTMLElement("canvas")}} in browsers that support it without the use of plug-ins. WebGL programs consist of control code written in JavaScript and special effects code(shader code) that is executed on a computer's Graphics Processing Unit (GPU). WebGL elements can be mixed with other HTML elements and composited with other parts of the page or page background.

This tutorial describes how to use the `<canvas>` element to draw WebGL graphics, starting with the basics. The examples provided should give you some clear ideas what you can do with WebGL and will provide code snippets that may get you started in building your own content.

## Before you start

Using the `<canvas>` element is not very difficult, but you do need a basic understanding of [HTML](/de/docs/Web/HTML "HTML") and [JavaScript](/de/docs/Web/JavaScript "JavaScript"). The `<canvas>` element and WebGL are not supported in some older browsers, but are supported in recent versions of all major browsers. In order to draw graphics on the canvas we use a JavaScript context object, which creates graphics on the fly.

## In diesem Tutorial

- [Einführung in WebGL](/de/Web/API/WebGL_API/Tutorial/Einführung_in_WebGL)
  - : Wie man einen WebGL-Kontext herstellt.
- [Hinzufügen von 2D Inhalten in einen WebGL-Kontext](/de/Web/API/WebGL_API/Tutorial/Hinzufügen_von_2D_Inhalten_in_einen_WebGL-Kontext)
  - : Wie eine einfache, flache Form mittels WebGL erstellt wird.
- [Farben mittels Shader in einen WebGL-Kontext hinzufügen](/de/Web/API/WebGL_API/Tutorial/Farben_mittels_Shader_in_einen_WebGL-Kontext_hinzufügen)
  - : Zeigt wie Farben mit Shadern auf die Form gebracht werden können.
- [Objekte mit WebGL animieren](/de/Web/API/WebGL_API/Tutorial/Objekte_mit_WebGL_animieren)
  - : Erklärt wie Objekte rotiert und verschiebt werden, um eine einfache Animation zu erstellen.
- [3D-Objekte mit WebGL erstellen](/de/Web/API/WebGL_API/Tutorial/3D-Objekte_mit_WebGL_erstellen)
  - : Erläutert wie dreidimensionale Objekte erstellt und animiert werden (ein Würfel dient als Beispiel).
- [Texturen in WebGL verwenden](/de/Web/API/WebGL_API/Tutorial/Texturen_in_WebGL_verwenden)
  - : Demonstriert wie Texturen auf die Oberfläche eines Objektes gezeichnet werden können.
- [Beleuchtung in WebGL](/de/Web/API/WebGL_API/Tutorial/Beleuchtung_in_WebGL)
  - : Wie Beleuchtungseffekte in unserem WebGL-Kontext simuliert werden.
- [Animierte Texturen in WebGL](/de/Web/API/WebGL_API/Tutorial/Animierte_Texturen_in_WebGL)
  - : Animierte Texturen werden mittels einem Ogg-Video auf der Oberfläche eines rotierenden Würfels realisiert.
