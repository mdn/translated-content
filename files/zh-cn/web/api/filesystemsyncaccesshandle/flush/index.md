---
title: FileSystemSyncAccessHandle：flush() 方法
slug: Web/API/FileSystemSyncAccessHandle/flush
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

{{domxref("FileSystemSyncAccessHandle")}} 接口的 **`flush()`** 方法用于将通过 {{domxref('FileSystemSyncAccessHandle.write', 'write()')}} 方法对句柄相关联的文件所做的所有更改持久化保存到磁盘上。

请记住：只当你需要在指定的时间将更改提交到磁盘的时候才需要调用这个方法，不然你可以让底层操作系统在其认为合适的时间点处理这项任务，这大多数情况下都不会有问题。

> [!NOTE]
> 在规范早期版本中，{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}、`flush()`、{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}} 和 {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} 被错误地规定为异步方法。某些浏览器的旧版本是依照异步方式来实现这些方法的，不过，现今所有支持这些方法的浏览器都将它们实现为同步方法。

## 语法

```js-nolint
flush()
```

### 参数

无。

### 返回值

无（{{jsxref('undefined')}}）。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果相关的访问句柄已经被关闭，抛出此异常。

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
