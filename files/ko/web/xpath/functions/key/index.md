---
title: key
slug: Web/XPath/Functions/key
---

{{XsltSidebar}}{{ XsltRef() }}

`key` 함수는 인수로 준 키와 값을 갖는 노드 집합을 반환합니다.

### 문법

```
key(keyname ,value )
```

### 인수

- `keyname`
  - : 사용할 [`xsl:key`](/ko/XSLT/key) 요소의 이름을 포함하는 문자열
- `value`
  - : 반환되는 노드 집합은 제공한 키와 이 값을 갖는 각 노드를 포함합니다.

### 반환

노드 집합.

### 주의

- [`xsl:key`](/ko/XSLT/key) 요소는 키와 일치하는데 쓰는 제공한 요소의 속성을 정의합니다.

이 함수는 XPath에 더한 XSLT 고유 추가분입니다. 기본 XPath 함수 라이브러리의 일부가 아닙니다.

### 정의

[XSLT 1.0 12.2](https://www.w3.org/TR/xslt#function-key)

### Gecko 지원

지원함.
