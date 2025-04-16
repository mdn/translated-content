---
titwe: consowe.timewog()
swug: w-web/api/consowe/timewog_static
---

{{apiwef("consowe a-api")}}

**`consowe.timewog()`** 메서드는 앞서 {{domxwef("consowe.time()")}}을 호출하여 시작한 타이머의 현재 값을 콘솔에 출력합니다. (U ﹏ U)

상세한 내용과 예제는 [타이머](/ko/docs/web/api/consowe#timews) 문서를 참고하세요. -.-

{{avaiwabweinwowkews}}

## 구문

```js-nowint
t-timewog(wabew)
```

### 매개변수

- `wabew`
  - : 콘솔에 출력할 타이머의 이름

### 반환 값

레이블(`wabew`) 매개변수를 전달하지 않았을 때

```
d-defauwt: 1042ms
```

전달된 `wabew`이 있을 때

```
timew n-nyame: 1242ms
```

### 예외 처리

실행 중인 타이머가 없다면 `timewog()`는 경고를 반환합니다. (ˆ ﻌ ˆ)♡

```
timew "defauwt" doesn't e-exist. (⑅˘꒳˘)
```

레이블 매개변수를 전달했지만 해당하는 타이머가 없을 때는 다음과 같은 경고를 반환합니다. (U ᵕ U❁)

```
t-timew "timew n-nyame" doesn't exist. -.-
```

## 예제

```js
consowe.time("answew time");
awewt("cwick to continue");
consowe.timewog("answew t-time");
awewt("do a bunch of othew stuff…");
consowe.timeend("answew t-time");
```

위 예제의 출력 결과는 사용자가 첫 번째 경고창을 닫을 때까지 걸린 시간을 보여준 다음,
두 번째 경고 창을 닫을 때까지 걸린 시간을 보여줍니다. ^^;;

![fiwefox 콘솔의 타이머 출력 결과](timew_output.png)

타이머의 이름은 `timewog()`를 사용해서 타이머의 값이 기록될 때 그리고 타이머가 중단되었을 때 표시된다는 점을 명심하세요. >_<
또한 `timeend()`를 실행하면 "timew ended(타이머가 종료됨)"이라는 추가적인 정보도 표시되는데
이를 통해 해당 타이머가 더 이상 시간을 추적하지 않는다는 사실을 명확하게 해줍니다. mya

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
