---
title: WebGLRenderingContext.createProgram()
slug: Web/API/WebGLRenderingContext/createProgram
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.createProgram()`** メソッドは、{{domxref("WebGLProgram")}} オブジェクトを作成、初期化します。

## 構文

```
WebGLProgram gl.createProgram();
```

### 引数

ありません。

### 返り値

{{domxref("WebGLProgram")}} オブジェクトは、2 つのコンパイルされた {{domxref("WebGLShader")}} の組み合わせで、頂点シェーダーとフラグメントシェーダー (どちらも GLSL で書かれる) で成り立ちます。そして、これらを使用可能なプログラムへとリンクします。

## 例

### WebGL プログラムの作成

```js
var program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  var info = gl.getProgramInfoLog(program);
  throw "Could not compile WebGL program. \n\n" + info;
}
```

{{domxref("WebGLShader")}} を参照すると、上記サンプルの `vertexShader` と `fragmentShader` の作成についての情報が得られます。

## 仕様策定状況

{{Specifications}}

## ブラウザーの対応

{{Compat}}

## 関連項目

- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
