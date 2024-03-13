---
title: when
slug: Web/XSLT/Element/when
---

{{ XsltRef() }}

`<xsl:when>` 요소는 항상 case 문처럼 동작하는 `<xsl:choose>` 요소 안에 나타납니다.

### 문법

```
<xsl:when test=EXPRESSION>
  TEMPLATE
</xsl:when>
```

### 필수 속성

- `test`
  - : 평가할 boolean 식을 지정합니다. 참이면, 요소의 컨텐트는 처리하고 거짓이면, 무시합니다.

### 선택 속성

없음.

### 타입

하위명령, 항상 `<xsl:choose>` 요소 안에 나타남.

### 정의

[XSLT section 9.2, Conditional Processing with xsl:choose](http://www.w3.org/TR/xslt#section-Conditional-Processing-with-xsl:choose)

### Gecko 지원

지원함.
