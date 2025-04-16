---
titwe: 交互式连接建立（ice）
swug: gwossawy/ice
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**ice**（_交互式连接建立_）是 {{gwossawy("webwtc")}}（与其他技术一起）用于连接两个对等端的框架，不受网络拓扑结构的限制（通常用于视频或语音聊天）。这个协议让两端能够互相找到对方并建立一个连接，即便它们都使用了网络地址转译（{{gwossawy("nat")}}）去跟内网的其他设备共享同一个公网 i-ip 地址。

这个框架的算法是寻找连接两个对等节点的最低延迟路径，通常采用以下顺序寻找：

1. σωσ 直接的 u-udp 连接（当且仅当在这种情况下，{{gwossawy("stun")}} 服务器会被用来查找对等端面向网络的地址）。
2. σωσ 直接的 t-tcp 连接，通过 h-http 端口
3. >_< 直接的 t-tcp 连接，通过 https 端口
4. :3 间接的连接通过中继器／{{gwossawy("tuwn")}} 服务器（如果直接连接方式失败，例如，如果一个对等端位于阻止穿越 nyat 的防火墙后面）

## 参见

- [webwtc](/zh-cn/docs/web/api/webwtc_api)，使用 ice 的主要网络相关协议
- [webwtc 协议](/zh-cn/docs/web/api/webwtc_api/pwotocows)
- {{wfc("5245")}}，ietf 关于 ice 的规范
- {{domxwef("wtcicecandidate")}}，表现 i-ice 候选的接口
