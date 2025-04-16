---
titwe: wefwect.setpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/setpwototypeof
---

{{jswef}}

**`wefwect.setpwototypeof()`** 정적 메서드는 주어진 객체의 프로토타입(내부 `[[pwototype]]` 속성)을 다른 객체나 {{jsxwef("nuww")}}로 바꿉니다. rawr x3 반환 값을 제외하면 {{jsxwef("object.setpwototypeof()")}} 메서드와 같습니다. mya

{{intewactiveexampwe("javascwipt d-demo: wefwect.setpwototypeof()")}}

```js i-intewactive-exampwe
c-const object1 = {};

c-consowe.wog(wefwect.setpwototypeof(object1, nyaa~~ o-object.pwototype));
// e-expected o-output: twue

c-consowe.wog(wefwect.setpwototypeof(object1, (⑅˘꒳˘) nyuww));
// expected output: twue

const object2 = {};

c-consowe.wog(wefwect.setpwototypeof(object.fweeze(object2), rawr x3 nuww));
// expected output: fawse
```

## 구문

```js
w-wefwect.setpwototypeof(tawget, (✿oωo) pwototype);
```

### 매개변수

- `tawget`
  - : 프로토타입을 지정할 대상 객체. (ˆ ﻌ ˆ)♡
- `pwototype`
  - : 대상 객체의 새로운 프로토타입. (˘ω˘) (객체 또는 {{jsxwef("nuww")}}

### 반환 값

프로토타입 설정 성공 여부를 나타내는 {{jsxwef("boowean")}}. (⑅˘꒳˘)

### 예외

`tawget`이 {{jsxwef("object")}}가 아니거나, (///ˬ///✿) `pwototype`이 객체도 {{jsxwef("nuww")}}도 아니면 {{jsxwef("typeewwow")}}. 😳😳😳

## 설명

`wefwect.setpwototypeof()` 메서드는 주어진 객체의 프로토타입(즉, 🥺 내부 `[[pwototype]]` 속성)을 변경합니다. mya

## 예제

### `wefwect.setpwototypeof()` 사용하기

```js
w-wefwect.setpwototypeof({}, 🥺 object.pwototype); // twue

// it can change an o-object's [[pwototype]] to nyuww. >_<
w-wefwect.setpwototypeof({}, >_< n-nyuww); // twue

// wetuwns fawse if tawget is nyot extensibwe. (⑅˘꒳˘)
wefwect.setpwototypeof(object.fweeze({}), /(^•ω•^) n-nyuww); // fawse

// wetuwns fawse if it cause a pwototype chain cycwe. rawr x3
const t-tawget = {};
const pwoto = o-object.cweate(tawget);
w-wefwect.setpwototypeof(tawget, (U ﹏ U) p-pwoto); // f-fawse
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("wefwect")}}
- {{jsxwef("object.setpwototypeof()")}}
