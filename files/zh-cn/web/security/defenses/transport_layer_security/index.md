---
title: 传输层安全
slug: Web/Security/Defenses/Transport_Layer_Security
---

使用传输层安全协议（TLS）进行的任何连接的安全性在很大程度上取决于密码套件和所选的安全性参数。本文的目的是帮助你确保客户端和服务器之间的机密性和完整性通信。Mozilla 运营安全团队（OpSec）维护了[服务器端 TLS 参考配置的 Wiki 条目](https://wiki.mozilla.org/Security/Server_Side_TLS)。

传输层安全协议（Transport Layer Security protocol，TLS）是使两个联网应用程序或设备能够安全可靠地交换信息的标准。使用 TLS 的应用程序可以自行选择安全性参数，这可能会对数据的安全性和可靠性产生重大影响。本文对 TLS 进行了概述，并提供了多种在保护内容时需要做出的决策。

## 历史

HTTPS 推出时，是基于 Netscape 公司推出的安全套接字层（SSL）2.0 技术的。不久后，该技术更新为 SSL 3.0，随着使用范围的扩大，显然需要指定一种通用的标准加密技术，以确保所有 web 浏览器和服务器之间的互操作性。1999 年 1 月，[互联网工程任务组](https://www.ietf.org/)（IETF）在 {{RFC(2246)}} 中规定了 TLS 1.0。TLS 的当前版本为 1.3（{{RFC(8446)}}）。

尽管 web 现在使用 TLS 进行加密，但许多人仍然习惯性地将其称为“SSL”。

虽然 TLS 可用于任何底层传输协议，但该协议的最初目标是加密 HTTP 流量。使用 TLS 加密的 HTTP 通常被称为 {{Glossary("HTTPS")}}。根据惯例，TLS 加密的网络流量默认在 443 端口交换，而未加密的 HTTP 默认使用 80 端口。HTTPS 仍是 TLS 的一个重要用例。

## 在 TLS 上的 HTTP

TLS 提供三种主要服务，有助于确保与之交换的数据的安全性：

- 身份验证
  - : 通过认证，通信的每一方都可以验证另一方的身份。
- 加密
  - : 在用户代理和服务器之间传输数据时对数据进行加密，以防止未经授权的各方读取和解读数据。
- 完整性
  - : TLS 确保数据在加密、传输和解密过程中不会丢失、损坏、篡改或伪造任何信息。

TLS 连接以握手阶段开始，在此阶段，客户端和服务器就共享秘密和重要参数（如密码套件）达成一致。一旦参数确定，就进入数据交换模式，交换应用数据（如 HTTP）。

### 密码套件

TLS 握手协商的主要参数是[密码套件](https://zh.wikipedia.org/wiki/密码套件)。

在 TLS 1.2 及更早版本中，协商密码套件包括一组加密算法，这些算法共同提供了共享秘密的协商、服务器身份验证方法以及用于加密数据的方法。

TLS 1.3 中的密码套件主要用于数据加密，密钥协议和身份验证则使用单独的协商方法。

不同的软件可能会对相同的密码套件使用不同的名称。例如，OpenSSL 和 GnuTLS 使用的名称与 TLS 标准中的名称不同。Mozilla OpSec 团队关于 TLS 配置的文章中的[密码名称对应表](https://wiki.mozilla.org/Security/Server_Side_TLS#Cipher_names_correspondence_table)列出了这些名称以及有关兼容性和安全级别的信息。

### 配置服务器

正确配置服务器至关重要。一般来说，应尽量将密码支持限制在与希望连接到网站的浏览器兼容的最新密码上。[Mozilla OpSec TLS 配置指南](https://wiki.mozilla.org/Security/Server_Side_TLS)提供了更多有关推荐配置的信息。

为了帮助你配置网站，Mozilla 提供了一个有用的 [TLS 配置生成器](https://ssl-config.mozilla.org/)，它可以为以下 Web 服务器生成配置文件：

- Apache
- Nginx
- Lighttpd
- HAProxy
- Amazon Web Services CloudFormation Elastic Load Balancer

建议使用[配置生成器](https://ssl-config.mozilla.org/)来创建配置，以满足你的需要；然后将其复制并粘贴到服务器上的相应文件中，并重新启动服务器以接收更改。配置文件可能需要进行一些调整才能包含自定义设置，因此在使用前一定要检查生成的配置文件；安装配置文件时如果不确保任何域名等引用都是正确的，就会导致服务器无法正常工作。

## TLS 1.3

{{RFC("8446", "TLS 1.3")}} 是对 TLS 的重大修订。TLS 1.3 包含大量改进安全性和性能的变更。TLS 1.3 的目标是：

- 删除 TLS 1.2 中未使用和不安全的特性。
- 在设计中加入强大的安全分析。
- 通过加密更多协议来提高隐私性。
- 缩短完成握手所需的时间。

TLS 1.3 改变了协议的许多基本原理，但保留了以前 TLS 版本的几乎所有基本功能。对于 web 而言，启用 TLS 1.3 不会影响兼容性，但也有极少数例外情况（见下文）。

TLS 1.3 的主要更改有：

- 在大多数情况下，TLS 1.3 的握手在一次往返中完成，从而减少了握手延迟。
- 服务器可以启用 0-RTT（零往返时间）握手。重新连接服务器的客户端可以立即发送请求，完全消除了 TLS 握手的延迟。虽然 0-RTT 带来的性能提升非常明显，但也存在一定的重放攻击风险，因此在启用此功能前需要谨慎。
- TLS 1.3 仅支持前向安全模式，除非连接恢复或使用预共享密钥。
- TLS 1.3 定义了一组 TLS 1.3 独有的新密码套件。这些密码套件全部使用现代的关联数据验证加密（AEAD）算法。
- 除了建立共享秘密所需的信息外，TLS 1.3 的握手过程都是加密的。这尤其意味着服务器和客户端证书是加密的。但请注意，客户端发送给服务器的服务器标识（服务器名称或 SNI 扩展名）不加密。
- 许多机制已被禁用：重新协商、通用数据压缩、[数字签名算法](https://zh.wikipedia.org/wiki/数字签名算法)（DSA）证书、静态 RSA 密钥交换和使用自定义 Diffie-Hellman（DH）组的密钥交换。

TLS 1.3 的草案版本已经实现。一些浏览器已启用 TLS 1.3，包括 0-RTT 模式。启用 TLS 1.3 的 web 服务器可能需要调整配置，以便 TLS 1.3 成功运行。

TLS 1.3 只增加了一个重要的新用例。0-RTT 握手可为网络等对延迟敏感的应用带来显著的性能提升。启用 0-RTT 需要额外的步骤，既要确保成功部署，又要管理重放攻击的风险。

TLS 1.3 中取消了重新协商功能，这可能会影响到一些依赖使用证书进行客户端身份验证的 web 服务器。一些 web 服务器会使用重新协商来确保客户端证书已加密，或仅在请求某些资源时才请求客户端证书。为了保护客户证书的隐私，TLS 1.3 握手的加密可确保客户证书是加密的；但这可能需要对软件进行一些修改。TLS 1.3 支持使用证书进行反应式客户端验证，但并未广泛实施。替代机制正在开发中，也将支持 HTTP/2。

## 移除对旧 TLS 版本的支持

为了帮助实现更现代、更安全的 web，所有主流浏览器都在 2020 年初开始取消对 TLS 1.0 和 1.1 的支持。需要确保你的 web 服务器支持 TLS 1.2 或 1.3。

从版本 74 开始，Firefox 浏览器在连接使用旧版 TLS 的服务器时会返回 [Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) 错误（[Firefox bug 1606734](https://bugzil.la/1606734)）。

## TLS 握手超时值

如果 TLS 握手由于某种原因开始变得缓慢或反应迟钝，用户的体验就会受到严重影响。为了缓解这一问题，现代浏览器已经实现了握手超时：

- 从版本 58 开始，Firefox 浏览器实现了 TLS 握手超时，默认值为 30 秒。超时值可通过编辑 about:config 中的 `network.http.tls-handshake-timeout` 首选项来更改。

## 参见

- [Mozilla SSL 配置生成器](https://ssl-config.mozilla.org)和 [Cipherlist.eu](https://cipherlist.eu/) 帮助你为服务器生成配置文件以保护你的站点。
- Mozilla 运营安全（OpSec）团队维护了一个带有[参考的 TLS 配置](https://wiki.mozilla.org/Security/Server_Side_TLS)的 wiki 页面。
- [Mozilla Observatory](https://observatory.mozilla.org/)、[SSL Labs](https://www.ssllabs.com/ssltest/) 以及 [Cipherscan](https://github.com/mozilla/cipherscan) 可以帮助你测试站点以了解其 TLS 配置的安全性。
- [安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts)
- [Strict-Transport-Security](/zh-CN/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP 标头
