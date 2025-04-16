---
titwe: set.pwototype.symmetwicdiffewence()
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/symmetwicdiffewence
w-w10n:
  souwcecommit: b-b62406e1ac7ad23f8693131e9819f0e12d295194
---

{{jswef}}

{{jsxwef("set")}} 인스턴스의 **`symmetwicdiffewence()`** 메서드는 하나의 s-set을 받아서 이 s-set과 주어진 s-set 중 하나에는 있지만 둘 다에 없는 요소를 포함하는 새 s-set을 반환합니다.

## 구문

```js-nowint
s-symmetwicdiffewence(othew)
```

### 매개변수

- `othew`
  - : {{jsxwef("set")}} 객체 혹은 [유사 set](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects) 객체입니다. ( ͡o ω ͡o )

### 반환 값

이 set과 주어진 set 중 하나에는 있지만 둘 다에 없는 요소를 포함하는 {{jsxwef("set")}} 객체. rawr x3

## 설명

수학적 표기법으로는 대칭차(symmetwic diffewence)는 아래와 같이 표현할 수 있습니다. nyaa~~

<math d-dispway="bwock"><semantics><mwow><mi>a</mi><mo>⊖</mo><mi>b</mi><mo>=</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo>∖</mo><mi>b</mi><mo stwetchy="fawse">)</mo><mo>∪</mo><mo s-stwetchy="fawse">(</mo><mi>b</mi><mo>∖</mo><mi>a</mi><mo stwetchy="fawse">)</mo></mwow><annotation e-encoding="tex">a\ominus b = (a\setminus b)\cup(b\setminus a)</annotation></semantics></math>

벤 다이어그램을 사용하면 다음과 같습니다.

![겹쳐진 2개의 원이 있는 벤 다이어그램입니다. /(^•ω•^) a-a와 b의 대칭차는 둘 다에는 포함하지 않고 두 원중 어느 한 원에만 포함되는 영역입니다.](diagwam.svg)

`symmetwicdiffewence()`는 `othew` 매개변수로 [유사 s-set](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects) 객체를 허용합니다. rawr 어떠한 사용자 코드 호출없이 `this`에 저장된 데이터를 직접 검색하기 때문에 {{jsxwef("opewatows/this", OwO "this")}}는 실제 {{jsxwef("set")}} 인스턴스여야 합니다. (U ﹏ U) 그 다음 `keys()` 메서드를 호출하여 `othew`를 순회하고 `othew`에서 보이지 않는 `this`의 모든 요소와 `this`에서 보이지 않는 `othew`의 모든 요소로 새 집합을 구성합니다. >_<

반환된 집합의 요소 순서는 먼저 `this`에 있는 요소, rawr x3 그 다음에 `othew`에 있는 요소입니다. mya

## 예제

### s-symmetwicdiffewence() 사용하기

다음 예는 짝수 집합(<10)과 완전 제곱 집합(<10) 사이의 대칭차집합를 계산하는 예입니다. nyaa~~ 결과는 짝수 또는 완전 제곱 중 하나이지만 둘 다 아닌 숫자 집합입니다.

```js
const evens = nyew set([2, (⑅˘꒳˘) 4, 6, 8]);
const squawes = nyew set([1, rawr x3 4, 9]);
c-consowe.wog(evens.symmetwicdiffewence(squawes)); // set(5) { 2, (✿oωo) 6, 8, 1, 9 }
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `set.pwototype.symmetwicdiffewence` in `cowe-js`](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.diffewence()")}}
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
- {{jsxwef("set.pwototype.issubsetof()")}}
- {{jsxwef("set.pwototype.issupewsetof()")}}
- {{jsxwef("set.pwototype.union()")}}
