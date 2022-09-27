---
title: ':first-child'
slug: Web/CSS/:first-child
---

{{CSSRef}}

**`:first-child`** [CSS](/zh-CN/docs/Web/CSS) [pseudo-class](/zh-CN/docs/Web/CSS/Pseudo-classes) 表示在一组兄弟元素中的第一个元素。

```css
/* Selects any <p> that is the first element
   among its siblings */
p:first-child {
  color: lime;
}
```

> **备注：** 最初定义时，所选元素必须有一个 parent。而从选择器 Level 4 开始，parent 不再是必须的。

## 语法

{{csssyntax}}

## 示例

### Basic example

#### HTML

```html
<div>
  <p>This text is selected!</p>
  <p>This text isn't selected.</p>
</div>

<div>
  <h2>This text isn't selected: it's not a `p`.</h2>
  <p>This text isn't selected.</p>
</div>
```

#### CSS

```css
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### Result

{{EmbedLiveSample('Basic_example', 500, 200)}}

### Styling a list

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3
    <ul>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
      <li>Item 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

#### Result

{{EmbedLiveSample('Styling_a_list')}}

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{cssxref(":first-of-type")}}, {{cssxref(":last-child")}}, {{cssxref(":nth-child")}}
