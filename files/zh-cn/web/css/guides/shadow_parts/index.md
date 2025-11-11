---
title: CSS 影子部件
slug: Web/CSS/Guides/Shadow_parts
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**CSS 影子部件**模块定义了可在[影子宿主](/zh-CN/docs/Glossary/Shadow_tree)上设置的 {{CSSXref("::part", "::part()")}} 伪元素。使用这个伪元素，可以让影子宿主将影子树中的特定元素暴露给外部页面，以便进行样式设置。

默认情况下，影子树中的元素只能在其所属的影子根内部进行样式设置。CSS 影子部件模块允许在构成自定义元素的 {{HTMLElement("template")}} 后代元素上包含 [`part`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/part) 属性，从而通过 `::part()` 伪元素将影子树节点暴露到外部进行样式设置。

## 参考

### 选择器

- {{CSSXref("::part", "::part()")}}

### HTML 属性

- [`part`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/part)
- [`exportparts`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/exportparts)

### 定义

- {{glossary("Shadow tree", "影子树")}}

## 指南

- [CSS 伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : 所有 CSS 规范和 WebVTT 定义的伪元素字母顺序列表

- [Web 组件](/zh-CN/docs/Web/API/Web_components)
  - : 概述支持创建可复用自定义元素或 Web 组件的不同 API。

## 相关概念

- HTML {{HTMLElement("template")}} 元素
- HTML {{HTMLElement("slot")}} 元素
- {{domxref("Element.part")}} 属性
- {{domxref("Element.shadowRoot")}} 属性
- {{domxref("Element.attachShadow()")}} 方法
- {{domxref("ShadowRoot")}} 接口
- [CSS 域](/zh-CN/docs/Web/CSS/Guides/Scoping)模块
  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted")}}

## 规范

{{Specifications}}

## 参见

- [CSS 伪元素](/zh-CN/docs/Web/CSS/Guides/Pseudo-elements)模块
- [CSS 选择器](/zh-CN/docs/Web/CSS/Guides/Selectors)模块
- [使用影子 DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)
- web.dev 上的[模板：当前作用域外的样式设置](https://web.developers.google.cn/learn/html/template/#styling_outside_of_the_current_scope)（2023）
