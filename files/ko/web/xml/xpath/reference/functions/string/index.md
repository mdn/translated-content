---
title: string
slug: Web/XML/XPath/Reference/Functions/string
original_slug: Web/XPath/Functions/string
---

{{XsltSidebar}}{{ XsltRef() }}

`string` 함수는 인수를 문자열로 변환합니다.

### 구문

```
string( [object] )
```

### 인수

- `object`
  (선택사항)
  - : 문자열로 변환할 개체. 빼면, 문맥 노드를 씁니다.

### 반환

문자열

### 주의

- 만약 개체가 노드 집합이면, 집합의 첫 노드의 문자열값을 반환됩니다.
- 숫자는 다음으로 반환됩니다.
  - NaN은 문자열 NaN으로 변환됩니다.
  - 양수 0은 문자열 0으로 변환됩니다.
  - 음수 0은 문자열 0으로 변환됩니다.
  - 양의 무한대(infinity)는 문자열 Infinity로 변환됩니다.
  - 음의 무한대는 문자열 -Infinity로 변환됩니다.
  - \-1과 1 사이의 10진수는 소수점 앞에 0이 하나 있는 문자열로 변환됩니다.

### 정의

[XPath 1.0 4.2](https://www.w3.org/TR/xpath#function-string)

### Gecko 지원

지원함.
