---
title: "ImageData: height プロパティ"
slug: Web/API/ImageData/height
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Canvas API")}}

読み取り専用プロパティ **`ImageData.height`** は、{{domxref("ImageData")}} オブジェクトの行数を返します。

## 値

数値です。

## 例

この例では、幅 200 ピクセル、高さ 100 ピクセルの `ImageData` オブジェクトを生成します。したがって、`height` プロパティは `100` です。

```js
let imageData = new ImageData(200, 100);
console.log(imageData.height); // 100
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ImageData.width")}}
- {{domxref("ImageData")}}
