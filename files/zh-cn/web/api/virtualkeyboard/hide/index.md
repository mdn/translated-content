---
title: VirtualKeyboard：hide() 方法
slug: Web/API/VirtualKeyboard/hide
l10n:
  sourceCommit: 957097d5450e24397857fc10902e3d2028f1bc50
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

{{domxref("VirtualKeyboard")}} 接口的 **`hide()`** 方法用于以编程方式隐藏屏幕上的虚拟键盘。这在需要通过使用{{domxref("VirtualKeyboard_API", "虚拟键盘 API", "", "nocode")}} 实现自己的虚拟键盘逻辑时非常有用。

该方法仅在当前焦点元素的 [`virtualKeyboardPolicy`](/zh-CN/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) 属性设置为 `manual`，且 [`inputmode`](/zh-CN/docs/Web/HTML/Global_attributes/inputmode) 没有设置为 `none` 时起作用。

`hide()` 方法始终返回 `undefined`，并触发一个 {{domxref("VirtualKeyboard.geometrychange_event", "geometrychange")}} 事件。

## 语法

```js-nolint
hide()
```

### 参数

无。

### 返回值

未定义。

## 示例

下面的代码片段展示了如何使用 `virtualkeyboardpolicy` 属性阻止浏览器在单击或轻触时显示虚拟键盘。代码还使用 `navigator.virtualKeyboard.show()` 和 `navigator.virtualKeyboard.hide()` 方法，在点击按钮时显示和隐藏虚拟键盘：

```html
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
<button id="edit-button">编辑</button>
<script>
  if ("virtualKeyboard" in navigator) {
    const editor = document.getElementById("editor");
    const editButton = document.getElementById("edit-button");
    let isEditing = false;

    editButton.addEventListener("click", () => {
      if (isEditing) {
        navigator.virtualKeyboard.hide();
        editButton.textContent = "编辑";
      } else {
        editor.focus();
        navigator.virtualKeyboard.show();
        editButton.textContent = "保存更改";
      }

      isEditing = !isEditing;
    });
  }
</script>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("VirtualKeyboard_API", "虚拟键盘 API", "", "nocode")}}
- [使用虚拟键盘 API 实现完全控制](https://developer.chrome.google.cn/docs/web-platform/virtual-keyboard)
