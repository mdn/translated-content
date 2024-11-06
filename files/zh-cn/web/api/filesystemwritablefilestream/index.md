---
title: FileSystemWritableFileStream
slug: Web/API/FileSystemWritableFileStream
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

{{domxref("File System API", "文件系统 API", "", "nocode")}} 的 **`FileSystemWritableFileStream`** 接口是一类附加了便于操作磁盘上单个文件的方法的 {{domxref('WritableStream')}} 对象。这个接口通过 {{domxref('FileSystemFileHandle.createWritable()')}} 方法来访问。

{{InheritanceDiagram}}

## 实例属性

_从父接口 {{DOMxRef("WritableStream")}} 继承属性。_

## 实例方法

_从父接口 {{DOMxRef("WritableStream")}} 继承方法。_

- {{domxref('FileSystemWritableFileStream.write()')}}
  - : 向调用此方法的文件写入内容，写入到文件当前指针偏移处。
- {{domxref('FileSystemWritableFileStream.seek()')}}
  - : 更新文件当前指针偏移到指定位置（以字节为单位）。
- {{domxref('FileSystemWritableFileStream.truncate()')}}
  - : 将与流相关联的文件调整为指定的字节大小。

## 示例

下面的异步函数会打开“保存文件”选择器，选择器在有文件被选择后会返回一个 {{domxref('FileSystemFileHandle')}}。由此，使用 {{domxref('FileSystemFileHandle.createWritable()')}} 方法创建一个写入流。

然后向流中写入一个文本字符串，随后关闭该流。

```js
async function saveFile() {
  // 创建一个新句柄
  const newHandle = await window.showSaveFilePicker();

  // 创建一个 FileSystemWritableFileStream 用于写入
  const writableStream = await newHandle.createWritable();

  // 写入我们的文件
  await writableStream.write("This is my file content");

  // 关闭文件并将内容写入磁盘
  await writableStream.close();
}
```

下面的例子展示能够向 `write()` 方法传递的不同选项。

```js
// 只传递数据（没有选项）
writableStream.write(data);

// 向流中指定位置写入数据
writableStream.write({ type: "write", position, data });

// 将文件当前的指针更新到指定的偏移位置
writableStream.write({ type: "seek", position });

// 调整文件至指定字节长度
writableStream.write({ type: "truncate", size });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
