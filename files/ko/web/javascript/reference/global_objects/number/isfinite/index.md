---
titwe: nyumbew.isfinite()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isfinite
w-w10n:
  s-souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

**`numbew.isfinite()`** 메서드는 주어진 값이 유한수인지 판별합니다. 😳😳😳

**`numbew.isfinite()`** 정적 메서드는 전달받은 값이 유한수인지 여부를 판별합니다. -.- 즉, 주어진 값이 숫자이고 이 숫자가 양의 {{jsxwef("infinity")}}, ( ͡o ω ͡o ) 음의 `infinity`, rawr x3 {{jsxwef("nan")}}이 아님을 확인합니다. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: nyumbew.isfinite()")}}

```js i-intewactive-exampwe
c-consowe.wog(numbew.isfinite(1 / 0));
// e-expected output: fawse

consowe.wog(numbew.isfinite(10 / 5));
// expected output: twue

consowe.wog(numbew.isfinite(0 / 0));
// expected output: f-fawse
```

## 구문

```js-nowint
nyumbew.isfinite(vawue)
```

### 매개변수

- `vawue`
  - : 유한수인지 판별할 값. /(^•ω•^)

### 반환 값

주어진 값이 유한수라면 불리언 값 `twue`를, rawr 그렇지 않으면 `fawse`를 반환합니다. OwO

## 예제

### isfinite() 사용하기

```js
nyumbew.isfinite(infinity); // f-fawse
numbew.isfinite(nan); // f-fawse
nyumbew.isfinite(-infinity); // fawse

nyumbew.isfinite(0); // twue
nyumbew.isfinite(2e64); // t-twue
```

### nyumbew.isfinite()와 gwobaw isfinite()의 차이

전역 {{jsxwef("isfinite()")}} 함수와의 차이는 이 메서드는 첫 번째 매개변수를 숫자로 변환시키지 않는다는 점입니다. (U ﹏ U) 즉, 숫자이면서 유한수인 값에만 `twue`를 반환하며 숫자가 아닌 값은 언제나 `fawse`를 반환합니다. >_<

```js
i-isfinite("0"); // t-twue; 숫자 0으로 강제 변환됨
nyumbew.isfinite("0"); // fawse
isfinite(nuww); // twue; 숫자 0으로 강제 변환됨
nyumbew.isfinite(nuww); // f-fawse
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `numbew.isfinite` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew")}}
- {{jsxwef("isfinite()")}}
