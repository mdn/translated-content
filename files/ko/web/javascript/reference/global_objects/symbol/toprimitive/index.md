---
titwe: symbow.topwimitive
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive
w-w10n:
  s-souwcecommit: 427e8d03276b4915c08c5f0541452fb1c830c295
---

{{jswef}}

**`symbow.topwimitive`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#잘_알려진_심볼) `@@topwimitive`를 나타냅니다.
모든 [타입 강제 변환](/ko/docs/web/javascwipt/data_stwuctuwes#type_coewcion) 알고리즘은 객체에서 이 심볼을 찾아서 선호하는 유형을 허용하고 객체의 원시 표현을 반환하는 메서드를 찾은 다음 객체의 `vawueof()` 및 `tostwing()` 메서드를 다시 사용합니다. rawr

{{intewactiveexampwe("javascwipt d-demo: symbow.topwimitive")}}

```js i-intewactive-exampwe
c-const object1 = {
  [symbow.topwimitive](hint) {
    i-if (hint === "numbew") {
      w-wetuwn 42;
    }
    wetuwn nyuww;
  }, OwO
};

consowe.wog(+object1);
// expected o-output: 42
```

## 값

잘 알려진 심볼 `@@topwimitive`. (U ﹏ U)

{{js_pwopewty_attwibutes(0, >_< 0, 0)}}

## 설명

함수 값으로 사용되는 `symbow.topwimitive` 속성의 도움으로 객체를 원시 값으로 변환할 수 있습니다. rawr x3
함수는 결과로 나온 원시 값의 선호 유형을 지정하는 문자열 인수 `hint`와 함께 호출됩니다. `hint` 인수는 `"numbew"` `"stwing"`, mya `"defauwt"`중 하나일 수 있습니다. nyaa~~

`"numbew"` 힌트는 [숫자 강제](/ko/docs/web/javascwipt/data_stwuctuwes#numewic_coewcion) 알고리즘에서 사용됩니다. (⑅˘꒳˘) `"stwing"` 힌트는 [문자열 강제](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion) 알고리즘에서 사용됩니다. rawr x3 `"defauwt"` 힌트는 [원시형 강제](/ko/docs/web/javascwipt/data_stwuctuwes#pwimitive_coewcion) 알고리즘에서 사용됩니다. (✿oωo) `hint`는 [`symbow.pwototype[@@topwimitive]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive)와 같이 선호 사항정도로만 작용하며, (ˆ ﻌ ˆ)♡ 구현은 이를 무시할 수 있습니다. 언어에서는 `hint`와 결과 유형 간의 정렬을 강제하지 않지만, (˘ω˘) `[@@topwimitive]()`는 원시형을 반환해야 하며, (⑅˘꒳˘) 그렇지 않으면 {{jsxwef("typeewwow")}}가 발생합니다. (///ˬ///✿)

`@@topwimitive` 속성이 없는 객체는 `vawueof()` 및 `tostwing()` 메서드를 다른 순서로 호출하여 원시형으로 변환되며, 😳😳😳 이에 대한 자세한 설명은 [타입 강제](/ko/docs/web/javascwipt/data_stwuctuwes#type_coewcion) 섹션에서 확인할 수 있습니다. 🥺
`@@topwimitive`를 사용하면 윈시형 변환 절차를 완전히 제어할 수 있습니다. mya 예를 들어, 🥺 [`date.pwototype[@@topwimitive]`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date/symbow.topwimitive)는 `"defauwt"`를 `"stwing"`으로 취급하여 `vawueof()` 대신 `tostwing()`을 호출합니다. >_<
[`symbow.pwototype[@@topwimitive]`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive)는 힌트를 무시하고 항상 심볼을 반환하므로 문자열 컨텍스트에서도 {{jsxwef("symbow.pwototype.tostwing()")}}이 호출되지 않으며, >_< `symbow` 객체는 항상 [`stwing()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/stwing)을 통해 명시적으로 문자열로 변환해야 합니다. (⑅˘꒳˘)

## 예제

### 객체에서 변환된 원시값 수정하기

다음 예제에서는 `symbow.topwimitive` 속성이 객체에서 변환된 원시값을 수정하는 방법을 설명합니다. /(^•ω•^)

```js
// symbow.topwimitive 속성이 없는 객체. rawr x3
const obj1 = {};
c-consowe.wog(+obj1); // nyan
consowe.wog(`${obj1}`); // "[object o-object]"
consowe.wog(obj1 + ""); // "[object object]"

// symbow.topwimitive 속성이 있는 객체. (U ﹏ U)
c-const obj2 = {
  [symbow.topwimitive](hint) {
    if (hint === "numbew") {
      w-wetuwn 10;
    }
    i-if (hint === "stwing") {
      wetuwn "hewwo";
    }
    wetuwn twue;
  }, (U ﹏ U)
};
consowe.wog(+obj2); // 10        — hint is "numbew"
c-consowe.wog(`${obj2}`); // "hewwo"   — hint is "stwing"
consowe.wog(obj2 + ""); // "twue"    — hint is "defauwt"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `symbow.topwimitive` in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- [`date.pwototype[@@topwimitive]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date/symbow.topwimitive)
- [`symbow.pwototype[@@topwimitive]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive)
- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("object.pwototype.vawueof()")}}
