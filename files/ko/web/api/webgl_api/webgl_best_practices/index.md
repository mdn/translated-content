---
title: WebGL best practices
slug: Web/API/WebGL_API/WebGL_best_practices
---

{{DefaultAPISidebar("WebGL")}}

이 기사는 당신의 WebGL 콘텐트 질을 향상시키기 위한 제안과 팁을 제시합니다. 다음의 제안들을 따르면, 당신의 웹 애플리케이션이 더 많은 장치들과 브라우저들과의 호환성을 높일 수 있을 뿐만 아니라, 성능도 향상시킬 수 있게 도와줍니다.

## 피해야 할 것들

- 당신의 웹 애플리케이션이 getError()가 리턴한 어떠한 WebGL 에러도 생성하지 않도록 항상 확실시 하세요.
- 당신은 WebGL 셰이더에서 절대로 #ifdef GL_ES를 사용해선 안 됩니다; 비록 초기의 몇몇 예제들은 이를 사용했더라도, 이제는 꼭 필요하지 않습니다. 왜냐하면 이 조건은 WebGL 셰이더에서 항상 참이기 때문입니다.
- 프래그먼트 셰이더에서 highdp 정밀도를 사용하는 것은 당신의 콘텐트가 몇몇의 구식 모바일 하드웨어에서 작동하는 것을 방해할 것입니다. 대신에 mediump를 사용할 수 있습니다. 하지만 이것은 종종 정밀도의 부족 때문에 대부분의 모바일 장치에서 오염된 렌더링을 초래합니다. 그리고 그 오염은 전형적인 데스크톱 컴퓨터에서는 보이지 않을 것입니다. 일반적으로, 셰이더가 다양한 플랫폼에서 철저하게 테스트되지 않았다면 정점, 프래그먼트 셰이더에서는 오직 highdp만 사용하는 것이 더 안전합니다. WebGL getShaderPrecisionFormat() 함수가 구현된 Firefox11에서 시작하는 것은 당신이 highdp 정밀도가 지원되는지 검사하도록 허용하고, 더 일반적으로, 지원되는 모든 정밀도 한정자의 실제 정밀도를 조회할 수 있게 해줍니다.

## 마음에 새겨야 할 것들

- 몇몇의 WebGL의 능력들은 클라이언트에 의존합니다. 그들에게 의존하기 전에, 당신은 WebGL getParameter() 함수를 사용해서 클라이언트 측에서 무슨 값들이 지원되는지 결정해야 합니다. 예를 들면, 2D 텍스처의 최대 크기는 webgl.getParameter(webgl.MAX_TEXTURE_SIZE)로 주어집니다. Firefox10에서의 `webgl.min_capability_mode` preference는 이식성 검사를 위해 능력의 최소한의 값들을 시뮬레이팅 하도록 허락해 줍니다.
- In particular, note that usage of textures in vertex shaders is only possible if `webgl.getParameter(webgl.MAX_VERTEX_TEXTURE_IMAGE_UNITS)` is greater than zero. Typically, this fails on current mobile hardware.
- The availability of most WebGL extensions depends on the client. When using WebGL extensions, if possible, try to make them optional by gracefully adapting to the case there they are not supported. Starting in Firefox 10, the `webgl.disable-extensions` preference allows simulating the absence of all extensions, to test portability.
- Rendering to a floating-point texture may not be supported, even if the `OES_texture_float` extension is supported. Typically, this fails on current mobile hardware. To check if this is supported, you have to call the WebGL `checkFramebufferStatus()` function.
- Rendering to a canvas can be done at a different resolution than the style sheet will eventually force the canvas to appear at. If struggling with performance you should consider rendering to a low resolution WebGL context and using CSS to upscale its canvas to the size you intend.

## 일반적인 성능 팁들

- Anything that requires syncing the CPU and GPU sides is potentially very slow, so if possible you should try to avoid doing that in your main rendering loops. This includes the following WebGL calls: `getError()`, `readPixels()`, and `finish()`. WebGL getter calls such as `getParameter()` and `getUniformLocation()` should be considered slow too, so try to cache their results in a JavaScript variable.
- Fewer, larger draw operations will improve performance. If you have 1000 sprites to paint, try to do it as a single `drawArrays()` or `drawElements()` call. You can draw degenerate (flat) triangles if you need to draw discontinuous objects as a single `drawArrays()` call.
- Fewer state changes will also improve performance. In particular, if you can pack multiple images into a single texture and select them by using the appropriate texture coordinates, that can help you do fewer texture binding changes, which improves performance.

  - In some rare cases, packing greyscale textures which belong together into the color channels of a single texture might help.

- Smaller textures perform better than larger ones. For this reason, mipmapping can be a performance win.
- Simpler shaders perform better than complex ones. In particular, if you can remove an `if` statement from a shader, that will make it run faster. Division and math functions like `log()` should be considered expensive too.

  - However, nowadays even mobile devices possess powerful GPUs that are capable of running even relatively complex shader programs. Moreover, because shaders are compiled, the eventual machine code that actually runs on the hardware may be highly optimized. What may seem like an expensive function call may in fact compile into only few (or even a single) machine instructions. This is particularly true for {{Glossary("GLSL")}} functions that typically operate on vectors, such as `normalize()`, `dot()` and `mix()`. The best advice in that regard is to use the built-in functions, rather than try to implement, for example, one's own version of a dot-product or linear interpolation, which may in fact compile to larger and less optimized machine code. Finally, it is important to keep in mind that GPUs are constructed to do complex mathematical calculations in hardware, and therefore, may support math functions, such as `sin()`, `cos()` and other, through dedicated machine instructions.

- Do as much as you can in the vertex shader, rather than in the fragment shader. Because, per rendering pass, fragment shaders run many more times than vertex shaders, any calculation that can be done on the vertices and then just interpolated among fragments is a performance boon (this interpolation is done "automagically" for you, through the fixed functionality rasterization phase of the OpenGL pipeline). For example, a simple animation of a textured surface can be achieved through a time-dependent transformation of texture coordinates (simplest case is to add a uniform vector to the texture coordinates attribute vector). If visually acceptable, one can transform the texture coordinates in the vertex shader rather than in the fragment shader, to get better performance.
- Always have vertex attrib 0 array enabled. If you draw with vertex attrib 0 array disabled, you will force the browser to do complicated emulation when running on desktop OpenGL (e.g. on Mac OSX). This is because in desktop OpenGL, nothing gets drawn if vertex attrib 0 is not array-enabled. You can use `bindAttribLocation()` to force a vertex attribute to use location `0`, and use `enableVertexAttribArray()` to make it array-enabled.
