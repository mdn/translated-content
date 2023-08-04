---
title: otherwise
slug: Web/XSLT/Element/otherwise
---

{{ XsltRef() }}

`<xsl:otherwise>` 요소는 아무런 `<xsl:when>` 조건도 적용하지 않았을 때 취하면 좋을 동작을 정의하는 데 씁니다. 다른 프로그래밍 언어의 `else`나 `default` 경우와 비슷합니다.

### 문법

```
<xsl:otherwise>
  TEMPLATE
</xsl:otherwise>
```

### 필수 속성

없음.

### 선택 속성

없음.

### 타입

하위명령, 템플릿 안에서 `<xsl:choose>` 요소의 마지막 자식으로 나타나야 함.

### 정의

[XSLT section 9.2, Conditional Processing with xsl:choose](http://www.w3.org/TR/xslt#section-Conditional-Processing-with-xsl:choose)

### Gecko 지원

지원함.
