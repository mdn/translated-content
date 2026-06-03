---
title: HTTPS RR
slug: Glossary/HTTPS_RR
l10n:
  sourceCommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

**HTTPS RR**（**_HTTPS 资源记录_**）是一种 DNS 记录类型，用于传递如何通过 {{Glossary("HTTPS")}} 访问服务的配置信息和参数。

*HTTPS 资源记录*可以用于优化使用 HTTPS 连接服务的过程。此外，*HTTPS 资源记录*的存在表明，所有有用的 {{Glossary("HTTP")}} 资源在源站点上都可以通过 HTTPS 访问，这意味着浏览器可以安全地将对该域的连接从 HTTP 升级到 HTTPS。

## 参见

- [通过 DNS 进行服务绑定和参数规范（DNS SVCB 和 HTTPS 资源记录）](https://datatracker.ietf.org/doc/draft-ietf-dnsop-svcb-https/00/)（IETF 草案规范：draft-ietf-dnsop-svcb-https-00）
- [严格传输安全与 HTTPS 资源记录：一分高低](https://emilymstark.com/2020/10/24/strict-transport-security-vs-https-resource-records-the-showdown.html)（Emily M. Stark 博客）
- {{glossary("TLS")}}
