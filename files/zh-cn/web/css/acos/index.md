---
title: acos()
slug: Web/CSS/acos
---

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) **`acos()`** 为三角函数，返回介于 `-1` 和 `1` 之间的数的反余弦值。此函数含有单个计算式，此式返回表示介于 `0deg` 和 `180deg` 之间的 {{CSSXref("&lt;angle&gt;")}} 的弧度数。

## 语法

```css
/* 单个 <number> 值 */
transform: rotate(acos(-0.2));
transform: rotate(acos(2 * 0.125));

/* 其他值 */
transform: rotate(acos(pi / 5));
transform: rotate(acos(e / 3));
```

### 参数

`acos(number)` 函数仅接受一值作为其参数。

- `number`
  - : 解析为介于 `-1` 和 `1` 之间的 {{CSSXref("&lt;number&gt;")}} 的计算式。

### 返回值

`number` 的反余弦值总将返回介于 `0deg` 和 `180deg` 之间的 {{CSSXref("&lt;angle&gt;")}}。

- 若 `number` 小于 `-1` 或大于 `1`，则结果为 `NaN`。
- 若 `number` 恰为 `1`，则结果为 `0`。

### 形式语法

{{CSSSyntax}}

## 示例

### 旋转元素

由于 `acos()` 函数返回 {{CSSXref("&lt;angle&gt;")}}，故可用于旋转（{{CSSXref("transform-function/rotate", "rotate")}}）元素。

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
  transform: rotate(acos(1));
}
div.box-2 {
  transform: rotate(acos(0.5));
}
div.box-3 {
  transform: rotate(acos(0));
}
div.box-4 {
  transform: rotate(acos(-0.5));
}
div.box-5 {
  transform: rotate(acos(-1));
}
```

#### 结果

{{EmbedLiveSample("旋转元素", "100%", "200px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("sin")}}
- {{CSSXref("cos")}}
- {{CSSXref("tan")}}
- {{CSSXref("asin")}}
- {{CSSXref("atan")}}
- {{CSSXref("atan2")}}
