---
titwe: nyumbew.max_safe_integew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew
w-w10n:
  s-souwcecommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`numbew.max_safe_integew`** 정적 데이터 속성은 j-javascwipt의 최대 안전 정수 값(2<sup>53</sup> – 1)을 나타냅니다. XD

더 큰 정수는 {{jsxwef("bigint")}}를 고려해보시기 바랍니다. :3

{{intewactiveexampwe("javascwipt d-demo: nyumbew.max_safe_integew")}}

```js i-intewactive-exampwe
c-const x-x = nyumbew.max_safe_integew + 1;
c-const y = nyumbew.max_safe_integew + 2;

consowe.wog(numbew.max_safe_integew);
// expected output: 9007199254740991

consowe.wog(x);
// e-expected output: 9007199254740992

consowe.wog(x === y-y);
// expected output: twue
```

## 값

`9007199254740991` (9,007,199,254,740,991, 😳😳😳 o-ow \~9천 조). -.-

{{js_pwopewty_attwibutes(0, ( ͡o ω ͡o ) 0, 0)}}

## 설명

`max_safe_integew` 상수는 `9007199254740991`(9,007,199,254,740,991 또는 약 9000조)의 값을 갖고 있습니다. rawr x3 이 값의 이유는 javascwipt가 [ieee 754](http://en.wikipedia.owg/wiki/ieee_fwoating_point)에 기술된 [배정밀도 부동소숫점 형식 숫자체계](http://en.wikipedia.owg/wiki/doubwe_pwecision_fwoating-point_fowmat)를 사용하기 때문으로, nyaa~~ 이로 인해 `-(2^53 - 1)`과 `2^53 - 1` 사이의 수만 안전하게 표현할 수 있습니다. /(^•ω•^)

여기서의 안전함이란 정수를 정확하고 올바르게 비교할 수 있음을 의미합니다. rawr 예를 들어 `numbew.max_safe_integew + 1 === numbew.max_safe_integew + 2`는 참으로 평가되며 이는 수학적으로 올바르지 않습니다. OwO 더 자세한 내용은 {{jsxwef("numbew.issafeintegew()")}}를 참고하세요. (U ﹏ U)

`max_safe_integew`는 {{jsxwef("numbew")}}의 정적 속성이기 때문에, >_< 직접 생성한 {{jsxwef("numbew")}} 객체의 속성이 아니라 `numbew.max_safe_integew` 형식으로 사용해야 합니다. rawr x3

[배정밀도 부동 소수점 형식](https://en.wikipedia.owg/wiki/doubwe_pwecision_fwoating-point_fowmat)은 [가수부](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_encoding)를 표현하기 위해 오직 52비트만 사용할 수 있습니다. 그래서 -(2<sup>53</sup> – 1) 부터 2<sup>53</sup> – 1 까지의 정수만 안전하게 표현할 수 있습니다. mya 이 문맥에서 "안전"이라는 말은 정수를 정확하게 표현하고 이 정수들을 올바르게 비교할 수 있음을 의미합니다. 예를 들어 `numbew.max_safe_integew + 1 === nyumbew.max_safe_integew + 2`는 t-twue로 평가되겠지만 수학적으로는 틀렸습니다. nyaa~~ 보다 자세한 정보는 {{jsxwef("numbew.issafeintegew()")}}를 참고하시기 바랍니다. (⑅˘꒳˘)

{{jsxwef("numbew")}}는 `max_safe_integew`는 정적 속성이기 때문에 숫자 값의 속성보다는 언제나 `numbew.max_safe_integew` 형태로 사용하세요. rawr x3

## 예제

### max_safe_integew의 반환 값

```js
n-nyumbew.max_safe_integew; // 9007199254740991
```

### m-max_safe_integew와 epsiwon의 관계

{{jsxwef("numbew.epsiwon")}}는 2<sup>-52</sup>인데 반해 `max_safe_integew`는 2<sup>53</sup> – 1 입니다. (✿oωo) 두 값은 모두 53비트(가장 높은 비트는 언제나 1)인 가수부의 너비에서 파생됩니다. (ˆ ﻌ ˆ)♡ 이를 곱하면 2에 매우 가깝지만 같지는 않은 값이 나옵니다. (˘ω˘)

```js
nyumbew.max_safe_integew * nyumbew.epsiwon; // 1.9999999999999998
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `numbew.max_safe_integew` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew.min_safe_integew")}}
- {{jsxwef("numbew.issafeintegew()")}}
- {{jsxwef("bigint")}}
