---
title: ':focus-within'
slug: Web/CSS/:focus-within
---

{{CSSRef}}

**`:focus-within`** 是一个[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) ，表示一个元素获得焦点，或，该元素的后代元素获得焦点。换句话说，元素自身或者它的某个后代匹配 {{CSSxRef(":focus")}} 伪类。（[shadow DOM 树](/zh-CN/docs/Web/Web_Components/Shadow_DOM)中的后代也包括在内）

```css
/* 当 <div> 的某个后代获得焦点时，匹配 <div> */
div:focus-within {
  background: cyan;
}
```

该选择器非常实用。举个通俗的例子：表单中的某个 {{htmlElement("input")}} 字段获得焦点时，整个表单的 {{HTMLElement("form")}} 元素都可被高亮。

## 语法

{{csssyntax}}

## Example

此例子中，当表单某个文本输入框获得焦点后，表单会被设置颜色样式。

### HTML

```html
<p>试试在这个表单中输入点什么。</p>

<form>
  <label for="given_name">Given Name:</label>
  <input id="given_name" type="text">
  <br>
  <label for="family_name">Family Name:</label>
  <input id="family_name" type="text">
</form>
```

### CSS

```css
form {
  border: 1px solid;
  color: gray;
  padding: 4px;
}

form:focus-within {
  background: #ff8;
  color: black;
}

input {
  margin: 4px;
}
```

### 结果

{{EmbedLiveSample("Example", 500, 150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}} {{Experimental_Inline}}
