---
title: rect()
slug: Web/CSS/Reference/Values/basic-shape/rect
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`rect()`** [CSS](/zh-CN/docs/Web/CSS) 函数可以创建一个矩形，该矩形位于包含块的顶部和左侧边缘的指定距离处。它是 {{cssxref("&lt;basic-shape&gt;")}} [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)的基本形状函数。你可以在 CSS 属性中使用 `rect()` 函数，例如 {{cssxref("offset-path")}} 创建元素移动的矩形路径，以及在 {{cssxref("clip-path")}} 中定义裁剪区域的形状。

## 语法

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### 值

内部矩形由四个偏移值定义，从顶边开始顺时针，以及可选的 `round` 关键字与 `border-radius` 参数，用于在矩形上添加圆角。每个偏移值可以是 `<length>`、`<percentage>`，或关键字 `auto`。

- `<length-percentage>`
  - : 指定矩形的顶部、右侧、底部或左侧边缘与包含块的顶部或左侧边缘的距离的 {{cssxref("&lt;length-percentage&gt;")}} 值。第一个（顶部）和第三个（底部）值是相对于包含块的顶部边缘的距离，第二个（右侧）和第四个（左侧）值是相对于包含块的左侧边缘的距离。第二个（右侧）和第三个（底部）值由第四个（左侧）和第一个（顶部）值分别限制，以防止底部边缘越过顶部边缘和右边缘越过左边缘。例如，`rect(10px 0 0 20px)` 被限制为 `rect(10px 20px 10px 20px)`。

- `auto`
  - : 使其用于的边缘与包含块的相应边缘重合。如果第一个（顶部）或第四个（左侧）值使用了 `auto`，则 `auto` 的值为 `0`；如果用于第二个（右侧）或第三个（底部）值，则 `auto` 的值为 `100%`。

- `round <'border-radius'>`
  - : 使用与 CSS [`border-radius`](/zh-CN/docs/Web/CSS/Reference/Properties/border-radius) 简写属性相同的语法指定矩形的圆角半径。此参数是可选的。

## 形式语法

{{CSSSyntax}}

## 示例

### 使用 rect() 创建 offset-path

在此示例中，{{cssxref("offset-path")}} 属性使用 `rect()` 函数来定义元素移动的路径的形状，这里是一个红色框。展示了三种不同的情况，每种情况下 `rect()` 函数使用不同的值。方框内的箭头指向方框的右边缘。

```html
<div class="container">
  矩形路径 1
  <div class="path rect-path-1">→</div>
</div>
<div class="container">
  矩形路径 2
  <div class="path rect-path-2">→</div>
</div>
<div class="container">
  矩形路径 3
  <div class="path rect-path-3">→</div>
</div>
```

```css
.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: 15px;
  text-align: center;
}

.path {
  width: 40px;
  height: 40px;
  background-color: red;
  position: absolute;
  animation: move 10s linear infinite;
}

.rect-path-1 {
  offset-path: rect(50px 150px 200px 50px round 20%);
}

.rect-path-2 {
  offset-path: rect(50px auto 200px 50px round 20%);
}

.rect-path-3 {
  offset-path: rect(50px auto 200px auto);
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

{{EmbedLiveSample("使用 rect() 创建 offset-path", "100%", 400)}}

- 路径 1 的矩形指定了相对于包含块的四个边缘（上、右、下和左）的距离。顶部和底部值是相对于包含块的顶部边缘的距离。右侧和左侧值是相对于包含块的左侧边缘的距离。此外，矩形的角被设置为 `20%` 的圆角，使得红色盒子元素在沿着此路径移动时，会跟随圆角移动。请注意框内箭头沿着矩形路径拐角处的曲线的移动情况。
- 路径 2 的矩形与路径 1 的矩形类似，只是右侧值为 `auto`，它等于值 `100%`。这导致矩形的右边缘与包含块的右边缘对齐，从而创建了一个比路径 1 更宽的矩形。
- 路径 3 的矩形将左侧和右侧边缘参数都设置为 `auto`，并省略了 `round <'border-radius'>` 参数。这会创建一个宽度与包含块相同的矩形，其角是矩形的直角，而不是路径 1 和路径 2 中的圆角。请注意框内箭头在角落的移动情况。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("basic-shape/inset","inset()")}} 函数
- {{cssxref("basic-shape/xywh","xywh()")}} 函数
- {{cssxref("clip-path")}} 属性
- {{cssxref("offset-path")}} 属性
- {{cssxref("&lt;basic-shape&gt;")}} 数据类型
- [CSS 形状](/zh-CN/docs/Web/CSS/Guides/Shapes)模块
- [基本形状指南](/zh-CN/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
