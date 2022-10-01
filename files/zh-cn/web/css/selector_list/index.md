---
title: 选择器列表
slug: Web/CSS/Selector_list
---

{{CSSRef}}

CSS **选择器列表**（`,`），常被称为并集选择器或并集组合器，选择所有能被列表中的任意一个选择器选中的节点。

```css
/* 选择所有 <span> 和 <div> 元素 */
span, div {
  border: red 2px solid;
}
```

为了使样式表更简洁，可以使用逗号分隔的列表来对选择器进行分组。

## 语法

```plain
element, element, element { style properties }
```

## 例子

### 单行分组

在一行之中使用逗号为选择器分组。

```css
h1, h2, h3, h4, h5, h6 { font-family: helvetica; }
```

### 多行分组

使用逗号对多行选择器进行分组。

```css
#main,
.content,
article {
  font-size: 1.1em;
}
```

### 选择器列表无效化

使用选择器列表的一个缺点是，以下两段 CSS 代码并不不等价：

```css
h1 { font-family: sans-serif }
h2:maybe-unsupported { font-family: sans-serif }
h3 { font-family: sans-serif }
```

```css
h1, h2:maybe-unsupported, h3 { font-family: sans-serif }
```

这是因为，在选择器列表中如果有一个选择器不被支持，那么整条规则都会失效。

解决这个问题的一个方法是使用 {{CSSxRef(":is", ":is()")}} 选择器，它会忽视它的参数列表中失效的选择器，但是由于 {{CSSxRef(":is", ":is()")}} 会影响优先级的计算方式，这么做的代价是，其中的所有选择器都会拥有相同的优先级。

```css
h1 { font-family: sans-serif }
h2:maybe-unsupported { font-family: sans-serif }
h3 { font-family: sans-serif }
```

```css
:is(h1, h2:maybe-unsupported, h3) { font-family: sans-serif }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}} 和 {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}} 伪类，它们能避免选择器列表无效化的遗留设计错误。
