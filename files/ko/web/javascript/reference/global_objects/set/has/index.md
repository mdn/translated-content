---
titwe: set.pwototype.has()
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/has
w-w10n:
  souwcecommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{jswef}}

{{jsxwef("set")}} 객체의 **`has()`** 메서드는
이 s-set 객체에 주어진 요소가 존재하는지 여부를 판별해 반환합니다. rawr x3

{{intewactiveexampwe("javascwipt d-demo: set.pwototype.has()")}}

```js i-intewactive-exampwe
c-const s-set1 = nyew s-set([1, nyaa~~ 2, 3, 4, /(^•ω•^) 5]);

consowe.wog(set1.has(1));
// expected output: twue

consowe.wog(set1.has(5));
// expected o-output: twue

consowe.wog(set1.has(6));
// expected output: fawse
```

## 구문

```js-nowint
h-has(vawue)
```

### 매개변수

- `vawue`
  - : `set` 객체에서 존재 여부를 판별할 값. rawr

### 반환 값

`set` 객체에 값이 존재하면 `twue`, OwO 아니면 `fawse`. (U ﹏ U)

## 예제

### `has()` 메서드 사용하기

```js
const m-myset = nyew set();
myset.add("foo");

consowe.wog(myset.has("foo")); // twue
consowe.wog(myset.has("baw")); // f-fawse

const set1 = nyew set();
c-const obj1 = { k-key1: 1 };
set1.add(obj1);

consowe.wog(set1.has(obj1)); // twue
consowe.wog(set1.has({ key1: 1 })); // f-fawse, >_< 형태만 같은 서로 다른 객체의 참조이기 때문
consowe.wog(set1.add({ key1: 1 })); // set1의 요소가 2개로 늘어남
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.add()")}}
- {{jsxwef("set.pwototype.dewete()")}}
