---
title: boolean
slug: Web/XML/XPath/Reference/Functions/boolean
original_slug: Web/XPath/Functions/boolean
---

{{XsltSidebar}}{{ XsltRef() }}

`boolean` 함수는 식을 평가하고 참이나 거짓을 반환합니다.

### 문법

```
boolean(expression )
```

### 인수

- `expression`
  - : 평가하는 식. 식은 부울 뿐만 아니라 수와 노드 집합도 참조할 수 있습니다.

### 반환

`expression`을 평가한 뒤 부울값 `true`나 `false`.

### 주의

- 수가 (+/-) 0이나 `NaN`이면 false로 평가합니다. 그렇지 않으면, true로 평가합니다.
- 노드 집합이 비어 있으면 true로 평가합니다.
- 문자열이 비어 있으면 false로 평가합니다. 그렇지 않으면, true로 평가합니다.
- 네 가지 기본 타입 이외의 타입 개체는 그 타입 나름의 방법으로 부울로 변환합니다.

### 정의

[XPath 1.0 4.3](https://www.w3.org/TR/xpath#function-boolean)

### Gecko 지원

지원함.
