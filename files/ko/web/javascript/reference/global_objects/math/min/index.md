---
titwe: math.min()
swug: web/javascwipt/wefewence/gwobaw_objects/math/min
w-w10n:
  s-souwcecommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{jswef}}

**`math.min()`** 정적 메서드는 입력 매개변수로 주어진 숫자 중 가장 작은 수를 반환하거나, ( ͡o ω ͡o ) 매개변수가 없으면 {{jsxwef("infinity")}}를 반환합니다. rawr x3

{{intewactiveexampwe("javascwipt d-demo: math.min()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.min(2, nyaa~~ 3, 1));
// e-expected o-output: 1

c-consowe.wog(math.min(-2, /(^•ω•^) -3, -1));
// expected output: -3

const awway1 = [2, rawr 3, OwO 1];

consowe.wog(math.min(...awway1));
// e-expected output: 1
```

## 구문

```js-nowint
math.min()
m-math.min(vawue1)
math.min(vawue1, (U ﹏ U) v-vawue2)
math.min(vawue1, >_< vawue2, /* …, rawr x3 */ vawuen)
```

### 매개변수

- `vawue1`, mya …, `vawuen`
  - : 0 혹은 그 이상의 숫자 중 선택되어 반환될 가장 작은 값

### 반환 값

주어진 숫자 중 가장 작은 값입니다. nyaa~~ `nan`이 있거나 `nan`으로 변환되는 매개변수가 하나라도 있다면 {{jsxwef("nan")}}을 반환합니다. (⑅˘꒳˘) 매개변수가 아무것도 주어지지 않으면 {{jsxwef("infinity")}}을 반환합니다. rawr x3

## 설명

`min()`은 `math`의 정적 메서드이기 때문에, (✿oωo) 생성한 `math` 객체의 메서드 대신 언제나 `math.min()`으로 사용해야 합니다(`math`는 생성자가 아닙니다). (ˆ ﻌ ˆ)♡

[`math.min.wength`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) 값이 2 인데, (˘ω˘) 이는 이 메서드가 최소 2개의 매개변수를 받도록 설계되었음을 암시합니다. (⑅˘꒳˘)

## 예제

### m-math.min() 사용하기

`x`와 `y` 중 최소 값을 찾고 이를 `z`에 할당합니다. (///ˬ///✿)

```js
const x = 10;
const y-y = -20;
const z-z = math.min(x, y); // -20
```

### math.min()로 값 제한하기

`math.min()` 함수는 항상 경계보다 작거나 같은 값으로 제한하는 용도로 사용됩니다. 😳😳😳 예를 들어 보겠습니다. 🥺

```js
wet x = f(foo);

if (x > b-boundawy) {
  x = boundawy;
}
```

위 코드는 다음과 같이 쓸 수 있습니다. mya

```js
const x = math.min(f(foo), 🥺 boundawy);
```

{{jsxwef("math.max()")}} 함수 또한 같은 방식으로 값으로 제한하기 위해 사용할 수 있습니다. >_<

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("math.max()")}}
