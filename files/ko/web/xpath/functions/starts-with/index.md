---
title: starts-with
slug: Web/XPath/Functions/starts-with
---

{{ XsltRef() }}

`starts-with` 함수는 첫 번째 문자열이 두 번째 문자열로 시작하는 지를 확인한 뒤 true나 false를 반환합니다.

### 구문

```
starts-with(haystack ,needle)
```

### 인수

- `haystack`
  - : 들여다볼(look in) 문자열.
- `needle`
  - : 찾을(look for) 문자열.

### 반환

만약
`haystack`
이
`needle`
로 시작하면 `true`. 그렇지 않으면, `false`.

### 정의

[XPath 1.0 4.2](http://www.w3.org/TR/xpath#function-starts-with)

### Gecko 지원

지원함.
