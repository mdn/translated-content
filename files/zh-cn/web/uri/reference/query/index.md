---
title: URI 查询
short-title: 查询
slug: Web/URI/Reference/Query
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

URI 的**查询**是紧随[路径](/zh-CN/docs/Web/URI/Reference/Path)之后的部分，它包含非层级数据，用于识别 URI 的[方案](/zh-CN/docs/Web/URI/Reference/Schemes)和命名管辖范围内的资源，以及路径组件中的数据。

## 语法

查询由第一个问号（`?`）字符标志开始，以井号（`#`）或 URI 结束作为终止：

```plain
https://example.com/collection?<query>
```

## 描述

考虑如下 URL：

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`?key1=value1&key2=value2` 是查询组件，其中包含需要 web 服务器处理的参数。示例中的具体参数是由 `&` 符号分隔的键/值对列表。Web 服务器可以使用这些参数来修改响应，如应用过滤、搜索或排序结果，不过需要具体实现。

## 规范

{{Specifications}}

## 参见

- [URI](/zh-CN/docs/Web/URI)
