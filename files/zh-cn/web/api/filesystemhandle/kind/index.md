---
title: FileSystemHandle：kind 属性
slug: Web/API/FileSystemHandle/kind
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemHandle")}} 接口的 **`kind`** 只读属性返回条目的类型。如果关联的条目是一个文件，则此值为 `'file'`，否则为 `'directory'`。其用于在遍历目录内容时区分文件和目录。

## 值

可能为以下字符串值：

- `'file'`：若句柄是一个 {{domxref('FileSystemFileHandle')}}。
- `'directory'`：若句柄是一个 {{domxref('FileSystemDirectoryHandle')}}。

## 示例

下面的函数允许用户在文件选择器选择一个文件，然后测试返回的句柄是一个文件还是一个目录。

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://web.dev/file-system-access/)
