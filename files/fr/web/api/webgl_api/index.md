---
title: 'L''API WebGL : graphismes 2D et 3D pour le web'
slug: Web/API/WebGL_API
tags:
  - 3D
  - API WebGL
  - Avancé
  - Graphiques
  - Graphiques 3D
  - Media
  - Vue d'ensemble
  - WebGL
translation_of: Web/API/WebGL_API
---
{{WebGLSidebar}}

**WebGL** (la bibliothèque de graphismes web) est une API JavaScript pour l'affichage de graphismes 2D et 3D dans n'importe quel navigateur web compatible sans utilisation de modules complémentaires. WebGL réalise cela en introduisant une API qui se conforme de façon très proche à OpenGL ES 2.0 et qui peut être utilisée dans les éléments [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) de HTML5.

Le support pour WebGL est présent dans [Firefox](/fr/docs/Mozilla/Firefox) 4+, [Google Chrome](https://www.google.com/chrome/) 9+, [Opera](https://www.opera.com/fr) 12+, [Safari](https://www.apple.com/fr/safari/) 5.1+, [Internet Explorer](https://support.microsoft.com/fr-fr/windows/aide-d-internet-explorer-23360e49-9cd3-4dda-ba52-705336cc0de2) 11+ et les versions 10240+ de [Microsoft Edge](https://www.microsoft.com/fr-fr/edge)&nbsp;; toutefois, l'appareil de l'utilisatrice ou l'utilisateur doit aussi avoir le matériel qui supporte ces fonctionnalités.

L'élément {{HTMLElement("canvas")}} est aussi utilisé par [Canvas 2D](/fr-FR/docs/Web/API/Canvas_API) pour faire des graphismes 2D sur les pages web.

## Référence

### Interfaces standard

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

### Extensions

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

### Evènements

- {{Event("webglcontextlost")}}
- {{Event("webglcontextrestored")}}
- {{Event("webglcontextcreationerror")}}

### Constantes et types

- [Constantes WebGL](/fr-FR/docs/Web/API/WebGL_API/Constants)
- [Types WebGL](/fr-FR/docs/Web/API/WebGL_API/Types)

### WebGL 2

WebGL 2 est une mise à jour majeure de WebGL, qui est fournie à travers l'interface {{domxref("WebGL2RenderingContext")}}. Elle est basée sur OpenGL ES 3.0, et ses nouvelles fonctionnalités comprennent :

- les [textures 3D](/fr-FR/docs/Web/API/WebGL2RenderingContext/texImage3D),
- les [objets Sampler](/fr-FR/docs/Web/API/WebGLSampler),
- les [objets de tampon Uniform](/fr-FR/docs/Web/API/WebGL2RenderingContext#Uniform_buffer_objects),
- les [objets Sync](/fr-FR/docs/Web/API/WebGLSync),
- les [objets Query](/en-US/docs/Web/API/WebGLQuery),
- les [objets Tranform Feedback](/fr-FR/docs/Web/API/WebGLTransformFeedback),
- des extensions promues, qui sont maintenant essentielles pour WebGL 2 : les [objets Vertex Array](/fr-FR/docs/Web/API/WebGLVertexArrayObject), l'[instanciation](/fr-FR/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), les [cibles de rendu multiples](/fr-FR/docs/Web/API/WebGL2RenderingContext/drawBuffers), la [profondeur de fragment](/fr-FR/docs/Web/API/EXT_frag_depth).

Voir aussi le post de blog ["WebGL 2 lands in Firefox"](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) et [webglsamples.org/WebGL2Samples](http://webglsamples.org/WebGL2Samples/) pour quelques démos.

## Guides et tutoriels

Ci-dessous, vous pourrez trouver divers guides pour vous aider à apprendre les concepts WebGL, et des tutoriels qui proposent des leçons et des exemples pas-à-pas.

### Guides

- [Données en WebGL](/fr-FR/docs/Web/API/WebGL_API/Data)
  - : Un guide pour les variables, les tampons et autres types de données utilisés lors de l'écriture de code WebGL.
- [Meilleures pratiques WebGL](/fr-FR/docs/Web/API/WebGL_API/WebGL_best_practices)
  - : Des indications et des suggestions pour vous aider à améliore la qualité, les performances et la fiabilité de votre contenu WebGL.
- [Utilisation des extensions](/fr-FR/docs/Web/API/WebGL_API/Using_Extensions)
  - : Un guide pour l'utilisation des extensions WebGL.

### Tutoriels

- [Tutoriel WebGL](/fr-FR/docs/Web/API/WebGL_API/Tutorial)
  - : Un guide pour les débutants sur les concepts essentiels de WebGL. Un bon endroit pour démarrer si vous n'avez pas d'expérience antérieure de WebGL.

### Exemples

- [Un exemple de base d'animation WebGL 2D](/fr-FR/docs/Web/API/WebGL_API/Basic_2D_animation_example)
  - : Cet exemple montre l'animation simple d'une forme monochrome. Les sujets abordés sont l'adaptation aux différences de ratio d'aspect, une fonction pour construire des programmes de shader à partir d'ensembles de plusieurs shaders, et les bases du dessin dans WebGL.

### Tutoriels avancés

- [Projection de vue de modèle WebGL](/fr-FR/docs/Web/API/WebGL_API/WebGL_model_view_projection)
  - : Une explication détaillée des trois matrices de base qui sont typiquement utilisées pour représenter une vue d'un objet 3D : les matrices de modèle, de vue et de projection.
- [Mathématiques matricielles pour le web](/fr-FR/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : Un guide utile sur le fonctionnement des matrices de transformation 3D, qui peut être utilisé sur le web - à la fois pour les calculs WebGL et dans les transformations CSS3.

## Ressources

- [Raw WebGL: An introduction to WebGL](https://www.youtube.com/embed/H4c8t6myAWU/?feature=player_detailpage) Une conférence de Nick Desaulniers qui présente les bases de WebGL. C'est un bon endroit pour commencer si vous n'avez jamais fait de programmation graphique de bas niveau.
- [Khronos WebGL site](http://www.khronos.org/webgl/) Le site principal pour WebGL chez le groupe Khronos.
- [Learning WebGL](http://learningwebgl.com/blog/?page_id=1217) Un site proposant des tutoriels sur la façon d'utiliser WebGL.
- [WebGL Fundamentals](http://www.html5rocks.com/en/tutorials/webgl/webgl_fundamentals/) Un tutoriel de base sur les fondamentaux de WebGL.
- [WebGL playground](http://webglplayground.net/) Un outil en ligne pour créer et partager des projets WebGL. Bon pour le prototypage rapide et l'expérimentation.
- [WebGL Academy](http://www.webglacademy.com/) Un éditeur HTML / JavaScript proposant des tutoriels pour apprendre les bases de la programmation webgl.
- [WebGL Stats](http://webglstats.com/) Un site proposant des statistiques sur les possibilités WebGL des navigateurs sur différentes plates-formes.

### Bibliothèques

- [glMatrix](https://github.com/toji/gl-matrix) Bibliothèque matricielle et vectorielle JavaScript pour les applications WebGL hautes performances
- [Sylvester](http://sylvester.jcoglan.com/) Une bibliothèque open source pour manipuler des vecteurs et des matrices. Non optimisée pour WebGL mais extrêmement robuste.

## Spécifications

| Spécification                            | Statut                               | Commentaire                                               |
| ---------------------------------------- | ------------------------------------ | --------------------------------------------------------- |
| {{SpecName('WebGL')}}             | {{Spec2('WebGL')}}             | Définition. Basée sur OpenGL ES 2.0                       |
| {{SpecName('WebGL2')}}             | {{Spec2('WebGL2')}}             | Construite au-dessus de WebGL 1. Basée sur OpenGL ES 3.0. |
| {{SpecName('OpenGL ES 2.0')}} | {{Spec2('OpenGL ES 2.0')}} |                                                           |
| {{SpecName('OpenGL ES 3.0')}} | {{Spec2('OpenGL ES 3.0')}} |                                                           |

## Compatibilité des navigateurs

### WebGL 1

{{Compat("api.WebGLRenderingContext", 0)}}

### WebGL 2

{{Compat("api.WebGL2RenderingContext", 0)}}

### Notes de compatibilité

En plus du navigateur, la GPU elle-même doit également prendre en charge la fonctionnalité. Ainsi, par exemple, S3 Texture Compression (S3TC) n'est disponible que sur les tablettes à base de Tegra. La plupart des navigateurs rendent le contexte WebGL disponible via le nom de contexte `webgl`, mais les plus anciens ont aussi besoin d'`experimental-webgl`. De plus, le prochain [WebGL 2](/fr-FR/docs/Web/API/WebGL2RenderingContext) sera entièrement rétrocompatible et comprendra le nom de contexte `webgl2`.

### Notes Gecko

#### Débogage et test WebGL

À partir de Gecko 10.0 {{geckoRelease("10.0")}}, deux préférences sont disponibles pour vous permettre de contrôler les fonctionnalités de WebGL à des fins de test :

- `webgl.min_capability_mode`
  - : Propriété booléenne qui, lorsqu'elle est `true`, active un mode de possibilités minimales. Dans ce mode, WebGL est configuré pour prendre en charge uniquement le jeu de fonctionnalités minimal et les fonctionnalités requises par la spécification WebGL. Cela vous permet de vous assurer que votre code WebGL fonctionnera sur n'importe quel appareil ou navigateur, indépendamment de leurs possibilités. Elle est `false` par défaut.
- `webgl.disable_extensions`
  - : Propriété booléenne qui, lorsqu'elle est `true`, désactive toutes les extensions WebGL. Elle est `false` par défaut.

## Voir aussi

- [Canvas](/fr-FR/docs/Web/API/Canvas_API)
- [Informations de compatibilité à propos des extensions WebGL](/fr-FR/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#Browser_compatibility)
