---
title: "HTMLIFrameElement: srcdoc プロパティ"
short-title: srcdoc
slug: Web/API/HTMLIFrameElement/srcdoc
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef('HTMLIFrameElement')}}

**`srcdoc`** は {{domxref("HTMLIFrameElement")}} インターフェイスのプロパティで、このページの内容を指定します。

## 例

```js
const iframe = document.createElement("iframe");
iframe.srcdoc = `<!DOCTYPE html><p>Hello World!</p>`;
document.body.appendChild(iframe);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
