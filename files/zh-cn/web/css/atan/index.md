---
title: atan()
slug: Web/CSS/atan
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions) **`atan()`** 为三角函数，返回介于 `-∞` 和 `+∞` 之间的数的反正切值。此函数含有单个计算式，此式返回表示介于 `-90deg` 和 `90deg` 之间的 {{CSSXref("&lt;angle&gt;")}} 的弧度数。

## 语法

```css
/* 单个 <number> 值 */
transform: rotate(atan(1));
transform: rotate(atan(4 * 50));

/* 其他值 */
transform: rotate(atan(pi / 2));
transform: rotate(atan(e * 3));
```

### 参数

`atan(number)` 函数仅接受一值作为其参数。

- `number`
  - : 解析为介于 `-∞` 和 `+∞` 之间的 {{CSSXref("&lt;number&gt;")}} 的计算式。

### 返回值

`number` 的反正切值总将返回介于 `-90deg` 和 `90deg` 之间的 {{CSSXref("&lt;angle&gt;")}}。

- 若 `number` 为 `0⁻`，则结果为 `0⁻`。
- 若 `number` 为 `+∞`，则结果为 `90deg`。
- 若 `number` 为 `-∞`，则结果为 `-90deg`。

即：

- `atan(-infinity)` 表示 `-90deg`。
- `atan(-1)` 表示 `-45deg`。
- `atan(0)` 表示 `0deg`。
- `atan(1)` 表示 `45deg`。
- `atan(infinity)` 表示 `90deg`。

### 形式语法

{{CSSSyntax}}

## 示例

### 旋转元素

由于 `atan()` 函数返回 {{CSSXref("&lt;angle&gt;")}}，故可用于旋转（{{CSSXref("transform-function/rotate", "rotate")}}）元素。

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
  transform: rotate(atan(-99999));
}
div.box-2 {
  transform: rotate(atan(-1));
}
div.box-3 {
  transform: rotate(atan(0));
}
div.box-4 {
  transform: rotate(atan(1));
}
div.box-5 {
  transform: rotate(atan(99999));
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
- {{CSSXref("acos")}}
- {{CSSXref("atan2")}}
