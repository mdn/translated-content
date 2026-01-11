---
title: DataTransferItem：kind 属性
short-title: kind
slug: Web/API/DataTransferItem/kind
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

只读的 **`DataTransferItem.kind`** 属性返回 {{domxref("DataTransferItem")}} 对象所代表的*拖放数据项*的类型，即 `string` 或 `file`。

## 值

表示拖放数据项的类型的字符串。它必须是以下值之一：

- `'file'`
  - ：如果拖放数据项是文件。
- `'string'`
  - ：如果拖放数据项的类型是*纯 Unicode 字符串*。

## 示例

下述示例展示了 `kind` 属性的用法。

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match("^text/plain")) {
      // 该项是目标节点
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match("^text/html")) {
      // 拖放数据项是 HTML
      console.log("… Drop: HTML");
    } else if (item.kind === "file" && item.type.match("^image/")) {
      // 拖放数据项是图片文件
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

## 参见

- [拖放](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖动操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [操作拖动数据存储](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
