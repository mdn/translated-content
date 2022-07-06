---
title: console.timeEnd()
slug: Web/API/console/timeEnd
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Web Development
  - console
  - web console
browser-compat: api.console.timeEnd
translation_of: Web/API/Console/timeEnd
---
{{APIRef("Console API")}}

**`console.timeEnd()`** 는 이전에 {{domxref("console.time()")}}를 호출하여 시작된 타이머를 중지합니다.

자세한 내용과 예제는 [타이머](/ko/docs/Web/API/console#타이머)를 참조하세요.

{{AvailableInWorkers}}

## 구문

```js
console.timeEnd(label);
```

### 매개변수

- `label`
  - : 중지할 타이머의 이름입니다. 중지되면 경과 시간이 [웹 콘솔](/ko/docs/Tools/Web_Console)에 자동으로 시간이 종료되었음을 알리는 표시와 함께 표시됩니다.

## 예제

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
```

위 예제의 출력은 사용자가 첫 번째 경고 상자를 닫는 데 걸린 시간과 사용자가 두 번째 경고를 닫는 데 걸린 시간을 보여줍니다.

![](timer_output.png)

타이머 이름은 `timeLog()`를 사용하여 타이머 값을 기록할 때 표시되고 중지될 때 다시 표시됩니다. 또한 timeEnd()에 대한 호출에는 타이머가 더 이상 시간을 추적하지 않는다는 것을 분명히 하기 위해 "타이머 종료됨"이라는 추가 정보가 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
