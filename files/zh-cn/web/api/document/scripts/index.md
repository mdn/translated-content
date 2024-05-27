---
title: Document：scripts 属性
slug: Web/API/Document/scripts
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

{{domxref("Document")}} 接口的 **`scripts`** 属性返回文档中 {{HTMLElement("script")}} 元素的列表。返回的对象是 {{domxref("HTMLCollection")}}。

## 值

{{domxref("HTMLCollection")}}。你可以像使用数组一样使用它来获取列表中的所有元素。

## 示例

此示例将查询页面是否有任何 {{HTMLElement("script")}} 元素。

```js
let scripts = document.scripts;

if (scripts.length) {
  alert("此页面包含脚本！");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
