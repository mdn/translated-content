---
title: "HTMLLinkElement: relList プロパティ"
short-title: relList
slug: Web/API/HTMLLinkElement/relList
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

**`relList`** は {{domxref("HTMLLinkElement")}} インターフェイスの読み取り専用プロパティで、{{domxref("DOMTokenList")}} オブジェクトを返します。このオブジェクトは生きたもので、{{HTMLElement("link")}} 要素で表されるリソースと現在の文書との関係を示すリンク種別のセットが含まれます。このプロパティは、{{HTMLElement("link")}} 要素の [`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel) コンテンツ属性を反映します。

## 値

生きた {{domxref("DOMTokenList")}} オブジェクトです。

`relList` プロパティ自体は読み取り専用であり、{{domxref("DOMTokenList")}} オブジェクトを別のオブジェクトに置き換えることはできませんが、`relList` プロパティには直接代入できます。これは、その {{domxref("DOMTokenList/value", "value")}} プロパティに代入するのと同じです。また、{{domxref("DOMTokenList/add", "add()")}}、{{domxref("DOMTokenList/remove", "remove()")}}、{{domxref("DOMTokenList/replace", "replace()")}}、{{domxref("DOMTokenList/toggle", "toggle()")}} メソッドを使って {{domxref("DOMTokenList")}} オブジェクトを変更することもできます。

## 例

```js
const links = document.getElementsByTagName("link");
for (const link of links) {
  console.log("New link found.");
  link.relList.forEach((relEntry) => {
    console.log(relEntry);
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("a")}} および {{HTMLElement("area")}} の同等のプロパティである {{domxref("HTMLAnchorElement.relList")}} および {{domxref("HTMLAreaElement.relList")}}
- まったく同じリストを文字列の空白区切りトークンとして扱うもの: {{domxref("HTMLLinkElement.rel")}}
