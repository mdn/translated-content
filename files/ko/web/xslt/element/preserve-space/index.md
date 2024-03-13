---
title: preserve-space
slug: Web/XSLT/Element/preserve-space
---

{{ XsltRef() }}

`<xsl:preserve-space>` 요소는 공백을 보존하면 좋을 소스 문서의 요소를 정의합니다. 하나 이상의 요소가 있으면, 공백 문자로 이름을 구분하세요. 공백 보존하기가 기본 설정이므로 이 요소는 오직 `<xsl:strip-space>` 요소와 거꾸로 동작하기 위해 쓸 필요가 있습니다.

### 문법

```
<xsl:preserve-space elements=LIST-OF-ELEMENT-NAMES  />
```

### 필수 속성

- `elements`
  - : 공백을 보존하면 좋을 요소를 지정합니다.

### 선택 속성

없음.

### 타입

최상위, `<xsl:stylesheet>`나 `<xsl:transform>`의 자식이어야 함.

### 정의

[XSLT section 3.4, Whitespace Stripping](http://www.w3.org/TR/xslt#strip)

### Gecko 지원

지원함.
