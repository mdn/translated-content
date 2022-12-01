---
title: ':enabled'
slug: Web/CSS/:enabled
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/CSS/Pseudo-classes) **`:enabled`** 表示任何被启用的（enabled）元素。如果一个元素能够被激活（如选择、点击或接受文本输入），或者能够获取焦点，则该元素是启用的。元素也有一个禁用的状态（disabled state），在被禁用时，元素不能被激活或获取焦点。

```css
/* 选择任何启用状态的 <input> */
input:enabled {
  color: blue;
}
```

## 语法

{{csssyntax}}

## 示例

下面的代码，当文本输入框处于启用状态时，输入框 {{htmlElement("input")}} 的文本是绿色的，处于禁用状态时，输入框的文本则是灰色的。这样可以把元素是否可用反馈给用户。

HTML：

```html
<form action="url_of_form">
  <label for="FirstField">First field (enabled):</label>
  <input type="text" id="FirstField" value="Lorem"><br>

  <label for="SecondField">Second field (disabled):</label>
  <input type="text" id="SecondField" value="Ipsum" disabled="disabled"><br>

  <input type="button" value="Submit">
</form>
```

CSS：

```css
input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}
```

### 结果

{{EmbedLiveSample("Enabled_Disabled_Inputs_Example",550,95)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref(":disabled") }}
