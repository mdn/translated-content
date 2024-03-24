---
title: XMLHttpRequest.getResponseHeader()
slug: Web/API/XMLHttpRequest/getResponseHeader
---

{{APIRef('XMLHttpRequest')}}

**XMLHttpRequest.getResponseHeader()**方法返回包含指定响应头文本的字符串。

如果在返回的响应头中有多个一样的名称，那么返回的值就会是用逗号和空格将值分隔的字符串。`getResponseHeader()` 方法以 UTF 编码返回值。搜索的报文名是不区分大小写的。

## 语法

```plain
var myHeader = XMLHttpRequest.getResponseHeader(name);
```

### 参数

- name
  - : 一个字符串，表示要返回的报文项名称。

### 返回值

报文项值，如果连接未完成，响应中不存在报文项，或者被 W3C 限制，则返回 null。

## 示例：

```js
var client = new XMLHttpRequest(); //新建 XMLHttpRequest 对象。
client.open("GET", "somefile.txt", true); // 采用异步，GET 方式获取 somefile.txt。
client.send(); // 发送空的 query string。
client.onreadystatechange = function() { //设定侦听器 onreadystatechange。
  if(this.readyState == this.HEADERS_RECEIVED) { // 如果 readyState 表示响应头已返回
    var contentType=client.getResponseHeader("Content-Type")); // 将此连接的 Content-Type 响应头项赋值到 contentType。
    if(contentType != my_expected_type) { // 如果这不是你的预期值
      client.abort(); // 终止连接
    }
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 如何使用 [XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTTP 标头](/zh-CN/docs/Web/HTTP/Headers)
- {{DOMxRef("XMLHttpRequest.getAllResponseHeaders", "getAllResponseHeaders()")}}
- {{DOMxRef("XMLHttpRequest.response", "response")}}
- 设置请求标头：{{DOMxRef("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}
