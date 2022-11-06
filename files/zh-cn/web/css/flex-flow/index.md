---
title: flex-flow
slug: Web/CSS/flex-flow
---

{{ CSSRef("CSS Flexible Boxes") }}

## 概述

[CSS](/zh-CN/docs/Web/CSS) **`flex-flow`** 属性是 flex-direction 和 flex-wrap 的简写。

{{cssinfo}}

更多信息参见 [使用 CSS 弹性盒](/zh-CN/docs/Web/Guide/CSS/Flexible_boxes)

## 语法

[Formal syntax](/zh-CN/docs/CSS/Value_definition_syntax): {{csssyntax("flex-flow")}}

### 取值

`更多取值信息请查看` [`flex-direction`](/zh-CN/docs/CSS/flex-direction) 和 [`flex-wrap`](/zh-CN/docs/CSS/flex-wrap)

## 示例

```css
element {
  /* Main-axis is the block direction with reversed main-start and main-end. Flex items are laid out in multiple lines */
  flex-flow: column-reverse wrap;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另参见

- [使用 CSS 弹性盒子](/zh-CN/docs/CSS/Using_CSS_flexible_boxes)
