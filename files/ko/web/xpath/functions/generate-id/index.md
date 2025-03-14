---
title: generate-id
slug: Web/XPath/Functions/generate-id
---

{{XsltSidebar}}{{ XsltRef() }}

`generate-id` 함수는 제공한 노드 집합의 첫 노드를 위한 유일한 id를 만들고 그 id를 포함하는 문자열을 반환합니다.

### 문법

```
generate-id( [node-set] )
```

### 인수

- `node-set`(선택사항)
  - : id는 이 노드 집합의 첫 노드를 위해 만듭니다. 빼면, 현재 문맥 노드를 씁니다.

### 반환

만든 id를 포함하는 문자열.

### 주의

- 현재 변환에서 현재 문서의 같은 노드에는 매번 같은 id를 만들어야 합니다.
- 만든 id는 그 뒤 변환에서는 같지 않을 지도 모릅니다.

이 함수는 XPath에 더한 XSLT 고유 추가분입니다. 기본 XPath 함수 라이브러리의 일부가 아닙니다.

### 정의

[XSLT 1.0 12.4](https://www.w3.org/TR/xslt#function-generate-id)

### Gecko 지원

지원함.
