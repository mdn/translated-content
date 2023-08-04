---
title: WebGLBuffer
slug: Web/API/WebGLBuffer
---

{{APIRef("WebGL")}}

L'interface **WebGLBuffer** fait partie de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) et représente un objet tampon opaque stockant des données telles que des sommets ou des couleurs.

## Description

L'objet `WebGLBuffer` ne définit aucune méthode ou propriété en propre, et son contenu n'est pas directement accessible. Lorsque vous travaillez avec des objets `WebGLBuffer`, les méthodes suivantes du {{domxref ("WebGLRenderingContext")}} sont utiles :

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}

## Exemples

### Création d'un tampon

```js
var canevas = document.getElementById("canevas");
var gl = canevas.getContext("webgl");
var tampon = gl.createBuffer();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Autres tampons : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
