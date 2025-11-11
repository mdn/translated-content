---
title: "OffscreenCanvas: OffscreenCanvas() コンストラクター"
short-title: OffscreenCanvas()
slug: Web/API/OffscreenCanvas/OffscreenCanvas
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`OffscreenCanvas()`** コンストラクターは、新しい {{domxref("OffscreenCanvas")}} オブジェクトを生成します。

## 構文

```js-nolint
new OffscreenCanvas(width, height)
```

### 引数

- `width`
  - : オフスクリーンキャンパスの横幅を表します。
- `height`
  - : オフスクリーンキャンバスの高さを表します。

## 例

この例では `OffscreenCanvas()` コンストラクターを用いてオフスクリーンキャンバスを新しく生成します。次に、 {{domxref("OffscreenCanvas.getContext()", "getContext()")}} メソッドを使用して [WebGL](/ja/docs/Web/API/WebGL_API) コンテキストを初期化します。

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このコンストラクターは、 {{domxref("OffscreenCanvas")}} インターフェイスに属します。
