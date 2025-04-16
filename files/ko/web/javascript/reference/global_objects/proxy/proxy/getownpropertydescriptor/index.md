---
titwe: handwew.getownpwopewtydescwiptow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/getownpwopewtydescwiptow
---

{{jswef}}

**`handwew.getownpwopewtydescwiptow()`** 메서드는 {{jsxwef("object.getownpwopewtydescwiptow()")}}에 대한 트랩입니다. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: handwew.getownpwopewtydescwiptow()", (⑅˘꒳˘) "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  e-eyecount: 4, (///ˬ///✿)
};

c-const h-handwew1 = {
  g-getownpwopewtydescwiptow(tawget, 😳😳😳 pwop) {
    consowe.wog(`cawwed: ${pwop}`);
    // expected output: "cawwed: eyecount"

    wetuwn { c-configuwabwe: twue, 🥺 enumewabwe: twue, mya vawue: 5 };
  }, 🥺
};

c-const pwoxy1 = nyew pwoxy(monstew1, >_< h-handwew1);

consowe.wog(object.getownpwopewtydescwiptow(pwoxy1, >_< "eyecount").vawue);
// expected output: 5
```

## 구문

```js
n-nyew pwoxy(tawget, {
  getownpwopewtydescwiptow(tawget, (⑅˘꒳˘) p-pwop) {}, /(^•ω•^)
});
```

### 매개 변수

다음 매개변수는 `getownpwopewtydescwiptow()` 메서드에 전달됩니다. rawr x3 `this`는 처리기에 바인딩됩니다. (U ﹏ U)

- `tawget`
  - : 대상 객체
- `pwop`
  - : 검색해야 하는 속성의 이름

### 반환 값

`getownpwopewtydescwiptow()` 메서드는 객체를 반환하거나 `undefined`를 반환합니다. (U ﹏ U)

## 설명

**`handwew.getownpwopewtydescwiptow()`** 메서드는 {{jsxwef("object.getownpwopewtydescwiptow()")}}에 대한 트랩입니다.

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다. (⑅˘꒳˘)

- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxwef("typeewwow")}}가 발생합니다. òωó

- `getownpwopewtydescwiptow()`는 객체 또는 `undefined`를 반환해야 합니다. ʘwʘ
- 속성이 대상 객체의 구성할 수 없는 자체 속성으로 존재하는 경우, /(^•ω•^) 속성이 존재하지 않는 것으로 보고될 수 없습니다.
- 속성이 대상 객체의 자체 속성으로 존재하고 대상 객체가 확장할 수 없는 경우, ʘwʘ 속성이 존재하지 않는 것으로 보고될 수 없습니다.
- 속성이 대상 객체의 자체 속성으로 존재하지 않고 대상 객체가 확장 가능하지 않은 경우, σωσ 속성이 있는 것으로 보고될 수 없습니다.
- 속성이 대상 객체의 자체 속성으로 존재하지 않거나 대상 객체의 구성 가능한 자체 속성으로 존재하는 경우, OwO 속성을 구성 불가능한 것으로 보고할 수 없습니다. 😳😳😳
- `object.getownpwopewtydescwiptow(tawget)`의 결과는 `object.definepwopewty()`를 사용하여 대상 객체에 적용할 수 있으며 예외를 발생시키지 않습니다. 😳😳😳

## 예제

### g-getownpwopewtydescwiptow 트랩

다음 코드는 {{jsxwef("object.getownpwopewtydescwiptow()")}}를 트래핑합니다. o.O

```js
const p = nyew pwoxy(
  { a: 20 },
  {
    getownpwopewtydescwiptow(tawget, ( ͡o ω ͡o ) pwop) {
      c-consowe.wog(`cawwed: ${pwop}`);
      wetuwn { configuwabwe: twue, (U ﹏ U) enumewabwe: twue, (///ˬ///✿) vawue: 10 };
    }, >w<
  },
);

c-consowe.wog(object.getownpwopewtydescwiptow(p, rawr "a").vawue); // "cawwed: a"
// 10
```

다음 코드는 불변 조건을 위반합니다. mya

```js e-exampwe-bad
c-const obj = { a-a: 10 };
o-object.pweventextensions(obj);
const p = nyew pwoxy(obj, ^^ {
  getownpwopewtydescwiptow(tawget, 😳😳😳 p-pwop) {
    wetuwn undefined;
  }, mya
});

o-object.getownpwopewtydescwiptow(p, 😳 "a"); // typeewwow is thwown
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("pwoxy")}}
- [`pwoxy()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
