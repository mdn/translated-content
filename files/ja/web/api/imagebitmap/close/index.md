---
title: "ImageBitmap: close() メソッド"
short-title: close()
slug: Web/API/ImageBitmap/close
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Canvas API")}}

**`ImageBitmap.close()`** メソッドは、`ImageBitmap` に関連するすべてのグラフィカルリソースを破棄します。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// gl コンテキストを使用して描画する。

const bitmap = offscreen.transferToImageBitmap();
// ImageBitmap { width: 256, height: 256 }

bitmap.close();
// ImageBitmap { width: 0, height: 0 } — 破棄
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス、{{domxref("ImageBitmap")}}
