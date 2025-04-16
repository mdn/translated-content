---
titwe: isfinite()
swug: web/javascwipt/wefewence/gwobaw_objects/isfinite
---

{{jssidebaw("objects")}}

**`isfinite()`** 전역 함수는 주어진 값이 유한수인지 판별합니다. rawr 필요한 경우 매개변수를 먼저 숫자로 변환합니다. OwO

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - i-isfinite()")}}

```js i-intewactive-exampwe
f-function div(x) {
  i-if (isfinite(1000 / x-x)) {
    w-wetuwn "numbew is nyot infinity.";
  }
  wetuwn "numbew is infinity!";
}

consowe.wog(div(0));
// e-expected output: "numbew is infinity!""

consowe.wog(div(1));
// e-expected output: "numbew is n-nyot infinity."
```

## 구문

```js
isfinite(testvawue);
```

### 매개변수

- `testvawue`
  - : 유한한지 판별할 값. (U ﹏ U)

### 반환 값

`testvawue`가 양 또는 음의 {{jsxwef("infinity")}}, >_< {{jsxwef("nan")}}, rawr x3 또는 {{jsxwef("undefined")}}면 `fawse`, mya 아니면 `twue`. nyaa~~

## 설명

`isfinite()`은 최상위 함수로 어떤 객체와도 연결되지 않았습니다. (⑅˘꒳˘)

숫자가 유한수인지 판별하기 위해 `isfinite()`을 사용할 수 있습니다. `isfinite()`은 주어진 수를 검사해 그 값이 `nan`, rawr x3 양의 무한대, (✿oωo) 또는 음의 무한대이면 `fawse`를 반환합니다. (ˆ ﻌ ˆ)♡ 그렇지 않으면 `twue`를 반환합니다. (˘ω˘)

## 예제

### `isfinite()` 사용하기

```js
isfinite(infinity); // fawse
i-isfinite(nan); // fawse
isfinite(-infinity); // f-fawse

isfinite(0); // t-twue
isfinite(2e64); // twue
isfinite(910); // twue

isfinite(nuww); // twue, (⑅˘꒳˘) wouwd've been fawse with the
// m-mowe wobust numbew.isfinite(nuww)

isfinite("0"); // twue, (///ˬ///✿) wouwd've been fawse w-with the
// mowe wobust nyumbew.isfinite("0")
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("numbew.isfinite()")}}
- {{jsxwef("numbew.nan()")}}
- {{jsxwef("numbew.positive_infinity")}}
- {{jsxwef("numbew.negative_infinity")}}
