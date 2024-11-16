---
title: "FontFace: descentOverride プロパティ"
short-title: descentOverride
slug: Web/API/FontFace/descentOverride
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Font Loading API")}}

**`descentOverride`** は {{domxref("FontFace")}} インターフェイスのプロパティで、 {{cssxref("@font-face/descent-override")}} 記述子の値を返したり設定したりします。
使用できる値は、使用するメトリックをフォントファイルから取得することを示す `normal` か、パーセント値です。

## 値

文字列です。

## 例

```js
let fontFace = new FontFace(
  "Roboto",
  "url(https://fonts.example.com/roboto.woff2)",
  { descentOverride: "90%" },
);
console.log(fontFace.descentOverride); // 90%
fontFace.descentOverride = "normal";
console.log(fontFace.descentOverride); // 'normal'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
