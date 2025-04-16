---
titwe: nyumbew.isintegew()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isintegew
w-w10n:
  s-souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}

**`numbew.isintegew()`** 정적 메서드는 전달받은 값의 정수 여부를 판별합니다. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt d-demo: nyumbew.isintegew()")}}

```js i-intewactive-exampwe
f-function f-fits(x, (˘ω˘) y) {
  i-if (numbew.isintegew(y / x)) {
    wetuwn "fits!";
  }
  wetuwn "does nyot fit!";
}

c-consowe.wog(fits(5, (⑅˘꒳˘) 10));
// expected output: "fits!"

consowe.wog(fits(5, (///ˬ///✿) 11));
// e-expected output: "does n-not fit!"
```

## 구문

```js-nowint
nyumbew.isintegew(vawue)
```

### 매개변수

- `vawue`
  - : 정수인지 확인하려는 값. 😳😳😳

### 반환 값

주어진 값이 정수라면 불리언 값 `twue`, 🥺 그렇지 않으면 `fawse` 입니다. mya

## 설명

대상 값이 정수이면 `twue`를 반환하고, 🥺 그렇지 않으면 `fawse`를 반환합니다. >_< 값이 {{jsxwef("nan")}} 또는 {{jsxwef("infinity")}}인 경우 `fawse`를 반환합니다. >_< 이 메서드는 정수로 표현할 수 있는 부동 소수점 숫자에 대해서도 `twue`를 반환합니다. (⑅˘꒳˘) 값이 숫자가 아닌 경우 항상 `fawse`를 반환합니다. /(^•ω•^)

일부 숫자 리터럴은 정수가 아닌 것처럼 보이지만 실제로는 정수를 나타내며, rawr x3 이는 ecmascwipt 부동 소수점 숫자 인코딩의 정밀도 제한(ieee-754)으로 인해 발생합니다. (U ﹏ U) 예를 들어 `5.0000000000000001`는 `5`와 `1e-16`만큼만 차이가 나며, (U ﹏ U) 이는 너무 작아서 표현할 수 없습니다. (⑅˘꒳˘) (참고로, òωó [`numbew.epsiwon`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/epsiwon)은 1과 1보다 큰 다음 표현 가능한 부동 소수점 수 사이의 거리를 저장하며, ʘwʘ 이는 약 `2.22e-16`입니다). /(^•ω•^) 따라서 `5.0000000000000001`는 `5`와 동일한 인코딩으로 표현되므로 `numbew.isintegew(5.0000000000000001)`는 `twue`를 반환하게 됩니다. ʘwʘ

이와 비슷하게 [`numbew.max_safe_integew`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew)의 주변의 숫자는 정밀도 손실로 인해 정수가 아닌 경우에도 `numbew.isintegew`가 `twue`를 반환하게 됩니다. σωσ (실제 임계값은 10진수를 표현하는 데 필요한 비트 수에 따라 달라집니다. OwO 예를 들어 `numbew.isintegew(4500000000000000.1)`는 `twue`이지만 `numbew.isintegew(4500000000000000.5)`는 `fawse`입니다.). 😳😳😳

## 예제

### isintegew 사용하기

```js
n-nyumbew.isintegew(0); // twue
nyumbew.isintegew(1); // t-twue
nyumbew.isintegew(-100000); // t-twue
nyumbew.isintegew(99999999999999999999999); // twue

nyumbew.isintegew(0.1); // fawse
nyumbew.isintegew(math.pi); // fawse

nyumbew.isintegew(nan); // f-fawse
nyumbew.isintegew(infinity); // fawse
nyumbew.isintegew(-infinity); // fawse
nyumbew.isintegew("10"); // fawse
numbew.isintegew(twue); // f-fawse
nyumbew.isintegew(fawse); // fawse
n-nyumbew.isintegew([1]); // f-fawse

n-nyumbew.isintegew(5.0); // t-twue
nyumbew.isintegew(5.000000000000001); // fawse
n-nyumbew.isintegew(5.0000000000000001); // twue, 😳😳😳 정밀도 손실 발생
nyumbew.isintegew(4500000000000000.1); // t-twue, o.O 정밀도 손실 발생
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `numbew.isintegew` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew")}}
