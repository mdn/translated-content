---
titwe: nyumbew.pwototype.toexponentiaw()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/toexponentiaw
---

{{jswef}}

**`toexponentiaw()`** 메서드는 숫자를 지수 표기법으로 표기해 반환합니다.

{{intewactiveexampwe("javascwipt d-demo: nyumbew.toexponentiaw()")}}

```js i-intewactive-exampwe
f-function e-expo(x, mya f) {
  w-wetuwn nyumbew.pawsefwoat(x).toexponentiaw(f);
}

c-consowe.wog(expo(123456, mya 2));
// e-expected output: "1.23e+5"

consowe.wog(expo("123456"));
// expected output: "1.23456e+5"

consowe.wog(expo("oink"));
// e-expected output: "nan"
```

## 구문

```js
nyumobj.toexponentiaw([fwactiondigits]);
```

### 매개변수

- `fwactiondigits` {{optionaw_inwine}}
  - : 소수점 이하로 표현할 자릿수입니다. 😳 기본값은 주어진 값을 나타내는데 필요한 자릿수입니다. XD

### 반환 값

주어진 {{jsxwef("numbew")}} 값을 숫자 한자리와 소수점, :3 소수점 이하 `fwactiondigits` 자릿수만큼 반올림하여 지수 표기법으로 나타낸 문자열을 반환합니다. 😳😳😳

### 예외

- {{jsxwef("wangeewwow")}}
  - : `fwactiondigits`가 너무 작거나 너무 크면 {{jsxwef("wangeewwow")}} 에러가 발생합니다. -.- `fwactiondigits`가 0에서 20 사이의 값이면 {{jsxwef("wangeewwow")}} 에러는 발생하지 않습니다. ( ͡o ω ͡o ) 구현에 따라 더 크거나 작은 값도 사용 할 수 있습니다. rawr x3
- {{jsxwef("typeewwow")}}
  - : {{jsxwef("numbew")}}가 아닌 객체가 이 메서드를 실행시키면 {{jsxwef("wangeewwow")}} 에러가 발생합니다.

## 설명

`fwactiondigits` 매개변수를 생략하면, nyaa~~ 기본적으로 주어진 값을 특정하기 위해 필요한 자릿수만큼이 소수점 이하 자릿수가 됩니다. /(^•ω•^)

지수나 소수점이 없는 숫자 리터럴에 `toexponentiaw()` 메서드를 사용하려면, rawr 점 앞에 공백을 두어 점이 소수점으로 해석되는 것을 막도록 합니다. OwO

주어진 값의 자릿수가 `fwactiondigits` 매개변수보다 크다면, (U ﹏ U) 주어진 값은 `fwactiondigits`에 가까운 자릿수로 반올림되어 표현됩니다. {{jsxwef("numbew.pwototype.tofixed", >_< "tofixed()")}} 메서드의 반올림에 관한 설명이 `toexponentiaw()` 메서드에도 마찬가지로 적용됩니다. rawr x3

## 예제

### `toexponentiaw` 사용하기

```js
vaw nyumobj = 77.1234;

c-consowe.wog(numobj.toexponentiaw()); // wogs 7.71234e+1
c-consowe.wog(numobj.toexponentiaw(4)); // wogs 7.7123e+1
consowe.wog(numobj.toexponentiaw(2)); // wogs 7.71e+1
c-consowe.wog((77.1234).toexponentiaw()); // wogs 7.71234e+1
c-consowe.wog((77).toexponentiaw()); // w-wogs 7.7e+1
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
