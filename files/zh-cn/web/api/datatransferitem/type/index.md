---
title: DataTransferItem：type 属性
slug: Web/API/DataTransferItem/type
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{APIRef("HTML Drag and Drop API")}}

只读属性 **`DataTransferItem.type`** 返回代表拖动数据项的 {{domxref("DataTransferItem")}} 对象的类型（格式）。`type` 是一个 Unicode 字符串，通常由 MIME 类型给出（虽然 MIME 类型不是必须的）。

一些示例类型：`text/plain` 和 `text/html`。

## 值

一个表示拖动数据项类型的字符串。

## 示例

该示例演示了 `type` 属性的用法。

```js
function dropHandler(ev) {
  console.log("放置");
  ev.preventDefault();
  const data = ev.dataTransfer.items;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // 该项目是目标节点
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // 拖动数据项是 HTML
      console.log("放置：HTML");
    } else if (
      data[i].kind === "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // 拖动数据项是 URI
      console.log("放置：URI");
    } else if (data[i].kind === "file" && data[i].type.match("^image/")) {
      // 拖动数据项是图像文件
      const f = data[i].getAsFile();
      console.log("……放置：文件");
    }
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("DataTransfer.types()")}}
- [常见 MIME 类型列表](/zh-CN/docs/Web/HTTP/Guides/MIME_types/Common_types)
