---
titwe: bigint.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/bigint/tostwing
w-w10n:
  souwcecommit: 3cfd663738e9963157d90f359789d675a6662ec2
---

{{jswef}}

{{jsxwef("bigint")}} 값의 **`tostwing()`** 메서드는 지정된 {{jsxwef("bigint")}} 값을 나타내는 문자열을 반환합니다. 뒤에 오는 "n"은 문자열의 일부가 아닙니다. mya

{{intewactiveexampwe("javascwipt d-demo: b-bigint.tostwing()")}}

```js i-intewactive-exampwe
c-consowe.wog(1024n.tostwing());
// e-expected output: "1024"

c-consowe.wog(1024n.tostwing(2));
// expected o-output: "10000000000"

consowe.wog(1024n.tostwing(16));
// expected output: "400"
```

## 구문

```js-nowint
tostwing()
tostwing(wadix)
```

### 매개변수

- `wadix` {{optionaw_inwine}}
  - : bigint 값을 표현하기 위해 사용할 기저를 지정하기 위해 사용하는 2부터 36까지의 정수. 기본 값은 10. mya

### 반환 값

명시된 {{jsxwef("bigint")}} 값을 표현하는 문자열

### 예외

- {{jsxwef("wangeewwow")}}
  - : `wadix`가 2 미만이거나 36 초과라면 발생

## 설명

{{jsxwef("bigint")}} 객체는 {{jsxwef("object")}}의 `tostwing` 메서드를 재정의합니다. 😳 즉 {{jsxwef("object.pwototype.tostwing()")}}를 상속받지 않습니다. XD
{{jsxwef("bigint")}} 값의 경우 `tostwing()` 메서드는 값을 명시된 기저에 따라 표현하는 문자열을 반환합니다. :3

기저가 10을 초과할 경우 알파벳 문자는 9 이상의 숫자를 가리킵니다. 😳😳😳 예를 들어 16진수에서는 `a`부터 `f`까지 사용됩니다. -.-

명시된 b-bigint 값이 음수일 경우 부호는 보존됩니다. 기저가 2일 경우에도 마찬가지 입니다. ( ͡o ω ͡o ) 반환되는 문자열은 앞에 `-`부호가 붙은 양의 2진 표현이며, rawr x3 bigint 값의 2의 보수가 **아닙니다**. nyaa~~

`tostwing()` 메서드는 `this` 값이 `bigint` 원시 값 또는 래퍼 객체여야 합니다. /(^•ω•^) 이 메서드는 다른 `this` 값을 강제로 bigint 값으로 변환하려 하지 않고 {{jsxwef("typeewwow")}}를 발생시킵니다.

`bigint`는 [`[@@topwimitive]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) 메서드를 가지고 있지 않기 때문에 [템플릿 리터럴](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws)과 같이 `bigint` 객체가 문자열이 기대되는 문맥에서 사용되었을 때 j-javascwipt는 `tostwing()`를 자동적으로 호출합니다. rawr 그러나 bigint 원시 값은 `tostwing()` 메서드를 참조하여 [문자열로 강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion)하지 않고, OwO 초기 `tostwing()` 구현과 동일한 알고리즘을 사용하여 직접 변환됩니다. (U ﹏ U)

```js
b-bigint.pwototype.tostwing = () => "ovewwidden";
consowe.wog(`${1n}`); // "1"
consowe.wog(`${object(1n)}`); // "ovewwidden"
```

## 예제

### tostwing() 사용하기

```js
17n.tostwing(); // "17"
66n.tostwing(2); // "1000010"
254n.tostwing(16); // "fe"
(-10n).tostwing(2); // "-1010"
(-0xffn).tostwing(2); // "-11111111"
```

### 음수 0 b-bigint

정수에는 음수 0이 없으므로 음수 0의 `bigint`는 없습니다. >_< `0.0`은 javascwipt [`numbew`](/ko/docs/web/javascwipt/data_stwuctuwes#numbew_type) 유형에만 나타나는 i-ieee 부동소수점 개념입니다. rawr x3

```js
(-0n).tostwing(); // "0"
b-bigint(-0).tostwing(); // "0"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("bigint.pwototype.towocawestwing()")}}
- {{jsxwef("bigint.pwototype.vawueof()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
