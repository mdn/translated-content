---
title: "HTMLLinkElement: blocking プロパティ"
short-title: blocking
slug: Web/API/HTMLLinkElement/blocking
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

**`blocking`** は {{domxref("HTMLLinkElement")}} インターフェイスの読み取り専用プロパティで、外部リソースの取得中にブロックする操作を含む生きた {{domxref("DOMTokenList")}} オブジェクトを返します。{{HTMLElement("link")}} 要素の [`blocking`](/ja/docs/Web/HTML/Reference/Elements/link#blocking) コンテンツ属性を反映します。

## 値

生きた {{domxref("DOMTokenList")}} オブジェクトです。

`blocking` プロパティ自体は読み取り専用であり、`DOMTokenList` オブジェクトを置き換えることはできません。ただし、`blocking` プロパティに直接値を代入することはできます。これは、その {{domxref("DOMTokenList/value", "value")}} プロパティに代入するのと同じです。また、{{domxref("DOMTokenList/add", "add()")}}、{{domxref("DOMTokenList/remove", "remove()")}}、{{domxref("DOMTokenList/replace", "replace()")}}、{{domxref("DOMTokenList/toggle", "toggle()")}} メソッドを使って、`DOMTokenList` オブジェクトを変更することもできます。

## 例

```html
<link
  id="el"
  rel="stylesheet"
  href="/example.css"
  blocking="render"
  crossorigin />
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // 出力結果: DOMTokenList ["render"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLScriptElement.blocking")}}
- {{domxref("HTMLStyleElement.blocking")}}
