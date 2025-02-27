---
title: HTMLLabelElement：form 属性
slug: Web/API/HTMLLabelElement/form
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLLabelElement.form`** 只读属性返回表示与标签关联的控件所属表单的 {{domxref("HTMLFormElement")}} 对象，如果没有关联的控件，或者该控件未与表单关联，则为 `null`。

这个属性是 `HTMLLabelElement.control.form` 的快捷方式。

## 值

{{domxref("HTMLFormElement")}}，表示与标签的 {{domxref("HTMLLabelElement.control", "control")}} 像关联的表单。如果 {{domxref("HTMLLabelElement.control", "control")}} 是 `null`（意味标签与控件无关），或者如果控件不是不属于某个表单，属性返回 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML 表单指南](/zh-CN/docs/Learn_web_development/Extensions/Forms)
