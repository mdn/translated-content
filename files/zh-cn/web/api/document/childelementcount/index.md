---
title: Document：childElementCount 属性
slug: Web/API/Document/childElementCount
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`Document.childElementCount`** 只读属性返回文档的子元素数量。

要获取特定元素的子元素数量，请参阅 {{domxref("Element.childElementCount")}}。

## 值

一个数字。

## 示例

```js
document.children;
// HTMLCollection，通常包含一个 <html> 元素，即文档的唯一子元素

document.childElementCount;
// 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.childElementCount")}}
- {{domxref("DocumentFragment.childElementCount")}}
