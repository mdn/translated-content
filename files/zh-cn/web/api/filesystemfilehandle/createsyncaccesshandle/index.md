---
title: FileSystemFileHandle：createSyncAccessHandle() 方法
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
---

{{securecontext_header}}{{APIRef("File System API")}}

{{domxref("FileSystemFileHandle")}} 接口的 **`createSyncAccessHandle()`** 方法返回一个 {{jsxref('Promise')}} 对象，可兑现一个用于同步读写文件的 {{domxref('FileSystemSyncAccessHandle')}} 对象。此方法的同步特性带来了性能优势，但是只能在专用于操作[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)上的文件的 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中使用。

创建 {{domxref('FileSystemSyncAccessHandle')}} 会对与文件句柄关联的文件进行独占锁定。这用于在文件已有的访问句柄被关闭前，阻止对文件创建更多的 {{domxref('FileSystemSyncAccessHandle')}} 或 {{domxref('FileSystemWritableFileStream')}}。

## 语法

```js-nolint
createSyncAccessHandle()
```

### 参数

无。

### 返回值

一个 {{jsxref('Promise')}} 对象，可兑现一个 {{domxref('FileSystemSyncAccessHandle')}} 对象。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果 {{domxref('FileSystemSyncAccessHandle')}} 对象代表的不是[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)上的文件，抛出此异常。
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : 如果浏览器无法获得文件句柄所关联的文件的锁定，抛出此异常。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果在 API 层面上没有被授予权限（也就是需要调用 {{domxref("FileSystemHandle.requestPermission")}}），抛出此异常。

## 示例

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://web.dev/file-system-access/)
