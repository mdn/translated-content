---
title: key
slug: Web/XSLT/Element/key
---

{{ XsltRef() }}

`<xsl:key>` 요소는 `key( )` 함수가 있는 스타일시트 어디서나 쓸 수 있는 이름 붙은 키를 선언합니다.

### 문법

```
<xsl:key name=NAME match=EXPRESSION
  use=EXPRESSION />
```

### 필수 속성

- `name`
  - : 이 키에 이름을 지정합니다. QName이어야 합니다.
- `match`
  - : 이 키를 적용할 수 있는 노드를 정의합니다.
- `use`
  - : 적용가능한 각 노드에 키값을 결정하는데 쓸 수 있는 XPath 식을 지정합니다.

### 선택 속성

없음.

### 타입

최상위, `<xsl:stylesheet>`나 `<xsl:transform>`의 자식이어야 함.

### 정의

[XSLT section 12.2, Keys](http://www.w3.org/TR/xslt#key)

### Gecko 지원

지원함.
