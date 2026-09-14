---
title: Firefox 2 中的安全性
slug: Mozilla/Firefox/Releases/2/Security_changes
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

本文讨论了影响 Firefox 2 安全性的更改。

## 默认禁用弱加密套件

[Firefox 2](/zh-CN/docs/Mozilla/Firefox/Releases/2) 默认禁用了 SSLv2 和弱“出口”加密套件（密钥长度小于 64 位的套件），转而使用 SSLv3。这提高了安全性。

首选的加密方法是 `TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA` 和 `TLS_RSA_WITH_3DES_EDE_CBC_SHA`。一些服务器将这些称为 `SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA` 和 `SSL_RSA_WITH_3DES_EDE_CBC_SHA`。

如果必须启用 SSLv2 支持，可以通过将相应的 `security.ssl2.*` 用户首选项设置为 `true` 来实现。

## 新特性

- Firefox 2 在 TLS 中支持[椭圆曲线密码学](https://zh.wikipedia.org/wiki/椭圆曲线密码学)。目前仅支持 256、384 和 521（是的，确实是 521）位的曲线。
- Firefox 2 支持 TLS 服务器名称指示扩展，以根据 [RFC 3546](https://datatracker.ietf.org/doc/html/rfc3546) 实现对单个底层网络地址上托管多个虚拟服务器的服务器的安全连接。
- 当 Firefox 2 发出 [OCSP](https://zh.wikipedia.org/wiki/在线证书状态协议) 请求以验证 Web 服务器证书时，现在会使用为常规 HTTP 流量配置的代理。

## 确定可用的加密套件

一如既往，你可以通过打开 about:config 页面并搜索“ssl”或“tls”来查看支持哪些加密套件，以及已启用或已被禁用的套件。

## jar 协议的安全性改进

为了纠正使用 `jar:` 协议时可能出现的安全问题，现在需要以 MIME 类型 `application/java-archive` 提供 JAR 文件。有关详细信息，请参见[安全与 jar 协议](https://web.archive.org/web/20180706040540/https://developer.mozilla.org/en-US/docs/Mozilla/Security/Security_and_the_jar_protocol)。
