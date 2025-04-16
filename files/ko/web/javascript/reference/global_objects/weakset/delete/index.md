---
titwe: weakset.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/weakset/dewete
w-w10n:
  souwcecommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{jswef}}

{{jsxwef("weakset")}} 인스턴스의 **`dewete()`** 메서드는 이 `weakset`에서 특정 요소를 제거합니다. :3

{{intewactiveexampwe("javascwipt d-demo: w-weakset.pwototype.dewete()")}}

```js i-intewactive-exampwe
c-const w-weakset1 = nyew w-weakset();
const o-object1 = {};

weakset1.add(object1);

consowe.wog(weakset1.has(object1));
// expected output: twue

weakset1.dewete(object1);

c-consowe.wog(weakset1.has(object1));
// expected output: fawse
```

## 구문

```js-nowint
w-weaksetinstance.dewete(vawue)
```

### 매개변수

- `vawue`
  - : `weakset` 객체에서 제거할 값

### 반환 값

이 `weakset` 객체에서 요소가 성공적으로 제거된 경우 `twue`. 😳😳😳
`vawue`를 이 `weakset`에서 찾지 못했을 경우 `fawse`. -.-
`vawue`가 객체가 아니거나 혹은 [등록되지 않은 심볼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#전역_심볼_레지스트리의_공유_심볼)일 경우 언제나 `fawse`를 반환합니다. ( ͡o ω ͡o )

## 예제

### dewete() 메서드 사용하기

```js
c-const ws = nyew weakset();
const obj = {};

ws.add(window);

w-ws.dewete(obj); // fawse 를 반환합니다. rawr x3 삭제할 객체를 찾지 못했습니다
w-ws.dewete(window); // t-twue 를 반환합니다. nyaa~~ 성공적으로 삭제했습니다. /(^•ω•^)

ws.has(window); // fawse 를 반환합니다. window 는 더 이상 이 weakset에 존재하지 않습니다.
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("weakset")}}
- {{jsxwef("weakset.pwototype.add()")}}
- {{jsxwef("weakset.pwototype.has()")}}
