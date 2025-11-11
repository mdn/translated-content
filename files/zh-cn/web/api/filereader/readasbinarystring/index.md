---
title: FileReader：readAsBinaryString() 方法
slug: Web/API/FileReader/readAsBinaryString
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Deprecated_Header}}

> [!NOTE]
> 此方法已弃用，取而代之的是 {{DOMxRef("FileReader.readAsArrayBuffer","readAsArrayBuffer()")}}。

{{domxref("FileReader")}} 接口的 **`readAsBinaryString()`** 方法用于开始读取指定 {{domxref("Blob")}} 或 {{domxref("File")}} 对象的内容。当读操作完成后，{{domxref("FileReader.readyState","readyState")}} 属性变为 `DONE`，并且 {{domxref("FileReader/loadend_event", "loadend")}} 事件被触发。此时，{{domxref("FileReader.result","result")}} 属性包含来自的原始二进制数据文件。

请注意，此方法曾经从文件 API 规范中删除，但重新引入以实现向后兼容性。建议使用 {{domxref("FileReader.readAsArrayBuffer()")}}。

## 语法

```js-nolint
readAsBinaryString(blob)
```

### 参数

- `blob`
  - : 从中读取的 {{domxref("Blob")}} 或 {{domxref("File")}} 对象。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
const canvas = document.createElement("canvas");
const height = 200;
const width = 200;

canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#090";
ctx.beginPath();
ctx.arc(width / 2, height / 2, width / 2 - width / 10, 0, Math.PI * 2);
ctx.stroke();

canvas.toBlob((blob) => {
  const reader = new FileReader();

  reader.onload = () => {
    console.log(reader.result);
  };

  reader.readAsBinaryString(blob);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("FileReader")}}
