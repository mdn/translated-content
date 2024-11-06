---
title: WebGL
slug: Web/API/WebGL_API
---

{{DefaultAPISidebar("WebGL")}}

WebGL (Web Graphics Library) é uma API do JavaScript para renderizar gráficos 3D e 2D dentro de um navegador web compatível sem o uso de plug-ins. O WebGL faz isso introduzindo uma API que está de acordo com o OpenGL ES 2.0 e que pode ser usada em elementos do HTML5 {{HTMLElement("canvas")}}.

O suporte para WebGL está presente no [Firefox](/pt-BR/Firefox) 4+, [Google Chrome](http://www.google.com/chrome/) 9+, [Opera](http://www.opera.com/) 12+, [Safari](http://www.apple.com/safari/) 5.1+ e [Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/browser-ie) 11+. No entanto, o dispositivo do usuário também deve ter um hardware que suporte esses recursos.

O elemento {{HTMLElement("canvas")}} é também usado pelo [Canvas 2D](/pt-BR/docs/Web/API/Canvas_API) para renderizar gráficos 2D em páginas web.

## Referências

### Interfaces padrão

- {{domxref("WebGLRenderingContext")}}
- {{domxref("WebGL2RenderingContext")}} {{experimental_inline}}
- {{domxref("WebGLActiveInfo")}}
- {{domxref("WebGLBuffer")}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLFramebuffer")}}
- {{domxref("WebGLProgram")}}
- {{domxref("WebGLQuery")}} {{experimental_inline}}
- {{domxref("WebGLRenderbuffer")}}
- {{domxref("WebGLSampler")}} {{experimental_inline}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLShaderPrecisionFormat")}}
- {{domxref("WebGLSync")}} {{experimental_inline}}
- {{domxref("WebGLTexture")}}
- {{domxref("WebGLTransformFeedback")}} {{experimental_inline}}
- {{domxref("WebGLUniformLocation")}}
- {{domxref("WebGLVertexArrayObject")}} {{experimental_inline}}

### Extensões

- {{domxref("ANGLE_instanced_arrays")}}
- {{domxref("EXT_blend_minmax")}}
- {{domxref("EXT_color_buffer_float")}}
- {{domxref("EXT_color_buffer_half_float")}}
- {{domxref("EXT_disjoint_timer_query")}}
- {{domxref("EXT_frag_depth")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_shader_texture_lod")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
- {{domxref("OES_element_index_uint")}}
- {{domxref("OES_standard_derivatives")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_float_linear")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("OES_texture_half_float_linear")}}
- {{domxref("OES_vertex_array_object")}}
- {{domxref("WEBGL_color_buffer_float")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("WEBGL_compressed_texture_atc")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_etc1")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_debug_renderer_info")}}
- {{domxref("WEBGL_debug_shaders")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("WEBGL_draw_buffers")}}
- {{domxref("WEBGL_lose_context")}}

### Eventos

- {{Event("webglcontextlost")}}
- {{Event("webglcontextrestored")}}
- {{Event("webglcontextcreationerror")}}

### Constantes e tipos

- [Constantes em WebGL](/pt-BR/docs/Web/API/WebGL_API/Constants)
- [Tipos em WebGL](/pt-BR/docs/Web/API/WebGL_API/Types)

### WebGL 2

O WebGL 2 é uma atualização importante para o WebGL, que é fornecida através da interface {{domxref ("WebGL2RenderingContext")}}. Baseia-se no OpenGL ES 3.0 e os novos recursos incluem:

- [Texturas 3D](/pt-BR/docs/Web/API/WebGL2RenderingContext/texImage3D)
- [Objetos Sampler](/pt-BR/docs/Web/API/WebGLSampler)
- [Objetos Uniform Buffer](/pt-BR/docs/Web/API/WebGL2RenderingContext#Uniform_buffer_objects)
- [Objetos Sync](/pt-BR/docs/Web/API/WebGLSync)
- [Objetos Query](/pt-BR/docs/Web/API/WebGLQuery)
- [Objetos Transform Feedback](/pt-BR/docs/Web/API/WebGLTransformFeedback)
- Extensões que agora fazem parte da especificação principal do WebGL 2: [Objetos Vertex Array](/pt-BR/docs/Web/API/WebGLVertexArrayObject), [instanciação](/pt-BR/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [múltiplas metas de renderização](/pt-BR/docs/Web/API/WebGL2RenderingContext/drawBuffers), [profundidade de fragmentos](/pt-BR/docs/Web/API/EXT_frag_depth).

Veja também os posts [WebGL 2 lands in Firefox](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) e [webglsamples.org/WebGL2Samples](http://webglsamples.org/WebGL2Samples/) para alguns exemplos de demonstração.

## Guias e tutoriais

- [Tutorial WebGL](/pt-BR/docs/Web/API/WebGL_API/Tutorial): Um guia para iniciantes nos conceitos principais do WebGL. Um bom lugar para iniciar se você não tem experiência prévia em WebGL.
- [Melhores práticas em WebGL](/pt-BR/docs/Web/API/WebGL_API/WebGL_best_practices): Dicas e sugestões para melhorar seu conteúdo WebGL.
- [Usando extensões](/pt-BR/docs/Web/API/WebGL_API/Using_Extensions): Como usar as extensões disponíveis em WebGL.

### Tutoriais avançados

- [Modelo, visualização e projeção em WebGL](/pt-BR/docs/Web/API/WebGL_API/WebGL_model_view_projection): Uma explicação detalhada das três matrizes principais tipicamente usadas para representar uma visualização em 3D de um objeto: as matrizes de modelo, de visualização e de projeção.
- [Matemática matricial para a web](/pt-BR/docs/Web/API/WebGL_API/Matrix_math_for_the_web): Um guia útil sobre como matrizes de transformação 3D funcionam e como podem ser usadas na web — tanto para cálculos em WebGL quanto para transformações em CSS3.

## Recursos

- [WebGL puro: Uma introdução ao WebGL](https://www.youtube.com/embed/H4c8t6myAWU/?feature=player_detailpage) Uma conversa com Nick Desaulniers que introduz o básico de WebGL. Este é um ótimo lugar para iniciar se você nunca trabalhou com programação de baixo nível para gráficos.
- [Site WebGL do Khronos](http://www.khronos.org/webgl/) O site principal para WebGL do Grupo Khronos.
- [Aprendendo WebGL](http://learningwebgl.com/blog/?page_id=1217) Um site com tutoriais de uso do WebGL.
- [Fundamentos de WebGL](http://www.html5rocks.com/en/tutorials/webgl/webgl_fundamentals/) Um tutorial básico com os fundamentos do WebGL.
- [Playground do WebGL](http://webglplayground.net) Uma ferramenta online para criar e compartilhar projetos em WebGL. Boa para protótipos rápidos e experimentação.
- [Academia WebGL](http://www.webglacademy.com) Um editor HTML/JavaScript com tutoriais para aprender o básico de programação em WebGL.
- [WebGL Stats](http://webglstats.com/) Um site com estatísticas sobre as funcionalidades do WebGL em navegadores de diferentes plataformas.

### Bibliotecas

- [glMatrix](https://github.com/toji/gl-matrix) Biblioteca em JavaScript de Matrizes e Vetores para aplicações WebGL de Alta Performance.
- [PhiloGL](http://senchalabs.github.com/philogl/) é um WebGL _framework_ para Visualização de Dados, Código Criativo, e Desenvolvimento de Jogos.
- [Pixi.js](http://www.pixijs.com/) é um renderizador gráfico 2D, rápido e com código aberto, que utiliza WebGL.
- [PlayCanvas](https://playcanvas.com/) motor de jogos com código aberto.
- [Sylvester](http://sylvester.jcoglan.com/) Uma biblioteca de código aberto para manipular vetores e matrizes. Não é otimizada para WebGL mas é extremamente robusta.
- [three.js](https://threejs.org/) é uma biblioteca WebGL 3D com recursos completos de código aberto.
- [Phaser](https://phaser.io/) é um _framework_ rápido de código aberto, gratuita e divertida para jogos em navegadores baseados em Canvas e WebGL.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Canvas](/pt-BR/docs/Web/API/Canvas_API)
- [Informações de compatibilidade para extensões WebGL](/pt-BR/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#Browser_compatibility)
