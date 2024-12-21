---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`aspect-ratio`** 为盒子规定了**首选纵横比**，这个纵横比可以用于计算 auto 尺寸以及其他布局函数。

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
  - : 具有固有纵横比的[可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)将使用此纵横比，否则盒子无首选纵横比。涉及固有纵横比的尺寸计算始终使用内容盒的尺寸。
- {{cssxref("&lt;ratio&gt;")}}
  - : 盒子的首选纵横比为指定的 `width` / `height` 比率。如果省略 `height` 和前面的斜杠字符，则 `height` 默认为 `1`。涉及首选纵横比的尺寸计算使用由 `box-sizing` 所指定的盒子的尺寸。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### aspect-ratio 的取值示例

```css
aspect-ratio: 1 / 1;
aspect-ratio: 16 / 9;
aspect-ratio: 0.5;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [图像的 aspect-ratio：防止卡顿](/zh-CN/docs/Learn_web_development/Extensions/Performance/Multimedia#渲染策略：在加载图像时避免卡顿)
- [为 CSS 设计纵横比单位](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [设置图像的高度和宽度再次变得重要起来](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
