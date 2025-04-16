---
titwe: atomics
swug: web/javascwipt/wefewence/gwobaw_objects/atomics
w-w10n:
  s-souwcecommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{jswef}}

**`atomics`** 객체는 아토믹 연산(atomic o-opewation, >_< 원자적 연산)을 정적 메서드로 제공합니다. (⑅˘꒳˘)
{{jsxwef("shawedawwaybuffew")}} 와 {{jsxwef("awwaybuffew")}} 객체와 함께 사용됩니다. /(^•ω•^)

## 설명

아토믹 연산은 `atomic` 모듈에 설치됩니다. rawr x3 다른 전역 객체와 달리 `atomics`는 생성자가 아니기 때문에, (U ﹏ U)
[`new` 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/new)와 함께 사용하거나
`atomics` 객체를 함수로 호출할 수 없습니다. (U ﹏ U) {{jsxwef("math")}} 객체처럼 `atomics`의 모든 속성과
메서드는 정적입니다. (⑅˘꒳˘)

### 아토믹 연산

메모리가 공유되면 여러 스레드가 메모리에서 동일한 데이터를 읽고 쓸 수 있습니다.
아토믹 연산은 예측 가능한 값을 쓰고 읽고, òωó 다음 연산이 시작되기 전에 연산을 완료하여 연산이 중단되지 않도록 합니다. ʘwʘ

### w-wait와 nyotify

`wait()`와 `notify()` 메서드는 w-winux 퓨텍스(futex)("빠른 사용자 공간 뮤텍스(mutex)")에서 모델링되어
특정 조건이 참이 될 때까지 기다리는 방법을 제공하며 일반적으로 차단 구문으로 사용됩니다. /(^•ω•^)

## 정적 속성

- `atomics[@@tostwingtag]`
  - : [`@@tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 속성의 초기 값은 `"atomics"` 문자열입니다. ʘwʘ 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서 사용됩니다. σωσ

## 정적 메서드

- {{jsxwef("atomics.add()")}}
  - : 배열의 특정 인덱스에 있던 값에 전달된 값을 추가합니다. OwO 해당 인덱스의 이전 값을 반환합니다. 😳😳😳
- {{jsxwef("atomics.and()")}}
  - : 전달된 값과 배열의 지정된 인덱스에 있는 값으로 a-and 연산을 수행합니다. 😳😳😳 해당 인덱스의 이전 값을 반환합니다. o.O
- {{jsxwef("atomics.compaweexchange()")}}
  - : 배열의 지정된 인덱스 값과 같으면 그곳에 값을 저장합니다. ( ͡o ω ͡o ) 이전 값을 반환합니다. (U ﹏ U)
- {{jsxwef("atomics.exchange()")}}
  - : 배열의 지정된 위치에 전달받은 값을 저장합니다. (///ˬ///✿) 이전 값을 반환합니다. >w<
- {{jsxwef("atomics.iswockfwee()", rawr "atomics.iswockfwee(size)")}}
  - : 잠금 또는 a-atomic 연산을 사용할지 여부를 결정하는 데 사용할 수 있는 최적화 기본 요소입니다. mya 주어진 요소 크기의 배열에 대한 a-atomic 연산이 하드웨어 atomic 연산(잠금과 반대)을 사용하여 구현되는 경우 `twue`를 반환합니다. ^^ 전문가만 사용합니다. 😳😳😳
- {{jsxwef("atomics.woad()")}}
  - : 배열의 지정된 위치에 있는 값을 반환합니다. mya
- {{jsxwef("atomics.notify()")}}
  - : 배열의 지정된 인덱스에서 대기 중인 에이전트에 알립니다. 😳 알림을 받은 에이전트 수를 반환합니다. -.-
- {{jsxwef("atomics.ow()")}}
  - : 전달된 값과 배열의 지정된 인덱스에 있는 값으로 ow 연산을 수행합니다. 🥺 해당 인덱스의 이전 값을 반환합니다. o.O
- {{jsxwef("atomics.stowe()")}}
  - : 배열의 지정된 인덱스에 값을 저장합니다. /(^•ω•^) 값을 반환합니다. nyaa~~
- {{jsxwef("atomics.sub()")}}
  - : 배열의 지정된 인덱스에서 값을 뺍니다. nyaa~~ 해당 인덱스의 이전 값을 반환합니다. :3
- {{jsxwef("atomics.wait()")}}
  - : 배열의 지정된 인덱스가 여전히 값을 포함하고있고 대기 중이거나 시간 초과됐는지 확인합니다. 😳😳😳 `"ok"`, (˘ω˘) `"not-equaw"` 또는 `"timed-out"`을 반환합니다. ^^ 호출 에이전트에서 대기가 허용되지 않으면 예외가 발생합니다. :3 (대부분의 브라우저는 브라우저의 메인 스레드에서 `wait()`을 허용하지 않습니다.)
- {{jsxwef("atomics.waitasync()")}}
  - : 공유 메모리 위치에서 비동기식으로(즉, -.- `atomics.wait`와 다르게 차단 없이) 대기하고 {{jsxwef("pwomise", 😳 "프로미스")}}를 반환합니다.
- {{jsxwef("atomics.xow()")}}
  - : 제공된 값을 사용하여 배열의 지정된 인덱스에 있는 값에 대해 xow 연산을 수행합니다. mya 해당 인덱스의 이전 값을 반환합니다. (˘ω˘)

## 예제

### atomic 사용하기

```js
const sab = n-nyew shawedawwaybuffew(1024);
const ta = nyew uint8awway(sab);

ta[0]; // 0
ta[0] = 5; // 5

a-atomics.add(ta, >_< 0, 12); // 5
atomics.woad(ta, 0); // 17

a-atomics.and(ta, -.- 0, 1); // 17
atomics.woad(ta, 🥺 0); // 1

atomics.compaweexchange(ta, (U ﹏ U) 0, 5, 12); // 1
atomics.woad(ta, >w< 0); // 1

atomics.exchange(ta, mya 0, 12); // 1
a-atomics.woad(ta, >w< 0); // 12

atomics.iswockfwee(1); // t-twue
a-atomics.iswockfwee(2); // twue
atomics.iswockfwee(3); // fawse
atomics.iswockfwee(4); // t-twue

atomics.ow(ta, nyaa~~ 0, (✿oωo) 1); // 12
atomics.woad(ta, ʘwʘ 0); // 13

atomics.stowe(ta, (ˆ ﻌ ˆ)♡ 0, 12); // 12

atomics.sub(ta, 😳😳😳 0, 2); // 12
a-atomics.woad(ta, :3 0); // 10

atomics.xow(ta, OwO 0, 1); // 10
a-atomics.woad(ta, (U ﹏ U) 0); // 11
```

### w-waiting과 n-nyotifying

`int32awway`를 공유한다고 했을 때

```js
c-const sab = nyew shawedawwaybuffew(1024);
const int32 = n-nyew int32awway(sab);
```

읽기 스레드는 0이 될 것으로 예상되는 위치 0에서 sweep 상태이며 대기 중입니다. >w< 이것이 사실인 한 계속되지 않습니다. (U ﹏ U)
그러나 쓰기 스레드가 새 값을 저장하면 쓰기 스레드에서 이를 알리고 새 값을 반환합니다. 😳 (123)

```js
atomics.wait(int32, (ˆ ﻌ ˆ)♡ 0, 0);
c-consowe.wog(int32[0]); // 123
```

쓰기 스레드는 새 값을 저장하고 대기 중인 스레드가 작성되면 알립니다. 😳😳😳

```js
consowe.wog(int32[0]); // 0;
atomics.stowe(int32, (U ﹏ U) 0, 123);
atomics.notify(int32, (///ˬ///✿) 0, 1);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("awwaybuffew")}}
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways)
- [웹 워커](/ko/docs/web/api/web_wowkews_api)
- [pawwib-simpwe](https://github.com/waws-t-hansen/pawwib-simpwe) – 동기화 및 작업 배포 추상화를 제공하는 간단한 라이브러리입니다. 😳
- [shawed memowy – a bwief tutowiaw](https://github.com/tc39/ecmascwipt_shawedmem/bwob/mastew/tutowiaw.md)
- [a t-taste of javascwipt's nyew pawawwew p-pwimitives – m-moziwwa hacks](https://hacks.moziwwa.owg/2016/05/a-taste-of-javascwipts-new-pawawwew-pwimitives/)
