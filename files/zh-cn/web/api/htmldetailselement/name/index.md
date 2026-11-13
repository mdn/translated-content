---
title: HTMLDetailsElement：name 属性
short-title: name
slug: Web/API/HTMLDetailsElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLDetailsElement")}} 接口的 **`name`** 属性反映了 {{htmlelement("details")}} 元素的 [`name`](/zh-CN/docs/Web/HTML/Reference/Elements/details#name) 属性。它允许将多个 `<details>` 元素关联在一起，使得同一时间仅有一个 `<details>` 元素处于展开状态。这使开发者能够轻松创建手风琴式（accordion）等 UI 功能，而无需编写脚本。

`name` 属性指定一个组名。将多个 `<details>` 元素赋予相同的 `name` 值即可将这些元素归入同一组。在同一组中任意时刻只允许一个 `<details>` 元素处于展开状态；展开其中一个元素则会自动关闭其他已展开的元素。若多个同组 `<details>` 元素均被设置了 `open` 属性，则仅源码顺序中第一个元素会被渲染为展开状态。

## 值

字符串。若该元素不属于任何组，则返回空字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{htmlelement("details")}} 和 {{htmlelement("summary")}} 元素
