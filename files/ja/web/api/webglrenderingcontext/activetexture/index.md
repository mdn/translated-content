---
title: "WebGLRenderingContext: activeTexture() メソッド"
short-title: activeTexture()
slug: Web/API/WebGLRenderingContext/activeTexture
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.activeTexture()`** は [WebGL API](/ja/docs/Web/API/WebGL_API) のメソッドで、どのテクスチャユニットをアクティブにするかを指定します。

## 構文

```js-nolint
activeTexture(texture)
```

### 引数

- `texture`
  - : アクティブにするテクスチャユニット。値は `gl.TEXTUREI` で、 _I_ は 0 から `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1` の範囲内です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

_texture_ が `gl.TEXTUREI` の 1 つでない場合、すなわち _I_ が 0 から `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1` の範囲にない場合、 `gl.INVALID_ENUM` エラーが発生します。

## 例

次の呼び出しは `gl.TEXTURE1` を現在のテクスチャとして選択します。テクスチャの状態を変更する後続の呼び出しは、このテクスチャに影響します。

```js
gl.activeTexture(gl.TEXTURE1);
```

テクスチャユニットの数は実装に依存しますが、定数 `MAX_COMBINED_TEXTURE_IMAGE_UNITS` を使って知ることができます。仕様では 8 以上です。

```js
gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
```

アクティブなテクスチャを取得するには、定数 `ACTIVE_TEXTURE` を問い合わせます。

```js
gl.activeTexture(gl.TEXTURE0);
gl.getParameter(gl.ACTIVE_TEXTURE);
// "33984" を返す（0x84C0、gl.TEXTURE0 列挙値）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.getParameter()")}}
