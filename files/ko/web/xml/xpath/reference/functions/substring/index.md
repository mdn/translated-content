---
title: substring
slug: Web/XML/XPath/Reference/Functions/substring
original_slug: Web/XPath/Functions/substring
---

{{XsltSidebar}}{{ XsltRef() }}

`substring` 함수는 인수로 준 문자열의 부분을 반환합니다.

### 구문

```
substring(string ,start [,length] )
```

### 인수

- `string`
  - : 평가할 문자열.
- `start`
  - : 부분 문자열이 시작하는
    `string`
    안 위치.
- `length`
  (선택사항)
  - : 부분 문자열의 길이. 빼면, 반환되는 문자열은
    `start`
    위치부터
    `string`
    의 끝까지 모든 문자를 포함합니다.

### 반환

문자열.

### 주의

다른 XPath 함수와 마찬가지로, 위치는 0에 기반을 두지 않습니다. 문자열의 첫 문자는 위치가 0이 아니라 1입니다.

### 정의

[XPath 1.0 4.2](https://www.w3.org/TR/xpath#function-substring)

### Gecko 지원

지원함.
