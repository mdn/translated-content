---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
---

{{ APIRef("HTML DOM") }}

{{ SeeCompatTable() }}

**`HTMLDialogElement`** 接口提供操作{{HTMLElement("dialog")}} 元素的方法.。此接口的方法和属性继承自 {{domxref("HTMLElement")}} 接口。

## 属性

_继承自父接口， {{domxref("HTMLElement")}}。_

| 名称          | 类型                     | 描述                                                                                           |
| ------------- | ------------------------ | ---------------------------------------------------------------------------------------------- |
| `open`        | {{domxref("Boolean")}}   | 来自[`open`](/zh-CN/docs/Web/HTML/Element/dialog#open) HTML 属性，表示这个对话框可以进行互动。 |
| `returnValue` | {{domxref("DOMString")}} | 用户获取对话框的值                                                                             |

## 方法

_继承自父接口， {{domxref("HTMLElement")}}。_

| 名称和参数    | 类型   | 描述                                                                                                                                                                                     |
| ------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `close()`     | `void` | 关闭对话框。可选传入类型为 {{domxref("DOMString")}} 的参数，用来更新对话框的 returnValue。                                                                                               |
| `show()`      | `void` | 非模式化的显示这个对话框，即：打开这个对话框之后依然可以和其他内容进行交互。可选传入类型为 {{domxref("Element")}} 或者 {{domxref("MouseEvent")}} 的参数，用来定义对话框的显示位置。      |
| `showModal()` | `void` | 模式化的显示这个对话框，并且将会至于所有其他对话框的顶层（屏蔽其他对话框的交互）。可选传入类型为{{domxref("Element")}} 或者 {{domxref("MouseEvent")}} 的参数，用来定义对话框的显示位置。 |

## Examples

### Example 1

```html
<!-- Anchor point example -->
<dialog id="bronteDialog">
  <p>That was part of a poem by Emily Brontë!</p>
</dialog>

<blockquote>
  <p>
    "Then art thou glad to seek repose?<br />
    Art glad to leave the sea,<br />
    And <strong id="anchor">anchor</strong> all thy weary woes<br />
    In calm Eternity?"
  </p>
</blockquote>

<menu>
  <button id="showDialogButton">Show dialog</button>
</menu>

<script>
  (function () {
    var showDialogButton = document.getElementById("showDialogButton");

    // 'Show dialog' button opens dialog, anchored at third line of quote
    showDialogButton.addEventListener("click", function () {
      var bronteDialog = document.getElementById("bronteDialog");
      var anchorPoint = document.getElementById("anchor");
      bronteDialog.show(anchorPoint);
    });
  })();
</script>
```

### Example 2

```html
<!-- Simple pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <section>
      <p>
        <label for="favAnimal">Favorite animal:</label>
        <select id="favAnimal" name="favAnimal">
          <option></option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </p>
    </section>
    <menu>
      <button id="cancel" type="reset">Cancel</button>
      <button type="submit">Confirm</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Update details</button>
</menu>

<script>
  (function () {
    var updateButton = document.getElementById("updateDetails");
    var cancelButton = document.getElementById("cancel");

    // Update button opens a modal dialog
    updateButton.addEventListener("click", function () {
      document.getElementById("favDialog").showModal();
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener("click", function () {
      document.getElementById("favDialog").close();
    });
  })();
</script>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
