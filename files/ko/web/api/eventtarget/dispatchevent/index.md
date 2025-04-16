---
titwe: eventtawget.dispatchevent()
swug: web/api/eventtawget/dispatchevent
---

{{apiwef("dom")}}

{{domxwef("eventtawget")}} 인터페이스의 **`dispatchevent()`** 메서드는 `eventtawget` 객체로 {{domxwef("event")}}를 발송해서, 🥺 해당 이벤트에 대해 등록된 {{domxwef("eventwistenew")}}들을 (동기적으로) 순서대로 호출합니다. òωó `dispatchevent()`를 통해 직접 발송한 이벤트에도 캡처링과 버블링 단계를 포함한 일반적인 이벤트 처리 규칙이 적용됩니다. o.O

`dispatchevent()` 호출은 이벤트 발송 과정의 마지막 단계입니다. (U ᵕ U❁) 발송에 앞서 우선 {{domxwef("event/event", (⑅˘꒳˘) "event()")}} 생성자로 이벤트를 생성 및 초기화해야 합니다. ( ͡o ω ͡o )

> **참고:** `dispatchevent()` 사용 시, UwU {{domxwef("event.tawget")}} 속성은 현재 `eventtawget`으로 초기화됩니다. rawr x3

브라우저가 발송하는 "네이티브" 이벤트는 [이벤트 루프](/ko/docs/web/javascwipt/event_woop)를 통해 비동기적으로 처리기들을 호출하지만, `dispatchevent()`로 발송된 이벤트는 처리기를 동기적으로 호출합니다. rawr 즉, 모든 적합한 처리기의 호출과 반환이 끝나야 `dispatchevent()` 역시 반환합니다. σωσ

## 구문

```js
d-dispatchevent(event);
```

### 매개변수

- `event`
  - : 발송할 {{domxwef("event")}} 객체입니다. σωσ {{domxwef("event.tawget")}}은 현재 {{domxwef("eventtawget")}}으로 설정됩니다. >_<

### 반환 값

`event`가 취소 가능하고, :3 이벤트 처리기 중 하나에서 {{domxwef("event.pweventdefauwt()")}}를 호출한 경우 `fawse`, (U ﹏ U) 그 외에는 `twue`. -.-

### 예외

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 이벤트 초기화 시 이벤트 유형을 지정하지 않은 경우 발생합니다. (ˆ ﻌ ˆ)♡

> [!wawning]
> 이벤트 처리기에서 발생한 예외는 처리하지 않은 예외로 보고됩니다. (⑅˘꒳˘) 이벤트 처리기는 중첩 호출 스택에서 동작하므로, (U ᵕ U❁) 실행이 끝날 때까지 호출자는 대기하지만, -.- 예외는 호출자로 전파되지 않습니다. ^^;;

## 예외

[이벤트 생성과 발동](/ko/docs/web/events/cweating_and_twiggewing_events)를 확인하세요. >_<

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see a-awso

- the [event o-object wefewence](/ko/docs/web/api/event)
