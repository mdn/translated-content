---
title: id
slug: Web/XPath/Functions/id
---

{{ XsltRef() }}

`id` 함수는 인수로 준 id와 일치하는 노드를 찾아 그 식별된 노드를 포함하는 노드 집합을 반환합니다.

### 구문

```
id(expression )
```

### 인수

- `expression`

  - : 만약 `expression`이 노드 집합이면, 노드 집합 안 각 노드의 문자열 값은 개별 id로 다룹니다. 반환하는 노드 집합은 그 id와 대응하는 노드입니다.

- 만약 `expression`
  - : 이 문자열이나, 노드 집합이 아닌 어떤 거라면, `expression` 은 공백으로 구분된 id 목록으로 다룹니다. 반환하는 노드 집합은 그 id와 대응하는 노드입니다.

### 반환

그 노드를 포함하는 노드 집합이나 인수로 준 id로 식별된 노드.

### 주의

- XML 문서의 DTD가 어떤 속성이 ID인지를 결정합니다. [XPath 1.0 5.2.1](http://www.w3.org/TR/xpath#unique-id)를 보세요.

### 정의

[XPath 1.0 4.1](http://www.w3.org/TR/xpath#function-id)

### Gecko 지원

부분 지원함.
