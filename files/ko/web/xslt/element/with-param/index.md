---
title: with-param
slug: Web/XSLT/Element/with-param
---

{{ XsltRef() }}

`<xsl:with-param>` 요소는 템플릿에 건네는 매개변수 값을 지정합니다.

### 문법

```
<xsl:with-param name=NAME select=EXPRESSION>
  TEMPLATE
</xsl:with-param>
```

### 필수 속성

- `name`
  - : 이 매개변수에 이름을 줍니다.

### 선택 속성

- `select`
  - : XPath 식을 거치는 매개변수 값을 정의합니다. 요소가 템플릿을 포함하면, 이 속성은 무시합니다.

### 타입

하위명령, 항상 `<xsl:apply-templates>`이나 `<xsl:call-template>` 요소 안에 나타남.

### 정의

[XSLT section 11.6, Passing Parameters to Templates](http://www.w3.org/TR/xslt#section-Passing-Parameters-to-Templates)

### Gecko 지원

지원함.
