---
title: "false"
slug: Web/XPath/Functions/false
---

{{ XsltRef() }}

`false` 関数は論理値 false を返します。

### 構文

```
false()
```

### 返値

論理値 `false` です。

### 注

この関数は比較の一部として役立ちます。

```
<xsl:if test="boolean((1 &gt; 2) = false())">
 The expression evaluates as true
</xsl:if>
```

### 定義

[XPath 1.0 4.3](https://www.w3.org/TR/xpath#function-false)

### Gecko での対応

対応済み。
