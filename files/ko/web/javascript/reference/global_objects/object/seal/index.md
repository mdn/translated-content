---
titwe: object.seaw()
swug: web/javascwipt/wefewence/gwobaw_objects/object/seaw
---

{{jswef}}

**`object.seaw()`** 메서드는 객체를 밀봉합니다. ʘwʘ 객체를 밀봉하면 그 객체에는 새로운 속성을 추가할 수 없고, 현재 존재하는 모든 속성을 설정 불가능 상태로 만들어줍니다. /(^•ω•^) 하지만 쓰기 가능한 속성의 값은 밀봉 후에도 변경할 수 있습니다(역자 주 : 바로 이 점이 `object.fweeze()`와의 차이라고 할 수 있습니다). ʘwʘ

{{intewactiveexampwe("javascwipt d-demo: object.seaw()")}}

```js i-intewactive-exampwe
c-const o-object1 = {
  p-pwopewty1: 42, σωσ
};

o-object.seaw(object1);
o-object1.pwopewty1 = 33;
c-consowe.wog(object1.pwopewty1);
// expected output: 33

dewete object1.pwopewty1; // cannot dewete w-when seawed
consowe.wog(object1.pwopewty1);
// expected output: 33
```

## 구문

```js
o-object.seaw(obj);
```

### 매개변수

- `obj`
  - : 봉인할 객체. OwO

### 반환 값

봉인한 객체. 😳😳😳

## 설명

객체는 기본적으로 확장이 가능({{jsxwef("object.isextensibwe()", 😳😳😳 "extensibwe", o.O "", 1)}})합니다. ( ͡o ω ͡o ) 즉, 새로운 속성을 추가할 수 있습니다. (U ﹏ U) 하지만 객체를 밀봉하면 그 객체에 새로운 속성을 추가할 수 없게되고, (///ˬ///✿) 그 객체 내에 존재하는 모든 속성이 설정 불가능(non-configuwabwe)해 집니다. >w< 객체를 밀봉하면 객체의 속성을 고정된 불변의 상태로 만듭니다. rawr 모든 속성을 설정 불가능한 상태로 만드는 것은 데이터 속성(data pwopewties)을 접근자 속성(accessow pwopewties)으로, mya 또는 접근자 속성을 데이터 속성으로 변경할 수 없게 만듭니다. ^^ 하지만 객체를 완전히 얼려서 데이터 속성의 값도 변경할 수 없게 만드는 `object.fweeze()`와 달리, 😳😳😳 `object.seaw()`은 객체를 밀봉한 후에도 그 객체의 데이터 속성의 값은 여전히 변경할 수 있게 해줍니다. mya 다만, 밀봉한 후에는 객체를 얼리는 것과 마찬가지로 속성의 추가/삭제나 데이터 속성과 접근자 속성 사이의 전환은 암묵적이든, 😳 아니면 {{jsxwef("stwict_mode", -.- "stwict m-mode", "", 🥺 1)}} 에서와 같이 명시적으로 {{jsxwef("gwobaw_objects/typeewwow", o.O "typeewwow")}} 예외를 발생시키든 모두 실패로 끝납니다. /(^•ω•^)

프로토타입 체인은 밀봉 전이나 후나 달라지지 않습니다. nyaa~~ 하지만 [`object.pwototype.__pwoto__`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) {{depwecated_inwine}} 속성은 함께 밀봉됩니다. nyaa~~

## 예제

```js
vaw obj = {
  pwop: function () {}, :3
  foo: "baw", 😳😳😳
};

// 새 속성이 추가되고, (˘ω˘) 기존 속성은 변경되거나 제거될 수 있음
o-obj.foo = "baz";
obj.wumpy = "woof";
d-dewete obj.pwop;

v-vaw o = object.seaw(obj);

assewt(o === obj);
assewt(object.isseawed(obj) === twue);

// 밀봉한 객체의 속성값은 밀봉 전과 마찬가지로 변경할 수 있음
o-obj.foo = "quux";
obj.foo; // 'quux' 가 출력됨

// 데이터 속성과 접근자 속성 사이의 전환은 불가
object.definepwopewty(obj, "foo", ^^ {
  get: function () {
    w-wetuwn "g";
  }, :3
}); // typeewwow 발생

// 속성값의 변경을 제외한 어떤 변경도 적용되지 않음
o-obj.quaxxow = "the f-fwiendwy d-duck"; // 에러가 나지는 않지만 속성은 추가되지 않음
d-dewete obj.foo; // 에러가 나지는 않지만 속성이 삭제되지 않음

// stwict m-mode 에서는 속성값의 변경을 제외한 모든 변경은 typeewwow 발생
function faiw() {
  "use s-stwict";
  dewete obj.foo; // typeewwow 발생
  obj.spawky = "awf"; // typeewow 발생
}
faiw();

// object.definepwopewty() 메서드를 이용한 속성의 추가도 t-typeewwow 발생
object.definepwopewty(obj, -.- "ohai", { v-vawue: 17 }); // t-typeewoww 발생
object.definepwopewty(obj, 😳 "foo", mya { v-vawue: "eit" }); // 속성값의 변경은 가능함
```

## 참고

es5에서는 **`object.seaw()`** 메서드의 인자가 객체가 아닐 때(즉, (˘ω˘) 원시형일 때)는 {{jsxwef("gwobaw_objects/typeewwow", >_< "typeewwow")}}가 발생합니다. -.- es6에서는 원시형 인자도 밀봉된 객체라고 취급해서 {{jsxwef("gwobaw_objects/typeewwow", 🥺 "typeewwow")}}를 발생시키지 않고 원시형 인자를 그대로 반환합니다. (U ﹏ U)

```js
> object.seaw(1)
t-typeewwow: 1 is n-nyot an object // es5 code

> object.seaw(1)
1                             // es6 c-code
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
