---
title: XMLHttpRequest.readyState
slug: Web/API/XMLHttpRequest/readyState
---

{{APIRef('XMLHttpRequest')}}

**XMLHttpRequest.readyState** 属性返回一个 XMLHttpRequest 代理当前所处的状态。一个 XHR 代理总是处于下列状态中的一个：

| 值  | 状态               | 描述                                                |
| --- | ------------------ | --------------------------------------------------- |
| `0` | `UNSENT`           | 代理被创建，但尚未调用 open() 方法。                |
| `1` | `OPENED`           | `open()` 方法已经被调用。                           |
| `2` | `HEADERS_RECEIVED` | `send()` 方法已经被调用，并且头部和状态已经可获得。 |
| `3` | `LOADING`          | 下载中；`responseText` 属性已经包含部分数据。       |
| `4` | `DONE`             | 下载操作已完成。                                    |

- UNSENT
  - : XMLHttpRequest 代理已被创建，但尚未调用 open() 方法。
- OPENED
  - : open() 方法已经被触发。在这个状态中，可以通过 [setRequestHeader()](/zh-CN/docs/Web/API/XMLHttpRequest/setRequestHeader) 方法来设置请求的头部，可以调用 [send()](/zh-CN/docs/Web/API/XMLHttpRequest/send) 方法来发起请求。
- HEADERS_RECEIVED
  - : send() 方法已经被调用，响应头也已经被接收。
- LOADING
  - : 响应体部分正在被接收。如果 [`responseType`](/zh-CN/docs/Web/API/XMLHttpRequest/responseType) 属性是“text”或空字符串，[`responseText`](/zh-CN/docs/Web/API/XMLHttpRequest/responseText) 将会在载入的过程中拥有部分响应数据。
- DONE
  - : 请求操作已经完成。这意味着数据传输已经彻底完成或失败。

> **备注：** 在 IE 中，状态有着不同的名称，并不是 `UNSENT`，`OPENED` ，`HEADERS_RECEIVED` ，`LOADING` 和 `DONE`，而是 `READYSTATE_UNINITIALIZED` (0)，`READYSTATE_LOADING` (1) ，`READYSTATE_LOADED` (2) ，`READYSTATE_INTERACTIVE` (3) `和 READYSTATE_COMPLETE` (4) 。

## 示例

```js
var xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState 为 0

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState 为 1

xhr.onprogress = function () {
  console.log("LOADING", xhr.readyState); // readyState 为 3
};

xhr.onload = function () {
  console.log("DONE", xhr.readyState); // readyState 为 4
};

xhr.send(null);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
