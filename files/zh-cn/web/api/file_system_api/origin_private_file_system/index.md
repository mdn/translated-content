---
title: 源私有文件系统
slug: Web/API/File_System_API/Origin_private_file_system
l10n:
  sourceCommit: 2cba64f68aab9e233fecfc2bab8bea4118716c14
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

**源私有文件系统**（OPFS）是作为[文件系统 API](/zh-CN/docs/Web/API/File_System_API) 的一部分提供的一个存储端点。它是页面所属的源专用的，并且不像常规文件系统那样对用户可见。它提供了对一种特殊类型文件的访问能力，这种文件经过高度性能优化，并提供对其内容的原地写入访问特性。

## 使用文件系统访问 API 处理文件

扩展自[文件系统 API](/zh-CN/docs/Web/API/File_System_API) 的[文件系统访问 API](https://wicg.github.io/file-system-access/) 使用选择器提供了对文件的访问能力。例如：

1. {{domxref("Window.showOpenFilePicker()")}} 允许用户选择一个文件用于访问，文件将作为结果以一个 {{domxref("FileSystemFileHandle")}} 对象的形式被返回。
2. 调用 {{domxref("FileSystemFileHandle.getFile()")}} 以访问文件的内容，使用 {{domxref("FileSystemFileHandle.createWritable()")}} 或 {{domxref("FileSystemWritableFileStream.write()")}} 来修改内容。
3. 调用 {{domxref("FileSystemHandle.requestPermission()", "FileSystemHandle.requestPermission({mode: 'readwrite'})")}} 来请求用户的权限以保存更改。
4. 如果用户接受了权限请求，更改就会保存回原文件。

这个方法可行，但是有一些限制。这些更改是对用户可见的文件系统进行的，所以会有很多适当的安全性检查（比方说 Chrome 的[安全浏览](https://developers.google.cn/safe-browsing)）来防止恶意内容被写入到文件系统。这些写入不是原地的，会先写入到一个临时文件。除非通过了所有的安全性检查，否则原文件不会被修改。

因此，这些操作会相当缓慢。在你进行小规模的文本更新时没那么明显，但是当进行像 [SQLite](https://www.sqlite.org/wasm) 数据库更改这样的更显著、更大规模的文件更新时就会遇到性能问题。

## OPFS 是怎么解决这些问题的？

OPFS 提供了页面所属源私有的、对用户不可见的、底层的逐字节文件访问能力。因此它不需要经过与调用文件系统访问 API 所需的一系列相同的安全性检查和授权，而且比文件系统访问 API 更快。它还有一套同步调用方法可用（其他的文件系统 API 调用是异步的），但只能在 web worker 中运行，这样就不会阻塞主线程。

概括 OPFS 和用户可见文件系统的不同：

- OPFS 和其他源分区存储机制（例如 {{domxref("IndexedDB API", "IndexedDB API", "", "nocode")}}）一样，受到[浏览器存储配额限制](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)。你可以通过 {{domxref("StorageManager.estimate()", "navigator.storage.estimate()")}} 来获得 OPFS 所用的存储空间的容量。
- 清除站点的存储数据会删除 OPFS。
- 访问 OPFS 中的文件不需要权限提示和安全性检查。
- 浏览器会把 OPFS 的内容持久化保存在磁盘的某个位置，但你不能指望能够一一对应地找到创建出的文件。OPFS 对用户不可见。

## 如何访问 OPFS？

想要访问 OPFS，你首先要调用 {{domxref("StorageManager.getDirectory()", "navigator.storage.getDirectory()")}} 方法。返回一个代表 OPFS 根目录的 {{domxref("FileSystemDirectoryHandle")}} 对象的引用。

## 在主线程中操作 OPFS

在主线程中访问 OPFS 时，你要使用基于 {{jsxref("Promise")}} 的异步 API。你可以调用代表 OPFS 根目录（以及其中被创建的子目录）的 {{domxref("FileSystemDirectoryHandle")}} 对象上的 {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} 和 {{domxref("FileSystemDirectoryHandle.getDirectoryHandle()")}} 方法来分别访问文件（{{domxref("FileSystemFileHandle")}}）和目录（{{domxref("FileSystemDirectoryHandle")}}）。

> [!NOTE]
> 在上述方法中传入 `{ create: true }` 会在文件或文件夹不存在时创建相应的文件或文件夹。

```js
// 创建层级结构的文件和文件夹
const fileHandle = await opfsRoot.getFileHandle("my first file", {
  create: true,
});
const directoryHandle = await opfsRoot.getDirectoryHandle("my first folder", {
  create: true,
});
const nestedFileHandle = await directoryHandle.getFileHandle(
  "my first nested file",
  { create: true },
);
const nestedDirectoryHandle = await directoryHandle.getDirectoryHandle(
  "my first nested folder",
  { create: true },
);

// 通过文件名和文件夹名访问已有的文件和文件夹
const existingFileHandle = await opfsRoot.getFileHandle("my first file");
const existingDirectoryHandle =
  await opfsRoot.getDirectoryHandle("my first folder");
```

### 读取文件

1. 调用 {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} 以返回一个 {{domxref("FileSystemFileHandle")}} 对象。
2. 调用 {{domxref("FileSystemFileHandle.getFile()")}} 方法返回一个 {{domxref("File")}} 对象。这是一种特化的 {{domxref("Blob")}} 对象，所以可以像操作其他 `Blob` 对象那样去操作它。比如，你可以通过 {{domxref("Blob.text()")}} 直接访问其文本内容。

### 写入文件

1. 调用 {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} 以返回一个 {{domxref("FileSystemFileHandle")}} 对象。
2. 调用 {{domxref("FileSystemFileHandle.createWritable()")}} 方法返回一个 {{domxref("FileSystemWritableFileStream")}} 对象，这是一种特化的 {{domxref("WritableStream")}} 对象。
3. 调用 {{domxref("FileSystemWritableFilestream.write()")}} 来向其写入内容。
4. 使用 {{domxref("WritableStream.close()")}} 关闭流。

### 删除文件或目录

你可以在父目录上调用 {{domxref("FileSystemDirectoryHandle.removeEntry()")}}，向它传入你想要删除的项的名称：

```js
directoryHandle.removeEntry("my first nested file");
```

你也可以在代表你想要删除的项目的 {{domxref("FileSystemFileHandle")}} 或 {{domxref("FileSystemDirectoryHandle")}} 上调用 {{domxref("FileSystemHandle.remove()")}} 来进行删除。要删除一个文件夹和它所有的子文件夹，需要传递 `{ recursive: true }` 选项。

```js
await fileHandle.remove();
await directoryHandle.remove({ recursive: true });
```

下面提供一个快捷的方法清空整个 OPFS：

```js
await (await navigator.storage.getDirectory()).remove({ recursive: true });
```

### 列出文件夹中的内容

{{domxref("FileSystemDirectoryHandle")}} 是一个[异步迭代器](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)。所以，你可以用 [`for await...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of) 循环和诸如 [`entries()`](/zh-CN/docs/Web/API/FileSystemDirectoryHandle/entries)、[`values()`](/zh-CN/docs/Web/API/FileSystemDirectoryHandle/entries) 和 [`keys()`](/zh-CN/docs/Web/API/FileSystemDirectoryHandle/entries) 这样的标准方法对其进行迭代。

例如：

```js
for await (let [name, handle] of directoryHandle) {
}
for await (let [name, handle] of directoryHandle.entries()) {
}
for await (let handle of directoryHandle.values()) {
}
for await (let name of directoryHandle.keys()) {
}
```

## 在 web worker 中操作 OPFS

Web Worker 不会阻塞主线程，这意味着你可以在其上下文中使用同步文件访问 API。同步的 API 因其不需要处理 promise，所以更快。

你可以通过在常规的 {{domxref("FileSystemFileHandle")}} 上调用 {{domxref("FileSystemFileHandle.createSyncAccessHandle()")}} 来同步地处理文件：

> [!NOTE]
> 虽然 `createSyncAccessHandle()` 的名称带有“Sync（同步）”字眼，但是这个方法本身是异步的。

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("高速文件.txt", {
  create: true,
});
const syncAccessHandle = await fileHandle.createSyncAccessHandle();
```

返回的 {{domxref("FileSystemSyncAccessHandle")}} 上有几个*同步的*方法可用：

- {{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}}：返回文件的字节大小。
- {{domxref("FileSystemSyncAccessHandle.write", "write()")}}：将一个缓冲区的内容写入到文件中，可选择在给定的偏移处开始写入。它会返回写入的字节数。检查返回的写入字节数可以让调用方检测并处理错误和不完整的写入。
- {{domxref("FileSystemSyncAccessHandle.read", "read()")}}：读取文件的内容到一个缓冲区中，可选择在给定的偏移处开始读取。
- {{domxref("FileSystemSyncAccessHandle.truncate", "truncate()")}}：将文件调整至给定的大小。
- {{domxref("FileSystemSyncAccessHandle.flush", "flush()")}}：确保文件的内容包含所有通过 `write()` 完成的修改。
- {{domxref("FileSystemSyncAccessHandle.close", "close()")}}：关闭访问句柄。

这里是一个使用了上述所有方法的示例：

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("fast", { create: true });
const accessHandle = await fileHandle.createSyncAccessHandle();

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

// 将这个变量初始化为文件的大小。
let size;
// 文件当前的大小，最开始是 `0`。
size = accessHandle.getSize();
// 编码要写入文件的内容。
const content = textEncoder.encode("Some text");
// 在文件的开头写入内容。
accessHandle.write(content, { at: size });
// 强制刷入更改。
accessHandle.flush();
// 文件当前的大小，现在是 `9`（“Some text”的长度）。
size = accessHandle.getSize();

// 编码更多要写入文件的内容。
const moreContent = textEncoder.encode("More content");
// 在文件的末尾写入内容。
accessHandle.write(moreContent, { at: size });
// 强制刷入更改。
accessHandle.flush();
// 文件当前的大小，现在是 `21`（“Some textMore content”的长度）。
size = accessHandle.getSize();

// 准备一个长度与文件相同的数据视图。
const dataView = new DataView(new ArrayBuffer(size));

// 将整个文件读取到数据视图。
accessHandle.read(dataView, { at: 0 });
// 打印 `"Some textMore content"`。
console.log(textDecoder.decode(dataView));

// 在数据视图中的偏移位置 9 处开始读取。
accessHandle.read(dataView, { at: 9 });
// 打印 `"More content"`。
console.log(textDecoder.decode(dataView));

// 裁去文件头 4 个字节之后的内容。
accessHandle.truncate(4);
```

## 参见

- web.developers.google.cn 上的[源私有文件系统](https://web.developers.google.cn/articles/origin-private-file-system)
