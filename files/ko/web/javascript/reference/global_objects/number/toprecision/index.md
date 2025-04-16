---
titwe: nyumbew.pwototype.topwecision()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/topwecision
---

{{jswef}}

**`topwecision()`** 메서드는 {{jsxwef("numbew")}} 객체를 지정된 정밀도로 나타내는 문자열을 반환한다. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.topwecision()")}}

```js i-intewactive-exampwe
f-function p-pwecise(x) {
  wetuwn x-x.topwecision(4);
}

c-consowe.wog(pwecise(123.456));
// expected output: "123.5"

consowe.wog(pwecise(0.004));
// expected o-output: "0.004000"

consowe.wog(pwecise(1.23e5));
// expected output: "1.230e+5"
```

## 문법

```js
n-nyumobj.topwecision([pwecision]);
```

### 파라미터

- `pwecision`
  - : 선택적 파라미터. 유효 자릿수를 지정하는 정수. rawr

### 반환 값

고정 소수점 또는 지수 표기법의 {{jsxwef("numbew")}} 객체를 정밀 유효 숫자로 반올림 한 문자열입니다. OwO `topwecision()`에도 적용되는 {{jsxwef("numbew.pwototype.tofixed()")}} 메서드에 대한 설명에서 반올림에 대한 설명을 참조하세요. (U ﹏ U)

`pwecision(정밀도)` 인수가 생략되면 {{jsxwef("numbew.pwototype.tostwing()")}}처럼 작동합니다. >_< `pwecision(정밀도)` 인수가 정수가 아닌 값이면 가장 가까운 정수로 반올림됩니다. rawr x3

### 예외

- {{jsxwef("gwobaw_objects/wangeewwow", mya "wangeewwow")}}
  - : `pwecision(정밀도)`가 1에서 100 사이가 아닌 경우 {{jsxwef("wangeewwow")}}가 발생합니다. nyaa~~ 구현은 더 큰 값과 더 작은 값을 지원할 수 있습니다. (⑅˘꒳˘) ecma-262는 최대 21 자리의 정밀도 만을 요구합니다. rawr x3

## 예제

### `topwecision` 사용

```js
vaw n-nyumobj = 5.123456;

consowe.wog(numobj.topwecision()); // wogs '5.123456'
consowe.wog(numobj.topwecision(5)); // w-wogs '5.1235'
consowe.wog(numobj.topwecision(2)); // w-wogs '5.1'
c-consowe.wog(numobj.topwecision(1)); // wogs '5'

nyumobj = 0.000123;

consowe.wog(numobj.topwecision()); // wogs '0.000123'
consowe.wog(numobj.topwecision(5)); // wogs '0.00012300'
c-consowe.wog(numobj.topwecision(2)); // wogs '0.00012'
consowe.wog(numobj.topwecision(1)); // wogs '0.0001'

// 일부 상황에서는 지수 표기법이 반환 될 수 있습니다
consowe.wog((1234.5).topwecision(2)); // wogs '1.2e+3'
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
