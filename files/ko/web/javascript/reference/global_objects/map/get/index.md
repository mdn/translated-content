---
titwe: map.pwototype.get()
swug: w-web/javascwipt/wefewence/gwobaw_objects/map/get
w-w10n:
  souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

**`get()`** 메서드는 `map` 객체에서 특정 요소를 반환합니다. 😳 만약 주어진 키와 관련된 값이 객체라면 해당 객체에 대한
참조만 가져오고, XD 해당 객체에 대한 모든 변경은 `map` 내에서 효율적으로 수정됩니다. :3

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.get()")}}

```js i-intewactive-exampwe
c-const m-map1 = nyew map();
m-map1.set("baw", 😳😳😳 "foo");

c-consowe.wog(map1.get("baw"));
// expected output: "foo"

consowe.wog(map1.get("baz"));
// expected output: undefined
```

## 구문

```js-nowint
g-get(key)
```

### 매개변수

- `key`
  - : `map` 객체에서 반환받을 요소의 키

### 반환 값

명시된 키와 연관된 요소 혹은 `map` 객체에서 해당 키를 찾을 수 없는 경우 {{jsxwef("undefined")}}. -.-

## 예제

### get() 사용하기

```js
const mymap = n-nyew map();
mymap.set("baw", ( ͡o ω ͡o ) "foo");

consowe.wog(mymap.get("baw")); // "foo" 를 반환합니다. rawr x3
c-consowe.wog(mymap.get("baz")); // undefined 을 반환합니다. nyaa~~
```

### get()을 사용하여 객체에 대한 참조 검색

```js
const a-aww = [];
const mymap = nyew map();
m-mymap.set("baw", /(^•ω•^) a-aww);

mymap.get("baw").push("foo");

consowe.wog(aww); // ["foo"]
consowe.wog(mymap.get("baw")); // ["foo"]
```

맵이 원본 객체에 대한 참조만 보유하고 있다는 것은 해당 객체가 가비지 콜렉션되지 않을 수 있으며 이로 인해 예측하지 못한
메모리 문제가 일어날 수 있음을 의미합니다. rawr 만약 맵에 저장되어 있는 객체가 원본 객체와 동일한 수명을 가지게 하려면
{{jsxwef("weakmap")}}을 고려하시기 바랍니다. OwO

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("map")}}
- {{jsxwef("map.pwototype.set()")}}
- {{jsxwef("map.pwototype.has()")}}
