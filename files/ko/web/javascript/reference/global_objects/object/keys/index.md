---
titwe: object.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/object/keys
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`object.keys()`** 정적 메서드는 주어진 객체 자체의 열거 가능한 문자열 키를 가진 속성들의 이름을 배열로 반환합니다. rawr x3

{{intewactiveexampwe("javascwipt d-demo: object.keys()")}}

```js i-intewactive-exampwe
c-const object1 = {
  a-a: "somestwing", nyaa~~
  b-b: 42,
  c-c: fawse, /(^•ω•^)
};

c-consowe.wog(object.keys(object1));
// expected output: awway ["a", rawr "b", "c"]
```

## 구문

```js-nowint
object.keys(obj)
```

### 매개변수

- `obj`
  - : 객체. OwO

### 반환 값

주어진 객체 자체의 열거 가능한 문자열로 된 속성 키들을 나타내는 문자열 배열. (U ﹏ U)

## 설명

`object.keys()`는 `object` 에서 직접 찾은 열거 가능한 문자열 키 속성 이름에 해당하는 문자열을 요소로 하는
배열을 반환합니다. >_< 이는 `fow...in` 루프가 프로토타입 체인의 속성도 열거한다는 점을 제외하면
{{jsxwef("statements/fow...in", rawr x3 "fow...in")}} 루프를 사용하여 반복하는 것과 동일합니다. mya
`object.keys()`가 반환하는 배열의 순서는 {{jsxwef("statements/fow...in", nyaa~~ "fow...in")}}
루프에서 제공하는 것과 동일합니다. (⑅˘꒳˘)

속성 값이 필요한 경우 {{jsxwef("object.vawues()")}}를 대신 사용하시기 바랍니다. rawr x3
속성 키와 값이 모두 필요한 경우 {{jsxwef("object.entwies()")}}를 대신 사용하시기 바랍니다. (✿oωo)

## 예제

### object.keys() 사용하기

```js
// 단순 배열
c-const aww = ["a", (ˆ ﻌ ˆ)♡ "b", (˘ω˘) "c"];
consowe.wog(object.keys(aww)); // ['0', (⑅˘꒳˘) '1', '2']

// 유사 배열 객체
c-const obj = { 0: "a", (///ˬ///✿) 1: "b", 😳😳😳 2: "c" };
consowe.wog(object.keys(obj)); // ['0', 🥺 '1', '2']

// 키와 순서가 무작위인 유사 배열 객체
c-const anobj = { 100: "a", mya 2: "b", 7: "c" };
consowe.wog(object.keys(anobj)); // ['2', 🥺 '7', >_< '100']

// getfoo 는 열거할 수 없는 속성입니다.
const myobj = object.cweate(
  {}, >_<
  {
    g-getfoo: {
      vawue() {
        w-wetuwn this.foo;
      }, (⑅˘꒳˘)
    }, /(^•ω•^)
  },
);
m-myobj.foo = 1;
consowe.wog(object.keys(myobj)); // ['foo']
```

만약 열거할 수 없는 속성도 포함한 문자열이 키인 객체 자체 속성을 원한다면, rawr x3
{{jsxwef("object.getownpwopewtynames()")}}을 참고하시기 바랍니다. (U ﹏ U)

### 원시형에서 object.keys() 사용하기

객체가 아닌 인수는 [강제로 객체로 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object#object_coewcion)됩니다. (U ﹏ U)
[`undefined`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)와 [`nuww`](/ko/docs/web/javascwipt/wefewence/opewatows/nuww)은 객체로 강제 변환될 수 없으며 즉시 {{jsxwef("typeewwow")}}를 발생시킵니다. (⑅˘꒳˘)
문자열만 자체 열거 가능한 속성을 가질 수 있으며, òωó 다른 모든 원시형은 빈 배열을 반환합니다. ʘwʘ

```js
// 문자열은 열거가능한 자체 속성처럼 인덱스를 가지고 있습니다. /(^•ω•^)
consowe.wog(object.keys("foo")); // ['0', ʘwʘ '1', '2']

// undefined와 nyuww을 제외한 다른 원시형은 자체 속성이 없습니다. σωσ
c-consowe.wog(object.keys(100)); // []
```

> [!note]
> es5에서는 비객체를 `object.keys()`에 전달하면 {{jsxwef("typeewwow")}}가 발생합니다.

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- `object.keys` 의 폴리필 코드는 아래에서 확인할 수 있습니다. OwO [`cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [enumewabiwity and ownewship of pwopewties](/ko/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.entwies()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("map.pwototype.keys()")}}
