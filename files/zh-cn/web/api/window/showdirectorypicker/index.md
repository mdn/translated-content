---
title: Window：showDirectoryPicker() 方法
slug: Web/API/Window/showDirectoryPicker
---

{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}{{SeeCompatTable}}

{{domxref("Window")}} 接口的 **`showDirectoryPicker()`** 方法用于显示一个目录选择器，以允许用户选择一个目录。

## 语法

```js-nolint
showDirectoryPicker()
```

### 参数

- `options` {{optional_inline}}

  - : 选项对象，包含以下属性：

    - `id`
      - : 通过指定 ID，浏览器能够记住不同 ID 所对应的目录。当使用相同的 ID 打开另一个目录选择器时，选择器会打开相同的目录。
    - `mode`
      - : 字符串，默认为 `"read"`，可对目录进行只读访问。设为 `"readwrite"` 可对目录进行读写访问。
    - `startIn`
      - : 一个 `FileSystemHandle` 对象或者代表某个众所周知的目录的字符串（如：`"desktop"`、`"documents"`、`"downloads"`、`"music"`、`"pictures"`、`"videos"`）。用于指定选择器的起始目录。

### 返回值

一个 {{jsxref("Promise")}} 对象，会兑现一个 {{domxref('FileSystemDirectoryHandle')}} 对象。

### 异常

- `AbortError`
  - : 当用户直接关闭了目录选择器或选择的目录是敏感目录时将会抛出 AbortError。

## 安全性

要求发生[临时性用户活动](/zh-CN/docs/Web/Security/User_activation)。用户必须与页面或 UI 元素进行交互才能使该特性正常运行。

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
- [文件系统访问 API：简化对本地文件的访问](https://web.dev/file-system-access/)
