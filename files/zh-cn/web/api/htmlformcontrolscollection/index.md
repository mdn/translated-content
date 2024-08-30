---
title: HTMLFormControlsCollection
slug: Web/API/HTMLFormControlsCollection
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("HTML DOM")}}

**`HTMLFormControlsCollection`** 接口表示 HTML *表单控件元素*的*集合*，由 {{domxref("HTMLFormElement")}} 接口的 {{domxref("HTMLFormElement.elements", "elements")}} 属性返回。

此接口替换它所基于的 {{domxref("HTMLCollection")}} 中的一个方法。

{{InheritanceDiagram}}

## 实例属性

_此接口从其父接口 {{domxref("HTMLCollection")}} 继承属性。_

## 实例方法

_此接口从其父接口 {{domxref("HTMLCollection")}} 继承方法。_

- {{domxref("HTMLFormControlsCollection.namedItem()")}}
  - : 返回集合中的 {{domxref("RadioNodeList")}} 或 {{domxref("Element")}}，其 `name` 或者 `id` 与指定名字匹配，如果没有节点匹配，则返回 `null`。请注意，此版本的 `namedItem()` 隐藏从 {{domxref("HTMLCollection")}} 继承的项。与该方法类似，使用 JavaScript 数组括号语法和{{jsxref("String", "字符串", "", 1)}}，如 `collection["value"]`，等价于 `collection.namedItem("value")`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLCollection")}}、{{domxref("RadioNodeList")}}、{{domxref("HTMLOptionsCollection")}}
