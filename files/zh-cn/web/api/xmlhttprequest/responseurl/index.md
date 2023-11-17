---
title: XMLHttpRequest.responseURL
slug: Web/API/XMLHttpRequest/responseURL
---

{{APIRef('XMLHttpRequest')}}

只读属性 **`XMLHttpRequest.responseURL`** 返回响应的序列化 URL，如果 URL 为空则返回空字符串。如果 URL 有锚点，则位于 URL # 后面的内容会被删除。如果 URL 有重定向，`responseURL` 的值会是经过多次重定向后的最终 URL。

## 实例

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/test", true);
xhr.onload = function () {
  console.log(xhr.responseURL); // http://example.com/test
};
xhr.send(null);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
