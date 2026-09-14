---
title: MutationRecord：attributeNamespace 属性
short-title: attributeNamespace
slug: Web/API/MutationRecord/attributeNamespace
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

{{domxref("MutationRecord")}} 的只读属性 **`attributeNamespace`** 是 {{domxref("MutationObserver")}} 观察到的 {{domxref("MutationRecord")}} 中发生变化的属性的命名空间。

## 值

如果记录的 [`type`](/zh-CN/docs/Web/API/MutationRecord/type) 是 `attributes`，则该属性是一个字符串，表示突变目标发生变化的属性的命名空间。否则，该值为 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
