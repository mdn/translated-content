---
title: "HTMLSourceElement: src プロパティ"
short-title: src
slug: Web/API/HTMLSourceElement/src
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

**`src`** は {{domxref("HTMLSourceElement")}} インターフェイスのプロパティで、要素のソースとして使用するメディアリソースの URL を示す文字列です。

このプロパティは、{{htmlelement("audio")}} 要素または {{htmlelement("video")}} 要素に含まれている {{HTMLElement("source")}} 要素の `src` 属性を反映します。その {{HTMLElement("source")}} 要素が {{htmlelement("picture")}} 要素に含まれている場合、このプロパティは意味を持たず、無視されます。

## 値

文字列で、要素内で使用するソースリソースの URL です。

## 例

```html
<video>
  <source
    id="el"
    src="large.webp"
    type="video/webp"
    media="screen and (600px <= width <= 800px)" />
</video>
```

```js
const el = document.getElementById("el");
console.log(el.src); // 出力結果: "large.webp"
el.src = "medium.webp"; // src の値を更新
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLSourceElement.type")}}
- {{domxref("HTMLSourceElement.srcset")}}
- {{domxref("HTMLSourceElement.media")}}
- {{domxref("HTMLSourceElement.sizes")}}
- {{htmlelement("source")}}
- {{htmlelement("audio")}}
- {{htmlelement("video")}}
