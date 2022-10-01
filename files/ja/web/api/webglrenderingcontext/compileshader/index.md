---
title: WebGLRenderingContext.compileShader()
slug: Web/API/WebGLRenderingContext/compileShader
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **WebGLRenderingContext.compileShader()** メソッドは、GLSL シェーダーをバイナリへコンパイルします。これは {{domxref("WebGLProgram")}} に使用することができます。

## 構文

```
void gl.compileShader(shader);
```

### 引数

- `shader`
  - : フラグメントか頂点の {{domxref("WebGLShader")}}。

## 例

```js
var shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, shaderSource);
gl.compileShader(shader);
```

## 仕様策定状況

| 仕様                                                                                             | 策定状況                             | コメント                  |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------- |
| {{SpecName('WebGL', "#5.14.9", "compileShader")}}                                 | {{Spec2('WebGL')}}             | 初回定義。                |
| {{SpecName('OpenGL ES 2.0', "glCompileShader.xml", "glCompileShader")}} | {{Spec2('OpenGL ES 2.0')}} | OpenGL マニュアルページ。 |

## ブラウザーの対応

{{Compat("api.WebGLRenderingContext.compileShader")}}

## 関連項目

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
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
