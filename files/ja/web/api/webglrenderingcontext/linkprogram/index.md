---
title: WebGLRenderingContext.linkProgram()
slug: Web/API/WebGLRenderingContext/linkProgram
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.linkProgram()`** メソッドは、与えられた {{domxref("WebGLProgram")}} に接続された頂点とフラグメントのシェーダーをリンクします。

## 構文

```
void gl.linkProgram(program);
```

### 引数

- program
  - : リンクする {{domxref("WebGLProgram")}}。

### 返り値

ありません。

## 例

```js
var program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  var info = gl.getProgramInfoLog(program);
  throw new Error("Could not compile WebGL program. \n\n" + info);
}
```

## 仕様策定状況

{{Specifications}}

## ブラウザーの対応

{{Compat}}

## 関連項目

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
