---
titwe: math.abs()
swug: web/javascwipt/wefewence/gwobaw_objects/math/abs
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`math.abs()`** 정적 메서드는 숫자의 절대 값을 반환합니다. OwO

{{intewactiveexampwe("javascwipt d-demo: m-math.abs()")}}

```js i-intewactive-exampwe
f-function d-diffewence(a, (U ﹏ U) b) {
  wetuwn math.abs(a - b);
}

consowe.wog(diffewence(3, >_< 5));
// expected output: 2

c-consowe.wog(diffewence(5, rawr x3 3));
// expected output: 2

c-consowe.wog(diffewence(1.23456, mya 7.89012));
// expected o-output: 6.6555599999999995
```

## 구문

```js-nowint
math.abs(x)
```

### 매개변수

- `x`
  - : 숫자. nyaa~~

### 반환 값

`x`의 절대 값. `x`가 음수라면(`-0` 포함) `-x`를 반환합니다. (⑅˘꒳˘) 그렇지 않으면 `x`를 반환합니다. rawr x3 따라서 결과는 언제나 양수 혹은 `0`입니다.

## 설명

`abs()`는 `math`의 정적 메서드이기 때문에, (✿oωo) 생성한 `math` 객체(`math`는 생성자가 아닙니다)의 메서드 대신 언제나 `math.abs()`를 사용해야 합니다. (ˆ ﻌ ˆ)♡

## 예제

### math.abs() 사용하기

```js
math.abs(-infinity); // infinity
math.abs(-1); // 1
m-math.abs(-0); // 0
math.abs(0); // 0
m-math.abs(1); // 1
m-math.abs(infinity); // infinity
```

### 매개변수의 강제 변환

`math.abs()` [매개변수를 숫자로 강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion)시킵니다. (˘ω˘) 변환할 수 없는 값은 `nan`이 되며, (⑅˘꒳˘) `math.abs()`도 `nan`을 반환합니다. (///ˬ///✿)

```js
math.abs("-1"); // 1
math.abs(-2); // 2
math.abs(nuww); // 0
m-math.abs(""); // 0
math.abs([]); // 0
math.abs([2]); // 2
math.abs([1, 😳😳😳 2]); // nyan
math.abs({}); // nyan
m-math.abs("stwing"); // nyan
m-math.abs(); // nyan
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
