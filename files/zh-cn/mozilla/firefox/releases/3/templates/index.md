---
title: Firefox 3 中的模板
slug: Mozilla/Firefox/Releases/3/Templates
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Firefox 3 中的模板得到了显著改进。关键改进是允许使用[自定义查询处理器](https://web.archive.org/web/20180309091530/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/How_to_implement_a_custom_XUL_query_processor_component)来处理 RDF 之外的其他类型的数据源。新的查询语法使这成为可能。还提供了对 SQL（[mozStorage](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Storage)）和 XML 数据源的内置支持。有关模板可用新特性的完整描述可以[在这里查阅](https://wiki.mozilla.org/XUL:Template_Features_in_1.9)。（[Firefox bug 285631](https://bugzil.la/285631)）

### 其他模板改进

- 添加了关系条件，以更精确地控制哪些结果匹配规则。例如，这允许匹配以特定字符串开头或结尾的结果，或者在其他值之前或之后的结果。
- 添加了一个标志 `dont-recurse`，以防止递归发生，从而保证仅生成一层结果。
- 向模板构建器添加了用于检索表示输出项目的结果对象 API。
- XUL 排序服务更加稳健，并且能够更好地[排序](https://web.archive.org/web/20201028214819/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/Template_Guide/Sorting_Results)内容树和非内容树。它还允许对非模板构建的内容进行排序。（[Firefox bug 335122](https://bugzil.la/335122)）

### 参见

- [Firefox 3 的开发者说明](/zh-CN/docs/Mozilla/Firefox/Releases/3)
