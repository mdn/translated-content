---
title: FileSystemFileHandle：createSyncAccessHandle() 方法
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

{{domxref("FileSystemFileHandle")}} 接口的 **`createSyncAccessHandle()`** 方法返回一个 {{jsxref('Promise')}} 对象，可兑现一个用于同步读写文件的 {{domxref('FileSystemSyncAccessHandle')}} 对象。此方法的同步特性带来了性能优势，但是只能在专用于操作[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)上的文件的 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中使用。

创建 {{domxref('FileSystemSyncAccessHandle')}} 会对与文件句柄关联的文件进行独占锁定。这用于在文件已有的访问句柄被关闭前，阻止对文件创建更多的 {{domxref('FileSystemSyncAccessHandle')}} 或 {{domxref('FileSystemWritableFileStream')}}。

## 语法

```js-nolint
createSyncAccessHandle()
createSyncAccessHandle(options)
```

### 参数

- `options` {{optional_inline}}

  - : An object with the following properties:

    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : A string specifying the locking mode for the access handle. The default value is `"readwrite"`.
        Possible values are:
        - `"read-only"`
          - : Multiple `FileSystemSyncAccessHandle` objects can be opened simultaneously on a file (for example when using the same app in multiple tabs), provided they are all opened in `"read-only"` mode. Once opened, read-like methods can be called on the handles — {{domxref("FileSystemSyncAccessHandle.read", "read()")}}, {{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}}, and {{domxref("FileSystemSyncAccessHandle.close", "close()")}}.
        - `"readwrite"`
          - : Only one `FileSystemSyncAccessHandle` object can be opened on a file. Attempting to open subsequent handles before the first handle is closed results in a `NoModificationAllowedError` exception being thrown. Once opened, any available method can be called on the handle.
        - `"readwrite-unsafe"`
          - : Multiple `FileSystemSyncAccessHandle` objects can be opened simultaneously on a file, provided they are all opened in `"readwrite-unsafe"` mode. Once opened, any available method can be called on the handles.

### 返回值

一个 {{jsxref('Promise')}} 对象，可兑现一个 {{domxref('FileSystemSyncAccessHandle')}} 对象。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果在读写（`readwrite`）模式下句柄的 {{domxref("PermissionStatus.state")}} 不是 `granted`，则抛出该错误。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果 {{domxref('FileSystemSyncAccessHandle')}} 对象代表的不是[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)上的文件，抛出此异常。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果未找到当前条目，则抛出该异常。
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : 如果浏览器无法获得文件句柄所关联的文件的锁定，抛出此异常。This could be because `mode` is set to `readwrite` and an attempt is made to open multiple handles simultaneously.

## 示例

### Basic usage

以下异步事件处理函数处于 Web Worker 上下文。其中的代码片段创建了一个同步文件访问句柄。

```js
onmessage = async (e) => {
  // 获取从主线程发往 worker 的消息
  const message = e.data;

  // 获取草稿文件的句柄
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // 获取同步访问句柄
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // ……

  // 用完 FileSystemSyncAccessHandle 记得把它关闭
  accessHandle.close();
};
```

### Complete example with `mode` option

Our [`createSyncAccessHandle()` mode test](https://createsyncaccesshandle-mode-test.glitch.me/) example provides an {{htmlelement("input")}} field to enter text into, and two buttons — one to write entered text to the end of a file in the origin private file system, and one to empty the file when it becomes too full.

Try exploring the demo above, with the browser developer console open so you can see what is happening. If you try opening the demo in multiple browser tabs, you will find that multiple handles can be opened at once to write to the file at the same time. This is because `mode: "readwrite-unsafe"` is set on the `createSyncAccessHandle()` calls.

Below we'll explore the code.

#### HTML

The two {{htmlelement("button")}} elements and text {{htmlelement("input")}} field look like this:

```html
<ol>
  <li>
    <label for="filetext">Enter text to write to the file:</label>
    <input type="text" id="filetext" name="filetext" />
  </li>
  <li>
    Write your text to the file: <button class="write">Write text</button>
  </li>
  <li>
    Empty the file if it gets too full:
    <button class="empty">Empty file</button>
  </li>
</ol>
```

#### Main JavaScript

The main thread JavaScript inside the HTML file is shown below. We grab references to the write text button, empty file button, and text input field, then we create a new web worker using the {{domxref("Worker.Worker", "Worker()")}} constructor. We then define two functions and set them as event handlers on the buttons:

- `writeToOPFS()` is run when the write text button is clicked. This function posts the entered value of the text field to the worker inside an object using the {{domxref("Worker.postMessage()")}} method, then empties the text field, ready for the next addition. Note how the passed object also includes a `command: "write"` property to specify that we want to trigger a write action with this message.
- `emptyOPFS()` is run when the empty file button is clicked. This posts an object containing a `command: "empty"` property to the worker specifying that the file is to be emptied.

```js
const writeBtn = document.querySelector(".write");
const emptyBtn = document.querySelector(".empty");
const fileText = document.querySelector("#filetext");

const opfsWorker = new Worker("worker.js");

function writeToOPFS() {
  opfsWorker.postMessage({
    command: "write",
    content: fileText.value,
  });
  console.log("Main script: Text posted to worker");
  fileText.value = "";
}

function emptyOPFS() {
  opfsWorker.postMessage({
    command: "empty",
  });
}

writeBtn.addEventListener("click", writeToOPFS);
emptyBtn.addEventListener("click", emptyOPFS);
```

#### Worker JavaScript

The worker JavaScript is shown below.

First, we run a function called `initOPFS()` that gets a reference to the OPFS root using {{domxref("StorageManager.getDirectory()")}}, creates a file and returns its handle using {{domxref("FileSystemDirectoryHandle.getFileHandle()")}}, and then returns a {{domxref("FileSystemSyncAccessHandle")}} using `createSyncAccessHandle()`. This call includes the `mode: "readwrite-unsafe"` property, allowing multiple handles to access the same file simultaneously.

```js
let accessHandle;

async function initOPFS() {
  const opfsRoot = await navigator.storage.getDirectory();
  const fileHandle = await opfsRoot.getFileHandle("file.txt", { create: true });
  accessHandle = await fileHandle.createSyncAccessHandle({
    mode: "readwrite-unsafe",
  });
}

initOPFS();
```

Inside the worker's [message event](/en-US/docs/Web/API/Worker/message_event) handler function, we first get the size of the file using {{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}}. We then check to see whether the data sent in the message includes a `command` property value of `"empty"`. If so, we empty the file using {{domxref("FileSystemSyncAccessHandle.truncate", "truncate()")}} with a value of `0`, and update the file size contained in the `size` variable.

If the message data is something else, we:

- Create a new {{domxref("TextEncoder")}} and {{domxref("TextDecoder")}} to handle encoding and decoding the text content later on.
- Encode the message data and write the result to the end of the file using {{domxref("FileSystemSyncAccessHandle.write", "write()")}}, then update the file size contained in the `size` variable.
- Create a {{jsxref("DataView")}} to contain the file contents, and read the content into it using {{domxref("FileSystemSyncAccessHandle.read", "read()")}}.
- Decode the `DataView` contents and log it to the console.

```js
onmessage = function (e) {
  console.log("Worker: Message received from main script");

  // Get the current size of the file
  let size = accessHandle.getSize();

  if (e.data.command === "empty") {
    // Truncate the file to 0 bytes
    accessHandle.truncate(0);

    // Get the current size of the file
    size = accessHandle.getSize();
  } else {
    const textEncoder = new TextEncoder();
    const textDecoder = new TextDecoder();

    // Encode content to write to the file
    const content = textEncoder.encode(e.data.content);
    // Write the content at the end of the file
    accessHandle.write(content, { at: size });

    // Get the current size of the file
    size = accessHandle.getSize();

    // Prepare a data view of the length of the file
    const dataView = new DataView(new ArrayBuffer(size));

    // Read the entire file into the data view
    accessHandle.read(dataView, { at: 0 });

    // Log the current file contents to the console
    console.log("File contents: " + textDecoder.decode(dataView));

    // Flush the changes
    accessHandle.flush();
  }

  // Log the size of the file to the console
  console.log("Size: " + size);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
