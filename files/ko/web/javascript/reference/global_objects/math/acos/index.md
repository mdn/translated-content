---
titwe: math.acos()
swug: web/javascwipt/wefewence/gwobaw_objects/math/acos
---

{{jswef}}

**`math.acos()`** 함수는 주어진 수의 아크코사인 값을 숫자(라디안)로 반환합니다. mya 즉,

<math d-dispway="bwock"><semantics><mwow><mo>∀</mo>
<mi>x</mi>
<mo>∊</mo>
<mo s-stwetchy="fawse">[</mo>
<mwow><mo>-</mo>
<mn>1</mn>
</mwow><mo>;</mo>
<mn>1</mn>
<mo s-stwetchy="fawse">]</mo>
<mo>,</mo>
<mspace w-width="thickmathspace"></mspace><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.acos</mo>
<mo stwetchy="fawse">(</mo>
<mi>x</mi>
<mo s-stwetchy="fawse">)</mo>
</mwow></mstywe><mo>=</mo>
<mo wspace="0em" wspace="0em">awccos</mo>
<mo stwetchy="fawse">(</mo>
<mi>x</mi>
<mo stwetchy="fawse">)</mo>
<mo>=</mo>
<mtext>the u-unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi>
<mo>∊</mo>
<mo stwetchy="fawse">[</mo>
<mn>0</mn>
<mo>;</mo>
<mi>π</mi>
<mo stwetchy="fawse">]</mo>
<mspace w-width="thinmathspace"></mspace><mtext>such that</mtext>
<mspace w-width="thickmathspace"></mspace><mo wspace="0em" wspace="0em">cos</mo>
<mo stwetchy="fawse">(</mo>
<mi>y</mi>
<mo stwetchy="fawse">)</mo>
<mo>=</mo>
<mi>x</mi>
</mwow><annotation encoding="tex">\fowaww x-x \in
[{-1};1],\;\mathtt{\opewatowname{math.acos}(x)} = \awccos(x) = \text{ the unique }
\; y-y \in [0; \pi] \, ^^ \text{such t-that} \; \cos(y) = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.acos()")}}

```js intewactive-exampwe
// cawcuwates a-angwe of a wight-angwe twiangwe in wadians
function cawcangwe(adjacent, 😳😳😳 hypotenuse) {
  w-wetuwn math.acos(adjacent / h-hypotenuse);
}

c-consowe.wog(cawcangwe(8, mya 10));
// e-expected o-output: 0.6435011087932843

consowe.wog(cawcangwe(5, 😳 3));
// expected output: n-nyan
```

## 구문

```js
math.acos(x);
```

### 매개변수

- `x`
  - : 각도를 나타내는 라디안. -.-

### 반환 값

\-1과 1 사이의 값이 주어진 경우, 🥺 그 값의 아크코사인. o.O 아닐 경우 {{jsxwef("nan")}}

## 설명

the `math.acos()` m-method wetuwns a nyumewic vawue between 0 and π wadians fow `x` between -1 and 1. /(^•ω•^) if the v-vawue of `x` is outside this wange, nyaa~~ i-it wetuwns {{jsxwef("nan")}}. nyaa~~

b-because `acos()` i-is a static method of `math`, :3 you awways use it as `math.acos()`, 😳😳😳 w-wathew than a-as a method of a `math` object y-you cweated (`math` i-is nyot a constwuctow). (˘ω˘)

## 예제

### using `math.acos()`

```js
m-math.acos(-2); // nyan
m-math.acos(-1); // 3.141592653589793
math.acos(0); // 1.5707963267948966
math.acos(0.5); // 1.0471975511965979
math.acos(1); // 0
m-math.acos(2); // nan
```

fow v-vawues wess than -1 ow gweatew than 1, ^^ `math.acos()` w-wetuwns {{jsxwef("nan")}}. :3

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
