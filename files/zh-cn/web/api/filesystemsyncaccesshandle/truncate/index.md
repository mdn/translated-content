---
title: FileSystemSyncAccessHandle：truncate() 方法
slug: Web/API/FileSystemSyncAccessHandle/truncate
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

{{domxref("FileSystemSyncAccessHandle")}} 接口的 **`truncate()`** 方法用于将与句柄相关联文件的大小调整为指定的字节数。

> [!NOTE]
> 在规范早期版本中，{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}、{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}、{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}} 和 `truncate()` 被错误地规定为异步方法。某些浏览器的旧版本是依照异步方式来实现这些方法的，不过，现今所有支持这些方法的浏览器都将它们实现为同步方法。

## 语法

```js-nolint
truncate(newSize)
```

### 参数

- `newSize`
  - : 要将文件调整到的字节数。

### 返回值

无（{{jsxref('undefined')}}）。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果相关的访问句柄已经被关闭，或者由于其他原因导致修改文件的二进制数据失败，抛出此异常。
- `QuotaExceededError` {{domxref("DOMException")}}
  - : 如果 `newSize` 大于文件原来的大小并且超出了浏览器的[存储配额](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)，抛出此异常。
- {{jsxref("TypeError")}}
  - : 如果底层文件系统不支持将文件大小设为新的大小，抛出此异常。

## Examples

```js
async function truncateFile() {
  // 获取草稿文件的句柄
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // 获取同步访问句柄
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // 将文件裁剪至 0 字节
  accessHandle.truncate(0);

  // 将更改持久化至磁盘
  accessHandle.flush();

  // 如果完成，请始终关闭 FileSystemSyncAccessHandle
  accessHandle.close();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
