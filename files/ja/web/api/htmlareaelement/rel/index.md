---
title: "HTMLAreaElement: rel プロパティ"
short-title: rel
slug: Web/API/HTMLAreaElement/rel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`HTMLAreaElement.rel`** プロパティは [`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel) 属性を反映しています。これは、空白で区切られたリンク種別のリストの入った文字列であり、{{HTMLElement("area")}} 要素で表されるリソースと現在の文書との関係を示します。

## 値

文字列です。

## 例

```js
const areas = document.getElementsByTagName("area");
for (const area of areas) {
  console.log(`Rel: ${area.rel}`);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("a")}} および {{HTMLElement("link")}} の同等のプロパティである {{domxref("HTMLAnchorElement.rel")}} および {{domxref("HTMLLinkElement.rel")}}
- まったく同じリストをトークンとして扱うもの: {{domxref("HTMLAreaElement.relList")}}
