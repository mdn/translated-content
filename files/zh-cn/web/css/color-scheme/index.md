---
title: color-scheme
slug: Web/CSS/color-scheme
---

{{CSSRef}}

**`color-scheme`** CSS 属性允许元素指示它可以舒适地呈现哪些颜色方案。

操作系统颜色方案的常见选择为“亮色”和“暗色”，或“日间模式”和“夜间模式”。当用户选择其中一种颜色方案时，操作系统会对用户界面进行调整，包括表单控件、滚动条和 CSS 系统颜色的使用值。

{{EmbedInteractiveExample("pages/css/color-scheme.html")}}

## 语法

```css
color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;
color-scheme: only light;

/* 全局值 */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: revert-layer;
color-scheme: unset;
```

`color-scheme` 属性的值必须是以上关键字之一。

### 取值

- `normal`
  - : 表示元素未指定任何配色方案，因此应使用浏览器的默认配色方案呈现。
- `light`
  - : 表示可以使用操作系统亮色配色方案渲染元素。
- `dark`
  - : 表示可以使用操作系统深色配色方案渲染元素。
- `only`

  - : 禁止用户代理覆盖元素的颜色方案。

    可以使用 `color-scheme: only light;` 应用于特定的元素或 `:root`，以关闭由 Chrome 的[自动深色主题](https://developer.chrome.google.cn/blog/auto-dark-theme#per-element-opt-out)引起的颜色覆盖。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 应用配色方案

要将整个页面配置为使用用户的配色方案首选项，请在 {{cssxref(":root")}} 元素上指定 `color-scheme`。

```css
:root {
  color-scheme: light dark;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`prefers-color-scheme`](/zh-CN/docs/Web/CSS/@media/prefers-color-scheme) 媒体查询来检测用户对配色方案的偏好。
- [使用 CSS 将颜色应用于 HTML 元素](/zh-CN/docs/Web/CSS/CSS_colors/Applying_color)
- 其他与颜色相关的属性：{{cssxref("color")}}、{{cssxref("background-color")}}、{{cssxref("border-color")}}、{{cssxref("outline-color")}}、{{cssxref("text-decoration-color")}}、{{cssxref("text-emphasis-color")}}、{{cssxref("text-shadow")}}、{{cssxref("caret-color")}} 和 {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
