---
title: 证书颁发机构
slug: Glossary/Certificate_authority
l10n:
  sourceCommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

{{GlossarySidebar}}

证书颁发机构（CA）是一个组织，负责{{Glossary("Signature/Security", "签署")}}{{Glossary("Digital certificate", "数字证书")}}及其相关的{{Glossary("Key", "公钥")}}，从而确保所包含的信息和密钥是正确的。

对于网站数字证书，这些信息至少包括请求数字证书的组织名称（例如，Mozilla 公司）、所属网站（例如，mozilla.org）以及证书颁发机构。

证书颁发机构是互联网[公开密钥基础建设](https://zh.wikipedia.org/wiki/公開金鑰基礎建設)的一部分，允许浏览器验证网站身份，并通过 TLS（即 HTTPS）进行安全连接。

> [!NOTE]
> Web 浏览器预装了一组“根证书”。浏览器可以使用这些根证书可靠地检查网站证书是否由“链回”到根证书的证书颁发机构签署的（即被根证书的所有者或中间证书颁发机构信任）。最终，这个过程依赖于每个证书颁发机构在签署证书之前执行充分的身份验证！

## 参见

- 维基百科上的[证书颁发机构](https://zh.wikipedia.org/wiki/证书颁发机构)
- 维基百科上的[公钥基础设施](https://zh.wikipedia.org/wiki/公開金鑰基礎建設)
- [Mozilla 包含的证书颁发机构证书列表](https://wiki.mozilla.org/CA/Included_Certificates)
