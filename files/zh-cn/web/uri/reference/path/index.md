---
title: URI 路径
short-title: 路径
slug: Web/URI/Reference/Path
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

URI 的**路径**是位于[权威](/zh-CN/docs/Web/URI/Reference/Authority)之后的部分。它包含通常以分层形式组织的数据，用于标识 URI 的[方案](/zh-CN/docs/Web/URI/Reference/Schemes)和命名管辖范围内的资源。

## 语法

路径由一系列路径段组成，以斜线（`/`）字符分隔：

```plain
http://example.com:80<path>
urn:<path>
```

## 描述

路径跟随权威，以第一个问号（`?`）、井号（`#`）或 URI 的结尾结束。在以下两个 URI 中：

```url
urn:nbn:de:bvb:19-epub-5359-3
https://example.com:80/images/animated/ayse.gif
```

`nbn:de:bvb:19-epub-5359-3` 是 [URN](/zh-CN/docs/Web/URI/Reference/Schemes/urn) 的路径部分。`/images/animated/ayse.gif` 是 `https` URI 的路径部分。

每个 URI 都有一个路径组件，也就是说，下面示例中的路径在第一个 URL 中是一个正斜线（`/`），在第二个 URL 中是一个空路径组件：

```url
https://example.com/
https://example.com
```

浏览器（包括 {{domxref("URL")}} Web API）会将空路径规范化为 `/`。

## 规范

{{Specifications}}

## 参见

- [URI](/zh-CN/docs/Web/URI)
