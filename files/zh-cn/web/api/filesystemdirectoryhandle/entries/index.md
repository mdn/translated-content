---
title: FileSystemDirectoryHandle：entries() 方法
slug: Web/API/FileSystemDirectoryHandle/entries
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

{{domxref("FileSystemDirectoryHandle")}} 接口的 **`entries()`** 方法返回一个异步迭代器，用于迭代调用此方法的 `FileSystemDirectoryHandle` 中的条目的键值对。键值对是一个 `[key, value]` 形式的数组。

## 语法

```js-nolint
entries()
```

### 参数

无。

### 返回值

一个新的包含 `FileSystemDirectoryHandle` 中每个条目的键值对的异步迭代器。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果句柄的 {{domxref('PermissionStatus.state')}} 在 `read` 模式下不是 `'granted'`，则抛出此异常。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果未找到当前条目，则抛出此异常。

## 示例

使用 `for await...of` 循环能够简化迭代过程。

```js
const dirHandle = await window.showDirectoryPicker();

for await (const [key, value] of dirHandle.entries()) {
  console.log({ key, value });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
