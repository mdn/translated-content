---
title: Window.getSelection
slug: Web/API/Window/getSelection
---

{{ ApiRef() }}

返回一个 {{domxref("Selection")}} 对象，表示用户选择的文本范围或光标的当前位置。

## 语法

```
const selection = window.getSelection() ;
```

- `selection` 是一个 {{domxref("Selection")}} 对象。如果想要将 `selection` 转换为字符串，可通过连接一个空字符串（""）或使用 {{jsxref("String.toString()")}} 方法。

## 示例

```js
function foo() {
  let selObj = window.getSelection();
  console.log(selObj);
  let selRange = selObj.getRangeAt(0);
  // 其他代码
}
```

## 备注

在 JavaScript 中，当一个对象被传递给期望字符串作为参数的函数中时（如 {{ Domxref("window.alert") }} 或 {{ Domxref("document.write") }}），对象的{{jsxref("Object.toString","toString()")}}方法会被调用，然后将返回值传给该函数。

在上例中，`selObj.toString()` 会在传递到 {{domxref("window.alert()")}}时自动调用。然而，当你试图在 {{domxref("Selection")}} 对象上使用一个 JavaScript 的{{jsxref("Global_Objects/String", "String")}} 对象上的属性或者方法时（如 {{jsxref("String.prototype.length")}} 或者 {{jsxref("String.prototype.substr()")}}），会导致错误（如果没有相应的属性或方法时）或返回不是期望的结果（如果存在相应的属性或方法）。如果想要将 `Selection` 对象作为一个字符串使用，请直接调用 `toString()` 方法：

```js
var selectedText = selObj.toString();
```

- `selObj` 是一个`Selection` 对象，
- `selectedText` 是一个字符串（被选中的文本）。

### 相关对象

你还可以使用 {{domxref("Document.getSelection()")}}，两个方法等价。

值得注意的是，目前在 Firefox, Edge (非 Chromium 版本) 及 Internet Explorer 中，`getSelection()` 对 {{htmlelement("textarea")}} 及 {{htmlelement("input")}} 元素不起作用。 {{domxref("HTMLInputElement.setSelectionRange()")}} 或 `selectionStart` 及 `selectionEnd` 属性可用于解决此问题。

还要注意选择不同于焦点（详见 [Selection 及输入焦点](/zh-CN/docs/Web/API/Selection#Selection_%E5%8F%8A%E8%BE%93%E5%85%A5%E7%84%A6%E7%82%B9)）。可使用{{domxref("Document.activeElement")}} 来返回当前的焦点元素。

## 浏览器兼容性

{{Compat}}

## 相关链接

- [HTML Editing API](https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#selections)
- {{domxref("Selection")}}
- {{domxref("Range")}}
- {{domxref("Document.getSelection()")}}
