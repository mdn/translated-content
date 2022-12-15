---
title: WebGL
slug: Web/API/WebGL_API
---

{{DefaultAPISidebar("WebGL")}}

WebGL (Web Graphics Library) 是一個透過瀏覽器渲染 3D 及 2D 圖像的 JavaScript API ，且不需要安裝任何插件。 WebGL 透過與 OpenGL ES 2.0 緊密連結的 API，將 3D 圖像帶入 HTML5 中，並可透過 canvas 元素呈現於瀏覽器中

Support for WebGL is present in [Firefox](/zh-TW/Firefox) 4+, [Google Chrome](http://www.google.com/chrome/) 9+, [Opera](http://www.opera.com/) 12+, [Safari](http://www.apple.com/safari/) 5.1+ 以及 [Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/browser-ie) 11+; 然而，使用者的 GPU 也必須支援。

## Development topics

- [從 WebGL 開始吧](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
  - : 如何設立一個 WebGL 環境。
- [增加 2D 的東西到 WebGL 環境](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
  - : 如何使用 WebGL 來呈現一個簡單的平面形狀。
- [Using shaders to apply color in WebGL](/zh-TW/docs/WebGL/Using_shaders_to_apply_color_in_WebGL)
  - : Demonstrates how to add color to shapes using shaders.
- [Animating objects with WebGL](/zh-TW/docs/WebGL/Animating_objects_with_WebGL)
  - : Shows how to rotate and translate objects to create simple animations.
- [Creating 3D objects using WebGL](/zh-TW/docs/WebGL/Creating_3D_objects_using_WebGL)
  - : Shows how to create and animate a 3D object (in this case, a cube).
- [Using textures in WebGL](/zh-TW/docs/WebGL/Using_textures_in_WebGL)
  - : Demonstrates how to map textures onto the faces of an object.
- [Lighting in WebGL](/zh-TW/docs/WebGL/Lighting_in_WebGL)
  - : How to simulate lighting effects in your WebGL context.
- [Animating textures in WebGL](/zh-TW/docs/WebGL/Animating_textures_in_WebGL)
  - : Shows how to animate textures; in this case, by mapping an Ogg video onto the faces of a rotating cube.
- [WebGL best practices](/zh-TW/docs/WebGL/WebGL_best_practices)
  - : Tips and suggestions to improve your WebGL content.
- [Cross-domain textures](/zh-TW/docs/WebGL/Cross-Domain_Textures)
  - : Information about loading textures from domains other than the one from which your content was loaded.
- [Using extensions](/zh-TW/docs/WebGL/Using_Extensions)
  - : How to use extensions that are available in WebGL.

## 資源

- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/1.0/)
  - : The WebGL specification.
- [Khronos WebGL site](http://www.khronos.org/webgl/)
  - : The main web site for WebGL at the Khronos Group.
- [Learning WebGL](http://learningwebgl.com/blog/?page_id=1217)
  - : A site with tutorials on how to use WebGL.
- [WebGL Fundamentals](http://www.html5rocks.com/en/tutorials/webgl/webgl_fundamentals/)
  - : A basic tutorial with fundamentals of WebGL.
- [WebGL Matrices](http://games.greggman.com/game/webgl-2d-matrices/)
  - : An introduction to matrices' use in 2D WebGL. This series also goes on to explain the math behind perspective 3D.
- [The WebGL Cookbook](http://learningwebgl.com/cookbook/index.php/)
  - : A web site with handy recipes for writing WebGL code.
- [Planet WebGL](http://planet-webgl.org/)
  - : A feed aggregator for people involved in the WebGL community.
- [ewgl-matrices](http://code.google.com/p/ewgl-matrices/)
  - : A blazing fast matrix library for WebGL
- [glMatrix](https://github.com/toji/gl-matrix)
  - : JavaScript Matrix and Vector library for High Performance WebGL apps
- [mjs](http://code.google.com/p/webgl-mjs/)
  - : A JavaScript vector and matrix math library, optimized for WebGL usage.
- [Sylvester](http://sylvester.jcoglan.com/)
  - : An open source library for manipulating vectors and matrices. Not optimized for WebGL but extremely robust.
- [WebGL playground](http://webglplayground.net)
  - : An online tool for creating and sharing WebGL projects. Good for quick prototyping and experimenting.
- [WebGL Academy](http://www.webglacademy.com)
  - : An HTML/Javascript editor with tutorials to learn basics of webgl programming.

## 瀏覽器相容性

{{Compat}}

### 相容性小記

In addition to the browser, the GPU itself also needs to support the feature. So, for example, S3 Texture Compression (S3TC) is only available on Tegra-based tablets. Most browsers make the WebGL context available through the `webgl` context name, but older ones need `experimental-webgl` as well. In addition, the upcoming WebGL 2 is fully backwards-compatible and will have the context name `experimental-webgl2` in the future for testing.

### Gecko 小記

#### WebGL debugging and testing

Starting with Gecko 10.0, there are two preferences available which let you control the capabilities of WebGL for testing purposes:

- `webgl.min_capability_mode`
  - : A Boolean property that, when `true`, enables a minimum capability mode. When in this mode, WebGL is configured to only support the bare minimum feature set and capabilities required by the WebGL specification. This lets you ensure that your WebGL code will work on any device or browser, regardless of their capabilities. This is `false` by default.
- `webgl.disable_extensions`
  - : A Boolean property that, when `true`, disables all WebGL extensions. This is `false` by default.

## 你也可以看看

Raw WebGL: a talk by Nick Desaulniers:

{{EmbedYouTube("H4c8t6myAWU")}}
