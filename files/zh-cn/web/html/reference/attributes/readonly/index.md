---
title: HTML 属性：readonly
slug: Web/HTML/Reference/Attributes/readonly
l10n:
  sourceCommit: b1699bac6bc35d0958734ff5e982f5f35974f448
---

当 **`readonly`** 布尔属性存在时，元素是不可变的，意味着用户无法编辑控件。

{{InteractiveExample("HTML Demo: readonly", "tabbed-shorter")}}

```html interactive-example
<label for="firstName">First Name:</label>
<input id="firstName" name="firstName" type="text" value="Adam" />

<label for="age">Age:</label>
<input id="age" name="age" type="number" value="42" readonly />

<label for="hobbies">Hobbies:</label>
<textarea id="hobbies" name="hobbies" readonly>Baseball</textarea>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:read-only,
textarea:read-only {
  background-color: silver;
}
```

## 概述

如果在 input 元素上指定了 `readonly` 属性，由于用户无法编辑输入内容，因此该元素不参与约束验证。

`{{HTMLElement("input/text", "text")}}`、`{{HTMLElement("input/search", "search")}}`、`{{HTMLElement("input/url", "url")}}`、`{{HTMLElement("input/tel", "tel")}}`、`{{HTMLElement("input/email", "email")}}`、`{{HTMLElement("input/password", "password")}}`、`{{HTMLElement("input/date", "date")}}`、`{{HTMLElement("input/month", "month")}}`、`{{HTMLElement("input/week", "week")}}`、`{{HTMLElement("input/time", "time")}}`、`{{HTMLElement("input/datetime-local", "datetime-local")}}`、`{{HTMLElement("input/number", "number")}}` 这些 {{HTMLElement("input")}} 类型和 {{HTMLElement("textarea")}} 表单控件元素均支持 `readonly` 属性。如果这些输入类型和元素中存在这个属性，则匹配 {{cssxref(':read-only')}} 伪类。如果不包含该属性，则将匹配 {{cssxref(':read-write')}} 伪类。

该属性不支持 {{HTMLElement("select")}} 或已不可变的 input 类型，也与之无关，如 `{{HTMLElement("input/checkbox", "checkbox")}}`、`{{HTMLElement("input/radio", "radio")}}` 或根据定义不能以值开头的 input 类型，如 `{{HTMLElement("input/file", "file")}}` input 类型。`{{HTMLElement("input/range", "range")}}` 和 `{{HTMLElement("input/color", "color")}}` 都有默认值。`{{HTMLElement("input/hidden", "hidden")}}` input 类型也不支持该属性，因为用户不可能填写隐藏的表单。也不支持任何按钮类型，包括 `image`。

> [!NOTE]
> 只有文本控件可以设置为只读，因为对于其他控件（如复选框和按钮）来说，只读和禁用之间没有任何有用的区别，所以 `readonly` 属性并不适用。

当输入具有 `readonly` 属性时，{{cssxref(":read-only")}} 伪类也适用于该输入。反之，支持 `readonly` 属性但未设置该属性的输入将匹配 {{cssxref(":read-write")}} 伪类。

### 属性交互

[`disabled`](/zh-CN/docs/Web/HTML/Reference/Attributes/disabled) 与 `readonly` 的区别在于，只读控件仍可发挥作用，仍可被聚焦，而禁用控件不能接收聚焦，不能随表单提交，一般在启用前不能作为控件发挥作用。

由于只读字段不能通过用户交互改变其值，因此 [`required`](/zh-CN/docs/Web/HTML/Reference/Attributes/required) 对同时指定了 `readonly` 属性的输入没有任何影响。

动态修改只读属性值的唯一方法是通过脚本。

> [!NOTE]
> `required` 属性不可以在指定了 `readonly` 属性上的 input 控件上使用。

### 可用性

浏览器会显示 `readonly` 属性。

### 约束验证

如果元素是只读的，则用户不能更新该元素的值，元素的值也不参与约束验证。

## 示例

### HTML

```html
<div class="group">
  <input type="text" value="一些值" readonly="readonly" id="text" />
  <label for="text">文本框</label>
</div>
<div class="group">
  <input type="date" value="2020-01-01" readonly="readonly" id="date" />
  <label for="date">日期</label>
</div>
<div class="group">
  <input type="email" value="一些值" readonly="readonly" id="email" />
  <label for="email">电子邮件</label>
</div>
<div class="group">
  <input type="password" value="一些值" readonly="readonly" id="pwd" />
  <label for="pwd">密码</label>
</div>
<div class="group">
  <textarea readonly="readonly" id="ta">一些值</textarea>
  <label for="ta">消息</label>
</div>
```

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(':read-only')}} 和 {{cssxref(':read-write')}} 伪类
- {{htmlelement('input')}}
- {{htmlelement('select')}}
