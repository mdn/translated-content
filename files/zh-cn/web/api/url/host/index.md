---
title: URL.host
slug: Web/API/URL/host
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 接口的 **`host`** 属性是一个 {{domxref("USVString")}} 值，包含了主机信息，也就是 _主机名（hostname）_，还有，如果 URL 接口不为空，也会包含冒号 `':'` 和 URL 的 _端口（port）_。

{{AvailableInWorkers}}

## 语法

```plain
string = object.host;
object.host = string;
```

### 返回值

{{domxref("USVString")}}.

## 示例

```js
var url = new URL("https://developer.mozilla.org/zh-CN/docs/Web/API/URL/host");
var result = url.host; // "developer.mozilla.org"

var url = new URL(
  "https://developer.mozilla.org:443/zh-CN/docs/Web/API/URL/host",
);
var result = url.host; // "developer.mozilla.org"
// The port number is not included because 443 is the scheme's default port

var url = new URL(
  "https://developer.mozilla.org:4097/zh-CN/docs/Web/API/URL/host",
);
var result = url.host; // "developer.mozilla.org:4097"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 所属的 {{domxref("URL")}} 接口。
