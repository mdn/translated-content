---
title: DataTransferItem：getAsFile() 方法
short-title: getAsFile()
slug: Web/API/DataTransferItem/getAsFile
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("HTML Drag and Drop API")}}

如果 **`DataTransferItem`** 是一个文件， **`DataTransferItem.getAsFile()`** 方法将返回拖拽数据项的 {{domxref("File")}} 对象。如果拖拽数据项不是一个文件，则返回 `null`.

## 语法

```js-nolint
getAsFile()
```

### 参数

无。

### 返回值

在拖拽数据项是一个文件时返回 {{domxref("File")}} 对象，否则返回 `null` .

## 示例

下述示例展示了 `getAsFile()` 方法在 {{domxref("HTMLElement/drop_event", "drop")}} 事件处理器中的用法。

```js
function dropHandler(ev) {
  console.log("放置操作");
  ev.preventDefault();
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match("^text/plain")) {
      // 项目是目标节点
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match("^text/html")) {
      // 拖拽数据项是 HTML
      console.log("放置了 HTML");
    } else if (item.kind === "string" && item.type.match("^text/uri-list")) {
      // 拖拽数据项是 URI
      console.log("放置了 URI");
    } else if (item.kind === "file" && item.type.match("^image/")) {
      // 拖拽数据项是图像文件
      const f = item.getAsFile();
      console.log("放置了文件");
    }
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("DataTransfer.files")}}
