---
title: WebGL tutorial
slug: Web/API/WebGL_API/Tutorial
---

{{DefaultAPISidebar("WebGL")}}

[WebGL](https://www.khronos.org/webgl/) 은 WebGL을 지원하는 브라우져에서 plugin을 사용하지 않고도, 웹 콘텐츠가 [OpenGL ES](https://www.khronos.org/opengles/) 2.0 기반의 API를 이용하여 HTML {{HTMLElement("canvas")}}에서 3D 랜더링을 할 수 있도록 해 줍니다. WebGL 프로그램은 JavaScripts로 작성 된 제어 코드와 컴퓨터의 Graphics Processing Unit (GPU)에서 실행되는 특수한 효과를 내는 코드(Shader code)로 구성 됩니다. WebGL 요소들은 다른 HTML요소들과 섞어서 함께 사용 할 수 있으며 페이지의 다른 부분이나 페이지 배경과 함께 사용 할 수 있습니다.

이 튜토리얼은 WebGL 그래픽을 그리기 위해 \<canvas>요소를 어떻게 사용하는지에 관해 기본부터 기술합니다. 제공된 예제들은 여러분이 WebGL로 무엇을 할 수 있는지를 명확히하고, 여러분 소유의 콘텐츠를 제작할 수 있도록 작은 코드들을 제공 할 것입니다.

## 시작하기 전에

`<canvas>` 요소를 사용하는 것은 크게 어렵진 않지만, 여러분은 [HTML](/ko/docs/Web/HTML) 과 [JavaScript](/ko/docs/Web/JavaScript)에 대하여 기본적인 이해가 꼭 필요합니다. `<canvas>` 요소와 WebGL은 일부 오래된 브라우저에서 지원되지 않으나, 최근 버전의 모든 주요 브라우저에서 지원됩니다. 우리는 canvas에 그림을 그리기 위해 그림을 신속하게 생성하는 JavaScript 콘텍스트 객체를 사용합니다.

## In this tutorial

- [Getting started with WebGL](/ko/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
  - : How to set up a WebGL context.
- [Adding 2D content to a WebGL context](/ko/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
  - : How to render simple flat shapes using WebGL.
- [Using shaders to apply color in WebGL](/ko/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL)
  - : Demonstrates how to add color to shapes using shaders.
- [Animating objects with WebGL](/ko/docs/Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL)
  - : Shows how to rotate and translate objects to create simple animations.
- [Creating 3D objects using WebGL](/ko/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL)
  - : Shows how to create and animate a 3D object (in this case, a cube).
- [Using textures in WebGL](/ko/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
  - : Demonstrates how to map textures onto the faces of an object.
- [Lighting in WebGL](/ko/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
  - : How to simulate lighting effects in your WebGL context.
- [Animating textures in WebGL](/ko/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
  - : Shows how to animate textures; in this case, by mapping an Ogg video onto the faces of a rotating cube.
