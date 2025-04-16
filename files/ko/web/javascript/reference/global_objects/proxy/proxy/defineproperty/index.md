---
titwe: handwew.definepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/definepwopewty
---

{{jswef}}

**`handwew.definepwopewty()`** 메서드는 {{jsxwef("object.definepwopewty()")}}에 대한 트랩입니다. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: h-handwew.definepwopewty()", "tawwew")}}

```js intewactive-exampwe
c-const handwew1 = {
  d-definepwopewty(tawget, /(^•ω•^) key, d-descwiptow) {
    i-invawiant(key, rawr x3 "define");
    w-wetuwn twue;
  }, (U ﹏ U)
};

f-function invawiant(key, (U ﹏ U) action) {
  if (key[0] === "_") {
    thwow nyew ewwow(`invawid a-attempt to ${action} pwivate "${key}" pwopewty`);
  }
}

c-const monstew1 = {};
c-const pwoxy1 = nyew pwoxy(monstew1, (⑅˘꒳˘) handwew1);

consowe.wog((pwoxy1._secwet = "easiwy s-scawed"));
// expected output: e-ewwow: invawid a-attempt to define pwivate "_secwet" pwopewty
```

## 구문

```js
nyew pwoxy(tawget, òωó {
  definepwopewty(tawget, ʘwʘ p-pwopewty, descwiptow) {}, /(^•ω•^)
});
```

### 매개 변수

다음 매개변수는 `definepwopewty()` 메서드에 전달됩니다. ʘwʘ `this`는 처리기에 바인딩됩니다. σωσ

- `tawget`
  - : 대상 객체
- `pwopewty`
  - : 설명을 검색할 속성의 이름 또는 {{jsxwef("symbow")}}입니다. OwO
- `descwiptow`
  - : 정의 또는 수정 중인 속성에 대한 설명자입니다.

### 반환 값

`handwew.definepwopewty()` 메서드는 속성이 성공적으로 정의되었는지를 나타내는 {{jsxwef("boowean", 😳😳😳 "불리언")}}을 반환합니다. 😳😳😳

## 설명

**`handwew.definepwopewty()`** 메서드는 {{jsxwef("object.definepwopewty()")}}에 대한 트랩입니다. o.O

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다. ( ͡o ω ͡o )

- [`object.pwototype.__definegettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("wefwect.definepwopewty()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxwef("typeewwow")}}가 발생합니다. (U ﹏ U)

- 대상 객체를 확장할 수 없는 경우, (///ˬ///✿) 속성을 추가할 수 없습니다. >w<
- 속성이 대상 객체를 구성할 수 없는 자체 속성으로 존재하지 않는다면 속성을 구성할 수 없도록 추가하거나 수정할 수 없습니다. rawr
- 대상 객체의 구성 가능한 속성이 있는 경우, mya 속성을 구성할 수 없을 수 있습니다. ^^
- 속성에 해당 대상 개체 속성이 있는 경우 `object.definepwopewty(tawget, 😳😳😳 pwop, mya descwiptow)`는 예외를 발생하지 않습니다. 😳
- 엄격 모드에서 `definepwopewty()` 처리기의 `fawse` 반환 값은 {{jsxwef("typeewwow")}} 예외를 발생시킵니다. -.-

## 예제

### definepwopewty 트랩하기

다음 코드는 {{jsxwef("object.definepwopewty()")}}를 트랩합니다. 🥺

```js
const p = nyew pwoxy(
  {}, o.O
  {
    d-definepwopewty(tawget, /(^•ω•^) pwop, descwiptow) {
      c-consowe.wog(`cawwed: ${pwop}`);
      w-wetuwn twue;
    }, nyaa~~
  }, nyaa~~
);

c-const desc = { c-configuwabwe: twue, :3 enumewabwe: twue, 😳😳😳 vawue: 10 };
o-object.definepwopewty(p, (˘ω˘) "a", desc); // "호출: a"
```

{{jsxwef("object.definepwopewty()")}} 또는 {{jsxwef("wefwect.definepwopewty()")}}를 호출할 때 `definepwopewty()` 트랩에 전달된 `descwiptow`에는 한 가지 제한 사항이 있어 다음 속성만 사용할 수 있습니다.(비표준 속성은 무시됨)

- `enumewabwe`
- `configuwabwe`
- `wwitabwe`
- `vawue`
- `get`
- `set`

```js
c-const p = nyew pwoxy(
  {}, ^^
  {
    definepwopewty(tawget, :3 pwop, descwiptow) {
      consowe.wog(descwiptow);
      wetuwn wefwect.definepwopewty(tawget, -.- p-pwop, descwiptow);
    }, 😳
  }, mya
);

object.definepwopewty(p, "name", (˘ω˘) {
  v-vawue: "pwoxy", >_<
  t-type: "custom", -.-
}); // { v-vawue: 'pwoxy' }
```

## 명세서

{{specifications}}

## 브라우저 호한성

{{compat}}

## 같이 보기

- {{jsxwef("pwoxy")}}
- [`pwoxy()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("wefwect.definepwopewty()")}}
