---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
---

{{HTTPSidebar}}

当客户端通过代理服务器连接到 web 服务器时，**`X-Forwarded-For`** (XFF) 请求头可用于标识客户端的原始 IP 地址。
XFF 是事实上的标准。

> **警告：** 对此标头的不恰当使用可能带来安全风险。有关详细信息，请参阅 [安全和隐私考虑](#安全和隐私考虑).
 
当客户端直接连接到服务器时，其 IP 地址被发送给服务器（并且经常被记录在服务器的访问日志中）。
但是如果客户端通过 [正向代理或者反向代理](https://en.wikipedia.org/wiki/Proxy_server) 进行连接，
服务器就只能看到最后一个代理的 IP 地址，这个 IP 通常没什么用。
如果最后一个代理是与服务器安装在同一台主机上的负载均衡，则更是如此。
`X-Forwarded-For` 的出现，就是为了向服务器提供更有用的客户端 IP 地址。

有关使用此标头的详细指引，请参阅 [Parsing](#parsing) 和 [Selecting an IP address](#selecting_an_ip_address) 部分.

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

此标头的标准化版本是 HTTP {{HTTPHeader("Forwarded")}} 标头。

## 安全和隐私考虑

从设计上说，此标头暴露隐私信息，比如客户端的 IP 地址。因此，在使用此标头时，请务必将用户的隐私放在心上。

当在客户端和服务器之间没有可信的反向代理（比如一个负载均衡）时，`X-Forwarded-For` 标头是不可信的。
如果客户端和所有的代理都没有恶意且行为良好，
那么此标头中的 IP 地址列表具有 [Directives](#directives) 部分所描述的意义。
但是如果客户端或任意代理存有恶意或配置错误，
那么此标头的任意部分（或整体）可能是错误的（并且有可能不是一个列表或者甚至不包含 IP 地址）。

如果客户端和服务器之间存在任意可信的反向代理，最终 `X-Forwarded-For` 中的 IP 地址列表是可信的，
因为这些 IP 是由可信的代理添加的（只要服务器只能通过这些代理进行访问而不是可以被直接访问）。

使用 `X-Forwarded-For` 进行安全相关的操作时（比如速率限制或基于 IP 的访问控制），
必须仅使用由可信代理添加的 IP 地址。使用不可信的 IP，可能导致速率限制被规避、访问控制被绕过、
内存耗尽、或其他与安全性或可用性相关的负面后果。

反过来，只有当使用错误 IP 不会导致负面影响时，最左边的（不可信的） IP 才能被使用。

## Syntax

```http
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

Elements are comma-separated, with optional whitespace surrounding the commas.

## Directives

- \<client>
  - : The client IP address
- \<proxy1>, \<proxy2>
  - : If a request goes through multiple proxies, the IP addresses of each successive
    proxy is listed. This means that, given well-behaved client and proxies, the rightmost
    IP address is the IP address of the most recent proxy and the leftmost IP address is
    the IP address of the originating client.

## Examples

```http
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195,2001:db8:85a3:8d3:1319:8a2e:370:7348,150.172.238.178
```

## Parsing

Improper parsing of the `X-Forwarded-For` header can result in spoofed values being used
for security-related purposes, resulting in the negative consequences mentioned above.

There may be multiple `X-Forwarded-For` headers present in a request. The IP addresses in
these headers must be treated as a single list, starting with the first IP address of the
first header and continuing to the last IP address of the last header. There are two ways
of making this single list:

- join the `X-Forwarded-For` full header values with commas and then split by comma into a list, or
- split each `X-Forwarded-For` header by comma into lists and then join the lists

It is insufficient to use only one of multiple `X-Forwarded-For` headers.

(Some reverse proxies will automatically join multiple `X-Forwarded-For` headers into one,
but it is safest to not assume that this is the case.)

## Selecting an IP address

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

## Specifications

Not part of any current specification. The standardized version of this header is
{{HTTPHeader("Forwarded")}}.

## See also

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
