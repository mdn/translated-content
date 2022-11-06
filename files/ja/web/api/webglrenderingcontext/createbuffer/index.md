---
title: WebGLRenderingContext.createBuffer()
slug: Web/API/WebGLRenderingContext/createBuffer
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.createBuffer()`** メソッドは、頂点や色といったデータを格納する {{domxref("WebGLBuffer")}} を作成、初期化します。

## 構文

```
WebGLBuffer gl.createBuffer();
```

### 引数

ありません。

### 返り値

頂点や色といったデータを格納する {{domxref("WebGLBuffer")}} です。

## 例

### バッファーの作成

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var buffer = gl.createBuffer();
```

## 仕様策定状況

| 仕様                                                                                     | 策定状況                             | コメント                               |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------- |
| {{SpecName('WebGL', "#5.14.5", "createBuffer")}}                         | {{Spec2('WebGL')}}             | 初回定義。                             |
| {{SpecName('OpenGL ES 2.0', "glGenBuffers.xml", "glGenBuffers")}} | {{Spec2('OpenGL ES 2.0')}} | OpenGL API (と同様な) マニュアルページ |

## ブラウザーの対応

{{Compat("api.WebGLRenderingContext.createBuffer")}}

## 関連項目

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- 他のバッファー : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
