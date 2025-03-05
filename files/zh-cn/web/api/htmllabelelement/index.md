---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

**`HTMLLabelElement`** 接口允许访问特定于 {{HTMLElement("label")}} 元素的属性，它从基础接口 {{domxref("HTMLElement")}} 继承方法和属性。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLLabelElement.control")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLElement")}}，表示与标签关联的控件。
- {{domxref("HTMLLabelElement.form")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLFormElement")}} 对象，表示与标记的控件相关联的表单，如果没有关联的控件，或者该控件未与表单关联，则为 `null`。换句话说，这只是 `HTMLLabelElement.control.form` 的快捷方式。
- {{domxref("HTMLLabelElement.htmlFor")}}
  - : 包含标记的控件的 ID 的字符串。反映 [`for`](/zh-CN/docs/Web/HTML/Element/label#for) 属性。

> [!NOTE]
> 要以编程方式设置 `for` 属性，请使用 [`htmlFor`](/zh-CN/docs/Web/API/HTMLLabelElement/htmlFor)。

## 实例方法

_没有特定的方法，从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("label")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLFormElement")}}
