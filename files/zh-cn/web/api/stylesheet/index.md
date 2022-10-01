---
title: StyleSheet
slug: Web/API/StyleSheet
---

{{APIRef("CSSOM")}}

表示一个实现`StyleSheet`接口的对象样式表。CSS 样式表将进一步实现更专业的 {{domxref("CSSStyleSheet")}} 接口。

## 属性

- {{domxref("StyleSheet.disabled")}}
  - : 返回{{domxref("Boolean")}}表示当前样式表是否可用。
- {{domxref("StyleSheet.href")}} {{readonlyInline}}
  - : 返回 {{domxref("DOMString")}} 表示样式表的位置。
- {{domxref("StyleSheet.media")}} {{readonlyInline}}
  - : 返回 {{domxref("MediaList")}} 表示样式的预期目标媒体
- {{domxref("StyleSheet.ownerNode")}} {{readonlyInline}}
  - : 返回 {{domxref("Node")}} 将此样式表与当前文档相关联。
- {{domxref("StyleSheet.parentStyleSheet")}} {{readonlyInline}}
  - : 返回 {{domxref("StyleSheet")}} 如果有的话; 返回 `null` 如果没有。
- {{domxref("StyleSheet.title")}} {{readonlyInline}}
  - : 返回 {{domxref("DOMString")}} 表示当前样式表的顾问标题。
- {{domxref("StyleSheet.type")}}{{readonlyInline}}
  - : 返回 {{domxref("DOMString")}} 表示当前样式表的语言

## 规范

{{Specifications}}

## 参见

- {{domxref("CSSStyleSheet")}}
