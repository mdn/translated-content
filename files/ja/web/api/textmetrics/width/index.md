---
title: "TextMetrics: width プロパティ"
short-title: width
slug: Web/API/TextMetrics/width
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`width`** は {{domxref("TextMetrics")}} インターフェイスの読み取り専用プロパティで、このテキストの送り幅（そのインラインボックスの幅）を CSS ピクセル単位で保持します。

## 例

この {{HTMLElement("canvas")}} 要素から始めます。

```html
<canvas id="canvas"></canvas>
```

以下のコードを使用して {{domxref("TextMetrics")}} オブジェクトを取得します。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let text = ctx.measureText("foo"); // TextMetrics オブジェクト
text.width; // 16;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TextMetrics")}}
