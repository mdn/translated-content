---
title: DataTransferItem：getAsFileSystemHandle() 方法
slug: Web/API/DataTransferItem/getAsFileSystemHandle
l10n:
  sourceCommit: 2b6bddfe281c0179fbde9c870f9de7c0dc3829e8
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}

{{domxref("DataTransferItem")}} 接口的 **`getAsFileSystemHandle()`** 方法返回一个 {{domxref('FileSystemFileHandle')}}（若拖动的项目是文件），或 {{domxref( 'FileSystemDirectoryHandle')}}（若拖动的项目是目录）。

## 语法

```js-nolint
getAsFileSystemHandle()
```

### 参数

无。

### 返回值

一个 {{jsxref('Promise')}}。

如果项目的 {{domxref("DataTransferItem.kind", "kind")}} 属性为 `"file"`，并且在 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 或 {{domxref("HTMLElement/drop_event", "drop")}} 事件处理器中访问此项目，则返回的 promise 兑现一个 {{domxref('FileSystemFileHandle')}}（若拖动的项目是文件）或 {{domxref ('FileSystemDirectoryHandle')}}（若拖动的项目是一个目录）。

否则，promise 会兑现 `null`。

### 异常

无。

## 示例

本示例使用 `getAsFileSystemHandle()` 方法返回一个表示放置的项目的{{domxref('FileSystemHandle', '文件句柄', '', 'nocode')}}。

```js
elem.addEventListener("dragover", (e) => {
  // 阻止导航
  e.preventDefault();
});
elem.addEventListener("drop", async (e) => {
  // 阻止导航
  e.preventDefault();

  // 处理所有条目
  for (const item of e.dataTransfer.items) {
    // 对于文件/目录条目，kind 将是“file”
    if (item.kind === "file") {
      const entry = await item.getAsFileSystemHandle();
      if (entry.kind === "file") {
        // 如果条目是文件则运行代码
      } else if (entry.kind === "directory") {
        // 如果条目是目录则运行代码
      }
    }
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
