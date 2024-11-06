---
title: FileSystemSyncAccessHandle
slug: Web/API/FileSystemSyncAccessHandle
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

{{domxref("File System API", "文件系统 API", "", "nocode")}} 的 **`FileSystemSyncAccessHandle`** 接口用于表示一个指向某个文件系统条目的同步句柄。

这个类只在用于处理对终端用户不可见的[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)上的文件的专用 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中可以访问（这样它的方法就不会阻塞主线程的执行）。

因此，它的方法不受与运行在用户可见文件系统中的文件上的方法相同的安全性检查，从而具有更优秀的性能。这使得这些方法适用于重要的、大规模的文件更新，例如对 [SQLite](https://www.sqlite.org/wasm) 数据库进行更改。

这个接口通过 {{domxref('FileSystemFileHandle.createSyncAccessHandle()')}} 方法来访问。

> [!NOTE]
> 在规范早期版本中，{{domxref("FileSystemSyncAccessHandle")}} 的 {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}、{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}、{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}} 和 {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} 被错误地规定为异步方法。某些浏览器的旧版本是依照异步方式来实现这些方法的，不过，现今所有支持这些方法的浏览器都将它们实现为同步方法。

## 实例属性

无。

## 实例方法

- {{domxref('FileSystemSyncAccessHandle.close', 'close()')}}
  - : 关闭一个打开的同步文件句柄，禁止之后对其的任何操作并且释放之前加在与文件句柄相关联的文件上的独占锁。
- {{domxref('FileSystemSyncAccessHandle.flush', 'flush()')}}
  - : 将通过 {{domxref('FileSystemSyncAccessHandle.write', 'write()')}} 方法对句柄相关联的文件所做的所有更改持久化保存到磁盘上。
- {{domxref('FileSystemSyncAccessHandle.getSize', 'getSize()')}}
  - : 返回与句柄相关联文件的字节大小。
- {{domxref('FileSystemSyncAccessHandle.read', 'read()')}}
  - : 将与句柄相关联文件的内容读取到指定的缓冲区中，可选择在给定的偏移处开始读取。
- {{domxref('FileSystemSyncAccessHandle.truncate', 'truncate()')}}
  - : 将与句柄相关联文件的大小调整为指定的字节数。
- {{domxref('FileSystemSyncAccessHandle.write', 'write()')}}
  - : 将指定缓冲区中的内容写入到与句柄相关联的文件，可选择在给定的偏移处开始写入。

## 示例

下面的异步事件处理函数包含在一个 Web Worker 中。当收到来自主线程的消息时，它将执行：

- 创建一个同步文件访问句柄。
- 获取文件的大小然后创建一个 {{jsxref("ArrayBuffer")}} 来容纳其内容。
- 将文件内容读取到缓冲区。
- 将收到的消息编码然后写入到文件的末尾。
- 将更改保存到磁盘然后关闭访问句柄。

```js
onmessage = async (e) => {
  // 接收从主线程发来的消息
  const message = e.data;

  // 获取草稿文件的句柄
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // 获取同步访问句柄
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // 获取文件的大小
  const fileSize = accessHandle.getSize();
  // 读取文件内容到缓冲区
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // 将消息写入文件末尾
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // 将更改持久化至磁盘
  accessHandle.flush();

  // 如果完成，请始终关闭 FileSystemSyncAccessHandle
  accessHandle.close();
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
