---
title: DataTransferItem.getAsString()
slug: Web/API/DataTransferItem/getAsString
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem.getAsString()`** 当 DataTransferItem 对象的 kind 属性是一个普通 Unicode 字符串时，该方法会用 DataTransferItem 对象的 kind 属性作为入参来执行传入的回调函数 (i.e. `kind` is `string`).

## 示例

```plain
dataTransferItem.getAsString(callback);
```

### Parameters

- `callback`
  - : A callback function that has access to the {{domxref("DataTransferItem","data transfer item's")}} string data. See [Callback](#callback) below for details.

### Return value

{{jsxref("undefined")}}

## Callback

The callback parameter is a callback function which accepts one parameter:

- {{domxref("DOMString")}}
  - : The drag data item's string data.

The callback return value is `undefined`.

## Example

This example shows the use of the `getAsString()` method as an _inline function_ in a [`drop`](/zh-CN/docs/Web/API/HTMLElement/drop_event) event handler.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DataTransfer.getData()")}}
