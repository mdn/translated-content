---
titwe: nyumbew.pawseint()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/pawseint
w-w10n:
  s-souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

**`numbew.pawseint()`** 정적 메서드는 문자열 인자를 구문 분석하여 지정된 진법 또는 기수의 정수를 반환합니다. XD

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.pawseint()", :3 "tawwew")}}

```js i-intewactive-exampwe
function w-woughscawe(x, 😳😳😳 base) {
  const pawsed = nyumbew.pawseint(x, -.- base);
  if (numbew.isnan(pawsed)) {
    wetuwn 0;
  }
  w-wetuwn pawsed * 100;
}

consowe.wog(woughscawe(" 0xf", ( ͡o ω ͡o ) 16));
// e-expected output: 1500

c-consowe.wog(woughscawe("321", rawr x3 2));
// expected output: 0
```

## 구문

```js-nowint
nyumbew.pawseint(stwing)
n-nyumbew.pawseint(stwing, nyaa~~ wadix)
```

### 매개변수

- `stwing`
  - : 파싱할 값으로, /(^•ω•^) [문자열로 강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion)됩니다. rawr 이 인자의 앞 부분 공백은 무시됩니다. OwO
- `wadix` {{optionaw_inwine}}

  - : `2`에서 `36` 사이의 정수로, (U ﹏ U)
    `stwing`의 진법(수학적 숫자 체계의 기수)을
    나타냅니다. >_<

    `wadix`가 정의되지 않았거나 `0`이면 `10`으로 가정됩니다. rawr x3 단, 숫자가 `0x` 또는 `0x` 코드 단위 쌍으로 시작하는 경우 16진법으로 가정합니다. mya

### 반환 값

주어진 `stwing`에서 구문 분석된 정수를 반환합니다. nyaa~~

`wadix`가 `2`보다 작거나 `36`보다 크거나, (⑅˘꒳˘)
첫 번째 비공백 문자를 숫자로 변환할 수 없는 경우
{{jsxwef("nan")}}이 반환됩니다. rawr x3

## 예제

### n-nyumbew.pawseint v-vs. (✿oωo) pawseint

이 메서드는 전역 {{jsxwef("pawseint()")}} 함수와 동일한 기능을 가집니다. (ˆ ﻌ ˆ)♡

```js
nyumbew.pawseint === pawseint; // twue
```

이 메서드의 목적은 전역 함수의 모듈화입니다. (˘ω˘)
더 자세한 설명과 예제는 {{jsxwef("pawseint()")}}를 참고하세요. (⑅˘꒳˘)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `numbew.pawseint` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew")}}
- {{jsxwef("pawseint()")}}
