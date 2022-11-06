---
title: Clipboard.read()
slug: Web/API/Clipboard/read
---

{{APIRef("Clipboard API")}}

The **`read()`** method of the {{domxref("Clipboard")}} interface requests a copy of the clipboard's contents, delivering the data to the returned {{jsxref("Promise")}} when the promise is resolved. Unlike {{domxref("Clipboard.readText", "readText()")}}, the `read()` method can return arbitrary data, such as images.

To read from the clipboard, you must first have the `"clipboard-read"` permission.

> **备注：** The asynchronous Clipboard and [Permissions APIs](/zh-CN/docs/Web/API/Permissions_API) are still in the process of being integrated into most browsers, so they often deviate from the official rules for permissions and the like. Be sure to review the [compatibility table](#浏览器兼容性) before using these methods.

## 语法

```plain
var promise = navigator.clipboard.read();
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("DataTransfer")}} object containing the clipboard's contents. The promise is rejected if permission to access the clipboard is not granted.

## 例子

After using {{domxref("Permissions.query", "navigator.permissions.query()")}} to find out if we have (or if the user will be prompted to allow) `"clipboard-read"` access, this example fetches the data currently on the clipboard. If it's not plain text, an error message is presented. Otherwise, an element referred to using the variable `textElem` has its contents replaced with the clipboard's contents.

```js
// First, ask the Permissions API if we have some kind of access to
// the "clipboard-read" feature.

navigator.permissions.query({name: "clipboard-read"}).then(result => {
  // If permission to read the clipboard is granted or if the user will
  // be prompted to allow it, we proceed.

  if (result.state == "granted" || result.state == "prompt") {
    navigator.clipboard.read().then(data => {
      for (let i=0; i<data.items.length; i++) {
        if (data.items[i].type != "text/plain") {
          alert("Clipboard contains non-text data. Unable to access it.");
        } else {
          textElem.innerText = data.items[i].getAs("text/plain");
        }
      }
    });
  }
});
```

> **备注：** At this time, while Firefox does implement `read()`, it does not recognize the `"clipboard-read"` permission, so attempting to use the [Permissions API](/zh-CN/docs/Web/API/Permissions_API) to manage access to the API will not work.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
