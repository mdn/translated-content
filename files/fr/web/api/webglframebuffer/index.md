---
title: WebGLFramebuffer
slug: Web/API/WebGLFramebuffer
---

{{APIRef("WebGL")}}

L'interface **WebGL Framebuffer** fait partie de l'[API WebGL](/fr/docs/Web/API/WebGL_API) et représente une collection de tampons servant de destination de rendu.

## Description

L'objet `WebGLFramebuffer` ne définit aucune méthode ou propriété en propre, et son contenu n'est pas directement accessible. Lorsque vous travaillez avec des objets `WebGLFramebuffer`, les méthodes suivantes du {{domxref("WebGLRenderingContext")}} sont utiles :

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}

## Exemples

### Création d'un tampon d'image

```js
var canevas = document.getElementById("canevas");
var gl = canevas.getContext("webgl");
var tampon = gl.createFramebuffer();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Autres tampon : {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
