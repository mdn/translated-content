---
title: WebGLRenderingContext.shaderSource()
slug: Web/API/WebGLRenderingContext/shaderSource
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.shaderSource()`** メソッドは、{{domxref("WebGLShader")}} のソースコードを設定します。

## 構文

```
void gl.shaderSource(shader, source);
```

### 引数

- shader
  - : ソースコードを設定する {{domxref("WebGLShader")}} オブジェクト。
- source
  - : 設定する GLSL ソースコードを含む {{domxref("DOMString")}}。

### 返り値

ありません。

## 例

```js
var shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, originalSource);

var source = gl.getShaderSource(shader);
```

## 仕様策定状況

| 仕様                                                                                         | 策定状況                             | コメント                                 |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------- |
| {{SpecName('WebGL', "#5.14.9", "shaderSource")}}                             | {{Spec2('WebGL')}}             | 初回定義。                               |
| {{SpecName('OpenGL ES 2.0', "glShaderSource.xml", "glShaderSource")}} | {{Spec2('OpenGL ES 2.0')}} | OpenGL API (と同様の) マニュアルページ。 |

## ブラウザーの対応

{{Compat("api.WebGLRenderingContext.shaderSource")}}

## 関連項目

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
