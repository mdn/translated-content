---
title: mask-composite
slug: Web/CSS/Reference/Properties/mask-composite
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`mask-composite`** 表示对当前遮罩层及其下方遮罩层执行的合成操作。

## 语法

```css
/* 关键字值 */
mask-composite: add;
mask-composite: subtract;
mask-composite: intersect;
mask-composite: exclude;

/* 全局值 */
mask-composite: inherit;
mask-composite: initial;
mask-composite: revert;
mask-composite: revert-layer;
mask-composite: unset;
```

取值为下列一个或多个关键字（用逗号分隔）。

### 值

在合成操作中，称当前遮罩层为*源*，其下方所有层为*目标*。

- `add`
  - : 将源叠加在目标上方。
- `subtract`
  - : 仅保留源图层中位于目标区域之外的部分。
- `intersect`
  - : 仅保留源与目标重叠的区域，并替换目标中的相应区域。
- `exclude`
  - : 将源和目标中不重叠的区域合并显示。

## 形式定义

{{cssinfo}}

## 形式语法

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

- [CSS 中的裁剪和遮罩](https://css-tricks.com/clipping-masking-css/)
