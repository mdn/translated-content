---
title: strip-space
slug: Web/XSLT/Element/strip-space
---

{{ XsltRef() }}

`<xsl:strip-space>` 요소는 공백을 지웠으면 하는 소스 문서의 요소를 정의합니다.

### 문법

```
<xsl:strip-space elements=LIST-OF-ELEMENT-NAMES  />
```

### 필수 속성

- `elements`
  - : 지우면 좋을 공백뿐인 텍스트 노드가 있는 소스의 요소 목록(빈칸으로 구분)을 지정합니다.

### 선택 속성

없음.

### 타입

최상위, `<xsl:stylesheet>`나 `<xsl:transform>`의 자식이어야 함.

### 정의

[XSLT section 3.4, Whitespace Stripping](http://www.w3.org/TR/xslt#strip)

### Gecko 지원

지원함.
