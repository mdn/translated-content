---
title: DataTransferItem：getAsString() 方法
slug: Web/API/DataTransferItem/getAsString
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("HTML Drag and Drop API")}}

如果拖拽数据项的 {{domxref("DataTransferItem.kind","kind")}} 是*纯 Unicode 字符串*（即 `kind` 为 `string`），**`DataTransferItem.getAsString()`** 方法会调用给定的回调函数，并将该拖拽数据项的字符串数据作为参数传入。

## 语法

```js-nolint
getAsString(callbackFn)
```

### 参数

- `callbackFn`
  - : 一个回调函数，接收以下参数：
    - `data`
      - : {{domxref("DataTransferItem")}} 的字符串数据。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

本示例展示了在 {{domxref("HTMLElement/drop_event", "drop")}} 事件处理器中将 `getAsString()` 方法用作*内联函数*的用法。

```js
function dropHandler(ev) {
  console.log("放置操作");
  ev.preventDefault();
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match("^text/plain")) {
      // 该项目是目标节点
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match("^text/html")) {
      // 拖拽数据项是 HTML
      console.log("… 放置：HTML");
    } else if (item.kind === "string" && item.type.match("^text/uri-list")) {
      // 拖拽数据项是 URI
      console.log("… 放置：URI");
    } else if (item.kind === "file" && item.type.match("^image/")) {
      // 拖拽数据项是图像文件
      const f = item.getAsFile();
      console.log("… 放置：文件");
    }
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("DataTransfer.getData()")}}
