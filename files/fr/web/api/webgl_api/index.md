---
title: "WebGL : graphismes 2D et 3D pour le Web"
slug: Web/API/WebGL_API
l10n:
  sourceCommit: fff0462a1f0cdd479b62808e810e9fd030622c8e
---

{{DefaultAPISidebar("WebGL")}}

**WebGL** (<i lang="en">Web Graphics Library</i>, qu'on pourrait traduire en «&nbsp;bibliothèque de graphismes pour le Web&nbsp;») est une API JavaScript permettant le rendu de graphismes en 2D ou 3D avec de hautes performances, sans avoir à utiliser de plugin. WebGL introduit une API qui est conforme de près à OpenGL ES 2.0 et qui peut être utilisée sur les éléments HTML [`<canvas>`](/fr/docs/Web/HTML/Element/canvas). Cette conformité permet à l'API de tirer parti de l'accélération matérielle graphique fournie par l'appareil.

WebGL est pris en charge par [Firefox](/fr/docs/Mozilla/Firefox) 4+, [Google Chrome](https://www.google.com/chrome/) 9+, [Opera](https://www.opera.com/) 12+, [Safari](https://www.apple.com/safari/) 5.1+, et [Microsoft Edge](https://www.microsoft.com/fr-FR/edge) build 10240+. Il est également nécessaire que le matériel de l'appareil utilisé prenne en charge ces fonctionnalités.

L'API [WebGL 2](#webgl_2) fournit la plupart des fonctionnalités de OpenGL ES 3.0. Elle est fournie via l'interface [`WebGL2RenderingContext`](/fr/docs/Web/API/WebGL2RenderingContext).

L'élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) est également utilisé par [l'API <i lang="en">Canvas</i>](/fr/docs/Web/API/Canvas_API) pour réaliser des graphismes en 2D sur des pages web.

## Référence

### Interfaces standard

- [`WebGLRenderingContext`](/fr/docs/Web/API/WebGLRenderingContext)
- [`WebGL2RenderingContext`](/fr/docs/Web/API/WebGL2RenderingContext)
- [`WebGLActiveInfo`](/fr/docs/Web/API/WebGLActiveInfo)
- [`WebGLBuffer`](/fr/docs/Web/API/WebGLBuffer)
- [`WebGLContextEvent`](/fr/docs/Web/API/WebGLContextEvent)
- [`WebGLFramebuffer`](/fr/docs/Web/API/WebGLFramebuffer)
- [`WebGLProgram`](/fr/docs/Web/API/WebGLProgram)
- [`WebGLQuery`](/fr/docs/Web/API/WebGLQuery)
- [`WebGLRenderbuffer`](/fr/docs/Web/API/WebGLRenderbuffer)
- [`WebGLSampler`](/fr/docs/Web/API/WebGLSampler)
- [`WebGLShader`](/fr/docs/Web/API/WebGLShader)
- [`WebGLShaderPrecisionFormat`](/fr/docs/Web/API/WebGLShaderPrecisionFormat)
- [`WebGLSync`](/fr/docs/Web/API/WebGLSync)
- [`WebGLTexture`](/fr/docs/Web/API/WebGLTexture)
- [`WebGLTransformFeedback`](/fr/docs/Web/API/WebGLTransformFeedback)
- [`WebGLUniformLocation`](/fr/docs/Web/API/WebGLUniformLocation)
- [`WebGLVertexArrayObject`](/fr/docs/Web/API/WebGLVertexArrayObject)

### Extensions

- [`ANGLE_instanced_arrays`](/fr/docs/Web/API/ANGLE_instanced_arrays)
- [`EXT_blend_minmax`](/fr/docs/Web/API/EXT_blend_minmax)
- [`EXT_color_buffer_float`](/fr/docs/Web/API/EXT_color_buffer_float)
- [`EXT_color_buffer_half_float`](/fr/docs/Web/API/EXT_color_buffer_half_float)
- [`EXT_disjoint_timer_query`](/fr/docs/Web/API/EXT_disjoint_timer_query)
- [`EXT_float_blend`](/fr/docs/Web/API/EXT_float_blend)
- [`EXT_frag_depth`](/fr/docs/Web/API/EXT_frag_depth)
- [`EXT_shader_texture_lod`](/fr/docs/Web/API/EXT_shader_texture_lod)
- [`EXT_sRGB`](/fr/docs/Web/API/EXT_sRGB)
- [`EXT_texture_compression_bptc`](/fr/docs/Web/API/EXT_texture_compression_bptc)
- [`EXT_texture_compression_rgtc`](/fr/docs/Web/API/EXT_texture_compression_rgtc)
- [`EXT_texture_filter_anisotropic`](/fr/docs/Web/API/EXT_texture_filter_anisotropic)
- [`EXT_texture_norm16`](/fr/docs/Web/API/EXT_texture_norm16)
- [`KHR_parallel_shader_compile`](/fr/docs/Web/API/KHR_parallel_shader_compile)
- [`OES_element_index_uint`](/fr/docs/Web/API/OES_element_index_uint)
- [`OES_fbo_render_mipmap`](/fr/docs/Web/API/OES_fbo_render_mipmap)
- [`OES_standard_derivatives`](/fr/docs/Web/API/OES_standard_derivatives)
- [`OES_texture_float`](/fr/docs/Web/API/OES_texture_float)
- [`OES_texture_float_linear`](/fr/docs/Web/API/OES_texture_float_linear)
- [`OES_texture_half_float`](/fr/docs/Web/API/OES_texture_half_float)
- [`OES_texture_half_float_linear`](/fr/docs/Web/API/OES_texture_half_float_linear)
- [`OES_vertex_array_object`](/fr/docs/Web/API/OES_vertex_array_object)
- [`OVR_multiview2`](/fr/docs/Web/API/OVR_multiview2)
- [`WEBGL_color_buffer_float`](/fr/docs/Web/API/WEBGL_color_buffer_float)
- [`WEBGL_compressed_texture_astc`](/fr/docs/Web/API/WEBGL_compressed_texture_astc)
- [`WEBGL_compressed_texture_etc`](/fr/docs/Web/API/WEBGL_compressed_texture_etc)
- [`WEBGL_compressed_texture_etc1`](/fr/docs/Web/API/WEBGL_compressed_texture_etc1)
- [`WEBGL_compressed_texture_pvrtc`](/fr/docs/Web/API/WEBGL_compressed_texture_pvrtc)
- [`WEBGL_compressed_texture_s3tc`](/fr/docs/Web/API/WEBGL_compressed_texture_s3tc)
- [`WEBGL_compressed_texture_s3tc_srgb`](/fr/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)
- [`WEBGL_debug_renderer_info`](/fr/docs/Web/API/WEBGL_debug_renderer_info)
- [`WEBGL_debug_shaders`](/fr/docs/Web/API/WEBGL_debug_shaders)
- [`WEBGL_depth_texture`](/fr/docs/Web/API/WEBGL_depth_texture)
- [`WEBGL_draw_buffers`](/fr/docs/Web/API/WEBGL_draw_buffers)
- [`WEBGL_lose_context`](/fr/docs/Web/API/WEBGL_lose_context)
- [`WEBGL_multi_draw`](/fr/docs/Web/API/WEBGL_multi_draw)

### Évènements

- [`webglcontextlost`](/fr/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
- [`webglcontextrestored`](/fr/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
- [`webglcontextcreationerror`](/fr/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)

### Types et constantes

- [Constantes WebGL](/fr/docs/Web/API/WebGL_API/Constants)
- [Types WebGL](/fr/docs/Web/API/WebGL_API/Types)

### WebGL 2

WebGL 2 est une mise à jour majeure de WebGL et est fournie par l'interface [`WebGL2RenderingContext`](/fr/docs/Web/API/WebGL2RenderingContext). Basée sur OpenGL ES 3.0, les nouvelles fonctionnalités incluent&nbsp;:

- [Textures 3D](/fr/docs/Web/API/WebGL2RenderingContext/texImage3D),
- [Objets d'échantillonnage des textures (`WebGLSampler`)](/fr/docs/Web/API/WebGLSampler),
- [Objets de tampon uniformes](/fr/docs/Web/API/WebGL2RenderingContext#objets_tampons_uniforms),
- [Objets de synchronisation (`WebGLSync`)](/fr/docs/Web/API/WebGLSync),
- [Objets de requête (`WebGLQuery`)](/fr/docs/Web/API/WebGLQuery),
- [Objets de retour de transformation (`WebGLTransformFeedback`)](/fr/docs/Web/API/WebGLTransformFeedback),
- Les extensions ayant été promues et qui font partie de WebGL 2&nbsp;:
  - [Objets pour les tableaux de sommets](/fr/docs/Web/API/WebGLVertexArrayObject),
  - [Instanciation](/fr/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced),
  - [Cibles de rendu multiples](/fr/docs/Web/API/WebGL2RenderingContext/drawBuffers),
  - [Profondeur de fragment](/fr/docs/Web/API/EXT_frag_depth).

Voir aussi le billet [<i lang="en">"WebGL 2 lands in Firefox"</i> (en anglais)](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) et [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) pour plusieurs démos.

## Guides et tutoriels

Dans la section qui suit, vous trouverez un ensemble de guide pour apprendre les concepts WebGL et de tutoriels pour des exercices guidés pas à pas et des exemples.

### Guides

- [Les données en WebGL](/fr/docs/Web/API/WebGL_API/Data)
  - : Un guide sur les variables, les tampons et autres types de données utilisées pour l'écriture de code WebGL.
- [Bonnes pratiques WebGL](/fr/docs/Web/API/WebGL_API/WebGL_best_practices)
  - : Des conseils et suggestions pour vous aider à améliorer la qualité, la performance et la fiabilité de votre contenu WebGL.
- [Utiliser les extensions](/fr/docs/Web/API/WebGL_API/Using_Extensions)
  - : Un guide sur l'utilisation des extensions WebGL.

### Tutoriels

- [Tutoriel WebGL](/fr/docs/Web/API/WebGL_API/Tutorial)
  - : Un guide pour commencer avec WebGL et découvrir les concepts principaux. Il s'agit d'un bon point de départ si vous n'avez jamais utilisé WebGL auparavant.

### Exemples

- [Un exemple d'animation WebGL simple en 2D](/fr/docs/Web/API/WebGL_API/Basic_2D_animation_example)
  - : Cet exemple illustre une animation simple d'une forme avec une couleur. Cet article aborde l'adaptation aux facteurs de forme, une fonction pour construire des <i lang="en">shaders</i> à partir de plusieurs <i lang="en">shaders</i>, ainsi que les bases du dessin en WebGL.
- [WebGL par l'exemple](/fr/docs/Web/API/WebGL_API/By_example)
  - : Un ensemble d'exemples avec des explications concises qui montrent les concepts et possibilités offertes par WebGL. Les exemples sont triés selon le sujet et le niveau de difficulté. Cet article aborde le contexte de rendu WebGL, la programmation de <i lang="en">shaders</i>, les textures, la géométrie, les interactions avec l'utilisatrice ou l'utilisateur, etc.

### Tutoriels avancés

- [Explications sur le modèle, la vue et la projection WebGL](/fr/docs/Web/API/WebGL_API/WebGL_model_view_projection)
  - : Une explication détaillée sur les trois matrices principales généralement utilisées pour représenter une vue d'un objet 3D&nbsp;: les matrices de modèle, de vue et de projection.
- [Mathématiques matricielles pour le Web](/fr/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : Un guide expliquant la façon dont les matrices de transformation 3D fonctionnent et comment elles peuvent être utilisées sur le Web, pour les calculs WebGL ou les transformations CSS.

## Ressources

- [Site WebGL de Khronos](https://www.khronos.org/webgl/), le site principal du Khronos Group pour WebGL.
- [<i lang="en">WebGL Fundamentals</i> (en anglais)](https://web.dev/webgl-fundamentals/), un tutoriel pour apprendre les fondamentaux de WebGL.
- [<i lang="en">Raw WebGL: An introduction to WebGL</i> (en anglais)](https://www.youtube.com/embed/H4c8t6myAWU/?feature=player_detailpage), une présentation de Nick Desaulniers qui introduit les bases de WebGL.
- [Bac à sable WebGL](http://webglplayground.net), un outil en ligne pour créer et partager des projets WebGL, utile pour le prototypage et l'expérimentation.
- [<i lang="en">WebGL Academy</i> (en anglais)](http://www.webglacademy.com), un éditeur HTML/JavaScript avec des tutoriels pour apprendre les fondamentaux de la programmation WebGL.
- [Stats WebGL](https://webglreport.com/), un site avec des statistiques quant aux fonctionnalités WebGL des navigateurs sur les différentes plateformes.

### Bibliothèques tierces

- [three.js](https://threejs.org/) est une bibliothèque 3D WebGL, riche en fonctionnalités et en source ouverte.
- [Babylon.js](https://www.babylonjs.com) est un moteur de rendu 3D puissant, simple et en source ouverte, mis à disposition dans un <i lang="en">framework</i> JavaScript.
- [Pixi.js](https://pixijs.com/) est un moteur de rendu WebGL 2D performant en source ouverte.
- [Phaser](https://phaser.io/) est un <i lang="en">framework</i> performant, gratuit en source ouverte pour créer des jeux fonctionnant sur l'API <i lang="en">Canvas</i> ou WebGL.
- [PlayCanvas](https://playcanvas.com/) est un moteur de jeu en source ouverte.
- [glMatrix](https://github.com/toji/gl-matrix) est une bibliothèque JavaScript matricielle et vectorielle pour les applications WebGL à hautes performances.
- [twgl](https://twgljs.org) est une bibliothèque pour rendre WebGL moins verbeux.
- [RedGL](https://github.com/redcamel/RedGL2) est une bibliothèque 3D WebGL en source ouverte.
- [vtk.js](https://kitware.github.io/vtk-js/) est une bibliothèque JavaScript pour la visualisation scientifique dans le navigateur.
- [webgl-lint](https://greggman.github.io/webgl-lint/) vous aidera à trouver des erreurs dans votre code WebGL et fournira des informations utiles.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Notes de compatibilité

En plus du navigateur, il faut également que la carte graphique prenne en charge les fonctionnalités. Par exemple, la compression de texture S3 (S3TC) est uniquement disponible pour les tablettes basées sur Tegra. La plupart des navigateurs fournissent le contexte WebGL via `webgl`, mais les plus anciens utilisent `experimental-webgl`. [WebGL 2](/fr/docs/Web/API/WebGL2RenderingContext) utilise quant à lui le nom de contexte `webgl2`.

### Notes spécifiques à Gecko

#### Débogage et tests WebGL

Firefox fournit deux préférences pour contrôler les fonctionnalités de WebGL à des fins de tests&nbsp;:

- `webgl.min_capability_mode`
  - : Une propriété booléenne qui, lorsqu'elle vaut `true`, active un mode de compatibilité minimal. Dans ce mode, WebGL est configuré pour uniquement prendre en charge l'ensemble minimal de fonctionnalités requis par la spécification WebGL. Cela permet de s'assurer que le code WebGL fonctionnera sur n'importe quel appareil ou navigateur, quelles que soient ses capacités. Par défaut, elle vaut `false`.
- `webgl.disable_extensions`
  - : Une propriété booléenne qui, lorsqu'elle vaut `true`, désactive l'ensemble des extensions WebGL. Par défaut, elle vaut `false`.

## Voir aussi

- [L'API <i lang="en">Canvas</i>](/fr/docs/Web/API/Canvas_API)
- [Informations de compatibilité à propos des extensions WebGL](/fr/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#compatibilité_des_navigateurs)
