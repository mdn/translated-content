---
title: "HTMLLinkElement: rel プロパティ"
short-title: rel
slug: Web/API/HTMLLinkElement/rel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`rel`** は {{domxref("HTMLLinkElement")}} インターフェイスのプロパティで、[`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel) 属性を反映します。これは、空白で区切られたリンク種別のリストの入った文字列であり、{{HTMLElement("link")}} 要素で表されるリソースと現在の文書との関係を示します。

この属性の最も一般的な使用法は、外部のスタイルシートへのリンクを指定する場合です。
プロパティに `stylesheet` を設定し、 [`href`](/ja/docs/Web/HTML/Reference/Elements/link#href) 属性にページをフォーマットする外部スタイルシートの URL を設定します。

## 値

文字列です。

## 例

```js
const links = document.getElementsByTagName("link");
for (const link of links) {
  console.log(link);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("a")}} および {{HTMLElement("area")}} の同等のプロパティである {{domxref("HTMLAnchorElement.rel")}} および {{domxref("HTMLAreaElement.rel")}}
- まったく同じリストをトークンとして扱うもの: {{domxref("HTMLLinkElement.relList")}}
