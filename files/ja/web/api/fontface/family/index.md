---
title: "FontFace: family プロパティ"
short-title: family
slug: Web/API/FontFace/family
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Font Loading API")}}

**`FontFace.family`** プロパティにより、 {{domxref("FontFace")}} オブジェクトのフォントファミリを取得したり設定したりすることができます。

この値は、 [`font-family`](/ja/docs/Web/CSS/font-family) プロパティを使用して要素をスタイル設定するときに、特定のフォントフェイスに対して名前を照合するために用いられます。
任意の名前を使用することができ、これは基盤のフォントデータで指定した名前を上書きします。

このプロパティは {{cssxref("@font-face")}} の {{cssxref("@font-face/font-family", "font-family")}} 記述子と等価です。

## 値

文字列です。

## 例

```js
let fontFace = new FontFace(
  "Roboto",
  "url(https://fonts.example.com/roboto.woff2)",
);
console.log(fontFace.family); // 'Roboto'

fontFace.family = "newRoboto";
console.log(fontFace.family); // 'newRoboto'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
