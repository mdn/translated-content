---
title: <dialog>：对话框元素
slug: Web/HTML/Element/dialog
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<dialog>`** 元素表示一个对话框或其他交互式组件，例如一个可关闭警告、检查器或者窗口。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容"
          >流式元素</a
        >、<a href="/zh-CN/docs/Web/HTML/Element/Heading_Elements#sectioning_roots"
          >分段内容</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式元素"
          >流式元素</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">标签是否可省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容"
          >流式元素</a
        >的元素
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/dialog_role"
          >dialog</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

这个元素包含了[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

> **警告：** `tabindex` 属性不能被使用在 `<dialog>` 元素上。

- `open`
  - : 指示这个对话框是激活的和能互动的。当没有设置 `open` 属性时，对话框*不应该*显示给用户。推荐使用 `.show()` 或 `.showModal()` 方法来渲染对话框，而不是使用 `open` 属性。

## 无障碍考虑

`<dialog>` 元素的早期实现[在某些形式的辅助技术上仍存在可用性问题](https://www.scottohara.me/blog/2019/03/05/open-dialog.html)。为了保证 Safari 15.4 版本以下的无障碍性，推荐使用临时的解决方案（如：[a11y-dialog](https://a11y-dialog.netlify.app/)）以获得持续的可用性支持。

在实现一个对话框时，考虑最合适的地方来设置用户焦点是很重要的。通过使用 [autofocus](/zh-CN/docs/Web/HTML/Global_attributes/autofocus) 属性明确指出初始焦点的位置，将有助于确保初始焦点被设置到被认为是任何特定对话框的最佳初始焦点位置的元素。由于并不总是知道初始焦点可以设置在对话框中的什么地方，特别是对于对话框的内容在被调用时动态呈现的情况，如果有必要，作者可以决定聚焦于 `<dialog>` 元素本身，提供最佳的初始焦点位置。

确保给予用户关闭对话框的机制。最有力的方法是给用户提供一个明确的按钮，如确认、取消或关闭按钮。此外，对于那些使用键盘设备的人来说，<kbd>Escape</kbd> 键通常也会用来关闭模态对话框。默认情况下，一个由 `showModal()` 方法调用的 `<dialog>` 将允许其被 <kbd>Escape</kbd> 关闭。非模态对话框默认不会通过 <kbd>Escape</kbd> 键来关闭，而且根据非模态对话框所代表的内容，它可能不希望有这种行为。如果打开了多个模态对话框，<kbd>Escape</kbd> 只应该关闭最后一个可见对话框。

浏览器使用 ARIA [role="dialog"](/zh-CN/docs/Web/Accessibility/ARIA/Roles/dialog_role) 属性对 `<dialog>` 元素进行了类似于自定义对话框的暴露。由 `showModal()` 方法调用的 `<dialog>` 元素将有一个隐含的 [aria-modal="true"](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-modal)。而由 `show()` 方法调用的 `<dialog>` 元素，或通过使用 `open` 属性，或改变 `<dialog>` 的默认 `display` 而呈现的，将被暴露为 `[aria-modal="false"]`。建议使用适当的 `showModal()` 或 `show()` 方法来渲染对话框。

确保你的对话框实现不会破坏预期的默认行为，并遵循正确的标签建议。

## 使用说明

- {{HTMLElement("form")}} 元素可关闭含有属性 `method="dialog"` 的对话框。当提交表单时，对话框的 {{domxref("HTMLDialogElement.returnValue", "returnValue")}} 属性将会等于表单中被使用的提交按钮的 `value`。
- {{cssxref('::backdrop')}} CSS 伪元素可用于给使用 {{domxref("HTMLDialogElement.showModal()")}} 显示的 `<dialog>` 元素背景添加样式，例如在对话框被打开激活时，调暗背景中不可访问的内容。

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
    <p>
      <label
        >Favorite animal:
        <select>
          <option value="default">Choose…</option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
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
const updateButton = document.getElementById("updateDetails");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof favDialog.showModal !== "function") {
  favDialog.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
}
// "Update details" button opens the <dialog> modally
updateButton.addEventListener("click", () => {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    outputBox.value =
      "Sorry, the <dialog> API is not supported by this browser.";
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener("close", () => {
  outputBox.value = `${
    favDialog.returnValue
  } button clicked - ${new Date().toString()}`;
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
