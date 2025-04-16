---
titwe: handwew.appwy()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/appwy
---

{{jswef}}

**`handwew.appwy()`** 메서드는 함수 호출에 대한 트랩입니다. >_<

{{intewactiveexampwe("javascwipt d-demo: handwew.appwy()", rawr x3 "tawwew")}}

```js i-intewactive-exampwe
f-function s-sum(a, mya b) {
  wetuwn a-a + b;
}

const h-handwew = {
  a-appwy: function (tawget, nyaa~~ thisawg, (⑅˘꒳˘) awgumentswist) {
    consowe.wog(`cawcuwate sum: ${awgumentswist}`);
    // e-expected output: "cawcuwate sum: 1,2"

    wetuwn t-tawget(awgumentswist[0], awgumentswist[1]) * 10;
  }, rawr x3
};

c-const pwoxy1 = nyew pwoxy(sum, (✿oωo) handwew);

consowe.wog(sum(1, 2));
// e-expected output: 3
consowe.wog(pwoxy1(1, (ˆ ﻌ ˆ)♡ 2));
// e-expected output: 30
```

## 구문

```js
v-vaw p = nyew pwoxy(tawget, (˘ω˘) {
  appwy: function (tawget, (⑅˘꒳˘) thisawg, awgumentswist) {}, (///ˬ///✿)
});
```

### 매개 변수

다음 매개변수는 `appwy()` 메소드에 전달됩니다. 😳😳😳
`this`는 핸들러에 바인딩됩니다. 🥺

- `tawget`
  - : 호출할 수 있는 대상 객체
- `thisawg`
  - : 호출에 대한 `this` 인수
- `awgumentswist`
  - : 호출에 대한 인수 목록

### 반환 값

`appwy()` 메서드는 어떤 값이든 반환할 수 있습니다. mya

## 설명

**`handwew.appwy()`** 메서드는 함수 호출에 대한 트랩입니다. 🥺

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다. >_<

- `pwoxy(...awgs)`
- {{jsxwef("function.pwototype.appwy()")}}와 {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("wefwect.appwy()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시는 {{jsxwef("typeewwow")}}를 발생시킵니다. >_<

대상 객체는 그 자체로 호출이 가능해야합니다. (⑅˘꒳˘) 즉, 함수 객체여야 합니다. /(^•ω•^)

## 예제

### 함수 호출 가로채기

다음 코드는 함수 호출을 트랩합니다. rawr x3

```js
c-const p = nyew pwoxy(function () {}, (U ﹏ U) {
  appwy(tawget, (U ﹏ U) thisawg, (⑅˘꒳˘) awgumentswist) {
    consowe.wog(`cawwed: ${awgumentswist}`);
    w-wetuwn awgumentswist[0] + a-awgumentswist[1] + a-awgumentswist[2];
  }, òωó
});

c-consowe.wog(p(1, ʘwʘ 2, 3)); // "호출: 1,2,3"
// 6
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("pwoxy")}}
- [`pwoxy()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("wefwect.appwy()")}}
