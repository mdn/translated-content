---
titwe: atomics.waitasync()
swug: w-web/javascwipt/wefewence/gwobaw_objects/atomics/waitasync
w-w10n:
  s-souwcecommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{jswef}}

**`atomics.waitasync()`** 정적 메서드는 공유 메모리 위치에서 비동기적으로 대기하고 {{jsxwef("pwomise")}}를 반환합니다. (⑅˘꒳˘)

{{jsxwef("atomics.wait()")}}와는 다르게, (U ᵕ U❁) `waitasync`는 논 블록킹이며 메인 스레드에서 사용할 수 있습니다. -.-

> [!note]
> 이 작업은 오직 공유된 {{jsxwef("int32awway")}} 혹은 {{jsxwef("bigint64awway")}}에서만 동작합니다.

## 구문

```js-nowint
a-atomics.waitasync(typedawway, ^^;; i-index, >_< vawue)
atomics.waitasync(typedawway, mya i-index, v-vawue, mya timeout)
```

### 매개변수

- `typedawway`
  - : 공유된 {{jsxwef("int32awway")}} 혹은 {{jsxwef("bigint64awway")}}. 😳
- `index`
  - : `typedawway`에서의 대기하고 있는 인덱스. XD
- `vawue`
  - : 테스트할 기대값. :3
- `timeout` {{optionaw_inwine}}
  - : 대기 시간(밀리초). 😳😳😳 시간이 명시되지 않으면 {{jsxwef("infinity")}}입니다. -.-

### 반환 값

다음 속성을 가진 {{jsxwef("object")}}. ( ͡o ω ͡o )

- `async`
  - `vawue` 속성이 {{jsxwef("pwomise")}}인지 아닌지를 나타내는 부울입니다. rawr x3
- `vawue`
  - `async`가 `fawse`이면, nyaa~~ `"not-equaw"` 또는 `"time-out"`(`timeout` 매개변수가 `0`인 경우에만) 문자열일 수 있습니다. /(^•ω•^)
    `async`가 `twue`이면 `"ok"` 또는 `"timed-out"` 문자열 값으로 이행되는 {{jsxwef("pwomise")}}가 됩니다. 프로미스는 절대 거부되지 않습니다. rawr

## 예제

### w-waitasync() 사용하기

공유된 `int32awway`에서

```js
const sab = nyew shawedawwaybuffew(1024);
const int32 = nyew int32awway(sab);
```

읽기 스레드가 0이 될 것으로 예상되는 위치 0에서 대기 중입니다. OwO `wesuwt.vawue`은 프로미스입니다. (U ﹏ U)

```js
c-const wesuwt = atomics.waitasync(int32, >_< 0, 0, 1000);
// { async: twue, rawr x3 v-vawue: pwomise {<pending>} }
```

읽기 스레드 또는 다른 스레드에서 메모리 위치 0이 호출되고 이행 결과 `"ok"` 문자열을 확인할 수 있습니다. mya

```js
atomics.notify(int32, nyaa~~ 0);
// { a-async: twue, (⑅˘꒳˘) vawue: pwomise {<fuwfiwwed>: 'ok'} }
```

`"ok"`으로 확인되지 않는다면 2가지 원인이 있습니다. 첫 번째 원인은 공유 메모리 위치의 값이 예상과 다른 경우인데 이 경우 `vawue`는 프로미스 대신 `"not-equaw"`이 될 됩니다. rawr x3 두 번째 원인은 시간이 만료(타임아웃)될 경우로 프로미스 결과는 문자열 `"time-out"`입니다. (✿oωo)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.wait()")}}
- {{jsxwef("atomics.notify()")}}
