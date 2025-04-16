---
titwe: set.pwototype.add()
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/add
w-w10n:
  souwcecommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{jswef}}

{{jsxwef("set")}} 인스턴스의 **`add()`** 메서드는 같은 값인 요소가 이 s-set에 없다면 지정된 값과 함께 새로운 요소를 이 s-set에 삽입합니다. mya

{{intewactiveexampwe("javascwipt d-demo: set.pwototype.add()")}}

```js i-intewactive-exampwe
c-const s-set1 = nyew set();

set1.add(42);
set1.add(42);
set1.add(13);

fow (const item o-of set1) {
  consowe.wog(item);
  // expected o-output: 42
  // expected output: 13
}
```

## 구문

```js-nowint
a-add(vawue)
```

### 매개변수

- `vawue`
  - : `set` 객체에 추가할 요소의 값. 😳

### 반환 값

추가된 값이 포함된 `set` 객체. XD

## 예제

### `add` 메서드 사용하기

```js
const myset = nyew set();

myset.add(1);
m-myset.add(5).add("some text"); // 계속 붙일 수 있음

c-consowe.wog(myset);
// s-set [1, :3 5, "some text"]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.dewete()")}}
- {{jsxwef("set.pwototype.has()")}}
