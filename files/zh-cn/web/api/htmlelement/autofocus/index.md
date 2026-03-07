---
title: HTMLElement：autofocus 属性
short-title: autofocus
slug: Web/API/HTMLElement/autofocus
l10n:
  sourceCommit: 01d5901fdbad83033fe1f86486f652d07db7ce2a
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLElement")}} 接口的 **`autofocus`** 属性表示一个布尔值，该值反映了 [`autofocus`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/autofocus) HTML 全局属性。此属性指示该元素是否应在页面加载时获得焦点；或者，如果该元素嵌套在 {{htmlelement("dialog")}} 或 [`popover`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/popover) 元素内，则指示该 `<dialog>` 或弹窗显示时是否应获得焦点。

在一个文档、`<dialog>` 元素或弹窗中，最多只能有一个元素具有此属性。若将该属性应用于多个元素，则第一个可聚焦的元素将获得焦点。

> [!NOTE]
> 设置此属性并不会立即将焦点设置到对应元素上：它仅告知浏览器在*该元素被插入文档时*应将其设为焦点。在插入之后（即大多数情况下是在文档加载完成之后）再设置该属性则不会产生任何可见效果。

## 值

布尔值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
