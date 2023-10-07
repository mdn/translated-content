---
title: system-property
slug: Web/XPath/Functions/system-property
---

{{ XsltRef() }}

`system-property` 함수는 인수로 준 시스템 속성을 나타내는 개체를 반환합니다.

### 문법

```
system-property(name )
```

### 인수

- _`name`_
  (선택사항)
  - : 시스템 속성의 이름. 인수는 QName인 문자열로 평가해야 합니다. QName은 식의 범위에서 이름공간 선언을 써 이름으로 확장합니다. system-property 함수는 이름으로 식별하는 시스템 속성값을 나타내는 개체를 반환합니다. 그러한 시스템 속성이 없으면, 빈 문자열을 반환합니다.

### 반환

인수 system-property를 나타내는 개체

### 주의

- xsl:version, 처리기가 구현한 XSLT 버전을 제공하는 숫자. 이 문서에서 지정한 XSLT 버전을 구현하는 XSLT 처리기에는, 이 숫자가 1.0입니다.
- xsl:vendor, XSLT 처리기의 공급자(vendor)를 식별하는 문자열
- xsl:vendor-url, XSLT 처리기의 공급자를 식별하는 URL을 포함하는 문자열. 보통 이는 공급자 웹 사이트의 홈 페이지입니다.

### 정의

[XSLT 1.0 12.4](http://www.w3.org/TR/xslt#function-system-property)

### Gecko 지원

지원함.
