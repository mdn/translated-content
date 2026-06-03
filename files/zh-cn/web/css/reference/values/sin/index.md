---
title: sin()
slug: Web/CSS/Reference/Values/sin
---

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions) **`sin()`** 为三角函数，返回某数的正弦值，此值介于 `-1` 和 `1` 之间。此函数含有单个计算式，此式须将参数结果按弧度数解析为 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;angle&gt;")}}，即 `sin(45deg)`、`sin(0.125turn)` 和 `sin(3.14159 / 4)` 均表示同一值，约为 `0.707`。

## 语法

```css
/* 单个 <angle> 值 */
width: calc(100px * sin(45deg));
width: calc(100px * sin(0.25turn));
width: calc(100px * sin(1.0471967rad));

/* 单个 <number> 值 */
width: calc(100px * sin(63.673));
width: calc(100px * sin(2 * 0.125));

/* 其他值 */
width: calc(100px * sin(pi / 2));
width: calc(100px * sin(e / 4));
```

### 参数

`sin(angle)` 函数仅接受一值作为其参数。

- `angle`
  - : 解析为 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;angle&gt;")}} 的计算式。指定无单位数时，数理解为弧度数，表示 {{CSSXref("&lt;angle&gt;")}}。

### 返回值

`angle` 的正弦值总将返回介于 `−1` 和 `1` 之间的数。

- 若 `angle` 为 `infinity`、`-infinity` 或 `NaN`，则结果为 `NaN`。
- 若 `angle` 为 `0⁻`，则结果为 `0⁻`。

### 形式语法

{{CSSSyntax}}

## 示例

### 改变盒子尺寸

在此示例中，`sin(30deg)` 将返回 `0.5`，使盒子有 `50px` 的宽度和 `50px` 的高度。

```css
div {
  background-color: red;
  width: calc(sin(30deg) * 100px);
  height: calc(sin(30deg) * 100px);
}
```

### 控制动画时长

另一用例为控制 {{CSSXref("animation-duration")}}，根据正弦值减少时长。在此示例中，动画时长将为 `1s`。

```css
div {
  animation-name: myAnimation;
  animation-duration: calc(sin(0.25turn) * 1s);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("cos")}}
- {{CSSXref("tan")}}
- {{CSSXref("asin")}}
- {{CSSXref("acos")}}
- {{CSSXref("atan")}}
- {{CSSXref("atan2")}}
