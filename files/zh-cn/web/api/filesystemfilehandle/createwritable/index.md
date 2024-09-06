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
      - : A string specifying the locking mode for the writable file stream. The default value is `"siloed"`.
          Possible values are:
        - `"exclusive"`
          - : Only one `FileSystemWritableFileStream` writer can be opened. Attempting to open subsequent writers before the first writer is closed results in a `NoModificationAllowedError` exception being thrown.
        - `"siloed"`
          - : Multiple `FileSystemWritableFileStream` writers can be opened at the same time, each with its own swap file, for example when using the same app in multiple tabs. The last writer opened has its data written, as the data gets flushed when each writer is closed.

### 返回值

一个 {{jsxref('Promise')}} 对象，可兑现一个 {{domxref('FileSystemWritableFileStream')}} 对象。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果句柄在读写（`readwrite`）模式下的 {{domxref('PermissionStatus.state')}} 不为 `'granted'`，则抛出此异常。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果未找到当前条目，则抛出该异常。
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : 如果浏览器无法获取与文件句柄关联的文件的锁，则抛出该异常。This could be because `mode` is set to `exclusive` and an attempt is made to open multiple writers simultaneously.
- `AbortError` {{domxref("DOMException")}}
  - : 如果实现定义的恶意软件扫描和安全浏览检查失败，则抛出此异常。

## 示例

### Basic usage

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

### Expanded usage with options

Our [`createWritable()` mode test](https://createwritable-mode-test.glitch.me/) example provides a {{htmlelement("button")}} to select a file to write to, a text {{htmlelement("input")}} field into which you can enter some text to write to the file, and a second `<button>` to write the text to the file.

In the demo above, try selecting a text file on your file system (or entering a new file name), entering some text into the input field, and writing the text to the file. Open the file on your file system to check whether the write was successful.

Also, try opening the page in two browser tabs simultaneously. Select a file to write to in the first tab, and then immediately try selecting the same file to write to in the second tab. You should get an error message because we set `mode: "exclusive"` in the `createWritable()` call.

Below we'll explore the code.

#### HTML

The two {{htmlelement("button")}} elements and text {{htmlelement("input")}} field look like this:

```html
<ol>
  <li>
    Select a file to write to: <button class="select">Select file</button>
  </li>
  <li>
    <label for="filetext">Enter text to write to the file:</label>
    <input type="text" id="filetext" name="filetext" disabled />
  </li>
  <li>
    Write your text to the file:
    <button class="write" disabled>Write text</button>
  </li>
</ol>
```

The text input field and the write text button are set to be disabled initially via the [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled) attribute — they shouldn't be used until the user has selected a file to write to.

```css hidden
li {
  margin-bottom: 10px;
}
```

#### JavaScript

We start by grabbing references to the select file button, the write text button, and the text input field. We also declare a global variable `writableStream`, which will store a reference to the writeable stream for writing the text to the file, once created. We initially set it to `null`.

```js
const selectBtn = document.querySelector(".select");
const writeBtn = document.querySelector(".write");
const fileText = document.querySelector("#filetext");

let writableStream = null;
```

Next, we create an async function called `selectFile()`, which we'll invoke when the select button is pressed. This uses the {{domxref("Window.showSaveFilePicker()")}} method to show the user a file picker dialog and create a file handle to the file they choose. On that handle, we invoke the `createWritable()` method to create a stream to write the text to the selected file. If the call fails, we log an error to the console.

We pass `createWritable()` an options object containing the following options:

- `keepExistingData: true`: If the selected file already exists, and data contained within it is copied to the temporary file before writing commences.
- `mode: "exclusive"`: States that only one writer can be open on the file handle simultaneously. If a second user loads the example and tries to select a file, they will get an error.

Last of all, we enable the input field and the write text button, as they are needed for the next step, and disable the select file button (this is not currently needed).

```js
async function selectFile() {
  // Create a new handle
  const handle = await window.showSaveFilePicker();

  // Create a FileSystemWritableFileStream to write to
  try {
    writableStream = await handle.createWritable({
      keepExistingData: true,
      mode: "exclusive",
    });
  } catch (e) {
    if (e.name === "NoModificationAllowedError") {
      console.log(
        `You can't access that file right now; someone else is trying to modify it. Try again later.`,
      );
    } else {
      console.log(e.message);
    }
  }

  // Enable text field and write button, disable select button
  fileText.disabled = false;
  writeBtn.disabled = false;
  selectBtn.disabled = true;
}
```

Our next function, `writeFile()`, writes the text entered into the input field to the chosen file using {{domxref("FileSystemWritableFileStream.write()")}}, then empties the input field. We then close the writable stream using {{domxref("WritableStream.close()")}}, and reset the demo so it can be run again — the `disabled` states of the controls are toggled back to their original states, and the `writableStream` variable is set back to `null`.

```js
async function writeFile() {
  // Write text to our file and empty out the text field
  await writableStream.write(fileText.value);
  fileText.value = "";

  // Close the file and write the contents to disk.
  await writableStream.close();

  // Disable text field and write button, enable select button
  fileText.disabled = true;
  writeBtn.disabled = true;
  selectBtn.disabled = false;

  // Set writableStream back to null
  writableStream = null;
}
```

To get the demo running, we set event listeners on the buttons so that the relevant function is run when each one is clicked.

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
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
