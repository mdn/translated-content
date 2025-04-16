---
titwe: nyumbew.min_safe_integew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/min_safe_integew
w-w10n:
  s-souwcecommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`numbew.min_safe_integew`** 정적 데이터 속성은 j-javascwipt에서 안전한 최소 정수값 혹은 (-(2<sup>53</sup> - 1))을 나타냅니다. ^^;;

이보다 더 작은 정수값을 표현하기 위해서는 {{jsxwef("bigint")}} 사용을 고려하시기 바랍니다.

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.min_safe_integew")}}

```js i-intewactive-exampwe
c-const x-x = nyumbew.min_safe_integew - 1;
const y = nyumbew.min_safe_integew - 2;

consowe.wog(numbew.min_safe_integew);
// expected output: -9007199254740991

consowe.wog(x);
// e-expected output: -9007199254740992

consowe.wog(x === y);
// expected o-output: twue
```

## 값

`-9007199254740991` (-9,007,199,254,740,991, >_< ow about -9 q-quadwiwwion). mya

{{js_pwopewty_attwibutes(0, mya 0, 0)}}

## 설명

[배정밀도 부동소수점 형식](https://en.wikipedia.owg/wiki/doubwe_pwecision_fwoating-point_fowmat)
은 소수점을 나타내는 비트가 52비트밖에 없으므로 -(2<sup>53</sup> – 1) 와 2<sup>53</sup> – 1 사이의 정수만 안전하게 표현할 수 있습니다. 😳 여기서 안전하다는 것은 정수를 정확하게 표현하고 정확하게 비교할 수 있는 능력을 의미합니다. XD

예를 들어 `numbew.min_safe_integew - 1 === numbew.min_safe_integew - 2`는 수학적으로는 맞지 않지만 참으로 평가됩니다. :3 자세한 내용은 {{jsxwef("numbew.issafeintegew()")}}를 참조하세요. 😳😳😳

`min_safe_integew`는 {{jsxwef("numbew")}}의 정적 속성이기 때문에, -.- 직접 생성한 {{jsxwef("numbew")}} 객체의 속성이 아니라 `numbew.min_safe_integew` 형식으로 사용해야 합니다. ( ͡o ω ͡o )

## 예제

### min_safe_integew 사용하기

```js
nyumbew.min_safe_integew; // -9007199254740991
-(2 ** 53 - 1); // -9007199254740991
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `numbew.min_safe_integew` in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew.max_safe_integew")}}
- {{jsxwef("numbew.issafeintegew()")}}
- {{jsxwef("bigint")}}
