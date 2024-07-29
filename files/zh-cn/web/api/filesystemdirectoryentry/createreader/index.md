---
title: FileSystemDirectoryEntry：createReader() 方法
slug: Web/API/FileSystemDirectoryEntry/createReader
l10n:
  sourceCommit: 23228f1b9c756862dac77b238ca74c2e5bd3c9dc
---

{{APIRef("File and Directory Entries API")}}

{{domxref("FileSystemDirectoryEntry")}} 接口的 **`createReader()`** 方法返回 {{domxref("FileSystemDirectoryReader")}} 对象，它可以用于读取服务目录中的条目。

## 语法

```js-nolint
createReader()
```

### 参数

无。

### 返回值

一个 {{domxref("FileSystemDirectoryReader")}} 对象，它可以用于读取服务目录中的条目。

## 示例

此示例创建一个名为 `readDirectory()` 的异步函数，它获取指定 {{domxref("FileSystemDirectoryEntry")}} 中所有的条目，以数组的形式返回它们。

```js
async function readDirectory(directory) {
  const dirReader = directory.createReader();
  const entries = [];

  while (true) {
    const results = await new Promise((resolve, reject) => {
      dirReader.readEntries(resolve, reject);
    });

    if (!results.length) {
      break;
    }

    for (const entry of results) {
      entries.push(entry);
    }
  }

  return entries;
}
```

这是通过重复调用 {{domxref("FileSystemDirectoryReader.readEntries", "readEntries()")}} 来获取目录中的所有条目，将每次返回结果连接到数组。当它返回一个空数组时，所有条目已被读取，循环结束。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件与目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
- [文件与目录条目 API 简介](/zh-CN/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryReader")}}
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystemFileEntry")}}
- {{domxref("FileSystemEntry")}}
