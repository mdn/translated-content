---
title: ':root'
slug: Web/CSS/:root
---

{{CSSRef}}

## 概述

**`:root`** 这个 CSS [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)匹配文档树的根元素。对于 HTML 来说，**`:root`** 表示 {{HTMLElement("html")}} 元素，除了[优先级](/zh-CN/docs/Web/CSS/Specificity)更高之外，与 `html` 选择器相同。

## 语法

{{csssyntax}}

## 示例

在声明全局 [CSS 变量](/zh-CN/docs/Web/CSS/--*)时 **`:root`** 会很有用：

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
