---
title: HTMLMeterElement
slug: Web/API/HTMLMeterElement
l10n:
  sourceCommit: ec8d5627e822d866f350d9d8c06f0df58948015e
---

{{APIRef("HTML DOM")}}

HTML {{HTMLElement("meter")}} 元素暴露 **`HTMLMeterElement`** 接口，其提供用于操作 {{HTMLElement("meter")}} 元素的布局和展现的特定属性和方法（除了 {{domxref("HTMLElement")}} 对象接口之外，它还可以通过继承来使用）。

{{InheritanceDiagram}}

## 实例属性

_还继承其父接口 {{domxref("HTMLElement")}} 的属性。_

- {{domxref("HTMLMeterElement.high")}}
  - : 一个 `double` 表示高档部分的数值下限，反映 [`high`](/zh-CN/docs/Web/HTML/Element/meter#high) 属性。
- {{domxref("HTMLMeterElement.low")}}
  - : 一个 `double` 表示低档部分的数值上限，反映 [`low`](/zh-CN/docs/Web/HTML/Element/meter#low) 属性。
- {{domxref("HTMLMeterElement.max")}}
  - : 一个 `double` 表示测量范围的上限，反映 [`max`](/zh-CN/docs/Web/HTML/Element/meter#max) 属性。
- {{domxref("HTMLMeterElement.min")}}
  - : 一个 `double` 表示测量范围的下限，反映 [`min`](/zh-CN/docs/Web/HTML/Element/meter#min) 属性。
- {{domxref("HTMLMeterElement.optimum")}}
  - : 一个 `double` 表示最佳数值，反映 [`optimum`](/zh-CN/docs/Web/HTML/Element/meter#optimum) 属性。
- {{domxref("HTMLMeterElement.value")}}
  - : 一个 `double` 表示当前数值，反映 [`value`](/zh-CN/docs/Web/HTML/Element/meter#value) 属性。
- {{domxref("HTMLMeterElement.labels")}} {{ReadOnlyInline}}
  - : 与此元素关联的 {{HTMLElement("label")}} 元素的 {{domxref("NodeList")}}。

## 实例方法

_此接口无具体方法，但继承了其父接口 {{domxref("HTMLElement")}} 的方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("meter")}}
