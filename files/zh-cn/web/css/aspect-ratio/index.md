---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
---

{{CSSRef}}

**`aspect-ratio`** [CSS](/zh-CN/docs/Web/CSS) 属性为盒子规定了一个**期待的纵横比**，这个纵横比可以用来计算自动尺寸以及为其他布局函数服务。

{{EmbedInteractiveExample("pages/css/aspect-ratio.html")}}

```css
aspect-ratio: 1 / 1;
aspect-ratio: 1;

/* 全局值 */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: revert-layer;
aspect-ratio: unset;
```

### 取值

- `auto`
  - : 具有固有宽高比的[可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)将使用该宽高比，否则该内容盒没有首选的宽高比。涉及固有宽高比的尺寸计算始终与内容盒尺寸一起使用。
- {{cssxref("&lt;ratio&gt;")}}
  - : 盒子的首选宽高比是指定的 `width` / `height` 比率。如果省略 `height` 和前面的斜杠字符，则 `height` 默认为 `1`。涉及首选宽高比的大小计算与由 `box-sizing` 指定的盒子尺寸的尺寸一起工作。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 纵横比数值例子

```css
aspect-ratio: 1 / 1;
aspect-ratio: 16 / 9;
aspect-ratio: 0.5;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关阅读

- [关联媒体容器元素的宽度与高度到它的宽高比上](/zh-CN/docs/Web/Media/images/aspect_ratio_mapping)
- [为 CSS 设计一个宽高比单元](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [设置图像的高度和宽度再次变得重要起来](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
