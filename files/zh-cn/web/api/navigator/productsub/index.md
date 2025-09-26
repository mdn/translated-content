---
title: Navigator：productSub 属性
slug: Web/API/Navigator/productSub
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ ApiRef("HTML DOM") }} {{Deprecated_Header}}

**`Navigator.productSub`** 只读属性返回当前浏览器的构建版本号。

## 值

一个字符串。

## 示例

```js
document.body.textContent = `productSub：${navigator.productSub}`;
```

{{ EmbedLiveSample("示例") }}

## 备注

在 IE 中，这个属性返回 undefined。

在 Apple Safari 和 Google Chrome 中，这个属性始终返回 `20030107`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
