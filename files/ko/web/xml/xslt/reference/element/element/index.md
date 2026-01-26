---
title: element
slug: Web/XML/XSLT/Reference/Element/element
original_slug: Web/XSLT/Element/element
---

{{XsltSidebar}}{{ XsltRef() }}

`<xsl:element>` 요소는 출력 문서에 요소를 만듭니다.

### 문법

```
<xsl:element name=NAME namespace=URI use-attribute-sets=LIST-OF-NAMES >
  TEMPLATE
</xsl:template>
```

### 필수 속성

- `name`
  - : 출력 요소에 바라는 이름을 지정합니다. 이름은 유효한 QName이어야 합니다.

### 선택 속성

- `namespace`
  - : 출력 요소에 이름공간을 지정합니다.
- `use-attribute-sets`
  - : 출력 요소에 쓸 이름 붙인 속성 집합을 나열합니다. 이름은 공백 문자로 구분해야 합니다.

### 타입

명령, 템플릿 안에 나타남.

### 정의

[XSLT section 7.1.2, Creating Elements with xsl:element](https://www.w3.org/TR/xslt#section-Creating-Elements-with-xsl:element)

### Gecko 지원

지원함.
