---
title: Window：confirm() 方法
slug: Web/API/Window/confirm
l10n:
  sourceCommit: b7310d059a28842d0a43ebabf814e8f2469c3419
---

{{ApiRef("Window")}}

`window.confirm()` 令浏览器显示一个带有可选消息的对话框，并等待用户确认或取消该对话框。

在某些情况下（例如，当用户切换标签时）浏览器可能不会实际显示对话框，或者不等待用户确认或取消对话框。

## 语法

```js-nolint
confirm()
confirm(message)
```

### 参数

- `message`
  - : 要在确认对话框中显示的字符串。

### 返回值

一个布尔值，表示是否选择了确定（`true`）或取消（`false`）。如果浏览器忽略了页面内的对话框，那么返回值总是 `false`。

## 示例

### 操作前确认

以下示例展示了如何检查确认对话框的返回值。当用户点击确定按钮，我们则调用 {{domxref("window.open()")}}；而如果用户点击取消，我们则在 {{htmlelement("pre")}} 元素中打印一些文本。

```html live-sample___confirm
<button id="windowButton">打开新的标签页</button>
<pre id="log"></pre>
```

```js live-sample___confirm
const windowButton = document.querySelector("#windowButton");
const log = document.querySelector("#log");

windowButton.addEventListener("click", () => {
  if (window.confirm("你想要打开新的标签页吗？")) {
    window.open("https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open");
  } else {
    log.innerText = "很高兴你能够留下来！";
  }
});
```

{{EmbedLiveSample('confirm', , , , , , , 'allow-modals allow-popups')}}

## 备注

对话框是模态窗口——它们阻止用户访问程序界面的其他部分，直到对话框被关闭。出于这个原因，你不应该过度使用任何创建对话框（或模态窗口）的函数。作为代替，可以使用 {{HTMLElement("dialog")}} 元素进行确认。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("dialog")}} 元素
- {{domxref("window.alert()")}}
- {{domxref("window.prompt()")}}
- [当你想要撤销时，切勿使用警告对话框](https://alistapart.com/article/neveruseawarning/)（A List Apart，2017）
