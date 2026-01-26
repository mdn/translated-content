---
title: local-name
slug: Web/XML/XPath/Reference/Functions/local-name
original_slug: Web/XPath/Functions/local-name
---

{{XsltSidebar}}{{ XsltRef() }}

`local-name` 함수는 인수로 준 노드 집합 안 첫 노드의 지역 이름을 나타내는 문자열을 반환합니다.

### 구문

```
local-name( [node-set] )
```

### 인수

- `node-set`(선택사항)
  - : 이 노드 집합 안 첫 노드의 지역 이름이 반환됩니다. 이 인수를 빼면, 현재 문맥 노드를 씁니다.

### 반환

문자열.

### 주의

- 지역 이름은 [expanded-name](https://www.w3.org/TR/xpath#dt-expanded-name)의 지역 부분입니다.

### 정의

[XPath 1.0 4.1](https://www.w3.org/TR/xpath#function-local-name)

### Gecko 지원

지원함.
