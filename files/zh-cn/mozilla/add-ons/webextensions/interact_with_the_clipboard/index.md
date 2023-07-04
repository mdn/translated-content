---
title: Interact with the clipboard
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
page-type: guide
browser-compat:
  - api.Clipboard
  - webextensions.api.clipboard
---

{{AddonSidebar}}

在扩展中使用剪贴板，正在从Web API {{domxref("Document.execCommand()", "document.execCommand")}}方法（已被弃用）过渡到{{domxref("Clipboard", "navigator.clipboard")}}方法。

> **Note:** {{domxref("Clipboard", "navigator.clipboard")}}的API是最近增加的规范，可能不会在所有浏览器中完全实现。API是最近添加到规范中的，可能不会在所有浏览器中完全实现。本文描述了一些限制，但在使用之前，请务必查看每种方法的兼容性表格，以确保API支持你的需求。

这两个API的区别在于，{{domxref("Document.execCommand()", "document.execCommand")}}这类似于键盘上的复制、剪切和粘贴动作--在网页和剪贴板之间交换数据，而{{domxref("Clipboard", "navigator.clipboard")}}是向剪贴板写入和读取任意数据。

{{domxref("Clipboard", "navigator.clipboard")}}提供单独的方法来读取或写入：

- 文本内容，使用{{domxref("Clipboard.readText", "navigator.clipboard.readText()")}}和{{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}}。
- 图像、富文本、HTML以及其他富内容，使用{{domxref("Clipboard.read", "navigator.clipboard.read()")}}和{{domxref("Clipboard.write", "navigator.clipboard.write()")}}。

然而，虽然{{domxref("Clipboard.readText", "navigator.clipboard.readText()")}}和{{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}}在所有浏览器上都有效，但{{domxref("Clipboard.read", "navigator.clipboard.read()"}}和{{domxref("Clipboard.write", "navigator.clipboard.write()")}却不行。例如，在撰写本文时，在Firefox上，{{domxref("Clipboard.read", "navigator.clipboard.read()")}}和{{domxref("Clipboard.write", "navigator.clipboard.write()")}}并没有完全实现，这样，要：

- 使用 {{WebExtAPIRef("clipboard.setImageData","browser.clipboard.setImageData()")}} 将图像写入剪贴板，使用 {{domxref("Document.execCommand()","document.execCommand(&#34;paste&#34;)")}} 将图像粘贴到网页上。
- 将富内容（如HTML、包括图像在内的富文本等）写入剪贴板，使用{{domxref("Document.execCommand()", "document.execCommand(&#34;copy&#34;)"}}或{{domxref("Document.execCommand()", "document.execCommand(&#34;cut&#34;)"}}。然后，要么{{domxref("Clipboard.read", "navigator.clipboard.read()")}}（推荐），要么{{domxref("Document.execCommand()", "document.execCommand(&#34;paste&#34;)")}}从剪切板上读取内容。

## 写入系统粘贴板

有两种向剪贴板写入数据的方法。你可以使用 {{domxref("Document.execCommand", "document.execCommand()")}} 来触发 "剪切" 和 "复制" 行为，这将用选择的数据覆盖剪贴板的当前内容。另一个选项是使用 Clipboard API 的 {{domxref("Clipboard.writeText()")}} 或 {{domxref("Clipboard.write()")}} 方法来用指定数据覆盖剪贴板内容。

### 使用 Clipboard API

剪贴板API从你的扩展写任意的数据到剪贴板。使用该API需要在你的`manifest.json`文件中设置`"clipboardRead"`或`"clipboardWrite"`的权限。由于该API仅适用于[安全上下文](/zh-CN/docs/Web/Security/Secure_Contexts)，它不能从运行在`http:`-页面上的内容脚本中使用，只能使用`https:`-页面。

对于页面脚本，需要权限 API 的 `clipboard-write` 权限。你可通过 {{domxref("Permissions.query", "navigator.permissions.query()")}} 来检查这个权限：

```js
navigator.permissions.query({name: "clipboard-write"}).then((result) => {
  if (result.state === "granted" || result.state === "prompt") {
    /* write to the clipboard now */
  }
});
```

> **Note:** The `clipboard-write` permission name is not supported in Firefox, only Chromium browsers.

这个函数使用一个字符串作为输入并且用它更新剪贴板：

```js
function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(() => {
    /* clipboard successfully set */
  }, () => {
    /* clipboard write failed */
  });
}
```

### 使用 execCommand()

{{domxref("Document.execCommand", "document.execCommand()")}} 方法的 `"cut"` 与 `"copy"` 命令可以被用于以选中素材代替剪贴板的当前内容。这些命令无需任何特别的权限就可以使用，如果你在一个用于用户操作的短生存期的事件处理程序中使用他们 (例如，一次点击事件).

例如，假设你有一个下面的弹出菜单页面：

```html
<input id="input" type="text"/>
<button id="copy">Copy</button>
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
  delayInMinutes: 0.1
});

browser.alarms.onAlarm.addListener(copy);
```

这种触发不一定成功，它取决于浏览器是否支持。Firefox 浏览器就不支持该功能，你会在浏览器控制台中看到以下信息：

```
"document.execCommand(‘cut’/‘copy’) was denied because it was not called from inside a short running user-generated event handler."
```

为了能够在这种情形下使用，你需要拥有"clipboardWrite"的权限（ [permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)）。因此，"clipboardWrite"权限能使你不通过临时事件处理程序就可以写入系统粘贴板中。

> **Note:**{{domxref("Document.execCommand", "document.execCommand()")}} does not work on input fields of `type="hidden"`, with the HTML5 attribute `"hidden"`, or any matching CSS rule using `"display: none;"`. So, to add a "copy to clipboard" button to a `span`, `div`, or `p` tag, you need to use a workaround, such as setting the input's position to absolute and moving it out of the viewport.

### 特定浏览器注意事项

这里涉及的剪贴板和其他 API 正在快速发展，因此浏览器在工作方式上存在差异。

在 Chrome 中：

- 你不需要`"clipboardWrite"`，甚至不需要在用户生成的事件处理程序之外写到剪贴板。

在 Firefox 中：

- {{domxref("Clipboard.write", "navigator.clipboard.write()")}}并不支持。

参见[浏览器兼容性表](#browser_compatibility)以了解更多信息。

## 读取系统粘贴板

This section describes the options for reading or pasting data from the clipboard.

### 使用 Clipboard API

剪贴板 API 的 {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} 和 {{domxref("Clipboard.read", "navigator.clipboard.read()")}} 方法让你从剪贴板读取任意文本或二进制数据。这让你从剪贴板访问数据无需将它们粘贴至一个可编辑的元素中。

一旦你通过 [Permissions API](/zh-CN/docs/Web/API/Permissions_API) 获取了 `"clipboard-read"` 权限，你就可以轻松读取剪贴板：这个代码片段从剪贴板提取文本并且用该文本替换 ID 为 `"outbox"` 的元素的当前内容。

```js
navigator.clipboard.readText().then((clipText) =>
  document.getElementById("outbox").innerText = clipText);
```

### 使用 execCommand()

首先，你需要为扩展申请 `"clipboardRead"` [permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 。即便你在用户生成的事件处理程序 ( 例如 [`click`](/zh-CN/docs/Web/API/Element/click_event) 或 [`keypress`](/zh-CN/docs/Web/API/Element/keypress_event) ) 中使用 "paste" 指令也是如此。

假设你的 HTML 页面内容如下：

```html
<textarea id="output"></textarea> <button id="paste">粘贴</button>
```

当用户点击 "粘贴"{{HTMLElement("textarea")}}元素时，要从剪贴板上设置ID为 "output "的内容，可以使用这样的代码：

```js
function paste() {
  var pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);
```

### 特定浏览器注意事项

Firefox 在 54 版本提供了 `"clipboardRead"` [permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) ，但是仅支持向处于 [内容可编辑模式](/zh-CN/docs/Web/Guide/HTML/Editable_content) 的元素粘贴，对于内容脚本，只能在 {{HTMLElement("textarea")}} 工作。对于后台脚本，任何元素都可被设置为内容可编辑模式。

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/zh-CN/docs/Web/API/Clipboard_API)
- [Permissions API](/zh-CN/docs/Web/API/Permissions_API)
- [Make content editable](/zh-CN/docs/Web/HTML/Global_attributes#contenteditable)
