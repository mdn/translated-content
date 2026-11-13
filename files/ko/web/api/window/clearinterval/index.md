---
title: clearInterval() 전역 함수
slug: Web/API/Window/clearInterval
original_slug: Web/API/clearInterval
l10n:
  sourceCommit: 3ce863eafe2d98caca1b395691c47f255947a6e0
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

전역 **`clearInterval()`** 메서드는 이전에 {{domxref("setInterval", "setInterval()")}}을 호출하여 생성한 타이머에 의해 반복되는 작업을 취소합니다.
만약 제공된 매개변수가 이전에 설정된 작업을 식별하지 못한다면, 이 메서드는 아무 동작도 수행하지 않습니다.

## 구문

```js-nolint
clearInterval(intervalID)
```

### 매개변수

- `intervalID`
  - : 취소할 반복 작업에 대한 식별자입니다. 이 ID는 해당하는 `setTimeout()` 호출에 의해 반환되었습니다.

{{domxref("setInterval", "setInterval()")}} 과 {{domxref("setTimeout()")}}의 ID 풀이 공유된다는 사실에 주목할 필요가 있습니다. 이는 기술적으로 `clearInterval()`과 {{domxref("clearTimeout", "clearTimeout()")}}을 서로 교환하여 사용할 수 있다는 것을 의미합니다. 그러나 명확성을 위해 이렇게 사용하는 것은 피해야 합니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

[`setInterval()` examples](/ko/docs/Web/API/Window/setInterval#examples)를 확인하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("setTimeout()")}}
- {{domxref("setInterval()")}}
- {{domxref("clearTimeout()")}}
- {{domxref("Window.requestAnimationFrame()")}}
