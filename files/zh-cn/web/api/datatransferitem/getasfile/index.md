---
title: DataTransferItem.getAsFile()
slug: Web/API/DataTransferItem/getAsFile
---

{{APIRef("HTML Drag and Drop API")}}

如果 **`DataTransferItem`** 是一个文件，那 **`DataTransferItem.getAsFile()`** 方法将返回拖拽项数据的 {{domxref("File")}} 对象。如果拖拽项的数据不是一个文件，则返回 `null`.

## 语法

```plain
File = DataTransferItem.getAsFile();
```

### 参数

_无。_

### 返回值

- {{domxref("File")}}
  - : 如果拖拽项的对象是一个文件，则返回 {{domxref("File")}} 对象; 否则返回 `null` .

## 例子

下面这个例子中使用 `getAsFile()` 。放在 [`drop`](/zh-CN/docs/Web/API/HTMLElement/drop_event) 事件处理里面。

```js
function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  var data = event.dataTransfer.items;
  for (var i = 0; i < data.length; i += 1) {
    if (data[i].kind == "string" && data[i].type.match("^text/plain")) {
      // 遍历拖拽项的内容
      data[i].getAsString(function (s) {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind == "string" && data[i].type.match("^text/html")) {
      // 拖拽项的数据是 HTML
      console.log("... Drop: HTML");
    } else if (
      data[i].kind == "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // 拖拽项的数据是 URI
      console.log("... Drop: URI");
    } else if (data[i].kind == "file" && data[i].type.match("^image/")) {
      // 拖拽项的数据是一个图片
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

## 查看更多

- {{domxref("DataTransfer.files()")}}
