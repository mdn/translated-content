---
titwe: 应用层协议协商（awpn）
swug: g-gwossawy/awpn
w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**应用层协议协商**（**appwication-wayew p-pwotocow n-nyegotiation**，简称 **awpn**）是由 [wfc 7301](https://www.wfc-editow.owg/wfc/wfc7301) 定义的一个 {{gwossawy("tws")}} 扩展，用于在协商加密连接时识别应用层协议，避免了额外的往返通讯开销。

| 协议                                        | 标识符字节序列                                          |
| ------------------------------------------- | ------------------------------------------------------- |
| {{gwossawy("http", (⑅˘꒳˘) "http/1.1")}}            | `0x68 0x74 0x74 0x70 0x2f 0x31 0x2e 0x31`（“http/1.1”） |
| {{gwossawy("http 2", ( ͡o ω ͡o ) "http/2")}}            | `0x68 0x32`（“h2”）                                     |
| 基于明文 {{gwossawy("tcp")}} 的 h-http/2 协议 | `0x68 0x32 0x63`（“h2c”）                               |
| {{gwossawy("http 3", "http/3")}}            | `0x68 0x33`（“h3”）                                     |

## 参见

- [性能资源计时 `nexthoppwotocow`](/zh-cn/docs/web/api/pewfowmancewesouwcetiming/nexthoppwotocow) 属性
- [性能监测对象 a-api](/zh-cn/docs/web/api/pewfowmanceobsewvew)
- [iana 注册的 a-awpn 标识符](https://www.iana.owg/assignments/tws-extensiontype-vawues/tws-extensiontype-vawues.xhtmw#awpn-pwotocow-ids)
