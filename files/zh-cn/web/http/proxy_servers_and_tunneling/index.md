---
title: Proxy servers and tunneling
slug: Web/HTTP/Proxy_servers_and_tunneling
---

{{HTTPSidebar}}

当访问不同的网站时，代理服务器和 HTTP 管道帮助访问万维网 . 一个代理可以是用户的本地计算机，或者介于用户计算机和终端服务器之间的地方。本章节概述一些关于代理和相关配置选项的基础知识。

有两种代理：**正向代理** (如：管道、网关) 和**反向代理** (用于控制和保证服务器的负载均衡、认证、加密和缓存)。

## 正向代理

正向代理，也可以叫“网关”或者仅仅为一个或多个客户端提供代理服务的“代理”。在互联网上像这样的代理不计其数。他们存储并转发网络服务（如 DNS，网页）以减少和控制大家所使用的带宽。

正向代理可以是匿名代理，并允许用户在浏览 web 或者使用其他服务时隐藏自己的 IP。 [TOR](https://www.torproject.org/) (洋葱路由), 匿名地在多个代理间路由因特网。

## 反向代理

顾名思义，反向代理所做的事情与正向代理相反：正向代理代表客户端（或者发送请求的主机），而反向代理代表服务器。正向代理可以隐藏客户端的身份，而反向代理可以隐藏服务器的身份。反向代理的用处很多，例如：

- 负载均衡：在多个服务器之间分发负载，
- 缓存静态内容：缓存图片等静态内容，为服务器分担压力，
- 压缩：压缩和优化内容以加快传输的速度。

## 通过代理转发客户端消息

代理可以将请求地址设置为自身的 IP，这可以隐匿客户端的身份。然而，这也会导致原始请求的部分信息丢失。发起请求的客户端的 IP 地址可以用来调试、统计或者生成基于位置的内容。通常使用如下 HTTP 头来暴露这部分信息：

标准头部：

- {{HTTPHeader("Forwarded")}}
  - : Contains information from the client-facing side of proxy servers that is altered or lost when a proxy is involved in the path of the request.

Or the de-facto standard versions:

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifies the originating IP addresses of a client connecting to a web server through an HTTP proxy or a load balancer.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifies the original host requested that a client used to connect to your proxy or load balancer.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : identifies the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer.

To provide information about the proxy itself (not about the client connecting to it), the `Via` header can be used.

- {{HTTPHeader("Via")}}
  - : Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers.

## HTTP tunneling

Tunneling transmits private network data and protocol information through public network by encapsulating the data. HTTP tunneling is using a protocol of higher level (HTTP) to transport a lower level protocol (TCP).

The HTTP protocol specifies a request method called {{HTTPMethod("CONNECT")}}. It starts two-way communications with the requested resource and can be used to open a tunnel. This is how a client behind an HTTP proxy can access websites using SSL (i.e. HTTPS, port 443). Note, however, that not all proxy servers support the `CONNECT` method or limit it to port 443 only.

See also the [HTTP tunnel article on Wikipedia](https://en.wikipedia.org/wiki/HTTP_tunnel).

## Proxy Auto-Configuration (PAC)

A [Proxy Auto-Configuration (PAC)](/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) file is a [JavaScript](/zh-CN/docs/Web/JavaScript) function that determines whether web browser requests (HTTP, HTTPS, and FTP) go directly to the destination or are forwarded to a web proxy server. The JavaScript function contained in the PAC file defines the function:

The auto-config file should be saved to a file with a `.pac` filename extension:

```plain
proxy.pac
```

And the MIME type set to:

```plain
application/x-ns-proxy-autoconfig
```

The file consists of a function called `FindProxyForURL`. The example below will work in an environment where the internal DNS server is set up so that it can only resolve internal host names, and the goal is to use a proxy only for hosts that aren't resolvable:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) return "DIRECT";
  else return "PROXY proxy.mydomain.com:8080";
}
```

参见[代理自动配置（PAC）](/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)以获取更多示例。

## 参见

- {{HTTPMethod("CONNECT")}}
- [维基百科上的代理服务器](https://zh.wikipedia.org/wiki/代理服务器)
