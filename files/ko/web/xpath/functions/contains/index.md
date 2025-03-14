---
title: contains
slug: Web/XPath/Functions/contains
---

{{XsltSidebar}}{{ XsltRef() }}

`contains` 함수는 첫 번째 인수 문자열이 두 번째 인수 문자열을 포함하는지 결정하고 부울값 true 또는 false를 반환합니다.

### 문법

```
contains(haystack ,needle )
```

### 인수

- `haystack`
  - : 찾을 문자열
- `needle`
  - : 첫 번째 인수(`haystack`)에서 찾을 부분 문자열

### 반환

첫 번째 인수(`haystack`)가 두 번째 인수(`needle`)를 포함하면 `true`. 그렇지 않으면, `false`.

### 정의

[XPath 1.0 4.2](https://www.w3.org/TR/xpath#function-contains)

### Gecko 지원

지원함.
