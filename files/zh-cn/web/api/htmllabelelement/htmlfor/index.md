---
title: HTMLLabelElement：htmlFor 属性
slug: Web/API/HTMLLabelElement/htmlFor
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

**`HTMLLabelElement.htmlFor`** 属性反映 [`for`](/zh-CN/docs/Web/HTML/Element/label#for) 内容属性的值。意味着此脚本可访问属性用于设置和读取内容属性 `for` 的值，该属性是相关控件元素的 ID。

## 值

包含与控件相关元素 ID 的字符串。

> [!NOTE]
> 如果属性有值，{{domxref("HTMLLabelElement.control")}} 属性必须指的是相同的控件。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLLabelElement.control")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML forms guide](/zh-CN/docs/Learn/Forms)
