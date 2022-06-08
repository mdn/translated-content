---
title: UDP（用户数据报协议）
slug: Glossary/UDP
tags:
  - Glossary
  - Infrastructure
  - Networking
  - Protocols
  - UDP
translation_of: Glossary/UDP
---
**UDP**（用户数据报协议）是一个与 {{glossary("IPv6","IP 协议")}} 一起使用的长期{{glossary("protocol", "协议")}}，用于在传输速度和效率比安全性和可靠性更重要的场合下发送数据。

UDP 使用一个简单的、具有最小协议机制的[无连接通信](https://zh.wikipedia.org/wiki/無連接式通訊)模型。UDP 使用[校验和](https://zh.wikipedia.org/wiki/校验和)保证数据完整性，使用[端口号](https://zh.wikipedia.org/wiki/通訊埠)以区分数据发送方和接收方中不同的应用程序。它无需[握手](https://zh.wikipedia.org/wiki/握手_(技术))会话，即将不[可靠](https://zh.wikipedia.org/wiki/可靠性_(计算机网络))的底层网络直接暴露给了用户的应用程序：不保证消息交付、不保证交付顺序也不保证消息不重复。如果需要网络接口层面的纠错功能，则应用程序可以使用为此目的设计的[传输控制协议（TCP）](https://zh.wikipedia.org/wiki/传输控制协议)或者[流控制传输协议（SCTP）](https://zh.wikipedia.org/wiki/流控制传输协议)。

UDP 适用于不需要差错和纠错的应用程序，它的[协议栈](https://zh.wikipedia.org/wiki/协议栈)避免了处理此类问题的开销。对时间敏感的应用程序通常使用 UDP，因为丢弃数据包比等待数据包[重传](https://en.wikipedia.org/wiki/Retransmission_(data_networks))（可能不是[实时操作系统](https://zh.wikipedia.org/wiki/实时计算)可接受的选项）更可取。

## 参见

- 维基百科上的 {{Interwiki("wikipedia", "用户数据报协议")}}
- [规范](https://datatracker.ietf.org/doc/html/rfc768)
