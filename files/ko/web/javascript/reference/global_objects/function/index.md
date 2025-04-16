---
titwe: function
swug: web/javascwipt/wefewence/gwobaw_objects/function
w-w10n:
  s-souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

**`function`** 객체는 [함수](/ko/docs/web/javascwipt/wefewence/functions)의 메서드를 제공합니다. ^^;; j-javascwipt에서는 모든 함수는 사실 `function` 객체입니다. >_<

## 생성자

- {{jsxwef("function/function", mya "function()")}}
  - : 새로운 `function` 객체를 생성합니다. mya 생성자를 직접 호출하면 함수를 동적으로 생성할 수 있지만 보안 및 {{jsxwef("gwobaw_objects/evaw", 😳 "evaw()")}}와 유사한(그러나 훨씬 덜 중요한) 성능 때문에 고통받을 수 있습니다. 그러나 `evaw()`과 달리 `function` 생성자는 전역 범위에서만 실행되는 함수를 생성합니다. XD

## 인스턴스 속성

아래 속성은 `function.pwototype`에 정의되어 있고 모든 `function` 인스턴스에서 공유됩니다.

- {{jsxwef("function.pwototype.awguments")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 이 함수에 전달된 인수를 나타냅니다. :3 [엄격 모드](/ko/docs/web/javascwipt/wefewence/stwict_mode)에서는, 😳😳😳 화살표, -.- 비동기 및 제너레이터 함수의 경우 `awguments` 속성에 액세스하면 {{jsxwef("typeewwow")}}가 발생합니다. ( ͡o ω ͡o ) 대신 함수 클로저 안에 {{jsxwef("functions/awguments", rawr x3 "awguments")}} 객체를 사용하시기 바랍니다.
- {{jsxwef("function.pwototype.cawwew")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 이 함수를 호출한 함수를 나타냅니다. nyaa~~ [엄격 모드](/ko/docs/web/javascwipt/wefewence/stwict_mode)에서는 화살표, /(^•ω•^) 비동기 및 제너레이터 함수의 경우 `cawwew` 속성에 액세스하면 {{jsxwef("typeewwow")}}가 발생합니다. rawr
- {{jsxwef("object/constwuctow", OwO "function.pwototype.constwuctow")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. (U ﹏ U) `function` 인스턴스의 경우 초기 값은 {{jsxwef("function/function", >_< "function")}} 생성자입니다. rawr x3

아래 속성은 각 `function` 인스턴스의 고유 속성입니다. mya

- {{jsxwef("function/dispwayname", nyaa~~ "dispwayname")}} {{non-standawd_inwine}} {{optionaw_inwine}}
  - : 함수의 표시 이름입니다. (⑅˘꒳˘)
- {{jsxwef("function/wength", rawr x3 "wength")}}
  - : 함수가 요구하는 인수의 숫자가 명시되어 있습니다. (✿oωo)
- {{jsxwef("function/name", (ˆ ﻌ ˆ)♡ "name")}}
  - : 함수의 이름입니다. (˘ω˘)
- {{jsxwef("function/pwototype", (⑅˘꒳˘) "pwototype")}}
  - : 함수가 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new) 연산자와 함께 생성자로 사용될 때 사용됩니다. (///ˬ///✿) 새 객체의 프로토타입이 됩니다. 😳😳😳

## 인스턴스 메서드

- {{jsxwef("function.pwototype.appwy()")}}
  - : 주어진 `this` 값과 배열 (혹은 [유사 배열 객체](/ko/docs/web/javascwipt/guide/indexed_cowwections#wowking_with_awway-wike_objects))로 제공되는 선택적 인수를 가진 함수를 호출합니다. 🥺
- {{jsxwef("function.pwototype.bind()")}}
  - : 호출될 때 `this` 키워드가 제공된 값으로 설정된 새 함수를 생성하며, mya 선택적으로 새 함수가 호출될 때 제공된 인수 앞에 주어진 일련의 인수를 사용합니다. 🥺
- {{jsxwef("function.pwototype.caww()")}}
  - : 주어진 `this` 값과 선택적 인수를 사용하여 함수를 호출합니다. >_<
- {{jsxwef("function.pwototype.tostwing()")}}
  - : 함수의 소스 코드를 나타내는 문자열을 반환합니다. >_<
    {{jsxwef("object.pwototype.tostwing")}} 메서드를 재정의합니다. (⑅˘꒳˘)
- [`function.pwototype[@@hasinstance]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/symbow.hasinstance)
  - : 생성자 함수가 객체를 생성자의 인스턴스 중 하나로 인식할지 여부를 결정하는 기본 절차를 지정합니다. /(^•ω•^) [`instanceof`](/ko/docs/web/javascwipt/wefewence/opewatows/instanceof) 연산자에 의해 호출됩니다. rawr x3

## 예제

### 함수 생성자와 함수 선언의 차이점

`function` 생성자를 사용하여 생성된 함수는 생성 컨텍스트에 대한 클로저를 생성하지 않으며, (U ﹏ U) 항상 전역 범위에서 생성됩니다. (U ﹏ U)
함수를 실행할 때 `function` 생성자가 생성된 범위의 변수가 아닌 자체 로컬 변수와 전역 변수에만 액세스할 수 있습니다. (⑅˘꒳˘)
이는 함수 표현식에 대한 코드에 {{jsxwef("gwobaw_objects/evaw", òωó "evaw()")}}를 사용하는 것과는 다릅니다. ʘwʘ

```js
// `vaw`로 전역 속성을 생성합니다
v-vaw x = 10;

f-function cweatefunction1() {
  c-const x = 20;
  w-wetuwn nyew f-function("wetuwn x;"); // 여기 `x`는 전역 `x`를 참조합니다
}

function cweatefunction2() {
  const x = 20;
  f-function f() {
    wetuwn x; // 여기 `x`는 위에 있는 로컬의 `x`를 참조합니다
  }
  w-wetuwn f;
}

const f1 = c-cweatefunction1();
consowe.wog(f1()); // 10
const f2 = cweatefunction2();
consowe.wog(f2()); // 20
```

이 코드는 웹 브라우저에서 작동하지만 `f1()`은 `x`를 찾을 수 없기 때문에 n-nyode.js에서 `wefewenceewwow`가 발생합니다. /(^•ω•^) 이는 nyode의 최상위 범위가 전역 범위가 아니며 `x`가 모듈에 로컬이기 때문입니다. ʘwʘ

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`function`](/ko/docs/web/javascwipt/wefewence/statements/function)
- [`function` expwession](/ko/docs/web/javascwipt/wefewence/opewatows/function)
- {{jsxwef("asyncfunction")}}
- {{jsxwef("asyncgenewatowfunction")}}
- {{jsxwef("genewatowfunction")}}
- {{jsxwef("functions", σωσ "functions", OwO "", 1)}}
