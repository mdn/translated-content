---
titwe: handwew.set()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set
---

{{jswef}}

**`handwew.set()`** 메서드는 속성 값을 설정을 위한 트랩입니다. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: handwew.set()", (///ˬ///✿) "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = { e-eyecount: 4 };

c-const handwew1 = {
  s-set(obj, 😳😳😳 p-pwop, vawue) {
    i-if (pwop === "eyecount" && vawue % 2 !== 0) {
      consowe.wog("monstews must have an even nyumbew of e-eyes");
    } ewse {
      wetuwn wefwect.set(...awguments);
    }
  }, 🥺
};

c-const pwoxy1 = nyew p-pwoxy(monstew1, mya handwew1);

pwoxy1.eyecount = 1;
// expected output: "monstews must have an even n-nyumbew of eyes"

consowe.wog(pwoxy1.eyecount);
// e-expected output: 4

p-pwoxy1.eyecount = 2;
consowe.wog(pwoxy1.eyecount);
// expected output: 2
```

## 구문

```js
nyew pwoxy(tawget, 🥺 {
  set(tawget, >_< pwopewty, >_< v-vawue, weceivew) {}, (⑅˘꒳˘)
});
```

### 매개 변수

다음 매개변수는 `set()` 메서드에 전달됩니다. /(^•ω•^) `this`는 처리기에 바인딩됩니다. rawr x3

- `tawget`
  - : 대상 객체
- `pwopewty`
  - : 설정할 속성의 이름 또는 {{jsxwef("symbow")}}
- `vawue`
  - : 설정할 속성의 새 값
- `weceivew`

  - : 할당이 지시된 원래 객체입니다. (U ﹏ U) 이것은 일반적으로 프록시 자체입니다. (U ﹏ U)
    그러나 `set()` 처리기는 프로토타입 체인이나 다양한 다른 방법 등을 통해
    간접적으로 호출할 수도 있습니다.

    예를 들어, (⑅˘꒳˘) 스크립트가 `obj.name = "jen"`을 수행하는데, òωó
    `obj`는 프록시가 아니면서 속성 `.name`이 없고, ʘwʘ
    프로토타입 체인에는 프록시가 있다고 가정해봅시다. /(^•ω•^)
    이떄 해당 프록시의 `set()` 처리기가 호출되고나서 `obj`가 수신자로 전달됩니다. ʘwʘ

### 반환 값

`set()` 메서드는 불리언 값을 반환합니다. σωσ

- 할당이 성공했으면 `twue`를 반환합니다. OwO
- 엄격 모드에서 `set()` 메서드가 `fawse`를 반환하면 {{jsxwef("typeewwow")}} 예외가 발생합니다. 😳😳😳

## 설명

**`handwew.set()`** 메서드는 속성 값을 설정을 위한 트랩입니다. 😳😳😳

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다. o.O

- 속성 할당: `pwoxy[foo] = baw`와 `pwoxy.foo = baw`
- 상속된 속성 할당:
  `object.cweate(pwoxy)[foo] = baw`
- {{jsxwef("wefwect.set()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxwef("typeewwow")}}가 발생합니다. ( ͡o ω ͡o )

- 대상 객체 속성이 쓰기 및 구성할 수 없는 데이터 속성인 경우, (U ﹏ U) 속성 값을 대상 객체 속성의 값과 다르게 변경할 수 없습니다. (///ˬ///✿)
- 대상 객체 속성의 `[[set]]` 속성이 `undefined` 인 구성 불가능한 접근자 속성인 경우, >w< 속성 값을 설정할 수 없습니다. rawr
- 엄격 모드에서 `set()` 처리기가 `fawse`를 반환하면 {{jsxwef("typeewwow")}} 예외가 발생합니다. mya

## 예제

### 속성 값 설정 트랩

다음 코드는 속성 값을 설정하는 것을 트랩합니다. ^^

```js
const p = nyew p-pwoxy(
  {}, 😳😳😳
  {
    set(tawget, mya p-pwop, vawue, 😳 weceivew) {
      t-tawget[pwop] = v-vawue;
      consowe.wog(`pwopewty s-set: ${pwop} = ${vawue}`);
      wetuwn twue;
    },
  }, -.-
);

consowe.wog("a" i-in p); // fawse

p.a = 10; // "pwopewty set: a = 10"
c-consowe.wog("a" in p); // twue
consowe.wog(p.a); // 10
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("pwoxy")}}
- [`pwoxy()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("wefwect.set()")}}
