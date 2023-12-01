---
title: DataTransferItem.kind
slug: Web/API/DataTransferItem/kind
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem.kind`** 是一个只读属性，它返回一个 {{domxref("DataTransferItem")}} 用来表示拖拽项 (_drag data item) 的类型_: 一些文本或者一些文件。

## 语法

```plain
var itemKind = DataTransferItem.kind;
```

### 返回值

{{domxref("DOMString")}} 用来表示拖拽项 (_drag data item) 的类型_. 它的值必须是以下值中的一个：

- `'file'`
  - : 拖拽项是一个文件。
- `'string'`
  - : 拖拽项是一个普通的 Unicode 字符。

## 示例

下面这个例子是 `kind` 属性的用法。

```js
function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  var data = event.dataTransfer.items;
  for (var i = 0; i < data.length; i += 1) {
    if (data[i].kind == "string" && data[i].type.match("^text/plain")) {
      // This item is the target node
      data[i].getAsString(function (s) {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind == "string" && data[i].type.match("^text/html")) {
      // Drag data item is HTML
      console.log("... Drop: HTML");
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

## 参见

- [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖拽操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推荐的拖拽类型](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer 测试——粘贴或拖拽](https://codepen.io/tech_query/pen/MqGgap)
