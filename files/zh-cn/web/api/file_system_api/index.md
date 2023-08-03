---
title: 文件系统 API
slug: Web/API/File_System_API
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}

文件系统 API——以及通过[文件系统访问 API](https://wicg.github.io/file-system-access/)提供的扩展来访问设备文件系统中的文件——允许使用文件读写以及文件管理功能。

## 概念与用法

此 API 允许程序与用户本地设备上的或是用户能够访问的网络文件系统上的文件进行交互。此 API 的核心功能包括读取文件、写入或保存文件以及访问目录结构。

大多数与文件和目录的交互都通过句柄来完成。父类 {{domxref('FileSystemHandle')}} 派生出两个子类：{{domxref('FileSystemFileHandle')}} 和 {{domxref('FileSystemDirectoryHandle')}}，分别表示文件句柄和目录句柄。

一个句柄代表了用户操作系统上的一个文件或目录。你可以通过调用诸如 {{domxref('window.showOpenFilePicker()')}} 和 {{domxref('window.showDirectoryPicker()')}} 一类的方法向用户显示一个文件选择器或目录选择器，以此来获得句柄。一旦调用了这些函数，选择器就会出现，用户可以用它选择一个文件或目录。只要这个步骤成功完成，就会返回句柄。

你还可以从以下途径获得句柄：

- {{domxref('HTML Drag and Drop API', 'HTML 拖放 API', '', 'nocode')}} 的 {{domxref('DataTransferItem.getAsFileSystemHandle()')}} 方法。
- [文件处理 API](https://developer.chrome.com/en/articles/file-handling/)。

每种句柄都提供了其独有的功能，取决于你使用的种类，会有些许差异（详见[接口](#接口)部分）。在获得句柄后，你便可以访问文件的数据或是被选中的目录的信息（包含子目录）。此 API 开辟了 web 此前一直缺乏的潜在功能。但不论如何，安全性是设计 API 时的首要考量，除非用户明确授权，否则就不允许访问文件和目录的数据。

> **备注：** 使用此 API 的特性时可能会抛出的各种异常已在规范定义的相关页面中列出。然而，API 与底层操作系统的交互使得实际情况更加复杂。这里提供一篇关于[在规范中列出错误对应表](https://github.com/whatwg/fs/issues/57)的提议，其中包含了一些有用的信息。

> **备注：** 基于 {{domxref("FileSystemHandle")}} 的对象能够被序列化存储至 {{domxref("IndexedDB API", "IndexedDB", "", "nocode")}} 数据库实例中，也可以通过 {{domxref("window.postMessage", "postMessage()")}} 移交。

### 源私有文件系统

[源私有文件系统](https://fs.spec.whatwg.org/#origin-private-file-system)（origin private file system，OPFS）属于文件系统 API，提供了页面所属的源专用的存储端点，并且像常规文件系统一样对用户不可见。它提供对一种经过高度性能优化的特殊文件的访问能力的选择，例如，对文件内容的原地写入访问。

请阅读我们的[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)，以了解如何使用它。

### 保存文件

- 对于异步句柄，使用 {{domxref('FileSystemWritableFileStream')}} 接口。当你想要保存的数据是 {{domxref('Blob')}}、{{jsxref("String")}} 对象、字符串字面量或 {{jsxref('ArrayBuffer', 'buffer')}} 形式的时候，你可以打开一个写入流把数据保存到文件。可以是已经存在的文件，也可以是新文件。
- 对于同步的 {{domxref('FileSystemSyncAccessHandle')}}，使用 {{domxref('FileSystemSyncAccessHandle.write', 'write()')}} 方法写入更改。你还可以选择调用 {{domxref('FileSystemSyncAccessHandle.flush', 'flush()')}} 以使更改在指定的时间点写入磁盘（或者你也可以让底层操作系统在其认为合适的时间点执行写入，这么做大多数情况下应该都不会有问题）。

## 接口

- {{domxref("FileSystemHandle")}}
  - : **`FileSystemHandle`** 接口的对象代表一个条目。多个句柄可以指代同一个条目。大多数情况你都不会直接用到 `FileSystemHandle`，而是会用到它的两个子接口 {{domxref('FileSystemFileHandle')}} 和 {{domxref('FileSystemDirectoryHandle')}}。
- {{domxref("FileSystemFileHandle")}}
  - : 提供一个文件系统条目的句柄。
- {{domxref("FileSystemDirectoryHandle")}}
  - : 提供一个文件系统目录的句柄。
- {{domxref("FileSystemSyncAccessHandle")}}
  - : 提供一个文件系统条目的同步句柄，用于在磁盘上原地操作单个文件。其在文件读写上的同步特性可在异步操作开销较大的情景中使关键方法拥有更优秀的性能，例如 [WebAssembly](/zh-CN/docs/WebAssembly)。此类只能在 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中操作[源私有文件系统](#源私有文件系统)上的文件时访问。
- {{domxref("FileSystemWritableFileStream")}}
  - : 属于 {{domxref('WritableStream')}} 对象，附加了便于操作磁盘上单个文件的方法。

## 示例

### 访问文件

以下代码允许用户在文件选择器中选择一个文件。

```js
async function getFile() {
  // 打开文件选择器并从结果中解构出第一个句柄
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

下面的异步函数可以显示一个文件选择器，并在选择了文件时使用 `getFile()` 方法取得内容。

```js
const pickerOpts = {
  types: [
    {
      description: "Images",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};

async function getTheFile() {
  // 打开文件选择器并从结果中解构出第一个句柄
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // 获取文件内容
  const fileData = await fileHandle.getFile();
}
```

### 访问目录

下面的示例能够取得指定名称的目录的句柄，如果目录不存在，则创建。

```js
const dirName = "directoryToGetName";

// 假设我们已经有一个目录句柄：'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

下面的异步函数使用 `resolve()` 来查找被选择文件相对于指定目录句柄的路径。

```js
async function returnPathDirectories(directoryHandle) {
  // 通过显示文件选择器来获得一个文件句柄
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // 如果用户取消了选择或者打开文件失败
    return;
  }

  // 检查文件句柄是否存在于目录句柄的目录中
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePaths === null) {
    // 不在目录句柄中
  } else {
    // relativePaths 是一个包含名称的数组，指示相对路径

    for (const name of relativePaths) {
      // 打印数组的每个元素
      console.log(name);
    }
  }
}
```

### 写入文件

以下异步函数能够打开一个文件选择器，并在选择了文件时返回一个 {{domxref('FileSystemFileHandle')}}。然后使用 {{domxref('FileSystemFileHandle.createWritable()')}} 方法创建一个写入流。

然后将用户定义的一个 {{domxref('Blob')}} 写入流中，随后关闭该流。

```js
async function saveFile() {
  // 创建一个新句柄
  const newHandle = await window.showSaveFilePicker();

  // 创建一个 FileSystemWritableFileStream 用于写入
  const writableStream = await newHandle.createWritable();

  // 写入我们的文件
  await writableStream.write(imgBlob);

  // 关闭文件并将内容写入到磁盘
  await writableStream.close();
}
```

下面的示例展示能够向 `write()` 方法传递的不同选项。

```js
// 只传递数据（没有选项）
writableStream.write(data);

// 向流中指定位置写入数据
writableStream.write({ type: "write", position, data });

// 将文件当前的指针更新到指定的偏移位置
writableStream.write({ type: "seek", position });

// 裁切文件的字节长度为 size 变量的大小
writableStream.write({ type: "truncate", size });
```

### 在 OPFS 中同步读写文件

这个示例展示如何在[源私有文件系统](#源私有文件系统)中同步读写文件。

以下异步事件处理函数处于 Web Worker 上下文，从主线程接收消息。

- 创建一个异步文件访问句柄。
- 获取文件大小并创建一个 {{jsxref("ArrayBuffer")}} 来容纳它。
- 将文件内容读取到 buffer 中。
- 将消息编码，并将其写入到文件末尾。
- 将更改持久化至磁盘并关闭访问句柄。

```js
onmessage = async (e) => {
  // 获取从主线程发往 worker 的消息
  const message = e.data;

  // 获取 OPFS 中 draft 文件的句柄
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // 获取同步访问句柄
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // 获取文件大小
  const fileSize = accessHandle.getSize();
  // 将文件内容读取到 buffer
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // 将消息写入到文件末尾
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // 将更改持久化至磁盘
  accessHandle.flush();

  // 用完 FileSystemSyncAccessHandle 记得把它关闭
  accessHandle.close();
};
```

> **备注：** 在规范早期版本中，{{domxref("FileSystemSyncAccessHandle")}} 的 {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}、{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}、{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}} 和 {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} 被不合逻辑地指定为异步方法。此问题现已被[修正](https://github.com/whatwg/fs/issues/7)，但某些浏览器依然支持异步版本。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统访问 API：简化本地文件访问](https://web.dev/file-system-access/)
