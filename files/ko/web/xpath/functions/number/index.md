---
title: number
slug: Web/XPath/Functions/number
---

{{XsltSidebar}}{{ XsltRef() }}

`number` 함수는 개체를 숫자로 변환하고 그 숫자를 반환합니다.

### 구문

```
number( [object] )
```

### 인수

- `object`
  (optional)
  - : 숫자로 변환할 개체.

### 반환

개체를 변환한 뒤 결과 숫자.

### 주의

- 문자열은 숫자 앞 문자열의 앞 공백 문자를 떼고(strip) 숫자 뒤의 것을 무시하여 숫자로 변환됩니다. 문자열이 패턴과 일치하지 않으면, 그 문자열은 NaN으로 변환됩니다.
- Boolean true는 1로 false는 0으로 변환됩니다.
- 노드 집합은 먼저 as if by a call to the string function 문자열로 변환되고 나서 같은 식으로 문자열 인수로 변환됩니다.
- 네 가지 기본 타입 말고 다른 타입의 개체는 그 타입에 의존하는 방법으로 숫자로 변환됩니다.

### 정의

[XPath 1.0 4.4](https://www.w3.org/TR/xpath#function-number)

### Gecko 지원

지원함.
