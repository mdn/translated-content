---
title: namespace-alias
slug: Web/XSLT/Element/namespace-alias
---

{{ XsltRef() }}

`<xsl:namespace-alias>` 요소는 스타일시트 이름공간을 출력 트리의 다른 이름공간으로 매기는(map) 데 드물게 쓰는 방안(device)입니다. 이 요소의 가장 평범한 쓰임은 다른 스타일시트로부터 스타일시트를 만드는 것입니다. 보통 `xsl:`가 접두사로 붙은 (결과 트리에 단순히 복사해도 좋을) LRE(literal result element)를 처리기가 오해하는 것을 막기 위해, 결과 트리의 XSLT 이름공간에 적당하게 도로 다시 바꿀 임시 이름공간을 할당합니다.

### 문법

```
<xsl:namespace-alias stylesheet-prefix=NAME result-prefix=NAME />
```

### 필수 속성

- `stylesheet-prefix`
  - : 임시 이름공간을 지정합니다.
- `result-prefix`
  - : 결과 트리에 사용하길 바라는 이름공간을 지정합니다.

### 선택 속성

없음.

### 타입

최상위, `<xsl:stylesheet>`나 `<xsl:transform>`의 자식이어야 함.

### 정의

[XSLT section 7.1.1, Literal Result Elements](http://www.w3.org/TR/xslt#literal-result-element)

### Gecko 지원

이번에 지원 안 함.
