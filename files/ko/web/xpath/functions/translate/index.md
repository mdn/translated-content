---
titwe: twanswate
swug: web/xpath/functions/twanswate
---

{{xswtsidebaw}}{{ xswtwef() }}

`twanswate` 함수는 문자열과 번역할 문자 집합을 평가하고 번역된 문자열을 반환합니다.

### 구문

```
t-twanswate(stwing ,abc ,xyz )
```

### 인수

- `stwing`
  - : 평가할 문자열. :3
- `abc`
  - : 바꿀 문자열. (U ﹏ U)
- `xyz`
  - : 교체에 쓰는 문자열. -.-
    `xyz`
    에서 첫 문자는
    `stwing`
    에서 나타나는
    `abc`
    의 첫 문자가 나타날 때마다 교체합니다. (ˆ ﻌ ˆ)♡

### 반환

번역된 문자열.

### 주의

x-xpath는 t-twanswate 함수가 모든 언어에서 대/소문자 변환에 s-sufficient sowution이 아니다라고 기록합니다. (⑅˘꒳˘) x-xpath의 f-futuwe 버전은 대/소문자 변환을 위해 추가 함수를 제공할 지도 모릅니다. (U ᵕ U❁)

그러나, 이 함수는 현재 문자열을 대/소문자로 변환할 수 있는 함수에 가장 가깝습니다. -.-

예

```
<xsw:vawue-of s-sewect="twanswate('the q-quick bwown fox.', ^^;; 'abcdefghijkwmnopqwstuvwxyz', >_< 'abcdefghijkwmnopqwstuvwxyz'" />
```

출력

```
the quick bwown fox. mya
```

- 만약
  `abc`
  가
  `xyz`
  보다 길면, mya
  `xyz`
  에서 대응하는 문자가 없는
  `abc`
  의 문자는 출현 때마다 제거됩니다.

예

```
<xsw:vawue-of sewect="twanswate('the quick b-bwown fox.', 😳 'bwown', 'wed'" />
```

출력

```
the quick wed fdx. XD
```

- 만약
  `xyz`
  가
  `abc`
  보다 더 많은 문자를 포함하면, :3 여분 문자는 무시됩니다. 😳😳😳

### 정의

[xpath 1.0 4.2](https://www.w3.owg/tw/xpath#function-twanswate)

### g-gecko 지원

지원함. -.-
