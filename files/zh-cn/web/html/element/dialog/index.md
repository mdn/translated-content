---
title: <dialog>
slug: Web/HTML/Element/dialog
tags:
  - Dialog
  - HTML
  - 元素
  - 参考
  - 可交互
translation_of: Web/HTML/Element/dialog
---
{{HTMLRef}}

[HTML](/zh-CN/docs/Web/HTML) **`<dialog>`** 元素表示一个对话框或其他交互式组件，例如一个检查器或者窗口。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式元素（flow_content）"
          >流式元素</a
        >,
        <a href="/zh-CN/docs/Web/HTML/Element/Heading_Elements#sectioning_roots"
          >sectioning root</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式元素（flow_content）"
          >流式元素</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式元素（flow_content）"
          >流式元素</a
        >的元素
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/dialog_role"
          >dialog</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>{{ARIARole("alertdialog")}}</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

这个元素包含了[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

> **警告：** `tabindex` 属性不能被使用在 `<dialog>` 元素上。

- {{htmlattrdef("open")}}
  - : 指示这个对话框是激活的和能互动的。当这个 `open` 属性没有被设置，对话框*不应该*显示给用户。推荐使用 `.show()` 或 `.showModal()` 方法来渲染 对话框，而不是使用 `open` 属性。

## 可用性注意事项

`dialog` 元素[在某些形式的辅助技术上仍存在可用性问题](https://www.scottohara.me/blog/2019/03/05/open-dialog.html)。因此，推荐使用临时的解决方案（如：[a11y-dialog](https://a11y-dialog.netlify.app/)）以获得持续的可用性支持。

## 使用备注

- `<form>` 元素可在此对话框中使用，但需要指定属性 `method="dialog"` 。当提交表单时，对话框的 {{domxref("HTMLDialogElement.returnValue", "returnValue")}} 属性将会等于表单中被使用的提交按钮的 `value` 。
- {{cssxref('::backdrop')}} CSS 伪元素可用于更改 `<dialog>` 背景元素样式，例如在对话框被打开激活时，调暗背景中不可访问的内容。仅当使用 {{domxref("HTMLDialogElement.showModal()")}} 显示对话框时才会绘制 backdrop 背景。

## 示例

### 简单示例

下面的示例会渲染一个非模态对话框。在对话框激活的状态下，点击“OK”按钮将会关闭对话框。提供一种机制来关闭 `dialog` 元素中的对话框是很重要的。例如，<kbd>Esc</kbd> 键在默认情况下不会关闭非模态对话框，同时也不能假设用户可以使用一个物理键盘（例如，使用不带物理键盘的触摸屏设备）。

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

### 高级示例

当单击“Update details”按钮时，此示例打开一个包含一个表单的弹出对话框。

#### HTML

```html
<!-- Simple modal dialog containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <p><label>Favorite animal:
      <select>
        <option value="default">Choose...</option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select>
    </label></p>
    <div>
      <button value="cancel">Cancel</button>
      <button id="confirmBtn" value="default">Confirm</button>
    </div>
  </form>
</dialog>
<p>
  <button id="updateDetails">Update details</button>
</p>
<output></output>
```

#### JavaScript

```js
const updateButton = document.getElementById('updateDetails');
const favDialog = document.getElementById('favDialog');
const outputBox = document.querySelector('output');
const selectEl = favDialog.querySelector('select');
const confirmBtn = favDialog.querySelector('#confirmBtn');

// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if ( typeof favDialog.showModal !== 'function' ) {
  favDialog.hidden = true;
  /* a fallback script to allow this dialog/form to function
    for legacy browsers that do not support <dialog>
    could be provided here.
  */
}
// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', function onSelect(e) {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', function onClose() {
  outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
});
```

### 结果

{{EmbedLiveSample("高级示例", "100%", 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLDialogElement/close_event", "close")}} 事件
- {{domxref("HTMLDialogElement/cancel_event", "cancel")}} 事件
- [HTML 表单指南](/zh-CN/docs/Learn/Forms)
- {{cssxref("::backdrop")}} 伪元素
- [dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill)
