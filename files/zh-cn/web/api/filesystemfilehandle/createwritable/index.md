---
title: FileSystemFileHandle：createWritable() 方法
slug: Web/API/FileSystemFileHandle/createWritable
l10n:
  sourceCommit: 1a7695e13c51d85a81e3e5d85feedbc5dbd2a379
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

{{domxref("FileSystemFileHandle")}} 接口的 **`createWritable()`** 方法用于创建一个 {{domxref('FileSystemWritableFileStream')}} 对象，可用于写入文件。此方法返回一个可兑现这些写入流的 {{jsxref('Promise')}} 对象。

任何通过写入流造成的更改在写入流被关闭前都不会反映到文件句柄所代表的文件上。这通常是将数据写入到一个临时文件来实现的，然后只有在写入文件流被关闭后才会用临时文件替换掉文件句柄所代表的文件。

## 语法

```js-nolint
createWritable()
createWritable(options)
```

### 参数

- `options` {{optional_inline}}

  - : 一个包含以下属性的对象：

    - `keepExistingData` {{optional_inline}}
      - : {{jsxref('Boolean', '布尔值', '', 'nocode')}}，默认为 `false`。当设为 `true` 时，如果文件存在，则现将现有文件的内容复制到临时文件，否则临时文件初始时内容为空。
    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : 指定可写文件流的锁定模式的字符串。默认值为 `"siloed"`。可能的值包括：
        - `"exclusive"`
          - : 只能打开一个 `FileSystemWritableFileStream` 写入器。在第一个写入器关闭之前尝试打开后续写入器会导致抛出 `NoModificationAllowedError` 异常。
        - `"siloed"`
          - : 可以同时打开多个 `FileSystemWritableFileStream` 写入器，每个写入器都有自己的交换文件，例如在多个标签页中使用同一个应用时。最后打开的写入器会写入其数据，因为每个写入器关闭时都会刷新数据。

### 返回值

一个 {{jsxref('Promise')}} 对象，可兑现一个 {{domxref('FileSystemWritableFileStream')}} 对象。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果句柄在读写（`readwrite`）模式下的 {{domxref('PermissionStatus.state')}} 不为 `'granted'`，则抛出此异常。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果未找到当前条目，则抛出该异常。
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : 如果浏览器无法获取与文件句柄关联的文件的锁，则抛出该异常。这可能是因为 `mode` 设置为 `exclusive`，并且尝试同时打开多个写入器。
- `AbortError` {{domxref("DOMException")}}
  - : 如果实现定义的恶意软件扫描和安全浏览检查失败，则抛出此异常。

## 示例

### 基本用法

以下异步函数用于将给定内容写入文件句柄，从而写入磁盘。

```js
async function writeFile(fileHandle, contents) {
  // 创建一个 FileSystemWritableFileStream 用来写入。
  const writable = await fileHandle.createWritable();

  // 将文件内容写入到流中。
  await writable.write(contents);

  // 关闭文件并将内容写入磁盘。
  await writable.close();
}
```

### 通过选项扩展用途

我们的 [`createWritable()` 模式测试](https://createwritable-mode-test.glitch.me/)示例提供了一个 {{htmlelement("button")}} 来选择要写入的文件，一个文本 {{htmlelement("input")}} 字段，你可以在其中输入一些要写入文件的文本，以及第二个 `<button>` 来将文本写入文件。

在上面的演示中，尝试选择文件系统上的文本文件（或输入新文件名），在输入字段中输入一些文本，然后将文本写入文件。打开文件系统上的文件以检查写入是否成功。

此外，尝试同时在两个浏览器标签页中打开页面。在第一个标签页中选择要写入的文件，然后立即尝试在第二个标签页中选择要写入的同一文件。你应该会收到一条错误消息，因为我们在 `createWritable()` 调用中设置了 `mode: "exclusive"`。

下面我们将探索代码。

#### HTML

两个 {{htmlelement("button")}} 元素和文本 {{htmlelement("input")}} 字段如下所示：

```html
<ol>
  <li>选择要写入的文件：<button class="select">选择文件</button></li>
  <li>
    <label for="filetext">输入要写入文件的文本：</label>
    <input type="text" id="filetext" name="filetext" disabled />
  </li>
  <li>将你的文本写入文件：<button class="write" disabled>写入文本</button></li>
</ol>
```

文本输入字段和写入文本按钮最初通过 [`disabled`](/zh-CN/docs/Web/HTML/Attributes/disabled) 属性设置为禁用——直到用户选择要写入的文件时，它们才应被使用。

```css hidden
li {
  margin-bottom: 10px;
}
```

#### JavaScript

我们首先获取对选择文件按钮、写入文本按钮和文本输入字段的引用。我们还声明一个全局变量 `writableStream`，它将存储对可写流的引用，用于在创建后将文本写入文件。我们最初将其设置为 `null`。

```js
const selectBtn = document.querySelector(".select");
const writeBtn = document.querySelector(".write");
const fileText = document.querySelector("#filetext");

let writableStream = null;
```

接下来，我们创建一个名为 `selectFile()` 的异步函数，当按下选择按钮时，我们将调用该函数。它使用 {{domxref("Window.showSaveFilePicker()")}} 方法向用户显示文件选择器对话框，并为他们选择的文件创建文件句柄。在该句柄上，我们调用 `createWritable()` 方法来创建一个流，以将文本写入所选文件。如果调用失败，我们会将错误记录到控制台。

我们向 `createWritable()` 传递一个包含以下选项的选项对象：

- `keepExistingData: true`：如果所选文件已存在，则在开始写入之前，将其中包含的数据复制到临时文件中。

- `mode: "exclusive"`：表示只能同时在文件句柄上打开一个写入器。如果第二个用户加载示例并尝试选择文件，他们将收到错误。

最后，我们启用输入字段和写文本按钮，因为它们是下一步所需要的，并禁用选择文件按钮（目前不需要）。

```js
async function selectFile() {
  // 创建新句柄
  const handle = await window.showSaveFilePicker();

  // 创建 FileSystemWritableFileStream 来写入
  try {
    writableStream = await handle.createWritable({
      keepExistingData: true,
      mode: "exclusive",
    });
  } catch (e) {
    if (e.name === "NoModificationAllowedError") {
      console.log(`你现在无法访问该文件；其他人正在尝试修改它。请稍后重试。`);
    } else {
      console.log(e.message);
    }
  }

  // 启用文本字段和写入按钮，禁用选择按钮
  fileText.disabled = false;
  writeBtn.disabled = false;
  selectBtn.disabled = true;
}
```

我们的下一个函数 `writeFile()` 使用 {{domxref("FileSystemWritableFileStream.write()")}} 将输入字段中输入的文本写入所选文件，然后清空输入字段。然后我们使用 {{domxref("WritableStream.close()")}} 关闭可写流，并重置演示以便再次运行——控件的 `disable` 状态切换回其原始状态，并且 `writableStream` 变量设置回 `null`。

```js
async function writeFile() {
  // 将文本写入我们的文件并清空文本字段
  await writableStream.write(fileText.value);
  fileText.value = "";

  // 关闭文件并将内容写入磁盘。
  await writableStream.close();

  // 禁用文本字段和写入按钮，启用选择按钮
  fileText.disabled = true;
  writeBtn.disabled = true;
  selectBtn.disabled = false;

  // 将 writeableStream 重新设置为 null
  writableStream = null;
}
```

为了使演示运行，我们在按钮上设置了事件监听器，以便在每个按钮被点击时运行相关的函数。

```js
selectBtn.addEventListener("click", selectFile);
writeBtn.addEventListener("click", writeFile);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
