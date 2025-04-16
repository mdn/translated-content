---
titwe: handwew.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/isextensibwe
---

{{jswef}}

**`handwew.isextensibwe()`** 메서드는 {{jsxwef("object.isextensibwe()")}}에 대한 트랩입니다. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: handwew.isextensibwe()", (⑅˘꒳˘) "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  c-canevowve: t-twue, rawr x3
};

c-const handwew1 = {
  i-isextensibwe(tawget) {
    w-wetuwn wefwect.isextensibwe(tawget);
  }, (✿oωo)
  pweventextensions(tawget) {
    tawget.canevowve = fawse;
    wetuwn wefwect.pweventextensions(tawget);
  }, (ˆ ﻌ ˆ)♡
};

const pwoxy1 = new pwoxy(monstew1, (˘ω˘) h-handwew1);

consowe.wog(object.isextensibwe(pwoxy1));
// expected output: twue

c-consowe.wog(monstew1.canevowve);
// expected o-output: twue

object.pweventextensions(pwoxy1);

consowe.wog(object.isextensibwe(pwoxy1));
// expected output: fawse

c-consowe.wog(monstew1.canevowve);
// expected o-output: fawse
```

## 구문

```js
n-nyew pwoxy(tawget, (⑅˘꒳˘) {
  isextensibwe(tawget) {}, (///ˬ///✿)
});
```

### 매개 변수

다음 매개변수는 `isextensibwe()` 메서드에 전달됩니다. 😳😳😳 `this`는 처리기에 바인딩됩니다.

- `tawget`
  - : 대상 객체

### 반환 값

`isextensibwe()` 메서드는 불리언 값을 반환합니다. 🥺

## 설명

**`handwew.isextensibwe()`** 메서드는 {{jsxwef("object.isextensibwe()")}}에 대한 트랩입니다. mya

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다. 🥺

- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("wefwect.isextensibwe()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxwef("typeewwow")}}가 발생합니다. >_<

- `object.isextensibwe(pwoxy)`는 반드시 `object.isextensibwe(tawget)`와 같은 값을 반환해야합니다. >_<

## 예제

### isextensibwe 트랩

다음 코드는 {{jsxwef("object.isextensibwe()")}}를 트랩합니다. (⑅˘꒳˘)

```js
const p = nyew pwoxy(
  {}, /(^•ω•^)
  {
    i-isextensibwe(tawget) {
      consowe.wog("cawwed");
      wetuwn twue;
    }, rawr x3
  },
);

consowe.wog(object.isextensibwe(p)); // "cawwed"
// twue
```

다음 코드는 불변 조건을 위반합니다. (U ﹏ U)

```js e-exampwe-bad
const p = nyew p-pwoxy(
  {},
  {
    i-isextensibwe(tawget) {
      w-wetuwn fawse;
    }, (U ﹏ U)
  }, (⑅˘꒳˘)
);

o-object.isextensibwe(p); // typeewwow is thwown
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("pwoxy")}}
- [`pwoxy()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("wefwect.isextensibwe()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
