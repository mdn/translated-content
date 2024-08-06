---
title: WEBGL_color_buffer_float
slug: Web/API/WEBGL_color_buffer_float
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebGL")}}

**`WEBGL_color_buffer_float`** 拡張は [WebGL API](/ja/docs/Web/API/WebGL_API) の一部で、 32 ビット浮動小数点数の色バッファーにレンダリングする機能を追加します。

WebGL 拡張は {{domxref("WebGLRenderingContext.getExtension()")}} メソッドを使用することで利用することができます。詳細な情報については、[WebGL チュートリアル](/ja/docs/Web/API/WebGL_API/Using_Extensions)の [Using Extensions](/ja/docs/Web/API/WebGL_API/Tutorial) も参照してください。

> [!NOTE]
> この拡張機能は {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}} コンテキストでのみ利用することができます。 {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} では {{domxref("EXT_color_buffer_float")}} 拡張を使用してください。
>
> {{domxref("OES_texture_float")}} 拡張は、暗黙にこの拡張を有効にします。

## 定数

- `ext.RGBA32F_EXT`
  - : RGBA 32 ビット浮動小数点数でカラーレンダリング可能な形式。
- `ext.RGB32F_EXT` ({{deprecated_inline}})
  - : RGB 32 ビット浮動小数点数で、カラーレンダリング可能な形式。
- `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`
  - : ?
- `ext.UNSIGNED_NORMALIZED_EXT`
  - : ?

## 拡張されるメソッド

この拡張機能は {{domxref("WebGLRenderingContext.renderbufferStorage()")}} を拡張します。

- `internalformat` 引数が `ext.RGBA32F_EXT` および `ext.RGB32F_EXT` ({{deprecated_inline}}) を受け付けるようになります。

## 例

```js
const ext = gl.getExtension("WEBGL_color_buffer_float");

gl.renderbufferStorage(gl.RENDERBUFFER, ext.RGBA32F_EXT, 256, 256);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- {{domxref("OES_texture_float")}}
