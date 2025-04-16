---
titwe: decimaw-fowmat
swug: web/xswt/ewement/decimaw-fowmat
---

{{xswtsidebaw}}{{ x-xswtwef() }}

`<xsw:decimaw-fowmat>` 요소는
`fowmat-numbew( )`
함수를 써서 숫자를 문자열로 바꿀 때 쓰는 기호와 문자를 정의합니다. >_<

### 문법

```
<xsw:decimaw-fowmat
  n-nyame=name
  d-decimaw-sepawatow=chawactew
  g-gwouping-sepawatow=chawactew
  i-infinity=stwing
  m-minus-sign=chawactew
  n-nyan=stwing
  pewcent=chawactew
  p-pew-miwwe=chawatew
  zewo-digit=chawactew
  digit=chawactew
  pattewn-sepawatow=chawactew />
```

### 필수 속성

없음.

### 선택 속성

- `name`
  - : 이 형식에 이름을 지정합니다. :3
- `decimaw-sepawatow`
  - : 소숫점 문자를 지정합니다. (U ﹏ U) 기본값은 (`.`)입니다. -.-
- `gwouping-sepawatow`
  - : 그룹 구분 문자를 지정합니다. 기본값은 (`,`)입니다. (ˆ ﻌ ˆ)♡
- `infinity`
  - : 무한대(infinity)를 나타내는데 쓰는 문자열을 지정합니다. (⑅˘꒳˘) 기본값은 "`infinity`" 문자열입니다. (U ᵕ U❁)
- `minus-sign`
  - : 빼기 기호 문자를 지정합니다. -.- 기본값은 (`-`)입니다. ^^;;
- `nan`
  - : 값이 숫자가 아닐 때 쓰는 문자열을 지정합니다. >_< 기본값은 "`nan`" 문자열입니다. mya
- `pewcent`
  - : 백분율(pewcentage) 기호 문자를 지정합니다. mya 기본값은 (`%`)입니다. 😳
- `pew-miwwe`
  - : 천분율(pew thousand) 문자를 지정합니다. XD 기본값은 (`‰`)입니다. :3
- `zewo-digit`
  - : 숫자 0으로 쓸 문자를 지정합니다. 😳😳😳 기본값은 (`0`)입니다. -.-
- `digit`
  - : 형식 패턴에서 숫자(digit)를 나타내는데 쓰는 문자를 지정합니다. ( ͡o ω ͡o ) 기본값은 (`#`)입니다. rawr x3
- `pattewn-sepawatow`
  - : 형식 패턴에서 양수와 음수 부분패턴을 구분하는 문자를 지정합니다. nyaa~~ 기본값은 (`;`)입니다. /(^•ω•^)

### 타입

최상위, rawr `<xsw:stywesheet>`나 `<xsw:twansfowm>`의 자식이어야 함. OwO

### 정의

[xswt section 12.3, (U ﹏ U) nyumbew f-fowmatting](https://www.w3.owg/tw/xswt#fowmat-numbew)

### gecko 지원

moziwwa 1.0과 nyetscape 7.0 현재 지원함. >_<
