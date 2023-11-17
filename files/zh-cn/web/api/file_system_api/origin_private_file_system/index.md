---
title: 源私有文件系统
slug: Web/API/File_System_API/Origin_private_file_system
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}

源私有文件系统（OPFS）是作为[文件系统 API](/zh-CN/docs/Web/API/File_System_API) 的一部分提供的一个存储端点。它是页面所属的源专用的，并且不像常规文件系统那样对用户可见。它提供了对一种特殊类型文件的访问能力，这种文件经过高度性能优化，并提供对其内容的原地写入访问特性。

## 使用文件系统 API 处理文件

扩展自[文件系统 API](/zh-CN/docs/Web/API/File_System_API) 的[文件系统访问 API](https://wicg.github.io/file-system-access/) 使用选择器提供了对文件的访问能力。例如：

1. {{domxref("Window.showOpenFilePicker()")}} 允许用户选择一个文件用于访问，文件将作为结果以一个 {{domxref("FileSystemFileHandle")}} 对象的形式被返回。
2. 调用 {{domxref("FileSystemFileHandle.getFile()")}} 以访问文件的内容，使用 {{domxref("FileSystemFileHandle.createWritable()")}} / {{domxref("FileSystemWritableFileStream.write()")}} 来修改内容。
3. 调用 {{domxref("FileSystemHandle.requestPermission()", "FileSystemHandle.requestPermission({mode: 'readwrite'})")}} 来请求用户的权限以保存更改。
4. 如果用户接受了权限请求，更改就会保存回原文件。

这个方法可行，但是有一些限制。这些更改是对用户可见的文件系统进行的，所以会有很多适当的安全性检查（比方说 Chrome 的[安全浏览](https://developers.google.com/safe-browsing)）来防止恶意内容被写入到文件系统。这些写入不是原地的，会先写入到一个临时文件。除非通过了所有的安全性检查，否则原文件不会被修改。

因此，这些操作会相当缓慢。在你进行小规模的文本时没那么明显，但是当进行像 [SQLite](https://www.sqlite.org/wasm) 数据库更改这样的更重要、更大规模的文件更新时就会遇到性能问题。

## OPFS 是怎么解决这些问题的？

OPFS 提供了页面所属源私有的、对用户不可见的、底层的逐字节文件访问能力。因此它不需要经过与调用文件系统访问 API 所需的相同一系列安全性检查和授权，而且比文件系统访问 API 更快。它还有一套同步调用方法可用（其他的文件系统 API 调用是异步的），但只能在 web worker 里运行，这样就不会阻塞主线程。

概括 OPFS 和用户可见文件系统的不同：

- OPFS 和其他源分区存储机制（例如 {{domxref("IndexedDB API", "IndexedDB API", "", "nocode")}}）一样，受到[浏览器存储配额限制](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)。你可以通过 {{domxref("StorageManager.estimate()", "navigator.storage.estimate()")}} 来获得 OPFS 所用的存储空间的容量。
- 清除站点的存储数据会删除 OPFS。
- 访问 OPFS 中的文件不需要权限提示和安全性检查。
- 浏览器会把 OPFS 的内容持久化保存在磁盘的某个位置，但你不能指望能够一一对应地找到创建出的文件。OPFS 对用户不可见。

## 如何访问 OPFS？

想要访问 OPFS，你首先要调用 {{domxref("StorageManager.getDirectory()", "navigator.storage.getDirectory()")}} 方法。返回一个代表 OPFS 根目录的 {{domxref("FileSystemDirectoryHandle")}} 对象的引用。

## 在主线程中操作 OPFS

在主线程中访问 OPFS 时，你要使用基于 {{jsxref("Promise")}} 的异步 API。 You can access file ({{domxref("FileSystemFileHandle")}}) and directory ({{domxref("FileSystemDirectoryHandle")}}) handles by calling {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} and {{domxref("FileSystemDirectoryHandle.getDirectoryHandle()")}} respectively on the {{domxref("FileSystemDirectoryHandle")}} object representing the OPFS root (and child directories, as they are created).

> **备注：** 在上述方法中传入 `{ create: true }` 会在文件或文件夹不存在时创建相应的文件或文件夹。

```js
// Create a hierarchy of files and folders
const fileHandle = await opfsRoot
    .getFileHandle('my first file', {create: true});
const directoryHandle = await opfsRoot
    .getDirectoryHandle('my first folder', {create: true});
const nestedFileHandle = await directoryHandle
    .getFileHandle('my first nested file', {create: true});
const nestedDirectoryHandle = await directoryHandle
    .getDirectoryHandle('my first nested folder', {create: true});

// Access existing files and folders via their names
const existingFileHandle = await opfsRoot.getFileHandle('my first file');
const existingDirectoryHandle = await opfsRoot
    .getDirectoryHandle('my first folder');
```

### 读取文件

1. Make a {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} call to return a {{domxref("FileSystemFileHandle")}} object.
2. Call the {{domxref("FileSystemFileHandle.getFile()")}} object to return a {{domxref("File")}} object. This is a specialized type of {{domxref("Blob")}}, and as such can be manipulated just like any other `Blob`. For example, you could access the text content directly via {{domxref("Blob.text()")}}.

### 写入文件

1. Make a {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} call to return a {{domxref("FileSystemFileHandle")}} object.
2. Call {{domxref("FileSystemFileHandle.createWritable()")}} to return a {{domxref("FileSystemWritableFileStream")}} object, which is a specialized type of {{domxref("WritableStream")}}.
3. Write contents to it using a {{domxref("FileSystemWritableFilestream.write()")}} call.
4. Close the stream using {{domxref("WritableStream.close()")}}.

### 删除文件或目录

You can call {{domxref("FileSystemDirectoryHandle.removeEntry()")}} on the parent directory, passing it the name of the item you want to remove:

```js
directoryHandle.removeEntry("my first nested file");
```

You can also call {{domxref("FileSystemHandle.remove()")}} on the {{domxref("FileSystemFileHandle")}} or {{domxref("FileSystemDirectoryHandle")}} representing the item you want to remove. To delete a folder including all subfolders, pass the `{ recursive: true }` option.

```js
await fileHandle.remove();
await directoryHandle.remove({ recursive: true });
```

The following provides a quick way to clear the entire OPFS:

```js
await (await navigator.storage.getDirectory()).remove({ recursive: true });
```

### 列出文件夹中的内容

{{domxref("FileSystemDirectoryHandle")}} is an [asynchronous iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols). As such, you can iterate over it with a [`for await…of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) loop and standard methods such as [`entries()`](/en-US/docs/Web/API/FileSystemDirectoryHandle/entries), [`values()`](/en-US/docs/Web/API/FileSystemDirectoryHandle/entries), and [`keys()`](/en-US/docs/Web/API/FileSystemDirectoryHandle/entries).

For example:

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

Web Workers don't block the main thread, which means you can use the synchronous file access APIs in this context. Synchronous APIs are faster as they avoid having to deal with promises.

You can synchronously access a file by calling {{domxref("FileSystemFileHandle.createSyncAccessHandle()")}} on a regular {{domxref("FileSystemFileHandle")}}:

> **Note:** Despite having "Sync" in its name, the `createSyncAccessHandle()` method itself is asynchronous.

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("my highspeed file.txt", {
  create: true,
});
const syncAccessHandle = await fileHandle.createSyncAccessHandle();
```

There are a number of _synchronous_ methods available on the returned {{domxref("FileSystemSyncAccessHandle")}}:

- {{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}}: Returns the size of the file in bytes.
- {{domxref("FileSystemSyncAccessHandle.write", "write()")}}: Writes the content of a buffer into the file, optionally at a given offset, and returns the number of written bytes. Checking the returned number of written bytes allows callers to detect and handle errors and partial writes.
- {{domxref("FileSystemSyncAccessHandle.read", "read()")}}: Reads the contents of the file into a buffer, optionally at a given offset.
- {{domxref("FileSystemSyncAccessHandle.truncate", "truncate()")}}: Resizes the file to the given size.
- {{domxref("FileSystemSyncAccessHandle.flush", "flush()")}}: Ensures that the file contents contain all the modifications done through `write()`.
- {{domxref("FileSystemSyncAccessHandle.close", "close()")}}: Closes the access handle.

Here is an example that uses all the methods mentioned above:

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("fast", { create: true });
const accessHandle = await fileHandle.createSyncAccessHandle();

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

// Initialize this variable for the size of the file.
let size;
// The current size of the file, initially `0`.
size = accessHandle.getSize();
// Encode content to write to the file.
const content = textEncoder.encode("Some text");
// Write the content at the beginning of the file.
accessHandle.write(content, { at: size });
// Flush the changes.
accessHandle.flush();
// The current size of the file, now `9` (the length of "Some text").
size = accessHandle.getSize();

// Encode more content to write to the file.
const moreContent = textEncoder.encode("More content");
// Write the content at the end of the file.
accessHandle.write(moreContent, { at: size });
// Flush the changes.
accessHandle.flush();
// The current size of the file, now `21` (the length of
// "Some textMore content").
size = accessHandle.getSize();

// Prepare a data view of the length of the file.
const dataView = new DataView(new ArrayBuffer(size));

// Read the entire file into the data view.
accessHandle.read(dataView);
// Logs `"Some textMore content"`.
console.log(textDecoder.decode(dataView));

// Read starting at offset 9 into the data view.
accessHandle.read(dataView, { at: 9 });
// Logs `"More content"`.
console.log(textDecoder.decode(dataView));

// Truncate the file after 4 bytes.
accessHandle.truncate(4);
```

## 浏览器兼容性

{{Compat}}

## 参见

- [源私有文件系统](https://web.dev/articles/origin-private-file-system)——web.dev
