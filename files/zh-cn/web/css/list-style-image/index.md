---
title: list-style-image
slug: Web/CSS/list-style-image
---

{{CSSRef}}

## 概要

**`list-style-image`** 属性用来指定一个能用来作为列表元素标记的图片。

通常来说使用{{ cssxref("list-style") }}较为方便。

{{cssinfo}}

## 语法

```css
/* Keyword values */
list-style-image: none;

/* <url> values */
list-style-image: url("starsolid.gif");

/* Global values */
list-style-image: inherit;
list-style-image: initial;
list-style-image: unset;
```

### 值

- `<url>`
  - : 用来作为标记的图片的地址。
- `none`
  - : 说明没有图片被用作标记。如果这个值被设定，那么 {{ Cssxref("list-style-type") }} 中定义的值会被取代。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### CSS

```css
ul {
  list-style-image: url("starsolid.gif");
}
```

### 结果

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref("list-style") }}, {{ Cssxref("list-style-type") }}, {{ Cssxref("list-style-position") }}
