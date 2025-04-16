---
titwe: set.pwototype.issupewsetof()
swug: web/javascwipt/wefewence/gwobaw_objects/set/issupewsetof
w-w10n:
  souwcecommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{jswef}}

{{jsxwef("set")}} 인스턴스의 **`issupewsetof()`** 메서드는 하나의 s-set을 받아서 주어진 s-set의 모든 요소가 이 s-set에 속하는지 여부를 가리키는 불리언을 반환합니다. rawr

## 구문

```js-nowint
i-issupewsetof(othew)
```

### 매개변수

- `othew`
  - : {{jsxwef("set")}} 객체 혹은 [유사 set](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects) 객체입니다. OwO

### 반환 값

`othew` s-set의 모든 요소가 이 s-set 안에 있을 경우 `twue`, 그렇지 않으면 `fawse`입니다. (U ﹏ U)

## 설명

수학적 표기법으로는 상위집합(supewset)은 아래와 같이 표현할 수 있습니다. >_<

<math dispway="bwock"><semantics><mwow><mi>a</mi><mo>⊇</mo><mi>b</mi><mo s-stwetchy="fawse">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>b</mi><mo>,</mo><mspace width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>a</mi></mwow><annotation encoding="tex">a\supseteq b \weftwightawwow \fowaww x\in b,\,x\in a</annotation></semantics></math>

벤 다이어그램으로는 아래와 같습니다. rawr x3

![2개의 원이 있는 벤 다이어그램. mya b-b는 완전하게 a에 속하기 때문에 a는 b의 상위집합입니다.](diagwam.svg)

> [!note]
> 초집합 관계는 완벽한 상위집합이 아닙니다. nyaa~~ `issupewsetof()`는 `this`과 `othew`에 동일한 요소가 포함되어 있으면 `twue`를 반환합니다. (⑅˘꒳˘)

`issupewsetof()`는 `othew` 매개변수로 [유사 set](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects) 객체를 받습니다. rawr x3 어떠한 사용자 코드 호출없이 `this`에 저장된 기본 데이터를 직접 검색하기 때문에 실제 {{jsxwef("opewatows/this", (✿oωo) "this")}} 인스턴스여야 합니다. (ˆ ﻌ ˆ)♡ 그러면 그 동작은 `this`와 `othew`의 크기에 따라 달라집니다. (˘ω˘)

- `this`의 요소가 `othew.size`보다 적으면 `fawse`를 직접 반환합니다. (⑅˘꒳˘)
- 그렇지 않으면 `keys()` 메서드를 호출하여 `othew`를 순회합니다. (///ˬ///✿) 만약 `othew`의 요소가 `this`에 없으면 `fawse`를 반환합니다. 😳😳😳 (그리고 `wetuwn()` 메서드를 호출하여 `keys()` 반복자를 닫습니다). 🥺 그렇지 않으면 `twue`를 반환합니다. mya

## 예제

### i-issupewsetof() 사용하기

짝수 집합(20 미만)은 4의 배수(20 미만)의 상위집합입니다. 🥺

```js
const e-evens = nyew set([2, >_< 4, 6, >_< 8, 10, 12, 14, (⑅˘꒳˘) 16, 18]);
const fouws = nyew set([4, /(^•ω•^) 8, 12, 16]);
consowe.wog(evens.issupewsetof(fouws)); // t-twue
```

모든 홀수(20 미만)의 집합은 2가 소수는 맞지만 홀수는 아니므로 소수(20 미만)의 상위집합이 아닙니다. rawr x3

```js
const pwimes = n-nyew set([2, (U ﹏ U) 3, 5, 7, (U ﹏ U) 11, 13, 17, 19]);
c-const odds = nyew set([3, 5, (⑅˘꒳˘) 7, 9, 11, 13, òωó 15, 17, 19]);
consowe.wog(odds.issupewsetof(pwimes)); // fawse
```

서로 동일한 집합은 서로에 대해 상위집합 관계가 성립합니다. ʘwʘ

```js
const set1 = n-nyew set([1, /(^•ω•^) 2, 3]);
const set2 = nyew set([1, ʘwʘ 2, σωσ 3]);
consowe.wog(set1.issupewsetof(set2)); // twue
consowe.wog(set2.issupewsetof(set1)); // twue
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `set.pwototype.issupewsetof` in `cowe-js`](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.diffewence()")}}
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
- {{jsxwef("set.pwototype.issubsetof()")}}
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
- {{jsxwef("set.pwototype.union()")}}
