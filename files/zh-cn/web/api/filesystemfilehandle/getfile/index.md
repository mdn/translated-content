---
title: FileSystemFileHandle：getFile() 方法
slug: Web/API/FileSystemFileHandle/getFile
l10n:
  sourceCommit: e97f7ef524c21300c65b5089139de89a42bd79e2
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

{{domxref("FileSystemFileHandle")}} 接口的 **`getFile()`** 方法返回一个 {{jsxref('Promise')}} 对象，可兑现一个 {{domxref('File')}} 对象，其表示磁盘上句柄所代表的条目的状态。

如果磁盘上的文件在调用了此方法后发生了更改或是被移除，那么返回的 {{domxref('File')}} 对象可能会不再可读。

## 语法

```js-nolint
getFile()
```

### 参数

无。

### 返回值

一个 {{jsxref('Promise')}} 对象，可兑现一个 {{domxref('File')}} 对象。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果可读（`read`）模式下的 {{domxref('PermissionStatus.state')}} 不是 `granted` ，则抛出此异常。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果未找到当前条目，则抛出该异常。

## 示例

下面的异步函数可以显示一个文件选择器，并在选择了文件时使用 `getFile()` 方法取得内容。

```js
async function getTheFile() {
  // 打开文件选择器
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // 获取文件内容
  const fileData = await fileHandle.getFile();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
