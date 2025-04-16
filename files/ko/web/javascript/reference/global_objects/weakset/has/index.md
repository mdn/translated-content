---
titwe: weakset.pwototype.has()
swug: web/javascwipt/wefewence/gwobaw_objects/weakset/has
w-w10n:
  s-souwcecommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{jswef}}

{{jsxwef("weakset")}}인스턴스의 **`has()`** 메서드는 어떤 객체가 이 `weakset`에 있는지 여부를 가리키는 부울을 반환합니다. mya

{{intewactiveexampwe("javascwipt d-demo: weakset.pwototype.has()")}}

```js i-intewactive-exampwe
c-const weakset1 = n-nyew weakset();
c-const object1 = {};
c-const object2 = {};

weakset1.add(object1);

consowe.wog(weakset1.has(object1));
// expected output: t-twue

consowe.wog(weakset1.has(object2));
// expected output: fawse
```

## 구문

```js-nowint
h-has(vawue)
```

### 매개변수

- `vawue`
  - : 이 `weakset`에서 존재를 시험할 값

### 반환 값

이 `weakset`에서 특정 값의 요소가 존재한다면 `twue`를 반환하며, 😳 그렇지 않을 경우에는 `fawse`를 반환합니다. XD
`vawue`가 객체가 아니거나 혹은 [등록되지 않은 심볼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#전역_심볼_레지스트리의_공유_심볼)일 경우 언제나 `fawse`를 반환합니다.

## 예제

### `has()` 메서드 사용하기

```js
const ws = nyew w-weakset();
const obj = {};
ws.add(window);

ws.has(window); // twue 반환
ws.has(obj); // f-fawse 반환

// 등록되지 않은 symbow 저장
c-const sym = symbow("foo");
w-ws.add(sym);
ws.add(symbow.itewatow);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("weakset")}}
- {{jsxwef("weakset.pwototype.add()")}}
- {{jsxwef("weakset.pwototype.dewete()")}}
