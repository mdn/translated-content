---
title: FileSystemDirectoryHandle：removeEntry() 方法
slug: Web/API/FileSystemDirectoryHandle/removeEntry
---

{{securecontext_header}}{{APIRef("File System API")}}

{{domxref("FileSystemDirectoryHandle")}} 接口的 **`removeEntry()`** 方法用于尝试将目录句柄内名为指定名称的文件或目录移除。

## 语法

```js-nolint
removeEntry(name)
removeEntry(name, options)
```

### 参数

- `name`
  - : 一个字符串，表示你想要移除的条目的 {{domxref('FileSystemHandle.name')}}。
- `options` {{optional_inline}}

  - : 一个包含以下选项的可选对象：

    - `recursive`
      - : 布尔值，默认为 `false`。当设为 `true` 时，条目将会被递归移除。

### 返回值

一个 {{jsxref('Promise')}} 对象，兑现 `undefined`。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `name` 不是一个合法的字符串或者包含不允许出现在文件系统中的字符时，抛出此异常。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果 {{domxref('PermissionStatus')}} 不为“granted”则抛出此异常。
- `InvalidModificationError` {{domxref("DOMException")}}
  - : 如果 `recursive` 被设为 `false`，而对应的条目又有子条目时，抛出此异常。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果没有找到指定名称的条目，抛出此异常。

## 示例

下面的示例演示移除目录句柄内的一个条目。

```js
const entryName = "entryToRemove";

// 假设我们有一个目录句柄：'currentDirHandle'
currentDirHandle.removeEntry(entryName).then(() => {
  // 成功移除后要运行的代码
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.com/articles/file-system-access/)
