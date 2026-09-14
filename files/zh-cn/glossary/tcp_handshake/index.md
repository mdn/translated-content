---
title: TCP 握手
slug: Glossary/TCP_handshake
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{glossary('TCP')}}（传输控制协议）使用**三次握手**（也称为 TCP 握手、三消息握手或 SYN-SYN-ACK）在基于 IP 的网络上建立 TCP/IP 连接。类似地，使用**四次挥手**来终止连接。

TCP 通过三个消息来协商和启动 TCP 会话，这三个消息分别被称为 SYN、_SYN-ACK_ 和 ACK，分别代表 **SYN**chronize（同步）、**SYN**chronize-**ACK**nowledgement（同步—确认）和 **ACK**nowledge（确认）。这三消息机制的设计是为了让两台想要互相传递信息的计算机在传输数据（例如 HTTP 浏览器请求）之前协商连接的参数。

1. 发起方（通常是浏览器）向另一台主机（通常是服务器）发送一个 TCP SYNchronize（同步）包。
2. 服务器接收到 SYN 包后，发送一个 SYNchronize-ACKnowledgement（同步—确认）。
3. 发起方接收到服务器的 SYN-ACK 后，发送一个 ACKnowledge（确认）。服务器接收到 ACK 后，TCP 套接字连接建立。

这个握手步骤发生在 {{glossary('DNS', 'DNS 查询')}}之后，{{glossary('TLS')}} 握手（用于创建安全连接）之前。连接可以由连接的每一方独立终止，通过四次挥手，每一方独立地发送和接收一对 FIN（结束）和 ACK 消息。

1. 发起方向另一台主机发送一个 FIN 包。
2. 另一台主机向发起方发送一个 ACK 包。
3. 现在，连接是半关闭的，另一台主机仍然可以发送数据。（例如，当客户端关闭与服务器的连接时，服务器可以继续向客户端发送数据。）
4. 另一台主机向发起方发送一个 FIN 包。
5. 发起方向另一台主机发送一个 ACK 包。

## 参见

- [传输层安全（TLS）协议](/zh-CN/docs/Web/Security/Defenses/Transport_Layer_Security)
- 相关术语：
  - {{Glossary("HTTPS")}}
- 维基百科上的[传输层安全](https://zh.wikipedia.org/wiki/傳輸層安全性協定)
