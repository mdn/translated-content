---
title: XMLHttpRequest.onreadystatechange
slug: Web/API/XMLHttpRequest/readystatechange_event
---

{{APIRef}}

An [`EventHandler`](/docs/Web/API/EventHandler) that is called whenever the `readyState` attribute changes. The callback is called from the user interface thread. The **`XMLHttpRequest.onreadystatechange`** property contains the event handler to be called when the [`readystatechange`](/zh-TW/docs/Web/API/Document/readystatechange_event) event is fired, that is every time the {{domxref("XMLHttpRequest.readyState", "readyState")}} property of the {{domxref("XMLHttpRequest")}} changes.

> **警告：** This should not be used with synchronous requests and must not be used from native code.

The `readystatechange` event will not be fired when an `XMLHttpRequest` request is cancelled with the [abort()](/docs/Web/API/XMLHttpRequest/abort) method.

> **備註：** UPDATE: it's firing in the latest version of browsers (Firefox 51.0.1, Opera 43.0.2442.991, Safari 10.0.3 (12602.4.8), Chrome 54.0.2840.71, Edge, IE11). Example [here](https://jsfiddle.net/merksam/ve5oc0gn/) - just reaload page few times.

## 語法

```plain
XMLHttpRequest.onreadystatechange = callback;
```

### 值

- `callback` is the function to be executed when the `readyState` changes.

## 範例

```js
var xhr = new XMLHttpRequest(),
  method = "GET",
  url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
