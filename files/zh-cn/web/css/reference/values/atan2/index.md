---
title: atan2()
slug: Web/CSS/Reference/Values/atan2
---

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions) **`atan2()`** 为三角函数，返回介于 `-infinity` 和 `infinity` 之间的两值的反正切值。此函数接受两个参数，返回表示介于 `-180deg` 和 `180deg` 之间的 {{CSSXref("&lt;angle&gt;")}} 的弧度数。

## 语法

```css
/* 两个 <number> 值 */
transform: rotate(atan2(3, 2));

/* 两个 <dimension> 值 */
transform: rotate(atan2(1rem, -0.5rem));

/* 两个 <percentage> 值 */
transform: rotate(atan2(20%, -30%));

/* 其他值 */
transform: rotate(atan2(pi, 45));
transform: rotate(atan2(e, 30));
```

### 参数

`atan2(y, x)` 函数接受以逗号分隔的两值作为其参数。每值可为 {{CSSXref("&lt;number&gt;")}}、{{CSSXref("&lt;dimension&gt;")}} 或 {{CSSXref("&lt;percentage&gt;")}}。两值须为同一类型，但若均为 {{CSSXref("&lt;dimension&gt;")}}，则其单位可以不同（例：`atan2(100px, 5vw)` 为有效表达式）。

- `y`
  - : 点的纵坐标。为解析为 {{CSSXref("&lt;number&gt;")}}、{{CSSXref("&lt;dimension&gt;")}} 或 {{CSSXref("&lt;percentage&gt;")}} 的计算式。
- `x`
  - : 点的横坐标。为解析为 {{CSSXref("&lt;number&gt;")}}、{{CSSXref("&lt;dimension&gt;")}} 或 {{CSSXref("&lt;percentage&gt;")}} 的计算式。

### 返回值

对于所给两值 `x` 和 `y`，函数 `atan2(y, x)` 计算并返回正半横轴与从原点到点 `(x, y)` 的射线的夹角（{{CSSXref("&lt;angle&gt;")}}）。

### 形式语法

{{CSSSyntax}}

## 示例

### 旋转元素

由于 `atan2()` 函数返回 {{CSSXref("&lt;angle&gt;")}}，故可用于旋转（{{CSSXref("transform-function/rotate", "rotate")}}）元素。

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
  transform: rotate(atan2(3, 2));
}
div.box-2 {
  transform: rotate(atan2(3%, -2%));
}
div.box-3 {
  transform: rotate(atan2(-1, 0.5));
}
div.box-4 {
  transform: rotate(atan2(1, 0.5));
}
div.box-5 {
  transform: rotate(atan2(1rem, -0.5rem));
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
- {{CSSXref("atan")}}
