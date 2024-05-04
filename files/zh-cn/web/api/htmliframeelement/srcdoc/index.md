---
title: HTMLIFrameElement：srcdoc 属性
slug: Web/API/HTMLIFrameElement/srcdoc
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef('HTMLIFrameElement')}}

{{domxref("HTMLIFrameElement")}} 的 **`srcdoc`** 属性指定页面的内容。

## 示例

```js
const iframe = document.createElement("iframe");
iframe.srcdoc = `<!DOCTYPE html><p>你好，世界！</p>`;
document.body.appendChild(iframe);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
