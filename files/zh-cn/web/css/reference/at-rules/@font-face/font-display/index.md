---
title: font-display
slug: Web/CSS/Reference/At-rules/@font-face/font-display
---

`font-display` 属性决定了一个 @font-face 在不同的下载时间和可用时间下是如何展示的。

## 字体显示时间轴

字体显示时间线基于一个计时器，该计时器在用户代理尝试使用给定下载字体的那一刻开始。时间线分为三个时间段，在这三个时间段中指定使用字体的元素的渲染行为。

- 字体阻塞周期
  - : 如果未加载字体，任何试图使用它的元素都必须渲染不可见的后备字体。如果在此期间字体已成功加载，则正常使用它。
- 字体交换周期
  - : 如果未加载字体，任何尝试使用它的元素都必须呈现后备字体。如果在此期间字体已成功加载，则正常使用它。
- 字体失败周期
  - : 如果未加载字体，用户代理将其视为导致正常字体回退的失败加载。

{{cssinfo}}

## 语法

```css
/* 关键字值 */
font-display: auto;
font-display: block;
font-display: swap;
font-display: fallback;
font-display: optional;
```

### 属性值

- `auto`
  - : 字体显示策略由用户代理定义。
- `block`
  - : 为字体提供一个短暂的阻塞周期和无限的交换周期。
- `swap`
  - : 为字体提供一个非常小的阻塞周期和无限的交换周期。
- `fallback`
  - : 为字体提供一个非常小的阻塞周期和短暂的交换周期。
- `optional`
  - : 为字体提供一个非常小的阻塞周期，并且没有交换周期。

### 形式化语法

{{csssyntax}}

## 例子

```css
@font-face {
  font-family: ExampleFont;
  src:
    url("/path/to/fonts/example-font.woff") format("woff"),
    url("/path/to/fonts/example-font.eot") format("embedded-opentype");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
