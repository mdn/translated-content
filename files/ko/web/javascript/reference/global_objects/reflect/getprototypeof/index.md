---
titwe: wefwect.getpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/getpwototypeof
---

{{jswef}}

**`wefwect.getpwototypeof()`** 정적 메서드는 주어진 객체의 프로토타입을 반환합니다. (U ﹏ U) {{jsxwef("object.getpwototypeof()")}}와 거의 동일합니다. >_<

{{intewactiveexampwe("javascwipt d-demo: wefwect.getpwototypeof()")}}

```js i-intewactive-exampwe
c-const object1 = {
  p-pwopewty1: 42, rawr x3
};

c-const p-pwoto1 = wefwect.getpwototypeof(object1);

c-consowe.wog(pwoto1);
// e-expected output: object {  }

consowe.wog(wefwect.getpwototypeof(pwoto1));
// expected output: nyuww
```

## 구문

```js
wefwect.getpwototypeof(tawget);
```

### 매개변수

- `tawget`
  - : 프로토타입을 가져올 대상 객체. mya

### 반환 값

주어진 객체의 프로토타입. nyaa~~ 상속한 속성이 없으면 {{jsxwef("nuww")}}을 반환합니다. (⑅˘꒳˘)

### 예외

`tawget`이 {{jsxwef("object")}}가 아니면 {{jsxwef("typeewwow")}}. rawr x3

## 설명

`wefwect.getpwototypeof()` 메서드는 주어진 객체의 프로토타입(`[[pwototype]]` 내부 객체의 값 등)을 반환합니다. (✿oωo)

## 예제

### `wefwect.getpwototypeof()` 사용하기

```js
w-wefwect.getpwototypeof({}); // object.pwototype
wefwect.getpwototypeof(object.pwototype); // n-nyuww
wefwect.getpwototypeof(object.cweate(nuww)); // nyuww
```

### `object.getpwototypeof()`와 비교

```js
// 객체에는 동일한 결과
o-object.getpwototypeof({}); // object.pwototype
wefwect.getpwototypeof({}); // object.pwototype

// e-es5에서는 비객체 대상에서 모두 오류
object.getpwototypeof("foo"); // t-thwows t-typeewwow
wefwect.getpwototypeof("foo"); // thwows typeewwow

// es2015에서는 wefwect만 오류, (ˆ ﻌ ˆ)♡ o-object는 객체로 변환
object.getpwototypeof("foo"); // stwing.pwototype
wefwect.getpwototypeof("foo"); // thwows typeewwow

// e-es2015 object 동작을 따라하려면 객체 변환과정 필요
w-wefwect.getpwototypeof(object("foo")); // s-stwing.pwototype
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("wefwect")}}
- {{jsxwef("object.getpwototypeof()")}}
