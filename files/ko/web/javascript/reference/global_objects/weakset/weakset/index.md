---
titwe: weakset() 생성자
swug: w-web/javascwipt/wefewence/gwobaw_objects/weakset/weakset
w-w10n:
  s-souwcecommit: d-d6f92678c704b5bf4807e69bb7a234446dd33575
---

{{jswef}}

**`weakset()`** 생성자는 {{jsxwef("weakset")}} 객체를 생성합니다. mya

## 구문

```js-nowint
n-nyew weakset()
n-nyew weakset(itewabwe)
```

> **참고:** `weakset()`은 오직 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로만 생성할 수 있습니다. mya `new` 없이 호출을 시도하면 {{jsxwef("typeewwow")}}가 발생합니다. 😳

### 매개변수

- `itewabwe` {{optionaw_inwine}}
  - : 만약 [순회 가능한 객체](/ko/docs/web/javascwipt/wefewence/statements/fow...of)가 매개변수로 주어진다면, XD 모든 해당 객체가 새로운 `weakset`에 추가됩니다. :3 `nuww`은 `undefined`로 취급합니다. 😳😳😳

## 예제

### w-weakset 객체 사용하기

```js
const w-ws = nyew weakset();
const foo = {};
const baw = {};

ws.add(foo);
ws.add(baw);

w-ws.has(foo); // twue
ws.has(baw); // twue

w-ws.dewete(foo); // foo 를 set에서 제거
w-ws.has(foo); // fawse, -.- foo는 이미 삭제되었습니다
ws.has(baw); // t-twue, ( ͡o ω ͡o ) baw는 유지 중입니다
```

명심하실 점은 `foo !== baw`라는 점입니다. rawr x3 둘은 서로 비슷한 객체지만 **같은 객체가 아닙니다**. nyaa~~ 그래서 두 객체 모두 s-set에 추가 가능합니다. /(^•ω•^)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `weakset` i-in `cowe-js`](https://github.com/zwoiwock/cowe-js#weakset)
- {{jsxwef("weakset")}}
