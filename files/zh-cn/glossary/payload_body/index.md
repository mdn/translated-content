---
title: 有效负载体
slug: Glossary/Payload_body
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

HTTP 消息的**有效负载体**是在应用{{HTTPHeader("Transfer-Encoding", "传输编码", "", 1)}}之前，包含在 HTTP 消息体中的*信息*（“有效负载”）部分（如果有存在的话）。如果未使用传输编码，则*有效负载体*和*消息体*就是等价的。

例如，以下响应中的消息体仅包含有效负载体：“Mozilla Developer Network”：

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

相比之下，下面的响应使用*传输编码*将有效负载体编码为块。发送的有效负载体（信息）仍然是“Mozilla Developer Network”，但消息体包含了用于分隔这些块的额外数据：

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
```

更多信息，参见 [RFC 7230，3.3 节：消息体](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3)、[RFC 7230，3.3.1 节：传输编码](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.1)。
