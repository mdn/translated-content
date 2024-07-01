---
title: "HTMLAnchorElement: rel プロパティ"
slug: Web/API/HTMLAnchorElement/rel
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLAnchorElement.rel`** プロパティは [`rel`](/ja/docs/Web/HTML/Attributes/rel) 属性を反映しています。これは、空白で区切られたリンク種別のリストの入った文字列であり、{{HTMLElement("a")}} 要素で表されるリソースと現在の文書との関係を示します。

## 値

文字列です。

## 例

```js
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  alert(`Rel: ${anchor.rel}`);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("area")}} および {{HTMLElement("link")}} の同等のプロパティである {{domxref("HTMLAreaElement.rel")}} および {{domxref("HTMLLinkElement.rel")}}
- まったく同じリストをトークンとして扱うもの: {{domxref("HTMLAnchorElement.relList")}}
