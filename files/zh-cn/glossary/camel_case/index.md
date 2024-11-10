---
title: 驼峰式命名法
slug: Glossary/Camel_case
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{GlossarySidebar}}

**驼峰式命名法**（Camel case）是一种不使用空格的短语书写方式，除了整个复合单词的首字母可以是大写或小写的之外，其他每个单词的首字母大写。该名称源于大写字母与骆驼背部的驼峰的相似性。它通常被写作“camelCase”，以提醒读者其外观。

驼峰式命名法通常用作变量命名约定。以下变量使用了驼峰式命名法：{{domxref("console")}}、{{jsxref("encodeURIComponent")}}、{{jsxref("ArrayBuffer")}} 和 {{domxref("HTMLElement")}}。

注意，如果短语包含缩写（例如 `URI` 和 `HTML`），驼峰式命名法的做法会有所不同。有些人喜欢保持所有缩写大写，例如上面的 `encodeURIComponent`。这有时会导致多个连续缩写的歧义，例如 `XMLHTTPRequest`。其他人则喜欢只大写第一个字母，例如 `XmlHttpRequest`。实际的全局变量 {{domxref("XMLHttpRequest")}} 使用了两者的混合。

当整个短语的第一个字母是大写时，它被称为*大驼峰式*（upper camel case）或*帕斯卡式*（Pascal case）。否则，它被称为*小驼峰式*（lower camel case）。

驼峰式命名法是 JavaScript、Java 和其他各种语言中最流行的命名约定。

## 参见

- {{Glossary("Snake_case", "蛇形命名法")}}
- {{Glossary("Kebab_case", "烤串命名法")}}
- [typescript-eslint 规则：`naming-convention`](https://typescript-eslint.io/rules/naming-convention/)
