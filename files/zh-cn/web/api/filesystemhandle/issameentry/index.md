---
title: FileSystemHandle：isSameEntry() 方法
slug: Web/API/FileSystemHandle/isSameEntry
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemHandle")}} 接口的 **`isSameEntry()`** 方法用于比对两个{{domxref("FileSystemHandle", "句柄", "", 1)}}以查看两者关联的条目（文件或目录）是否相符。

## 语法

```js-nolint
isSameEntry(fileSystemHandle)
```

### 参数

- {{domxref("FileSystemHandle")}}
  - : 需要与调用此方法的句柄进行匹配的 `FileSystemHandle`。

### 返回值

返回一个 {{jsxref('Boolean')}} 值，如果条目相符则此值为 `true`。

### 异常

不抛出异常。

## 示例

以下函数将单个条目与条目数组进行比对，返回包含不相符条目的新数组。

```js
function removeMatches(fileEntry, entriesArr) {
  let newArr = entriesArr.filter((entry) => !fileEntry.isSameEntry(entry));

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
