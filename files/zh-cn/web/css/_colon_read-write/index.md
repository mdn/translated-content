---
title: ":read-write"
slug: Web/CSS/:read-write
---

{{CSSRef}}

**`:read-write`** [`CSS`](/zh-CN/docs/Web/CSS) [`伪类`](/zh-CN/docs/Web/CSS/Pseudo-classes) 代表一个元素（例如可输入文本的 input 元素）可以被用户编辑。

```css
/* 选择所有可编辑的 <input> 元素 */
/* Firefox 中需要加前缀 */
input:-moz-read-write {
  background-color: #bbf;
}

/* Supported in Blink/WebKit/Edge without a prefix */
input:read-write {
  background-color: #bbf;
}
```

> **备注：** 这个选择器不仅仅选择 {{htmlElement("input")}} 元素，它也会选择所有可以被用户编辑的元素，例如设置了 [`contenteditable`](/zh-CN/docs/Web/HTML/Global_attributes#contenteditable) 属性的 {{htmlelement("p")}} 元素。

## 语法

{{csssyntax}}

## 示例

### HTML

```html
<input type="text" value="Type whatever you want here." />
<input type="text" value="This is a read-only field." readonly />
<p>This is a normal paragraph.</p>
<p contenteditable="true">You can edit this paragraph!</p>
```

### CSS

```css
input {
  min-width: 25em;
}
input:-moz-read-write {
  background: cyan;
}
input:read-write {
  background: cyan;
}

p:-moz-read-write {
  background: lightgray;
}
p:read-write {
  background: lightgray;
}
p[contenteditable="true"] {
  color: blue;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":read-only")}}
- HTML [`contenteditable`](/zh-CN/docs/Web/HTML/Global_attributes#contenteditable) attribute
