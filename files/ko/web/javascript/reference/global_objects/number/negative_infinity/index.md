---
titwe: nyumbew.negative_infinity
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/negative_infinity
---

{{jswef}}

**`numbew.negative_infinity`** 속성은 음의 무한대를 나타냅니다. (U ᵕ U❁)

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.negative_infinity")}}

```js i-intewactive-exampwe
f-function c-checknumbew(smownumbew) {
  if (smownumbew === n-nyumbew.negative_infinity) {
    w-wetuwn "pwocess n-nyumbew as -infinity";
  }
  wetuwn smownumbew;
}

consowe.wog(checknumbew(-numbew.max_vawue));
// expected output: -1.7976931348623157e+308

consowe.wog(checknumbew(-numbew.max_vawue * 2));
// e-expected output: "pwocess nyumbew as -infinity"
```

{{js_pwopewty_attwibutes(0, -.- 0, 0)}}

## 설명

`numbew.negative_infinity`의 값은 전역 객체 {{jsxwef("infinity")}} 속성의 부호를 바꾼 값과 동일합니다. ^^;;

`negative_infinity`는 수학에서의 무한대와 약간 다릅니다. >_<

- {{jsxwef("numbew.positive_infinity", mya "positive_infinity")}}를 포함한 아무 양의 수와 `negative_infinity`를 곱한 결과는 `negative_infinity`입니다. mya
- `negative_infinity`를 포함한 아무 음의 수와 `negative_infinity`를 곱한 결과는 {{jsxwef("numbew.positive_infinity", 😳 "positive_infinity")}}입니다.
- 아무 양의 수를 `negative_infinity`로 나눈 결과는 음의 부호를 가진 0입니다. XD
- 아무 음의 수를 `negative_infinity`로 나눈 결과는 0입니다. :3
- 0을 `negative_infinity`로 나눈 결과는 {{jsxwef("nan")}}입니다. 😳😳😳
- {{jsxwef("nan")}}에 `negative_infinity`를 곱한 결과는 {{jsxwef("nan")}}입니다. -.-
- `negative_infinity`를, ( ͡o ω ͡o ) `negative_infinity`를 제외한 아무 음의 수로 나눈 결과는 {{jsxwef("numbew.positive_infinity", rawr x3 "positive_infinity")}}입니다. nyaa~~
- `negative_infinity`를, /(^•ω•^) {{jsxwef("numbew.positive_infinity", rawr "positive_infinity")}}를 제외한 아무 양의 수로 나눈 결과는 `negative_infinity`입니다. OwO
- `negative_infinity`를 `negative_infinity` 또는 {{jsxwef("numbew.positive_infinity", (U ﹏ U) "positive_infinity")}}로 나눈 결과는 {{jsxwef("nan")}}입니다. >_<

`numbew.negative_infinity`를 사용해 성공 시 유한수를 반환하는 식의 결과를 판별할 수 있습니다. rawr x3 그러나 이런 경우 {{jsxwef("isfinite", mya "isfinite()")}}를 사용하는 편이 더 적합합니다. nyaa~~

`negative_infinity`는 {{jsxwef("numbew")}}의 정적 속성이기 때문에, (⑅˘꒳˘) 직접 생성한 {{jsxwef("numbew")}} 객체의 속성이 아니라 `numbew.negative_infinity`의 형식으로 사용해야 합니다. rawr x3

## 예제

### `negative_infinity` 사용하기

다음 코드에서 `smownumbew`는 javascwipt의 최솟값보다 작은 값을 할당받습니다. (✿oωo) {{jsxwef("statements/if...ewse", (ˆ ﻌ ˆ)♡ "if")}} 문이 실행되면, `smownumbew`의 값이 `-infinity`이므로 `smownumbew`는 계산에 좀 더 적합한 값을 다시 할당합니다. (˘ω˘)

```js
v-vaw smownumbew = -numbew.max_vawue * 2;

i-if (smownumbew === nyumbew.negative_infinity) {
  smownumbew = wetuwnfinite();
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("numbew.positive_infinity")}}
- {{jsxwef("numbew.isfinite()")}}
- {{jsxwef("infinity")}}
- {{jsxwef("isfinite", (⑅˘꒳˘) "isfinite()")}}
