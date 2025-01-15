---
title: FileSystemWritableFileStream：write() 方法
slug: Web/API/FileSystemWritableFileStream/write
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

{{domxref("FileSystemWritableFileStream")}} 接口的 **`write()`** 方法用于在调用此方法的文件上的当前指针偏移处写入内容。

在流被关闭前，更改不会写入到磁盘上实际的文件。通常更改会被先写入到临时文件。这个方法也能被用于定位到流中的字节点位还有进行裁剪以改变文件内容的总字节数。

## 语法

```js-nolint
write(data)
```

### 参数

- `data`

  - : 可以是以下之一：

    - 用于写入的文件数据，可以是 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref('Blob')}} 或字符串。
    - 一个包含以下属性的对象：

      - `type`
        - : 一个字符串，值为 `"write"`、`"seek"` 或 `"truncate"` 之一。
      - `data`
        - : 用于写入的文件数据，可以是 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref('Blob')}} 或字符串。这个属性在 `type` 被设为 `"write"` 时是必需的。
      - `position`
        - : 当 `type` 为 `"seek"` 时，表示文件当前指针应该移动到的位置。当 `type` 被设为 `"write"` 时也可以使用，这种情况下将会在指定的位置开始写入。
      - `size`
        - : 一个数字，表示流应当包含的字节数。这个属性在 `type` 被设为 `"truncate"` 时是必需的。

### 返回值

一个 {{jsxref('Promise')}}，会兑现 `undefined`。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果 {{domxref('PermissionStatus.state')}} 不为 `granted`，抛出此异常。
- `QuotaExceededError` {{domxref("DOMException")}}
  - : 如果文件新的大小大于文件原来的大小并且超出了浏览器的[存储配额](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)，抛出此异常。
- {{jsxref("TypeError")}}
  - : 如果未定义 `data` 或者 `position` 或 `size` 选项的值无效，抛出此异常。

## 示例

下面的异步函数会打开“保存文件”选择器，选择器在有文件被选择后会返回一个 {{domxref('FileSystemFileHandle')}}。由此，使用 {{domxref('FileSystemFileHandle.createWritable()')}} 方法创建一个写入流。

然后向流中写入一个文本字符串，随后关闭该流。

```js
async function saveFile() {
  try {
    // 创建一个新句柄
    const newHandle = await window.showSaveFilePicker();

    // 创建一个 FileSystemWritableFileStream 用于写入
    const writableStream = await newHandle.createWritable();

    // 写入我们的文件
    await writableStream.write("This is my file content");

    // 关闭文件并将内容写入磁盘
    await writableStream.close();
  } catch (err) {
    console.error(err.name, err.message);
  }
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
