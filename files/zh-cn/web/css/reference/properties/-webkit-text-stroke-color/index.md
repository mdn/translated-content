---
title: -webkit-text-stroke-color
slug: Web/CSS/Reference/Properties/-webkit-text-stroke-color
---

CSS 属性 **`-webkit-text-stroke-color`** 指定了文本字符的笔触[颜色](/zh-CN/docs/Web/CSS/Reference/Values/color_value)。若未设置此属性，则使用 {{CSSXref("color")}} 属性的值。

```css
/* 颜色值 */
-webkit-text-stroke-color: red;
-webkit-text-stroke-color: #e08ab4;
-webkit-text-stroke-color: rgb(200, 100, 0);

/* 全局值 */
-webkit-text-stroke-color: inherit;
-webkit-text-stroke-color: initial;
-webkit-text-stroke-color: revert;
-webkit-text-stroke-color: revert-layer;
-webkit-text-stroke-color: unset;
```

## 语法

### 取值

- `<color>`
  - : 笔触颜色。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 改变笔触颜色

#### HTML

```html
<p>带笔触的文本</p>
<input type="color" value="#ff0000" />
```

#### CSS

```css
p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #ff0000; /* 可在运行实例中被修改 */
}
```

```js hidden
const colorPicker = document.querySelector("input");
colorPicker.addEventListener("change", (evt) => {
  document.querySelector("p").style.webkitTextStrokeColor = evt.target.value;
});
```

#### 结果

{{EmbedLiveSample("改变笔触颜色", "500px", "100px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [宣布此特性的 Safari 博客文章](https://webkit.org/blog/85/introducing-text-stroke/)
- [解释此特性的 CSS-Tricks 文章](https://css-tricks.com/adding-stroke-to-web-text/)
- {{CSSXref("-webkit-text-fill-color")}}
- {{CSSXref("-webkit-text-stroke-width")}}
- {{CSSXref("-webkit-text-stroke")}}
