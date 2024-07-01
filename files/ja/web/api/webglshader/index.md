---
title: WebGLShader
slug: Web/API/WebGLShader
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

**WebGLShader** は [WebGL API](/ja/docs/Web/API/WebGL_API) の一部で、頂点シェーダーとフラグメントシェーダーを表します。 {{domxref("WebGLProgram")}} は両方の種類のシェーダーが必要です。

{{InheritanceDiagram}}

## 解説

**WebGLShader** を作成するには {{domxref("WebGLRenderingContext.createShader")}} を使用し、それから {{domxref("WebGLRenderingContext.shaderSource()")}} を使用して GLSL ソースコードを結び付け、最後に {{domxref("WebGLRenderingContext.compileShader()")}} を呼び出してシェーダーを完成させコンパイルします。この時点では **WebGLShader** はまだ使用可能な形になっておらず、 {{domxref("WebGLProgram")}} に関連付ける必要があります。

```js
function createShader(gl, sourceCode, type) {
  // gl.VERTEX_SHADER または gl.FRAGMENT_SHADER のどちらかをコンパイル
  const shader = gl.createShader(type);
  gl.shaderSource(shader, sourceCode);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    throw `WebGL プログラムをコンパイルできませんでした。\n\n${info}`;
  }
  return shader;
}
```

シェーダーの取り付けについては {{domxref("WebGLProgram")}} を参照してください。

## 例

### 頂点シェーダーの作成

シェーダーのソースコード文字列の書き込みのアクセスには、他にも多くの戦略があることに注意してください。これらの例は説明のためのものです。

```js
const vertexShaderSource =
  "attribute vec4 position;\n" +
  "void main() {\n" +
  "  gl_Position = position;\n" +
  "}\n";

// 上の例の createShader 関数を使う
const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
```

### フラグメントシェーダーの作成

```js
const fragmentShaderSource =
  "void main() {\n" + "  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n" + "}\n";

// 上の例の createShader 関数を使う
const fragmentShader = createShader(
  gl,
  fragmentShaderSource,
  gl.FRAGMENT_SHADER,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.bindAttribLocation()")}}
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
