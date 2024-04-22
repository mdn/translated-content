---
title: "false"
slug: Web/XPath/Functions/false
---

{{ XsltRef() }}

`false` 함수는 boolean false를 반환합니다.

### 구문

```
false()
```

### 반환

Boolean `false`.

### 주의

이 함수는 비교(comparison)하는 부분에 쓸모가 있습니다.

```
<xsl:if test="boolean((1 &gt; 2) = false())">
 The expression evaluates as true
</xsl:if>
```

### 정의

[XPath 1.0 4.3](http://www.w3.org/TR/xpath#function-false)

### Gecko 지원

지원함.
