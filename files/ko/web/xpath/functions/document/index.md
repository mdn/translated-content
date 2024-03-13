---
title: document
slug: Web/XPath/Functions/document
---

{{ XsltRef() }}

`document` 함수는 하나 또는 여러 외부 문서에서 노드 집합을 찾고 결과 노드 집합을 반환합니다.

### 문법

```
document(URI [,node-set] )
```

### 인수

- `URI`
  - : 검색하는 문서의 절대 또는 상대 URI. URI는 또한 조각 인식자(fragment identifier)를 포함할지도 모릅니다.
- `node-set`(선택사항)
  - : 반환하게 될 외부 문서의 노드 집합을 가리키는 식.

### 반환

노드 집합.

### 주의

- URI가 조각 인식자를 포함하고 그 조각이 외부 문서에서 인식될 수 있으면, 그 조각은 `node-set`인수식에서 루트로 다룹니다. `node-set`인수를 빼면, 전체 조각을 반환합니다.
- `URI`인수가 노드 집합이고 두 번째 인수가 있으면, 노드 집합의 각 노드를 개별 URI로 평가하고 반환한 노드 집합은 마치 `document` 함수가 여러 번 호출되어 결과 노드 집합이 단일 노드 집합으로 합쳐진 것 같이 됩니다.
- 다른 특정 조건은 지정한 behavior와 함께 있습니다. 자세한 사항은 XSLT 1.0 문서를 보세요.
- URI가 XSL 문서와 호응하기 때문에, `document("")`는 현재 노드의 루트 노드를 반환할 겁니다.

이 함수는 XPath에 더한 XSLT 고유 추가분입니다. 기본 XPath 함수 라이브러리의 일부가 아닙니다.

### 정의

[XSLT 1.0 12.1](http://www.w3.org/TR/xslt#function-document)

### Gecko 지원

지원함.
