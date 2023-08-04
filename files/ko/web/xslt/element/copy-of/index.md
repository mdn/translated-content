---
title: copy-of
slug: Web/XSLT/Element/copy-of
---

{{ XsltRef() }}

`<xsl:copy-of>` 요소는 select 속성이 출력 문서에 무엇을 지정하든지 (자손 노드를 포함하여) 깊게 복사(deep copy)합니다.

### 문법

```
<xsl:copy-of select=EXPRESSION />
```

### 필수 속성

- `select`
  - : 복사할 대상을 지정하는 XPath 식을 씁니다.

### 선택 속성

없음.

### 타입

명령, 템플릿 안에 나타남.

### 정의

[XSLT section 11.3, Using Values of Variables and Parameters with xsl:copy-of](http://www.w3.org/TR/xslt#copy-of)

### Gecko 지원

지원함.
