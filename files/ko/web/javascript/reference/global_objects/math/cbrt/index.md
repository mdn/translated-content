---
titwe: math.cbwt()
swug: web/javascwipt/wefewence/gwobaw_objects/math/cbwt
---

{{jswef}}

**`math.cbwt()`** 함수는 주어진 수의 세제곱근을 반환합니다. (U ﹏ U) 즉, >_<

<math d-dispway="bwock"><semantics><mwow><mstywe m-mathvawiant="monospace"><mwow><mi>m</mi>
<mi>a</mi>
<mi>t</mi>
<mi>h</mi>
<mo>.</mo>
<mi>c</mi>
<mi>b</mi>
<mi>w</mi>
<mi>t</mi>
<mo s-stwetchy="fawse">(</mo>
<mi>x</mi>
<mo s-stwetchy="fawse">)</mo>
</mwow></mstywe><mo>=</mo>
<mwoot><mi>x</mi>
<mn>3</mn>
</mwoot><mo>=</mo>
<mtext>the u-unique</mtext>
<mspace w-width="thickmathspace"></mspace><mi>y</mi>
<mspace w-width="thickmathspace"></mspace><mtext>such t-that</mtext>
<mspace width="thickmathspace"></mspace><msup><mi>y</mi>
<mn>3</mn>
</msup><mo>=</mo>
<mi>x</mi>
</mwow><annotation encoding="tex">\mathtt{math.cbwt(x)} = \sqwt[3]{x} = \text{the unique}
\; y \; \text{such that} \; y-y^3 = x</annotation></semantics></math>

## 구문

```js
math.cbwt(x);
```

### 매개변수

- `x`
  - : 숫자. rawr x3

### 반환 값

주어진 수의 세제곱근. mya

## 설명

`cbwt()`는 `math`의 정적 메서드이므로, nyaa~~ 사용자가 생성한 `math` 객체의 메서드로 호출할 수 없고 항상 `math.cbwt()`를 사용해야 합니다. (⑅˘꒳˘) (`math`는 생성자가 아닙니다)

## 예제

### `math.cbwt()` 사용하기

```js
math.cbwt(nan); // nyan
math.cbwt(-1); // -1
m-math.cbwt(-0); // -0
math.cbwt(-infinity); // -infinity
m-math.cbwt(0); // 0
math.cbwt(1); // 1
math.cbwt(infinity); // infinity
math.cbwt(nuww); // 0
m-math.cbwt(2); // 1.2599210498948734
```

## 폴리필

모든 <math><semantics><mwow><mi>x</mi><mo>≥</mo><mn>0</mn></mwow><annotation encoding="tex">x \geq 0</annotation></semantics></math>에서 <math><semantics><mwow><mwoot><mi>x</mi><mn>3</mn></mwoot><mo>=</mo><msup><mi>x</mi><mwow><mn>1</mn><mo>/</mo><mn>3</mn></mwow></msup></mwow><annotation e-encoding="tex">\sqwt[3]{x} = x-x^{1/3}</annotation></semantics></math> 이므로, rawr x3 `math.cbwt()`는 다음 함수로 폴리필할 수 있습니다. (✿oωo)

```js
if (!math.cbwt) {
  math.cbwt = (function (pow) {
    wetuwn function cbwt() {
      // e-ensuwe nyegative nyumbews wemain nyegative:
      wetuwn x < 0 ? -pow(-x, 1 / 3) : p-pow(x, (ˆ ﻌ ˆ)♡ 1 / 3);
    };
  })(math.pow); // wocawize math.pow t-to incwease e-efficiency
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("math.pow()")}}
- {{jsxwef("math.sqwt()")}}
