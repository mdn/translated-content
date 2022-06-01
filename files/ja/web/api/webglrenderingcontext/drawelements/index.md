---
title: WebGLRenderingContext.drawElements()
slug: Web/API/WebGLRenderingContext/drawElements
tags:
  - API
  - メソッド
  - リファレンス
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.drawElements
translation_of: Web/API/WebGLRenderingContext/drawElements
---
{{APIRef("WebGL")}}

**`WebGLRenderingContext.drawElements()`** は [WebGL API](/ja/docs/Web/API/WebGL_API) のメソッドで、配列データのプリミティブを描画します。

## 構文

```js
drawElements(mode, count, type, offset)
```

### 引数

- `mode`

  - : {{domxref("WebGL_API/Types", "GLenum")}} で、描画するプリミティブの型を指定します。取りうる値は次の通りです。

    - `gl.POINTS`: 単一の点を描きます。
    - `gl.LINE_STRIP`: 直線を次の頂点に向けて描きます。
    - `gl.LINE_LOOP`: 直線を次の頂点に向けて描き、最後の頂点を最初の頂点に接続します。
    - `gl.LINES`: 2 つの頂点の間に線を描きます。
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: 3 つの頂点のグループで三角形を描きます。

- count
  - : {{domxref("WebGL_API/Types", "GLsizei")}} で、レンダリングする要素配列バッファーの要素数を指定します。例えば、 `gl.LINES` を使ってワイヤーフレームの三角形を描く場合、線 1 本あたり 2 つの端点× 3 本 ＝ 6 要素になります。しかし、同じワイヤーフレームの三角形を `gl.LINE_STRIP` で描画する場合、要素配列バッファーは 1 本目の終点/ 2 本目の始点、 2 本目の終点/ 3 本目の始点のインデックスを繰り返さないので、 `count` は 4 個となります。同じ三角形を `gl.LINE_LOOP` で描画する場合、要素配列バッファーは最初と最後の頂点を繰り返さないので、 `count` は 3 となります。
- type

  - : {{domxref("WebGL_API/Types", "GLenum")}} で、要素の配列バッファーの値の型を指定します。取りうる値は次の通りです。

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    - {{domxref("OES_element_index_uint")}} 拡張を使用する場合:

      - `gl.UNSIGNED_INT`

- offset
  - : {{domxref("WebGL_API/Types", "GLintptr")}} で、要素の配列バッファー内における倍とオフセットを指定します。指定された `type` の大きさの正しい倍数でなければなりません。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `mode` が受け付けられる値のいずれでもなかった場合、 `gl.INVALID_ENUM` エラーが発生します。
- `offset` が指定された型の正しい倍数でなければ、 `gl.INVALID_OPERATION` エラーが発生します。
- `count` が負の数であった場合は、 `gl.INVALID_VALUE` エラーが発生します。

## 例

```js
gl.drawElements(gl.POINTS, 8, gl.UNSIGNED_BYTE, 0);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("OES_element_index_uint")}}
- {{domxref("WEBGL_multi_draw.multiDrawElementsWEBGL()")}}
