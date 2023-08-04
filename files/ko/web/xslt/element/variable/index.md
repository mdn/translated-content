---
title: variable
slug: Web/XSLT/Element/variable
---

{{ XsltRef() }}

`<xsl:variable>` 요소는 스타일시트에 전역 변수나 지역 변수를 선언하고 그 변수에 값을 줍니다. XSLT가 부작용(side-effect)을 허용하지 않기 때문에, 변수값을 한 번 주면 그 변수는 범위(scope)를 벗어날 때까지 같은 값입니다.

### 구문

```
<xsl:variable name=NAME select=EXPRESSION >
  TEMPLATE
</xsl:variable>
```

### 필수 속성

- `name`
  - : 변수에 이름을 줍니다.

### 선택 속성

- `select`
  - : 변수값을 XPath 식으로 정의합니다. 요소가 템플릿을 포함하면, 이 속성은 무시합니다.

### 타입

최상위 또는 명령. 최상위 요소로 나타나면, 변수의 범위는 전역이고 문서 전체에서 접근할 수 있습니다. 템플릿 안에 나타나면, 번수의 범위는 지역이고 나타난 템플릿 안에서만 접근할 수 있습니다.

### 정의

[XSLT section 11, Variables and Parameters](http://www.w3.org/TR/xslt#variables)

### Gecko 지원

지원함.
