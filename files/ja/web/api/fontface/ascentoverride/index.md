---
title: "FontFace: ascentOverride プロパティ"
short-title: ascentOverride
slug: Web/API/FontFace/ascentOverride
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Font Loading API")}}

**`ascentOverride`** は {{domxref("FontFace")}} インターフェイスのプロパティで、フォントの ascent メトリック、つまり CSS がインライン整形コンテキストで行ボックスをレイアウトするために使用するベースラインからの高さを返したり設定したりします。

このプロパティは {{cssxref("@font-face")}} の {{cssxref("@font-face/ascent-override")}} 記述子と等価です。

## 値

文字列です。使用可能な値は、使用するメトリクスをフォントファイルから取得することを示す `normal` か、パーセント値です。

このプロパティは {{cssxref("@font-face/ascent-override")}} 記述子と同じ値を受け入れます。

## 例

```js
let fontFace = new FontFace(
  "Roboto",
  "url(https://fonts.example.com/roboto.woff2)",
  { ascentOverride: "90%" },
);
console.log(fontFace.ascentOverride); // 90%
fontFace.ascentOverride = "normal";
console.log(fontFace.ascentOverride); // 'normal'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
