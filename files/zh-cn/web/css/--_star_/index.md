---
title: 自定义属性 (--*)：CSS 变量
slug: Web/CSS/--*
---

{{CSSRef}}

带有前缀 `--` 的属性名，比如 `--example--name`，表示的是带有值的自定义属性，其可以通过 {{cssxref("var", "var()")}} 函数在全文档范围内复用的。

CSS 自定义属性是可以级联的：每一个自定义属性可以多次出现，并且变量的值将会借助级联算法和自定义属性值运算出来。

{{cssinfo}}

## 语法

```css
--somekeyword: left;
--somecolor: #0000ff;
--somecomplexvalue: 3px 6px rgb(20, 32, 54);
```

- `<declaration-value>`
  - : 这个值将会由一个或者多个语法执行出来，只要这些语法是正确合理的，不包含非法语句。这个值就理应是有效语法执行出来的值。

> **备注：** 自定义属性名区分大小写——`--my-color` 会被视为与 `--My-color` 不同的自定义属性。

## 示例

### HTML

```html
<p id="firstParagraph">This paragraph should have a blue background and yellow text.</p>
<p id="secondParagraph">This paragraph should have a yellow background and blue text.</p>
<div id="container">
  <p id="thirdParagraph">This paragraph should have a green background and yellow text.</p>
</div>
```

### CSS

```css
:root {
  --first-color: #488cff;
  --second-color: #ffff8c;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #48ff32;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

### 结果

{{EmbedLiveSample('示例', 500, 130)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 自定义属性（变量）](/zh-CN/docs/Web/CSS/Using_CSS_variables)
- {{CSSXref("var", "var()")}} 函数
