---
title: "FontFace: lineGapOverride プロパティ"
short-title: lineGapOverride
slug: Web/API/FontFace/lineGapOverride
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Font Loading API")}}

**`lineGapOverride`** は {{domxref("FontFace")}} インターフェイスのプロパティで、 {{cssxref("@font-face/line-gap-override")}} 記述子の値を返したり設定したりします。
使用可能な値は `normal` で、使用するメトリックをフォントファイルから取得することを示します。

## 値

文字列です。

## 例

```js
let fontFace = new FontFace(
  "Roboto",
  "url(https://fonts.example.com/roboto.woff2)",
  { lineGapOverride: "90%" },
);
console.log(fontFace.lineGapOverride); // 90%
fontFace.lineGapOverride = "normal";
console.log(fontFace.lineGapOverride); // 'normal'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
