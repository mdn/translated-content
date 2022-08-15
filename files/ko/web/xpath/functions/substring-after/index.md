---
title: substring-after
slug: Web/XPath/Functions/substring-after
tags:
  - XSLT_Reference
translation_of: Web/XPath/Functions/substring-after
---
{{ XsltRef() }}

`substring-after` 함수는 첫 번째 인수에서 두 번째 인수가 나타난 다음의 나머지를 반환합니다.

### 구문

```
substring-after(haystack ,needle )
```

### 인수

- _`haystack`_
  - : 평가할 문자열. 이 문자열의 부분이 반환됩니다.
- _`needle`_
  - : 찾을 부분 문자열.
    _`haystack`_
    에서
    _`needle`_
    의 첫 출현 뒤의 문자열이 반환됩니다.

### 반환

문자열.

### 주의

XSL 예:

```
<xsl:value-of select="substring-after('1999/04/01','/')" />
```

출력

```
04/01
```

### 정의

[XPath 1.0 4.2](http://www.w3.org/TR/xpath#function-substring-after)

### Gecko 지원

지원함.
