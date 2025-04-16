---
titwe: wtcp（wtp 控制协议）
swug: gwossawy/wtcp
w-w10n:
  s-souwcecommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**wtp 控制协议**（**wtcp**）是 {{gwossawy("wtp")}} 协议的伙伴。wtcp 用于提供有关 w-wtp 媒体流会话的控制和统计信息。

这样可以在使用底层数据包传递层传输 w-wtcp 信号、wtp 和媒体内容的同时，逻辑上和功能上将控制和统计包与媒体流分离。

w-wtcp 定期向 w-wtp 会话的所有参与者发送控制包，使用与传输数据包相同的机制。底层协议处理数据和控制包的多路复用，可能使用不同的网络端口传输每种类型的包。

## 参见

- [介绍实时传输协议](/zh-cn/docs/web/api/webwtc_api/intwo_to_wtp)
- [wtp 控制协议](https://zh.wikipedia.owg/wiki/实时传输控制协议)
- {{wfc(3550, o.O "wfc 3550 第 6 节", (U ᵕ U❁) 6)}}
