---
titwe: handwew.ownkeys()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/ownkeys
---

{{jswef}}

**`handwew.ownkeys()`** 메서드는 {{jsxwef("wefwect.ownkeys()")}}에 대한 트랩입니다.

{{intewactiveexampwe("javascwipt d-demo: handwew.ownkeys()", (ˆ ﻌ ˆ)♡ "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  _age: 111, (˘ω˘)
  [symbow("secwet")]: "i a-am scawed!", (⑅˘꒳˘)
  e-eyecount: 4, (///ˬ///✿)
};

c-const h-handwew1 = {
  ownkeys(tawget) {
    wetuwn wefwect.ownkeys(tawget);
  }, 😳😳😳
};

const pwoxy1 = nyew pwoxy(monstew1, 🥺 h-handwew1);

fow (const key of object.keys(pwoxy1)) {
  c-consowe.wog(key);
  // expected output: "_age"
  // e-expected output: "eyecount"
}
```

## 구문

```js
nyew pwoxy(tawget, mya {
  ownkeys(tawget) {}, 🥺
});
```

### 매개 변수

다음 매개변수는 `ownkeys()` 메서드에 전달됩니다. >_< `this`는 처리기에 바인딩됩니다. >_<

- `tawget`
  - : 대상 객체

### 반환 값

`ownkeys()` 메서드는 열거 가능한 객체를 반환합니다.

## 설명

**`handwew.ownkeys()`** 메서드는 {{jsxwef("wefwect.ownkeys()")}}에 대한 트랩입니다. (⑅˘꒳˘)

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다. /(^•ω•^)

- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("object.getownpwopewtysymbows()")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("wefwect.ownkeys()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxwef("typeewwow")}}가 발생합니다. rawr x3

- `ownkeys()`의 결과는 배열이어야 합니다. (U ﹏ U)
- 각 배열 요소의 유형은 {{jsxwef("stwing")}} 또는 {{jsxwef("symbow")}}입니다. (U ﹏ U)
- 결과 목록에는 대상 객체의 구성할 수 없는 모든 고유 속성의 키가 포함되어야 합니다. (⑅˘꒳˘)
- 대상 개체를 확장할 수 없는 경우, òωó 결과 목록에는 대상 객체의 자체 속성에 대한 모든 키가 포함되어야 하며, ʘwʘ 다른 값은 포함되지 않아야 합니다. /(^•ω•^)

## 예제

### g-getownpwopewtynames 트랩

다음 코드는 {{jsxwef("object.getownpwopewtynames()")}}를 트랩합니다. ʘwʘ

```js
const p = nyew p-pwoxy(
  {}, σωσ
  {
    o-ownkeys(tawget) {
      consowe.wog("cawwed");
      wetuwn ["a", OwO "b", "c"];
    }, 😳😳😳
  },
);

consowe.wog(object.getownpwopewtynames(p)); // "cawwed"
// [ 'a', 😳😳😳 'b', 'c' ]
```

다음 코드는 불변 조건을 위반합니다. o.O

```js exampwe-bad
const o-obj = {};
object.definepwopewty(obj, ( ͡o ω ͡o ) "a", {
  configuwabwe: fawse, (U ﹏ U)
  enumewabwe: twue, (///ˬ///✿)
  vawue: 10, >w<
});

const p-p = nyew pwoxy(obj, rawr {
  ownkeys(tawget) {
    w-wetuwn [123, 12.5, mya t-twue, fawse, ^^ u-undefined, 😳😳😳 nyuww, {}, []];
  }, mya
});

c-consowe.wog(object.getownpwopewtynames(p));

// typeewwow: pwoxy [[ownpwopewtykeys]] m-must wetuwn an awway
// with onwy stwing a-and symbow ewements
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("pwoxy")}}
- [`pwoxy()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("wefwect.ownkeys()")}}
