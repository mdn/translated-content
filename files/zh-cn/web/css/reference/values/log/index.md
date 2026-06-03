---
title: log()
slug: Web/CSS/Reference/Values/log
---

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions) **`log()`** 为指数型函数，返回某数的对数。

[对数](https://zh.wikipedia.org/wiki/对数)为指数的逆运算。固定底数的此数次方将产生传入的第一个参数。

在 CSS 中传入单个参数时，将使用以 `e`（约 `2.7182818`）为底数的自然对数，不过底数可用可选的第二个参数设置为任意值。

## 语法

```css
/* <number> 值 */
width: calc(100px * log(7.389)); /* 200px */
width: calc(100px * log(8, 2)); /* 300px */
width: calc(100px * log(625, 5)); /* 400px */
```

### 参数

`log(value [, base]?)` 函数接受以逗号分隔的两值作为其参数。

- `value`
  - : 解析为大于等于 0 的 {{CSSXref("&lt;number&gt;")}} 的计算式，表示真数。

- `base`
  - : 可选。为解析为大于等于 0 的 {{CSSXref("&lt;number&gt;")}} 的计算式，表示对数的底数。若未定义，则使用默认的对数底数 `e`。

### 返回值

在定义了 `base` 时为 `value` 的对数值。

在未定义 `base` 时为 `value` 的自然对数（以 `e` 为底数）。

### 形式语法

{{CSSSyntax}}

## 示例

### 基于 `log()` 函数的尺寸

此示例展示了如何使用 `log()` 函数计算尺寸。

#### HTML

```html
<div class="boxes">
  <div class="box zero">50px</div>
  <div class="box one">100px</div>
  <div class="box two">150px</div>
  <div class="box three">200px</div>
</div>
```

#### CSS

此处使用 [CSS 自定义属性](/zh-CN/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)定义待用尺寸。首先声明第一个尺寸（`--size-0`），再用此尺寸计算其他尺寸。

- `--size-1` 所计算的为 `log(7.389)` 的值（2）乘 `--size-0`（50px），结果为 100px。
- `--size-2` 所计算的为 `log(8, 2)` 的值（3）乘 `--size-0`（50px），结果为 150px。
- `--size-3` 所计算的为 `log(625, 5)` 的值（4）乘 `--size-0`（50px），结果为 200px。

```css
:root {
  --size-0: 50px;
  --size-1: calc(var(--size-0) * log(7.389)); /*  100px */
  --size-2: calc(var(--size-0) * log(8, 2)); /*  150px */
  --size-3: calc(var(--size-0) * log(625, 5)); /*  200px */
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

{{EmbedLiveSample("基于_log_函数的尺寸", "100%", "220px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("pow")}}
- {{CSSXref("sqrt")}}
- {{CSSXref("hypot")}}
- {{CSSXref("exp")}}
