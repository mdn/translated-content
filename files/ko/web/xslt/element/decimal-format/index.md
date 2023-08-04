---
title: decimal-format
slug: Web/XSLT/Element/decimal-format
---

{{ XsltRef() }}

`<xsl:decimal-format>` 요소는
`format-number( )`
함수를 써서 숫자를 문자열로 바꿀 때 쓰는 기호와 문자를 정의합니다.

### 문법

```
<xsl:decimal-format
  name=NAME
  decimal-separator=CHARACTER
  grouping-separator=CHARACTER
  infinity=STRING
  minus-sign=CHARACTER
  NaN=STRING
  percent=CHARACTER
  per-mille=CHARATER
  zero-digit=CHARACTER
  digit=CHARACTER
  pattern-separator=CHARACTER />
```

### 필수 속성

없음.

### 선택 속성

- `name`
  - : 이 형식에 이름을 지정합니다.
- `decimal-separator`
  - : 소숫점 문자를 지정합니다. 기본값은 (`.`)입니다.
- `grouping-separator`
  - : 그룹 구분 문자를 지정합니다. 기본값은 (`,`)입니다.
- `infinity`
  - : 무한대(infinity)를 나타내는데 쓰는 문자열을 지정합니다. 기본값은 "`Infinity`" 문자열입니다.
- `minus-sign`
  - : 빼기 기호 문자를 지정합니다. 기본값은 (`-`)입니다.
- `NaN`
  - : 값이 숫자가 아닐 때 쓰는 문자열을 지정합니다. 기본값은 "`NaN`" 문자열입니다.
- `percent`
  - : 백분율(percentage) 기호 문자를 지정합니다. 기본값은 (`%`)입니다.
- `per-mille`
  - : 천분율(per thousand) 문자를 지정합니다. 기본값은 (`‰`)입니다.
- `zero-digit`
  - : 숫자 0으로 쓸 문자를 지정합니다. 기본값은 (`0`)입니다.
- `digit`
  - : 형식 패턴에서 숫자(digit)를 나타내는데 쓰는 문자를 지정합니다. 기본값은 (`#`)입니다.
- `pattern-separator`
  - : 형식 패턴에서 양수와 음수 부분패턴을 구분하는 문자를 지정합니다. 기본값은 (`;`)입니다.

### 타입

최상위, `<xsl:stylesheet>`나 `<xsl:transform>`의 자식이어야 함.

### 정의

[XSLT section 12.3, Number Formatting](http://www.w3.org/TR/xslt#format-number)

### Gecko 지원

Mozilla 1.0과 Netscape 7.0 현재 지원함.
