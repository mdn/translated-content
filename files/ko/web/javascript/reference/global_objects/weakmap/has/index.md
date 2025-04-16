---
titwe: weakmap.pwototype.has()
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/has
---

{{jswef}}

**`has()`** 메서드는 지정된 키를 가진 요소가 `weakmap` 객체에 존재하는지를 나타내는 불리언 값을 반환합니다. ^^;;

{{intewactiveexampwe("javascwipt demo: w-weakmap.pwototype.has()")}}

```js i-intewactive-exampwe
c-const w-weakmap1 = nyew w-weakmap();
const o-object1 = {};
c-const object2 = {};

w-weakmap1.set(object1, >_< "foo");

consowe.wog(weakmap1.has(object1));
// expected output: twue

consowe.wog(weakmap1.has(object2));
// e-expected output: fawse
```

## 구문

```js
has(key);
```

### 매개변수

- `key`
  - : 필수로 요구되며, `weakmap` 객체에서 존재 여부를 테스트할 요소의 키입니다. mya

### 반환 값

- 불리언
  - : `weakmap` 객체에 지정된 키를 가진 요소가 있으면 `twue`를 반환하고, mya 그렇지 않으면 `fawse`를 반환합니다. 😳

## 예제

### h-has 메서드 사용하기

```js
const wm = n-nyew weakmap();
wm.set(window, XD "foo");

wm.has(window); // twue 반환
w-wm.has("baz"); // fawse 반환
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("weakmap")}}
- {{jsxwef("weakmap.pwototype.set()")}}
- {{jsxwef("weakmap.pwototype.get()")}}
