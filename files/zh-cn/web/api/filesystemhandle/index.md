---
title: FileSystemHandle
slug: Web/API/FileSystemHandle
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref('File System Access API')}} 的 **`FileSystemHandle`** 接口是代表一个文件或一个目录的对象。多个句柄可以代表同一个条目。在大多数情况下，你不会直接使用 `FileSystemHandle`，而是会用到它的 {{domxref('FileSystemFileHandle')}} 和 {{domxref('FileSystemDirectoryHandle')}} 子接口。

## 基于 FileSystemHandle 的接口

以下是基于 FileSystemHandle 的接口的列表。

- {{domxref("FileSystemFileHandle")}}
  - : 提供一个指向文件条目的句柄。
- {{domxref("FileSystemDirectoryHandle")}}
  - : 提供一个指向目录条目的句柄。

## 实例属性

- {{domxref('FileSystemHandle.kind','kind')}} {{ReadOnlyInline}}
  - : 返回条目的类型。如果关联的条目是一个文件，则此值为 `'file'`，否则为 `'directory'`。
- {{domxref('FileSystemHandle.name', 'name')}} {{ReadOnlyInline}}
  - : 返回关联的条目的名称。

## 实例方法

- {{domxref('FileSystemHandle.isSameEntry()', 'isSameEntry()')}}
  - : 比对两个{{domxref("FileSystemHandle", "句柄", "", 1)}}以查看两者关联的条目（文件或目录）是否相符。
- {{domxref('FileSystemHandle.queryPermission()', 'queryPermission()')}} {{Experimental_Inline}}
  - : 查询当前句柄目前的权限状态。
- {{domxref('FileSystemHandle.remove', 'remove()')}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : 向底层文件系统请求移除句柄所代表的的条目。
- {{domxref('FileSystemHandle.requestPermission', 'requestPermission()')}} {{Experimental_Inline}}
  - : 为文件句柄请求读取或读写权限。

## 示例

### 检查类型

下面的代码允许用户在文件选择器选择一个文件，然后测试返回的句柄是一个文件还是一个目录。

```js
// 存放对文件句柄的引用
let fileHandle;

async function getFile() {
  // 打开文件选择器
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === "file") {
    // 运行针对文件的代码
  } else if (fileHandle.kind === "directory") {
    // 运行针对目录的代码
  }
}
```

### 查询与请求权限

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

### 比对条目

以下函数将单个条目与条目数组进行比对，返回包含不相符条目的新数组。

```js
function removeMatches(fileEntry, entriesArr) {
  const newArr = entriesArr.filter((entry) => !fileEntry.isSameEntry(entry));

  return newArr;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://web.dev/file-system-access/)
