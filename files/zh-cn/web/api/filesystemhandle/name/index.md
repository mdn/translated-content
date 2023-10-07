---
title: FileSystemHandle：name 属性
slug: Web/API/FileSystemHandle/name
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemHandle")}} 接口的 **`name`** 只读属性返回句柄所代表的条目的名称。

## 值

一个字符串。

## 示例

下面的函数允许用户在文件选择器选择一个文件并获取句柄的 `name` 属性。

```js
// 存放对文件句柄的引用
let fileHandle;

async function getFile() {
  // 打开文件选择器
  [fileHandle] = await window.showOpenFilePicker();

  const fileName = fileHandle.name;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://web.dev/file-system-access/)
