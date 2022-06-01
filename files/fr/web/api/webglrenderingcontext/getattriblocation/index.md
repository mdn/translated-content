---
title: WebGLRenderingContext.getAttribLocation()
slug: Web/API/WebGLRenderingContext/getAttribLocation
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/getAttribLocation
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.getAttribLocation()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) retourne l'emplacement d'une variable d'attribut dans le {{domxref("WebGLProgram")}} indiqué.

## Syntaxe

    GLint gl.getAttribLocation(programme, nom);

### Paramètres

- programme
  - : Un {{domxref("WebGLProgram")}} contenant la variable d'attribut.
- nom
  - : Un {{domxref("DOMString")}} indiquant le nom de la variable d'attribut dont l'emplacement est à retourner.

### Valeur retournée

Un nombre {{domxref("GLint")}} indiquant l'emplacement du nom de la variable si trouvé. Retourne -1 sinon.

## Exemples

```js
gl.getAttribLocation(programme, 'vColor');
```

## Spécifications

| Spécification                                                                                            | Statut                               | Commentaire                      |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------- |
| {{SpecName('WebGL', "#5.14.10", "getAttribLocation")}}                                 | {{Spec2('WebGL')}}             | Définition initiale.             |
| {{SpecName('OpenGL ES 2.0', "glGetAttribLocation.xml", "glGetAttribLocation")}} | {{Spec2('OpenGL ES 2.0')}} | Page principale de l'API OpenGL. |

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.getAttribLocation")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
