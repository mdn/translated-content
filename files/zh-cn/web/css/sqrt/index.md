---
title: sqrt()
slug: Web/CSS/sqrt
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions) **`sqrt()`** 为指数型函数，返回某数的[平方根](https://zh.wikipedia.org/wiki/平方根)。

函数 `pow(x, 0.5)` 等价于 `sqrt(x)`。

## 语法

```css
/* <number> 值 */
width: calc(100px * sqrt(9)); /*  300px */
width: calc(100px * sqrt(25)); /*  500px */
width: calc(100px * sqrt(100)); /* 1000px */
```

### 参数

`sqrt(x)` 函数仅接受一值作为其参数。

- `x`

  - : 解析为大于等于 0 的 {{CSSXref("&lt;number&gt;")}} 的计算式。

### 返回值

返回 {{CSSXref("&lt;number&gt;")}}，为 `x` 的平方根。

- 若 `x` 为 `+∞`，则结果为 `+∞`。
- 若 `x` 为 `0⁻`，则结果为 `0⁻`。
- 若 `x` 小于 `0`，则结果为 `NaN`。

### 形式语法

{{CSSSyntax}}

## 示例

### 根据平方根缩放尺寸

此示例展示了如何使用 `sqrt()` 函数计算尺寸。

#### HTML

```html
<div class="boxes">
  <div class="box">50px</div>
  <div class="box one">100px</div>
  <div class="box two">150px</div>
  <div class="box three">200px</div>
</div>
```

#### CSS

此处使用 [CSS 自定义属性](/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)定义待用尺寸。首先声明第一个尺寸（`--size-0`），再用此尺寸计算其他尺寸。

- `--size-1` 所计算的为 `--size-0` 的值（50px）乘以 4 的平方根（2），结果为 100px。
- `--size-2` 所计算的为 `--size-0` 的值（50px）乘以 9 的平方根（3），结果为 150px。
- `--size-3` 所计算的为 `--size-0` 的值（50px）乘以 16 的平方根（4），结果为 200px。

```css
:root {
  --size-0: 50px;
  --size-1: calc(var(--size-0) * sqrt(4)); /*  100px */
  --size-2: calc(var(--size-0) * sqrt(9)); /*  150px */
  --size-3: calc(var(--size-0) * sqrt(16)); /*  200px */
}
```

```css hidden
.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.box {
  width: var(--size-0);
  height: var(--size-0);
  background-color: tomato;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

再将这些尺寸应用于这些选择器的 `width` 和 `height` 值。

```css
.one {
  width: var(--size-1);
  height: var(--size-1);
}
.two {
  width: var(--size-2);
  height: var(--size-2);
}
.three {
  width: var(--size-3);
  height: var(--size-3);
}
```

#### 结果

{{EmbedLiveSample("根据平方根缩放尺寸", "100%", "220px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("pow")}}
- {{CSSXref("hypot")}}
- {{CSSXref("log")}}
- {{CSSXref("exp")}}
