---
title: "HTMLLinkElement: relList プロパティ"
short-title: relList
slug: Web/API/HTMLLinkElement/relList
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

**`HTMLLinkElement.relList`** は読み取り専用プロパティで、[`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel) 属性を反映します。 これは生きた {{domxref("DOMTokenList")}} で、{{HTMLElement("link")}} 要素で表されるリソースと現在のドキュメントの間の関係を示すリンク種別のセットが入ります。

このプロパティ自体は読み取り専用です。つまり、{{domxref("DOMTokenList")}} を別のものに置き換えることはできませんが、その内容は変更できます。

## 値

生きた {{domxref("DOMTokenList")}} です。

## 例

```js
const links = document.getElementsByTagName("link");
const length = links.length;
for (const link of links) {
  const listLength = list.length;
  console.log("New link found.");
  relList.forEach((relEntry) => {
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
