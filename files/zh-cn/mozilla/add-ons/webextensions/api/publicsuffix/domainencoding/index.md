---
title: publicSuffix.DomainEncoding
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/DomainEncoding
l10n:
  sourceCommit: 5054fb75bce0f095ed9ca9ad11dabde32eea5cb4
---

{{WebExtAPIRef("publicSuffix.getDomain()")}} 返回的域名所用的编码格式。

## 类型

此类型的值为字符串。可能的值包括：

- `"punycode"`
  - : 以[国际化域名编码](https://zh.wikipedia.org/wiki/国际化域名编码)（ASCII 兼容编码，ACE）形式返回域名。此值为默认值。
- `"display"`
  - : 以 Unicode 形式返回域名，适合向用户显示。如果 Unicode 表示中包含可能与其他文字系统中的字符相混淆的字符（易混淆字符），则改为以 Punycode 返回该域名，以防范[同形异义攻击](https://en.wikipedia.org/wiki/IDN_homograph_attack)。

## 浏览器兼容性

{{Compat}}
