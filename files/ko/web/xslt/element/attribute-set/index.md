---
title: attribute-set
slug: Web/XSLT/Element/attribute-set
---

{{ XsltRef() }}

`<xsl:attribute-set>` 요소는 CSS 안에 이름 붙인 스타일과 비슷한 방식으로 이름 붙인 속성 집합을 만듭니다. 그러면, 출력 문서에 전체로서 적용할 수 있습니다.

### 문법

```
<xsl:attribute-set name=NAME use-attribute-sets=LIST-OF-NAMES>
  <xsl:attribute>
</xsl:attribute-set>
```

### 필수 속성

- `name`
  - : 속성 집합에 이름을 지정합니다. 이름은 유효한 QName이어야 합니다.

### 선택 속성

- `use-attribute-sets`
  - : 다른 속성 집합으로부터 속성 집합을 빌드합니다. 기여한 집합의 이름은 공백 문자로 구분해야 하고 직접 혹은 간접으로 서로 임베드하지 않아야 합니다.

### 타입

최상위, `<xsl:stylesheet>`나 `<xsl:transform>`의 자식이어야 함.

### 정의

[XSLT section 7.1.4, Named Attribute Sets](http://www.w3.org/TR/xslt#attribute-sets)

### Gecko 지원

지원함.
