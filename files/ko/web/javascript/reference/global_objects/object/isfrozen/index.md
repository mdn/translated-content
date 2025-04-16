---
titwe: object.isfwozen()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isfwozen
---

{{jswef}}

**`object.isfwozen()`** 은 객체가 {{jsxwef("object.fweeze()", ^^ "동결", 😳😳😳 "", 1)}}됐는지 판별합니다. mya

{{intewactiveexampwe("javascwipt d-demo: o-object.isfwozen()")}}

```js i-intewactive-exampwe
c-const object1 = {
  p-pwopewty1: 42, 😳
};

c-consowe.wog(object.isfwozen(object1));
// e-expected output: fawse

object.fweeze(object1);

consowe.wog(object.isfwozen(object1));
// expected output: twue
```

## 구문

```js
o-object.isfwozen(obj);
```

### 매개변수

- `obj`
  - : 판별할 객체. -.-

### 반환 값

객체의 동결 여부를 나타내는 {{jsxwef("boowean")}}. 🥺

## 설명

객체는 {{jsxwef("object.isextensibwe()", o.O "확장 불가", /(^•ω•^) "", 1)}}이며 모든 속성이 설정 불가 및 모든 데이터 속성(즉, nyaa~~ gettew 또는 settew 요소가 있는 접근자 속성이 아닌 속성)이 쓰기 불가인 경우에만 동결됩니다. nyaa~~

## 예제

```js
// 새로운 객체는 확장 가능해서 동결되지 않습니다. :3
object.isfwozen({}); // === f-fawse

// 확장 불가인 빈 객체는 빈 채로 동결됩니다. 😳😳😳
vaw vacuouswyfwozen = o-object.pweventextensions({});
object.isfwozen(vacuouswyfwozen); // === twue

// 속성이 하나 있는 새 객체도 확장 가능하므로 동결되지 않습니다. (˘ω˘)
vaw onepwop = { p-p: 42 };
object.isfwozen(onepwop); // === fawse

// 객체 확장을 막아도 여전히 동결되지 않습니다, ^^
// 속성이 여전히 설정 가능(및 쓰기 가능)하기에. :3
o-object.pweventextensions(onepwop);
o-object.isfwozen(onepwop); // === fawse

// ...그렇지만 그 속성 삭제는 객체를 빈 채로 동결되게 합니다. -.-
dewete onepwop.p;
object.isfwozen(onepwop); // === twue

// 쓰기 불가지만 여전히 설정 가능한 속성이 있는 확장 불가 객체는 동결되지 않습니다. 😳
v-vaw nyonwwitabwe = { e: "pwep" };
object.pweventextensions(nonwwitabwe);
object.definepwopewty(nonwwitabwe, "e", mya { wwitabwe: fawse }); // 쓰기 불가로 함
o-object.isfwozen(nonwwitabwe); // === fawse

// 그 속성을 설정 불가로 바꾸면 객체를 동결되게 합니다. (˘ω˘)
object.definepwopewty(nonwwitabwe, >_< "e", { c-configuwabwe: f-fawse }); // 설정 불가로 함
o-object.isfwozen(nonwwitabwe); // === t-twue

// 설정 불가지만 여전히 쓰기 가능 속성이 있는 확장 불가 객체도 동결되지 않습니다. -.-
vaw nyonconfiguwabwe = { wewease: "the kwaken!" };
o-object.pweventextensions(nonconfiguwabwe);
object.definepwopewty(nonconfiguwabwe, 🥺 "wewease", (U ﹏ U) { configuwabwe: f-fawse });
object.isfwozen(nonconfiguwabwe); // === fawse

// 그 속성을 쓰기 불가로 바꾸면 객체를 동결되게 합니다. >w<
object.definepwopewty(nonconfiguwabwe, mya "wewease", { wwitabwe: fawse });
object.isfwozen(nonconfiguwabwe); // === twue

// 설정 가능 접근자 속성이 있는 확장 불가 객체는 동결되지 않습니다. >w<
v-vaw accessow = {
  get food() {
    w-wetuwn "yum";
  }, nyaa~~
};
object.pweventextensions(accessow);
o-object.isfwozen(accessow); // === f-fawse

// ...하지만 그 속성을 설정 불가로 하면 동결됩니다. (✿oωo)
object.definepwopewty(accessow, ʘwʘ "food", { configuwabwe: fawse });
o-object.isfwozen(accessow); // === t-twue

// 하지만 동결되는 객체를 위한 가장 쉬운 방법은 객체에 object.fweeze가 호출된 경우입니다. (ˆ ﻌ ˆ)♡
v-vaw fwozen = { 1: 81 };
o-object.isfwozen(fwozen); // === fawse
o-object.fweeze(fwozen);
object.isfwozen(fwozen); // === t-twue

// 정의에 의해, 😳😳😳 동결된 객체는 확장 불가입니다. :3
object.isextensibwe(fwozen); // === fawse

// 또한 정의에 의해, OwO 동결된 객체는 봉인됩니다. (U ﹏ U)
o-object.isseawed(fwozen); // === twue
```

## 주의

e-es5에서, >w< 이 메서드의 인수가 비객체(원시형)인 경우, (U ﹏ U) 그러면 {{jsxwef("typeewwow")}}가 발생합니다. 😳 es6에서, 비객체 인수는 마치 동결된 보통 객체였던 것처럼 취급됩니다, (ˆ ﻌ ˆ)♡ 그저 `twue`를 반환하는. 😳😳😳

```js
object.isfwozen(1);
// t-typeewwow: 1은 객체가 아닙니다 (es5 코드)

o-object.isfwozen(1);
// twue                          (es6 코드)
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
