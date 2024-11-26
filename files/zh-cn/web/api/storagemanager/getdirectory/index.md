---
title: StorageManager：getDirectory() 方法
slug: Web/API/StorageManager/getDirectory
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{securecontext_header}}{{APIRef("File System API")}} {{AvailableInWorkers}}

{{domxref("StorageManager")}} 接口的 **`getDirectory()`** 方法用于获取对 {{domxref("FileSystemDirectoryHandle")}} 对象的引用，该对象允许访问存储在[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)（OPFS）中的目录及目录的内容。

## 语法

```js-nolint
getDirectory()
```

### 参数

无。

### 返回值

一个兑现 {{domxref("FileSystemDirectoryHandle")}} 对象的 {{jsxref('Promise')}}。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 如果用户代理无法将请求的目录映射到本地的 OPFS，则抛出此异常。

## 示例

以下异步事件处理函数包含在 Web Worker 中。从主线程收到消息后：

1. 使用 `getDirectory()` 获取表示 OPFS 根目录的 {{domxref("FileSystemDirectoryHandle")}}，并将其存储在 `root` 变量中。
2. 使用 {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} 获取文件句柄。
3. 使用 {{domxref("FileSystemFileHandle.createSyncAccessHandle()")}} 创建同步文件访问句柄。
4. 获取文件的大小并创建一个 {{jsxref("ArrayBuffer")}} 来包含它。
5. 读取和写入文件。
6. 将更改保存到磁盘并关闭同步访问句柄。

```js
onmessage = async (e) => {
  // 从主线程检索发送到 worker 的消息
  const message = e.data;

  // 获取草稿文件的句柄
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // 获取同步访问句柄
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // 获取文件的大小
  const fileSize = accessHandle.getSize();
  // 将文件内容读取到缓冲区
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // 将消息写入文件末尾
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // 将更改保存到磁盘
  accessHandle.flush();

  // 如果完成，请始终关闭 FileSystemSyncAccessHandle
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

- {{domxref("StorageManager")}}
- {{domxref("Navigator.storage")}}
- {{domxref("WorkerNavigator.storage")}}
- {{domxref("FileSystemDirectoryHandle")}}
