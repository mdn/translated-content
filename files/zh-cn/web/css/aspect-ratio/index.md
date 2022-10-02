---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
---

{{CSSRef}}

**`aspect-ratio`** [CSS](/zh-CN/docs/CSS) 属性为 box 容器规定了一个**期待的纵横比**，这个纵横比可以用来计算自动尺寸以及为其他布局函数服务。

```css
aspect-ratio: 1 / 1;

/* 全局值 */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: unset;
```

### 数值

- {{cssxref("&lt;auto&gt;")}}
  - : 具有固有宽高比的替换元素将使用该宽高比，否则该内容框没有首选的宽高比。涉及固有宽高比的尺寸计算始终与内容框尺寸一起使用。
- {{cssxref("&lt;ratio&gt;")}}
  - : 内容框首选的宽高比是通过 `width` / `height` 定义的。当为内容框定义 `box-sizing` 之后，尺寸的计算就可以通过指定宽高比来实现。

## 正式定义

{{cssinfo}}

## 正式语法

{{csssyntax}}

## 示例

### 纵横比数值例子

```css
aspect-ratio: 1 / 1;
aspect-ratio: 16 / 9;
```

## 将宽度和高度关联到宽高比

浏览器内部已经为替换的元素和其他接受 `width` 和 `height` 的元素添加了 `aspect-ratio`。这些可以在浏览器的 UA 样式表中看到。

在 Firefox 中，内部样式表看起来如下：

```css
img, input[type="image"], video, embed, iframe, marquee, object, table {
  aspect-ratio: attr(width) / attr(height);
}
```

您可以在 [为图片设置宽高仍然重要 gain](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/) 一文中了解更多与这个功能有关的内容。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关阅读

- [关联媒体容器元素的宽度与高度到它的宽高比上](/zh-CN/docs/Web/Media/images/aspect_ratio_mapping)
- [为 CSS 设计一个宽高比单元](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
