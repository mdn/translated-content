---
title: HTMLFormElement：elements 属性
slug: Web/API/HTMLFormElement/elements
l10n:
  sourceCommit: 1d6353ce109e9d94a7b5c7b6c40713d626d3628a
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLFormElement")}} 的 **`elements`** 属性返回一个 {{domxref("HTMLFormControlsCollection")}}，其中列出了 {{HTMLElement("form")}} 元素中包含的所有表单控件。

你还可以独立使用 {{domxref("HTMLFormElement.length", "length")}} 属性只获取表单控件的数量。

你可以使用索引或元素的 `name` 或 `id` 属性访问返回集合中的特定表单控件。

在 HTML 5 之前，返回的对象是一个基于 `HTMLFormControlsCollection` 的 {{domxref("HTMLCollection")}}。

> [!NOTE]
> 同样，你也可以使用文档中的 {{domxref("Document.forms", "forms")}} 属性获取给定文档中包含的所有表单的列表。

## 值

一个 {{domxref("HTMLFormControlsCollection")}}，其中包含表单中所有非图像控件。这是一个实时集合；如果向表单添加或删除表单控件，此集合将更新并更改。

返回集合中的表单控件遵循树的前序深度优先遍历顺序出现在表单中。这称为**树顺序**。

只返回以下元素：

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}（由于历史原因，[`type`](/zh-CN/docs/Web/HTML/Reference/Elements/input#type) 类型为 `"image"` 的元素都将被省略）。
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- [与表单相关的自定义元素](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)

## 示例

### 快速语法示例

在此示例中，我们将了解如何获取表单控件列表，以及如何通过索引和名称或 ID 访问其成员。

```html
<form id="my-form">
  <label>用户名：<input type="text" name="username" /></label>
  <label>全名：<input type="text" name="full-name" /></label>
  <label>密码：<input type="password" name="password" /></label>
</form>
```

```js
const inputs = document.getElementById("my-form").elements;
const inputByIndex = inputs[0];
const inputByName = inputs["username"];
```

### 访问表单控件

此示例获取表单的元素列表，然后遍历该列表，查找类型为 [`"text"`](/zh-CN/docs/Web/HTML/Reference/Elements/input/text) 的 {{HTMLElement("input")}} 元素，以便对它们执行某种形式的处理。

```js
const inputs = document.getElementById("my-form").elements;

// 遍历表单控件
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
    // 更新输入文本
    inputs[i].value.toLocaleUpperCase();
  }
}
```

### 禁用表单控件

```js
const inputs = document.getElementById("my-form").elements;

// 遍历表单控件
for (let i = 0; i < inputs.length; i++) {
  // 禁用所有表单控件
  inputs[i].setAttribute("disabled", "");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
