---
title: color-scheme
slug: Web/CSS/color-scheme
tags:
  - CSS
  - CSS 颜色
  - CSS 属性
  - HTML 样式
  - HTML 颜色
  - 布局
  - 参考
  - 样式化 HTML
  - 样式化 text
  - Web
  - color-adjust
  - recipe:css-property
browser-compat: css.properties.color-scheme
---

{{CSSRef}}

**`color-scheme`** CSS 属性允许元素指示它可以轻松呈现的配色方案。

操作系统配色方案的常见选择是“亮”和“暗”，或者是“白天模式”和“夜间模式”。当用户选择其中一种配色方案时，操作系统会对用户界面进行调整。这包括表单控件、滚动条和 CSS 系统颜色的使用值。

## 语法

```css
color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;

/* Global values */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: unset;
```

`color-scheme` 属性的值必须是以上关键字之一。

### Values

- `normal`
  - ：表示元素未指定任何配色方案，因此应使用浏览器的默认配色方案呈现。
- `light`
  - ：表示可以使用操作系统亮色配色方案渲染元素。
- `dark`
  - ：表示可以使用操作系统深色配色方案渲染元素。

## 正式定义

{{cssinfo}}

## 正式语法

{{csssyntax}}

## 示例

### 适应配色方案

要将整个页面配置为使用用户的配色方案首选项，请在 {{cssxref(":root")}} 元素上指定 `color-scheme` 。

```css
:root {
  color-scheme: light dark;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 推荐阅读

- [使用 CSS 将颜色应用于 HTML 元素](/en-US/docs/Web/HTML/Applying_color)
- 其他与颜色相关的属性： {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("-webkit-print-color-adjust")}}
