---
title: Firefox 3 中的模板
slug: Mozilla/Firefox/Releases/3/Templates
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 3 中的模板得到了显著改进。关键改进是允许使用[自定义查询处理器](/zh-CN/docs/How_to_implement_a_custom_XUL_query_processor_component)来处理 RDF 之外的其他类型的数据源。新的查询语法使这成为可能。还提供了对 SQL（mozStorage）和 XML 数据源的内置支持。有关模板可用新功能的完整描述参见[本文](https://wiki.mozilla.org/XUL:Template_Features_in_1.9)。（[Firefox bug 285631](https://bugzil.la/285631)）

### 其他模板改进

- 添加了关系条件，以更精确地控制哪些结果匹配规则。例如，这允许匹配以特定字符串开头或结尾的结果，或者在其他值之前或之后的结果。
- 添加了一个标志 `dont-recurse`，以防止递归发生，从而仅生成一层结果。
- 向模板构建器添加了 API，以检索表示输出项目的结果对象。
- XUL 排序服务更加稳健，并且[更好地排序](/zh-CN/docs/XUL/Template_Guide/Sorting_Results)内容树和非内容树。它还允许对非模板构建的内容进行排序。（[Firefox bug 335122](https://bugzil.la/335122)）

### 参见

- [面向开发者的 Firefox 3](/zh-CN/docs/Mozilla/Firefox/Releases/3)
