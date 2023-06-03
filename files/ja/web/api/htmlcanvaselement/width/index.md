---
title: "HTMLCanvasElement: width プロパティ"
slug: Web/API/HTMLCanvasElement/width
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.width`** プロパティは CSS ピクセル数として解釈される正の整数であり、この {{HTMLElement("canvas")}} 要素の [`width`](/ja/docs/Web/HTML/Element/canvas#width) 属性を反映します。この属性が指定されなかった場合、または負の数など、無効な値をが設定された場合、既定値の `300` が使用されます。

これはキャンバスのサイズを制御する 2 つのプロパティのうちの 1 つで、もう一方は {{domxref("HTMLCanvasElement.height")}} です。

## 値

数値です。

## 例

この {{HTMLElement("canvas")}} 要素があったとします。

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

次のコードでキャンバスの幅を取得することができます。

```js
const canvas = document.getElementById("canvas");
console.log(canvas.width); // 300
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCanvasElement")}}: `HTMLCanvasElement.width` プロパティを定義しているインターフェイス
- {{domxref("HTMLCanvasElement.height")}}: キャンバスのサイズを制御するために使用される他のプロパティ
