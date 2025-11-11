---
title: StyleSheet
slug: Web/API/StyleSheet
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{APIRef("CSSOM")}}

表示一个实现 `StyleSheet`（表示单个样式表）接口的对象。CSS 样式表将进一步实现更具体的 {{domxref("CSSStyleSheet")}} 接口。

## 实例属性

- {{domxref("StyleSheet.disabled")}}
  - : 返回表示当前样式表是否可用的布尔值。
- {{domxref("StyleSheet.href")}} {{ReadOnlyInline}}
  - : 返回表示样式表的位置的字符串。
- {{domxref("StyleSheet.media")}} {{ReadOnlyInline}}
  - : 返回表示样式信息的预期目标媒体的 {{domxref("MediaList")}}。
- {{domxref("StyleSheet.ownerNode")}} {{ReadOnlyInline}}
  - : 返回将此样式表与当前文档相关联的 {{domxref("Node")}}。
- {{domxref("StyleSheet.parentStyleSheet")}} {{ReadOnlyInline}}
  - : 如果有的话，返回 {{domxref("StyleSheet")}}；如果没有，则返回 `null`。
- {{domxref("StyleSheet.title")}} {{ReadOnlyInline}}
  - : 返回表示当前样式表的咨询标题的字符串。
- {{domxref("StyleSheet.type")}}{{ReadOnlyInline}}
  - : 返回表示当前样式表的样式表语言的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CSSStyleSheet")}}
