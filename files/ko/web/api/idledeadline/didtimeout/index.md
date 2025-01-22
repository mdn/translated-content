---
title: IdleDeadline.didTimeout
slug: Web/API/IdleDeadline/didTimeout
---

{{APIRef("Background Tasks")}}

**{{domxref("IdleDeadline")}}** 인터페이스의 읽기 전용 속성(property)인 **`didTimeout`** 는 {{domxref("Window.requestIdleCallback()")}}이 호출될 때 지정된 timeout 간격이 만료되어, 유휴 콜백(idle callback)이 호출되는지 여부를 나타내는 Boolean 값 입니다.

`didTimeout` 이 `true` 면, `IdleDeadline` 객체의 {{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} 메서드는 대략 0을 반환합니다..

유휴 콜백은 사용자 에이전트가 충분한 유휴 시간을 사용할 수 없는 경우에도, 수행하려는 작업이 실제로 발생하는지 확인하기 위해 timeout 개념을 지원합니다. 브라우저가 너무 바빠서 시간을 허락하지 않더라도, 액션을 수행해야 하는 경우 콜백은 일반적으로 `didTimeout`값을 확인합니다. 필요로 하는 작업을 수행하거나, 이상적인 상황을 유지하기 위해 수행할 수 있는 최소한의 작업을 수행하도록 대응하고, 새로운 콜백을 예약하여 나머지 작업을 다시 시도하도록 해야합니다.

## Syntax

```js
var timedOut = IdleDeadline.didTimeout;
```

### Value

Boolean 으로, 콜백의 timeout 기간이 경과하여 콜백이 실행 중이면 `true` 입니다. 사용자 에이전트가 유휴 상태이고 콜백에 시간을 제공하고 있기 때문에 콜백이 실행 중이면, `false` 입니다.

## Example

[Cooperative Scheduling of Background Tasks API](/ko/docs/Web/API/Background_Tasks_API)의 [complete example](/ko/docs/Web/API/Background_Tasks_API#example) 를 참조하세요

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Collaborative Scheduling of Background Tasks](/ko/docs/Web/API/Background_Tasks_API)
- {{domxref("IdleDeadline")}}
- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
