---
title: WebGLRenderingContext.createShader()
slug: Web/API/WebGLRenderingContext/createShader
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **WebGLRenderingContext.createShader()** メソッドは、{{domxref("WebGLShader")}} を作成します。それからさらに、 {{domxref("WebGLRenderingContext.shaderSource()")}} と {{domxref("WebGLRenderingContext.compileShader()")}} を用いて設定できます。

## 構文

```
WebGLShader gl.createShader(type);
```

### 引数

- `type`
  - : `gl.VERTEX_SHADER` と `gl.FRAGMENT_SHADER` のどちらか

## 例

用例については {{domxref("WebGLShader")}} を参照してください。

## 仕様策定状況

| 仕様                                                                                         | 策定状況                             | コメント                  |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------- |
| {{SpecName('WebGL', "#5.14.9", "createShader")}}                             | {{Spec2('WebGL')}}             | 初回定義。                |
| {{SpecName('OpenGL ES 2.0', "glCreateShader.xml", "glCreateShader")}} | {{Spec2('OpenGL ES 2.0')}} | OpenGL マニュアルページ。 |

## ブラウザーの対応

{{Compat("api.WebGLRenderingContext.createShader")}}

## 関連項目

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
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
