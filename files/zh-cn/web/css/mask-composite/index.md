---
title: mask-composite
slug: Web/CSS/mask-composite
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`mask-composite`** 表示对当前遮罩层及其下方遮罩层执行的合成操作。

## 语法

```css
/* Keyword values */
mask-composite: add;
mask-composite: subtract;
mask-composite: intersect;
mask-composite: exclude;

/* Global values */
mask-composite: inherit;
mask-composite: initial;
mask-composite: revert;
mask-composite: revert-layer;
mask-composite: unset;
```

取值为下列一个或多个关键词，多个值用逗号分隔。

### 值

在合成操作中，称当前遮罩层为 _源_，其下方所有层为 _目标_。

- `add`
  - : 将源叠加在目标上方。
- `subtract`
  - : 仅保留源中目标范围外的部分。
- `intersect`
  - : 仅保留源与目标的重叠区域。
- `exclude`
  - : 合并源与目标的非重叠区域。

## 正式定义

{{cssinfo}}

## 正式语法
{{csssyntax}}

## 示例

### 使用叠加模式合成遮罩层

```html live-sample___mask-composite-example
<div class="masked"></div>
```

```css live-sample___mask-composite-example
.masked {
  width: 100px;
  height: 100px;
  background-color: red;

  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mdn.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-size: 100% 100%;
  mask-composite: subtract;
}
```

{{EmbedLiveSample("mask-composite-example", "", "150px")}}

## 规范

{{Specifications}}

## 浏览器兼容性
{{Compat}}

## 参见

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
