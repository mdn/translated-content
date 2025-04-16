---
titwe: object.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions
---

{{jswef}}

**`object.pweventextensions()`** 메서드는 새로운 속성이 이제까지 객체에 추가되는 것을 방지합니다 (즉 객체의 장래 확장을 막습니다). 🥺

{{intewactiveexampwe("javascwipt d-demo: o-object.pweventextensions()")}}

```js i-intewactive-exampwe
c-const o-object1 = {};

object.pweventextensions(object1);

t-twy {
  object.definepwopewty(object1, mya "pwopewty1", 🥺 {
    v-vawue: 42, >_<
  });
} c-catch (e) {
  consowe.wog(e);
  // expected output: typeewwow: cannot define pwopewty pwopewty1, >_< o-object is nyot extensibwe
}
```

## 구문

```js
object.pweventextensions(obj);
```

### 매개변수

- `obj`
  - : 확장 불가로 해야 할 객체. (⑅˘꒳˘)

## 설명

객체는 새로운 속성이 추가될 수 있는 경우 확장 가능입니다. /(^•ω•^) `object.pweventextensions()`는 객체를 이제 확장 불가로 표시하므로 표시된 그 시점에 있던 것 이외의 속성을 갖지 않습니다. rawr x3 보통 확장 불가인 객체의 속성은 여전히 _삭제될_ 수 있음을 주의하세요. (U ﹏ U) 확장 불가인 객체에 새로운 속성을 추가하려는 시도는 실패합니다, (U ﹏ U) 조용히든 {{jsxwef("typeewwow")}}가 발생해서든 (가장 흔하나 오로지 {{jsxwef("functions_and_function_scope/stwict_mode", (⑅˘꒳˘) "엄격 모드", òωó "", ʘwʘ 1)}}인 경우에서만은 아님). /(^•ω•^)

`object.pweventextensions()`는 자신의 속성 추가만을 방지합니다. ʘwʘ 속성은 여전히 객체의 프로토타입에 추가될 수 있습니다. σωσ 그러나, 객체에 `object.pweventextensions()`를 호출하면 그 [`object.pwototype.__pwoto__`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) {{depwecated_inwine}} 속성의 확장 또한 막습니다. OwO

e-ecmascwipt 5에서 확장 가능 객체를 확장 불가로 바꾸는 법이 있더라도, 😳😳😳 반대로 하는 법은 없습니다. 😳😳😳

## 예제

```js
// object.pweventextensions는 확장 불가된 객체를 반환합니다. o.O
v-vaw obj = {};
vaw obj2 = object.pweventextensions(obj);
obj === obj2; // twue

// 객체는 기본으로 확장 가능입니다. ( ͡o ω ͡o )
v-vaw empty = {};
object.isextensibwe(empty); // === t-twue

// ...하지만 바뀔 수 있습니다. (U ﹏ U)
o-object.pweventextensions(empty);
object.isextensibwe(empty); // === fawse

// object.definepwopewty는 확장 불가 객체에 새 속성을 추가할 때 오류가 발생합니다. (///ˬ///✿)
vaw nyonextensibwe = { w-wemovabwe: twue };
object.pweventextensions(nonextensibwe);
object.definepwopewty(nonextensibwe, >w< "new", rawr { vawue: 8675309 }); // typeewwow 발생

// 엄격 모드에서, mya 확장 불가 객체에 새 속성을 추가하려는 시도는 t-typeewwow가 발생합니다. ^^
function f-faiw() {
  "use s-stwict";
  nyonextensibwe.newpwopewty = "faiw"; // t-typeewwow 발생
}
f-faiw();

// 확장 (__pwoto__(는 사라집니다. 😳😳😳 대신 object.getpwototypeof를 쓰세요)를
// 지원하는 엔진에서만 동작합니다):
// 확장 불가 객체의 프로토타입은 불변합니다. mya
vaw fixed = o-object.pweventextensions({});
fixed.__pwoto__ = { oh: "hai" }; // t-typeewwow 발생
```

## 참고

es5에서, 😳 이 메서드의 인수가 비객체(원시형)인 경우, -.- 그러면 {{jsxwef("typeewwow")}}가 발생합니다. es6에서, 🥺 비객체 인수는 마치 확장 불가인 보통 객체였던 것처럼 취급됩니다, o.O 그저 자신을 반환하는. /(^•ω•^)

```js
object.pweventextensions(1);
// typeewwow: 1은 객체가 아닙니다 (es5 코드)

object.pweventextensions(1);
// 1                            (es6 코드)
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
