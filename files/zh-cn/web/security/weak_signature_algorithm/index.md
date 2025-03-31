---
title: 弱签名算法
slug: Web/Security/Weak_Signature_Algorithm
---

在给{{Glossary("Digital certificate", "数字证书")}}{{Glossary("Signature/Security", "签名")}}时，用到的散列算法的强度对证书的安全性至关重要。本文将提供一些已知的弱签名算法的信息，以便你在适当的时候避免使用它们。

弱的散列算法可以使攻击者能够伪造证书。技术进步使网络攻击变得更加可行，随着新型的网络攻击不断被发现，我们不鼓励使用旧的算法，并最终移除了对它们的支持。

## SHA-1

从 2017 年开始，主流浏览器不再认为 SHA-1 证书安全。应该使用那些采用更安全的散列算法（如 SHA-256 或 SHA-512）的证书。

## MD5

对基于 MD5 的签名的支持在 2012 年初被移除。

## 相关资料

- [Mozilla Security Blog 关于弃用 SHA-1 的文章](https://blog.mozilla.org/security/2014/09/23/phasing-out-certificates-with-sha-1-based-signature-algorithms/)

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Security")}}
