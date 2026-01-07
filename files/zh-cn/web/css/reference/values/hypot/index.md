---
title: hypot()
slug: Web/CSS/Reference/Values/hypot
---

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions) **`hypot()`** 为指数型函数，返回其参数平方和的[平方根](https://zh.wikipedia.org/wiki/平方根)。

尽管 {{CSSXref("pow")}} 和 {{CSSXref("sqrt")}} 仅作用于无单位数值，然而 `hypot()` 可接受带单位的值，但是这些值须全部具有相同[类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)。

## 语法

```css
/* <number> 值 */
width: hypot(2em); /* 2em */
width: hypot(3em, 4em); /* 5em */
width: hypot(30px, 40px); /* 50px */
width: hypot(48px, 64px); /* 80px */
width: hypot(3px, 4px, 5px); /* 7.0710678118654755px */
```

### 参数

`hypot(x [, ...]#)` 函数接受由逗号分隔的至少一个计算式作为其参数。

- `x`、`x2`、……、`xN`
  - : 解析为 {{CSSXref("&lt;number&gt;")}}、{{CSSXref("&lt;dimension&gt;")}} 或 {{CSSXref("&lt;percentage&gt;")}} 的计算式。

### 返回值

（根据输入）返回 {{CSSXref("&lt;number&gt;")}}、{{CSSXref("&lt;dimension&gt;")}} 或 {{CSSXref("&lt;percentage&gt;")}}，为其参数平方和的平方根。

- 若任一输入为 `infinite`，则结果为 `+∞`。
- 若提供单个参数，则结果为其输入值的绝对值。`hypot(2em)` 和 `hypot(-2em)` 均解析为 `2em`。

### 形式语法

{{CSSSyntax}}

## 示例

### 基于 hypot 函数的尺寸

此示例展示了如何使用 `hypot()` 函数计算尺寸。

#### HTML

```html
<div class="boxes">
  <div class="box">100px</div>
  <div class="box one">100px</div>
  <div class="box two">141.42px</div>
  <div class="box three">250px</div>
</div>
```

#### CSS

此处使用 [CSS 自定义属性](/zh-CN/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)定义待用尺寸。首先声明第一个尺寸（`--size-0`），再用此尺寸计算其他尺寸。

- `--size-1` 所计算的为 `--size-0`（100px）的斜边长。将此值平方后——由于无其他值——返回此值的平方根，结果为 100px。
- `--size-2` 所计算的为两个 `--size-0`（100px）的斜边长。将此值平方后（100px \* 100px = 10000px<sup>2</sup>）再加上 `--size-0` 的平方（10000px<sup>2</sup> + 10000px<sup>2</sup> = 20000px<sup>2</sup>），返回和的平方根（√(20000px<sup>2</sup>)），结果为 141.42px。
- `--size-3` 所计算的为 `--size-0` \* 1.5（150px）和 `--size-0` \* 2（200px）的斜边长。其结果为这些值的平方和的平方根——将这些值平方（22500px<sup>2</sup> 和 40000px<sup>2</sup>）后相加（62500px<sup>2</sup>），用所得到的和再开平方根，结果为 250px。

```css
:root {
  --size-0: 100px;
  --size-1: hypot(var(--size-0)); /*  100px */
  --size-2: hypot(var(--size-0), var(--size-0)); /*  141.42px */
  --size-3: hypot(
    calc(var(--size-0) * 1.5),
    calc(var(--size-0) * 2)
  ); /*  250px */
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

{{EmbedLiveSample("基于 hypot 函数的尺寸", "100%", "270px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("pow")}}
- {{CSSXref("sqrt")}}
- {{CSSXref("log")}}
- {{CSSXref("exp")}}
