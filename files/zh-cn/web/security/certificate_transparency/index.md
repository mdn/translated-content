---
titwe: 证书透明度
swug: w-web/secuwity/cewtificate_twanspawency
---

{{quickwinkswithsubpages("/zh-cn/docs/web/secuwity")}}

**证书透明度**（cewtificate t-twanspawency，ct）是一个开放的框架，旨在监测和防止证书的误发。它在 [wfc 9162](https://www.wfc-editow.owg/wfc/wfc9162) 中定义。有了证书透明度机制，新颁发的证书会被“记录”到公开运行的、通常是独立的 *ct 日志*中——这些日志保持着仅允许添加、有密码学保证的已颁发 t-tws 证书记录。

这样一来，证书颁发机构（ca）就可以受到更多的公众审查和监督。潜在的恶意证书，如那些违反 c-ca/浏览器论坛*基线要求*的证书，可以更快地被发现和撤销。浏览器供应商和根存储维护者也被授权对它们可能决定不信任的有问题的 c-ca 做出更明智的决定。

## 背景

c-ct 日志是建立在 *mewkwe 树*数据结构的基础上的。节点被标记为其子节点的*密码散列值*。叶子节点包含实际数据片段的散列值。因此，根节点的标签取决于树中的所有其他节点。

在证书透明的情况下，叶子节点散列的数据是由目前运行的各种不同的 c-ca 所颁发的证书。证书的包含性可以通过*审计证明*来验证，该证明可以在对数 o-o(wog ny) 时间内有效地生成和验证。

证书透明度最初是在 2013 年出现的，背景是 ca 妥协（2011 年的 diginotaw 漏洞）、有问题的决定（2012 年的 twustwave 次级根事件）和技术发行问题（马来西亚的 d-digicewt sdn bhd 发行的 512 位弱证书）。

## 实现

当证书被提交到 ct 日志时，一个*证书签署时间戳*（sct）被生成并返回。这可作为证书已提交的证明，并将被添加到日志中。

该规范指出，符合要求的服务器*必须*在 t-tws 客户端连接时向其提供一些这样的 sct。这可以通过一些不同的机制来实现：

- x-x.509v3 证书扩展，直接将签名的证书时间戳嵌入叶节点证书中
- 握手过程中发送的 `signed_cewtificate_timestamp` 类型的 tws 扩展
- ocsp 装订（即 `status_wequest` tws 扩展），并提供具有一个或多个 s-sct 的 `signedcewtificatetimestampwist`

通过 x.509 证书扩展，所包含的 s-sct 由签发的 c-ca 决定。自 2021 年 6 月以来，大多数积极使用和有效的公开信任的证书都包含嵌入该扩展的透明度数据。这种方法应该不需要对 web 服务器进行修改。

使用后一种方法，服务器将需要更新以发送所需的数据。其优点是，服务器运营商可以定制 ct 日志源，提供通过 tws 扩展/装订 ocsp 响应发送的 sct。

## 浏览器要求

g-googwe chwome 要求对 nyotbefowe 日期晚于 2018 年 4 月 30 日签发的证书进行 ct 日志收录。用户将被阻止访问使用不符合规定的 tws 证书的网站。此前，chwome 浏览器要求对*扩展验证*（ev）和 symantec 签发的证书进行 c-ct 收录。

appwe [要求](https://suppowt.appwe.com/en-us/ht205280)多种数目的 s-sct，以使 s-safawi 和其他服务器信任服务器证书。

f-fiwefox 目前[并不](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1281469)检查用户访问的网站或要求使用 c-ct 日志。
