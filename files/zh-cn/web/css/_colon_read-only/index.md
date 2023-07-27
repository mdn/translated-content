---
title: ":read-only"
slug: Web/CSS/:read-only
---

{{CSSRef}}

**`:read-only`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/CSS/Pseudo-classes) 表示元素不可被用户编辑的状态（如锁定的文本输入框）。

```css
/* Selects any <input> element that is read-only */
/* Supported in Firefox with a prefix */
input:-moz-read-only {
  background-color: #ccc;
}

/* Supported in Blink/WebKit/Edge without a prefix */
input:read-only {
  background-color: #ccc;
}
```

> **备注：** 这个选择器不只是选择具有 [`readonly`](/zh-CN/docs/Web/HTML/Element/input#readonly) 属性的{{htmlElement("input")}} 元素，它也会选择所有的不能被用户编辑的元素。

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
input:-moz-read-only {
  background: cyan;
}
input:read-only {
  background: cyan;
}

p:-moz-read-only {
  background: lightgray;
}
p:read-only {
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

- {{cssxref(":read-write")}}
- HTML [`contenteditable`](/zh-CN/docs/Web/HTML/Global_attributes#contenteditable) attribute
