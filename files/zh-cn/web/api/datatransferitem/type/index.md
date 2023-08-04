---
title: DataTransferItem.type
slug: Web/API/DataTransferItem/type
---

{{APIRef("HTML Drag and Drop API")}}

只读属性**`DataTransferItem.type`** 返回代表拖动数据项的 {{domxref("DataTransferItem")}} 对象的类型（格式）。 `type` 是一个 Unicode 字符串，通常由 MIME 给出，不过不需要 MIME 类型。

举例一些类型：`text/plain` 和 `text/html`.

## 语法

```plain
dataItem.type;
```

### 返回值

一个代表拖动数据项类型的 {{domxref("DOMString")}}。

## 示例

这个例子演示了`type` 属性的用法。

```js
function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  var data = ev.dataTransfer.items;
  for (var i = 0; i < data.length; i += 1) {
    if (data[i].kind == "string" && data[i].type.match("^text/plain")) {
      // This item is the target node
      data[i].getAsString(function (s) {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind == "string" && data[i].type.match("^text/html")) {
      // Drag data item is HTML
      console.log("... Drop: HTML");
    } else if (
      data[i].kind == "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // Drag data item is URI
      console.log("... Drop: URI");
    } else if (data[i].kind == "file" && data[i].type.match("^image/")) {
      // Drag data item is an image file
      var f = data[i].getAsFile();
      console.log("... Drop: File ");
    }
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("DataTransfer.type()")}}
- [MIME 类型不完整列表](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types)
