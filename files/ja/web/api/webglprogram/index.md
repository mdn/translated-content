---
title: WebGLProgram
slug: Web/API/WebGLProgram
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{APIRef("WebGL")}}

**`WebGLProgram`** は [WebGL API](/ja/docs/Web/API/WebGL_API) の一部で、 は、頂点シェーダーとフラグメントシェーダー（どちらも GLSL で書かれています）の 2 つのコンパイル済み {{domxref("WebGLShader")}} の組み合わせです。

{{InheritanceDiagram}}

`WebGLProgram` を作成するには、 GL コンテキストの {{domxref("WebGLRenderingContext.createProgram", "createProgram()")}} 関数を呼び出します。 {{domxref("WebGLRenderingContext.attachShader", "attachShader()")}} を使用してシェーダープログラムを割り当てた後、使用可能なプログラムにリンクします。以下のコードに示します。

```js
const program = gl.createProgram();

// 既存のシェーダーを取り付ける
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw `WebGL プログラムをコンパイルできませんでした。\n\n${info}`;
}
```

上の例の `vertexShader` と `fragmentShader` の作成については {{domxref("WebGLShader")}} を参照してください。

## 例

### プログラムの使用

プログラムを使って実際に作業を行うには、 GPU にプログラムを使用するように指示し、適切なデータと設定オプションをバインドし、最後に画面に何かを描画します。

```js
// プログラムを使用
gl.useProgram(program);

// 既存の属性データをバインド
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.enableVertexAttribArray(attributeLocation);
gl.vertexAttribPointer(attributeLocation, 3, gl.FLOAT, false, 0, 0);

// 単一の三角形を描画
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

### プログラムの削除

プログラムのリンクにエラーがあった場合、または既存のプログラムを削除したい場合は、 {{domxref("WebGLRenderingContext.deleteProgram()")}} を実行するだけです。これにより、リンクされたプログラムのメモリが解放されます。

```js
gl.deleteProgram(program);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.detachShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.shaderSource()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
