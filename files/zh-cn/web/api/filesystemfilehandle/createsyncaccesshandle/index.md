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

  - : 一个具有以下属性的对象：

    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : 指定访问句柄的锁定模式的字符串。默认值为 `"readwrite"`。可能的值包括：
        - `"read-only"`
          - : 可以同时在一个文件上打开多个 `FileSystemSyncAccessHandle` 对象（例如，在多个标签页中使用同一个应用时），前提是它们都以 `"read-only"` 模式打开。打开后，可以在句柄上调用类似读取的方法——{{domxref("FileSystemSyncAccessHandle.read", "read()")}}、{{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}} 和 {{domxref("FileSystemSyncAccessHandle.close", "close()")}}。
        - `"readwrite"`
          - : 每个文件只能打开一个 `FileSystemSyncAccessHandle` 对象。如果在第一个句柄关闭之前尝试打开后续句柄，则会导致抛出 `NoModificationAllowedError` 异常。打开后，可以调用句柄上的任何可用方法。
        - `"readwrite-unsafe"`
          - : 可以同时在一个文件上打开多个 `FileSystemSyncAccessHandle` 对象，前提是它们都以 `"readwrite-unsafe"` 模式打开。打开后，可以在句柄上调用任何可用的方法。

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
  - : 如果浏览器无法获得文件句柄所关联的文件的锁定，抛出此异常。这可能是因为 `mode` 被设置为 `readwrite`，并尝试同时打开多个句柄。

## 示例

### 基本用法

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

### 带有 `mode` 选项的完整示例

我们的 [`createSyncAccessHandle()` 模式测试](https://createsyncaccesshandle-mode-test.glitch.me/)示例提供了一个 {{htmlelement("input")}} 字段来输入文本，以及两个按钮——一个用于将输入的文本写入原始私有文件系统中的文件末尾，另一个用于在文件太满时清空文件。

尝试探索上面的演示，打开浏览器开发者控制台，以便你可以看到正在发生的事情。如果你尝试在多个浏览器标签页中打开演示，你会发现可以同时打开多个句柄以同时写入文件。这是因为在 `createSyncAccessHandle()` 调用上设置了 `mode: "readwrite-unsafe"`。

下面我们将探索代码。

#### HTML

两个 {{htmlelement("button")}} 元素和文本 {{htmlelement("input")}} 字段如下所示：

```html
<ol>
  <li>
    <label for="filetext">输入要写入文件的文本：</label>
    <input type="text" id="filetext" name="filetext" />
  </li>
  <li>将你的文本写入文件：<button class="write">写入文本</button></li>
  <li>如果文件太满，则清空该文件：<button class="empty">清空文件</button></li>
</ol>
```

#### 主线程 JavaScript

HTML 文件中的主线程 JavaScript 如下所示。我们获取对写入文本按钮、清空文件按钮和文本输入字段的引用，然后使用 {{domxref("Worker.Worker", "Worker()")}} 构造函数创建一个新的 Web Worker。然后我们定义两个函数并将它们设置为按钮上的事件处理器：

- 单击写入文本按钮时运行 `writeToOPFS()`。此函数使用 {{domxref("Worker.postMessage()")}} 方法将文本字段的输入值发布到对象内的 Worker，然后清空文本字段，为下一次添加做好准备。请注意传递的对象还包含 `command: "write"` 属性，以指定我们想要使用此消息触发写入操作。
- 单击清空文件按钮时运行 `emptyOPFS()`。这会将包含 `command: "empty"` 属性的对象发布到 Worker，指定要清空文件。

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
  console.log("主线程脚本：发送给 worker 的文本");
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

#### Worker 线程 JavaScript

worker JavaScript 如下所示。

首先，我们运行一个名为 `initOPFS()` 的函数，该函数使用 {{domxref("StorageManager.getDirectory()")}} 获取对 OPFS 根的引用，使用 {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} 创建文件并返回其句柄，然后使用 `createSyncAccessHandle()` 返回 {{domxref("FileSystemSyncAccessHandle")}}。此调用包括 `mode: "readwrite-unsafe"` 属性，允许多个句柄同时访问同一文件。

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

在 worker 的 [message 事件](/zh-CN/docs/Web/API/Worker/message_event)处理器中，我们首先使用 {{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}} 获取文件的大小。然后，我们检查消息中发送的数据是否包含 `command` 属性值 `"empty"`。如果是，我们使用 {{domxref("FileSystemSyncAccessHandle.truncate", "truncate()")}} 清空文件，值为 `0`，并更新 `size` 变量中包含的文件大小。

如果消息数据是其他内容，我们：

- 创建新的 {{domxref("TextEncoder")}} 和 {{domxref("TextDecoder")}} 来处理稍后对文本内容的编码和解码。
- 使用 {{domxref("FileSystemSyncAccessHandle.write", "write()")}} 对消息数据进行编码并将结果写入文件末尾，然后更新 `size` 变量中包含的文件大小。
- 创建一个 {{jsxref("DataView")}} 来包含文件内容，并使用 {{domxref("FileSystemSyncAccessHandle.read", "read()")}} 将内容读入其中。
- 解码 `DataView` 内容并将其记录到控制台。

```js
onmessage = function (e) {
  console.log("Worker：从主线程收到消息");

  // 获取文件当前大小
  let size = accessHandle.getSize();

  if (e.data.command === "empty") {
    // 将文件截断为 0 字节
    accessHandle.truncate(0);

    // 获取文件当前大小
    size = accessHandle.getSize();
  } else {
    const textEncoder = new TextEncoder();
    const textDecoder = new TextDecoder();

    // 对要写入文件的内容进行编码
    const content = textEncoder.encode(e.data.content);
    // 在文件末尾写入内容
    accessHandle.write(content, { at: size });

    // 获取文件当前大小
    size = accessHandle.getSize();

    // 准备文件长度的数据视图
    const dataView = new DataView(new ArrayBuffer(size));

    // 将整个文件读入数据视图
    accessHandle.read(dataView, { at: 0 });

    // 将当前文件内容记录到控制台
    console.log("文件内容：" + textDecoder.decode(dataView));

    // 刷新更改
    accessHandle.flush();
  }

  // 将文件的大小记录到控制台
  console.log("大小：" + size);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
