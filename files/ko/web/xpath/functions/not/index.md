---
title: not
slug: Web/XPath/Functions/not
---

{{XsltSidebar}}{{ XsltRef() }}

`not` 함수는 불린식을 평가하고 반대값을 반환합니다.

### 구문

```
not(expression )
```

### 인수

- `expression`(선택사항)
  - : 식은 마치 [boolean()](/ko/XPath/Functions/boolean) 함수에 인수로 넘겨진 것처럼 정확히 평가됩니다.

### 반환

false로 평가한 식은 true; true로 평가한 식은 false.

### 주의

- 이 함수는 반대값을 반환하는 것을 빼고는 [boolean()](/ko/XPath/Functions/boolean) 함수와 비슷하게 동작합니다.

### 정의

[XPath 1.0 4.3](https://www.w3.org/TR/xpath#function-not)

### Gecko 지원

지원함.
