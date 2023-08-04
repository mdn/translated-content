---
title: attribute
slug: Web/XSLT/Element/attribute
---

{{ XsltRef() }}

`<xsl:attribute>` 요소는 스타일시트에서 접근할 수 있는 어떤 값을 써서 출력 문서에 속성을 만듭니다. 요소는 속성값을 자리 잡게 하는 출력 문서 요소 안에 정의한 것 가운데 처음이어야 합니다.

### 문법

```
<xsl:attribute name=NAME namespace=URI>
  TEMPLATE
</xsl:attribute>
```

### 필수 속성

- `name`
  - : 출력 문서에 만들려는 속성에 이름을 지정합니다. 이름은 유효한 QName이어야 합니다.

### 선택 속성

- `namespace`
  - : 출력 문서에 이 속성을 위한 이름공간(namespace) URI를 정의합니다. 이 요소와 관련된 이름공간 접두사를 설정할 수 없습니다.

### 타입

명령, 템플릿이나 `<xsl:attribute-set>` 요소 안에 나타남.

### 정의

[XSLT section 7.1.3, Creating Attributes with xsl:attribute](http://www.w3.org/TR/xslt#creating-attributes)

### Gecko 지원

지원함.
