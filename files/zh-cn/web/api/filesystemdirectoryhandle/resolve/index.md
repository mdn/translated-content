---
title: FileSystemDirectoryHandle：resolve() 方法
slug: Web/API/FileSystemDirectoryHandle/resolve
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

{{domxref("FileSystemDirectoryHandle")}} 接口的 **`resolve()`** 方法返回一个 {{jsxref('Promise')}} 对象，会兑现一个包含从父目录前往指定子条目中间的目录的名称的{{jsxref('Array', '数组', '', 'nocode')}}。数组的最后一项是子条目的名称。

## 语法

```js-nolint
resolve(possibleDescendant)
```

### 参数

- `possibleDescendant`
  - : 要返回其相对路径的 {{domxref('FileSystemHandle')}}。

### 返回值

一个 {{jsxref('Promise')}} 对象，会兑现一个包含字符串的{{jsxref('Array', '数组', '', 'nocode')}}，或者当参数 `possibleDescendant` 不是此 {{domxref('FileSystemDirectoryHandle')}} 的后代时，兑现 `null`。

### 异常

不抛出异常。

## 示例

下面的异步函数使用 `resolve()` 来查找被选择文件相对于指定目录句柄的路径。

```js
async function returnPathDirectories(directoryHandle) {
  // 通过显示文件选择器来获得一个文件句柄
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // 如果用户取消了选择或者打开文件失败
    return;
  }

  // 检查文件句柄是否存在于目录句柄的目录中
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePaths === null) {
    // 不在目录句柄中
  } else {
    // relativePaths 是一个包含名称的数组，指示相对路径
    for (const name of relativePaths) {
      // 打印数组的每个元素
      console.log(name);
    }
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
