---
title: FileSystemHandle：queryPermission() 方法
slug: Web/API/FileSystemHandle/queryPermission
---

{{securecontext_header}}{{APIRef("File System Access API")}}{{SeeCompatTable}}

{{domxref("FileSystemHandle")}} 接口的 **`queryPermission()`** 方法用于查询当前句柄目前的权限状态。

## 语法

```js-nolint
queryPermission(fileSystemHandlePermissionDescriptor)
```

### 参数

- FileSystemHandlePermissionDescriptor {{optional_inline}}

  - : 一个对象，指定需要查询的权限模式，包含以下选项：

    - `'mode'`：可以是 `'read'` 或 `'readwrite'`。

### 返回值

{{domxref('PermissionStatus.state')}}，值为 `'granted'`、`'denied'` 或 `'prompt'` 三者之一。

如果此方法返回了“prompt”，则站点必须在对句柄进行任何操作前调用 requestPermission() 请求授权。如果此方法返回了“denied”，则任何操作都会被拒绝。从本地文件系统句柄构造器返回的句柄通常会在初始时对只读权限状态返回“granted”。但是，除开用户收回了权限的情况，从 IndexedDB 获取的句柄也有可能会返回“prompt”。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `mode` 指定的值不是 `'read'` 或者 `'readwrite'`，则抛出此异常。

## 示例

以下异步函数会在用户对文件句柄授予了只读或读写权限时返回 `true`，若无权限则请求权限。

```js
// fileHandle 是一个 FileSystemFileHandle
// withWrite 是一个布尔值，如果要求写入则需传入 true

async function verifyPermission(fileHandle, withWrite) {
  const opts = {};
  if (withWrite) {
    opts.mode = "readwrite";
  }

  // 检查是否已经拥有相应权限，如果是，返回 true。
  if ((await fileHandle.queryPermission(opts)) === "granted") {
    return true;
  }

  // 为文件请求权限，如果用户授予了权限，返回 true。
  if ((await fileHandle.requestPermission(opts)) === "granted") {
    return true;
  }

  // 用户没有授权，返回 false。
  return false;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://web.dev/file-system-access/)
