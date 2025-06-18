---
title: HTMLLabelElement：control 属性
slug: Web/API/HTMLLabelElement/control
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

**`HTMLLabelElement.control`** 只读属性返回与 {{HTMLElement("label")}} 元素相关联的控件（以 {{domxref("HTMLElement")}} 类型或其派生类的对象的形式）的引用，如果标签未与控件关联，则为 `null`。

## 值

{{domxref("HTMLElement")}} 派生对象，表示与 {{HTMLElement("label")}} 关联的控件，如果标签是单独的，则为 `null`。

> [!NOTE]
> 如果这个属性有值且 {{domxref("HTMLLabelElement.htmlFor")}} 有值，{{domxref("HTMLLabelElement.htmlFor")}} 属性必须引用相同的控件。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML 表单指南](/zh-CN/docs/Learn_web_development/Extensions/Forms)
