---
title: DataTransferItem：getAsFile() 方法
short-title: getAsFile()
slug: Web/API/DataTransferItem/getAsFile
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("HTML Drag and Drop API")}}

如果 **`DataTransferItem`** 是一个文件， **`DataTransferItem.getAsFile()`** 方法将返回拖放项数据的 {{domxref("File")}} 对象。如果拖放项的数据不是一个文件，则返回 `null`.

## 语法

```js-nolint
getAsFile()
```

### 参数

无。

### 返回值

- {{domxref("File")}}
  - : 在拖放项的对象是一个文件时返回 {{domxref("File")}} 对象，否则返回 `null` .

## 示例

下述示例展示了 `getAsFile()` 在 {{domxref("HTMLElement/drop_event", "drop")}} 事件处理器中的用法。

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match("^text/plain")) {
      // 项目是目标节点
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match("^text/html")) {
      // 拖动数据项时 HTML
      console.log("… Drop: HTML");
    } else if (item.kind === "string" && item.type.match("^text/uri-list")) {
      // 拖动数据项是 URI
      console.log("… Drop: URI");
    } else if (item.kind === "file" && item.type.match("^image/")) {
      // 拖动数据项是图像文件
      const f = item.getAsFile();
      console.log("… Drop: File");
    }
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看更多

- {{domxref("DataTransfer.files()")}}
