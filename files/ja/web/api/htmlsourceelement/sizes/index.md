---
title: "HTMLSourceElement: sizes プロパティ"
short-title: sizes
slug: Web/API/HTMLSourceElement/sizes
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

**`sizes`** は {{domxref("HTMLSourceElement")}} インターフェイスのプロパティで、リソースに適用される、ブレークポイント間のサイズを 1 つ以上並べた文字列です。

このプロパティは、{{HTMLElement("source")}} 要素の `sizes` 属性を反映します。

## 値

文字列です。

## 例

```html
<picture>
  <source
    id="el"
    srcset="medium-pic.jpg"
    type="image/jpeg"
    sizes="(50em <= width <= 60px) 50em,
           (30em <= width < 50em) 30em" />
</picture>
```

```js
const el = document.getElementById("el");
console.log(el.sizes); // 出力結果: "(50em <= width <= 60px) 50em, (30em <= width < 50em) 30em"
el.sizes = "(50em <= width <= 60px) 100em, (30em <= width < 50em) 60em"; // sizes の値を更新
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLImageElement.sizes")}}
- {{domxref("HTMLSourceElement.media")}}
- {{domxref("HTMLSourceElement.type")}}
- {{domxref("HTMLSourceElement.src")}}
- {{domxref("HTMLSourceElement.srcset")}}
- {{htmlelement("source")}}
- {{htmlelement("picture")}}
- {{htmlelement("audio")}}
- {{htmlelement("video")}}
