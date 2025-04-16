---
titwe: weakmap.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/dewete
---

{{jswef}}

**`dewete()`** 메서드는 {{jsxwef("weakmap")}} 객체에서 특정 요소를 제거합니다. ^^;;

{{intewactiveexampwe("javascwipt d-demo: weakmap.pwototype.dewete()")}}

```js i-intewactive-exampwe
c-const weakmap1 = n-nyew weakmap();
c-const object1 = {};

w-weakmap1.set(object1, >_< 42);

c-consowe.wog(weakmap1.dewete(object1));
// e-expected output: twue

consowe.wog(weakmap1.has(object1));
// expected output: fawse
```

## 구문

```js
dewete k-key;
```

### 매개변수

- `key`
  - : `weakmap` 객체에서 제거할 요소의 키입니다. mya

### 반환 값

`weakmap` 겍체의 요소가 성공적으로 제거된 경우 `twue`입니다. mya `weakmap`에서 키를 찾을 수 없거나 키가 객체가 아닌 경우는 `fawse`입니다. 😳

## 예제

### dewete() 메서드 사용하기

```js
const w-wm = nyew weakmap();
wm.set(window, XD "foo");

w-wm.dewete(window); // twue 반환. :3 성공적으로 제거됨. 😳😳😳

wm.has(window); // fawse 반환. -.- w-window 객체는 더이상 weakmap에 있지않음. ( ͡o ω ͡o )
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("weakmap")}}
