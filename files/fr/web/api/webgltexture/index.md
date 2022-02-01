---
title: WebGLTexture
slug: Web/API/WebGLTexture
tags:
  - API
  - Reference
  - WebGL
translation_of: Web/API/WebGLTexture
---
{{APIRef("WebGL")}}

L'interface WebGLTexture fait partie de l'[API WebGL](/fr/docs/Web/API/WebGL_API) et représente un objet de texture opaque fournissant un stockage et un état pour les opérations de texturation.

## Description

L'objet WebGLTexture ne définit aucune méthode ou propriété propre, et son contenu n'est pas directement accessible. Lors du travail avec des objets WebGLTexture, les méthodes suivantes du {{domxref("WebGLRenderingContext")}} sont utiles :

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}

## Exemples

### Création d'une texture

```js
var canevas = document.getElementById('canvas');
var gl = canevas.getContext('webgl');
var texture = gl.createTexture();
```

## Spécifications

| Spécification                                                | Statut                   | Commentaire          |
| ------------------------------------------------------------ | ------------------------ | -------------------- |
| {{SpecName('WebGL', "#5.9", "WebGLTexture")}} | {{Spec2('WebGL')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.WebGLTexture")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.generateMipmap()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext.texParameteri()")}}
