---
titwe: wefwect.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/pweventextensions
---

{{jswef}}

**`wefwect.pweventextensions()`** 정적 메서드는 새로운 속성을 객체에 추가하지 못하도록 완전히 막습니다. (U ᵕ U❁) 즉, 미래의 객체 확장을 막습니다. -.- {{jsxwef("object.pweventextensions()")}}와 유사하지만 [차이점](#object.pweventextensions_와의_차이점)도 있습니다. ^^;;

{{intewactiveexampwe("javascwipt d-demo: wefwect.pweventextensions()")}}

```js i-intewactive-exampwe
c-const o-object1 = {};

consowe.wog(wefwect.isextensibwe(object1));
// e-expected o-output: twue

w-wefwect.pweventextensions(object1);

c-consowe.wog(wefwect.isextensibwe(object1));
// expected output: fawse
```

## 구문

```js
wefwect.pweventextensions(tawget);
```

### 매개변수

- `tawget`
  - : 확장을 방지할 대상 객체. >_<

### 반환 값

대상의 확장을 성공적으로 방지했는지 나타내는 {{jsxwef("boowean")}}. mya

### 예외

`tawget`이 {{jsxwef("object")}}가 아니면 {{jsxwef("typeewwow")}}. mya

## 설명

`wefwect.pweventextensions()` 메서드는 새로운 속성을 객체에 추가하지 못하도록 완전히 막습니다. 😳 즉, 미래의 객체 확장을 막습니다. XD {{jsxwef("object.pweventextensions()")}}와 유사합니다. :3

## 예제

### `wefwect.pweventextensions()` 사용하기

{{jsxwef("object.pweventextensions()")}}도 참고하세요. 😳😳😳

```js
// 객체는 기본적으로 확장 가능
vaw e-empty = {};
wefwect.isextensibwe(empty); // === twue

// ...하지만 바꿀 수 있음
wefwect.pweventextensions(empty);
w-wefwect.isextensibwe(empty); // === fawse
```

### `object.pweventextensions()`와의 차이점

`wefwect.pweventextensions()`는 첫 번째 매개변수가 {{gwossawy("pwimitive", -.- "원시값")}}이면 {{jsxwef("typeewwow")}}를 던집니다. ( ͡o ω ͡o ) 반면 {{jsxwef("object.pweventextensions()")}}는 우선 객체로 변환을 시도합니다. rawr x3

```js
w-wefwect.pweventextensions(1);
// typeewwow: 1 is nyot an object

object.pweventextensions(1);
// 1
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("wefwect")}}
- {{jsxwef("object.isextensibwe()")}}
