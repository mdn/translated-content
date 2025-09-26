---
title: XMLHttpRequest.onreadystatechange
slug: Web/API/XMLHttpRequest/readystatechange_event
---

{{APIRef}}

只要 `readyState` 属性发生变化，就会调用相应的[处理函数](/zh-CN/docs/Web/API/Document_Object_Model/Events)。这个回调函数会被用户线程所调用。**`XMLHttpRequest.onreadystatechange`** 会在 {{domxref("XMLHttpRequest")}} 的{{domxref("XMLHttpRequest.readyState", "readyState")}} 属性发生改变时触发 [`readystatechange`](/zh-CN/docs/Web/API/Document/readystatechange_event) 事件的时候被调用。

> [!WARNING]
> 这个方法不该用于同步的 requests 对象，并且不能在内部 (C++) 代码中使用。

当一个 `XMLHttpRequest` 请求被 [abort()](/zh-CN/docs/Web/API/XMLHttpRequest/abort) 方法取消时，其对应的 `readystatechange` 事件不会被触发。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("readystatechange", (event) => {});

onreadystatechange = (event) => {};
```

### 取值

- 当 `readyState` 的值改变的时候，`callback` 函数会被调用。

## 示例

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
