---
title: tan()
slug: Web/CSS/tan
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions) **`tan()`** 为三角函数，返回某数的正切值，此值介于 `−infinity` 和 `infinity` 之间。此函数含有单个计算式，此式须将参数结果按弧度数解析为 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;angle&gt;")}}。

## 语法

```css
/* 单个 <angle> 值 */
width: calc(100px * tan(45deg));
width: calc(100px * tan(0.125turn));
width: calc(100px * tan(0.785398163rad));

/* 单个 <number> 值 */
width: calc(100px * tan(0.5773502));
width: calc(100px * tan(1.732 – 1));

/* 其他值 */
width: calc(100px * tan(pi / 3));
width: calc(100px * tan(e));
```

### 参数

`tan(angle)` 函数仅接受一值作为其参数。

- `angle`
  - : 解析为 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;angle&gt;")}} 的计算式。指定无单位数时，数理解为弧度数，表示 {{CSSXref("&lt;angle&gt;")}}。

### 返回值

`angle` 的正切值总将返回介于 `−∞` 和 `+∞` 之间的数。

- 若 `angle` 为 `infinity`、`-infinity` 或 `NaN`，则结果为 `NaN`。
- 若 `angle` 为 `0⁻`，则结果为 `0⁻`。
- 若 `angle` 为渐近线值（如 `90deg`、`270deg` 等），则*明确不定义*结果。作者*须不*依赖于 `tan()` 为这些输入返回任何特定值。

### 形式语法

{{CSSSyntax}}

## 示例

### 绘制平行四边形

`tan()` 函数可用于绘制有指定包围盒的平行四边形。

#### HTML

```html
<div class="parallelogram"></div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```css
.parallelogram {
  --w: 400;
  --h: 200;
  --angle: 30deg;
  position: relative;
  width: calc(1px * var(--w));
  height: calc(1px * var(--h));
}
.parallelogram::before {
  content: "";
  position: absolute;
  width: calc(100% - 100% * var(--h) / var(--w) * tan(var(--angle)));
  height: 100%;
  transform-origin: 0 100%;
  transform: skewX(calc(0deg - var(--angle)));
  background-color: red;
}
```

#### 结果

{{EmbedLiveSample("绘制平行四边形", "100%", "250px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("sin")}}
- {{CSSXref("cos")}}
- {{CSSXref("asin")}}
- {{CSSXref("acos")}}
- {{CSSXref("atan")}}
- {{CSSXref("atan2")}}
