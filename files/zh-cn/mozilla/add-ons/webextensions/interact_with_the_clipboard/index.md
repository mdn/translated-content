---
title: Interact with the clipboard
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
---

{{AddonSidebar}}

有两种方式可以让浏览器扩展与系统剪贴板交互：{{domxref("Document.execCommand()")}} 方法以及现代的异步的 [Clipboard API](/zh-CN/docs/Web/API/Clipboard_API).

{{domxref("Document.execCommand()")}} 方法常通过以下指令使用：

- `document.execCommand("copy")`
- `document.execCommand("cut")`
- `document.execCommand("paste")`

Clipboard API 提供了异步的连接来直接读写剪贴板内容。例，如此从剪贴板读取文本：

```js
navigator.clipboard.readText().then((text) => (outputElem.innerText = text));
```

这将请求剪贴板内容，并且当接收到响应时存储剪贴板文本到一个元素的 {{domxref("Node.innerText", "innerText")}}.

> **备注：** 异步的 Clipboard API 方法是一个近期新增的规范，并且这个规范可能不适用于所有浏览器。请在使用前测试了每一种方法的兼容性，以确保支持满足您的需求。

## 写入系统粘贴板

有两种向剪贴板写入数据的方法。你可以使用 {{domxref("Document.execCommand", "document.execCommand()")}} 来触发 "剪切" 和 "复制" 行为，这将用选择的数据覆盖剪贴板的当前内容。另一个选项是使用 Clipboard API 的 {{domxref("Clipboard.writeText()")}} 或 {{domxref("Clipboard.write()")}} 方法来用指定数据覆盖剪贴板内容。

### 使用 execCommand()

{{domxref("Document.execCommand", "document.execCommand()")}} 方法的 `"cut"` 与 `"copy"` 命令可以被用于以选中素材代替剪贴板的当前内容。这些命令无需任何特别的权限就可以使用，如果你在一个用于用户操作的短生存期的事件处理程序中使用他们 (例如，一次点击事件).

例如，假设你有一个下面的弹出菜单页面：

```html
<input id="input" type="text" /> <button id="copy">Copy</button>
```

使 "copy"按钮能复制 "input"中的文本，代码如下：

```js
function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("Copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

由于`execCommand()`命令在单击事件中，所以不需要特别的权限。

此外，如果用警报（alarm）替换上面的命令来触发复制事件：

```js
function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("Copy");
}

browser.alarms.create({
  delayInMinutes: 0.1,
});

browser.alarms.onAlarm.addListener(copy);
```

这种触发不一定成功，它取决于浏览器是否支持。Firefox 浏览器就不支持该功能，你会在浏览器控制台中看到以下信息：

```
"document.execCommand(‘cut’/‘copy’) was denied because it was not called from inside a short running user-generated event handler."
```

为了能够在这种情形下使用，你需要拥有"clipboardWrite"的权限（ [permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)）。因此，"clipboardWrite"权限能使你不通过临时事件处理程序就可以写入系统粘贴板中。

### 使用 Clipboard API

Clipboard API 更加灵活，因为你不仅可以将当前选择复制到剪贴板中，还可以直接指定要放入剪贴板的信息。

要使用 Clipboard API 需要在你的 `manifest.json` 文件中申请 `clipboardRead` 与 `clipboardWrite` 权限。

对于页面脚本，需要权限 API 的 `clipboard-write` 权限。你可通过 {{domxref("Permissions.query", "navigator.permissions.query()")}} 来检查这个权限：

```js
navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  if (result.state == "granted" || result.state == "prompt") {
    /* write to the clipboard now */
  }
});
```

这个函数使用一个字符串作为输入并且用它更新剪贴板：

```js
function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(
    function () {
      /* clipboard successfully set */
    },
    function () {
      /* clipboard write failed */
    },
  );
}
```

### 特定浏览器注意事项

这里涉及的剪贴板和其他 API 正在快速发展，因此浏览器在工作方式上存在差异。

在 Chrome 中：

- 你可以在所有执行上下文中写入系统粘贴板，像背景网页、内容脚本、标签页和弹出菜单。
- 你不需要 `"clipboardWrite"` 权限，甚至不需要在用户生成的事件处理程序中写入粘贴板

在 Firefox 中：

- 除了背景网页外，你可以在所有执行上下文中使用 execCommand 写入粘贴板。在 Firefox 中，你无法选择文本或将输入字段聚焦在后台页面中，因此无法使用 execCommand 从后台页面写入剪贴板。
- 只有 version 51 以上才支持"clipboardWrite" 权限。
- 从 version 57 开始，可以使用 [`clipboard.setImageData()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData) API 将图像复制到剪贴板。
- 在 Firefox 633 中添加了对 Clipboard API {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}} 方法的支持。
- 当使用一个内容脚本，Clipboard API 只可用于 HTTPS 页。解决方法是，在内容脚本和后台脚本之间使用消息传递。

## 读取系统粘贴板

`execCommand()` 方法提供了 `"paste"` 指令，能让你粘贴内容。你可以使用 Clipboard API 的更灵活的方法： {{domxref("Clipboard.read()")}} 和 {{domxref("Clipboard.readText()")}}。

### 使用 execCommand()

首先，你需要为扩展申请 `"clipboardRead"` [permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 。即便你在用户生成的事件处理程序 ( 例如 [`click`](/zh-CN/docs/Web/API/Element/click_event) 或 [`keypress`](/zh-CN/docs/Web/API/Element/keypress_event) ) 中使用 "paste" 指令也是如此。

假设你的 HTML 页面内容如下：

```html
<input id="output" type="text" /> <button id="paste">粘贴</button>
```

要在用户单机 id 为 `"paste"` 的 {{HTMLElement("button")}} 时从剪贴板设置 id 为 `"output"` 的 {{HTMLElement("textarea")}} 的内容，可以使用这样的代码：

```js
function paste() {
  var pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);
```

### 使用 Clipboard API

剪贴板 API 的 {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} 和 {{domxref("Clipboard.read", "navigator.clipboard.read()")}} 方法让你从剪贴板读取任意文本或二进制数据。这让你从剪贴板访问数据无需将它们粘贴至一个可编辑的元素中。

一旦你通过 [Permissions API](/zh-CN/docs/Web/API/Permissions_API) 获取了 `"clipboard-read"` 权限，你就可以轻松读取剪贴板：

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

这个代码片段从剪贴板提取文本并且用该文本替换 ID 为 `"outbox"` 的元素的当前内容。

### 特定浏览器注意事项

Firefox 在 54 版本提供了 `"clipboardRead"` [permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) ，但是仅支持向处于 [内容可编辑模式](/zh-CN/docs/Web/Guide/HTML/Editable_content) 的元素粘贴，对于内容脚本，只能在 {{HTMLElement("textarea")}} 工作。对于后台脚本，任何元素都可被设置为内容可编辑模式。
