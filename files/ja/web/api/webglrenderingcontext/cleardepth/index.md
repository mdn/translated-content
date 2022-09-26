---
title: WebGLRenderingContext.clearDepth()
slug: Web/API/WebGLRenderingContext/clearDepth
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.clearDepth()`** メソッドは、深度バッファーを消去する値を指定します。

この指定は、{{domxref("WebGLRenderingContext.clear", "clear()")}} メソッドを呼ぶときに使用される深度の数値です。値は 0 から 1 に丸められます。

## 構文

```
void gl.clearDepth(depth);
```

### 引数

- `depth`
  - : 深度の値を指定する {{domxref("GLclampf")}} で、深度バッファーを消去するときに使われる値です。既定値は 1 です。

### 返り値

ありません。

## 例

```js
gl.clearDepth(0.5);
```

現在の深度を消去する値を取得するには、`DEPTH_CLEAR_VALUE` 定数で問い合わせます。

```js
gl.getParameter(gl.DEPTH_CLEAR_VALUE);
// 0.5
```

## 仕様策定状況

| 仕様                                                                                     | 策定状況                             | コメント                        |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------- |
| {{SpecName('WebGL', "#5.14.3", "clearDepth")}}                             | {{Spec2('WebGL')}}             | 初回定義。                      |
| {{SpecName('OpenGL ES 2.0', "glClearDepthf.xml", "glClearDepthf")}} | {{Spec2('OpenGL ES 2.0')}} | OpenGL API のマニュアルページ。 |

## ブラウザーの対応

{{Compat("api.WebGLRenderingContext.clearDepth")}}

## 関連項目

- {{domxref("WebGLRenderingContext.clear()")}}
- {{domxref("WebGLRenderingContext.clearColor()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
