---
title: Payload body
slug: Glossary/Payload_body
tags:
  - HTTP
  - HTTP Header
---
HTTP メッセージの*ペイロード本文*は、HTTP メッセージ本文があれば、その送信時に送られるデータの {{HTTPHeader("Transfer-Encoding","Transfer-Encoding")}} が適用される前の*情報* ("ペイロード") 部分です。 Transfer-Encoding が使用されない限り、 _ペイロード本文_ と _メッセージ本文_ は同じものです。

例えば、このレスポンスではメッセージ本文は "Mozilla Developer Network" というペイロード本文を持っているだけです。

```plain
HTTP/1.1 200 OK
Content-Type: text/plain
Mozilla Developer Network
```

対して、下記レスポンスは _transfer encoding_ を使ってペイロード本文をチャンクに変換しています。ペイロード本文（情報）は同じく "Mozilla Developer Network" を送信しますが、メッセージ本文には、チャンクを分離するための追加のデータが含まれています。

```plain
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

詳しくは、 [RFC 7230, section 3.3: Message Body](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3) と [RFC 7230, section 3.3.1: Transfer-Encoding](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.1) を参照してください。