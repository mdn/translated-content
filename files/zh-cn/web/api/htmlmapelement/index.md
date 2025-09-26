---
title: HTMLMapElement
slug: Web/API/HTMLMapElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

**`HTMLMapElement`** 接口提供特定的属性和方法（除了常规 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承来使用），用于操作 map 元素的布局和展现。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLMapElement.name")}}
  - : 一个表示 {{HTMLElement("map")}} 元素的字符串，用于在其他上下文中引用它。如果设置了 `id` 属性，则该属性必须具有相同的值；且它不能为 `null` 或者空。
- {{domxref("HTMLMapElement.areas")}} {{ReadOnlyInline}}
  - : 一个动态的 {{domxref("HTMLCollection")}}，表示与 {{HTMLElement("map")}} 关联的 {{HTMLElement("area")}} 元素。

## 实例方法

_无特定方法；从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现该接口的 HTML 元素：{{ HTMLElement("map") }}。
