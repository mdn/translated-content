---
title: name
slug: Web/XPath/Functions/name
---

{{ XsltRef() }}

`name` 함수는 인수로 준 노드 집합 안 첫 노드의 QName을 나타내는 문자열을 반환합니다.

### 구문

```
name( [node-set] )
```

### 인수

- `node-set`(선택사항)
  - : 이 노드 집합 안 첫 노드의 QName이 반환됩니다. 이 인수를 빼면, 현재 문맥 노드를 씁니다.

### 반환

노드의 QName을 나타내는 문자열

### 주의

- [QName](http://www.w3.org/TR/REC-xml-names/#NT-QName)은 이름공간 접두사와 지역 이름을 포함하는 노드의 한정된(qualified) 이름입니다.

### 정의

[XPath 1.0 4.1](http://www.w3.org/TR/xpath#function-local-name)

### Gecko 지원

지원함.
