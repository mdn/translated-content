---
title: "Element: className プロパティ"
short-title: className
slug: Web/API/Element/className
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`className`** は {{domxref("Element")}} インターフェイスのプロパティで、この要素の [`class` 属性](/ja/docs/Web/HTML/Global_attributes/class)の値を取得したり設定したりします。

## 値

文字列変数で、現在の要素のクラスまたは空白区切りのクラス群を表します。

## 例

```js
const el = document.getElementById("item");
el.className = el.className === "active" ? "inactive" : "active";
```

## メモ

このプロパティでは、 `className` という名前が `class` の代わりに使用されています。
これは DOM を操作するために使用される多くの言語と "class" キーワードが競合するためです。

`className` は {{domxref("SVGAnimatedString")}} のインスタンスにも、`element` が {{domxref("SVGElement")}} であれば存在する可能性があります。 SVG 要素を扱っている場合は、要素の `className` は {{domxref("Element.getAttribute")}} や {{domxref("Element.setAttribute")}} を使用して取得したり設定したりした方がいいでしょう。しかし、その要素の [`class` 属性](/ja/docs/Web/HTML/Global_attributes/class)が空であった場合、{{domxref("Element.getAttribute")}} は`""` ではなく [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) を返すことに注意してください。

```js
elm.setAttribute("class", elm.getAttribute("class"));
```

> **メモ:** `class` は **HTML 属性**であり、 `className` は **DOM プロパティ**です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("element.classList")}}
