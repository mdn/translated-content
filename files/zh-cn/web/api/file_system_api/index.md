---
title: 文件系统 API
slug: Web/API/File_System_API
l10n:
  sourceCommit: 59d87e8756161420f3f40dc554562858f4427e72
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

**文件系统 API**（File System API）——以及通过[**文件系统访问 API**（File System Access API）](https://wicg.github.io/file-system-access/)提供的扩展来访问设备文件系统中的文件——允许使用文件读写以及文件管理功能。

请参阅[与其他文件相关 API 的关系](/zh-CN/docs/Web/API/File_API#relationship_to_other_file-related_apis)，以了解此 API、[文件和目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API) 和[文件 API](/zh-CN/docs/Web/API/File_API) 之间的区别。

## 概念与用法

此 API 允许程序与用户本地设备上的或是用户能够访问的网络文件系统上的文件进行交互。此 API 的核心功能包括读取文件、写入或保存文件以及访问目录结构。

大多数与文件和目录的交互都通过句柄来完成。父类 {{domxref('FileSystemHandle')}} 派生出两个子类：{{domxref('FileSystemFileHandle')}} 和 {{domxref('FileSystemDirectoryHandle')}}，分别表示文件句柄和目录句柄。

一个句柄代表了用户操作系统上的一个文件或目录。你可以通过调用诸如 {{domxref('window.showOpenFilePicker()')}} 和 {{domxref('window.showDirectoryPicker()')}} 一类的方法向用户显示一个文件选择器或目录选择器，以此来获得句柄。一旦调用了这些函数，选择器就会出现，用户可以用它选择一个文件或目录。只要这个步骤成功完成，就会返回句柄。

你还可以从以下途径获得句柄：

- {{domxref('HTML Drag and Drop API', 'HTML 拖放 API', '', 'nocode')}} 的 {{domxref('DataTransferItem.getAsFileSystemHandle()')}} 方法。
- [文件处理 API](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-handling)。

每种句柄都提供了其独有的功能，取决于你使用的种类，会有些许差异（详见[接口](#接口)部分）。在获得句柄后，你便可以访问文件的数据或是被选中的目录的信息（包含子目录）。此 API 开辟了 web 此前一直缺乏的潜在功能。但不论如何，安全性是设计 API 时的首要考量，除非用户明确授权，否则就不允许访问文件和目录的数据（注意：[源私有文件系统](#源私有文件系统)并非如此，因为其对用户不可见）。

> [!NOTE]
> 使用此 API 的特性时可能会抛出的各种异常已在规范定义的相关页面中列出。然而，API 与底层操作系统的交互使得实际情况更加复杂。这里提供一篇关于[在规范中列出错误对应表](https://github.com/whatwg/fs/issues/57)的提议，其中包含了一些有用的信息。

> [!NOTE]
> 基于 {{domxref("FileSystemHandle")}} 的对象能够被序列化存储至 {{domxref("IndexedDB API", "IndexedDB", "", "nocode")}} 数据库实例中，也可以通过 {{domxref("window.postMessage", "postMessage()")}} 传递。

### 源私有文件系统

源私有文件系统（origin private file system，OPFS）属于文件系统 API，提供了页面所属的源专用的存储端点，并且不像常规文件系统那样对用户可见。它提供对一种经过高度性能优化的特殊文件的访问能力的选择，例如，对文件内容的原地写入访问。

以下是一些可能的用例：

- 具有持久上传组件的应用
  - 当选择要上传的文件或目录时，你可以将文件复制到本地沙盒中并一次上传一个块。

  - 应用可以在中断后重新启动上传，例如浏览器关闭或崩溃、连接中断或计算机关机。

- 具有大量媒体静态资源的视频游戏或其他应用
  - 应用下载一个或多个大型 tar 包并将其本地展开为目录结构。

  - 应用在后台预先获取静态资源，因此用户无需等待下载即可进入下一个任务或游戏级别。

- 支持离线访问或本地缓存的音频或照片编辑器（性能和速度极佳）
  - 应用可以就地写入文件（例如，仅覆盖 ID3/EXIF 标签而不是整个文件）。

- 离线视频查看器
  - 应用可以下载大文件（>1GB）以供以后查看。
  - 该应用可以访问部分下载的文件（这样你就可以观看 DVD 的第一章，即使该应用仍在下载其余内容，或者由于你必须跑去赶火车而导致应用未完成下载）。

- 离线 Web 邮件客户端
  - 客户端下载附件并将其存储在本地。
  - 客户端缓存附件以供稍后上传。

请阅读我们的[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)，以了解如何使用它。

### 保存文件

- 对于异步句柄，使用 {{domxref('FileSystemWritableFileStream')}} 接口。当你想要保存的数据是 {{domxref('Blob')}}、{{jsxref("String")}} 对象、字符串字面量或 {{jsxref('ArrayBuffer', 'buffer')}} 形式的时候，你可以打开一个写入流把数据保存到文件。可以是已经存在的文件，也可以是新文件。
- 对于同步的 {{domxref('FileSystemSyncAccessHandle')}}，使用 {{domxref('FileSystemSyncAccessHandle.write', 'write()')}} 方法写入更改。你还可以选择调用 {{domxref('FileSystemSyncAccessHandle.flush', 'flush()')}} 以使更改在指定的时间点写入磁盘（或者你也可以让底层操作系统在其认为合适的时间点执行写入，这么做大多数情况下应该都不会有问题）。

## 接口

- {{domxref("FileSystemChangeRecord")}} {{experimental_inline}}
  - : 包含 {{domxref("FileSystemObserver")}} 观察到的单个更改的详细信息。
- {{domxref("FileSystemHandle")}}
  - : 代表文件或目录条目的对象。多个句柄可以指代同一个条目。大多数情况你都不会直接用到 `FileSystemHandle`，而是会用到它的子接口 {{domxref('FileSystemFileHandle')}} 和 {{domxref('FileSystemDirectoryHandle')}}。
- {{domxref("FileSystemFileHandle")}}
  - : 提供一个文件系统条目的句柄。
- {{domxref("FileSystemDirectoryHandle")}}
  - : 提供一个文件系统目录的句柄。
- {{domxref("FileSystemObserver")}} {{experimental_inline}}
  - : 提供一种观察所选文件或目录的变化的机制。
- {{domxref("FileSystemSyncAccessHandle")}}
  - : 提供一个文件系统条目的同步句柄，用于在磁盘上原地操作单个文件。其在文件读写上的同步特性可在异步操作开销较大的情景中使关键方法拥有更优秀的性能，例如 [WebAssembly](/zh-CN/docs/WebAssembly)。此类只能在专用于操作[源私有文件系统](#源私有文件系统)上的文件的专用 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中访问。
- {{domxref("FileSystemWritableFileStream")}}
  - : 一个附加了便于操作磁盘上单个文件的方法的 {{domxref('WritableStream')}} 对象。

### 其他接口的扩展

- {{domxref("Window.showDirectoryPicker()")}}
  - : 显示允许用户选择目录的目录选择器。
- {{domxref("Window.showOpenFilePicker()")}}
  - : 显示允许用户选择一个或多个文件的文件选择器。
- {{domxref("Window.showSaveFilePicker()")}}
  - : 显示允许用户保存文件的文件选择器。
- {{domxref("DataTransferItem.getAsFileSystemHandle()")}}
  - : 返回 {{jsxref('Promise')}}，如果拖动的项目是文件，则兑现 {{domxref('FileSystemFileHandle')}}；如果拖动的项目是目录，则兑现 {{domxref('FileSystemDirectoryHandle')}}。
- {{domxref("StorageManager.getDirectory()")}}
  - : 用于获取对 {{domxref("FileSystemDirectoryHandle")}} 对象的引用，该对象允许访问存储在[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)中的目录及其内容。返回一个兑现 {{domxref("FileSystemDirectoryHandle")}} 对象的 {{jsxref('Promise')}}。

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

// 假设我们已经有一个目录句柄：“currentDirHandle”
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
- 将文件内容读取到缓冲区中。
- 将消息编码，并将其写入到文件末尾。
- 将更改持久化至磁盘并关闭访问句柄。

```js
onmessage = async (e) => {
  // 获取从主线程发往 worker 的消息
  const message = e.data;

  // 获取 OPFS 中草稿文件的句柄
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // 获取同步访问句柄
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // 获取文件大小
  const fileSize = accessHandle.getSize();
  // 将文件内容读取到缓冲区
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

> [!NOTE]
> 在规范早期版本中，{{domxref("FileSystemSyncAccessHandle")}} 的 {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}、{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}、{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}} 和 {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} 被不合逻辑地指定为异步方法。此问题现已被[修正](https://github.com/whatwg/fs/issues/7)，但某些浏览器依然支持异步版本。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
- [源私有文件系统](https://web.developers.google.cn/articles/origin-private-file-system)
