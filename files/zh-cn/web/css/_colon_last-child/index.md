---
title: :last-child
slug: Web/CSS/:last-child
---

{{CSSRef}}

**`:last-child`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)代表一组兄弟元素中的最后元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-last-child.html", "tabbed-shorter")}}

## 语法

```css
:last-child {
  /* ... */
}
```

## 示例

### 基础示例

#### HTML

```html
<div>
  <p>This text isn't selected.</p>
  <p>This text is selected!</p>
</div>

<div>
  <p>This text isn't selected.</p>
  <h2>This text isn't selected: it's not a `p`.</h2>
</div>
```

#### CSS

```css
p:last-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### 结果

{{EmbedLiveSample('基础示例', 500, 200)}}

### 为列表添加样式

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>
    Item 3
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

ul li:last-child {
  border: 1px solid red;
  color: red;
}
```

#### 结果

{{EmbedLiveSample('为列表添加样式')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":-moz-last-node")}} {{Non-standard_Inline}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":nth-child")}}
