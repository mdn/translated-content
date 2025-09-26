---
title: FileReader：readyState 属性
slug: Web/API/FileReader/readyState
l10n:
  sourceCommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("FileReader")}} 接口的 **`readyState`** 只读属性提供读取操作的当前状态。这将是以下状态之一：`EMPTY`、`LOADING` 或 `DONE`。

## 值

一个数字，它是 {{domxref("FileReader")}} 接口上定义的三个可能的状态常量之一：

- `FileReader.EMPTY`（0）
  - : Reader 已创建，但尚未调用任何读取方法。
- `FileReader.LOADING`（1）
  - : 已调用读取方法。正在读取 {{domxref("File")}} 或 {{domxref("Blob")}}，尚未发生错误。
- `FileReader.DONE`（2）
  - : 读取操作完成。这可能意味着：整个 {{domxref("File")}} 或 {{domxref("Blob")}} 已读入内存，发生文件读取错误，或 {{domxref("FileReader.abort()", "abort()")}} 被调用并且读取被取消。

## 示例

```js
const reader = new FileReader();
console.log("EMPTY", reader.readyState); // readyState 将为 0
reader.readAsText(blob);
console.log("LOADING", reader.readyState); // readyState 将为 1
reader.onloadend = () => {
  console.log("DONE", reader.readyState); // readyState 将为 2
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Blob")}}
