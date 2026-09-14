---
title: "TextMetrics: fontBoundingBoxDescent プロパティ"
short-title: fontBoundingBoxDescent
slug: Web/API/TextMetrics/fontBoundingBoxDescent
l10n:
  sourceCommit: 58033f5e79bc5f78a339f8fa085878e1fc5ccac7
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

`fontBoundingBoxDescent` は {{domxref("TextMetrics")}} インターフェイスの読み取り専用プロパティで、{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性で示される水平線から、テキストの描画に使用されるすべてのフォントの中で最も高い境界矩形の下端までの距離を CSS ピクセル単位で返します。

## 値

数値で、CSS ピクセル単位です。

## 例

以下のコードは、特定のフォントでテキストの `fontBoundingBoxDescent` を取得する方法を示しています。

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "25px serif";
const text = "Foo";

const textMetrics = ctx.measureText(text); // TextMetrics オブジェクトを返す
const descentCssPixels = textMetrics.fontBoundingBoxDescent;
```

```html hidden
<p id="log"></p>
```

```js hidden
const log = document.getElementById("log");
log.innerText = `fontBoundingBoxDescent: ${descentCssPixels}`;
```

25px のセリフ書体で "Foo" というテキストの CSS ピクセルでのディセントは下記の通りです。

{{EmbedLiveSample('Examples', 100, 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TextMetrics.fontBoundingBoxAscent")}}
- {{domxref("TextMetrics")}}
