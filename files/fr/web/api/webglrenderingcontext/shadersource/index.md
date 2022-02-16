---
title: WebGLRenderingContext.shaderSource()
slug: Web/API/WebGLRenderingContext/shaderSource
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/shaderSource
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.shaderSource()`** de l'[API WebGL](/en-US/docs/Web/API/WebGL_API) définit le code source d'un {{domxref("WebGLShader")}}.

## Syntaxe

    void gl.shaderSource(shader, source);

### Parameters

- shader
  - : Un objet {{domxref("WebGLShader")}} dans lequel définir le code source.
- source
  - : Une {{domxref("DOMString")}} contenant le code source GLSL à définir.

### Valeur retournée

Aucune.

## Exemple

```js
var shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, originalSource);

var source = gl.getShaderSource(shader);
```

## Spécifications

| Spécification                                                                                | Statut                               | Commentaire                           |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------- |
| {{SpecName('WebGL', "#5.14.9", "shaderSource")}}                             | {{Spec2('WebGL')}}             | Définition initiale.                  |
| {{SpecName('OpenGL ES 2.0', "glShaderSource.xml", "glShaderSource")}} | {{Spec2('OpenGL ES 2.0')}} | Page man de l'API OpenGL (similaire). |

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.shaderSource")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
