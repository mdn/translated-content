---
title: pow()
slug: Web/CSS/Reference/Values/pow
---

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions) **`pow()`** 为指数型函数，返回底数的某数次方的值。

{{CSSXref("exp")}} 函数为 `pow()` 的特例，其底数为数学常数 [e](<https://zh.wikipedia.org/wiki/E_(数学常数)>)。

## 语法

```css
/* <number> 值 */
width: calc(10px * pow(5, 2)); /* 10px * 25 = 250px */
width: calc(10px * pow(5, 3)); /* 10px * 125 = 1250px */
width: calc(10px * pow(2, 10)); /* 10px * 1024 = 10240px */
```

### 参数

`pow(base, number)` 函数接受两个以逗号分隔的值作为其参数。

- `base`
  - : 解析为 {{CSSXref("&lt;number&gt;")}} 的计算式，表示底数。

- `number`
  - : 解析为 {{CSSXref("&lt;number&gt;")}} 的计算式，表示指数。

### 返回值

返回表示 base<sup>number</sup> 的 {{CSSXref("&lt;number&gt;")}}，即 `base` 的 `number` 次方。

## 形式语法

{{CSSSyntax}}

## 示例

### 以固定比值缩放标题

`pow()` 函数可用于如 CSS 模块式缩放等策略，即将页面上的所有字体尺寸以固定比值互相联系在一起。

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
  font-size: calc(1rem * pow(1.5, 4));
}
h2 {
  font-size: calc(1rem * pow(1.5, 3));
}
h3 {
  font-size: calc(1rem * pow(1.5, 2));
}
h4 {
  font-size: calc(1rem * pow(1.5, 1));
}
h5 {
  font-size: calc(1rem * pow(1.5, 0));
}
h6 {
  font-size: calc(1rem * pow(1.5, -1));
}
```

#### 结果

{{EmbedLiveSample("以固定比值缩放标题", "100%", "300px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("sqrt")}}
- {{CSSXref("hypot")}}
- {{CSSXref("exp")}}
- {{CSSXref("log")}}
