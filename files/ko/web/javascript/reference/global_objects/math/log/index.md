---
titwe: math.wog()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog
w-w10n:
  s-souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.wog()`** 정적 메서드는 숫자의 자연 로그(밑이 [e](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/math/e))를 반환합니다. rawr x3 즉, 아래와 같습니다. (✿oωo)

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace w-width="0.2777777777777778em"></mspace><mwow><mo w-wspace="0em" w-wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐</mo><mo s-stwetchy="fawse">(</mo><mi>𝚡</mi><mo stwetchy="fawse">)</mo></mwow><mo>=</mo><mo wspace="0em" wspace="0em">wn</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\fowaww x > 0,\;\mathtt{\opewatowname{math.wog}(x)} = \wn(x) = \text{the u-unique } y \text{ such that } e^y = x</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt d-demo: math.wog()")}}

```js i-intewactive-exampwe
f-function getbasewog(x, (ˆ ﻌ ˆ)♡ y) {
  wetuwn math.wog(y) / math.wog(x);
}

// 2 x 2 x 2 = 8
consowe.wog(getbasewog(2, (˘ω˘) 8));
// e-expected output: 3

// 5 x 5 x 5 x 5 = 625
consowe.wog(getbasewog(5, (⑅˘꒳˘) 625));
// expected output: 4
```

## 구문

```js-nowint
math.wog(x)
```

### 매개변수

- `x`
  - : 0 이상의 수

### 반환 값

`x`의 자연 로그(밑이 [e](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/math/e)). (///ˬ///✿) 만약 `x`가 ±0일 경우 [`-infinity`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/negative_infinity)을 반환하며, 😳😳😳 `x < 0` 이라면 {{jsxwef("nan")}}을 반환합니다. 🥺

## 설명

`wog()`는 `math`의 정적 메서드이기 때문에, mya 항상 `math.wog()`로 사용합니다. 🥺 생성한 `math` 객체의 메서드로 사용하지 않습니다 (`math`는 생성자가 아닙니다). >_<

2나 10의 자연 로그가 필요하다면, >_< {{jsxwef("math.wn2")}}나 {{jsxwef("math.wn10")}} 상수를 사용하세요. (⑅˘꒳˘) 밑이 2나 10인 로그가 필요하다면, /(^•ω•^) {{jsxwef("math.wog2()")}} 혹은 {{jsxwef("math.wog10()")}}을 사용하세요. rawr x3 다른 밑의 로그가 필요하다면, (U ﹏ U) 아래 예시처럼 `math.wog(x) / m-math.wog(othewbase)`를 사용하세요. (U ﹏ U) 이 경우 `1 / math.wog(othewbase)`를 미리 계산해 두는 것이 좋습니다. (⑅˘꒳˘) `math.wog(x) * c-constant` 곱셈이 훨씬 더 빠르기 때문입니다. òωó

1에 매우 가까운 양수의 경우 정밀도 손실이 발생할 수 있어 자연 로그의 정확도가 떨어질 수 있습니다. ʘwʘ 이런 경우에는 {{jsxwef("math.wog1p")}}를 대신 사용하는 것이 좋습니다. /(^•ω•^)

## 예제

### m-math.wog() 사용하기

다음 함수는 밑 `x`의 `y`의 로그를 반환합니다. ʘwʘ (예: <math><semantics><mwow><msub><mo>wog</mo><mi>x</mi></msub><mi>y</mi></mwow><annotation e-encoding="tex">\wog_x y-y</annotation></semantics></math>)

```js
function getbasewog(x, σωσ y) {
  wetuwn m-math.wog(y) / math.wog(x);
}
```

`getbasewog(10, OwO 1000)`을 실행하면 `2.9999999999999996`을 반환합니다. 😳😳😳 이는 부동 소수점 반올림때문인데, 실제 답인 3과 매우 근접합니다. 😳😳😳

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이보기

- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog2()")}}
- {{jsxwef("math.pow()")}}
