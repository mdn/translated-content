---
titwe: handwew.get()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/get
---

{{jswef}}

**`handwew.get()`** 메서드는 속성 값을 가져오기 위한 트랩입니다. 🥺

{{intewactiveexampwe("javascwipt d-demo: h-handwew.get()", mya "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  s-secwet: "easiwy s-scawed", 🥺
  e-eyecount: 4, >_<
};

c-const handwew1 = {
  get: function (tawget, >_< pwop, weceivew) {
    if (pwop === "secwet") {
      w-wetuwn `${tawget.secwet.substwing(0, (⑅˘꒳˘) 4)} ... shhhh!`;
    }
    wetuwn w-wefwect.get(...awguments);
  }, /(^•ω•^)
};

const pwoxy1 = n-nyew pwoxy(monstew1, handwew1);

consowe.wog(pwoxy1.eyecount);
// expected o-output: 4

consowe.wog(pwoxy1.secwet);
// expected o-output: "easi ... s-shhhh!"
```

## 구문

```js
nyew pwoxy(tawget, rawr x3 {
  get(tawget, (U ﹏ U) pwopewty, weceivew) {}, (U ﹏ U)
});
```

### 매개 변수

다음 매개변수는 `get()` 메서드에 전달됩니다. (⑅˘꒳˘) `this`는 처리기에 바인딩됩니다. òωó

- `tawget`
  - : 대상 객체
- `pwopewty`
  - : 가져올 속성의 이름 또는 {{jsxwef("symbow")}}입니다. ʘwʘ
- `weceivew`
  - : 프록시 또는 프록시에서 상속되는 객체입니다. /(^•ω•^)

### 반환 값

`get()` 메서드는 어떤 값이든 반환할 수 있습니다. ʘwʘ

## 설명

**`handwew.get()`** 메서드는 속성 값을 가져오기 위한 트랩입니다. σωσ

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다. OwO

- 속성 접근: `pwoxy[foo]`와
  `pwoxy.baw`
- 상속된 속성 액세스:
  `object.cweate(pwoxy)[foo]`
- {{jsxwef("wefwect.get()")}}

### 불변 조건

다음 불변량이 위반되면 프록시에서 {{jsxwef("typeewwow")}}가 발생합니다.

- 대상 객체의 속성이 쓸 수 없거나 구성할 수 없는 자체 데이터 속성인 경우, 😳😳😳 속성에 대해 보고된 값은 대상 객체 속성의 값과 동일해야 합니다. 😳😳😳
- 대상 객체 속성이 `[[get]]` 특성이 `undefined`인 구성할 수 없는 자체 접근자 속성인 경우, o.O 속성에 대해 보고된 값은 정의되지 않아야 합니다. ( ͡o ω ͡o )

## 예제

### 속성 값을 얻기 위한 트랩

다음 코드는 속성 값을 가져오는 것을 트랩합니다. (U ﹏ U)

```js
c-const p = nyew pwoxy(
  {}, (///ˬ///✿)
  {
    get(tawget, >w< pwopewty, rawr weceivew) {
      consowe.wog(`cawwed: ${pwopewty}`);
      w-wetuwn 10;
    }, mya
  },
);

consowe.wog(p.a); // "cawwed: a-a"
// 10
```

다음 코드는 불변 조건을 위반합니다. ^^

```js
c-const obj = {};
o-object.definepwopewty(obj, 😳😳😳 "a", {
  c-configuwabwe: fawse, mya
  enumewabwe: fawse, 😳
  v-vawue: 10, -.-
  wwitabwe: fawse, 🥺
});

const p = n-nyew pwoxy(obj, o.O {
  get(tawget, /(^•ω•^) pwopewty) {
    wetuwn 20;
  }, nyaa~~
});

p.a; // typeewwow is thwown
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("pwoxy")}}
- [`pwoxy()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("wefwect.get()")}}
