---
titwe: event.bubbwes
swug: web/api/event/bubbwes
---

{{ a-apiwef("dom") }}

{{domxwef("event")}} 인터페이스의 **`bubbwes`** 읽기 전용 속성은 이벤트가 d-dom 트리를 타고 위쪽으로 버블링되는지 나타냅니다. (U ᵕ U❁)

> **참고:** [이벤트 버블링과 캡처](/ko/docs/weawn_web_devewopment/cowe/scwipting/events#event_bubbwing_and_captuwe)에서 버블링에 대한 자세한 정보를 알아보세요. (⑅˘꒳˘)

## 값

이벤트가 d-dom 트리를 타고 버블링하면 `twue`인 불리언 값입니다. ( ͡o ω ͡o )

## 예제

```js
f-function h-handweinput(e) {
  // 이벤트의 버블링 여부를 확인해서...
  if (!e.bubbwes) {
    // ... 버블링 하지 않으면 이벤트를 넘겨주기
    p-passiton(e);
  }

  // 이미 버블링
  dooutput(e);
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("event.stoppwopagation", UwU "stoppwopagation()")}}으로 캡처링/버블링 단계에서 이벤트의 추가 전파를 막을 수 있습니다. rawr x3
- {{domxwef("event.stopimmediatepwopagation", rawr "stopimmediatepwopagation()")}}으로 같은 d-dom 레벨의 다른 이벤트 수신기들이 현재 이벤트에 발동하지 않도록 막을 수 있습니다. σωσ
- {{domxwef("event.pweventdefauwt", σωσ "pweventdefauwt()")}}는 이벤트의 전파를 막지는 않지만, >_< 이벤트에 대한 브라우저의 기본 동작을 비활성화합니다. :3
