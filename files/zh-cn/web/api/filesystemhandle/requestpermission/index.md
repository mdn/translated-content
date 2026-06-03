---
title: FileSystemHandle：requestPermission() 方法
slug: Web/API/FileSystemHandle/requestPermission
l10n:
  sourceCommit: 6c26f60ea9ab26e591cc59551cd664c07fcf213b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

{{domxref("FileSystemHandle")}} 接口的 **`queryPermission()`** 方法用于为文件句柄请求读取或读写权限。

## 语法

```js-nolint
requestPermission(descriptor)
```

### 参数

- `descriptor` {{optional_inline}}
  - : 一个对象，指定需要查询的权限模式，包含以下选项：
    - `'mode'` {{optional_inline}}
      - : 可以是 `'read'` 或 `'readwrite'`。

### 返回值

一个兑现为 {{domxref('PermissionStatus.state')}} 的 {{jsxref("Promise")}}，其值为 `'granted'`、`'denied'` 或 `'prompt'`。它也可能因出现以下异常而被拒绝。

### 异常

- {{jsxref("TypeError")}}
  - : 如果没有指定参数或者 `mode` 的值不是 `'read'` 或 `'readwrite'`，则抛出此异常。
- `SecurityError` {{domxref("DOMException")}}
  - : 在下列情况之一发生时抛出：
    - 该方法是在与顶级上下文不[同源](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)的上下文（例如跨源 iframe）中调用的。
    - 没有瞬态用户激活，例如按下按钮。这包括当句柄处于无法使用用户激活的非 Window 上下文（例如 Worker）中时。

## 安全

[瞬态用户激活](/zh-CN/docs/Web/Security/Defenses/User_activation)是必需的。用户必须与页面或 UI 元素进行交互才能使该特性正常运行。

## 示例

以下异步函数会在句柄没有获得授权时请求权限。

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
