---
title: ":focus-within"
slug: Web/CSS/:focus-within
---

{{CSSRef}}

**`:focus-within`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)表示当元素或其任意后代元素被聚焦时，将匹配该元素。换言之，它表示 {{CSSxRef(":focus")}} 伪类匹配到该元素自身或它的后代时，该伪类生效。（这也包括 [shadow 树](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)中的后代元素。）

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus-within.html", "tabbed-shorter")}}

这个选择器非常有用，举个常见的例子，当用户聚焦于一个 {{htmlElement("input")}} 字段时，可以用它来突出显示整个 {{HTMLElement("form")}} 容器。

## 语法

```css
:focus-within {
  /* ... */
}
```

## 示例

此例子中，当表单某个文本输入框获得焦点后，表单会被设置颜色样式。

### HTML

```html
<p>试试在这个表单中输入点什么。</p>

<form>
  <label for="given_name">给定名称：</label>
  <input id="given_name" type="text" />
  <br />
  <label for="family_name">家庭名称：</label>
  <input id="family_name" type="text" />
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

{{EmbedLiveSample("示例", 500, 150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- [使用 focus-within 选择器吸引用户的注意力](https://dev.to/vtrpldn/grab-your-user-s-attention-with-the-focus-within-css-selector-4d4)
