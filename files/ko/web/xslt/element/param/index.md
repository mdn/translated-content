---
title: param
slug: Web/XSLT/Element/param
---

{{ XsltRef() }}

`<xsl:param>` 요소는 이름과 선택에 따라 기본값으로 매개변수를 설정합니다. 최상위 요소로 쓸 때, 매개변수는 전역입니다. `<xsl:template>` 요소 안에서 쓰면, 매개변수는 그 템플릿에 대해 지역입니다. 이 경우에 요소는 템플릿의 첫 자식 요소여야 합니다.

### 문법

```
<xsl:param name=NAME select=EXPRESSION>
  TEMPLATE
</xsl:param>
```

### 필수 속성

- `name`
  - : 파라미터에 이름을 붙입니다. 이름은 QName이어야 합니다.

### 선택 속성

- `select`
  - : none으로 지정하면 기본값을 제공하는 XPath 식을 씁니다.

### 타입

명령, 최상위 요소나 템플릿 안에 나타날 수 있음.

### 정의

[XSLT section 11, Variables and Parameters](http://www.w3.org/TR/xslt#variables)

### Gecko 지원

지원함.
