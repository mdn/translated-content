---
title: FileSystemHandle：isSameEntry() 方法
slug: Web/API/FileSystemHandle/isSameEntry
l10n:
  sourceCommit: a9edf113447f37911ccc0c26ac507ed1d1629606
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

{{domxref("FileSystemHandle")}} 接口的 **`isSameEntry()`** 方法用于比对两个{{domxref("FileSystemHandle", "句柄", "", "nocode")}}以查看两者关联的条目（文件或目录）是否相符。

## 语法

```js-nolint
isSameEntry(fileSystemHandle)
```

### 参数

- {{domxref("FileSystemHandle")}}
  - : 需要与调用此方法的句柄进行匹配的 `FileSystemHandle`。

### 返回值

一个兑现{{jsxref('Boolean', '布尔值', '', 'nocode')}}的 Promise。

## 示例

以下函数将单个条目与条目数组进行比对，并返回一个 {{jsxref("Promise")}}，其会兑现包含不相符条目的新数组。

```js
async function removeMatches(fileEntry, entriesArr) {
  const newArr = [];
  for (const entry of entriesArr) {
    if (!(await fileEntry.isSameEntry(entry))) {
      newArr.push(entry);
    }
  }
  return newArr;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
