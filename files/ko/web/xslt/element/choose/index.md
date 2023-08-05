---
title: choose
slug: Web/XSLT/Element/choose
---

{{ XsltRef() }}

`<xsl:choose>` 요소는 많은 선택 가운데 하나를 정의합니다. 그리고 절차형 언어(procedural language)의 스위치 문처럼 동작합니다.

### 문법

```
<xsl:choose>
  <xsl:when>
  <xsl:otherwise> [optional]
</<xsl:choose>
```

### 필수 속성

없음.

### 선택 속성

없음.

### 타입

명령, 템플릿과 함께 나타남. 하나 이상의 `<xsl:when>` 요소를 포함하고 선택에 따라 마지막에 `<xsl:otherwise>` 요소를 포함합니다.

### 정의

[XSLT section 9.2, Conditional Processing with xsl:choose](http://www.w3.org/TR/xslt#section-Conditional-Processing-with-xsl:choose)

### Gecko 지원

지원함.
