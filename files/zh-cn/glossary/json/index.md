---
title: JSON
slug: Glossary/JSON
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

_JavaScript 对象表示法_（JavaScript Object Notation，**JSON**）是一种数据交换格式。尽管不是严格意义上的子集，JSON 非常接近 {{Glossary("JavaScript")}} 语法的子集。虽然很多程序设计语言都支持 JSON，它还是在基于 JavaScript 的软件中格外有用，包括网站和浏览器插件。

JSON 可以表示数字、布尔值、字符串、`null`、数组（值的有序序列），以及由这些值（或其他数组与对象）组成的对象（字符串与值的映射）。JSON 本身不支持复杂的数据类型（函数、正则表达式、日期等）。（日期对象默认会转化为 ISO 格式的字符串，因此信息不会完全丢失。）如果需要 JSON 表示其他数据类型，可在序列化时或反序列化前转换值。

## 参见

- 维基百科上的 [JSON](https://zh.wikipedia.org/wiki/JSON)
- [JSON](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)（MDN）
