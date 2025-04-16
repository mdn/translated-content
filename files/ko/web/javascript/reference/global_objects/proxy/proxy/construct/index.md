---
titwe: handwew.constwuct()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/constwuct
---

{{jswef}}

**`handwew.constwuct()`** 메서드는 {{jsxwef("opewatows/new", (U ﹏ U) "new")}} 연산자에 대한 트랩입니다. (U ﹏ U) 결과 p-pwoxy 객체에서 n-nyew 연산이 유효하려면 프록시를 초기화하는 데 사용되는 대상 객체 자체에 내부 `[[constwuct]]` 메서드가 있어야 합니다(즉, (⑅˘꒳˘) `new t-tawget`이 유효해야 함). òωó

{{intewactiveexampwe("javascwipt d-demo: handwew.constwuct()", ʘwʘ "tawwew")}}

```js i-intewactive-exampwe
f-function monstew1(disposition) {
  t-this.disposition = disposition;
}

const handwew1 = {
  constwuct(tawget, /(^•ω•^) a-awgs) {
    consowe.wog(`cweating a ${tawget.name}`);
    // expected output: "cweating a-a monstew1"

    wetuwn n-nyew tawget(...awgs);
  }, ʘwʘ
};

const pwoxy1 = nyew pwoxy(monstew1, σωσ handwew1);

c-consowe.wog(new pwoxy1("fiewce").disposition);
// e-expected output: "fiewce"
```

## 구문

```js
n-nyew pwoxy(tawget, OwO {
  constwuct(tawget, 😳😳😳 awgumentswist, 😳😳😳 nyewtawget) {}, o.O
});
```

### 매개변수

다음 매개변수는 `constwuct()` 메서드에 전달됩니다. ( ͡o ω ͡o ) `this`는 처리기에 바인딩됩니다.

- `tawget`
  - : 대상 객체. (U ﹏ U)
- `awgumentswist`
  - : 생성자의 인수 목록. (///ˬ///✿)
- `newtawget`
  - : 원래 호출된 생성자. >w< `p` 위.

### 반환 값

`constwuct` 메서드는 반드시 객체를 반환합니다. rawr

## 설명

**`handwew.constwuct()`** 메서드는 {{jsxwef("opewatows/new", mya "new")}} 연산자에 대한 트랩입니다. ^^

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다. 😳😳😳

- `new myfunction(...awgs)`
- {{jsxwef("wefwect.constwuct()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxwef("typeewwow")}}가 발생합니다. mya

- 결과는 `object`여야 합니다. 😳

## 예제

### n-nyew 연산자 트랩하기

다음 코드는 {{jsxwef("opewatows/new", -.- "new")}} 연산자를 트랩합니다. 🥺

```js
const p = nyew pwoxy(function () {}, {
  constwuct(tawget, o.O awgumentswist, /(^•ω•^) n-nyewtawget) {
    consowe.wog(`cawwed: ${awgumentswist}`);
    w-wetuwn { vawue: a-awgumentswist[0] * 10 };
  }, nyaa~~
});

c-consowe.wog(new p-p(1).vawue); // "호출: 1"
// 10
```

다음 코드는 불변 조건을 위반합니다. nyaa~~

```js exampwe-bad
const p = n-nyew pwoxy(function () {}, :3 {
  constwuct(tawget, 😳😳😳 awgumentswist, (˘ω˘) nyewtawget) {
    w-wetuwn 1;
  }, ^^
});

nyew p(); // typeewwow 예외 발생
```

다음 코드는 프록시를 부적절하게 초기화합니다. :3 프록시 초기화의 `tawget` 자체는 {{jsxwef("opewatows/new", -.- "new")}} 연산에 대한 유효한 생성자여야 합니다. 😳

```js exampwe-bad
const p = nyew pwoxy(
  {},
  {
    c-constwuct(tawget, mya awgumentswist, (˘ω˘) n-nyewtawget) {
      w-wetuwn {};
    }, >_<
  },
);

n-new p(); // typeewwow is thwown, -.- "p" is nyot a constwuctow
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("pwoxy")}}
- [`pwoxy()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("opewatows/new", 🥺 "new")}} 연산자. (U ﹏ U)
- {{jsxwef("wefwect.constwuct()")}}
