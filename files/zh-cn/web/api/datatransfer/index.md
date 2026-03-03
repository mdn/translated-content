---
title: DataTransfer
slug: Web/API/DataTransfer
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer`** 对象用于保存上下文间的数据传输，如在拖放操作、剪切板读写中的那些数据。它可以保存一项或多项，每项都可以是同一种或多种数据类型的数据。

`DataTransfer` 主要旨在服务 [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)（用于 {{domxref("DragEvent.dataTransfer")}} 属性）。其在 HTML 拖放一节中得到定义，但也用于其他 API，如 {{domxref("ClipboardEvent.clipboardData")}} 和 {{domxref("InputEvent.dataTransfer")}}。但是，其他 API 只使用该接口的其中一部分，忽略了部分属性（如 `dropEffect`）。`DataTransfer` 文档将主要讨论拖放操作中该对象的使用方式。你应该参考相应 API 的文档以了解在其他上下文环境中 `DataTransfer` 的使用方式。

## 构造函数

- {{domxref("DataTransfer.DataTransfer","DataTransfer()")}}
  - : 生成并返回一个新的 `DataTransfer` 对象。

## 实例属性

- {{domxref("DataTransfer.dropEffect")}}
  - : 获取当前选定的拖放操作类型或者设置的为一个新的类型。值必须是 `none`、`copy`、`link` 或 `move` 之一。
- {{domxref("DataTransfer.effectAllowed")}}
  - : 提供所有可用的操作类型。值必须是 `none`、`copy`、`copyLink`、`copyMove`、`link`、`linkMove`、`move`、`all` 或 `uninitialized` 之一。
- {{domxref("DataTransfer.files")}} {{ReadOnlyInline}}
  - : 包含数据传输中可用的所有本地文件的列表。如果拖拽操作不涉及拖拽文件，则该属性为空列表。
- {{domxref("DataTransfer.items")}} {{readonlyInline}}
  - : 提供包含所有拖拽数据列表的 {{domxref("DataTransferItemList")}} 对象。
- {{domxref("DataTransfer.types")}} {{readonlyInline}}
  - : 提供 [`dragstart`](/zh-CN/docs/Web/API/HTMLElement/dragstart_event) 事件中设置的格式的字符串数组。

## 实例方法

- {{domxref("DataTransfer.addElement()")}} {{experimental_inline}} {{non-standard_inline}}
  - : 设置给定元素的拖拽源。这将成为 {{domxref("HTMLElement/drag_event", "drag")}} 和 {{domxref("HTMLElement/dragend_event", "dragend")}} 事件能被触发的元素而非默认对象（被拖拽的节点）。该方法为 Firefox 特有方法。
- {{domxref("DataTransfer.clearData()")}}
  - : 删除与给定类型关联的数据。类型参数是可选的。如果类型为空或未指定，则删除与所有类型关联的数据。如果指定类型的数据不存在，或者 DataTransfer 中不包含任何数据，则该方法不会产生任何效果。
- {{domxref("DataTransfer.getData()")}}
  - : 获取给定类型的数据，如果该类型的数据不存在或 DataTransfer 不包含数据，则返回空字符串。
- {{domxref("DataTransfer.setData()")}}
  - : 设置给定类型的数据。如果该类型的数据不存在，则将其添加到末尾，以便类型列表中的最后一项将是新的格式。如果该类型的数据已经存在，则在相同位置替换现有数据。
- {{domxref("DataTransfer.setDragImage()")}}
  - : 用于设置自定义的拖拽图像。

## 示例

本文档中的每个方法和属性都有自己的参考页面，每个参考页面中都直接包含了接口的示例或给出了示例的链接。

### 读取粘贴或放下事件的数据

在下述示例中，我们定义了包含三种不同类型的文本输入框的 {{htmlelement("form")}}，分别是文本 {{htmlelement("input")}} 元素、{{htmlelement("textarea")}} 元素和 [`contenteditable`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性设为 `true` 的 {{htmlelement("div")}} 元素。用户可以向其中任意元素粘贴或放下文本，我们将随后在表单中显示 {{domxref("ClipboardEvent.clipboardData")}} 或 {{domxref("DragEvent.dataTransfer")}} 对象中的数据。

#### HTML

```html
<form>
  <fieldset>
    <legend>&lt;input /></legend>
    <input type="text" />
    <table class="center">
      <tbody>
        <tr>
          <th scope="row">操作类型</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">内容类型</th>
          <td></td>
        </tr>
      </tbody>
    </table>
  </fieldset>
  <fieldset>
    <legend>&lt;textarea /></legend>
    <textarea></textarea>
    <table class="center">
      <tbody>
        <tr>
          <th scope="row">操作类型</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">内容类型</th>
          <td></td>
        </tr>
      </tbody>
    </table>
  </fieldset>
  <fieldset>
    <legend>&lt;div contenteditable /></legend>
    <div contenteditable></div>
    <table class="center">
      <tbody>
        <tr>
          <th scope="row">操作类型</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">内容类型</th>
          <td></td>
        </tr>
      </tbody>
    </table>
  </fieldset>
  <p class="center">
    <input type="reset" />
  </p>
</form>
```

#### CSS

```css
.center {
  text-align: center;
}

form > fieldset > * {
  vertical-align: top;
}
form input,
form textarea,
form [contenteditable] {
  min-width: 15rem;
  padding: 0.25rem;
}
[contenteditable] {
  appearance: textfield;
  display: inline-block;
  min-height: 1rem;
  border: 1px solid;
}

form table {
  display: inline-table;
}
table ol {
  text-align: left;
}
```

#### JavaScript

```js
const form = document.querySelector("form");

function displayData(event) {
  if (event.type === "drop") event.preventDefault();

  const cells = event.target.nextElementSibling.querySelectorAll("td");
  cells[0].textContent = event.type;
  const transfer = event.clipboardData || event.dataTransfer;
  const ol = document.createElement("ol");
  cells[1].textContent = "";
  cells[1].appendChild(ol);
  for (const item of transfer.items) {
    const li = document.createElement("li");
    li.textContent = `${item.kind} ${item.type}`;
    ol.appendChild(li);
  }
}

form.addEventListener("paste", displayData);
form.addEventListener("drop", displayData);
form.addEventListener("reset", () => {
  for (const cell of form.querySelectorAll("[contenteditable], td")) {
    cell.textContent = "";
  }
});
```

#### 结果

{{EmbedLiveSample("读取粘贴或放下事件的数据", "", 400, , , , , "allow-forms")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖拽操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [使用拖拽数据存储](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
