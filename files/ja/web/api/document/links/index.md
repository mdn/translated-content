---
title: "Document: links プロパティ"
short-title: links
slug: Web/API/Document/links
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`links`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、文書中のすべての {{HTMLElement("area")}} 要素および {{HTMLElement("a")}} 要素のうち、[href](/ja/docs/Web/HTML/Element/a#href) 属性の値があるものの集合を返します。

## 値

{{domxref("HTMLCollection")}} です。

## 例

```js
for (const link of document.links) {
  const linkHref = document.createTextNode(link.href);
  const lineBreak = document.createElement("br");
  document.body.appendChild(linkHref);
  document.body.appendChild(lineBreak);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
