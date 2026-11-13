---
title: "OffscreenCanvas: height プロパティ"
short-title: height
slug: Web/API/OffscreenCanvas/height
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`height`** プロパティは、 {{domxref("OffscreenCanvas")}} オブジェクトの幅を返したり設定したりします。

## 値

このオフスクリーンキャンバスの高さを CSS ピクセル数で表す正の整数です。

## 例

新しいオフスクリーンキャンバスを作成し、オフスクリーンキャンバスの高さを返し、または設定します。

```js
const offscreen = new OffscreenCanvas(256, 256);
offscreen.height; // 256
offscreen.height = 512;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("OffscreenCanvas")}}: このプロパティの所属先のインターフェイス
