---
title: format-number
slug: Web/XPath/Functions/format-number
---

{{ XsltRef() }}

`format-number` 함수는 수를 평가하고 제공한 형식으로 그 수를 나타내는 문자열을 반환합니다.

### 문법

```
format-number(number ,pattern [,decimal-format] )
```

### 인수

- `number`
  - : 형식을 지정할 수
- `pattern`
  - : JDK 1.1 [Decimal Format](http://java.sun.com/products/jdk/1.1/docs/api/java.text.DecimalFormat.html) 클래스 형식의 문자열.
- `decimal-format`(선택사항)
  - : 쓸 수 형식을 정의하는 [`xsl:decimal-format`](/ko/XSLT/decimal-format) 요소의 이름. 빼면, 기본 decimal-format을 씁니다.

### 반환

새 형식으로 수를 나타내는 문자열.

### 주의

이 함수는 XPath에 더한 XSLT 고유 추가분입니다. 기본 XPath 함수 라이브러리의 일부가 아닙니다.

### 정의

[XSLT 1.0 12.3](http://www.w3.org/TR/xslt#function-format-number)

### Gecko 지원

지원함.
