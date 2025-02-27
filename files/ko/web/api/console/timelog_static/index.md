---
title: console.timeLog()
slug: Web/API/console/timeLog_static
---

{{APIRef("Console API")}}

**`console.timeLog()`** 메서드는 앞서 {{domxref("console.time()")}}을 호출하여 시작한 타이머의 현재 값을 콘솔에 출력합니다.

상세한 내용과 예제는 [타이머](/ko/docs/Web/API/console#timers) 문서를 참고하세요.

{{AvailableInWorkers}}

## 구문

```js-nolint
timeLog(label)
```

### 매개변수

- `label`
  - : 콘솔에 출력할 타이머의 이름

### 반환 값

레이블(`label`) 매개변수를 전달하지 않았을 때

```
default: 1042ms
```

전달된 `label`이 있을 때

```
timer name: 1242ms
```

### 예외 처리

실행 중인 타이머가 없다면 `timeLog()`는 경고를 반환합니다.

```
Timer "default" doesn't exist.
```

레이블 매개변수를 전달했지만 해당하는 타이머가 없을 때는 다음과 같은 경고를 반환합니다.

```
Timer "timer name" doesn't exist.
```

## 예제

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

위 예제의 출력 결과는 사용자가 첫 번째 경고창을 닫을 때까지 걸린 시간을 보여준 다음,
두 번째 경고 창을 닫을 때까지 걸린 시간을 보여줍니다.

![Firefox 콘솔의 타이머 출력 결과](timer_output.png)

타이머의 이름은 `timeLog()`를 사용해서 타이머의 값이 기록될 때 그리고 타이머가 중단되었을 때 표시된다는 점을 명심하세요.
또한 `timeEnd()`를 실행하면 "timer ended(타이머가 종료됨)"이라는 추가적인 정보도 표시되는데
이를 통해 해당 타이머가 더 이상 시간을 추적하지 않는다는 사실을 명확하게 해줍니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
