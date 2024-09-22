---
title: FileSystemWritableFileStream：seek() 方法
slug: Web/API/FileSystemWritableFileStream/seek
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

{{domxref("FileSystemWritableFileStream")}} 接口的 **`seek()`** 方法用于更新文件当前指针的偏移到指定的位置（以字节为单位）。

## 语法

```js-nolint
seek(position)
```

### 参数

- `position`
  - : 一个数字，表示从文件开头起的字节位置。

### 返回值

一个 {{jsxref('Promise')}}，会兑现 `undefined`。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果 {{domxref('PermissionStatus.state')}} 不为 `granted`，抛出此异常。
- {{jsxref("TypeError")}}
  - : 如果 `position` 参数不是一个数字或者未定义，抛出此异常。

## 示例

下面的异步函数会打开“保存文件”选择器，选择器在有文件被选择后会返回一个 {{domxref('FileSystemFileHandle')}}。由此，使用 {{domxref('FileSystemFileHandle.createWritable()')}} 方法创建一个写入流。

然后我们按以下流程写入内容到流中：

1. 向流中写入一个字符串。
2. 使用 `seek()` 方法将指针放置到流的开头。
3. 向流中写入第二个字符串，覆写第一次写入的。

随后将流关闭。

```js
async function saveFile() {
  try {
    // 创建一个新句柄
    const newHandle = await window.showSaveFilePicker();

    // 创建一个 FileSystemWritableFileStream 用于写入
    const writableStream = await newHandle.createWritable();

    // 写入我们的文件
    await writableStream.write("My first file content");
    await writableStream.seek(0);
    await writableStream.write("My second file content");

    // 关闭文件并将内容写入磁盘
    await writableStream.close();
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

如果你运行了上面的函数，然后打开磁盘上被创建的文件，你应该会看到文本“My second file content”。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
