---
title: WebGLRenderingContext.deleteTexture()
slug: Web/API/WebGLRenderingContext/deleteTexture
---

{{APIRef("WebGL")}}WebGLRenderingContext.deleteTexture() 方法删除指定的{{domxref("WebGLTexture")}}对象。如果纹理已被删除，则此方法无效。

## Syntax

```plain
void gl.deleteTexture(texture);
```

### Parameters

- texture
  - : 将要删除的{{domxref("WebGLTexture")}} 对象。

### Return value

无。

## Examples

### Deleting a texture

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var texture = gl.createTexture();

// ...

gl.deleteTexture(texture);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
