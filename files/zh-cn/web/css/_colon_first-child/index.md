---
title: ":first-child"
slug: Web/CSS/:first-child
---

{{CSSRef}}

**`:first-child`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)表示在一组兄弟元素中的第一个元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-first-child.html", "tabbed-shorter")}}

## 语法

```css
:first-child {
  /* ... */
}
```

## 示例

### 基础示例

#### HTML

```html
<div>
  <p>此文本已选中！</p>
  <p>此文本未选中。</p>
</div>

<div>
  <h2>此文本未被选中：它不是一个 `p`。</h2>
  <p>此文本未被选中。</p>
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

#### 结果

{{EmbedLiveSample('基础示例', 500, 200)}}

### 样式化列表

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

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

#### 结果

{{EmbedLiveSample('样式化列表')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":-moz-first-node")}} {{Non-standard_Inline}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
