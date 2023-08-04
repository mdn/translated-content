---
title: copy
slug: Web/XSLT/Element/copy
---

{{ XsltRef() }}

`<xsl:copy>` 요소는 출력 문서에 현재 노드의 노드와 어떤 관련 이름공간 노드만을 얕게 복사(shallow copy) 전달합니다. 속성이나 자식은 복사하지 않습니다.

### 문법

```
<xsl:copy use-attribute-sets=LIST-OF-NAMES>
  TEMPLATE
</xsl:copy>
```

### 필수 속성

없음.

### 선택 속성

- `use-attribute-sets`
  - : 요소이면, 출력 노드에 적용해도 좋을 속성 집합을 나열합니다. 집합의 이름은 공백 문자로 구분해야 합니다.

### 타입

명령, 템플릿 안에 나타남.

### 정의

[XSLT section 7.5, Copying](http://www.w3.org/TR/xslt#copying)

### Gecko 지원

지원함.
