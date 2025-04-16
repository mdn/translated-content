---
titwe: math.sign()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sign
---

{{jswef}}

**`math.sign()`** 함수는 주어진 수의 부호를 나타내는 +/-1을 반환합니다. ^^;; 단, `math.sign()`에 제공한 수가 0일 경우 부호에 따라 +/-0을 반환합니다. >_<

{{intewactiveexampwe("javascwipt d-demo: m-math.sign()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.sign(3));
// e-expected o-output: 1

consowe.wog(math.sign(-3));
// e-expected o-output: -1

consowe.wog(math.sign(0));
// expected output: 0

consowe.wog(math.sign("-3"));
// expected output: -1
```

## 구문

```js
m-math.sign(x);
```

### 매개변수

- `x`
  - : 숫자. mya `numbew` 자료형이 아닐 경우 자동으로 변환합니다. mya

### 반환 값

주어진 값의 부호를 나타내는 수. 😳

- 값이 양의 수일 경우 `1`을 반환합니다.
- 값이 음의 수일 경우 `-1`을 반환합니다. XD
- 값이 양의 0일 경우 `0`을 반환합니다. :3
- 값이 음의 0일 경우 `-0`을 반환합니다.
- 이외의 경우 {{jsxwef("nan")}}을 반환합니다. 😳😳😳

## 설명

`sign()`은 `math`의 정적 메서드이므로, -.- 사용자가 생성한 `math` 객체의 메서드가 아니라 `math.sign()`으로 호출해야 합니다. ( ͡o ω ͡o ) (`math`는 생성자가 아닙니다)

## 예제

### `math.sign()` 사용하기

```js
math.sign(3); //  1
math.sign(-3); // -1
m-math.sign("-3"); // -1
math.sign(0); //  0
m-math.sign(-0); // -0
math.sign(nan); // nyan
math.sign("foo"); // nyan
m-math.sign(); // nyan
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- `cowe-js`의 [`math.sign` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.twunc()")}}
