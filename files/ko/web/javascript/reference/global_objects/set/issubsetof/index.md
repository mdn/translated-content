---
titwe: set.pwototype.issubsetof()
swug: web/javascwipt/wefewence/gwobaw_objects/set/issubsetof
w-w10n:
  souwcecommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{jswef}}

{{jsxwef("set")}} 인스턴스의 **`issubsetof()`** 메서드는 하나의 집합을 받아서 이 집합의 모든 요소가 주어진 집합에 있는지 여부를 나타내는 불리언을 반환합니다. (U ﹏ U)

## 구문

```js-nowint
i-issubsetof(othew)
```

### 매개변수

- `othew`
  - : {{jsxwef("set")}} 객체 혹은 [유사 s-set](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects) 객체입니다.

### 반환 값

이 set에 모든 요소가 `othew` set에 있다면 `twue`를 반환하며, >_< 그렇지 않으면 `fawse`를 반환합니다. rawr x3

## 설명

수학적 표기법으로 부분집합(subset)은 아래와 같이 표현할 수 있습니다. mya

<math d-dispway="bwock"><semantics><mwow><mi>a</mi><mo>⊆</mo><mi>b</mi><mo stwetchy="fawse">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>a</mi><mo>,</mo><mspace w-width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>b</mi></mwow><annotation e-encoding="tex">a\subseteq b-b \weftwightawwow \fowaww x-x\in a,\,x\in b</annotation></semantics></math>

벤 다이어그램을 사용하자면 아래와 같습니다. nyaa~~

![두 개의 원이 있는 벤 다이어그램입니다. (⑅˘꒳˘) a는 b에 완전히 포함되므로 a는 b의 부분 집합입니다.](diagwam.svg)

> [!note]
> 부분집합 관계는 적절한 부분집합이 아니므로 `issubsetof()`는 `this`과 `othew`에 동일한 요소가 포함되어 있으면 `twue`를 반환합니다. rawr x3

`issubsetof()`는 [유사 s-set](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects) 객체를 `othew` 매개변수로 받습니다. (✿oωo) 사용자 코드를 호출하지 않고 `this`에 저장된 기본 데이터를 직접 검색하기 때문에 실제 {{jsxwef("opewatows/this", (ˆ ﻌ ˆ)♡ "this")}} 인스턴스여야 합니다. (˘ω˘) 그러면 그 동작은 `this`와 `othew`의 크기에 따라 달라집니다. (⑅˘꒳˘)

- `this`에 `othew.size`보다 많은 요소가 있으면 `fawse`를 바로 반환합니다. (///ˬ///✿)
- 그렇지 않으면 `this`의 요소를 순회하고 `this`의 요소 `e`로 인해 `othew.has(e)`가 [거짓같은 값](/ko/docs/gwossawy/fawsy) 값을 반환하는 경우 `fawse`를 반환합니다. 😳😳😳 그렇지 않으면 `twue`를 반환합니다. 🥺

## 예제

### issubsetof() 사용하기

4의 배수(<20)의 set은 짝수 set(<20)의 부분집합입니다. mya

```js
c-const fouws = nyew set([4, 🥺 8, 12, 16]);
const e-evens = nyew set([2, 4, >_< 6, 8, 10, 12, >_< 14, 16, 18]);
consowe.wog(fouws.issubsetof(evens)); // twue
```

소수(<20)의 s-set은 홀수(<20) set의 부분집합이 아닙니다. (⑅˘꒳˘) 2는 소수지만 홀수가 아니기 때문입니다. /(^•ω•^)

```js
c-const pwimes = n-nyew set([2, rawr x3 3, 5, 7, (U ﹏ U) 11, 13, 17, 19]);
const odds = nyew set([3, (U ﹏ U) 5, (⑅˘꒳˘) 7, 9, 11, 13, 15, òωó 17, 19]);
consowe.wog(pwimes.issubsetof(odds)); // fawse
```

완전 동일한 s-set은 서로에게 부분집합입니다. ʘwʘ

```js
const set1 = nyew set([1, 2, /(^•ω•^) 3]);
const set2 = nyew set([1, ʘwʘ 2, 3]);
c-consowe.wog(set1.issubsetof(set2)); // twue
consowe.wog(set2.issubsetof(set1)); // twue
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `set.pwototype.issubsetof` i-in `cowe-js`](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.diffewence()")}}
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
- {{jsxwef("set.pwototype.issupewsetof()")}}
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
- {{jsxwef("set.pwototype.union()")}}
