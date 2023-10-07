---
title: "HTMLAnchorElement: relList プロパティ"
slug: Web/API/HTMLAnchorElement/relList
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLAnchorElement.relList`** は読み取り専用プロパティで、[`rel`](/ja/docs/Web/HTML/Attributes/rel) 属性を反映します。 これは生きた {{domxref("DOMTokenList")}} で、{{HTMLElement("a")}} 要素で表されるリソースと現在のドキュメントの間の関係を示すリンク種別のセットが入ります。

このプロパティ自体は読み取り専用です。 つまり、 {{domxref("DOMTokenList")}} を別のものに置き換えることはできませんが、その内容は変更できます。

## 値

文字列の生きた {{domxref("DOMTokenList")}} です。

## 例

```js
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  const list = anchor.relList;
  console.log(
    `relList に ${list.length} 個のリンク種別がある新しいアンカーノードが見つかりました。`,
  );
  list.forEach((relValue) => {
    console.log(relValue);
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("area")}} および {{HTMLElement("link")}} の同等のプロパティである {{domxref("HTMLAreaElement.relList")}} および {{domxref("HTMLLinkElement.relList")}}
- まったく同じリストを文字列の空白区切りトークンとして扱うもの: {{domxref("HTMLAnchorElement.rel")}}
