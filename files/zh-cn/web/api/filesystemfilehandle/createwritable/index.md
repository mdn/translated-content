---
title: FileSystemFileHandle：createWritable() 方法
slug: Web/API/FileSystemFileHandle/createWritable
---

{{securecontext_header}}{{APIRef("File System API")}}

{{domxref("FileSystemFileHandle")}} 接口的 **`createWritable()`** 方法用于创建一个 {{domxref('FileSystemWritableFileStream')}} 对象，可用于写入文件。此方法返回一个可兑现这些写入流的 {{jsxref('Promise')}} 对象。

任何通过写入流造成的更改在写入流被关闭前都不会反映到文件句柄所代表的文件上。这通常是将数据写入到一个临时文件来实现的，然后只有在写入文件流被关闭后才会用临时文件替换掉文件句柄所代表的文件。

## 语法

```js-nolint
createWritable()
createWritable(options)
```

### 参数

- `options` {{optional_inline}}

  - : 一个包含以下属性的对象：

    - `keepExistingData`
      - : {{jsxref('Boolean', '布尔值', '', 'nocode')}}，默认为 `false`。当设为 `true` 时，如果文件存在，则现将现有文件的内容复制到临时文件，否则临时文件初始时内容为空。

### 返回值

一个 {{jsxref('Promise')}} 对象，可兑现一个 {{domxref('FileSystemWritableFileStream')}} 对象。

### 异常

- NotAllowedError
  - : 如果句柄 `readwrite` 模式的 {{domxref('PermissionStatus.state')}} 不为 `'granted'`，则抛出此异常。

## 示例

以下异步函数用于将给定内容写入文件句柄，从而写入磁盘。

```js
async function writeFile(fileHandle, contents) {
  // 创建一个 FileSystemWritableFileStream 用来写入。
  const writable = await fileHandle.createWritable();

  // 将文件内容写入到流中。
  await writable.write(contents);

  // 关闭文件并将内容写入磁盘。
  await writable.close();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://web.dev/file-system-access/)
