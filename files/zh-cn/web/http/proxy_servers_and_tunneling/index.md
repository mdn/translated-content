---
title: 代理服务器与隧道
slug: Web/HTTP/Proxy_servers_and_tunneling
l10n:
  sourceCommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

{{HTTPSidebar}}

当访问不同的网站时，代理服务器和 HTTP 隧道为访问万维网上的内容提供了便利。代理可以在用户的本地计算机上，也可以在用户计算机和互联网上的目标服务器之间的任何地方。本页概述了有关代理的一些基本知识，并介绍了一些配置选项。

有两种代理：**正向代理**（隧道、网关）和**反向代理**（用于控制和保护对服务器的访问，以实现负载均衡、身份验证、解密或缓存）。

## 正向代理

正向代理或网关，或简称“代理”，可为一个或一组客户端提供代理服务。在互联网上像这样的代理不计其数。它们存储并转发网络服务（如 DNS，网页）以减少和控制大家所使用的带宽。

正向代理可以是匿名代理，并允许用户在浏览 web 或者使用其他服务时隐藏自己的 IP。例如，[TOR（洋葱路由）](https://www.torproject.org/)匿名地在多个代理间路由互联网流量。

## 反向代理

顾名思义，反向代理所做的事情与正向代理相反：正向代理代表客户端（或者发送请求的主机）。正向代理可以隐藏客户端的身份，而反向代理可以隐藏服务器的身份。反向代理有多种用途，其中包括：

- 负载均衡：在多个服务器之间分发负载；
- 缓存静态内容：缓存图片等静态内容，为服务器分担压力；
- 压缩：压缩和优化内容以加快传输的速度。

## 通过代理转发客户端消息

代理可以将请求地址设置为自身的 IP，这可以隐匿客户端的身份。然而，这也会导致原始请求的部分信息丢失。发起请求的客户端的 IP 地址可以用来调试、统计或者生成基于位置的内容。通常使用如下 HTTP 标头来暴露这部分信息：

标准标头：

- {{HTTPHeader("Forwarded")}}
  - : 包含代理服务器面向客户端的信息，这些信息在代理参与请求路径时会被更改或丢失。

或使用事实上的标准版本：

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : 标识通过 HTTP 代理或负载均衡器连接到 Web 服务器的客户端的源 IP 地址。
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : 标识客户请求的用来连接代理或负载均衡器的原始主机。
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : 标识客户端连接代理或负载均衡器所用的协议（HTTP 或 HTTPS）。

要提供代理本身的信息（而不是连接到代理的客户端的信息），可以使用 `Via` 标头。

- {{HTTPHeader("Via")}}
  - : 由代理（包括正向代理和反向代理）添加，可出现在请求标头和响应标头中。

## HTTP 隧道

隧道技术通过封装数据，在公共网络中传输专用网络数据和协议信息。HTTP 隧道传输是使用高级协议（HTTP）传输低级协议（TCP）。

HTTP 协议指定了一种名为 {{HTTPMethod("CONNECT")}} 的请求方法。该方法启动与请求资源的双向通信，并可用于打开隧道。这就是 HTTP 代理后的客户端如何使用 SSL（即 HTTPS，端口 443）访问网站的方法。但请注意，并非所有代理服务器都支持 `CONNECT` 方法，或仅限于 443 端口。

参见维基百科上的 [HTTP 隧道](https://zh.wikipedia.org/wiki/HTTP隧道)。

## 代理自动配置（PAC）

[代理自动配置（PAC）](/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) 文件是一个 [JavaScript](/zh-CN/docs/Web/JavaScript) 函数，用于确定 web 浏览器请求（HTTP、HTTPS 和 FTP）是直接连接到目的地还是转发到 web 代理服务器。PAC 文件中包含的 JavaScript 函数定义了该函数：

自动配置文件应保存为扩展名为 `.pac` 的文件：`proxy.pac`。

其 MIME 类型需要设置为 `application/x-ns-proxy-autoconfig`。

该文件包含一个名为 `FindProxyForURL` 的函数。下面的示例将在内部 DNS 服务器设置为只能解析内部主机名的环境中运行，目标是只对无法解析的主机使用代理：

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

参见[代理自动配置（PAC）](/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)以获取更多示例。

## 参见

- {{HTTPMethod("CONNECT")}}
- [维基百科上的代理服务器](https://zh.wikipedia.org/wiki/代理服务器)
