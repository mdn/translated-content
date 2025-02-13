---
title: namespace-uri
slug: Web/XML/XPath/Reference/Functions/namespace-uri
original_slug: Web/XPath/Functions/namespace-uri
---

{{XsltSidebar}}{{ XsltRef() }}

`namespace-uri` 함수는 인수로 준 노드 집합 안 첫 노드의 이름공간 URI를 나타내는 문자열을 반환합니다.

### 구문

```
namespace-uri( [node-set] )
```

### 인수

- `node-set`(선택사항)
  - : 이 노드 집합 안 첫 노드의 이름공간 URI가 반환됩니다. 이 인수를 빼면, 현재 문맥 노드를 씁니다.

### 반환

제공한 노드가 있는 이름공간 URI를 나타내는 문자열.

### 주의

- 만약 제공한 노드가 지정된 이름공간이 없으면, 반환되는 문자열은 빈 문자열입니다.
- 요소와 속성 노드 말고 다른 노드는, 반환되는 문자열이 항상 빈 문자열입니다.

### 정의

[XPath 1.0 4.1](https://www.w3.org/TR/xpath#function-local-name)

### Gecko 지원

지원함.
