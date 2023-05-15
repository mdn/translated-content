---
title: cos()
slug: Web/CSS/cos
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions) **`cos()`** 为三角函数，返回某数的余弦值，此值介于 `-1` 和 `1` 之间。此函数含有单个计算式，此式须将参数结果按弧度数解析为 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;angle&gt;")}}，即 `cos(45deg)`、`cos(0.125turn)` 和 `cos(3.14159 / 4)` 均表示同一值，约为 `0.707`。

## 语法

```css
/* 单个 <angle> 值 */
width: calc(100px * cos(45deg));
width: calc(100px * cos(0.125turn));
width: calc(100px * cos(0.785398163rad));

/* 单个 <number> 值 */
width: calc(100px * cos(63.673));
width: calc(100px * cos(2 * 0.125));

/* 其他值 */
width: calc(100px * cos(pi));
width: calc(100px * cos(e / 2));
```

### 参数

`cos(angle)` 函数仅接受一值作为其参数。

- `angle`
  - : 解析为 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;angle&gt;")}} 的计算式。指定无单位数时，数理解为弧度数，表示 {{CSSXref("&lt;angle&gt;")}}。

### 返回值

`angle` 的余弦值总将返回介于 `−1` 和 `1` 之间的数。

- 若 `angle` 为 `infinity`、`-infinity` 或 `NaN`，则结果为 `NaN`。

### 形式语法

{{CSSSyntax}}

## 示例

### 保持旋转盒子的尺寸不变

`cos()` 函数可用于保持旋转盒子的尺寸不变。

在用 {{CSSXref("transform-function/rotate", "rotate()")}} 旋转元素时，元素将超出其初始尺寸。为修复此问题，我们将用 `cos()` 更新元素尺寸。

例如若将 `100px`/`100px` 的正方形旋转 `45deg`，则其产生的菱形将宽于和高于初始正方形。为将菱形缩小至为原始正方形分配的盒子中，需用此公式缩小菱形：`width = height = 100px * cos(45deg) = 100px * 0.707 = 70.7px`，还需调整 {{CSSXref("transform-origin")}} 并添加 {{CSSXref("transform-function/translate", "translate()")}} 修正位置：

#### HTML

```html
<div class="original-square"></div>
<div class="rotated-diamond"></div>
<div class="rotated-scaled-diamond"></div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
```

```css
div.original-square {
  width: 100px;
  height: 100px;
  background-color: blue;
}
div.rotated-diamond {
  width: 100px;
  height: 100px;
  background-color: red;
  transform: rotate(45deg);
}
div.rotated-scaled-diamond {
  width: calc(100px * cos(45deg));
  height: calc(100px * cos(45deg));
  margin: calc(100px / 4 * cos(45deg));
  transform: rotate(45deg);
  transform-origin: center;
  background-color: green;
}
```

#### 结果

{{EmbedLiveSample("保持旋转盒子的尺寸不变", "100%", "200px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("sin")}}
- {{CSSXref("tan")}}
- {{CSSXref("asin")}}
- {{CSSXref("acos")}}
- {{CSSXref("atan")}}
- {{CSSXref("atan2")}}
