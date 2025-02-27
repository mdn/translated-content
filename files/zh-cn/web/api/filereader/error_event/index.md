---
title: FileReader：error 事件
slug: Web/API/FileReader/error_event
l10n:
  sourceCommit: e43bfd9b4a6c363a4ba7ef6ffa64c09b38fd111b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("FileReader")}} 接口的 **`error`** 事件在由于错误（例如，因为文件未找到或不可读）导致读取失败时触发。

此事件不可取消且不会冒泡。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## 事件类型

{{domxref("ProgressEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("ProgressEvent")}}

## 事件属性

_还继承其父级 {{domxref("Event")}} 的属性。_

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : 一个布尔标志，指示底层进程要完成的总工作量以及已完成的工作量是否可计算。换句话说，它表明进展是否可衡量。
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : 一个 64 位无符号整数值，指示底层进程已执行的工作量。完成工作的比率可以通过将 `total` 除以该属性的值来计算。使用 HTTP 下载资源时，仅计算 HTTP 消息的正文，不包括标头和其他开销。
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : 一个 64 位无符号整数，表示底层进程正在执行的工作总量。使用 HTTP 下载资源时，这是 `Content-Length`（消息正文的大小），不包括标头和其他开销。

## 示例

```js
const fileInput = document.querySelector('input[type="file"]');
const reader = new FileReader();

function handleSelected(e) {
  const selectedFile = fileInput.files[0];
  if (selectedFile) {
    reader.addEventListener("error", () => {
      console.error(`读取文件时发生错误：${selectedFile.name}`);
    });

    reader.addEventListener("load", () => {
      console.log(`文件：${selectedFile.name} 读取成功`);
    });

    reader.readAsDataURL(selectedFile);
  }
}

fileInput.addEventListener("change", handleSelected);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("FileReader.loadstart_event", "loadstart")}}、{{domxref("FileReader.loadend_event", "loadend")}}、{{domxref("FileReader.progress_event", "progress")}}、{{domxref("FileReader.load_event", "load")}}、{{domxref("FileReader.abort_event", "abort")}}
