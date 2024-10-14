---
title: FileSystemDirectoryHandle
slug: Web/API/FileSystemDirectoryHandle
l10n:
  sourceCommit: e92950d09467164afc9dfd8b35be9c909b63a8ab
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

{{domxref("File System API", "文件系统 API", "", "nocode")}} 的 **`FileSystemDirectoryHandle`** 接口提供指向一个文件系统目录的句柄。

这个接口可以通过 {{domxref('window.showDirectoryPicker()')}}、{{domxref('StorageManager.getDirectory()')}}、{{domxref('DataTransferItem.getAsFileSystemHandle()')}} 和 {{domxref('FileSystemDirectoryHandle.getDirectoryHandle()')}} 这些方法访问。

{{InheritanceDiagram}}

## 实例属性

_从父接口 {{DOMxRef("FileSystemHandle")}} 继承属性。_

## 实例方法

_从父接口 {{DOMxRef("FileSystemHandle")}} 继承方法。_

常规方法：

- {{domxref('FileSystemDirectoryHandle.getDirectoryHandle()')}}
  - : 返回一个 {{jsxref('Promise')}}，会兑现一个调用此方法的目录句柄内指定名称的子目录的 `FileSystemDirectoryHandle`。
- {{domxref('FileSystemDirectoryHandle.getFileHandle()')}}
  - : 返回一个 {{jsxref('Promise')}}，会兑现一个调用此方法的目录句柄内指定名称的文件的 {{domxref('FileSystemFileHandle')}}。
- {{domxref('FileSystemDirectoryHandle.removeEntry()')}}
  - : 如果目录句柄包含一个名为指定名称的文件或目录，则尝试异步将其移除。
- {{domxref('FileSystemDirectoryHandle.resolve()')}}
  - : 返回一个 {{jsxref('Promise')}} 对象，会兑现一个包含从父目录前往指定子条目中间的目录的名称的{{jsxref('Array', '数组', '', 'nocode')}}。数组的最后一项是子条目的名称。

[异步迭代器](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)方法：

- {{domxref('FileSystemDirectoryHandle.entries()')}}
  - : 返回给定对象自己的可枚举属性的 `[key, value]` 对的新*异步迭代器*。
- {{domxref('FileSystemDirectoryHandle.keys()')}}
  - : 返回一个新的迭代 `FileSystemDirectoryHandle` 对象内每个条目的键的异步迭代器。
- {{domxref('FileSystemDirectoryHandle.values()')}}
  - : 返回一个新的迭代 `FileSystemDirectoryHandle` 对象内每个条目的句柄的异步迭代器。
- `FileSystemDirectoryHandle[Symbol.asyncIterator]()`
  - : 返回给定对象自己的可枚举属性的 `[key, value]` 对的新*异步迭代器*。

## 示例

### 返回目录句柄

下面的示例返回一个指定名称的目录句柄，如果对应的目录不存在则创建。

```js
const dirName = "directoryToGetName";

// 假设我们有一个目录句柄：“currentDirHandle”
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

### 返回文件路径

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

### 返回目录中所有文件的句柄

下面的示例会递归地扫描一个目录，以返回目录中每个文件的 {{domxref('FileSystemFileHandle')}} 对象：

```js
async function* getFilesRecursively(entry) {
  if (entry.kind === "file") {
    const file = await entry.getFile();
    if (file !== null) {
      file.relativePath = getRelativePath(entry);
      yield file;
    }
  } else if (entry.kind === "directory") {
    for await (const handle of entry.values()) {
      yield* getFilesRecursively(handle);
    }
  }
}
for await (const fileHandle of getFilesRecursively(directoryHandle)) {
  console.log(fileHandle);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
