---
title: ':focus'
slug: Web/CSS/:focus
---

{{CSSRef}}

CSS[伪类](/zh-CN/CSS/Pseudo-classes) `:focus`表示获得焦点的元素（如表单输入）。当用户点击或触摸元素或通过键盘的“tab”键选择它时会被触发。

```css
/* Selects any <input> when focused */
input:focus {
  color: red;
}
```

> **备注：** 此伪类仅适用于焦点元素本身。如果要选择包含焦点元素的元素，请使用{{cssxref(":focus-within")}} 。

## 语法

{{csssyntax}}

## Example

### HTML

```html
<input class="red-input" value="I'll be red when focused."><br>
<input class="blue-input" value="I'll be blue when focused.">
```

### CSS

```css
.red-input:focus {
  background: yellow;
  color: red;
}

.blue-input:focus {
  background: yellow;
  color: blue;
}
```

### 结果

{{EmbedLiveSample('Example')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":focus-within")}}
