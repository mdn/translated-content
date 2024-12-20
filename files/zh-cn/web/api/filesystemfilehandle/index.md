---
title: FileSystemFileHandle
slug: Web/API/FileSystemFileHandle
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

{{domxref("File System API", "文件系统 API", "", "nocode")}} 的 **`FileSystemFileHandle`** 接口表示一个指向文件系统条目的句柄。可通过 {{domxref('window.showOpenFilePicker()')}} 方法来访问此接口。

注意，读写操作所依赖的文件访问权限在刷新或关闭页面并且页面所属的源没有其他标签页保持打开的情况下不会继续保有。{{domxref("FileSystemHandle")}} 接口的 {{domxref("FileSystemHandle.queryPermission()", "queryPermission")}} 方法可用于在访问文件前验证权限状态。

{{InheritanceDiagram}}

## 实例属性

_从父类 {{DOMxRef("FileSystemHandle")}} 继承属性。_

## 实例方法

_从父类 {{DOMxRef("FileSystemHandle")}} 继承方法。_

- {{domxref('FileSystemFileHandle.getFile', 'getFile()')}}
  - : 返回一个 {{jsxref('Promise')}} 对象，可兑现一个 {{domxref('File')}} 对象，该对象表示句柄所代表的条目在磁盘上的状态。
- {{domxref('FileSystemFileHandle.createSyncAccessHandle', 'createSyncAccessHandle()')}}
  - : 返回一个 {{jsxref('Promise')}} 对象，可兑现一个 {{domxref('FileSystemSyncAccessHandle')}} 对象，该对象可用于同步读写文件。此方法的同步特性带来了性能优势，但是只能在专用的 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中使用。
- {{domxref('FileSystemFileHandle.createWritable', 'createWritable()')}}
  - : 返回一个 {{jsxref('Promise')}} 对象，可兑现一个新建的 {{domxref('FileSystemWritableFileStream')}} 对象，可用于写入文件。

## 示例

### 读取文件

下面的异步函数用于显示一个文件选择器，一旦有文件被选择，便可以使用 `getFile()` 方法获取其内容。

```js
async function getTheFile() {
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

  // 打开文件选择器
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
  // 获取文件内容
  const fileData = await fileHandle.getFile();
  return fileData;
}
```

### 写入文件

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

### 同步读写文件

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

  // 获取草稿文件的句柄
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
> 在规范的早期版本中，{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}、{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}、{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}} 和 {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} 被错误地指定为异步方法，并且某些较旧版本的浏览器以这种方式实现它们。然而，当前所有支持这些方法的浏览器都将它们实现为同步方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
