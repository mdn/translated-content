---
title: 传输层安全协议
slug: Web/Security/Transport_Layer_Security
---

使用传输层安全性协议（TLS）进行的任何连接的安全性在很大程度上取决于密码套件和所选的安全性参数。本文的目的是帮助您确保客户端和服务器之间的机密性和完整性通信。Mozilla 运营安全团队（OpSec）维护了 [服务器端 TLS 参考配置的 Wiki 条目](https://wiki.mozilla.org/Security/Server_Side_TLS)。

传输层安全性协议（Transport Layer Security protocol，TLS）是使两个联网应用程序或设备能够安全可靠地交换信息的标准。使用 TLS 的应用程序可以自行选择安全性参数，这可能会对数据的安全性和可靠性产生重大影响。本文对 TLS 进行了概述，并提供了多种在保护内容时需要做出的决策。

### 参见

- [Mozilla SSL 配置生成器](https://ssl-config.mozilla.org)和 [Cipherlist.eu](https://cipherlist.eu/) 帮助你为服务器生成配置文件以保护你的站点。
- Mozilla 运营安全（OpSec）团队维护了一个带有[引用的 TLS 配置](https://wiki.mozilla.org/Security/Server_Side_TLS)的 wiki 页面。
- [Mozilla Observatory](https://observatory.mozilla.org/)、[SSL Labs](https://www.ssllabs.com/ssltest/) 以及 [Cipherscan](https://github.com/mozilla/cipherscan) 可以帮助你测试站点以了解其 TLS 配置的安全性。
- [安全上下文](/zh-CN/docs/Web/Security/Secure_Contexts)
- [Strict-Transport-Security](/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security) HTTP 标头
