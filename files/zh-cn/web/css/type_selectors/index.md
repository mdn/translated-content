---
title: 类型选择器
slug: Web/CSS/Type_selectors
---

{{CSSRef}}

CSS **类型选择器**通过节点名称匹配元素。换句话说，它选择一个文件中所有给定类型的元素。

```css
/* 所有 <a> 元素。*/
a {
  color: red;
}
```

类型选择器可以使用 {{CSSXref("@namespace")}} 赋予命名空间。这在处理包含多个命名空间的文件时很有用，比如带有内联 SVG 或 MathML 的 HTML 文档，或者混合了多个词汇的 XML 文档。

- `ns|h1`——匹配命名空间为 _ns_ 的 `<h1>` 元素
- `*|h1`——匹配所有 `<h1>` 元素
- `|h1`——匹配没有声明命名空间的 `<h1>` 元素

## 语法

```css
元素 { 样式声明 }
```

## 示例

### CSS

```css
span {
  background-color: skyblue;
}
```

### HTML

```html
<span>这里是由 span 元素包裹的一些文字。</span>
<p>这里是由 p 元素包裹的一些文字。</p>
<span>这里是由 span 元素包裹的一些文字。</span>
```

### 结果

{{EmbedLiveSample('示例', '100%', 150)}}

### 命名空间

在这个示例中，选择器将仅匹配 example 命名空间的 `<h1>` 元素。

```css
@namespace example url(http://www.example.com);
example|h1 {
  color: blue;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 选择器](/zh-CN/docs/Web/CSS/CSS_selectors)
- [学习 CSS 选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)
