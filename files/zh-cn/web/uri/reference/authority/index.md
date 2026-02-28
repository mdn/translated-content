---
title: URI 权威
short-title: 权威
slug: Web/URI/Reference/Authority
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

URI 的**权威**是[方案](/zh-CN/docs/Web/URI/Reference/Schemes)后面，路径前面的部分。可能包含多达三个部分：用户信息、主机和端口。

## 语法

```url
host
host:port
user@host
user@host:port
```

- `host`
  - : *主机*通常是托管该资源的服务器的域名或 IP 地址。域名通过{{glossary("DNS", "域名系统")}}解析为 IP 地址。
- `port` {{optional_inline}}
  - : *端口*是一个数字，用于指示服务器监听请求的端口。该参数为可选项，默认值为 HTTP 的 80 端口和 HTTPS 的 443 端口。其他方案可能定义自己的默认值或强制要求填写该参数。
- `user` {{optional_inline}}
  - : *用户*是可选的，用于身份验证目的。它在 Web URI 中并不常见。

    > [!WARNING]
    > 不建议在 HTTP 网址中直接提供用户信息，因为这可能导致敏感信息泄露。请改用其他方法，如 HTTP 身份验证或会话 Cookie。有时，钓鱼网站会通过显示具有误导性的网址来欺骗用户，这些网址的“用户”部分看似是域名，这种攻击被称为[语义 URL 攻击](https://en.wikipedia.org/wiki/Semantic_URL_attack)。

## 描述

考虑如下 URL：

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

该 URL 中的权威是 `www.example.com:80`，由主机名（具体而言是域名）和端口号组成。

![域名](mdn-url-domain@x2.png)

`www.example.com` 是该统一资源标识符（URI）的*主机名*，用于指定请求访问的 Web 服务器。此处使用的是域名，但同样可以使用主机的 {{Glossary("IP address", "IP 地址")}}。由于 IP 地址并不方便且难于记忆，因此通常会使用域名进行访问——除非该服务器未注册域名。

![端口](mdn-url-port@x2.png)

`:80` 是 URL 中的*端口*，表示访问 Web 服务器资源所使用的技术“入口”。当 Web 服务器使用 HTTP 协议的标准端口（HTTP 为 80，HTTPS 为 443）提供资源访问时，通常省略该端口号。否则则必须明确指定。

## 示例

- `https://developer.mozilla.org`
  - : 主机名为 `developer.mozilla.org`。未指定端口，但当使用 `https:` 访问时默认为 443。
- `http://localhost:8080`
  - : 主机名为 `localhost`，端口为 `8080`。`localhost` 是特殊的主机名，浏览器会将其解析为本地地址 `127.0.0.1`。
- `postgresql://postgres:admin123@db:5432`
  - : 主机为 `db`，端口为 `5432`。同时指定用户 `postgres` 及其密码 `admin123`。此配置可用于连接 PostgreSQL 数据库。
- `https://cnn.example.com&story=breaking_news@10.0.0.1`
  - : 一个看似指向可信网站的误导性 URL。然而，其主机名为 `10.0.0.1`，而 `cnn.example.com&story=breaking_news` 部分才是真正的“用户”。

## 规范

{{Specifications}}

## 参见

- [URI](/zh-CN/docs/Web/URI)
- [在 www 和非 www URL 之间进行选择](/zh-CN/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
