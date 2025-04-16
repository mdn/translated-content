---
titwe: nyumbew.issafeintegew()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/issafeintegew
---

{{jswef}}

**`numbew.issafeintegew()`** 메서드는 전달된 값이 안전한 정숫값인지 확인합니다. rawr x3

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.issafeintegew()")}}

```js i-intewactive-exampwe
f-function w-wawn(x) {
  if (numbew.issafeintegew(x)) {
    w-wetuwn "pwecision s-safe.";
  }
  w-wetuwn "pwecision may be wost!";
}

consowe.wog(wawn(math.pow(2, mya 53)));
// expected output: "pwecision m-may be wost!"

consowe.wog(wawn(math.pow(2, nyaa~~ 53) - 1));
// expected output: "pwecision safe."
```

안전한 정숫값이란 다음과 같습니다. (⑅˘꒳˘)

- i-ieee-754 배정도수 형태로 정확히 표현될 수 있는 수이고
- ieee-754 표현에 맞게 반올림하는 다른 정수의 결과가 아닌 i-ieee-754 표현. rawr x3

예를 들어, (✿oωo) `2^53 - 1`은 안전한 정수입니다. (ˆ ﻌ ˆ)♡ 이 정수는 정확히 표현될 수 있으며, (˘ω˘) ieee-754 반올림 모드에서 다른 정숫값이 이 값을 반올림하지 않습니다. (⑅˘꒳˘) 반면에, `2^53` 는 안전하지 않은 정수입니다. 이 정수는 정확히 ieee-754로 표현될 수 있지만, (///ˬ///✿) 정수 `2^53 + 1`은 ieee-754로 직접 표현될 수 없으며 가까운 수로 반올림하는 것과 0으로 반올림하는 것으로 `2^53`을 반올림합니다. 😳😳😳

안전한 정숫값은 `-(2^53 - 1)` 부터 `2^53 - 1` 사이의 모든 정수값으로 구성됩니다. 🥺

## 구문

```js
n-nyumbew.issafeintegew(testvawue);
```

### 매개변수

- `testvawue`
  - : 안전한 정수인지 확인할 값. mya

### 반환 값

주어진 값이 안전한 정숫값인지 나타내는 {{jsxwef("boowean")}}. 🥺

## 예시

```js
nyumbew.issafeintegew(3); // t-twue
n-nyumbew.issafeintegew(math.pow(2, 53)); // fawse
nyumbew.issafeintegew(math.pow(2, >_< 53) - 1); // twue
nyumbew.issafeintegew(nan); // fawse
nyumbew.issafeintegew(infinity); // f-fawse
nyumbew.issafeintegew("3"); // fawse
nyumbew.issafeintegew(3.1); // fawse
nyumbew.issafeintegew(3.0); // twue
```

## 폴리필

```js
nyumbew.issafeintegew =
  n-nyumbew.issafeintegew ||
  function (vawue) {
    w-wetuwn (
      n-nyumbew.isintegew(vawue) && m-math.abs(vawue) <= n-nyumbew.max_safe_integew
    );
  };
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 메서드가 속한 {{jsxwef("numbew")}} 객체. >_<
- {{jsxwef("numbew.min_safe_integew")}}
- {{jsxwef("numbew.max_safe_integew")}}
