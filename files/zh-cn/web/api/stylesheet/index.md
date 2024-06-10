---
title: StyleSheet
slug: Web/API/StyleSheet
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{APIRef("CSSOM")}}

表示一个实现`StyleSheet`接口的对象样式表。CSS 样式表将进一步实现更专业的 {{domxref("CSSStyleSheet")}} 接口。

## 实例属性

- {{domxref("StyleSheet.disabled")}}
  - : 返回表示当前样式表是否可用的布尔值。
- {{domxref("StyleSheet.href")}} {{ReadOnlyInline}}
  - : 返回 {{domxref("DOMString")}} 表示样式表的位置。
- {{domxref("StyleSheet.media")}} {{ReadOnlyInline}}
  - : 返回表示样式信息的预期目标媒体的 {{domxref("MediaList")}}。
- {{domxref("StyleSheet.ownerNode")}} {{ReadOnlyInline}}
  - : 返回 {{domxref("Node")}} 将此样式表与当前文档相关联。
- {{domxref("StyleSheet.parentStyleSheet")}} {{ReadOnlyInline}}
  - : 返回 {{domxref("StyleSheet")}} 如果有的话; 返回 `null` 如果没有。
- {{domxref("StyleSheet.title")}} {{ReadOnlyInline}}
  - : 返回 {{domxref("DOMString")}} 表示当前样式表的顾问标题。
- {{domxref("StyleSheet.type")}}{{ReadOnlyInline}}
  - : 返回 {{domxref("DOMString")}} 表示当前样式表的语言。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CSSStyleSheet")}}
