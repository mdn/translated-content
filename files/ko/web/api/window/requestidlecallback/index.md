---
title: window.requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`window.requestIdleCallback()`** 메서드는 브라우저의 idle 상태에 호출될 함수를 대기열에 넣습니다. 이를 통해 개발자는 애니메이션 및 입력 응답과 같은 대기 시간이 중요한 이벤트에 영향을 미치지 않고 메인 이벤트 루프에서 백그라운드 및 우선 순위가 낮은 작업을 수행 할 수 있습니다. 함수는 일반적으로 first-in-first-out(FIFO) 순서로 호출됩니다. 하지만, `timeout` 옵션이 지정된 callback은 제한 시간이 지나기 전에 이들을 실행하기 위해 순서에 맞지 않게 호출될 수 있습니다.

idle callback 안에서 `requestIdleCallback()` 을 호출하여 다음 패스가 이벤트 루프를 통과하는 즉시 다른 callback을 예약할 수 있습니다.

> **참고:** 필수적인 작업이라면 `timeout` 옵션을 사용하는 것을 강력히 권장합니다. 사용하지 않을 경우 callback이 실행되기전에 몇 초 이상 소요될 수 있습니다.

## Syntax

```js
var handle = window.requestIdleCallback(callback[, options])
```

### Return value

실행 ID. {{domxref("window.cancelIdleCallback()")}} 메서드에 인자로 전달하여 callback 실행을 취소할 수 있습니다.

### Parameters

- `callback`
  - : 이벤트 루프가 유휴 상태가 될 때 호출되어야 하는 함수. callback 함수는 {{domxref("IdleDeadline")}} 객체를 인자로 전달받습으며 이 객체를 통해 타임아웃 기간이 만료되어 callback이 실행되었는지 여부를 알 수 있습니다.
- `options` {{optional_inline}}
  - : 선택적으로 사용가능한 option 설정. 현재는 하나의 property만 정의 되어 있습니다 :\* `timeout`: 만약`timeout` 이 지정되어 있고 양수일 경우, _timeout_ 밀리세컨드가 지날 때까지 callback이 실행되지 않았다면 성능상에 부정적인 영향을 미치는 위험이 있더라도 다음 idle 상태에 callback이 호출됩니다.

## Example

[Cooperative Scheduling of Background Tasks API](/ko/docs/Web/API/Background_Tasks_API) 포스트의 [complete example](/ko/docs/Web/API/Background_Tasks_API#Example) 예제를 참조해 주십시오.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}
- {{domxref("window.setTimeout()")}}
- {{domxref("window.setInterval()")}}
