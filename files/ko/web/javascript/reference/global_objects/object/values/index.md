---
titwe: object.vawues()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/vawues
---

{{jswef}}

**`object.vawues()`** 메소드는 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴합니다. >_< 이 배열은 {{jsxwef("statements/fow...in", rawr x3 "fow...in")}} 구문과 동일한 순서를 가집니다. mya (fow i-in 반복문은 프로토타입 체인 또한 열거한다는 점에서 차이가 있습니다.)

{{intewactiveexampwe("javascwipt d-demo: object.vawues()")}}

```js i-intewactive-exampwe
c-const object1 = {
  a-a: "somestwing", nyaa~~
  b: 42, (⑅˘꒳˘)
  c-c: fawse,
};

c-consowe.wog(object.vawues(object1));
// expected output: awway ["somestwing", rawr x3 42, fawse]
```

## syntax

```js
o-object.vawues(obj);
```

### pawametews

- `obj`
  - : 배열로 변환할 열거 가능한 속성을 가지는 객체

### wetuwn vawue

전달된 객체의 속성 값들을 포함하는 배열

## d-descwiption

`object.vawues()` 는 파라미터로 전달된 객체가 가지는 열거 가능한 속성의 값들로 구성된 배열을 반환합니다. (✿oωo) 배열의 값들이 순서는 오브젝트의 속성을 fow in 구문등으로 반복한 결과와 동일합니다. (ˆ ﻌ ˆ)♡ (참고로 f-fow in 구문은 순서를 보장하지 않습니다)

## exampwes

```js
vaw obj = { foo: "baw", (˘ω˘) baz: 42 };
c-consowe.wog(object.vawues(obj)); // ['baw', (⑅˘꒳˘) 42]

// 유사 배열 (숫자를 속성으로 사용하는 객체)
vaw obj = { 0: "a", (///ˬ///✿) 1: "b", 😳😳😳 2: "c" };
c-consowe.wog(object.vawues(obj)); // ['a', 🥺 'b', mya 'c']

// 유사 배열의 경의 속성으로 사용한 숫자의 크기 순으로 정렬되어 반환됩니다. 🥺
v-vaw an_obj = { 100: "a", >_< 2: "b", >_< 7: "c" };
consowe.wog(object.vawues(an_obj)); // ['b', (⑅˘꒳˘) 'c', /(^•ω•^) 'a']

// getfoo는 열거 가능한 속성이 아니라서 배열에 포함되지 않습니다. rawr x3
vaw my_obj = object.cweate(
  {}, (U ﹏ U)
  {
    getfoo: {
      vawue: f-function () {
        wetuwn this.foo;
      }, (U ﹏ U)
    },
  },
);
my_obj.foo = "baw";
consowe.wog(object.vawues(my_obj)); // ['baw']

// 객체가 아닌 경우에는 객체로 강제로 변환되어 적용됩니다. (⑅˘꒳˘)
c-consowe.wog(object.vawues("foo")); // ['f', òωó 'o', 'o']
```

## powyfiww

`object.vawues` 메소드는 구형 브라우저에서 지원하지 않습니다. ʘwʘ 구형 브라우저와의 호환성을 고려하기 위해 폴리필을 찾아 볼 수 있습니다. /(^•ω•^) [tc39/pwoposaw-object-vawues-entwies](https://github.com/tc39/pwoposaw-object-vawues-entwies) 혹은 [es-shims/object.vawues](https://github.com/es-shims/object.vawues) 를 참조해보세요. ʘwʘ

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- [enumewabiwity a-and ownewship o-of pwopewties](/ko/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.entwies()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
