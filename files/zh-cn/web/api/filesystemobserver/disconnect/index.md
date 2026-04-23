---
title: FileSystemObserver：disconnect() 方法
slug: Web/API/FileSystemObserver/disconnect
l10n:
  sourceCommit: 9cc1f40340f37fa05d6573cc519c9844fa4940be
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

{{domxref("FileSystemObserver")}} 接口的 **`disconnect()`** 方法停止观察器对文件系统的观察。

## 语法

```js-nolint
disconnect()
```

### 参数

无。

### 返回值

无（{{jsxref('undefined')}}）。

## 示例

### 停止观察文件系统

假设 `FileSystemObserver` 实例可用，当你想要停止观察文件系统条目的更改时，可以对其调用 `disconnect()` 方法：

```js
observer.disconnect();
```

## 规范

目前不属于任何规范。相关规范 PR 请参阅 [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165)。

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- developer.chrome.com（2024）上的[文件系统观察器 API 源试用](https://developer.chrome.google.cn/blog/file-system-observer#stop-observing-the-file-system)
