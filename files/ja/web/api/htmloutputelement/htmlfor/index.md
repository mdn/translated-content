---
title: "HTMLOutputElement: htmlFor プロパティ"
short-title: htmlFor
slug: Web/API/HTMLOutputElement/htmlFor
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{ APIRef("HTML DOM") }}

**`htmlFor`** は {{domxref("HTMLOutputElement")}} インターフェイスの読み取り専用プロパティで、計算に入力値を提供する（またはその他の形で影響を受ける）要素の `id` のリストを含む、生きた {{domxref("DOMTokenList")}} オブジェクトを返します。これは、{{HTMLElement("output")}} 要素の [`for`](/ja/docs/Web/HTML/Reference/Elements/output#for) コンテンツ属性を反映しています。

## 値

生きた {{domxref("DOMTokenList")}} オブジェクトです。

`htmlFor` プロパティ自体は、`DOMTokenList` オブジェクトを置き換えることができないという意味で読み取り専用ですが、`htmlFor` プロパティに直接値を代入することは可能です。これは、その {{domxref("DOMTokenList/value", "value")}} プロパティに値を代入することと同等です。同時に、{{domxref("DOMTokenList/add", "add()")}}、{{domxref("DOMTokenList/remove", "remove()")}}、{{domxref("DOMTokenList/replace", "replace()")}}、{{domxref("DOMTokenList/toggle", "toggle()")}} メソッドを使用して `DOMTokenList` オブジェクトを変更することもできます。

## 例

```js
const outputElem = document.getElementById("result");
for (const id of outputElem.htmlFor.split(" ")) {
  const elem = document.getElementById(id);
  elem.style.outline = "2px solid red";
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("output")}}
