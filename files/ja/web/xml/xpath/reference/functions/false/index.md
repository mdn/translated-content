---
title: "false"
slug: Web/XML/XPath/Reference/Functions/false
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`false` 関数は論理値 false を返します。

## 構文

```plain
false()
```

### 返値

論理値 `false` です。

### 注

この関数は比較の一部として役立ちます。

```xml
<xsl:if test="boolean((1 &gt; 2) = false())">
  The expression evaluates as true
</xsl:if>
```

## 仕様書

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-false)

## Gecko の対応

対応済み。
