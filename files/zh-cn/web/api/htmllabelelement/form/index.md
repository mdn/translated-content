---
title: HTMLLabelElement：form 属性
slug: Web/API/HTMLLabelElement/form
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

只读的 **`HTMLLabelElement.form`** 属性返回 {{domxref("HTMLFormElement")}} 对象表示与标签控件关联的表单，如果没有关联的控件，或者该控件未与表单关联，则是 `null`。这个属性是 `HTMLLabelElement.control.form` 的快捷方式。

## 值

{{domxref("HTMLFormElement")}} 表示与标签 {{domxref("HTMLLabelElement.control", "control")}} 关联的表单。如果 {{domxref("HTMLLabelElement.control", "control")}} 是 `null`（意味标签与控件无关），或者如果控件不是表单的部分，属性返回 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML forms guide](/zh-CN/docs/Learn/Forms)
