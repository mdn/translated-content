---
title: "::placeholder"
slug: Web/CSS/::placeholder
---

{{CSSRef}}{{SeeCompatTable}}

[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)**`::placeholder`**可以选择一个表单元素的[占位文本](/zh-CN/docs/Web/HTML/Forms_in_HTML#The_placeholder_attribute)，它允许开发者和设计师自定义[占位文本](/zh-CN/docs/Web/HTML/Forms_in_HTML#The_placeholder_attribute)的样式。

```css
::placeholder {
  color: red;
  font-size: 1.5em;
}
```

在使用了`::placeholder`伪元素的选择器中，仅有小一部分 CSS 属性可以使用，这个集合可以参考{{cssxref("::first-line")}}伪元素。

## 语法

{{csssyntax}}

## 示例

### 红色文本

#### HTML

```html
<input placeholder="我是红色的！" />
```

#### CSS

```css
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
}
```

#### 结果

{{ EmbedLiveSample('红色文本') }}

### 绿色文本

#### HTML

```html
<input placeholder="而我是绿色的！" />
```

#### CSS

```css
input::placeholder {
  color: green;
}
```

#### 结果

{{EmbedLiveSample('绿色文本')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相似阅读

- {{cssxref(":placeholder-shown")}}
- 与此伪元素选择器功能相同的几个浏览器私有选择器：

  - {{cssxref("::-webkit-input-placeholder")}}
  - {{cssxref("::-moz-placeholder")}}
  - {{cssxref(":-ms-input-placeholder")}}

- [Forms in HTML](/zh-CN/docs/Web/HTML/Forms_in_HTML)
- {{HTMLElement("input")}}
- {{HTMLElement("textarea")}}
