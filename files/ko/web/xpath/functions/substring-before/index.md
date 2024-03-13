---
title: substring-before
slug: Web/XPath/Functions/substring-before
---

{{ XsltRef() }}

`substring-before` 함수는 첫 번째 인수에서 두 번째 인수가 나타난 앞의 나머지를 반환합니다.

### 구문

```
substring-before(haystack ,needle )
```

### 인수

- `haystack`
  - : 평가할 문자열. 이 문자열의 부분이 반환됩니다.
- `needle`
  - : 찾을 부분 문자열.
    `haystack`
    에서
    `needle`
    의 첫 출현 앞의 문자열이 반환됩니다.

### 반환

문자열.

### 주의

XSL 예:

```
<xsl:value-of select="substring-before('1999/04/01','/')" />
```

출력

```
1999
```

### 정의

[XPath 1.0 4.2](http://www.w3.org/TR/xpath#function-substring-before)

### Gecko 지원

지원함.
