---
title: HTMLIFrameElement.srcdoc
slug: Web/API/HTMLIFrameElement/srcdoc
---

{{APIRef('HTMLIFrameElement')}}

**`srcdoc`** は {{domxref("HTMLIFrameElement")}} インターフェイスのプロパティで、このページの内容を指定します。

## 例

```js
var iframe = document.createElement("iframe");
iframe.srcdoc = `<!DOCTYPE html><p>Hello World!</p>`;
document.body.appendChild(iframe);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
