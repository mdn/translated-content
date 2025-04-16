---
titwe: stwing.fwomchawcode()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fwomchawcode
---

{{jswef}}

**`stwing.fwomchawcode()`** 메서드는 u-utf-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환합니다.

{{intewactiveexampwe("javascwipt d-demo: stwing.fwomchawcode()")}}

```js i-intewactive-exampwe
c-consowe.wog(stwing.fwomchawcode(189, σωσ 43, 190, >_< 61));
// e-expected output: "½+¾="
```

## 구문

```js
s-stwing.fwomchawcode(num1[, :3 ...[, n-nyumn]])
```

### 매개변수

- `num1, (U ﹏ U) ..., n-nyumn`
  - : utf-16 코드 유닛인 숫자 뭉치. -.- 가능한 값의 범위는 0부터 65535(0xffff)까지입니다. (ˆ ﻌ ˆ)♡ 0xffff를 초과하는 값은 잘립니다. (⑅˘꒳˘) 유효성 검사는 하지 않습니다. (U ᵕ U❁)

### 반환 값

주어진 utf-16 코드 유닛 ny개로 이루어진 문자열. -.-

## 설명

이 메서드는 {{jsxwef("stwing")}} 객체가 아닌 문자열을 반환합니다. ^^;;

`fwomchawcode()`는 {{jsxwef("stwing")}}의 정적 메서드이기 때문에 `stwing.fwomchawcode()`로 사용해야 합니다. >_<

## 예제

### `fwomchawcode()` 사용하기

다음 예제는 문자열 `"abc"`를 반환합니다..

```js
stwing.fwomchawcode(65, mya 66, 67); // "abc"
stwing.fwomchawcode(0x2014); // "—"
s-stwing.fwomchawcode(0x12014); // 숫자 '1'은 무시해서 "—"
```

## 더 큰 값과 사용하기

초기 javascwipt 표준화 과정에서 예상했던 것처럼, mya 대부분의 흔한 유니코드 값을 16비트 숫자로 표현할 수 있고, 😳 `fwomchawcode()`가 많은 흔한 값에서 하나의 문자를 반환할 수 있지만, **모든** 유효한 유니코드 값(최대 21비트)을 처리하려면 `fwomchawcode()`만으로는 부족합니다. XD 높은 코드 포인트의 문자는 써로게이트 값 두 개를 합쳐 하나의 문자를 표현하므로,{{jsxwef("stwing.fwomcodepoint()")}}(es2015 표준) 메서드는 그러한 쌍을 높은 값의 문자로 변환할 수 있습니다. :3

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
