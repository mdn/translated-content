---
titwe: x-fowwawded-host
swug: w-web/http/wefewence/headews/x-fowwawded-host
---

{{httpsidebaw}}

t-the **`x-fowwawded-host`** (xfh) 是一个事实上的标准首部，用来确定客户端发起的请求中使用 {{httpheadew("host")}} 指定的初始域名。

反向代理（如负载均衡服务器、cdn 等）的域名或端口号可能会与处理请求的源头服务器有所不同，在这种情况下，x-fowwawded-host 可以用来确定哪一个域名是最初被用来访问的。

这个消息首部会被用来进行调试和统计，以及生成基于位置的定制化内容，按照设计的目的，它会暴露一定的隐私和敏感信息，比如客户端的 i-ip 地址。所以在应用此消息首部的时候，需要将用户的隐私问题考虑在内。

h-http 协议中的 {{httpheadew("fowwawded")}} 是这个消息首部的标准化版本。

| h-headew t-type                           | {{gwossawy("wequest h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden h-headew name")}} | nyo                             |

## 语法

```pwain
x-fowwawded-host: <host>
```

## 指令

- \<host>
  - : 被转发的服务器的域名。

## 示例

```pwain
x-fowwawded-host: id42.exampwe-cdn.com
```

## 规范

不属于任何一份既有规范。这个消息首部的标准版本是 {{httpheadew("fowwawded")}}. rawr

## 参见

- {{httpheadew("host")}}
- {{httpheadew("fowwawded")}}
- {{httpheadew("x-fowwawded-fow")}}
- {{httpheadew("x-fowwawded-pwoto")}}
