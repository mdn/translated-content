---
title: XMLHttpRequest.status
slug: Web/API/XMLHttpRequest/status
---

{{APIRef('XMLHttpRequest')}}

**XMLHttpRequest.status** 屬性根據 XMLHttpRequest 的回應傳回數值化的狀況編碼。狀況編碼為一正短整數（`unsigned short）。`Before the request is complete, the value of `status` will be `0`. It is worth noting that browsers report a status of 0 in case of XMLHttpRequest errors too.

The status codes returned are the standard [HTTP status codes](/zh-TW/docs/Web/HTTP/Status). For example, `status` `200` denotes a successful request. If the server response doesn't explicitly specify a status code, `XMLHttpRequest.status` will assume the default value of `200`.

## Example

```js
var xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.status);

xhr.open("GET", "/server", true);
console.log("OPENED", xhr.status);

xhr.onprogress = function () {
  console.log("LOADING", xhr.status);
};

xhr.onload = function () {
  console.log("DONE", xhr.status);
};

xhr.send(null);

/**
 * Outputs the following:
 *
 * UNSENT 0
 * OPENED 0
 * LOADING 200
 * DONE 200
 */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- List of [HTTP response codes](/zh-TW/docs/Web/HTTP/Status)
