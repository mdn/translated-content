---
title: FileSystemWritableFileStream：truncate() 方法
slug: Web/API/FileSystemWritableFileStream/truncate
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

{{domxref("FileSystemWritableFileStream")}} 接口的 **`truncate()`** 方法用于将与流相关联的文件调整为指定字节大小。

如果指定的大小大于文件当前的大小，文件会被用 `0x00` 字节补充。

调用 `truncate()` 方法同时也会更新文件的指针。如果偏移小于大小，指针会保留原位。如果偏移大于大小，偏移会被设为相应的大小。这是为了确保随后的写入操作不会发生错误。

在流被关闭前，更改不会写入到磁盘上实际的文件。通常更改会被先写入到临时文件。

## 语法

```js-nolint
truncate(size)
```

### 参数

- `size`
  - : 一个数字，表示要将流调整到的字节数。

### 返回值

一个 {{jsxref('Promise')}}，会兑现 `undefined`。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果 {{domxref('PermissionStatus.state')}} 不为 `granted`，抛出此异常。
- `QuotaExceededError` {{domxref("DOMException")}}
  - : 如果文件新的大小大于文件原来的大小并且超出了浏览器的[存储配额](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)，抛出此异常。
- {{jsxref("TypeError")}}
  - : 如果 `size` 参数不是一个数字或者未定义，抛出此异常。

## 示例

下面的异步函数会打开“保存文件”选择器，选择器在有文件被选择后会返回一个 {{domxref('FileSystemFileHandle')}}。由此，使用 {{domxref('FileSystemFileHandle.createWritable()')}} 方法创建一个写入流。

然后我们按以下流程写入内容到流中：

1. 向流中写入一个字符串。
2. 使用 `truncate()` 方法将文件大小调整为 8 字节。
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
    await writableStream.write("This is my first file content");
    await writableStream.truncate(8);
    await writableStream.write("my second file content");

    // 关闭文件并将内容写入磁盘
    await writableStream.close();
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

如果你运行了上面的函数，然后打开磁盘上被创建的文件，你应该会看到文本“This is my second file content”。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
