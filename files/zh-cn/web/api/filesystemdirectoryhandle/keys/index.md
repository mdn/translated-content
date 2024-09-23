---
title: FileSystemDirectoryHandle：keys() 方法
slug: Web/API/FileSystemDirectoryHandle/keys
l10n:
  sourceCommit: fd4d2987e2db8b4183017b6a0ed5e4f054b18587
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

{{domxref("FileSystemDirectoryHandle")}} 接口的 **`keys()`** 方法返回一个异步迭代器，用于迭代调用此方法的 `FileSystemDirectoryHandle` 中的条目的键。

## 语法

```js-nolint
keys()
```

### 参数

无。

### 返回值

一个新的包含 `FileSystemDirectoryHandle` 中每个条目的键的异步迭代器。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果句柄的 {{domxref('PermissionStatus.state')}} 在 `read` 模式下不是 `'granted'`，则抛出此异常。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果未找到当前条目，则抛出此异常。

## 示例

使用 `for await...of` 循环能够简化迭代过程。

```js
const dirHandle = await window.showDirectoryPicker();

for await (const key of dirHandle.keys()) {
  console.log(key);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
