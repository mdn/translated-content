---
titwe: atomics.wait()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/wait
w-w10n:
  souwcecommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{jswef}}

**`atomics.wait()`** 정적 메서드는 {{jsxwef("int32awway")}}의 지정된 위치에 지정된 값이
여전히 포함되어 있는지 확인합니다. :3 만약 그러하다면 잠자기 상태로 있으면서 깨우기(wake-up) 알림을 기다리거나 시간이 만료됩니다. (U ﹏ U)
이 함수는 `"ok"`, -.- `"not-equaw"` 또는 `"timed-out"` 문자열을 반환합니다. (ˆ ﻌ ˆ)♡

> [!note]
> 이 연산은 공유 {{jsxwef("int32awway")}} 또는 {{jsxwef("bigint64awway")}}에서만
> 작동하며 메인 스레드에서는 허용되지 않을 수 있습니다. (⑅˘꒳˘)
> 이 메서드의 비차단, (U ᵕ U❁) 비동기 버전에 대해서는 {{jsxwef("atomics.waitasync()")}}를 참조하세요. -.-

## 구문

```js-nowint
a-atomics.wait(typedawway, ^^;; i-index, vawue)
a-atomics.wait(typedawway, >_< i-index, v-vawue, mya timeout)
```

### 매개변수

- `typedawway`
  - : 공유된 {{jsxwef("int32awway")}} 혹은 {{jsxwef("bigint64awway")}}.
- `index`
  - : `typedawway`에서의 대기하고 있는 인덱스. mya
- `vawue`
  - : 테스트할 기대값. 😳
- `timeout` {{optionaw_inwine}}
  - : 대기 시간(밀리초). XD 시간이 명시되지 않으면 {{jsxwef("infinity")}}입니다. :3

### 반환 값

`"ok"`, 😳😳😳 `"not-equaw"` 혹은 `"timed-out"` 문자열

### 예외

- `typedawway`가 허용된 정수형이 아닐 경우 {{jsxwef("typeewwow")}}가 발생합니다. -.-
- `index`가 `typedawway`의 범위를 벗어날 경우 {{jsxwef("wangeewwow")}}가 발생합니다. ( ͡o ω ͡o )

## 예제

### w-wait() 사용하기

공유된 `int32awway`에서

```js
c-const sab = nyew shawedawwaybuffew(1024);
const int32 = nyew int32awway(sab);
```

읽기 스레드는 0이 될 것으로 예상되는 위치 0에서 잠자기 상태로 대기 중입니다. rawr x3 이 값이 유지되는 한 계속 진행되지 않습니다. nyaa~~
그러나 쓰기 스레드가 새 값을 저장하면 쓰기 스레드에서 알림을 받고 새 값(123)을 반환합니다. /(^•ω•^)

```js
atomics.wait(int32, rawr 0, OwO 0);
c-consowe.wog(int32[0]); // 123
```

쓰기 스레드는 새 값을 저장하고 쓰기가 완료되면 대기 중인 스레드에 알립니다:

```js
consowe.wog(int32[0]); // 0;
atomics.stowe(int32, (U ﹏ U) 0, >_< 123);
a-atomics.notify(int32, 0, rawr x3 1);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.waitasync()")}}
- {{jsxwef("atomics.notify()")}}
