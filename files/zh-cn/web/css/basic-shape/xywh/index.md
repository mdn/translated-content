---
title: xywh()
slug: Web/CSS/basic-shape/xywh
l10n:
  sourceCommit: 511208efe18c7a042bad9859dc797e944a1c16ed
---

{{CSSRef}}

**`xywh()`** [CSS](/zh-CN/docs/Web/CSS) 函数使用与包含区块的左边缘（`x`）和顶部边缘（`y`）的指定距离，以及矩形的特定宽度（`w`）和高度（`h`）来创建一个矩形。它是 {{cssxref("&lt;basic-shape&gt;")}} [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)的基本形状函数。你可以在 CSS 属性中使用 `xywh()` 函数，如在 {{cssxref("offset-path")}} 中创建元素移动的矩形路径，或在 {{cssxref("clip-path")}} 属性中定义裁剪区域的形状。

## 语法

```css
offset-path: xywh(0 1% 2px 3% round 0 1px 2% 3px);
clip-path: xywh(1px 2% 3px 4em round 0 1% 2px 3em);
```

### 值

- `<length-percentage>`
  - : 为矩形的 `x` 和 `y` 坐标指定 {{cssxref("&lt;length-percentage&gt;")}} 值。
- `<length-percentage [0,∞]>`
  - : {{cssxref("&lt;length-percentage&gt;")}} 值为指定矩形宽度和高度的非负值。最小值可以为零，最大值没有限制。
- `round <'border-radius'>`
  - : 与 CSS [`border-radius`](/zh-CN/docs/Web/CSS/border-radius) 简写属性使用相同的语法来指定矩形圆角的半径。此参数为可选参数。

## 示例

### 使用 xywh() 创建偏移量路径

在下面的示例中，{{cssxref("offset-path")}} 属性使用 `xywh()` 函数来定义元素（本示例中为洋红色盒子）移动路径的形状。展示了两种不同的场景，每种场景都具有 `xywh()` 函数的不同的值。盒子内的箭头指向方框的右边缘。

```html
<div class="container">
  路径 1 矩形
  <div class="path xywh-path-1">→</div>
</div>
<div class="container">
  路径 2 矩形
  <div class="path xywh-path-2">→</div>
</div>
```

```css
.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: 30px;
  text-align: center;
}

.path {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: magenta;
  animation: move 10s linear infinite;
}

.xywh-path-1 {
  offset-path: xywh(20px 20px 100% 100% round 10%);
}

.xywh-path-2 {
  offset-path: xywh(20px 30% 150% 200%);
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### 结果

{{EmbedLiveSample("使用 xywh() 创建偏移量路径", "100%", 600)}}

- 路径 1 矩形与包含区块的左边缘和上边缘的偏移量为 `20px`。该路径矩形的尺寸与包含区块的尺寸相同，即宽度为包含区块宽度的 `100%`，高度为包含区块高度的 `100%`。注意框内的箭头如何沿着矩形路径边角上（由 `round 10%` 定义的）`10%` 曲线移动的。
- 由于 `xywh()` 中宽度和高度的上限都是无穷大，因此在路径 2 矩形中将高度设置为 `200%` 会使生成的矩形是包含的区块的两倍。请注意当未指定 `round <'border-radius'>` 时，方框内的箭头在边角处的表现。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`inset()`](/zh-CN/docs/Web/CSS/basic-shape#inset) 函数
- [`rect()`](/zh-CN/docs/Web/CSS/basic-shape#rect) 函数
- {{cssxref("clip-path")}} 属性
- {{cssxref("offset-path")}} 属性
- {{cssxref("&lt;basic-shape&gt;")}} 数据类型
- [CSS 形状](/zh-CN/docs/Web/CSS/CSS_shapes)模块
- [基本形状指南](/zh-CN/docs/Web/CSS/CSS_shapes/Basic_shapes)
