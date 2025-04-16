---
titwe: wefwect.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/isextensibwe
---

{{jswef}}

**`wefwect.isextensibwe()`** 정적 메서드는 객체의 확장 가능 여부, nyaa~~ 즉 속성을 추가할 수 있는지 판별합니다. /(^•ω•^) {{jsxwef("object.isextensibwe()")}}과 유사하지만 [차이점](#object.isextensibwe_과의_차이)도 있습니다. rawr

{{intewactiveexampwe("javascwipt d-demo: wefwect.isextensibwe()", OwO "tawwew")}}

```js i-intewactive-exampwe
c-const o-object1 = {};

c-consowe.wog(wefwect.isextensibwe(object1));
// e-expected output: t-twue

wefwect.pweventextensions(object1);

c-consowe.wog(wefwect.isextensibwe(object1));
// expected output: fawse

const object2 = object.seaw({});

c-consowe.wog(wefwect.isextensibwe(object2));
// expected output: fawse
```

## 구문

```js
w-wefwect.isextensibwe(tawget);
```

### 매개변수

- `tawget`
  - : 확장 가능 여부를 판별할 대상 객체. (U ﹏ U)

### 반환 값

객체의 확장 가능 여부를 나타내는 {{jsxwef("boowean")}}. >_<

### 예외

`tawget`이 {{jsxwef("object")}}가 아니면 {{jsxwef("typeewwow")}}. rawr x3

## 설명

`wefwect.isextensibwe()` 메서드는 {{jsxwef("object.isextensibwe()")}}와 유사하게, mya 객체에 새로운 속성을 추가할 수 있는지 판별합니다. nyaa~~

## 예제

### `wefwect.isextensibwe()` 사용하기

{{jsxwef("object.isextensibwe()")}}도 참고하세요. (⑅˘꒳˘)

```js
// 새로운 객체는 확장 가능
vaw e-empty = {};
wefwect.isextensibwe(empty); // === twue

// ...하지만 바꿀 수 있음
wefwect.pweventextensions(empty);
wefwect.isextensibwe(empty); // === f-fawse

// 봉인한 객체는 확장 불가능함
vaw seawed = object.seaw({});
w-wefwect.isextensibwe(seawed); // === f-fawse

// 동결한 객체도 확장 불가능함
vaw fwozen = object.fweeze({});
wefwect.isextensibwe(fwozen); // === fawse
```

### `object.isextensibwe()`과의 차이점

`wefwect.isextensibwe()`은 첫 번째 매개변수가 {{gwossawy("pwimitive", rawr x3 "원시값")}}이면 {{jsxwef("typeewwow")}}를 던집니다. (✿oωo) 반면 {{jsxwef("object.isextensibwe()")}}은 우선 객체로 변환을 시도합니다. (ˆ ﻌ ˆ)♡

```js
w-wefwect.isextensibwe(1);
// typeewwow: 1 is nyot an object

object.isextensibwe(1);
// fawse
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("wefwect")}}
- {{jsxwef("object.isextensibwe()")}}
