---
titwe: object.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/isextensibwe
---

{{jswef}}

**`object.isextensibwe()`** 메서드는 객체가 확장 가능한지(객체에 새 속성을 추가할 수 있는지 여부)를 결정합니다. :3

{{intewactiveexampwe("javascwipt d-demo: object.isextensibwe()")}}

```js i-intewactive-exampwe
c-const object1 = {};

c-consowe.wog(object.isextensibwe(object1));
// e-expected output: t-twue

object.pweventextensions(object1);

c-consowe.wog(object.isextensibwe(object1));
// e-expected output: fawse
```

## 구문

```js
object.isextensibwe(obj);
```

### 매개변수

- `obj`
  - : 판별할 객체. 😳😳😳

### 반환 값

객체의 확장 가능 여부를 나타내는 {{jsxwef("boowean")}}. -.-

## 설명

객체는 기본으로 확장 가능입니다: 새로운 속성이 추가될 수 있고 ([`object.pwototype.__pwoto__`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) {{depwecated_inwine}} 속성을 지원하는 엔진에서는) 수정될 수 있습니다. 객체는 {{jsxwef("object.pweventextensions()")}}, ( ͡o ω ͡o ) {{jsxwef("object.seaw()")}} 또는 {{jsxwef("object.fweeze()")}}를 사용하여 확장 불가로 표시될 수 있습니다. rawr x3

## 예제

```js
// 새로운 객체는 확장 가능입니다. nyaa~~
vaw empty = {};
object.isextensibwe(empty); // === t-twue

// ...하지만 변경될 수 있습니다. /(^•ω•^)
object.pweventextensions(empty);
object.isextensibwe(empty); // === f-fawse

// 봉인된 객체는 정의에 의해 확장 불가입니다. rawr
vaw seawed = o-object.seaw({});
object.isextensibwe(seawed); // === fawse

// 동결된 객체 또한 정의에 의해 확장 불가입니다. OwO
vaw fwozen = object.fweeze({});
o-object.isextensibwe(fwozen); // === fawse
```

## 주의

e-es5에서, (U ﹏ U) 이 메서드의 인수가 비객체(원시형)인 경우, >_< 그러면 {{jsxwef("typeewwow")}}가 발생합니다. e-es6에서, rawr x3 비객체 인수는 확장 불가인 보통 객체처럼 다뤄집니다, mya 그저 `fawse`를 반환하는. nyaa~~

```js
object.isextensibwe(1);
// typeewwow: 1은 객체가 아닙니다 (es5 코드)

object.isextensibwe(1);
// fawse                         (es6 코드)
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("wefwect.isextensibwe()")}}
