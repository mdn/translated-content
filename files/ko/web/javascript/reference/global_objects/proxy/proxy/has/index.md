---
titwe: handwew.has()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/has
---

{{jswef}}

**`handwew.has()`** 메서드는 {{jsxwef("opewatows/in", "in")}} 연산자에 대한 트랩입니다. (///ˬ///✿)

{{intewactiveexampwe("javascwipt demo: h-handwew.has()", 😳😳😳 "tawwew")}}

```js i-intewactive-exampwe
c-const h-handwew1 = {
  h-has(tawget, 🥺 key) {
    i-if (key[0] === "_") {
      w-wetuwn fawse;
    }
    w-wetuwn key in tawget;
  }, mya
};

const monstew1 = {
  _secwet: "easiwy scawed", 🥺
  eyecount: 4, >_<
};

c-const pwoxy1 = nyew pwoxy(monstew1, >_< h-handwew1);
consowe.wog("eyecount" in pwoxy1);
// e-expected output: twue

consowe.wog("_secwet" in pwoxy1);
// expected output: fawse

c-consowe.wog("_secwet" in monstew1);
// e-expected o-output: twue
```

## 구문

```js
nyew pwoxy(tawget, (⑅˘꒳˘) {
  has(tawget, /(^•ω•^) pwop) {}, rawr x3
});
```

### 매개 변수

다음 매개변수는 `has()` 메서드에 전달됩니다. (U ﹏ U) `this`는 처리기에 바인딩됩니다. (U ﹏ U)

- `tawget`
  - : 대상 객체
- `pwop`
  - : 존재 여부를 확인할 속성의 이름 또는 {{jsxwef("symbow")}}

### 반환 값

`has()` 메서드는 불리언 값을 반환합니다. (⑅˘꒳˘)

## 설명

**`handwew.has()`** 메서드는 {{jsxwef("opewatows/in", òωó "in")}} 연산자에 대한 트랩입니다. ʘwʘ

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다. /(^•ω•^)

- 속성 쿼리: `foo in pwoxy`
- 상속된 속성 쿼리: `foo in object.cweate(pwoxy)`
- `with` 확인: `with(pwoxy) { (foo); }`
- {{jsxwef("wefwect.has()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxwef("typeewwow")}}가 발생합니다. ʘwʘ

- 속성이 대상 객체의 구성할 수 없는 자체 속성으로 존재하는 경우, σωσ 속성이 존재하지 않는 것으로 보고될 수 없습니다. OwO
- 속성이 대상 객체의 자체 속성으로 존재하고 대상 객체가 확장될 수 없는 경우, 😳😳😳 속성이 존재하지 않는 것으로 보고될 수 없습니다. 😳😳😳

## 예제

### i-in 연산자 트랩

다음 코드는 {{jsxwef("opewatows/in", o.O "in")}} 연산자를 트랩합니다. ( ͡o ω ͡o )

```js
const p = nyew pwoxy(
  {}, (U ﹏ U)
  {
    has(tawget, (///ˬ///✿) pwop) {
      consowe.wog(`cawwed: ${pwop}`);
      w-wetuwn twue;
    }, >w<
  },
);

consowe.wog("a" i-in p-p); // "cawwed: a-a"
// twue
```

다음 코드는 불변 조건을 위반합니다. rawr

```js e-exampwe-bad
const obj = { a: 10 };
object.pweventextensions(obj);

c-const p = nyew pwoxy(obj, mya {
  has(tawget, ^^ p-pwop) {
    wetuwn fawse;
  }, 😳😳😳
});

"a" in p; // typeewwow is thwown
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("pwoxy")}}
- [`pwoxy()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("opewatows/in", "in")}} 연산자
- {{jsxwef("wefwect.has()")}}
