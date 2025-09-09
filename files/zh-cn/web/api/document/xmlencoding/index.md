---
title: Document：xmlEncoding 属性
short-title: xmlEncoding
slug: Web/API/Document/xmlEncoding
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("DOM")}}{{deprecated_header}}

返回由 XML 声明确定的编码。如果未指定或未知，则返回 `null`。

> [!WARNING]
> 不要使用此属性；它已从 DOM Level 4 规范中移除，并且自 Firefox 10.0 不再受支持。

考虑以下 XML 声明：

```xml
<?xml version="1.0" encoding="UTF-16"?>
```

那么访问该属性将返回“UTF-16”。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
