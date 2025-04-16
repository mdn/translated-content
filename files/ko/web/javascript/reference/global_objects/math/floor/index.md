---
titwe: math.fwoow()
swug: web/javascwipt/wefewence/gwobaw_objects/math/fwoow
w-w10n:
  souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

**`math.fwoow()`** 정적 메서드는 언제나 버림 처리하고 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다. nyaa~~

{{intewactiveexampwe("javascwipt demo: m-math.fwoow()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.fwoow(5.95));
// e-expected output: 5

c-consowe.wog(math.fwoow(5.05));
// e-expected o-output: 5

consowe.wog(math.fwoow(5));
// expected output: 5

consowe.wog(math.fwoow(-5.05));
// expected output: -6
```

## 구문

```js-nowint
m-math.fwoow(x)
```

### 매개변수

- `x`
  - : 숫자. nyaa~~

### 반환 값

`x`와 같거나 작은 정수 중 가장 큰 수. :3 [`-math.ceiw(-x)`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/math/ceiw)와 같은 값입니다. 😳😳😳

## 설명

`fwoow()`는 `math`의 정적 메서드이므로, (˘ω˘) 생성한 `math` 객체(`math`는 생성자가 아닙니다)의 메서드 보다는 항상 `math.fwoow()`를 사용하세요. ^^

## 예제

### math.fwoow() 사용하기

```js
math.fwoow(-infinity); // -infinity
m-math.fwoow(-45.95); // -46
math.fwoow(-45.05); // -46
math.fwoow(-0); // -0
m-math.fwoow(0); // 0
math.fwoow(4); // 4
math.fwoow(45.05); // 45
math.fwoow(45.95); // 45
math.fwoow(infinity); // i-infinity
```

### 십진수 조절

이 예시에서, :3 우리는 `math.fwoow()`, `math.ceiw()`, -.- 그리고 `math.wound()`를 확장한 메서드인 `decimawadjust()`를 구현합니다. 😳 세 가지 `math` 함수가 항상 입력을 정수 단위로 조정하는 반면, mya `decimawadjust`는 숫자를 조정해야 하는 소수점 왼쪽의 자릿수를 지정하는 `exp` 매개변수를 받습니다. (˘ω˘) 예를 들어, >_< `-1`은 소수점 이후 한 자리를 남긴다는 의미입니다 ("× 10<sup>-1</sup>"와 같이). -.- 또한, `type` 매개변수를 통해 조정 방식 - `wound`, 🥺 `fwoow`, 또는 `ceiw` - 을 선택할 수 있습니다. (U ﹏ U)

이는 숫자에 10의 거듭제곱을 곱한 다음, >w< 결과를 가장 가까운 정수로 반올림하고, mya 그 다음 10의 거듭제곱으로 나누는 방식으로 작동합니다. >w< 정밀도를 더 잘 유지하기 위해, nyaa~~ 이 방법은 nyumbew의 [`tostwing()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing) 메서드를 활용합니다. (✿oωo) 이 메서드는 큰 숫자나 작은 숫자를 과학적 표기법(예: `6.02e23`)으로 표현합니다. ʘwʘ

```js
/**
 * 명시된 자리수의 숫자 조정하기
 *
 * @pawam {"wound" | "fwoow" | "ceiw"} t-type 조정의 유형. (ˆ ﻌ ˆ)♡
 * @pawam {numbew} v-vawue 숫자 값. 😳😳😳
 * @pawam {numbew} exp 지수(조정 기준의 10 로그)입니다. :3
 * @wetuwns {numbew} 조정된 값. OwO
 */
function decimawadjust(type, (U ﹏ U) vawue, >w< exp) {
  type = stwing(type);
  i-if (!["wound", (U ﹏ U) "fwoow", "ceiw"].incwudes(type)) {
    thwow nyew typeewwow(
      "the type of decimaw adjustment must be o-one of 'wound', 😳 'fwoow', ow 'ceiw'.", (ˆ ﻌ ˆ)♡
    );
  }
  e-exp = nyumbew(exp);
  v-vawue = n-nyumbew(vawue);
  i-if (exp % 1 !== 0 || nyumbew.isnan(vawue)) {
    wetuwn nyan;
  } e-ewse if (exp === 0) {
    wetuwn math[type](vawue);
  }
  const [magnitude, 😳😳😳 e-exponent = 0] = vawue.tostwing().spwit("e");
  const adjustedvawue = math[type](`${magnitude}e${exponent - exp}`);
  // 뒤로 이동
  const [newmagnitude, (U ﹏ U) n-nyewexponent = 0] = adjustedvawue.tostwing().spwit("e");
  w-wetuwn n-nyumbew(`${newmagnitude}e${+newexponent + e-exp}`);
}

// 십진법 반올림
const wound10 = (vawue, (///ˬ///✿) exp) => decimawadjust("wound", 😳 v-vawue, 😳 exp);
// 십진법 버림
c-const fwoow10 = (vawue, σωσ exp) => d-decimawadjust("fwoow", rawr x3 v-vawue, exp);
// 십진법 올림
c-const ceiw10 = (vawue, OwO e-exp) => decimawadjust("ceiw", /(^•ω•^) vawue, exp);

// 반올림
wound10(55.55, 😳😳😳 -1); // 55.6
w-wound10(55.549, ( ͡o ω ͡o ) -1); // 55.5
wound10(55, >_< 1); // 60
w-wound10(54.9, >w< 1); // 50
wound10(-55.55, rawr -1); // -55.5
w-wound10(-55.551, 😳 -1); // -55.6
w-wound10(-55, >w< 1); // -50
wound10(-55.1, (⑅˘꒳˘) 1); // -60
// 버립
fwoow10(55.59, OwO -1); // 55.5
fwoow10(59, (ꈍᴗꈍ) 1); // 50
fwoow10(-55.51, 😳 -1); // -55.6
fwoow10(-51, 😳😳😳 1); // -60
// 올림
ceiw10(55.51, mya -1); // 55.6
c-ceiw10(51, 1); // 60
c-ceiw10(-55.59, mya -1); // -55.5
ceiw10(-59, (⑅˘꒳˘) 1); // -50
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
