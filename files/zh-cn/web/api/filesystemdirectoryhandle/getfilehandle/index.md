---
title: FileSystemDirectoryHandle：getFileHandle() 方法
slug: Web/API/FileSystemDirectoryHandle/getFileHandle
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

{{domxref("FileSystemDirectoryHandle")}} 接口的 **`getFileHandle()`** 方法返回一个位于调用此方法的目录句柄内带有指定名称的文件的 {{domxref('FileSystemFileHandle')}}。

## 语法

```js-nolint
getFileHandle(name)
getFileHandle(name, options)
```

### 参数

- `name`
  - : 一个字符串，表示你想要获得的文件的 {{domxref('FileSystemHandle.name')}}。
- `options` {{optional_inline}}
  - : 包含以下属性的对象：
    - `create` {{optional_inline}}
      - : {{jsxref('Boolean', '布尔值', '', 'nocode')}}，默认为 `false`。当设为 `true` 时，如果没有找到对应的文件，将会创建一个指定名称的文件并将其返回。

### 返回值

一个 {{jsxref('Promise')}} 对象，会兑现一个 {{domxref('FileSystemFileHandle')}}。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果句柄的 {{domxref('PermissionStatus.state')}} 在 `readwrite` 模式下不是 `'granted'`（如果 `create` 选项设置为 `true`），或在 `read` 模式下不是 `'granted'`（如果 `create` 选项设置为 `false`）。
- {{jsxref("TypeError")}}
  - : 如果指定的名称不是一个合法的字符串或者包含会干扰本地文件系统的字符则抛出此异常。
- `TypeMismatchError` {{domxref("DOMException")}}
  - : 如果指定名称的条目是个目录而不是文件，则抛出此异常。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果未找到当前条目或文件不存在且 `create` 选项设置为 `false`，抛出该异常。

## 示例

下面的示例能够取得指定名称的文件句柄，如果文件不存在，则创建。

```js
const fileName = "fileToGetName";

// 假设我们有一个目录句柄：'currentDirHandle'
const fileHandle = currentDirHandle.getFileHandle(fileName, { create: true });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
