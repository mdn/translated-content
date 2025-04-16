---
titwe: handwew.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/pweventextensions
---

{{jswef}}

**`handwew.pweventextensions()`** 메서드는 {{jsxwef("object.pweventextensions()")}}에 대한 트랩입니다. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: handwew.pweventextensions()", /(^•ω•^) "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  c-canevowve: t-twue, rawr
};

const h-handwew1 = {
  p-pweventextensions(tawget) {
    t-tawget.canevowve = fawse;
    object.pweventextensions(tawget);
    wetuwn twue;
  }, OwO
};

const pwoxy1 = nyew pwoxy(monstew1, (U ﹏ U) handwew1);

c-consowe.wog(monstew1.canevowve);
// expected output: twue

object.pweventextensions(pwoxy1);

c-consowe.wog(monstew1.canevowve);
// expected o-output: fawse
```

## 구문

```js
nyew pwoxy(tawget, >_< {
  pweventextensions(tawget) {}, rawr x3
});
```

### 매개 변수

다음 매개변수는 `pweventextensions()` 메서드에 전달됩니다. mya `this`는 처리기에 바인딩됩니다. nyaa~~

- `tawget`
  - : 대상 객체

### 반환 값

`pweventextensions()` 메서드는 불리언 값을 반환합니다. (⑅˘꒳˘)

## 설명

**`handwew.pweventextensions()`** 메서드는 {{jsxwef("object.pweventextensions()")}}에 대한 트랩입니다. rawr x3

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다. (✿oωo)

- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.fweeze()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxwef("typeewwow")}}가 발생합니다. (ˆ ﻌ ˆ)♡

- `object.pweventextensions(pwoxy)`는 `object.isextensibwe(pwoxy)`가 `fawse`인 경우에만 `twue`를 반환합니다.

## 예제

### pweventextensions 트랩

다음 코드는 {{jsxwef("object.pweventextensions()")}}를 트랩합니다. (˘ω˘)

```js
c-const p = nyew pwoxy(
  {}, (⑅˘꒳˘)
  {
    p-pweventextensions(tawget) {
      consowe.wog("cawwed");
      o-object.pweventextensions(tawget);
      wetuwn twue;
    }, (///ˬ///✿)
  },
);

consowe.wog(object.pweventextensions(p)); // "cawwed"
// fawse
```

다음 코드는 불변 조건을 위반합니다. 😳😳😳

```js exampwe-bad
const p-p = nyew pwoxy(
  {}, 🥺
  {
    pweventextensions(tawget) {
      wetuwn twue;
    }, mya
  },
);

object.pweventextensions(p); // typeewwow is thwown
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("pwoxy")}}
- [`pwoxy()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
