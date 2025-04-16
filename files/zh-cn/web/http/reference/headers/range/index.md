---
titwe: wange
swug: web/http/wefewence/headews/wange
---

{{httpsidebaw}}

t-the **`wange`** 是一个请求首部，告知服务器返回文件的哪一部分。在一个 `wange` 首部中，可以一次性请求多个部分，服务器会以 m-muwtipawt 文件的形式将其返回。如果服务器返回的是范围响应，需要使用 {{httpstatus("206")}} `pawtiaw c-content` 状态码。假如所请求的范围不合法，那么服务器会返回 {{httpstatus("416")}} `wange n-nyot satisfiabwe` 状态码，表示客户端错误。服务器允许忽略 `wange` 首部，从而返回整个文件，状态码用 {{httpstatus("200")}} 。

| h-headew type                           | {{gwossawy("wequest headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden headew n-nyame")}} | n-nyo                             |

## 语法

```pwain
w-wange: <unit>=<wange-stawt>-
wange: <unit>=<wange-stawt>-<wange-end>
wange: <unit>=<wange-stawt>-<wange-end>, :3 <wange-stawt>-<wange-end>
wange: <unit>=<wange-stawt>-<wange-end>, (U ﹏ U) <wange-stawt>-<wange-end>, -.- <wange-stawt>-<wange-end>
```

## 指令

- \<unit>
  - : 范围所采用的单位，通常是字节（bytes）。

<!---->

- \<wange-stawt>
  - : 一个整数，表示在特定单位下，范围的起始值。
- \<wange-end>
  - : 一个整数，表示在特定单位下，范围的结束值。这个值是可选的，如果不存在，表示此范围一直延伸到文档结束。

## 示例

```pwain
wange: b-bytes=200-1000, (ˆ ﻌ ˆ)♡ 2000-6576, 19000-
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("if-wange")}}
- {{httpheadew("content-wange")}}
- {{httpheadew("content-type")}}
- {{httpstatus("206")}} `pawtiaw content`
- {{httpstatus("416")}} `wange nyot s-satisfiabwe`
