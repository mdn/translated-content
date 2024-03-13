---
title: if
slug: Web/XSLT/Element/if
---

{{ XsltRef() }}

`<xsl:if>` 요소는 test 속성과 템플릿을 포함합니다. test 속성을 참으로 평가하면, 템플릿을 처리합니다. 이것은 다른 언어의 if 문과 비슷합니다. 그러나, `<tt>if-then-else</tt>` 문의 기능을 다하기 위해 `<xsl:when>`과 `<xsl:otherwise>` 자식이 하나씩 있는 `<xsl:choose>` 요소를 씁니다.

### 문법

```
<xsl:if test=EXPRESSION>
  TEMPLATE
</xsl:if>
```

### 필수 속성

- `test`
  - : Boolean 값으로 (필요하다면 `boolean( )`으로 정의한 규칙을 써서) 평가할 수 있는 XPath 식을 포함합니다. 값이 참이면 템플릿을 처리하고 거짓이면 아무 동작도 하지 않습니다.

### 선택 속성

없음.

### 타입

명령, 템플릿 안에 나타남.

### 정의

[XSLT section 9.1, Conditional Processing with xsl:if](http://www.w3.org/TR/xslt#section-Conditional-Processing-with-xsl:if)

### Gecko 지원

지원함.
