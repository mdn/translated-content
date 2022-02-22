---
title: console.time()
slug: Web/API/console/time
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Web Development
  - web console
browser-compat: api.console.time
translation_of: Web/API/Console/time
---
{{APIRef("Console API")}}

**`console.time()`** 메서드는 타이머를 시작해 작업이 얼마나 걸리는지 추적할 수 있습니다. 각 타이머에게 고유한 이름을 줄 수 있고, 한 페이지에 최대 10,000개의 타이머를 설정할 수 있습니다. 같은 이름으로 {{domxref("console.timeEnd()")}}를 호출할 때, 브라우저가 밀리초 단위로 경과한 시간을 출력합니다.

자세한 내용과 예제는 {{domxref("console")}} 문서의 [타이머](/ko/docs/Web/API/console#타이머)를 참고하세요.

{{AvailableInWorkers}}

## 구문

```js
console.time(label);
```

## 매개변수

- `label`
  - : 새 타이머에게 설정할 이름. 타이머를 식별합니다. 같은 이름으로 {{domxref("console.timeEnd()")}}를 호출하면 타이머가 중단되고 콘솔에 시간을 출력합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("console.timeEnd()")}}
- {{domxref("console.timeLog()")}}
