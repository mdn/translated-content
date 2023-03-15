---
title: ':invalid'
slug: Web/CSS/:invalid
---

{{CSSRef}}

**`:invalid`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) 表示任意内容未通过验证的 {{HTMLElement("input")}} 或其他 {{HTMLElement("form")}} 元素 .

```plain
/* 可选定任意无效的<input> */
input:invalid {
  background-color: pink;
}
```

这个伪类对于突出显示用户的字段错误非常有用。

## Syntax

```plain
:invalid
```

## Example

以下示例是一个简单的表单，当值有效时，元素颜色为绿色，无效时为红色。

### HTML

```html
<form>
  <label for="url_input">Enter a URL:</label>
  <input type="url" id="url_input" />
  <br />
  <br />
  <label for="email_input">Enter an email address:</label>
  <input type="email" id="email_input" required/>
</form>
```

### CSS

```css
input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #C00000;
}
```

### Result

{{EmbedLiveSample('Example', 600, 120)}}

## 注意

### 单选钮（Radio buttons）

若一组单选钮被设定为必须选定一个，在该组中没有按钮被选中的情况，:invalid 伪类被应用到该组中的所有按钮。（单选钮组按照 name 属性共享相同值。）

### Gecko 默认

默认情况下，Gecko 不应用 :invalid 伪类设置的样式。但是，Gecko 可以使用 {{cssxref(":-moz-ui-invalid")}} 伪类的样式（使用 {{Cssxref("box-shadow")}} 属性设置红色发光边框）来达到类似的效果，它可以被应用在:invalid 伪类的子集中。

你可以使用以下 CSS 禁用红色发光边框，或完全重写它以改变无效输入域的外观：

```plain
:invalid {
  box-shadow: none;
}

:-moz-submit-invalid {
  box-shadow: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Other validation-related pseudo-classes: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- Related Mozilla pseudo-classes: {{cssxref(":-moz-ui-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Form data validation](/zh-CN/docs/Learn/HTML/Forms/Form_validation)
