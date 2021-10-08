---
title: WebGLRenderingContext.deleteShader()
slug: Web/API/WebGLRenderingContext/deleteShader
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/deleteShader
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.deleteShader()`** de l'API WebGL marque l'objet {{domxref("WebGLShader")}} indiqué pour suppression. Il sera ensuite supprimé dès que le shader ne sera plus utilisé. Cette méthode n'a aucun effet si le shader a déjà été supprimé, et le {{domxref ("WebGLShader")}} est automatiquement marqué pour la suppression lorsqu'il est détruit par le garbage collector.

## Syntaxe

    void gl.deleteShader(shader);

### Paramètres

- shader
  - : Un objet {{domxref("WebGLShader")}} à détruire.

### Valeur retournée

Aucune.

## Exemples

### Suppression d'un shader

```js
gl.deleteShader(shader);
```

## Spécifications

| Spécification                                                                                | Statut                               | Commentaire                           |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------- |
| {{SpecName('WebGL', "#5.14.9", "deleteShader")}}                             | {{Spec2('WebGL')}}             | Définition initiale.                  |
| {{SpecName('OpenGL ES 2.0', "glDeleteShader.xml", "glDeleteShader")}} | {{Spec2('OpenGL ES 2.0')}} | Page man de l'API OpenGL (similaire). |

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.deleteShader")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
