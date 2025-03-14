---
title: 证书透明度
slug: Web/Security/Certificate_Transparency
---

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Security")}}

**证书透明度**（Certificate Transparency，CT）是一个开放的框架，旨在监测和防止证书的误发。它在 [RFC 9162](https://www.rfc-editor.org/rfc/rfc9162) 中定义。有了证书透明度机制，新颁发的证书会被“记录”到公开运行的、通常是独立的 *CT 日志*中——这些日志保持着仅允许添加、有密码学保证的已颁发 TLS 证书记录。

这样一来，证书颁发机构（CA）就可以受到更多的公众审查和监督。潜在的恶意证书，如那些违反 CA/浏览器论坛*基线要求*的证书，可以更快地被发现和撤销。浏览器供应商和根存储维护者也被授权对它们可能决定不信任的有问题的 CA 做出更明智的决定。

## 背景

CT 日志是建立在 *Merkle 树*数据结构的基础上的。节点被标记为其子节点的*加密哈希值*。叶子节点包含实际数据片段的哈希值。因此，根节点的标签取决于树中的所有其他节点。

在证书透明的情况下，叶子节点散列的数据是由目前运行的各种不同的 CA 所颁发的证书。证书的包含性可以通过*审计证明*来验证，该证明可以在对数 O(log n) 时间内有效地生成和验证。

证书透明度最初是在 2013 年出现的，背景是 CA 妥协（2011 年的 DigiNotar 漏洞）、有问题的决定（2012 年的 Trustwave 次级根事件）和技术发行问题（马来西亚的 Digicert Sdn Bhd 发行的 512 位弱证书）。

## 实现

当证书被提交到 CT 日志时，一个*证书签署时间戳*（SCT）被生成并返回。这可作为证书已提交的证明，并将被添加到日志中。

该规范指出，符合要求的服务器*必须*在 TLS 客户端连接时向其提供一些这样的 SCT。这可以通过一些不同的机制来实现：

- X.509v3 证书扩展，直接将签名的证书时间戳嵌入叶节点证书中
- 握手过程中发送的 `signed_certificate_timestamp` 类型的 TLS 扩展
- OCSP 装订（即 `status_request` TLS 扩展），并提供具有一个或多个 SCT 的 `SignedCertificateTimestampList`

通过 X.509 证书扩展，所包含的 SCT 由签发的 CA 决定。自 2021 年 6 月以来，大多数积极使用和有效的公开信任的证书都包含嵌入该扩展的透明度数据。这种方法应该不需要对 web 服务器进行修改。

使用后一种方法，服务器将需要更新以发送所需的数据。其优点是，服务器运营商可以定制 CT 日志源，提供通过 TLS 扩展/装订 OCSP 响应发送的 SCT。

## 浏览器要求

Google Chrome 要求对 notBefore 日期晚于 2018 年 4 月 30 日签发的证书进行 CT 日志收录。用户将被阻止访问使用不符合规定的 TLS 证书的网站。此前，Chrome 浏览器要求对*扩展验证*（EV）和 Symantec 签发的证书进行 CT 收录。

Apple [要求](https://support.apple.com/en-us/HT205280)多种数目的 SCT，以使 Safari 和其他服务器信任服务器证书。

Firefox 目前[并不](https://bugzilla.mozilla.org/show_bug.cgi?id=1281469)检查用户访问的网站或要求使用 CT 日志。
