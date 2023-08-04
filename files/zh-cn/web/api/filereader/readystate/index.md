---
title: FileReader.readyState
slug: Web/API/FileReader/readyState
---

{{APIRef("File API")}}

{{domxref("FileReader")}} **`readyState`** 属性提供了 `FileReader` 在读取操作时的当前状态。`FileReader` 存在以下状态之一：

| 值  | 状态      | 描述                                  |
| --- | --------- | ------------------------------------- |
| `0` | `EMPTY`   | reader 已经创建。还没有调用任何方法。 |
| `1` | `LOADING` | 读取的方法已经被调用                  |
| `2` | `DONE`    | 完成操作                              |

- `EMPTY`
  - : `FileReader` 已经创建，但是仍没有 readAs 方法被调用。
- `LOADING`
  - : readAs 方法已经被调用。正在读取 {{domxref("File")}} 或 {{domxref("Blob")}}，并且尚未发生错误。
- `DONE`
  - : 读取操作完成。这意味着：全部的 {{domxref("File")}} 或 {{domxref("Blob")}} 已经读到内存中，或者文件读取错误发生，或者调用了 {{domxref("FileReader.abort()", "abort()")}}，或者取消了读取。

## 示例

```js
const reader = new FileReader();
console.log("EMPTY", reader.readyState); // readyState will be 0

reader.readAsText(blob);
console.log("LOADING", reader.readyState); // readyState will be 1

reader.onloadend = () => {
  console.log("DONE", reader.readyState); // readyState will be 2
};
```

## 值

一个数值，是 {{domxref("FileReader")}} API 定义的三个可能状态的常量之一。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Blob")}}
