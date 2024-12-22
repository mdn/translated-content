---
title: HTML 属性：multiple
slug: Web/HTML/Attributes/multiple
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{HTMLSidebar}}

如果设置了布尔属性 **`multiple`**，则意味着表单控件将接受一个及以上的值。该属性对 {{HTMLElement("input/email", "email")}} 和 {{HTMLElement("input/file", "file")}} 输入类型以及 {{HTMLElement("select")}} 元素有效。用户选择多个值的方式取决于表单控件。

{{EmbedInteractiveExample("pages/tabbed/attribute-multiple.html", "tabbed-standard")}}

## 概述

根据类型的不同，如果设置了 `multiple` 属性，表单控件可能会有不同的外观。对于文件输入类型，浏览器提供的本地信息也不同。在 Firefox 中，当属性存在时，文件输入会显示“未选择文件”，而当属性不存在时，则会显示“未选择文件”。大多数浏览器都会在设置了 `multiple` 属性的情况下为 {{HTMLElement("select")}} 控件显示滚动列表框，而在省略该属性时则显示单行下拉菜单。无论是否包含 `multiple` 属性，{{HTMLElement("input/email", "email")}} 输入的显示效果都是一样的，但如果不包含该属性，则在包含一个以上逗号分隔的电子邮件地址时会匹配 {{cssxref(':invalid')}} 伪类。

当 {{HTMLElement("input/email", "email")}} 输入类型设置了 `multiple` 时，用户可以输入零个（如果没有设置 [`required`](/zh-CN/docs/Web/HTML/Attributes/required) 属性）、一个或多个逗号分隔的电子邮件地址。

```html
<input type="email" multiple name="emails" id="emails" />
```

当且仅当指定了 `multiple` 属性时，该值可以是一串格式正确的逗号分隔电子邮件地址。列表中每个地址的前导和后随空白字符都会被删除。

当 {{HTMLElement("input/file", "file")}} 输入类型设置了 `multiple` 属性时，用户可选择一个或多个文件。用户可以在所选平台允许的任何方式下，从文件选择器中选择多个文件（如按下 <kbd>Shift</kbd> 或 <kbd>Control</kbd> 键，然后单击一个文件）。

```html
<input type="file" multiple name="uploads" id="uploads" />
```

如果省略了该属性，在每个 `<input>` 上用户只能选择一个文件。

{{HTMLElement("select")}} 元素上的 `multiple` 属性表示从选项列表中选择零个或多个选项的控件。若不存在该属性，{{HTMLElement("select")}} 元素表示从选项列表中选择一个 {{HTMLElement("option")}} 的控件。

```html
<select multiple name="dwarfs" id="dwarfs">
  <option>Grumpy</option>
  <option>Happy</option>
  <option>Sleepy</option>
  <option>Bashful</option>
  <option>Sneezy</option>
  <option>Dopey</option>
  <option>Doc</option>
</select>
```

当指定了 `multiple` 时，大多数浏览器会显示一个滚动的列表框，而不是单行下拉菜单。

## 无障碍考虑

提供说明，帮助用户了解如何填写表格和使用各个表格控件。说明任何必填和选填内容、数据格式以及其他相关信息。使用 `multiple` 属性时，应告知用户允许使用多个值，并提供如何提供多个值的说明，例如“用逗号分隔电子邮件地址”。

在多选区上设置 `size="1"` 可以使其在某些浏览器中显示为单选框，但这样它就不会在聚焦时展开，从而损害了可用性。不要这样做。如果确实改变了选择项的外观（甚至根本没有这样做时），也要确保告知用户可以通过另一种方法选择多个选项。

## 示例

### email 输入

```html
<label for="emails">想要将邮件发送给谁？</label
><input
  type="email"
  multiple
  name="emails"
  id="emails"
  list="dwarf-emails"
  required
  size="64" />

<datalist id="dwarf-emails">
  <option value="grumpy@woodworkers.com">Grumpy</option>
  <option value="happy@woodworkers.com">Happy</option>
  <option value="sleepy@woodworkers.com">Sleepy</option>
  <option value="bashful@woodworkers.com">Bashful</option>
  <option value="sneezy@woodworkers.com">Sneezy</option>
  <option value="dopey@woodworkers.com">Dopey</option>
  <option value="doc@woodworkers.com">Doc</option>
</datalist>
```

```css hidden
input:invalid {
  border: red solid 3px;
}
```

当且仅当指定了 `multiple` 属性时，值可以是以逗号分隔的邮件地址列表，其中每个地址的前导和后随空白字符都会被删除。如果 [`required`](/zh-CN/docs/Web/HTML/Attributes/required) 属性存在，至少需要一个邮件地址。

当 `multiple` 属性存在时，某些浏览器支持为后续电子邮件地址显示相关的 {{htmlelement('datalist')}} 中选项的 [`list`](/zh-CN/docs/Web/HTML/Element/input#list)，而其他浏览器不支持。

{{EmbedLiveSample("email 输入", 600, 80)}}

### file 输入

如果在 {{HTMLElement("input/file", "file")}} 输入类型上设置了 `multiple`，用户就可以选择一个或多个文件：

```html
<form method="post" enctype="multipart/form-data">
  <p>
    <label for="uploads">选择要上传的图像：</label
    ><input
      type="file"
      id="uploads"
      name="uploads"
      accept=".jpg, .jpeg, .png, .svg, .gif"
      multiple />
  </p>
  <p>
    <label for="text">选择要上传的文本文件：</label
    ><input type="file" id="text" name="text" accept=".txt" />
  </p>
  <p>
    <input type="submit" value="提交" />
  </p>
</form>
```

{{EmbedLiveSample("file 输入", 600, 80) }}

请注意设置了 `multiple` 的示例与未设置 `file` 的其他输入在外观上的区别。

提交表单时，如果我们使用 [`method="get"`](/zh-CN/docs/Web/HTML/Element/form)，每个选定文件的名称都会以 `?uploads=img1.jpg&uploads=img2.svg` 的形式添加到 URL 参数中。但是，由于我们提交的是多部分表单数据，因此必须使用 post。更多信息请参阅 {{htmlelement('form')}} 元素和[发送表单数据](/zh-CN/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#method_属性)。

### select 元素

{{HTMLElement("select")}}元素上的 `multiple` 属性表示从选项列表中选择零个或多个选项的控件。若无该属性，{{HTMLElement("select")}} 元素表示从选项列表中选择一个 {{HTMLElement("option")}} 的控件。控件的外观通常会根据 `multiple` 属性的存在而有所不同，当存在该属性时，大多数浏览器显示的是滚动列表框，而不是单行下拉菜单。

```html
<form method="get" action="#">
  <p>
    <label for="dwarfs">选择你喜欢的小矮人樵夫：</label
    ><select multiple name="dwarfs" id="dwarfs">
      <option>grumpy@woodworkers.com</option>
      <option>happy@woodworkers.com</option>
      <option>sleepy@woodworkers.com</option>
      <option>bashful@woodworkers.com</option>
      <option>sneezy@woodworkers.com</option>
      <option>dopey@woodworkers.com</option>
      <option>doc@woodworkers.com</option>
    </select>
  </p>
  <p>
    <label for="favoriteOnly">选择你最喜欢的小矮人：</label
    ><select name="favoriteOnly" id="favoriteOnly">
      <option>grumpy@woodworkers.com</option>
      <option>happy@woodworkers.com</option>
      <option>sleepy@woodworkers.com</option>
      <option>bashful@woodworkers.com</option>
      <option>sneezy@woodworkers.com</option>
      <option>dopey@woodworkers.com</option>
      <option>doc@woodworkers.com</option>
    </select>
  </p>
  <p>
    <input type="submit" value="提交" />
  </p>
</form>
```

{{EmbedLiveSample("select 元素", 600, 120) }}

注意两个表单控件的外观区别。

```css
/* 取消注释该 CSS，使带 multiple 属性的高度与单选高度相同 */

/*
select[multiple] {
  height: 1.5em;
  vertical-align: top;
}
select[multiple]:focus,
select[multiple]:active {
  height: auto;
}
*/
```

有几种方法可以在带有 `multiple` 属性的 `<select>` 元素中选择多个选项。根据操作系统不同，鼠标用户可以在按下 <kbd>Ctrl</kbd>、<kbd>Command</kbd> 或 <kbd>Shift</kbd> 的同时单击多个选项以选择/取消选择它们。键盘用户可通过聚焦 `<select>` 元素来选择连续多个项目，使用 <kbd>Up</kbd> 或 <kbd>Down</kbd> 键选择所选范围的顶部或底部，并用光标键在选项间上下移动。非连续项选择支持尚不完善：项目应能通过按 <kbd>Space</kbd> 键来选择和取消选择，但不同浏览器的支持情况各不相同。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [允许多个电子邮件地址](/zh-CN/docs/Web/HTML/Element/input/email#允许多个电子邮件地址)
