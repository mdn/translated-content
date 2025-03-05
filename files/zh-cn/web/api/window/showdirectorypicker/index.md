---
title: Window：showDirectoryPicker() 方法
slug: Web/API/Window/showDirectoryPicker
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("File System API")}}{{Securecontext_Header}}{{SeeCompatTable}}

{{domxref("Window")}} 接口的 **`showDirectoryPicker()`** 方法用于显示一个目录选择器，以允许用户选择一个目录。

## 语法

```js-nolint
showDirectoryPicker()
```

### 参数

- `options` {{optional_inline}}

  - : 选项对象，包含以下属性：

    - `id` {{optional_inline}}
      - : 通过指定 ID，浏览器可以为不同的 ID 记住不同的目录。如果相同的 ID 用于另一个选择器，则该选择器将在同一目录中打开。
    - `mode` {{optional_inline}}
      - : 字符串，默认为 `"read"`，用于只读访问，或 `"readwrite"` 用于读写访问。
    - `startIn` {{optional_inline}}
      - : 一个 `FileSystemHandle` 对象或者代表某个众所周知的目录的字符串（如：`"desktop"`、`"documents"`、`"downloads"`、`"music"`、`"pictures"`、`"videos"`），用于指定选择器的起始目录。

### 返回值

一个 {{jsxref("Promise")}} 对象，会兑现一个 {{domxref('FileSystemDirectoryHandle')}} 对象。

### 异常

- `AbortError` {{domxref("DOMException")}}
  - : 当用户未经选择直接关闭了目录选择器，或用户代理认为选择的目录过于敏感或者危险，或指定 `mode` 中选择的目录的 {{domxref('PermissionStatus.state')}} 不是 `"granted"`，则抛出此异常。
- `SecurityError` {{domxref("DOMException")}}
  - : 如果调用被[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)阻止，或者不是通过用户交互（例如按下按钮）调用，则抛出该异常。

## 安全性

[瞬态用户激活](/zh-CN/docs/Web/Security/User_activation)是必需的。用户必须与页面或 UI 元素进行交互才能使该特性正常运行。

## 示例

以下异步函数可以显示一个目录选择器并在用户选择后返回一个 {{domxref('FileSystemDirectoryHandle')}} 对象。

```js
async function getDir() {
  const dirHandle = await window.showDirectoryPicker();

  // 操作 dirHandle 的后续代码
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化对本地文件的访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
