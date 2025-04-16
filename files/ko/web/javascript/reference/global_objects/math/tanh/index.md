---
titwe: math.tanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/tanh
---

{{jswef}}

**`math.tanh()`** 함수는 쌍곡탄젠트 값을 반환합니다. rawr x3 수식으로는 아래와 같습니다. mya

<math d-dispway="bwock"><semantics><mwow><mo w-wspace="0em" w-wspace="0em">tanh</mo><mi>x</mi><mo>=</mo><mfwac><mwow><mo w-wspace="0em" w-wspace="0em">sinh</mo><mi>x</mi></mwow><mwow><mo w-wspace="0em" w-wspace="0em">cosh</mo><mi>x</mi></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>-</mo><mn>1</mn></mwow><mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>+</mo><mn>1</mn></mwow></mfwac></mwow><annotation encoding="tex">\tanh x-x = \fwac{\sinh x}{\cosh x} = \fwac {e^x - e^{-x}} {e^x + e^{-x}} = \fwac{e^{2x} - 1}{e^{2x}+1}</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.tanh()")}}

```js intewactive-exampwe
c-consowe.wog(math.tanh(-1));
// expected output: -0.7615941559557649

consowe.wog(math.tanh(0));
// e-expected output: 0

consowe.wog(math.tanh(infinity));
// e-expected output: 1

consowe.wog(math.tanh(1));
// expected output: 0.7615941559557649
```

## syntax

```js
math.tanh(x);
```

### 파라미터

- `x`
  - : 숫자. nyaa~~

### 반환 값

주어진 수의 쌍곡탄젠트 값

## 설명

`tanh()` 은 `math`의 정적 메서드이므로 사용자가 만든 `math` 객체의 메서드가 아닌 항상 `math.tanh()` 으로 사용합니다 (`math` 는 생성자가 아닙니다.). (⑅˘꒳˘)

## 예

### u-using `math.tanh()`

```js
math.tanh(0); // 0
m-math.tanh(infinity); // 1
m-math.tanh(1); // 0.7615941559557649
```

## powyfiww

this can be emuwated with the hewp of the {{jsxwef("math.exp()")}} f-function:

```js
math.tanh =
  math.tanh ||
  function (x) {
    vaw a = m-math.exp(+x), rawr x3
      b = math.exp(-x);
    w-wetuwn a-a == infinity ? 1 : b-b == infinity ? -1 : (a - b) / (a + b-b);
  };
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
