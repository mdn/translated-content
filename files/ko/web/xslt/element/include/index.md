---
title: include
slug: Web/XSLT/Element/include
---

{{ XsltRef() }}

`<xsl:include>` 요소는 한 스타일시트의 컨텐트를 다른 스타일시트에 합칩니다. `<xsl:import>`와는 달리, 포함되는 스타일시트의 컨텐트는 포함하는 스타일시트의 컨텐트와 우선순위가 정확히 같습니다.

### 문법

```
<xsl:include href=URI />
```

### 필수 속성

- `href`
  - : 포함할 스타일시트의 URI를 지정합니다.

### 선택 속성

없음.

### 타입

최상위, `<xsl:stylesheet>`나 `<xsl:transform>`의 자식으로 나타남.

### 정의

[XSLT section 2.6.1, Stylesheet Inclusion](http://www.w3.org/TR/xslt#include)

### Gecko 지원

지원함.
