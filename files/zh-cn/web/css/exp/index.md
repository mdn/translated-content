---
title: exp()
slug: Web/CSS/exp
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions) **`exp()`** 为指数型函数，以数值为参数，返回数学常数 `e` 的指定次方。

数学常数 [e](<https://zh.wikipedia.org/wiki/E_(数学常数)>) 为自然对数的底数，约为 `2.718281828459045`。

`exp(number)` 函数含有单个计算式，此式返回与 {{CSSXref("pow", "pow(e, number)")}} 相同的值。

## 语法

```css
/* <number> 值 */
width: calc(100px * exp(-1)); /* 100px * 0.367879441171442 = 36px */
width: calc(100px * exp(0)); /* 100px * 1 = 100px */
width: calc(100px * exp(1)); /* 100px * 2.718281828459045 = 217px */
```

### 参数

`exp(number)` 函数仅接受一值作为其参数。

- `number`
  - : 解析为 {{CSSXref("number")}} 的计算式，表示 `e` 的幂次。

### 返回值

返回表示 e<sup>number</sup> 的非负 {{CSSXref("number")}}，为计算 `e` 的 `number` 次方的结果。

- 若 `number` 为 `-Infinity`，则结果为 `0`。
- 若 `number` 为 `0`，则结果为 `1`。
- 若 `number` 为 `1`，则结果为 `e`（即 `2.718281828459045`）。
- 若 `number` 为 `Infinity`，则结果为 `Infinity`。

### 形式语法

{{CSSSyntax}}

## 示例

### 旋转元素

由于 `exp()` 函数返回 {{CSSXref("number")}}，故可用于旋转（{{CSSXref("transform-function/rotate", "rotate")}}）元素。

#### HTML

```html
<div class="box box-1"></div>
<div class="box box-2"></div>
<div class="box box-3"></div>
<div class="box box-4"></div>
<div class="box box-5"></div>
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
div.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(orange, red);
}
div.box-1 {
  transform: rotate(calc(1turn * exp(-1))); // 0.3678794411714423turn
}
div.box-2 {
  transform: rotate(calc(1turn * exp(-0.75))); // 0.4723665527410147turn
}
div.box-3 {
  transform: rotate(calc(1turn * exp(-0.5))); // 0.6065306597126334turn
}
div.box-4 {
  transform: rotate(calc(1turn * exp(-0.25))); // 0.7788007830714049turn
}
div.box-5 {
  transform: rotate(calc(1turn * exp(0))); // 1turn
}
```

#### 结果

{{EmbedLiveSample("旋转元素", "100%", "200px")}}

### 以固定比值缩放标题

`exp()` 函数可用于如 CSS 模块式缩放等策略，即将页面上的所有字体尺寸以固定比值互相联系在一起。

#### HTML

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

#### CSS

```css
h1 {
  font-size: calc(1rem * exp(1.25)); // 3.4903429574618414rem
}
h2 {
  font-size: calc(1rem * exp(1)); // 2.718281828459045rem
}
h3 {
  font-size: calc(1rem * exp(0.75)); // 2.117000016612675rem
}
h4 {
  font-size: calc(1rem * exp(0.5)); // 1.6487212707001282rem
}
h5 {
  font-size: calc(1rem * exp(0.25)); // 1.2840254166877414rem
}
h6 {
  font-size: calc(1rem * exp(0)); // 1rem
}
```

#### 结果

{{EmbedLiveSample("以固定比值缩放标题", "100%", "300px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("pow")}}
- {{CSSXref("sqrt")}}
- {{CSSXref("hypot")}}
- {{CSSXref("log")}}
