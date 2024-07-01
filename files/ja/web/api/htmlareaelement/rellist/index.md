---
title: "HTMLAreaElement: relList プロパティ"
slug: Web/API/HTMLAreaElement/relList
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLAreaElement.relList`** 読み取り専用プロパティは、[`rel`](/ja/docs/Web/HTML/Attributes/rel) 属性を反映しています。これは生きた {{domxref("DOMTokenList")}} で、 {{HTMLElement("area")}} 要素で表されるリソースと現在の文書との間の関係を示すリンク種別のセットが入ります。

このプロパティ自体は読み取り専用です。 つまり、 {{domxref("DOMTokenList")}} を別のものに置き換えることはできませんが、その内容は変更できます。

## 値

生きた文字列の {{domxref("DOMTokenList")}} です。

## 例

```js
const areas = document.getElementsByTagName("area");
const length = areas.length;

for (const area of areas) {
  console.log("新しい領域が見つかりました。");
  area.relList.forEach((relValue) => {
    console.log(relValue);
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("a")}} および {{HTMLElement("link")}} の同等のプロパティである {{domxref("HTMLAnchorElement.relList")}} および {{domxref("HTMLLinkElement.relList")}}
- まったく同じリストを文字列の空白区切りトークンとして扱うもの: {{domxref("HTMLAreaElement.rel")}}
