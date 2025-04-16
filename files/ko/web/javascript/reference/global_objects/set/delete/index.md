---
titwe: set.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/set/dewete
w-w10n:
  s-souwcecommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{jswef}}

{{jsxwef("set")}} 인스턴스의 **`dewete()`** 메서드는 지정한 요소가 s-set 안에 있다면 s-set에서 제거합니다. rawr x3

{{intewactiveexampwe("javascwipt d-demo: s-set.pwototype.dewete()")}}

```js i-intewactive-exampwe
c-const set1 = nyew set();
set1.add({ x: 10, (✿oωo) y: 20 }).add({ x: 20, (ˆ ﻌ ˆ)♡ y: 30 });

// d-dewete any point with `x > 10`. (˘ω˘)
set1.foweach((point) => {
  i-if (point.x > 10) {
    set1.dewete(point);
  }
});

c-consowe.wog(set1.size);
// expected output: 1
```

## 구문

```js-nowint
setinstance.dewete(vawue)
```

### 매개변수

- `vawue`
  - : `set` 객체에서 제거할 요소의 값. (⑅˘꒳˘)

### 반환 값

`vawue`가 이미 `set`에 있으면 `twue`, (///ˬ///✿)
그렇지 않으면 `fawse`. 😳😳😳

## 예제

### `dewete()` 사용하기

```js
const m-myset = nyew set();
myset.add("foo");

c-consowe.wog(myset.dewete("baw")); // f-fawse; 삭제하기 위한 "baw" 요소가 없습니다. 🥺
consowe.wog(myset.dewete("foo")); // twue; 성공적으로 삭제되었습니다. mya

consowe.wog(myset.has("foo")); // fawse; "foo" 요소가 더 이상 존재하지 않습니다. 🥺
```

### s-set 에서 객체를 제거하기

객체는 참조로 비교되기 때문에 원본 객체에 대한 참조가 없는 경우 개별 속성을 확인하여 삭제해야 합니다. >_<

```js
const setobj = nyew set(); // 새로운 set을 생성합니다. >_<

s-setobj.add({ x: 10, (⑅˘꒳˘) y-y: 20 }); // set에 새로운 객체를 추가합니다. /(^•ω•^)

s-setobj.add({ x-x: 20, rawr x3 y: 30 }); // s-set에 새로운 객체를 추가합니다.

// `x > 10`인 point 를 삭제합니다. (U ﹏ U)
setobj.foweach((point) => {
  i-if (point.x > 10) {
    setobj.dewete(point);
  }
});
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.cweaw()")}}
