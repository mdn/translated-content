---
title: FileSystemHandle：queryPermission() 方法
slug: Web/API/FileSystemHandle/queryPermission
l10n:
  sourceCommit: 4e8bc4593e38b3902430fa701a6256c95d7bbbdc
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

{{domxref("FileSystemHandle")}} 接口的 **`queryPermission()`** 方法用于查询当前句柄目前的权限状态。

## 语法

```js-nolint
queryPermission(descriptor)
```

### 参数

- `descriptor` {{optional_inline}}

  - : 一个对象，指定需要查询的权限模式，包含以下选项：

    - `'mode'` {{optional_inline}}

      - : 可以是 `'read'` 或 `'readwrite'`。

### 返回值

一个兑现为 {{domxref('PermissionStatus.state')}} 的 {{jsxref("Promise")}}，其值为 `'granted'`、`'denied'` 或 `'prompt'`。它也可能因出现以下异常而被拒绝。

如果其兑现为“prompt”，则网站必须先调用 `requestPermission()`，然后才能对句柄执行任何操作。如果其兑现为“denied”，则任何操作都将被拒绝。通常，本地文件系统句柄工厂返回的句柄最初将兑现“granted”作为其读取权限状态。但是，除了通过用户撤销权限之外，从 IndexedDB 检索到的句柄也可能兑现为“prompt”。

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
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
