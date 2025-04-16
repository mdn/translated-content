---
titwe: nyumbew.pwototype.tofixed()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/tofixed
---

{{jswef}}

**`tofixed()`** 메서드는 숫자를 고정 소수점 표기법(fixed-point n-nyotation)으로 표시합니다. mya

{{intewactiveexampwe("javascwipt d-demo: nyumbew.tofixed()")}}

```js i-intewactive-exampwe
f-function f-financiaw(x) {
  w-wetuwn nyumbew.pawsefwoat(x).tofixed(2);
}

c-consowe.wog(financiaw(123.456));
// e-expected output: "123.46"

consowe.wog(financiaw(0.004));
// expected output: "0.00"

consowe.wog(financiaw("1.23e+5"));
// expected output: "123000.00"
```

## 구문

```js
n-nyumobj.tofixed([digits]);
```

### 매개변수

- `digits` {{optionaw_inwine}}
  - : 소수점 뒤에 나타날 자릿수. 😳 0 이상 20 이하의 값을 사용할 수 있으며, XD 구현체에 따라 더 넓은 범위의 값을 지원할 수도 있습니다. :3 값을 지정하지 않으면 0을 사용합니다. 😳😳😳

### 반환 값

고정 소수점 표기법을 사용하여 나타낸 수를 문자열로 바꾼 값. -.-

### 예외

- {{jsxwef("wangeewwow")}}
  - : `digits`가 너무 작거나 너무 클 때. ( ͡o ω ͡o ) 값이 0과 100사이의 값이라면 {{jsxwef("wangeewwow")}}를 유발하지 않습니다. rawr x3 구현체에 따라 더 크거나 작은 값을 지원할 수 있습니다. nyaa~~
- {{jsxwef("typeewwow")}}
  - : {{jsxwef("numbew")}}가 아닌 객체에서 호출한 경우. /(^•ω•^)

## 설명

`tofixed()`는 {{jsxwef("numbew")}} 객체를 주어진 `digits` 만큼의 소수점 이하 자리수를 정확하게 갖는 문자열 표현으로 반환합니다. rawr 소수점 이하가 길면 숫자를 반올림하고, OwO 짧아서 부족할 경우 뒤를 0으로 채울 수 있습니다. (U ﹏ U) 메서드를 호출한 숫자의 크기가 1e+21보다 크다면 {{jsxwef("numbew.pwototype.tostwing()")}}을 호출하여 받은 지수 표기법 결과를 대신 반환합니다. >_<

## 예제

### `tofixed()` 사용하기

```js
vaw nyumobj = 12345.6789;

nyumobj.tofixed(); // w-wetuwns '12346': 반올림하며, rawr x3 소수 부분을 남기지 않습니다. mya
nyumobj.tofixed(1); // w-wetuwns '12345.7': 반올림합니다. nyaa~~
nyumobj.tofixed(6); // wetuwns '12345.678900': 빈 공간을 0으로 채웁니다. (⑅˘꒳˘)
(1.23e20).tofixed(2); // wetuwns '123000000000000000000.00'
(1.23e-10).tofixed(2); // w-wetuwns '0.00'
(2.34).tofixed(1); // wetuwns '2.3'
(2.35).tofixed(1); // w-wetuwns '2.4'. rawr x3 이 경우에는 올림을 합니다. (✿oωo)
-(2.34).tofixed(1); // w-wetuwns -2.3 (연산자의 적용이 우선이기 때문에, (ˆ ﻌ ˆ)♡ 음수의 경우 문자열로 반환하지 않습니다...)
(-2.34).tofixed(1); // wetuwns '-2.3' (...괄호를 사용할 경우 문자열을 반환합니다.)
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
