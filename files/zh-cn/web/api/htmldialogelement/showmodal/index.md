---
title: HTMLDialogElement：showModal() 方法
short-title: showModal()
slug: Web/API/HTMLDialogElement/showModal
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLDialogElement")}} 接口的 **`showModal()`** 方法将对话框显示为模态对话框，叠放在其他可能可见的对话框或元素之上。

模态对话框显示在{{glossary("top layer", "顶层")}}中，并伴随 {{cssxref("::backdrop")}} 伪元素。与对话框位于同一文档中的元素（对话框及其后代除外）会变为*惰性*（如同指定了 [`inert`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/inert) 属性）。仅包含该对话框的文档会被阻塞；如果对话框在 iframe 中渲染，页面的其余部分仍可交互。

## 语法

```js-nolint
showModal()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果对话框已经以非模态方式打开（即已通过 {{domxref("HTMLDialogElement.show()")}} 打开），则抛出此异常。

## 示例

### 基本用法

以下示例展示一个简单按钮：点击后会使用 `showModal()` 方法打开一个 {{htmlelement("dialog")}}。

对话框打开时，你无法与页面其余部分交互，包括点击本会触发警告框的*触发警告*按钮。

你可以点击*关闭对话框*按钮来关闭对话框（通过 {{domxref("HTMLDialogElement.close()")}} 方法）。

#### HTML

```html
<dialog id="dialog">
  <button type="button" id="close">关闭对话框</button>
</dialog>

<p><button id="open">打开对话框</button></p>
<p><button id="alert">触发警告</button></p>
```

#### JavaScript

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const alertButton = document.getElementById("alert");

// “打开”按钮打开模态对话框
openButton.addEventListener("click", () => {
  dialog.showModal();
});

// “触发警告”按钮触发警告框
alertButton.addEventListener("click", () => {
  alert("你点击了我！");
});

// “关闭”按钮关闭对话框
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### 结果

{{EmbedLiveSample("基本用法", "100%", "250px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML {{htmlelement("dialog")}} 元素
- {{domxref("HTMLDialogElement.show()")}}
