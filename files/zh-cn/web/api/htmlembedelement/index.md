---
title: HTMLEmbedElement
slug: Web/API/HTMLEmbedElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

**`HTMLEmbedElement`** 接口提供了用于操作 {{HTMLElement("embed")}} 元素的特殊属性（除了常规 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承来使用）。

> [!NOTE]
> 本主题描述标准定义中的 `HTMLEmbedElement` 接口。它没有解决早期非标准化版本的接口问题。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLEmbedElement.align")}} {{deprecated_inline}}
  - : 表示枚举属性的字符串，指示元素内容相对于周围上下文的对齐方式。可能的值有：`"left"`、`"right"`、`"center"` 和 `"justify"`。
- {{domxref("HTMLEmbedElement.height")}}
  - : 一个反映 [`height`](/zh-CN/docs/Web/HTML/Element/embed#height) HTML 属性的字符串，包含资源显示的高度。
- {{domxref("HTMLEmbedElement.name")}} {{deprecated_inline}}
  - : 一个表示嵌入对象名字的字符串。
- {{domxref("HTMLEmbedElement.src")}}
  - : 一个反映 [`src`](/zh-CN/docs/Web/HTML/Element/embed#src) HTML 属性的字符串，包含资源地址。
- {{domxref("HTMLEmbedElement.type")}}
  - : 一个反映 [`type`](/zh-CN/docs/Web/HTML/Element/embed#type) HTML 属性的字符串，包含资源类型。
- {{domxref("HTMLEmbedElement.width")}}
  - : 一个反映 [`width`](/zh-CN/docs/Web/HTML/Element/embed#width) HTML 属性的字符串，包含资源的显示宽度。

## 实例方法

_无特定方法；从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("embed")}}。
