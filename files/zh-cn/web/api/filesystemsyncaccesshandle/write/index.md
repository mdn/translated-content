---
title: FileSystemSyncAccessHandle：write() 方法
slug: Web/API/FileSystemSyncAccessHandle/write
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

{{domxref("FileSystemSyncAccessHandle")}} 接口的 **`write()`** 方法用于将指定缓冲区中的内容写入到与句柄相关联的文件，可选择在给定的偏移处开始写入。

[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)中的文件对末端用户来说不可见，因而 {{domxref("FileSystemSyncAccessHandle")}} 中的方法不受与运行在用户可见文件系统中的文件上的方法相同的安全性检查。因此，使用 `FileSystemSyncAccessHandle.write()` 进行写入的性能要更为优秀。这使得它适用于重要的、大规模的文件更新，例如对 [SQLite](https://www.sqlite.org/wasm) 数据库进行更改。

## 语法

```js-nolint
write(buffer, options)
```

### 参数

- `buffer`
  - : 一个表示要写入到文件的缓冲区的 {{jsxref("ArrayBuffer")}} 或者 `ArrayBufferView` 对象（例如一个 {{jsxref("DataView")}}）。
- `options` {{optional_inline}}
  - : 一个包含以下属性的选项对象：
    - `at`
      - : 一个表示应当从文件何处开始写入缓冲区的字节偏移量数字。

> [!NOTE]
> 你无法直接操作 `ArrayBuffer` 中的内容，应该先创建一个像 {{jsxref("Int8Array")}} 或者 {{jsxref("DataView")}} 这样的类型化数组对象，用来把缓冲区表示成特定的格式，然后再用类型化数组对象来读写缓冲区的内容。

### 返回值

一个表示写入到文件的字节数的数字。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果相关的访问句柄已经被关闭，或者对文件二进制数据的修改彻底失败，抛出此异常。
- `QuotaExceededError` {{domxref("DOMException")}}
  - : 如果增长后的数据量超出了浏览器的[存储配额](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)，抛出此异常。
- {{jsxref("TypeError")}}
  - : 如果底层文件系统不支持从指定的文件偏移处开始写入，抛出此异常。

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

> [!NOTE]
> 在规范早期版本中，{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}、{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}、{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}} 和 {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} 被错误地规定为异步方法。某些浏览器的旧版本是依照异步方式来实现这些方法的，不过，现今所有支持这些方法的浏览器都将它们实现为同步方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
