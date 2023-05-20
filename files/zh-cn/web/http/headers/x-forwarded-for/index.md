---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
---

{{HTTPSidebar}}

当客户端通过代理服务器连接到 web 服务器时，**`X-Forwarded-For`**（XFF）请求首部可用于标识客户端的原始 IP 地址。该首部是事实上的标准。

> **警告：** 对此首部的不恰当使用可能带来安全风险。有关详细信息，请参阅[安全和隐私考虑](#安全和隐私考虑)。
 
当客户端直接连接到服务器时，其 IP
地址被发送给服务器（并且经常被记录在服务器的访问日志中）。但是如果客户端通过[正向代理或者反向代理](https://en.wikipedia.org/wiki/Proxy_server)进行连接，服务器就只能看到最后一个代理的 IP
地址，这个 IP 通常没什么用。如果最后一个代理是与服务器安装在同一台主机上的负载均衡，则更是如此。`X-Forwarded-For` 的出现，就是为了向服务器提供更有用的客户端 IP 地址。

有关使用此首部的详细指引，请参阅[解析](#解析)和[选择一个 IP 地址](#选择一个_ip_地址)部分。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

此首部的标准化版本是 HTTP {{HTTPHeader("Forwarded")}} 首部。

## 安全和隐私考虑

从设计目的上说，此首部暴露隐私信息，比如客户端的 IP 地址。因此，在使用此首部时，请务必将用户的隐私放在心上。

当在客户端和服务器之间没有可信的反向代理（比如一个负载均衡）时，`X-Forwarded-For` 首部是不可信的。如果客户端和所有的代理都没有恶意且行为良好，那么此首部中的 IP 地址列表具有[指令](#指令)部分所描述的意义。但是如果客户端或任意代理存有恶意或配置错误，那么此首部的任意部分（或整体）可能是错误的（并且有可能不是一个列表或者甚至不包含 IP 地址）。

如果客户端和服务器之间存在任意可信的反向代理，最终 `X-Forwarded-For` 中的 IP 地址列表是可信的，因为这些 IP 是由可信的代理添加的（只要服务器只能通过这些代理进行访问而不是可以被直接访问）。

使用 `X-Forwarded-For` 进行安全相关的操作时（比如速率限制或基于 IP 的访问控制），必须仅使用由可信代理添加的 IP 地址。使用不可信的 IP，可能导致速率限制被规避、访问控制被绕过、内存耗尽、或其他与安全性或可用性相关的负面后果。

反过来，只有当使用错误 IP 不会导致负面影响时，最左边的（不可信的）IP 才能被使用。

## 语法

```http
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

元素用逗号分隔，逗号两边可以加上空格。

## 指令

- \<client>
  - : 客户端 IP 地址。
- \<proxy1>, \<proxy2>
  - : 如果请求通过多个代理，每个代理的 IP 地址会按顺序出现在列表中。这意味着，如果客户端和代理行为良好，最右边的 IP 地址会是最近的代理的 IP 地址，最左边的 IP 地址会是原始客户端的 IP 地址。

## 示例

```http
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195,2001:db8:85a3:8d3:1319:8a2e:370:7348,150.172.238.178
```

## 解析

对 `X-Forwarded-For` 首部的不当解析可能导致错误的值被用于安全相关的目地，造成本文之前提及过的负面后果。

在一个请求中可能出现多个 `X-Forwarded-For` 首部。这些首部中的 IP 地址必须被当作一个列表处理，从第一个首部中的第一个 IP 地址开始，直到最后一个首部中的最后一个 IP 地址结束。有两种方法生成这个列表：

- 用逗号拼接所有 `X-Forwarded-For` 首部的值，然后用逗号将其分割成一个列表
- 用逗号将每一个 `X-Forwarded-For` 首部的值都分割成一个列表，然后将这些列表合并成一个列表

只使用多个 `X-Forwarded-For` 首部中的一个是不够的。

（一些反向代理会自动将多个 `X-Forwarded-For` 首部合并成一个，但是最安全的做法是不要假设就是这种情况。）

## 选择一个 IP 地址

When selecting an address, the full list of IPs — from all `X-Forwarded-For` headers — must be used.

When choosing the `X-Forwarded-For` client IP address closest to the client (untrustworthy
and _not_ for security-related purposes), the first IP from the leftmost that is _a valid
address_ and _not private/internal_ should be selected. ("Valid" because spoofed values
may not be IP addresses at all; "not internal/private" because clients may have used
proxies on their internal network, which may have added addresses from the [private IP space](https://en.wikipedia.org/wiki/Private_network).)

When choosing the first _trustworthy_ `X-Forwarded-For` client IP address, additional
configuration is required. There are two common methods:

- **Trusted proxy count**: The count of reverse proxies between the internet and the
  server is configured. The `X-Forwarded-For` IP list is searched from the rightmost by
  that count minus one. (For example, if there is only one reverse proxy, that proxy will
  add the client's IP address, so the rightmost address should be used. If there are
  three reverse proxies, the last two IP addresses will be internal.)
- **Trusted proxy list**: The IPs or IP ranges of the trusted reverse proxies are
  configured. The `X-Forwarded-For` IP list is searched from the rightmost, skipping all
  addresses that are on the trusted proxy list. The first non-matching address is the
  target address.

The first trustworthy `X-Forwarded-For` IP address may belong to an untrusted intermediate
proxy rather than the actual client computer, but it is the only IP suitable for security
uses.

Note that if the server is directly connectable from the internet — even if it is also
behind a trusted reverse proxy — _no part_ of the `X-Forwarded-For` IP list can be
considered trustworthy or safe for security-related uses.

## 规范

不属于任何当前规范。标准版本是 {{HTTPHeader("Forwarded")}}。

## 参见

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
