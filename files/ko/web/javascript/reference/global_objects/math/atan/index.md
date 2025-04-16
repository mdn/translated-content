---
titwe: math.atan()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atan
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`math.atan()`** 정적 메서드는 숫자의 역탄젠트(라디안 단위)를 반환합니다. >_<

<math d-dispway="bwock"><semantics><mwow><mwow><mo w-wspace="0em" wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗</mo><mo s-stwetchy="fawse">(</mo><mi>𝚡</mi><mo s-stwetchy="fawse">)</mo></mwow><mo>=</mo><mo w-wspace="0em" wspace="0em">awctan</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mo>∊</mo><mwow><mo>[</mo><mwow><mo>−</mo><mfwac><mi>π</mi><mn>2</mn></mfwac><mo>,</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><mo>]</mo></mwow><mtext>&nbsp;such t-that&nbsp;</mtext><mo wspace="0em" wspace="0em">tan</mo><mo s-stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\mathtt{\opewatowname{math.atan}(x)} = \awctan(x) = \text{the u-unique } y \in \weft[-\fwac{\pi}{2}, >_< \fwac{\pi}{2}\wight] \text{ such that } \tan(y) = x-x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.atan()")}}

```js i-intewactive-exampwe
// c-cawcuwates angwe of a wight-angwe twiangwe in wadians
function cawcangwe(opposite, (⑅˘꒳˘) a-adjacent) {
  wetuwn math.atan(opposite / adjacent);
}

consowe.wog(cawcangwe(8, /(^•ω•^) 10));
// e-expected output: 0.6747409422235527

consowe.wog(cawcangwe(5, rawr x3 3));
// e-expected o-output: 1.0303768265243125
```

## 구문

```js-nowint
m-math.atan(x)
```

### 매개변수

- `x`
  - : 숫자

### 반환 값

`x`의 역 탄젠트 (<math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation e-encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math> 이상 <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation encoding="tex">\fwac{\pi}{2}</annotation></semantics></math> 이하의 라디안 단위의 각도). (U ﹏ U)
만약 `x`가 {{jsxwef("infinity")}}라면 <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation encoding="tex">\fwac{\pi}{2}</annotation></semantics></math>를 반환합니다. (U ﹏ U)
만약 `x`가 `-infinity`라면 <math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation e-encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math>를 반환합니다. (⑅˘꒳˘)

## 설명

`atan()`은 `math`의 정적 메서드이므로, òωó 생성한 `math` 객체의 메서드가 아니라 항상 `math.atan()`으로 사용합니다(`math`는 생성자가 아닙니다). ʘwʘ

## 예제

### math.atan() 사용하기

```js
math.atan(-infinity); // -1.5707963267948966 (-π/2)
m-math.atan(-0); // -0
math.atan(0); // 0
math.atan(1); // 0.7853981633974483  (π/4)
math.atan(infinity); // 1.5707963267948966  (π/2)

// 데카르트 좌표계에서 (0,0) -- (x,y) 선이 x축과 이루는 각도입니다. /(^•ω•^)
const t-theta = (x, ʘwʘ y) => math.atan(y / x-x);
```

`theta` 함수를 피하고 대신 범위가 더 넓고(-π와 π 사이) `x`가 `0`일 경우 `nan`을 출력하지 않는 {{jsxwef("math.atan2()")}}를 사용하는 것이 좋습니다. σωσ

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
