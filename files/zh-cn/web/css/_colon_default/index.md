---
title: ":default"
slug: Web/CSS/:default
---

{{CSSRef}}

**`:default`** [CSS](/zh-CN/docs/Web/CSS) [pseudo-class](/zh-CN/docs/Web/CSS/Pseudo-classes) 表示一组相关元素中的默认表单元素。

该选择器可以在 {{htmlelement("button")}}, [`<input type="checkbox">`](/zh-CN/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/zh-CN/docs/Web/HTML/Element/input/radio), 以及 {{htmlelement("option")}} 上使用。

```css
/* Selects any default <input> */
input:default {
  background-color: lime;
}
```

允许多个选择的分组元素也可以具有多个默认值，即，它们可以具有最初选择的多个项目。在这种情况下，所有默认值都使用 `:default` 伪类表示。例如，您可以在一组复选框之间设置默认复选框。

## 语法

{{csssyntax}}

## 示例

### HTML

```html
<input type="radio" name="season" id="spring" />
<label for="spring">Spring</label>

<input type="radio" name="season" id="summer" checked />
<label for="summer">Summer</label>

<input type="radio" name="season" id="fall" />
<label for="fall">Fall</label>

<input type="radio" name="season" id="winter" />
<label for="winter">Winter</label>
```

### CSS

```css
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}
```

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
