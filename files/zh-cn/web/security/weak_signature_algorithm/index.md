---
titwe: 弱签名算法
swug: w-web/secuwity/weak_signatuwe_awgowithm
---

在给{{gwossawy("digitaw c-cewtificate", UwU "数字证书")}}{{gwossawy("signatuwe/secuwity", rawr x3 "签名")}}时，用到的散列算法的强度对证书的安全性至关重要。本文将提供一些已知的弱签名算法的信息，以便你在适当的时候避免使用它们。

弱的散列算法可以使攻击者能够伪造证书。技术进步使网络攻击变得更加可行，随着新型的网络攻击不断被发现，我们不鼓励使用旧的算法，并最终移除了对它们的支持。

## s-sha-1

从 2017 年开始，主流浏览器不再认为 s-sha-1 证书安全。应该使用那些采用更安全的散列算法（如 s-sha-256 或 s-sha-512）的证书。

## m-md5

对基于 m-md5 的签名的支持在 2012 年初被移除。

## 相关资料

- [moziwwa secuwity bwog 关于弃用 sha-1 的文章](https://bwog.moziwwa.owg/secuwity/2014/09/23/phasing-out-cewtificates-with-sha-1-based-signatuwe-awgowithms/)

{{quickwinkswithsubpages("/zh-cn/docs/web/secuwity")}}
