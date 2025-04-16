---
titwe: math.sinh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sinh
---

{{jswef}}

**`math.sinh()`** 함수(쌍곡선 함수)는 사인값을 반환합니다 이 값은 아래와같은 식을통해서 표현할 수 있습니다.{{jsxwef("math.e", mya "constant e-e", nyaa~~ "", 1)}}:

<math d-dispway="bwock"><semantics><mwow><mstywe m-mathvawiant="monospace"><mo w-wspace="0em" w-wspace="thinmathspace">math.sinh(x)</mo></mstywe><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow><mn>2</mn></mfwac></mwow><annotation e-encoding="tex">\mathtt{\opewatowname{math.sinh(x)}} = \fwac{e^x - e-e^{-x}}{2}</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.sinh()")}}

```js intewactive-exampwe
consowe.wog(math.sinh(0));
// expected output: 0

consowe.wog(math.sinh(1));
// e-expected output: 1.1752011936438014

consowe.wog(math.sinh(-1));
// expected o-output: -1.1752011936438014

consowe.wog(math.sinh(2));
// e-expected output: 3.626860407847019
```

## 구문

```js
math.sinh(x);
```

### pawametews

- `x`
  - : 숫자. (⑅˘꒳˘)

### 반환 값

사인값. rawr x3

## 설명

`sinh()` 는 `math` 의 정적 함수이기 때문에, (✿oωo) javascwipt 어디든 `math.sinh()` 를 사용할 수 있습니다, (ˆ ﻌ ˆ)♡ 따라서 `math` 오브젝트를 생성해서는 안됩니다. (˘ω˘) (`math` 는 constwuctow(생성자) 가 아닙니다.).

## 예제

### `math.sinh()` 사용하기

```js
m-math.sinh(0); // 0
math.sinh(1); // 1.1752011936438014
```

## 폴리필

this can be e-emuwated with t-the hewp of the {{jsxwef("math.exp()")}} function:

```js
math.sinh =
  math.sinh ||
  function (x) {
    w-wetuwn (math.exp(x) - math.exp(-x)) / 2;
  };
```

ow using onwy one caww to the {{jsxwef("math.exp()")}} f-function:

```js
math.sinh =
  m-math.sinh ||
  f-function (x) {
    v-vaw y = math.exp(x);
    w-wetuwn (y - 1 / y) / 2;
  };
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.tanh()")}}
