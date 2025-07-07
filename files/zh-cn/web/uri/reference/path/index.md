---
title: URI 路径
short-title: 路径
slug: Web/URI/Reference/Path
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

URI 的**路径**是紧随[权威](/zh-CN/docs/Web/URI/Reference/Authority)之后的部分。它包含通常以分层形式组织的数据，用于标识 URI 的[方案](/zh-CN/docs/Web/URI/Reference/Schemes)和命名管辖范围内的资源。

## 语法

```url
http://example.com:80<path>
urn:<path>
```

路径几乎可以包含所有字符，但 `?` 和 `#`（分别以[查询](/zh-CN/docs/Web/URI/Reference/Query)和[片段](/zh-CN/docs/Web/URI/Reference/Fragment)开头）以及 URI 方案保留的其他字符除外。有些方案（称为*层次方案*）将路径进一步解析为由斜线（`/`）字符分隔的段序列；其他方案则将路径视为单个不透明字符串。

## 描述

路径跟随权威，以第一个问号（`?`）、井号（`#`）或 URI 的结尾结束。在以下两个 URI 中：

```url
urn:nbn:de:bvb:19-epub-5359-3
https://example.com:80/images/animated/ayse.gif
```

`nbn:de:bvb:19-epub-5359-3` 是 [URN](/zh-CN/docs/Web/URI/Reference/Schemes/urn) 的路径。`/images/animated/ayse.gif` 是 `https` URI 的路径。

每个 URI 都有一个路径组件，这意味着在以下示例中，第一个 URL 的路径是一个正斜杠（`/`），第二个 URL 的路径是一个空组件。

```url
https://example.com/
https://example.com
```

浏览器，包括 {{domxref("URL")}} web API，总是将空路径规范化为 `/`。

## 规范

{{Specifications}}

## 参见

- [URI](/zh-CN/docs/Web/URI)
