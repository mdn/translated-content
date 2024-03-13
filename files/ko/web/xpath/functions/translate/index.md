---
title: translate
slug: Web/XPath/Functions/translate
---

{{ XsltRef() }}

`translate` 함수는 문자열과 번역할 문자 집합을 평가하고 번역된 문자열을 반환합니다.

### 구문

```
translate(string ,abc ,XYZ )
```

### 인수

- `string`
  - : 평가할 문자열.
- `abc`
  - : 바꿀 문자열.
- `XYZ`
  - : 교체에 쓰는 문자열.
    `XYZ`
    에서 첫 문자는
    `string`
    에서 나타나는
    `abc`
    의 첫 문자가 나타날 때마다 교체합니다.

### 반환

번역된 문자열.

### 주의

XPath는 translate 함수가 모든 언어에서 대/소문자 변환에 sufficient solution이 아니다라고 기록합니다. XPath의 future 버전은 대/소문자 변환을 위해 추가 함수를 제공할 지도 모릅니다.

그러나, 이 함수는 현재 문자열을 대/소문자로 변환할 수 있는 함수에 가장 가깝습니다.

예

```
<xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
```

출력

```
THE QUICK BROWN FOX.
```

- 만약
  `abc`
  가
  `XYZ`
  보다 길면,
  `XYZ`
  에서 대응하는 문자가 없는
  `abc`
  의 문자는 출현 때마다 제거됩니다.

예

```
<xsl:value-of select="translate('The quick brown fox.', 'brown', 'red'" />
```

출력

```
The quick red fdx.
```

- 만약
  `XYZ`
  가
  `abc`
  보다 더 많은 문자를 포함하면, 여분 문자는 무시됩니다.

### 정의

[XPath 1.0 4.2](http://www.w3.org/TR/xpath#function-translate)

### Gecko 지원

지원함.
