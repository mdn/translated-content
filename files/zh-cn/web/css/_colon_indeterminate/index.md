---
title: ':indeterminate'
slug: Web/CSS/:indeterminate
---

{{CSSRef}}

`:indeterminate` [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) 表示状态不确定的表单元素：

```
/* Selects any <input> whose state is indeterminate */
input:indeterminate {
  background: lime;
}
```

根据上述例子（选择器）选中的元素是：

- [`<input type="checkbox">`](/zh-CN/docs/Web/HTML/Element/input/checkbox) 元素，其 `indeterminate` 属性被 [JavaScript](/zh-CN/docs/Web/JavaScript)设置为 `true` 。
- [`<input type="radio">`](/zh-CN/docs/Web/HTML/Element/input/radio) 元素，表单中拥有相同 `name`值的所有单选按钮都未被选中时。
- 处于不确定状态的 {{HTMLElement("progress")}} 元素

## 语法

{{csssyntax}}

## 示例

### Checkbox & radio button

#### CSS

```css
input, span {
  background: red;
}

:indeterminate, :indeterminate + label {
  background: lime;
}
```

#### HTML

```html
<div>
  <input type="checkbox" id="checkbox">
  <label for="checkbox">Background should be green</label>
</div>
<div>
  <input type="radio" id="radio">
  <label for="radio">Background should be green</label>
</div>
```

#### JavaScript

```js
var inputs = document.getElementsByTagName("input");
for(var i = 0; i < inputs.length; i++) {
  inputs[i].indeterminate = true;
}
```

{{EmbedLiveSample('Checkbox_radio_button', '100%', 50)}}

### Progress bar

#### CSS

```
progress {
  margin: 4px;
}

progress:indeterminate {
  opacity: 0.5;
  background-color: lightgray;
  box-shadow: 0 0 2px 1px red;
}
```

#### HTML

```html
<progress>
```

### 结果

{{EmbedLiveSample('Progress_bar', 'auto', 30)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
