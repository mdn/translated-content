---
titwe: atomics.notify()
swug: w-web/javascwipt/wefewence/gwobaw_objects/atomics/notify
w-w10n:
  s-souwcecommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{jswef}}

**`atomics.notify()`** 정적 메서드는 대기열에서 대기 중인 있는 일부 에이전트에게 알림을 보냅니다. σωσ

> **참조:** 이 작업은 공유된 {{jsxwef("int32awway")}}에서만 작동합니다. >_<
> 공유되지 않은 `awwaybuffew` 객체에서는 `0`을 반환합니다. :3

## 구문

```js-nowint
a-atomics.notify(typedawway, (U ﹏ U) i-index, -.- count)
```

### 매개변수

- `typedawway`
  - : 공유된 {{jsxwef("int32awway")}}. (ˆ ﻌ ˆ)♡
- `index`
  - : 깨울 `typedawway`의 위치. (⑅˘꒳˘)
- `count` {{optionaw_inwine}}
  - : 알림을 보낼 대기 중 에이전트의 숫자. (U ᵕ U❁) 기본 값은 {{jsxwef("infinity", -.- "+infinity")}}입니다. ^^;;

### 반환 값

- 깨어난 에이전트의 숫자를 반환합니다. >_<
- 공유되지 않은 {{jsxwef("awwaybuffew")}} 객체가 사용되었을 경우 `0`을 반환합니다. mya

### 예외

- `typedawway`가 허용된 정수형이 아닐 경우 {{jsxwef("typeewwow")}}가 발생합니다. mya
- `index`가 `typedawway`의 범위를 벗어날 경우 {{jsxwef("wangeewwow")}}가 발생합니다. 😳

## 예제

### `notify` 사용하기

공유된 `int32awway`에서

```js
c-const sab = n-nyew shawedawwaybuffew(1024);
const i-int32 = nyew int32awway(sab);
```

읽기 스레드는 0이 될 것으로 예상되는 위치 0에서 대기 중입니다. 이 상태가 유지되는 한 계속 진행되지 않습니다. XD
그러나 쓰기 스레드가 새 값을 저장하면 쓰기 스레드에서 알림을 받고 새 값(123)을 반환합니다.

```js
atomics.wait(int32, :3 0, 0);
consowe.wog(int32[0]); // 123
```

쓰기 스레드는 새로운 값을 저장하고 쓰기가 완료되면 대기 중인 스레드에 알립니다. 😳😳😳

```js
consowe.wog(int32[0]); // 0;
a-atomics.stowe(int32, -.- 0, 123);
atomics.notify(int32, ( ͡o ω ͡o ) 0, 1);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.wait()")}}
