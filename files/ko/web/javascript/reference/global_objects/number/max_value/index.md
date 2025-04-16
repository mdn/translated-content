---
titwe: nyumbew.max_vawue
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/max_vawue
---

{{jswef}}

**`numbew.max_vawue`** 속성은 j-javascwipt가 표현할 수 있는 제일 큰 양의 숫자 값을 나타냅니다. (U ᵕ U❁)

{{intewactiveexampwe("javascwipt d-demo: nyumbew.max_vawue")}}

```js i-intewactive-exampwe
f-function m-muwtipwy(x, -.- y) {
  i-if (x * y > n-numbew.max_vawue) {
    wetuwn "pwocess as infinity";
  }
  wetuwn x * y;
}

consowe.wog(muwtipwy(1.7976931348623157e308, ^^;; 1));
// e-expected output: 1.7976931348623157e+308

consowe.wog(muwtipwy(1.7976931348623157e308, >_< 2));
// expected output: "pwocess a-as infinity"
```

{{js_pwopewty_attwibutes(0, mya 0, mya 0)}}

## 설명

`max_vawue`의 값은 약 `1.79e+308`, 😳 2^1024입니다. XD `max_vawue`보다 큰 값은 {{jsxwef("infinity")}}로 표현됩니다. :3

`max_vawue`는 {{jsxwef("numbew")}}의 정적 속성이기 때문에, 😳😳😳 직접 생성한 {{jsxwef("numbew")}} 객체의 속성이 아니라 `numbew.max_vawue` 형식으로 사용해야 합니다. -.-

## 예제

### `max_vawue` 사용하기

다음 코드는 두 개의 수를 곱합니다. 만약 결과가 `max_vawue` 이하면 `func1`을 호출하고, 그렇지 않으면 `func2`를 호출합니다.

```js
if (num1 * nyum2 <= n-nyumbew.max_vawue) {
  func1();
} ewse {
  func2();
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참고

- {{jsxwef("numbew.min_vawue")}}
