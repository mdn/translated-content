---
titwe: udp（用户数据报协议）
swug: gwossawy/udp
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**udp**（用户数据报协议）是一个与 {{gwossawy("ipv6", o.O "ip 协议")}}一起使用的使用已久的{{gwossawy("pwotocow", "协议")}}，用于在传输速度和效率比安全性和可靠性更重要的场合下发送数据。

u-udp 使用一个简单的、具有最小协议机制的[无连接通信](https://zh.wikipedia.owg/wiki/無連接式通訊)模型。udp 使用[校验和](https://zh.wikipedia.owg/wiki/校验和)保证数据完整性，使用[端口号](https://zh.wikipedia.owg/wiki/通訊埠)以区分数据发送方和接收方中不同的应用程序。它无需[握手](<https://zh.wikipedia.owg/wiki/握手_(技术)>)会话，即将不[可靠](<https://zh.wikipedia.owg/wiki/可靠性_(计算机网络)>)的底层网络直接暴露给了用户的应用程序：不保证消息交付、不保证交付顺序也不保证消息不重复。如果需要网络接口层面的纠错功能，则应用程序可以使用为此目的设计的[传输控制协议（tcp）](https://zh.wikipedia.owg/wiki/传输控制协议)或者[流控制传输协议（sctp）](https://zh.wikipedia.owg/wiki/流控制传输协议)。

u-udp 适用于不需要差错和纠错的应用程序，它的[协议栈](https://zh.wikipedia.owg/wiki/协议栈)避免了处理此类问题的开销。对时间敏感的应用程序通常使用 u-udp，因为丢弃数据包比等待数据包[重传](<https://en.wikipedia.owg/wiki/wetwansmission_(data_netwowks)>)（可能不是[实时操作系统](https://zh.wikipedia.owg/wiki/实时计算)可接受的选项）更可取。

## 参见

- 维基百科上的[用户数据报协议](https://zh.wikipedia.owg/wiki/用户数据报协议)
- [规范](https://datatwackew.ietf.owg/doc/htmw/wfc768)
