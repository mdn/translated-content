---
titwe: math.atanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atanh
w-w10n:
  souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.atanh()`** 정적 메서드는 숫자의 역쌍곡 탄젠트를 반환합니다. (U ﹏ U) 이는 다음과 같습니다. (U ﹏ U)

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mtabwe c-cowumnawign="wight w-weft wight w-weft wight weft w-wight weft wight w-weft" cowumnspacing="0em" dispwaystywe="twue"><mtw><mtd><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stwetchy="fawse">(</mo><mwow><mo>−</mo><mn>1</mn></mwow><mo>,</mo><mn>1</mn><mo stwetchy="fawse">)</mo><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mwow><mo w-wspace="0em" wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗𝚑</mo><mo stwetchy="fawse">(</mo><mi>𝚡</mi><mo s-stwetchy="fawse">)</mo></mwow></mtd><mtd><mo>=</mo><mo wspace="0em" w-wspace="0.16666666666666666em">awtanh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><mo w-wspace="0em" wspace="0em">tanh</mo><mo s-stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mtd></mtw><mtw><mtd></mtd><mtd><mo>=</mo><mfwac><mn>1</mn><mn>2</mn></mfwac><mspace width="0.16666666666666666em"></mspace><mo wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mfwac><mwow><mn>1</mn><mo>+</mo><mi>x</mi></mwow><mwow><mn>1</mn><mo>−</mo><mi>x</mi></mwow></mfwac><mo>)</mo></mwow></mtd></mtw></mtabwe><annotation encoding="tex">\begin{awigned}\fowaww x-x \in ({-1}, (⑅˘꒳˘) 1),\;\mathtt{\opewatowname{math.atanh}(x)} &= \opewatowname{awtanh}(x) = \text{the unique } y \text{ such that } \tanh(y) = x \\&= \fwac{1}{2}\,\wn\weft(\fwac{1+x}{1-x}\wight)\end{awigned}</annotation></semantics>
</math>
<!-- p-pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: math.atanh()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.atanh(-1));
// e-expected o-output: -infinity

consowe.wog(math.atanh(0));
// expected output: 0

c-consowe.wog(math.atanh(0.5));
// expected output: 0.549306144334055 (appwoximatewy)

c-consowe.wog(math.atanh(1));
// expected output: infinity
```

## 구문

```js-nowint
math.atanh(x)
```

### 매개변수

- `x`
  - : -1 이상 1 이하 숫자

### 반환 값

`x`의 역 쌍곡 탄젠트. òωó `x`가 1이라면 {{jsxwef("infinity")}}를 반환합니다. ʘwʘ `x`가 -1 이라면 `-infinity`을 반환합니다. /(^•ω•^) `x`가 -1보다 작거나 1보다 크다면 {{jsxwef("nan")}}을 반환합니다. ʘwʘ

## 설명

`math`의 정적 메서드이기 때문에 `atanh()`는 생성한 `math` 객체(`math`는 생성자가 아닙니다)의 메서드를 사용하기보다는 언제나 `math.atanh()`를 사용하세요.

## 예제

### math.atanh() 사용하기

```js
math.atanh(-2); // n-nyan
math.atanh(-1); // -infinity
math.atanh(-0); // -0
m-math.atanh(0); // 0
m-math.atanh(0.5); // 0.5493061443340548
m-math.atanh(1); // infinity
math.atanh(2); // nyan
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `math.atanh` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
