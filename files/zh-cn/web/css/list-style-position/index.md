---
title: list-style-position
slug: Web/CSS/list-style-position
---

{{CSSRef}}

**`list-style-position`** 属性指定标记框在主体块框中的位置。

使用助记符{{cssxref("list-style")}}更方便。

{{cssinfo}}

## 语法

```css
/* Keyword values */
list-style-position: inside;
list-style-position: outside;

/* Global values */
list-style-position: inherit;
list-style-position: initial;
list-style-position: unset;
```

### 数值

- `outside`
  - : 标记盒在主块盒的外面。
- `inside`
  - : 标记盒是主要块盒中的第一个行内盒，处于元素的内容流之后。

### Formal syntax

{{csssyntax}}

## 例子

### HTML

```html
<ul class="one">
  List 1
  <li>List Item 1-1</li>
  <li>List Item 1-2</li>
  <li>List Item 1-3</li>
  <li>List Item 1-4</li>
</ul>
<ul class="two">
  List 2
  <li>List Item 2-1</li>
  <li>List Item 2-2</li>
  <li>List Item 2-3</li>
  <li>List Item 2-4</li>
</ul>
<ul class="three">
  List 3
  <li>List Item 3-1</li>
  <li>List Item 3-2</li>
  <li>List Item 3-3</li>
  <li>List Item 3-4</li>
</ul>
```

### CSS

```css
.one {
  list-style: square inside;
}

.two {
  list-style-position: outside;
  list-style-type: circle;
}

.three {
  list-style-image: url("starsolid.gif");
  list-style-position: inherit;
}
```

### Result

{{EmbedLiveSample("例子","200","420")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("list-style")}}, {{Cssxref("list-style-type")}}, {{Cssxref("list-style-image")}}
