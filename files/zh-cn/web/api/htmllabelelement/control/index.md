---
title: HTMLLabelElement：control 属性
slug: Web/API/HTMLLabelElement/control
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

只读的 **`HTMLLabelElement.control`** 属性返回控件（以类型 {{domxref("HTMLElement")}} 对象的形式或其衍生物之一）与 {{HTMLElement("label")}} 元素相关的引用，如果标签未与控件关联，则为 `null`。

## 值

{{domxref("HTMLElement")}} 派生对象，表示与 {{HTMLElement("label")}} 关联的控件，如果标签是单独的，则为 `null`。

> [!NOTE]
> 如果这个属性有值且 {{domxref("HTMLLabelElement.htmlFor")}} 有值，{{domxref("HTMLLabelElement.htmlFor")}} 属性必须指的是相同的控件。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML forms guide](/zh-CN/docs/Learn/Forms)
