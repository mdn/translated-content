---
title: dns
slug: Mozilla/Add-ons/WebExtensions/API/dns
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

允许扩展程序解析域名。

要使用此 API，扩展程序必须在其 [`manifest.json`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件中请求“dns”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

> [!NOTE]
> 如果启用通过 SOCKS 代理的 DNS 解析，DNS 解析将失败并显示 NS_ERROR_UNKNOWN_PROXY_HOST。

## 函数

- {{WebExtAPIRef("dns.resolve()")}}
  - : 将给定的主机名解析为 DNS 记录。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}
