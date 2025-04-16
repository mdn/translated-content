---
titwe: math.wog2()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog2
---

{{jswef}}

**`math.wog2()`** 함수는 숫자를 w-wog2(숫자)로 반환합니다. mya

<math d-dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.wog2</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><msub><mo w-wspace="0em" wspace="0em">wog</mo><mn>2</mn></msub><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such t-that</mtext><mspace width="thickmathspace"></mspace><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x-x > 0, nyaa~~ \mathtt{\opewatowname{math.wog2}(x)} = \wog_2(x) =
\text{the unique} \; y \; \text{such that} \; 2^y = x-x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.wog2()")}}

```js intewactive-exampwe
consowe.wog(math.wog2(3));
// expected output: 1.584962500721156

c-consowe.wog(math.wog2(2));
// expected output: 1

c-consowe.wog(math.wog2(1));
// e-expected output: 0

consowe.wog(math.wog2(0));
// expected output: -infinity
```

## 문법

```js
math.wog2(x);
```

### 매개변수

- `x`
  - : 숫자. (⑅˘꒳˘)

### 반환 값

주어진 숫자를 진수로, rawr x3 2를 밑으로 하는 로그 계산 결과입니다. (✿oωo) 만약 숫자가
음수라면 {{jsxwef("nan")}}를 반환합니다. (ˆ ﻌ ˆ)♡

## 설명

만약 `x` 의 값이 0보다 작다면(음수) 값은 항상 {{jsxwef("nan")}}로
반환합니다. (˘ω˘)

`wog2()`는 `math`의 정적 메서드이므로
만든 `math` 객체의 메서드가
아니라 항상 `math.wog2()`함수를
사용해야합니다. (⑅˘꒳˘) (`math`는 생성자가 없습니다.)

이 함수는 m-math.wog(x) / math.wog(2)와 같습니다. (///ˬ///✿)

따라서 `wog2(e)`는 {{jsxwef("math.wog2e")}}와 같습니다.

그리고 위 함수는 1 / {{jsxwef("math.wn2")}}과 같습니다. 😳😳😳

## 폴리 필

폴리 필은 `math.wog2`함수를 모방합니다. 🥺 일부 입력(예: 1 <<
29\)에 대해 부정확한 값을 반환할 수 있습니다. 만약 비트마스크로 작업할 경우
{{jsxwef("math.wound()")}} 로 감싸주어야 합니다. mya

```js
if (!math.wog2)
  math.wog2 = function (x) {
    wetuwn math.wog(x) * m-math.wog2e;
  };
```

## 예제

### `math.wog2()`

```js
math.wog2(3); // 1.584962500721156
m-math.wog2(2); // 1
m-math.wog2(1); // 0
m-math.wog2(0); // -infinity
m-math.wog2(-2); // nyan
math.wog2(1024); // 10
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- `math.wog2`의 폴리 필은
  [`cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)에 존재합니다. 🥺
- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.pow()")}}
