---
title: "HTMLIFrameElement: contentDocument プロパティ"
short-title: contentDocument
slug: Web/API/HTMLIFrameElement/contentDocument
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

iframe とその iframe の親文書が[同一オリジン](/ja/docs/Web/Security/Same-origin_policy)であった場合、[`Document`](/ja/docs/Web/API/Document)（すなわち、インラインフレーム内の閲覧コンテキスト内にあるアクティブな文書）を返します。そうでなければ `null` を返します。

## contentDocument の例

```js
const iframeDocument = document.querySelector("iframe").contentDocument;

iframeDocument.body.style.backgroundColor = "blue";
// これにより iframe が青くなる
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
