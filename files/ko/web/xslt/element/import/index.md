---
title: import
slug: Web/XSLT/Element/import
---

{{ XsltRef() }}

`<xsl:import>` 요소는 한 스타일시트의 컨텐트를 다른 스타일시트로 가져오는 역할을 하는 최상위 요소입니다. 대체로, 가져올 스타일시트의 컨텐트는 가져오는 스타일시트의 컨텐트보다 가져오기 우선순위가 낮습니다. 이는 포함되는 스타일시트의 컨텐트가 포함하는 스타일시트의 컨텐트와 우선순위가 정확히 같은 `<xsl:include>`와는 뚜렷이 다릅니다.

### 문법

```
<xsl:import href=URI  />
```

### 필수 속성

- `href`
  - : 가져올 스타일시트의 URI를 지정합니다.

### 선택 속성

없음.

### 타입

최상위, 가져오는 스타일시트 안 `<xsl:stylesheet>`나 `<xsl:transform>`의 자식 가운데 가장 앞에 나타나야 함.

### 정의

[XSLT section 2.6.2, Stylesheet Import](http://www.w3.org/TR/xslt#import)

### Gecko 지원

Mozilla 1.0 현재 최상위 변수와 매개변수에 문제가 조금 있지만 대부분 지원함.
