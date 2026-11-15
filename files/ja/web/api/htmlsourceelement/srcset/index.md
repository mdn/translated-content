---
title: "HTMLSourceElement: srcset プロパティ"
short-title: srcset
slug: Web/API/HTMLSourceElement/srcset
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

**`srcset`** は {{domxref("HTMLSourceElement")}} インターフェイスのプロパティで、候補画像をカンマ区切りで並べた文字列です。

それぞれの候補画像には、その要素のソースとして使用する画像リソースの URL が含まれます。また、画像を使用する状況を示す記述子が含まれる場合もあります。記述子は、要素の幅を示す数値の後に `'w'` が付いたものか、デバイスピクセル密度を示す数値の後に `'x'` が付いたものです。

{{HTMLElement("source")}} 要素が {{htmlelement("picture")}} 要素に含まれている場合、このプロパティはその `srcset` 属性を反映します。その要素が {{htmlelement("audio")}} 要素または {{htmlelement("video")}} 要素に含まれている場合、このプロパティは意味を持たず、無視されます。その場合は代わりに {{domxref("HTMLSourceElement.src", "src")}} 属性が使用されます。

## 値

文字列です。

## 例

```html
<picture>
  <source
    id="el"
    srcset="smile.png, smile-1.5x.png 1.5x, smile-2x.png 2x"
    type="image/png" />
</picture>
```

```js
const el = document.getElementById("el");
console.log(el.srcset); // 出力結果: "smile.png, smile-1.5x.png 1.5x, smile-large 800w"
el.srcset = "smile.png, smile-med.png 600w, smile-large.png 800w"; // srcset の値を更新
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLSourceElement.type")}}
- {{domxref("HTMLSourceElement.src")}}
- {{domxref("HTMLSourceElement.media")}}
- {{domxref("HTMLSourceElement.sizes")}}
- {{htmlelement("source")}}
- {{htmlelement("picture")}}
